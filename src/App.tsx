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

  // Trigger state update when engine steps
  const [, setTick] = useState<number>(0);
  const forceUpdate = useCallback(() => setTick(t => t + 1), []);

  // Pre-load Domain Presets
  const loadDomainPreset = useCallback((domain: PhysicsDomain) => {
    engine.clear();
    engine.setDomain(domain);
    setActiveDomain(domain);
    setSelectedBody(null);

    if (domain === 'mechanics') {
      setExperimentTitle('N-Body Gravitational Orbital Resonance');
      engine.params.gravityConstant = 8.0;
      engine.params.airDragCoefficient = 0.0;

      // Central Sun
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
        color: '#D97706',
        isFixed: true,
        trail: [],
      });

      // Planet Alpha (Circular Orbit)
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
        color: '#30356F',
        isFixed: false,
        trail: [],
        maxTrailLength: 160,
      });

      // Planet Beta (Elliptical Orbit)
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
        color: '#059669',
        isFixed: false,
        trail: [],
        maxTrailLength: 160,
      });
    } else if (domain === 'collisions') {
      setExperimentTitle('High-Elasticity Momentum Relay (e = 0.95)');
      engine.params.gravityConstant = 9.81;
      engine.params.globalRestitution = 0.95;

      // Incoming fast projectile sphere
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
        restitution: 0.95,
        friction: 0.02,
        color: '#DC2626',
        isFixed: false,
        trail: [],
      });

      // Target Sphere 1
      engine.addBody({
        id: 'c-target-1',
        name: 'Target Sphere 1',
        type: 'sphere',
        position: { x: -1.0, y: 1.0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        acceleration: { x: 0, y: 0, z: 0 },
        mass: 2.0,
        charge: 0,
        radius: 0.6,
        restitution: 0.95,
        friction: 0.02,
        color: '#30356F',
        isFixed: false,
        trail: [],
      });

      // Target Sphere 2
      engine.addBody({
        id: 'c-target-2',
        name: 'Target Sphere 2',
        type: 'sphere',
        position: { x: 0.25, y: 1.0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        acceleration: { x: 0, y: 0, z: 0 },
        mass: 2.0,
        charge: 0,
        radius: 0.6,
        restitution: 0.95,
        friction: 0.02,
        color: '#2563EB',
        isFixed: false,
        trail: [],
      });

      // Target Sphere 3
      engine.addBody({
        id: 'c-target-3',
        name: 'Target Sphere 3',
        type: 'sphere',
        position: { x: 1.5, y: 1.0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        acceleration: { x: 0, y: 0, z: 0 },
        mass: 2.0,
        charge: 0,
        radius: 0.6,
        restitution: 0.95,
        friction: 0.02,
        color: '#4B5563',
        isFixed: false,
        trail: [],
      });
    } else if (domain === 'electromagnetism') {
      setExperimentTitle('Lorentz Magnetic Cyclotron & Particle Helical Trajectory');
      engine.params.gravityConstant = 0;
      engine.params.magneticFieldStrength = { x: 0, y: 0, z: 2.5 };
      engine.params.electricFieldStrength = { x: 0, y: 0, z: 0 };

      // Positive Ion
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

      // Negative Electron
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
    } else if (domain === 'fluids') {
      setExperimentTitle("Archimedes' Buoyancy & Hydrostatic Equilibrium");
      engine.params.gravityConstant = 9.81;
      engine.params.fluidDensity = 1000;
      engine.params.fluidViscosity = 0.06;

      // Floating Low-Density Sphere
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
        color: '#D97706',
        isFixed: false,
        trail: [],
      });

      // Sinking High-Density Sphere
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
        color: '#4B5563',
        isFixed: false,
        trail: [],
      });

      // Sample fluid droplets
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

    forceUpdate();
  }, [engine, forceUpdate]);

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
