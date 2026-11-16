import { PhysicsBody, GlobalPhysicsParameters, Vector3D } from '../../types/physics';
import { vec3 } from '../mathUtils';

export interface CollisionEvent {
  bodyAId: string;
  bodyBId: string;
  relativeVelocity: number;
  energyDissipated: number;
  contactPoint: Vector3D;
}

export class CollisionSolver {
  /**
   * Resolves pair-wise sphere collisions and boundary collisions
   * Uses impulse-momentum formulation:
   * J = -(1+e) * (v_rel . n) / (1/m1 + 1/m2)
   */
  public static resolveCollisions(
    bodies: PhysicsBody[],
    params: GlobalPhysicsParameters,
    bounds: { minX: number; maxX: number; minY: number; maxY: number; minZ: number; maxZ: number }
  ): CollisionEvent[] {
    const events: CollisionEvent[] = [];
    const n = bodies.length;

    // 1. Sphere-Sphere Pairwise Collisions
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const b1 = bodies[i];
        const b2 = bodies[j];

        // If both are fixed, no dynamics
        if (b1.isFixed && b2.isFixed) continue;

        const delta = vec3.sub(b2.position, b1.position);
        const distSq = vec3.lengthSq(delta);
        const minDist = b1.radius + b2.radius;

        if (distSq < minDist * minDist && distSq > 1e-8) {
          const dist = Math.sqrt(distSq);
          const normal = vec3.scale(delta, 1 / dist); // Collision normal pointing from b1 to b2

          // Relative velocity: v_rel = v2 - v1
          const vRel = vec3.sub(b2.velocity, b1.velocity);
          const velAlongNormal = vec3.dot(vRel, normal);

          // Only resolve if bodies are approaching each other
          if (velAlongNormal < 0) {
            // Effective restitution (minimum of both bodies or global parameter)
            const e = Math.min(b1.restitution, b2.restitution, params.globalRestitution);

            // Inverse masses
            const invM1 = b1.isFixed ? 0 : 1 / b1.mass;
            const invM2 = b2.isFixed ? 0 : 1 / b2.mass;
            const invMassSum = invM1 + invM2;

            if (invMassSum > 0) {
              // Kinetic Energy before collision along normal
              const keBefore = 0.5 * (b1.isFixed ? 0 : b1.mass * Math.pow(vec3.dot(b1.velocity, normal), 2)) +
                               0.5 * (b2.isFixed ? 0 : b2.mass * Math.pow(vec3.dot(b2.velocity, normal), 2));

              // Impulse magnitude: J = -(1+e) * v_rel_norm / sum(1/m)
              const impulseMag = -(1 + e) * velAlongNormal / invMassSum;
              const impulse = vec3.scale(normal, impulseMag);

              // Apply impulse to velocities
              if (!b1.isFixed) {
                b1.velocity = vec3.sub(b1.velocity, vec3.scale(impulse, invM1));
              }
              if (!b2.isFixed) {
                b2.velocity = vec3.add(b2.velocity, vec3.scale(impulse, invM2));
              }

              // Positional separation to prevent sinking / sticking
              const penetration = minDist - dist;
              const percent = 0.8; // Positional correction percentage
              const correction = vec3.scale(normal, (penetration / invMassSum) * percent);
              if (!b1.isFixed) {
                b1.position = vec3.sub(b1.position, vec3.scale(correction, invM1));
              }
              if (!b2.isFixed) {
                b2.position = vec3.add(b2.position, vec3.scale(correction, invM2));
              }

              // Kinetic Energy after collision along normal
              const keAfter = 0.5 * (b1.isFixed ? 0 : b1.mass * Math.pow(vec3.dot(b1.velocity, normal), 2)) +
                              0.5 * (b2.isFixed ? 0 : b2.mass * Math.pow(vec3.dot(b2.velocity, normal), 2));

              const energyDissipated = Math.max(0, keBefore - keAfter);

              events.push({
                bodyAId: b1.id,
                bodyBId: b2.id,
                relativeVelocity: Math.abs(velAlongNormal),
                energyDissipated,
                contactPoint: vec3.add(b1.position, vec3.scale(delta, b1.radius / minDist)),
              });
            }
          }
        }
      }
    }

    // 2. Boundary / Floor / Wall Collisions
    for (let i = 0; i < n; i++) {
      const b = bodies[i];
      if (b.isFixed) continue;

      const e = Math.min(b.restitution, params.globalRestitution);

      // Floor (minY)
      if (b.position.y - b.radius < bounds.minY) {
        b.position.y = bounds.minY + b.radius;
        if (b.velocity.y < 0) {
          b.velocity.y = -b.velocity.y * e;
          // Apply friction to tangential velocity
          b.velocity.x *= (1 - b.friction);
          b.velocity.z *= (1 - b.friction);
        }
      }

      // Ceiling (maxY)
      if (b.position.y + b.radius > bounds.maxY) {
        b.position.y = bounds.maxY - b.radius;
        if (b.velocity.y > 0) b.velocity.y = -b.velocity.y * e;
      }

      // X Walls
      if (b.position.x - b.radius < bounds.minX) {
        b.position.x = bounds.minX + b.radius;
        if (b.velocity.x < 0) b.velocity.x = -b.velocity.x * e;
      } else if (b.position.x + b.radius > bounds.maxX) {
        b.position.x = bounds.maxX - b.radius;
        if (b.velocity.x > 0) b.velocity.x = -b.velocity.x * e;
      }

      // Z Walls
      if (b.position.z - b.radius < bounds.minZ) {
        b.position.z = bounds.minZ + b.radius;
        if (b.velocity.z < 0) b.velocity.z = -b.velocity.z * e;
      } else if (b.position.z + b.radius > bounds.maxZ) {
        b.position.z = bounds.maxZ - b.radius;
        if (b.velocity.z > 0) b.velocity.z = -b.velocity.z * e;
      }
    }

    return events;
  }
}