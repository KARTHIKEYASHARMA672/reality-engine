export type PhysicsDomain = 'mechanics' | 'collisions' | 'electromagnetism' | 'fluids' | 'thermodynamics' | 'modern';

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

export interface PhysicsBody {
  id: string;
  name: string;
  type: 'sphere' | 'charge' | 'fluid_particle' | 'barrier' | 'emitter' | 'sensor';
  position: Vector3D;
  velocity: Vector3D;
  acceleration: Vector3D;
  mass: number;
  charge: number;
  radius: number;
  restitution: number;
  friction: number;
  color: string;
  isFixed: boolean;
  trail: Vector3D[];
  maxTrailLength?: number;
  density?: number;
  submergedRatio?: number;
  metadata?: Record<string, any>;
}

export interface GlobalPhysicsParameters {
  gravityConstant: number;
  enableTerrestrialGravity?: boolean;
  airDragCoefficient: number;
  fluidDensity: number;
  fluidViscosity: number;
  electricPermittivity: number;
  magneticFieldStrength: Vector3D;
  electricFieldStrength: Vector3D;
  globalRestitution: number;
  globalFriction: number;
  softeningEpsilon: number;
  subSteps: number;
  domain: PhysicsDomain;
}

export interface TelemetryPoint {
  time: number;
  kineticEnergy: number;
  potentialEnergy: number;
  thermalEnergy: number;
  totalEnergy: number;
  linearMomentumMagnitude: number;
  maxVelocity: number;
  activeParticlesCount: number;
  customMetricLabel?: string;
  customMetricValue?: number;
}

export interface PhysicsConcept {
  id: string;
  title: string;
  branch: PhysicsDomain;
  tag: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Advanced';
  formulaLatex: string;
  summary: string;
  derivation: string;
  realWorldApplication: string;
  variables: { symbol: string; label: string; unit: string }[];
  presetConfig: {
    domain: 'mechanics' | 'collisions' | 'electromagnetism' | 'fluids';
    cameraPosition: [number, number, number];
    timeDilation: number;
    parameters: Record<string, number>;
    description: string;
    apparatusType: string;
    initialBodies?: Partial<PhysicsBody>[];
  };
}

export interface GuidedLabExperiment {
  id: string;
  title: string;
  subtitle: string;
  domain: PhysicsDomain;
  historicalContext: string;
  scientificObjective: string;
  theoreticalFormula: string;
  procedureSteps: string[];
  expectedOutcome: string;
  presetConceptId: string;
}
