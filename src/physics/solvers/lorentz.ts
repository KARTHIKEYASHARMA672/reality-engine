import { PhysicsBody, GlobalPhysicsParameters, Vector3D } from '../../types/physics';
import { vec3 } from '../mathUtils';

export class LorentzSolver {
  /**
   * Computes the electric field at a given position from all charges in the scene + external uniform field
   * E = sum ( k_e * q_i * (r - r_i) / |r - r_i|^3 ) + E_ext
   */
  public static computeElectricField(
    pos: Vector3D,
    bodies: PhysicsBody[],
    params: GlobalPhysicsParameters,
    ignoreBodyId?: string
  ): Vector3D {
    let E = vec3.clone(params.electricFieldStrength);
    const k_e = params.electricPermittivity;
    const epsSq = params.softeningEpsilon * params.softeningEpsilon;

    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      if (b.id === ignoreBodyId || Math.abs(b.charge) < 1e-9) continue;

      const r = vec3.sub(pos, b.position);
      const distSq = vec3.lengthSq(r) + epsSq;
      const dist = Math.sqrt(distSq);

      if (dist > 1e-4) {
        const fieldMag = (k_e * b.charge) / distSq;
        E = vec3.add(E, vec3.scale(r, fieldMag / dist));
      }
    }

    return E;
  }

  /**
   * Evaluates Lorentz acceleration a(v, x) = (q/m) * (E(x) + v x B)
   */
  private static evaluateAcceleration(
    b: PhysicsBody,
    pos: Vector3D,
    vel: Vector3D,
    bodies: PhysicsBody[],
    params: GlobalPhysicsParameters
  ): Vector3D {
    if (Math.abs(b.charge) < 1e-12 || b.mass <= 0) {
      return vec3.create();
    }

    // 1. Electric force F_E = q * E(x)
    const E = LorentzSolver.computeElectricField(pos, bodies, params, b.id);
    const qOverM = b.charge / b.mass;
    const aE = vec3.scale(E, qOverM);

    // 2. Magnetic force F_B = q * (v x B)
    const vCrossB = vec3.cross(vel, params.magneticFieldStrength);
    const aB = vec3.scale(vCrossB, qOverM);

    return vec3.add(aE, aB);
  }

  /**
   * 4th-Order Runge-Kutta (RK4) Integrator for Lorentz Force
   * Extremely stable for circular cyclotron trajectories and helical spirals
   */
  public static step(
    bodies: PhysicsBody[],
    params: GlobalPhysicsParameters,
    dt: number
  ): void {
    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      if (b.isFixed || Math.abs(b.charge) < 1e-12) continue;

      const x0 = b.position;
      const v0 = b.velocity;

      // k1
      const a1 = LorentzSolver.evaluateAcceleration(b, x0, v0, bodies, params);
      const dx1 = v0;
      const dv1 = a1;

      // k2 (at t + dt/2)
      const x2 = vec3.add(x0, vec3.scale(dx1, dt * 0.5));
      const v2 = vec3.add(v0, vec3.scale(dv1, dt * 0.5));
      const a2 = LorentzSolver.evaluateAcceleration(b, x2, v2, bodies, params);
      const dx2 = v2;
      const dv2 = a2;

      // k3 (at t + dt/2)
      const x3 = vec3.add(x0, vec3.scale(dx2, dt * 0.5));
      const v3 = vec3.add(v0, vec3.scale(dv2, dt * 0.5));
      const a3 = LorentzSolver.evaluateAcceleration(b, x3, v3, bodies, params);
      const dx3 = v3;
      const dv3 = a3;

      // k4 (at t + dt)
      const x4 = vec3.add(x0, vec3.scale(dx3, dt));
      const v4 = vec3.add(v0, vec3.scale(dv3, dt));
      const a4 = LorentzSolver.evaluateAcceleration(b, x4, v4, bodies, params);
      const dx4 = v4;
      const dv4 = a4;

      // RK4 combination: y_new = y0 + (dt/6)*(k1 + 2*k2 + 2*k3 + k4)
      const deltaX = vec3.scale(
        vec3.add(vec3.add(dx1, vec3.scale(dx2, 2)), vec3.add(vec3.scale(dx3, 2), dx4)),
        dt / 6
      );
      const deltaV = vec3.scale(
        vec3.add(vec3.add(dv1, vec3.scale(dv2, 2)), vec3.add(vec3.scale(dv3, 2), dv4)),
        dt / 6
      );

      b.position = vec3.add(b.position, deltaX);
      b.velocity = vec3.add(b.velocity, deltaV);
      b.acceleration = a4;

      // Trajectory trail
      if (b.trail) {
        b.trail.push(vec3.clone(b.position));
        const maxLen = b.maxTrailLength || 120;
        if (b.trail.length > maxLen) {
          b.trail.shift();
        }
      }
    }
  }
}
