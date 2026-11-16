import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PhysicsEngine } from './physics/engine';
import { PhysicsBody, PhysicsDomain, PhysicsConcept, GuidedLabExperiment } from './types/physics';
import { PHYSICS_CONCEPTS } from './data/physicsConcepts';
import { HeaderBar } from './components/HeaderBar';
import { LaboratoryCanvas } from './components/LaboratoryCanvas';
import { TelemetryDeck } from './components/TelemetryDeck';
import { VariableTuningPanel } from './components/VariableTuningPanel';
import { ConceptCompendiumDrawer } from './components/ConceptCompendiumDrawer';
import { ObjectSpawnerPalette } from './components/ObjectSpawnerPalette';
import { GuidedLabsModal } from './components/GuidedLabsModal';
import { LabReportModal } from './components/LabReportModal';

export const App: React.FC = () => {
  const engineRef = useRef<PhysicsEngine>(new PhysicsEngine());
  const engine = engineRef.current;

  // UI & Simulation State
  const [activeDomain, setActiveDomain] = useState<PhysicsDomain>('mechanics');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [timeDilation, setTimeDilation] = useState<number>(1.0);
  const [showVectorField, setShowVectorField] = useState<boolean>(true);
  const [showTrails, setShowTrails] = useState<boolean>(true);
  const [selectedBody, setSelectedBody] = useState<PhysicsBody | null>(null);

  // Modals & Drawers
  const [isConceptsOpen, setIsConceptsOpen] = useState<boolean>(false);
  const [isGuidedLabsOpen, setIsGuidedLabsOpen] = useState<boolean>(false);
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);
  const [isSpawnerOpen, setIsSpawnerOpen] = useState<boolean>(false);
  const [experimentTitle, setExperimentTitle] = useState<string>('N-Body Gravitational Orbital Resonance');
  const [activeSetupId, setActiveSetupId] = useState<string>('sol_orbits');

  // Trigger state update when engine steps
  const [, setTick] = useState<number>(0);
  const forceUpdate = useCallback(() => setTick(t => t + 1), []);

  // Pre-load Domain Presets with Multi-Apparatus Setups
  const loadApparatusPreset = useCallback((domain: PhysicsDomain, setupId?: string) => {
    engine.clear();
    engine.setDomain(domain);
    setActiveDomain(domain);
    setSelectedBody(null);

    const chosenSetup = setupId || (
      domain === 'mechanics' ? 'sol_orbits' :
      domain === 'collisions' ? 'cradle' :
      domain === 'electromagnetism' ? 'cyclotron' :
      domain === 'fluids' ? 'buoyancy' :
      domain === 'thermodynamics' ? 'ideal_gas' : 'double_slit'
    );
    setActiveSetupId(chosenSetup);

    if (domain === 'mechanics') {
      if (chosenSetup === 'slingshot') {
        setExperimentTitle('Hyperbolic Gravitational Slingshot & Velocity Boost');
        engine.params.gravityConstant = 12.0;
        engine.params.airDragCoefficient = 0.0;
        engine.addBody({
          id: 'jupiter',
          name: 'Jupiter Attractor Mass',
          type: 'sphere',
          position: { x: 0, y: 4.5, z: 0 },
          velocity: { x: 0, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 45.0,
          charge: 0,
          radius: 1.1,
          restitution: 0.5,
          friction: 0.1,
          color: '#B78A63',
          isFixed: true,
          trail: [],
        });
        engine.addBody({
          id: 'probe',
          name: 'Voyager Space Probe',
          type: 'sphere',
          position: { x: -8.0, y: 4.5, z: -2.8 },
          velocity: { x: 3.2, y: 0, z: 0.9 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 0.4,
          charge: 0,
          radius: 0.3,
          restitution: 0.8,
          friction: 0.0,
          color: '#76283B',
          isFixed: false,
          trail: [],
          maxTrailLength: 200,
        });
      } else if (chosenSetup === 'three_body') {
        setExperimentTitle('Three-Body Gravitational Equilibrium & Chaotic Dance');
        engine.params.gravityConstant = 9.0;
        engine.params.airDragCoefficient = 0.0;
        const r0 = 4.0;
        const v0 = 1.9;
        const masses = [15.0, 15.0, 15.0];
        const colors = ['#76283B', '#B78A63', '#4B5563'];
        for (let i = 0; i < 3; i++) {
          const theta = (i * 2 * Math.PI) / 3;
          engine.addBody({
            id: `tri-${i}`,
            name: `Body ${i + 1} (15kg)`,
            type: 'sphere',
            position: { x: r0 * Math.cos(theta), y: 4.5, z: r0 * Math.sin(theta) },
            velocity: { x: -v0 * Math.sin(theta), y: 0, z: v0 * Math.cos(theta) },
            acceleration: { x: 0, y: 0, z: 0 },
            mass: masses[i],
            charge: 0,
            radius: 0.6,
            restitution: 0.8,
            friction: 0.0,
            color: colors[i],
            isFixed: false,
            trail: [],
            maxTrailLength: 180,
          });
        }
      } else {
        setExperimentTitle('N-Body Gravitational Orbital Resonance');
        engine.params.gravityConstant = 8.0;
        engine.params.airDragCoefficient = 0.0;
        engine.addBody({
          id: 'sun',
          name: 'Central Star (Sol)',
          type: 'sphere',
          position: { x: 0, y: 4.5, z: 0 },
          velocity: { x: 0, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 35.0,
          charge: 0,
          radius: 0.9,
          restitution: 0.5,
          friction: 0.1,
          color: '#B78A63',
          isFixed: true,
          trail: [],
        });
        engine.addBody({
          id: 'planet-1',
          name: 'Orbital Planet Alpha',
          type: 'sphere',
          position: { x: 4.5, y: 4.5, z: 0 },
          velocity: { x: 0, y: 0, z: 2.5 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 2.0,
          charge: 0,
          radius: 0.45,
          restitution: 0.8,
          friction: 0.05,
          color: '#76283B',
          isFixed: false,
          trail: [],
          maxTrailLength: 160,
        });
        engine.addBody({
          id: 'planet-2',
          name: 'Orbital Planet Beta',
          type: 'sphere',
          position: { x: -6.5, y: 4.5, z: 0 },
          velocity: { x: 0, y: 0, z: -1.9 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 1.2,
          charge: 0,
          radius: 0.35,
          restitution: 0.8,
          friction: 0.05,
          color: '#8E2F46',
          isFixed: false,
          trail: [],
          maxTrailLength: 160,
        });
      }
    } else if (domain === 'collisions') {
      if (chosenSetup === 'inelastic') {
        setExperimentTitle('Completely Inelastic Impact & Kinetic Energy Loss');
        engine.params.gravityConstant = 9.81;
        engine.params.globalRestitution = 0.05;
        engine.addBody({
          id: 'clay-1',
          name: 'Clay Mass 1 (Moving)',
          type: 'sphere',
          position: { x: -4.5, y: 0.8, z: 0 },
          velocity: { x: 4.5, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 3.0,
          charge: 0,
          radius: 0.65,
          restitution: 0.05,
          friction: 0.2,
          color: '#76283B',
          isFixed: false,
          trail: [],
        });
        engine.addBody({
          id: 'clay-2',
          name: 'Clay Mass 2 (Stationary)',
          type: 'sphere',
          position: { x: 0, y: 0.8, z: 0 },
          velocity: { x: 0, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 3.0,
          charge: 0,
          radius: 0.65,
          restitution: 0.05,
          friction: 0.2,
          color: '#B78A63',
          isFixed: false,
          trail: [],
        });
      } else if (chosenSetup === 'oblique') {
        setExperimentTitle('2D Oblique Billiard Collision & Angular Scattering');
        engine.params.gravityConstant = 9.81;
        engine.params.globalRestitution = 0.95;
        engine.addBody({
          id: 'cue-ball',
          name: 'Cue Ball (Impacting)',
          type: 'sphere',
          position: { x: -5.0, y: 0.8, z: 0.4 },
          velocity: { x: 5.5, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 2.0,
          charge: 0,
          radius: 0.55,
          restitution: 0.95,
          friction: 0.02,
          color: '#FFF9F2',
          isFixed: false,
          trail: [],
          maxTrailLength: 150,
        });
        engine.addBody({
          id: 'target-ball',
          name: 'Object Ball (Target)',
          type: 'sphere',
          position: { x: 0, y: 0.8, z: 0 },
          velocity: { x: 0, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 2.0,
          charge: 0,
          radius: 0.55,
          restitution: 0.95,
          friction: 0.02,
          color: '#76283B',
          isFixed: false,
          trail: [],
          maxTrailLength: 150,
        });
      } else {
        setExperimentTitle("Newton's Cradle Multi-Ball Momentum Relay (e = 0.98)");
        engine.params.gravityConstant = 9.81;
        engine.params.globalRestitution = 0.98;
        engine.addBody({
          id: 'c-proj',
          name: 'Impacting Projectile',
          type: 'sphere',
          position: { x: -6.0, y: 1.0, z: 0 },
          velocity: { x: 6.0, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 2.0,
          charge: 0,
          radius: 0.6,
          restitution: 0.98,
          friction: 0.02,
          color: '#76283B',
          isFixed: false,
          trail: [],
        });
        [-1.0, 0.25, 1.5].forEach((posX, idx) => {
          engine.addBody({
            id: `c-target-${idx + 1}`,
            name: `Target Sphere ${idx + 1}`,
            type: 'sphere',
            position: { x: posX, y: 1.0, z: 0 },
            velocity: { x: 0, y: 0, z: 0 },
            acceleration: { x: 0, y: 0, z: 0 },
            mass: 2.0,
            charge: 0,
            radius: 0.6,
            restitution: 0.98,
            friction: 0.02,
            color: idx === 1 ? '#B78A63' : '#4B5563',
            isFixed: false,
            trail: [],
          });
        });
      }
    } else if (domain === 'electromagnetism') {
      if (chosenSetup === 'thomson') {
        setExperimentTitle("J.J. Thomson Crossed E x B Field Velocity Selector");
        engine.params.gravityConstant = 0;
        engine.params.magneticFieldStrength = { x: 0, y: 0, z: 2.0 };
        engine.params.electricFieldStrength = { x: 0, y: 8.0, z: 0 };
        engine.addBody({
          id: 'balanced-p',
          name: 'Balanced Particle (v = E/B)',
          type: 'charge',
          position: { x: -6.0, y: 3.5, z: 0 },
          velocity: { x: 4.0, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 1.0,
          charge: 1.0,
          radius: 0.45,
          restitution: 0.8,
          friction: 0.0,
          color: '#10B981',
          isFixed: false,
          trail: [],
          maxTrailLength: 200,
        });
        engine.addBody({
          id: 'fast-p',
          name: 'Fast Particle (v > E/B)',
          type: 'charge',
          position: { x: -6.0, y: 4.5, z: 0 },
          velocity: { x: 6.5, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 1.0,
          charge: 1.0,
          radius: 0.45,
          restitution: 0.8,
          friction: 0.0,
          color: '#EF4444',
          isFixed: false,
          trail: [],
          maxTrailLength: 200,
        });
      } else if (chosenSetup === 'dipole') {
        setExperimentTitle("Coulomb Electrostatic Dipole & Field Lines");
        engine.params.gravityConstant = 0;
        engine.params.magneticFieldStrength = { x: 0, y: 0, z: 0 };
        engine.params.electricFieldStrength = { x: 0, y: 0, z: 0 };
        engine.addBody({
          id: 'pole-pos',
          name: 'Positive Pole (+4μC)',
          type: 'charge',
          position: { x: -3.0, y: 4.0, z: 0 },
          velocity: { x: 0, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 10.0,
          charge: 4.0,
          radius: 0.65,
          restitution: 0.8,
          friction: 0.0,
          color: '#EF4444',
          isFixed: true,
          trail: [],
        });
        engine.addBody({
          id: 'pole-neg',
          name: 'Negative Pole (-4μC)',
          type: 'charge',
          position: { x: 3.0, y: 4.0, z: 0 },
          velocity: { x: 0, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 10.0,
          charge: -4.0,
          radius: 0.65,
          restitution: 0.8,
          friction: 0.0,
          color: '#3B82F6',
          isFixed: true,
          trail: [],
        });
        engine.addBody({
          id: 'test-charge',
          name: 'Free Test Charge (+1μC)',
          type: 'charge',
          position: { x: 0, y: 6.0, z: 0 },
          velocity: { x: 0.5, y: -0.5, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 0.5,
          charge: 1.0,
          radius: 0.35,
          restitution: 0.8,
          friction: 0.0,
          color: '#76283B',
          isFixed: false,
          trail: [],
          maxTrailLength: 200,
        });
      } else {
        setExperimentTitle('Lorentz Magnetic Cyclotron & Particle Helical Trajectory');
        engine.params.gravityConstant = 0;
        engine.params.magneticFieldStrength = { x: 0, y: 0, z: 2.5 };
        engine.params.electricFieldStrength = { x: 0, y: 0, z: 0 };
        engine.addBody({
          id: 'ion-pos',
          name: 'Positive Alpha Ion (+2μC)',
          type: 'charge',
          position: { x: -2.0, y: 4.0, z: 0 },
          velocity: { x: 0, y: 4.5, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 1.0,
          charge: 2.0,
          radius: 0.45,
          restitution: 0.8,
          friction: 0.0,
          color: '#EF4444',
          isFixed: false,
          trail: [],
          maxTrailLength: 200,
        });
        engine.addBody({
          id: 'ion-neg',
          name: 'Negative Electron Ion (-2μC)',
          type: 'charge',
          position: { x: 2.0, y: 4.0, z: 0 },
          velocity: { x: 0, y: -4.5, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 1.0,
          charge: -2.0,
          radius: 0.45,
          restitution: 0.8,
          friction: 0.0,
          color: '#3B82F6',
          isFixed: false,
          trail: [],
          maxTrailLength: 200,
        });
      }
    } else if (domain === 'fluids') {
      if (chosenSetup === 'terminal') {
        setExperimentTitle("Stokes' Law & Viscous Terminal Sinking Velocity");
        engine.params.gravityConstant = 9.81;
        engine.params.fluidDensity = 920;
        engine.params.fluidViscosity = 0.15;
        const radii = [0.4, 0.6, 0.8];
        const colors = ['#76283B', '#B78A63', '#1F2937'];
        radii.forEach((r, idx) => {
          engine.addBody({
            id: `stokes-${idx}`,
            name: `Sphere ${idx + 1} (r = ${r}m)`,
            type: 'sphere',
            position: { x: (idx - 1) * 2.5, y: 7.0, z: 0 },
            velocity: { x: 0, y: 0, z: 0 },
            acceleration: { x: 0, y: 0, z: 0 },
            mass: 2.5 * Math.pow(r / 0.5, 3),
            charge: 0,
            radius: r,
            restitution: 0.2,
            friction: 0.1,
            color: colors[idx],
            isFixed: false,
            trail: [],
          });
        });
      } else if (chosenSetup === 'droplets') {
        setExperimentTitle("SPH Multi-Droplet Fluid Splashing Simulation");
        engine.params.gravityConstant = 9.81;
        engine.params.fluidDensity = 1000;
        engine.params.fluidViscosity = 0.04;
        for (let i = 0; i < 24; i++) {
          engine.addBody({
            id: `fluid-drop-${i}`,
            name: `Droplet ${i + 1}`,
            type: 'fluid_particle',
            position: {
              x: (Math.random() - 0.5) * 4,
              y: 2.0 + Math.random() * 4,
              z: (Math.random() - 0.5) * 4,
            },
            velocity: { x: (Math.random() - 0.5) * 1, y: -2.0, z: (Math.random() - 0.5) * 1 },
            acceleration: { x: 0, y: 0, z: 0 },
            mass: 0.12,
            charge: 0,
            radius: 0.22,
            restitution: 0.1,
            friction: 0.1,
            color: '#60A5FA',
            isFixed: false,
            trail: [],
          });
        }
      } else {
        setExperimentTitle("Archimedes' Buoyancy & Hydrostatic Equilibrium");
        engine.params.gravityConstant = 9.81;
        engine.params.fluidDensity = 1000;
        engine.params.fluidViscosity = 0.06;
        engine.addBody({
          id: 'float-wood',
          name: 'Floating Sphere (ρ = 550 kg/m³)',
          type: 'sphere',
          position: { x: -2.0, y: 6.5, z: 0 },
          velocity: { x: 0, y: -1.0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 0.8,
          charge: 0,
          radius: 0.65,
          restitution: 0.4,
          friction: 0.2,
          color: '#B78A63',
          isFixed: false,
          trail: [],
        });
        engine.addBody({
          id: 'sink-metal',
          name: 'Sinking Sphere (ρ = 2200 kg/m³)',
          type: 'sphere',
          position: { x: 2.0, y: 6.5, z: 0 },
          velocity: { x: 0, y: -1.0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 2.5,
          charge: 0,
          radius: 0.55,
          restitution: 0.4,
          friction: 0.2,
          color: '#76283B',
          isFixed: false,
          trail: [],
        });
        for (let i = 0; i < 12; i++) {
          engine.addBody({
            id: `fluid-p-${i}`,
            name: `Water Droplet ${i + 1}`,
            type: 'fluid_particle',
            position: {
              x: (Math.random() - 0.5) * 4,
              y: 1.0 + Math.random() * 2,
              z: (Math.random() - 0.5) * 4,
            },
            velocity: { x: 0, y: 0, z: 0 },
            acceleration: { x: 0, y: 0, z: 0 },
            mass: 0.15,
            charge: 0,
            radius: 0.2,
            restitution: 0.1,
            friction: 0.1,
            color: '#60A5FA',
            isFixed: false,
            trail: [],
          });
        }
      }
    } else if (domain === 'thermodynamics') {
      engine.params.enableTerrestrialGravity = false;
      engine.params.gravityConstant = 0.0;
      engine.params.airDragCoefficient = 0.0;
      engine.params.globalRestitution = 1.0;
      if (chosenSetup === 'brownian') {
        setExperimentTitle("Brownian Motion & Random Walk Diffusion");
        engine.params.temperature = 350;
        engine.params.chamberHeight = 6.0;
        engine.addBody({
          id: 'brownian-particle',
          name: 'Colloidal Pollen Particle',
          type: 'sphere',
          position: { x: 0, y: 3.0, z: 0 },
          velocity: { x: 0.2, y: 0.1, z: -0.1 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 4.5,
          charge: 0,
          radius: 0.7,
          restitution: 1.0,
          friction: 0.0,
          color: '#B78A63',
          isFixed: false,
          trail: [],
          maxTrailLength: 200,
        });
        for (let i = 0; i < 24; i++) {
          const speed = 4.5;
          engine.addBody({
            id: `gas-${i}`,
            name: `Gas Atom ${i + 1}`,
            type: 'sphere',
            position: {
              x: (Math.random() - 0.5) * 6.5,
              y: 1.0 + Math.random() * 4.0,
              z: (Math.random() - 0.5) * 6.5,
            },
            velocity: {
              x: (Math.random() - 0.5) * speed * 2,
              y: (Math.random() - 0.5) * speed * 2,
              z: (Math.random() - 0.5) * speed * 2,
            },
            acceleration: { x: 0, y: 0, z: 0 },
            mass: 0.15,
            charge: 0,
            radius: 0.22,
            restitution: 1.0,
            friction: 0.0,
            color: '#76283B',
            isFixed: false,
            trail: [],
          });
        }
      } else if (chosenSetup === 'compression') {
        setExperimentTitle("Adiabatic Piston Compression & Pressure Surge");
        engine.params.temperature = 500;
        engine.params.chamberHeight = 3.5;
        for (let i = 0; i < 28; i++) {
          const speed = 6.0;
          engine.addBody({
            id: `gas-${i}`,
            name: `Hot Gas Molecule ${i + 1}`,
            type: 'sphere',
            position: {
              x: (Math.random() - 0.5) * 6.5,
              y: 0.5 + Math.random() * 2.5,
              z: (Math.random() - 0.5) * 6.5,
            },
            velocity: {
              x: (Math.random() - 0.5) * speed * 2,
              y: (Math.random() - 0.5) * speed * 2,
              z: (Math.random() - 0.5) * speed * 2,
            },
            acceleration: { x: 0, y: 0, z: 0 },
            mass: 0.15,
            charge: 0,
            radius: 0.22,
            restitution: 1.0,
            friction: 0.0,
            color: '#D97706',
            isFixed: false,
            trail: [],
          });
        }
      } else {
        setExperimentTitle("Ideal Gas Maxwell-Boltzmann Kinetic Chamber");
        engine.params.temperature = 300;
        engine.params.chamberHeight = 6.0;
        for (let i = 0; i < 26; i++) {
          const speed = 4.0;
          engine.addBody({
            id: `gas-${i}`,
            name: `Gas Molecule ${i + 1}`,
            type: 'sphere',
            position: {
              x: (Math.random() - 0.5) * 6.5,
              y: 1.0 + Math.random() * 4.0,
              z: (Math.random() - 0.5) * 6.5,
            },
            velocity: {
              x: (Math.random() - 0.5) * speed * 2,
              y: (Math.random() - 0.5) * speed * 2,
              z: (Math.random() - 0.5) * speed * 2,
            },
            acceleration: { x: 0, y: 0, z: 0 },
            mass: 0.15,
            charge: 0,
            radius: 0.22,
            restitution: 1.0,
            friction: 0.0,
            color: '#76283B',
            isFixed: false,
            trail: [],
          });
        }
      }
    } else if (domain === 'modern') {
      engine.params.enableTerrestrialGravity = false;
      engine.params.gravityConstant = 0.0;
      engine.params.airDragCoefficient = 0.0;
      if (chosenSetup === 'rutherford') {
        setExperimentTitle("Rutherford Alpha Scattering & Nuclear Coulomb Deflection");
        engine.params.electricPermittivity = 8.9875e4;
        engine.addBody({
          id: 'gold-nucleus',
          name: 'Gold Nucleus (Au +79e)',
          type: 'charge',
          position: { x: 0, y: 3.5, z: 0 },
          velocity: { x: 0, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 79.0,
          charge: 5.0,
          radius: 0.8,
          restitution: 0.9,
          friction: 0.0,
          color: '#B78A63',
          isFixed: true,
          trail: [],
        });
        [-1.5, -0.4, 0.7, 1.8].forEach((bZ, idx) => {
          engine.addBody({
            id: `alpha-${idx}`,
            name: `Alpha Particle ${idx + 1} (+2e)`,
            type: 'charge',
            position: { x: -8.0, y: 3.5, z: bZ },
            velocity: { x: 7.0, y: 0, z: 0 },
            acceleration: { x: 0, y: 0, z: 0 },
            mass: 1.0,
            charge: 1.5,
            radius: 0.35,
            restitution: 0.9,
            friction: 0.0,
            color: '#76283B',
            isFixed: false,
            trail: [],
            maxTrailLength: 200,
          });
        });
      } else if (chosenSetup === 'relativistic') {
        setExperimentTitle("Special Relativity Time Dilation & Lorentz Mass Boost");
        engine.params.lightSpeedC = 15.0;
        engine.addBody({
          id: 'rel-particle',
          name: 'Ultra-Relativistic Particle (0.92c)',
          type: 'sphere',
          position: { x: -8.0, y: 3.5, z: 0 },
          velocity: { x: 13.8, y: 0, z: 0 },
          acceleration: { x: 0, y: 0, z: 0 },
          mass: 1.0,
          charge: 0,
          radius: 0.45,
          restitution: 0.8,
          friction: 0.0,
          color: '#76283B',
          isFixed: false,
          trail: [],
          maxTrailLength: 220,
          metadata: { restMass: 1.0 },
        });
      } else {
        setExperimentTitle("Double-Slit Quantum Matter Wave Propagation");
        engine.params.waveFrequency = 5.0;
        [-0.8, 0.8].forEach((offsetZ, idx) => {
          engine.addBody({
            id: `quantum-beam-${idx}`,
            name: `Quantum Wave Beam ${idx + 1}`,
            type: 'sphere',
            position: { x: -7.0, y: 3.0, z: offsetZ },
            velocity: { x: 5.0, y: 0, z: 0 },
            acceleration: { x: 0, y: 0, z: 0 },
            mass: 0.5,
            charge: 0,
            radius: 0.35,
            restitution: 0.9,
            friction: 0.0,
            color: idx === 0 ? '#76283B' : '#B78A63',
            isFixed: false,
            trail: [],
            maxTrailLength: 180,
          });
        });
      }
    }

    forceUpdate();
  }, [engine, forceUpdate]);

  const loadDomainPreset = useCallback((domain: PhysicsDomain) => {
    loadApparatusPreset(domain);
  }, [loadApparatusPreset]);

  // Initial load
  useEffect(() => {
    loadDomainPreset('mechanics');
  }, [loadDomainPreset]);

  // Keyboard Shortcuts (Space: Play/Pause, R: Reset)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsPlaying(p => !p);
      } else if (e.code === 'KeyR') {
        e.preventDefault();
        loadDomainPreset(activeDomain);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDomain, loadDomainPreset]);

  // Handlers for Guided Labs & Concepts
  const handleSelectConcept = (concept: PhysicsConcept) => {
    setExperimentTitle(concept.title);
    const domain = concept.presetConfig.domain;
    loadDomainPreset(domain);
    if (concept.presetConfig.parameters) {
      Object.assign(engine.params, concept.presetConfig.parameters);
    }
    if (concept.presetConfig.timeDilation) {
      setTimeDilation(concept.presetConfig.timeDilation);
    }
    forceUpdate();
  };

  const handleSelectLab = (lab: GuidedLabExperiment) => {
    setExperimentTitle(lab.title);
    loadDomainPreset(lab.domain);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-vanilla-200 overflow-hidden text-indigo-950 font-sans">
      
      {/* Top Header Bar */}
      <HeaderBar
        activeDomain={activeDomain}
        onSelectDomain={domain => loadDomainPreset(domain)}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        onStepForward={() => {
          engine.step(0.016 * timeDilation);
          forceUpdate();
        }}
        onReset={() => loadDomainPreset(activeDomain)}
        onClearBodies={() => {
          engine.clear();
          setSelectedBody(null);
          forceUpdate();
        }}
        timeDilation={timeDilation}
        onChangeTimeDilation={setTimeDilation}
        showVectorField={showVectorField}
        onToggleVectorField={() => setShowVectorField(!showVectorField)}
        showTrails={showTrails}
        onToggleTrails={() => setShowTrails(!showTrails)}
        onOpenConcepts={() => setIsConceptsOpen(true)}
        onOpenGuidedLabs={() => setIsGuidedLabsOpen(true)}
        onOpenReport={() => setIsReportOpen(true)}
        conceptsCount={PHYSICS_CONCEPTS.length}
      />

      {/* Main Workspace Stage */}
      <div className="flex-1 flex relative overflow-hidden">
        
        {/* 3D WebGL2 Canvas Viewport */}
        <div className="flex-1 h-full relative">
          <LaboratoryCanvas
            engine={engine}
            isPlaying={isPlaying}
            timeDilation={timeDilation}
            showVectorField={showVectorField}
            showTrails={showTrails}
            activeDomain={activeDomain}
            selectedBody={selectedBody}
            onSelectBody={setSelectedBody}
            onEngineUpdate={forceUpdate}
          />

          {/* Bottom Synchronized Telemetry Deck */}
          <TelemetryDeck
            engine={engine}
            activeDomain={activeDomain}
            selectedBody={selectedBody}
          />
        </div>

        {/* Right Apparatus Tuning Rack */}
        <VariableTuningPanel
          engine={engine}
          activeDomain={activeDomain}
          selectedBody={selectedBody}
          onSelectBody={setSelectedBody}
          onParamsChanged={forceUpdate}
          onOpenSpawner={() => setIsSpawnerOpen(true)}
          onSelectSetup={setupId => loadApparatusPreset(activeDomain, setupId)}
          activeSetupId={activeSetupId}
        />

      </div>

      {/* Concept Compendium Drawer */}
      <ConceptCompendiumDrawer
        isOpen={isConceptsOpen}
        onClose={() => setIsConceptsOpen(false)}
        concepts={PHYSICS_CONCEPTS}
        onSelectConcept={handleSelectConcept}
        activeDomain={activeDomain}
      />

      {/* Object Spawner Palette */}
      <ObjectSpawnerPalette
        isOpen={isSpawnerOpen}
        onClose={() => setIsSpawnerOpen(false)}
        engine={engine}
        activeDomain={activeDomain}
        onBodyAdded={forceUpdate}
      />

      {/* Guided Labs Modal */}
      <GuidedLabsModal
        isOpen={isGuidedLabsOpen}
        onClose={() => setIsGuidedLabsOpen(false)}
        onSelectLab={handleSelectLab}
      />

      {/* Lab Report Dossier Modal */}
      <LabReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        engine={engine}
        activeDomain={activeDomain}
        experimentTitle={experimentTitle}
      />

    </div>
  );
};

export default App;
