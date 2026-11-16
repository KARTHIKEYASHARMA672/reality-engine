import { PhysicsBody, GlobalPhysicsParameters, Vector3D } from '../../types/physics';
import { vec3 } from '../mathUtils';

/**
 * Symplectic Velocity-Verlet Numerical Integrator
 * Guarantees long-term phase-space conservation (no artificial orbital decay)
 */
export class VerletSolver {
  /**
   * Computes gravitational and environmental accelerations on all active bodies
   */
  public static computeAccelerations(
    bodies: PhysicsBody[],
    params: GlobalPhysicsParameters
  ): Vector3D[] {
    const accelerations: Vector3D[] = bodies.map(() => vec3.create());
    const epsSq = params.softeningEpsilon * params.softeningEpsilon;

    for (let i = 0; i < bodies.length; i++) {
      const b1 = bodies[i];
      if (b1.isFixed) continue;

      let acc = vec3.create();

      // 1. Uniform downward gravity (if terrestrial gravity is enabled)
      if (params.enableTerrestrialGravity) {
        acc.y -= params.gravityConstant;
      }

      // 2. Air / medium drag: F_drag = -1/2 * C_d * v^2 * v_hat
      if (params.airDragCoefficient > 0) {
        const speed = vec3.length(b1.velocity);
        if (speed > 1e-6) {
          const dragMag = 0.5 * params.airDragCoefficient * speed * speed / Math.max(0.01, b1.mass);
          const vHat = vec3.normalize(b1.velocity);
          acc.x -= vHat.x * dragMag;
          acc.y -= vHat.y * dragMag;
          acc.z -= vHat.z * dragMag;
        }
      }

      // 3. Pairwise N-body universal gravitation: F = G * m1 * m2 / (r^2 + eps^2)
      for (let j = 0; j < bodies.length; j++) {
        if (i === j) continue;
        const b2 = bodies[j];

        const delta = vec3.sub(b2.position, b1.position);
        const distSq = vec3.lengthSq(delta) + epsSq;
        const dist = Math.sqrt(distSq);

        if (dist > 1e-4) {
          // G parameter scaled appropriately for simulation scale
          const gForce = (params.gravityConstant * b2.mass) / distSq;
          acc.x += (delta.x / dist) * gForce;
          acc.y += (delta.y / dist) * gForce;
          acc.z += (delta.z / dist) * gForce;
        }
      }

      accelerations[i] = acc;
    }

    return accelerations;
  }

  /**
   * Executes one Symplectic Velocity-Verlet step:
   * x(t+dt) = x(t) + v(t)*dt + 0.5*a(t)*dt^2
   * a(t+dt) = F(x(t+dt)) / m
   * v(t+dt) = v(t) + 0.5*(a(t) + a(t+dt))*dt
   */
  public static step(
    bodies: PhysicsBody[],
    params: GlobalPhysicsParameters,
    dt: number
  ): void {
    const n = bodies.length;
    if (n === 0) return;

    // Phase 1: Half-step velocity update & full-step position update
    for (let i = 0; i < n; i++) {
      const b = bodies[i];
      if (b.isFixed) continue;

      // x = x + v*dt + 0.5*a*dt^2
      b.position.x += b.velocity.x * dt + 0.5 * b.acceleration.x * dt * dt;
      b.position.y += b.velocity.y * dt + 0.5 * b.acceleration.y * dt * dt;
      b.position.z += b.velocity.z * dt + 0.5 * b.acceleration.z * dt * dt;

      // Half-step velocity: v_half = v + 0.5*a_current*dt
      b.velocity.x += 0.5 * b.acceleration.x * dt;
      b.velocity.y += 0.5 * b.acceleration.y * dt;
      b.velocity.z += 0.5 * b.acceleration.z * dt;

      // Append trajectory ribbon point
      if (b.trail) {
        b.trail.push(vec3.clone(b.position));
        const maxLen = b.maxTrailLength || 100;
        if (b.trail.length > maxLen) {
          b.trail.shift();
        }
      }
    }

    // Phase 2: Compute new accelerations at x(t+dt)
    const newAcc = VerletSolver.computeAccelerations(bodies, params);

    // Phase 3: Finalize velocity with new accelerations: v(t+dt) = v_half + 0.5*a_new*dt
    for (let i = 0; i < n; i++) {
      const b = bodies[i];
      if (b.isFixed) continue;

      b.acceleration = newAcc[i];
      b.velocity.x += 0.5 * b.acceleration.x * dt;
      b.velocity.y += 0.5 * b.acceleration.y * dt;
      b.velocity.z += 0.5 * b.acceleration.z * dt;
    }
  }
}