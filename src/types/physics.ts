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
  mass: number; // in kg
  charge: number; // in Coulombs (or arbitrary micro-Coulombs)
  radius: number; // in meters
  restitution: number; // coefficient of restitution e (0.0 to 1.0)
  friction: number; // friction coefficient mu
  color: string;
  isFixed: boolean; // if true, anchored in 3D space
  trail: Vector3D[]; // decaying history of positions for trajectory ribbon
  maxTrailLength?: number;
  density?: number; // for fluid buoyancy
  submergedRatio?: number; // 0 to 1
  metadata?: Record<string, any>;
}

export interface ElectricFieldPoint {
  position: Vector3D;
  vector: Vector3D;
  magnitude: number;
}

export interface MagneticField {
  strength: Vector3D; // uniform B field [Bx, By, Bz] in Tesla
  gradient?: number;
}

export interface GlobalPhysicsParameters {
  gravityConstant: number; // G or g (default 9.81 m/s^2 downwards, or G=6.674e-11 for celestial)
  enableTerrestrialGravity?: boolean; // downward uniform gravity (false for orbital celestial mechanics)
  airDragCoefficient: number; // drag damping
  fluidDensity: number; // rho in kg/m^3 (e.g. 1000 for water)
  fluidViscosity: number; // eta in Pa*s
  electricPermittivity: number; // k_e Coulomb constant
  magneticFieldStrength: Vector3D; // B vector in Tesla
  electricFieldStrength: Vector3D; // E vector in N/C or V/m
  globalRestitution: number; // default e
  globalFriction: number; // default mu
  softeningEpsilon: number; // to prevent 1/r^2 singularity at r -> 0
  subSteps: number; // sub-steps per frame (default 8)
  domain: PhysicsDomain;
  temperature?: number; // Kelvin (for thermodynamics domain, e.g. 300K)
  chamberHeight?: number; // Piston height in meters (for gas compression)
  waveFrequency?: number; // Wave frequency in Hz
  slitSeparation?: number; // Slit separation distance in meters
  quantumPlanckH?: number; // Scaled Planck constant for de Broglie visualizer
  lightSpeedC?: number; // Scaled speed of light for relativistic visualizer
}

export interface TelemetryPoint {
  time: number;
  kineticEnergy: number;
  potentialEnergy: number;
  thermalEnergy: number; // dissipated by friction / inelastic collisions
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
    domain: PhysicsDomain;
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
