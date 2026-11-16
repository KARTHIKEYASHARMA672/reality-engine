import { PhysicsBody, GlobalPhysicsParameters, Vector3D } from '../../types/physics';
import { vec3 } from '../mathUtils';

export class FluidSolver {
  /**
   * Applies Archimedes Buoyancy and Stokes Viscous Drag to submerged rigid bodies
   * F_buoyant = rho_fluid * V_submerged * g (upwards)
   * F_drag = -6 * pi * eta * radius * v (opposing motion)
   */
  public static applyBuoyancyAndDrag(
    bodies: PhysicsBody[],
    params: GlobalPhysicsParameters,
    fluidSurfaceY = 0.0
  ): void {
    const rhoFluid = params.fluidDensity; // e.g. 1000 kg/m^3
    const eta = params.fluidViscosity; // e.g. 0.05 to 1.0 Pa*s
    const g = params.gravityConstant;

    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      if (b.isFixed || b.type === 'fluid_particle') continue;

      // Check immersion depth
      const topY = b.position.y + b.radius;
      const bottomY = b.position.y - b.radius;

      let submergedRatio = 0;
      if (topY <= fluidSurfaceY) {
        // Fully submerged
        submergedRatio = 1.0;
      } else if (bottomY < fluidSurfaceY) {
        // Partially submerged
        submergedRatio = (fluidSurfaceY - bottomY) / (2 * b.radius);
        submergedRatio = Math.max(0, Math.min(1, submergedRatio));
      }

      b.submergedRatio = submergedRatio;

      if (submergedRatio > 0) {
        // Volume of sphere: V = 4/3 * pi * r^3
        const totalVolume = (4 / 3) * Math.PI * Math.pow(b.radius, 3);
        const submergedVolume = totalVolume * submergedRatio;

        // Upward buoyant force: F_b = rho * V * g
        const buoyantForce = rhoFluid * submergedVolume * g;
        const buoyantAccY = buoyantForce / Math.max(0.01, b.mass);

        b.acceleration.y += buoyantAccY;

        // Stokes viscous drag: F_drag = -6 * pi * eta * r * v
        const dragFactor = 6 * Math.PI * eta * b.radius * submergedRatio / Math.max(0.01, b.mass);
        b.acceleration.x -= b.velocity.x * dragFactor;
        b.acceleration.y -= b.velocity.y * dragFactor;
        b.acceleration.z -= b.velocity.z * dragFactor;
      }
    }
  }

  /**
   * SPH (Smoothed Particle Hydrodynamics) particle simulation
   * Simulates fluid particles with pressure repulsive force and viscosity smoothing
   */
  public static stepFluidParticles(
    particles: PhysicsBody[],
    params: GlobalPhysicsParameters,
    dt: number,
    bounds: { minX: number; maxX: number; minY: number; maxY: number; minZ: number; maxZ: number }
  ): void {
    const smoothingRadius = 0.6; // h
    const hSq = smoothingRadius * smoothingRadius;
    const restDensity = 1000;
    const stiffness = 80; // pressure constant k
    const viscosity = params.fluidViscosity * 50;

    const n = particles.length;
    if (n === 0) return;

    // 1. Calculate density for each fluid particle: rho_i = sum_j m_j * W(r_ij, h)
    const densities: number[] = new Array(n).fill(restDensity);
    for (let i = 0; i < n; i++) {
      let density = 0;
      for (let j = 0; j < n; j++) {
        const delta = vec3.sub(particles[j].position, particles[i].position);
        const rSq = vec3.lengthSq(delta);
        if (rSq < hSq) {
          // Poly6 kernel: (h^2 - r^2)^3
          const factor = hSq - rSq;
          density += particles[j].mass * (315 / (64 * Math.PI * Math.pow(smoothingRadius, 9))) * factor * factor * factor;
        }
      }
      densities[i] = Math.max(restDensity * 0.5, density);
    }

    // 2. Calculate pressure & viscosity forces
    for (let i = 0; i < n; i++) {
      const p1 = particles[i];
      let fPressure = vec3.create();
      let fViscosity = vec3.create();

      const pressure1 = stiffness * (densities[i] - restDensity);

      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const p2 = particles[j];
        const delta = vec3.sub(p2.position, p1.position);
        const r = vec3.length(delta);

        if (r < smoothingRadius && r > 1e-4) {
          const pressure2 = stiffness * (densities[j] - restDensity);
          const avgPressure = (pressure1 + pressure2) / (2 * densities[j]);
          
          // Spiky gradient kernel for pressure
          const gradW = -(45 / (Math.PI * Math.pow(smoothingRadius, 6))) * Math.pow(smoothingRadius - r, 2);
          const dir = vec3.scale(delta, 1 / r);
          fPressure = vec3.add(fPressure, vec3.scale(dir, -avgPressure * gradW * p2.mass));

          // Viscosity Laplacian kernel
          const lapW = (45 / (Math.PI * Math.pow(smoothingRadius, 6))) * (smoothingRadius - r);
          const vRel = vec3.sub(p2.velocity, p1.velocity);
          fViscosity = vec3.add(fViscosity, vec3.scale(vRel, (viscosity / densities[j]) * lapW * p2.mass));
        }
      }

      // Environmental gravity
      const fGravity = vec3.create(0, -params.gravityConstant * p1.mass, 0);

      // Total acceleration a = (F_press + F_visc + F_grav) / rho
      const totalF = vec3.add(vec3.add(fPressure, fViscosity), fGravity);
      const acc = vec3.scale(totalF, 1 / densities[i]);

      p1.velocity = vec3.add(p1.velocity, vec3.scale(acc, dt));
      p1.position = vec3.add(p1.position, vec3.scale(p1.velocity, dt));

      // Container boundary bounce
      const damping = 0.5;
      if (p1.position.y < bounds.minY) {
        p1.position.y = bounds.minY;
        p1.velocity.y = -p1.velocity.y * damping;
      }
      if (p1.position.x < bounds.minX) {
        p1.position.x = bounds.minX;
        p1.velocity.x = -p1.velocity.x * damping;
      } else if (p1.position.x > bounds.maxX) {
        p1.position.x = bounds.maxX;
        p1.velocity.x = -p1.velocity.x * damping;
      }
      if (p1.position.z < bounds.minZ) {
        p1.position.z = bounds.minZ;
        p1.velocity.z = -p1.velocity.z * damping;
      } else if (p1.position.z > bounds.maxZ) {
        p1.position.z = bounds.maxZ;
        p1.velocity.z = -p1.velocity.z * damping;
      }
    }
  }
}
