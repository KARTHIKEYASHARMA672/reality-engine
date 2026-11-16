import {
  PhysicsBody,
  GlobalPhysicsParameters,
  TelemetryPoint,
  PhysicsDomain,
  Vector3D
} from '../types/physics';
import { vec3 } from './mathUtils';
import { VerletSolver } from './solvers/verlet';
import { CollisionSolver } from './solvers/collisions';
import { LorentzSolver } from './solvers/lorentz';
import { FluidSolver } from './solvers/fluids';

export const DEFAULT_PHYSICS_PARAMS: GlobalPhysicsParameters = {
  gravityConstant: 9.81,
  enableTerrestrialGravity: false,
  airDragCoefficient: 0.02,
  fluidDensity: 1000,
  fluidViscosity: 0.05,
  electricPermittivity: 8.9875e4,
  magneticFieldStrength: { x: 0, y: 0, z: 2.0 },
  electricFieldStrength: { x: 0, y: 0, z: 0 },
  globalRestitution: 0.85,
  globalFriction: 0.1,
  softeningEpsilon: 0.08,
  subSteps: 8,
  domain: 'mechanics',
};

export const DEFAULT_BOUNDS = {
  minX: -10,
  maxX: 10,
  minY: 0,
  maxY: 12,
  minZ: -10,
  maxZ: 10,
};

export class PhysicsEngine {
  public bodies: PhysicsBody[] = [];
  public params: GlobalPhysicsParameters = { ...DEFAULT_PHYSICS_PARAMS };
  public bounds = { ...DEFAULT_BOUNDS };
  public telemetryHistory: TelemetryPoint[] = [];
  public time = 0;
  public totalEnergyDissipated = 0;
  public maxHistoryLength = 120;

  constructor() {
    this.resetTelemetry();
  }

  public setDomain(domain: PhysicsDomain): void {
    this.params.domain = domain;
    if (domain === 'electromagnetism') {
      this.params.enableTerrestrialGravity = false;
      this.params.gravityConstant = 0;
      this.params.magneticFieldStrength = { x: 0, y: 0, z: 2.5 };
    } else if (domain === 'fluids') {
      this.params.enableTerrestrialGravity = true;
      this.params.gravityConstant = 9.81;
      this.params.fluidDensity = 1000;
      this.params.fluidViscosity = 0.05;
    } else if (domain === 'collisions') {
      this.params.enableTerrestrialGravity = true;
      this.params.gravityConstant = 9.81;
    } else {
      this.params.enableTerrestrialGravity = false;
      this.params.gravityConstant = 8.0;
    }
  }

  public addBody(body: PhysicsBody): void {
    this.bodies.push(body);
  }

  public removeBody(id: string): void {
    this.bodies = this.bodies.filter(b => b.id !== id);
  }

  public clear(): void {
    this.bodies = [];
    this.time = 0;
    this.totalEnergyDissipated = 0;
    this.telemetryHistory = [];
  }

  public resetTelemetry(): void {
    this.telemetryHistory = [];
    this.totalEnergyDissipated = 0;
  }

  public step(dt: number): void {
    if (this.bodies.length === 0) return;

    const subSteps = Math.max(1, this.params.subSteps);
    const subDt = dt / subSteps;

    for (let s = 0; s < subSteps; s++) {
      switch (this.params.domain) {
        case 'electromagnetism':
          LorentzSolver.step(this.bodies, this.params, subDt);
          break;

        case 'fluids': {
          const fluidParticles = this.bodies.filter(b => b.type === 'fluid_particle');
          const rigidBodies = this.bodies.filter(b => b.type !== 'fluid_particle');
          
          FluidSolver.applyBuoyancyAndDrag(rigidBodies, this.params, 4.0);
          if (fluidParticles.length > 0) {
            FluidSolver.stepFluidParticles(fluidParticles, this.params, subDt, this.bounds);
          }
          if (rigidBodies.length > 0) {
            VerletSolver.step(rigidBodies, this.params, subDt);
          }
          break;
        }

        case 'mechanics':
        case 'collisions':
        default:
          VerletSolver.step(this.bodies, this.params, subDt);
          break;
      }

      const events = CollisionSolver.resolveCollisions(this.bodies, this.params, this.bounds);
      for (const ev of events) {
        this.totalEnergyDissipated += ev.energyDissipated;
      }
    }

    this.time += dt;
    this.recordTelemetry();
  }

  public recordTelemetry(): void {
    let ke = 0;
    let pe = 0;
    let momentum = vec3.create();
    let maxV = 0;

    const n = this.bodies.length;
    for (let i = 0; i < n; i++) {
      const b = this.bodies[i];
      const speed = vec3.length(b.velocity);
      if (speed > maxV) maxV = speed;

      ke += 0.5 * b.mass * speed * speed;

      if (this.params.domain !== 'electromagnetism') {
        const height = Math.max(0, b.position.y - this.bounds.minY);
        pe += b.mass * this.params.gravityConstant * height;
      }

      if (this.params.domain === 'electromagnetism' && Math.abs(b.charge) > 1e-9) {
        for (let j = i + 1; j < n; j++) {
          const b2 = this.bodies[j];
          if (Math.abs(b2.charge) > 1e-9) {
            const r = Math.max(0.1, vec3.distance(b.position, b2.position));
            pe += (this.params.electricPermittivity * b.charge * b2.charge) / r;
          }
        }
      }

      momentum = vec3.add(momentum, vec3.scale(b.velocity, b.mass));
    }

    const totalE = ke + pe + this.totalEnergyDissipated;
    const pMag = vec3.length(momentum);

    const point: TelemetryPoint = {
      time: Math.round(this.time * 100) / 100,
      kineticEnergy: Math.max(0, Math.round(ke * 100) / 100),
      potentialEnergy: Math.max(0, Math.round(pe * 100) / 100),
      thermalEnergy: Math.max(0, Math.round(this.totalEnergyDissipated * 100) / 100),
      totalEnergy: Math.max(0, Math.round(totalE * 100) / 100),
      linearMomentumMagnitude: Math.round(pMag * 100) / 100,
      maxVelocity: Math.round(maxV * 100) / 100,
      activeParticlesCount: n,
    };

    this.telemetryHistory.push(point);
    if (this.telemetryHistory.length > this.maxHistoryLength) {
      this.telemetryHistory.shift();
    }
  }
}
