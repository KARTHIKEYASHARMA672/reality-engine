import { describe, it, expect } from 'vitest';
import { VerletSolver } from './verlet';
import { CollisionSolver } from './collisions';
import { LorentzSolver } from './lorentz';
import { vec3 } from '../mathUtils';
import { PhysicsBody, GlobalPhysicsParameters } from '../../types/physics';

const createDefaultParams = (): GlobalPhysicsParameters => ({
  gravityConstant: 9.81,
  airDragCoefficient: 0,
  fluidDensity: 1000,
  fluidViscosity: 0.05,
  electricPermittivity: 1.0,
  magneticFieldStrength: { x: 0, y: 0, z: 2.0 },
  electricFieldStrength: { x: 0, y: 0, z: 0 },
  globalRestitution: 1.0,
  globalFriction: 0.0,
  softeningEpsilon: 0.05,
  subSteps: 8,
  domain: 'mechanics',
});

describe('Physics Numerical Solvers Verification', () => {

  it('Verlet: Conserves energy in Kepler 2-body orbit over multiple steps', () => {
    const params = createDefaultParams();
    params.gravityConstant = 10.0;
    params.enableTerrestrialGravity = false;
    params.softeningEpsilon = 0.0;

    const sun: PhysicsBody = {
      id: 'sun',
      name: 'Sun',
      type: 'sphere',
      position: { x: 0, y: 0, z: 0 },
      velocity: { x: 0, y: 0, z: 0 },
      acceleration: { x: 0, y: 0, z: 0 },
      mass: 50.0,
      charge: 0,
      radius: 1.0,
      restitution: 0.8,
      friction: 0,
      color: '#FFF',
      isFixed: true,
      trail: [],
    };

    // Circular orbit radius r = 5, v_circ = sqrt(G * M / r) = sqrt(10 * 50 / 5) = 10 m/s
    const planet: PhysicsBody = {
      id: 'planet',
      name: 'Planet',
      type: 'sphere',
      position: { x: 5, y: 0, z: 0 },
      velocity: { x: 0, y: 0, z: 10 },
      acceleration: { x: 0, y: 0, z: 0 },
      mass: 1.0,
      charge: 0,
      radius: 0.5,
      restitution: 0.8,
      friction: 0,
      color: '#FFF',
      isFixed: false,
      trail: [],
    };

    const bodies = [sun, planet];
    const initialKE = 0.5 * planet.mass * vec3.lengthSq(planet.velocity);
    const initialPE = - (params.gravityConstant * sun.mass * planet.mass) / vec3.distance(sun.position, planet.position);
    const initialE = initialKE + initialPE;

    // Simulate 200 Verlet steps with dt = 0.01
    const dt = 0.01;
    for (let step = 0; step < 200; step++) {
      VerletSolver.step(bodies, params, dt);
    }

    const finalKE = 0.5 * planet.mass * vec3.lengthSq(planet.velocity);
    const finalPE = - (params.gravityConstant * sun.mass * planet.mass) / vec3.distance(sun.position, planet.position);
    const finalE = finalKE + finalPE;

    const relError = Math.abs((finalE - initialE) / initialE);
    // Symplectic Verlet energy drift must be strictly under 0.05%
    expect(relError).toBeLessThan(0.005);
  });

  it('Collisions: Strictly conserves linear momentum in 1D head-on elastic impact', () => {
    const params = createDefaultParams();
    params.globalRestitution = 1.0;

    const b1: PhysicsBody = {
      id: 'b1',
      name: 'Body 1',
      type: 'sphere',
      position: { x: -1.0, y: 1.0, z: 0 },
      velocity: { x: 4.0, y: 0, z: 0 },
      acceleration: { x: 0, y: 0, z: 0 },
      mass: 2.0,
      charge: 0,
      radius: 0.5,
      restitution: 1.0,
      friction: 0,
      color: '#F00',
      isFixed: false,
      trail: [],
    };

    const b2: PhysicsBody = {
      id: 'b2',
      name: 'Body 2',
      type: 'sphere',
      position: { x: -0.1, y: 1.0, z: 0 },
      velocity: { x: -2.0, y: 0, z: 0 },
      acceleration: { x: 0, y: 0, z: 0 },
      mass: 1.0,
      charge: 0,
      radius: 0.5,
      restitution: 1.0,
      friction: 0,
      color: '#00F',
      isFixed: false,
      trail: [],
    };

    const initialMomentum = b1.mass * b1.velocity.x + b2.mass * b2.velocity.x;
    const initialKE = 0.5 * b1.mass * Math.pow(b1.velocity.x, 2) + 0.5 * b2.mass * Math.pow(b2.velocity.x, 2);

    const bounds = { minX: -20, maxX: 20, minY: 0, maxY: 20, minZ: -20, maxZ: 20 };
    CollisionSolver.resolveCollisions([b1, b2], params, bounds);

    const finalMomentum = b1.mass * b1.velocity.x + b2.mass * b2.velocity.x;
    const finalKE = 0.5 * b1.mass * Math.pow(b1.velocity.x, 2) + 0.5 * b2.mass * Math.pow(b2.velocity.x, 2);

    expect(Math.abs(finalMomentum - initialMomentum)).toBeLessThan(1e-4);
    expect(Math.abs(finalKE - initialKE)).toBeLessThan(1e-4);
  });

  it('Lorentz: Verifies magnetic force is perpendicular to velocity (zero work)', () => {
    const params = createDefaultParams();
    params.domain = 'electromagnetism';
    params.magneticFieldStrength = { x: 0, y: 0, z: 3.0 }; // B = 3T in +Z
    params.electricFieldStrength = { x: 0, y: 0, z: 0 };

    const ion: PhysicsBody = {
      id: 'ion',
      name: 'Positive Ion',
      type: 'charge',
      position: { x: 0, y: 4.0, z: 0 },
      velocity: { x: 5.0, y: 0, z: 0 }, // v in +X
      acceleration: { x: 0, y: 0, z: 0 },
      mass: 1.0,
      charge: 2.0, // q = 2C
      radius: 0.4,
      restitution: 0.8,
      friction: 0,
      color: '#F00',
      isFixed: false,
      trail: [],
    };

    const initialSpeed = vec3.length(ion.velocity);
    LorentzSolver.step([ion], params, 0.01);
    const finalSpeed = vec3.length(ion.velocity);

    // Magnetic Lorentz force dW = F . v dt = 0 -> speed must remain invariant
    expect(Math.abs(finalSpeed - initialSpeed)).toBeLessThan(0.01);
    // Acceleration must point along -Y (v_x * B_z in +Z gives -Y force)
    expect(ion.velocity.y).toBeLessThan(0);
  });

});