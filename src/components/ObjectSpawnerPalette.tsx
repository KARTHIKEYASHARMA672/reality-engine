import React from 'react';
import { PhysicsEngine } from '../physics/engine';
import { PhysicsBody, PhysicsDomain } from '../types/physics';
import { PlusCircle, X, Circle, Atom, Droplets, Shield, Orbit } from 'lucide-react';

interface ObjectSpawnerPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  engine: PhysicsEngine;
  activeDomain: PhysicsDomain;
  onBodyAdded: () => void;
}

export const ObjectSpawnerPalette: React.FC<ObjectSpawnerPaletteProps> = ({
  isOpen,
  onClose,
  engine,
  activeDomain,
  onBodyAdded,
}) => {
  if (!isOpen) return null;

  const spawnSphere = (mass: number, radius: number, color: string, name: string) => {
    const id = `body-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const newBody: PhysicsBody = {
      id,
      name,
      type: 'sphere',
      position: {
        x: (Math.random() - 0.5) * 6,
        y: 6.0 + Math.random() * 3,
        z: (Math.random() - 0.5) * 6,
      },
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 1,
        z: (Math.random() - 0.5) * 2,
      },
      acceleration: { x: 0, y: 0, z: 0 },
      mass,
      charge: 0,
      radius,
      restitution: engine.params.globalRestitution,
      friction: engine.params.globalFriction,
      color,
      isFixed: false,
      trail: [],
    };
    engine.addBody(newBody);
    onBodyAdded();
  };

  const spawnCharge = (charge: number, color: string, name: string) => {
    const id = `charge-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const newBody: PhysicsBody = {
      id,
      name,
      type: 'charge',
      position: {
        x: (Math.random() - 0.5) * 5,
        y: 3.0 + Math.random() * 2,
        z: (Math.random() - 0.5) * 5,
      },
      velocity: {
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 2,
        z: (Math.random() - 0.5) * 4,
      },
      acceleration: { x: 0, y: 0, z: 0 },
      mass: 1.0,
      charge,
      radius: 0.45,
      restitution: 0.9,
      friction: 0.05,
      color,
      isFixed: false,
      trail: [],
    };
    engine.addBody(newBody);
    onBodyAdded();
  };

  const spawnFluidCluster = () => {
    for (let i = 0; i < 15; i++) {
      const id = `fluid-${Date.now()}-${i}`;
      const newParticle: PhysicsBody = {
        id,
        name: `Fluid Particle ${i + 1}`,
        type: 'fluid_particle',
        position: {
          x: (Math.random() - 0.5) * 3,
          y: 5.0 + Math.random() * 2,
          z: (Math.random() - 0.5) * 3,
        },
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: -1.0,
          z: (Math.random() - 0.5) * 0.5,
        },
        acceleration: { x: 0, y: 0, z: 0 },
        mass: 0.2,
        charge: 0,
        radius: 0.2,
        restitution: 0.2,
        friction: 0.1,
        color: '#60A5FA',
        isFixed: false,
        trail: [],
      };
      engine.addBody(newParticle);
    }
    onBodyAdded();
  };

  const spawnFixedAttractor = () => {
    const id = `anchor-${Date.now()}`;
    const newAnchor: PhysicsBody = {
      id,
      name: 'Fixed Attractor Core',
      type: 'sphere',
      position: { x: 0, y: 3.5, z: 0 },
      velocity: { x: 0, y: 0, z: 0 },
      acceleration: { x: 0, y: 0, z: 0 },
      mass: 50.0, // Heavy mass
      charge: 0,
      radius: 0.9,
      restitution: 0.5,
      friction: 0.3,
      color: '#B45309',
      isFixed: true,
      trail: [],
    };
    engine.addBody(newAnchor);
    onBodyAdded();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-950/40 backdrop-blur-sm p-4">
      <div className="bg-vanilla-100 border border-vanilla-400 rounded-2xl shadow-tactile-lg w-full max-w-md p-5 text-indigo-950">
        <div className="flex items-center justify-between border-b border-vanilla-300 pb-3 mb-4">
          <div className="flex items-center gap-2 font-bold text-indigo-900 text-sm">
            <PlusCircle className="w-5 h-5 text-indigo-800" />
            <span>SPAWN 3D APPARATUS ENTITY</span>
          </div>
          <button onClick={onClose} className="p-1 text-muted hover:text-indigo-950">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          {/* Classical Bodies */}
          <button
            onClick={() => spawnSphere(1.0, 0.45, '#76283B', 'Standard Sphere (1kg)')}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-vanilla-50 border border-vanilla-400 hover:border-indigo-600 hover:bg-vanilla-200 transition-all text-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center text-vanilla-50">
              <Circle className="w-4 h-4" />
            </div>
            <span className="font-bold text-indigo-900">Standard Sphere</span>
            <span className="text-[11px] text-muted">m = 1.0 kg | r = 0.45m</span>
          </button>

          <button
            onClick={() => spawnSphere(5.0, 0.75, '#1E293B', 'Heavy Lead Mass (5kg)')}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-vanilla-50 border border-vanilla-400 hover:border-indigo-600 hover:bg-vanilla-200 transition-all text-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-vanilla-50">
              <Circle className="w-5 h-5" />
            </div>
            <span className="font-bold text-indigo-900">Heavy Inertial Mass</span>
            <span className="text-[11px] text-muted">m = 5.0 kg | r = 0.75m</span>
          </button>

          {/* Charges */}
          <button
            onClick={() => spawnCharge(1.5, '#EF4444', 'Positive Ion (+1.5μC)')}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-vanilla-50 border border-vanilla-400 hover:border-red-500 hover:bg-red-50 transition-all text-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
              +
            </div>
            <span className="font-bold text-red-900">Positive Charge</span>
            <span className="text-[11px] text-muted">q = +1.5 μC | m = 1kg</span>
          </button>

          <button
            onClick={() => spawnCharge(-1.5, '#3B82F6', 'Negative Electron (-1.5μC)')}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-vanilla-50 border border-vanilla-400 hover:border-blue-500 hover:bg-blue-50 transition-all text-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              -
            </div>
            <span className="font-bold text-blue-900">Negative Charge</span>
            <span className="text-[11px] text-muted">q = -1.5 μC | m = 1kg</span>
          </button>

          {/* Fluids */}
          <button
            onClick={spawnFluidCluster}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-vanilla-50 border border-vanilla-400 hover:border-cyan-500 hover:bg-cyan-50 transition-all text-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white">
              <Droplets className="w-4 h-4" />
            </div>
            <span className="font-bold text-cyan-900">Fluid Droplets Cluster</span>
            <span className="text-[11px] text-muted">15 SPH viscous particles</span>
          </button>

          {/* Fixed Anchor */}
          <button
            onClick={spawnFixedAttractor}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-vanilla-50 border border-vanilla-400 hover:border-amber-600 hover:bg-amber-50 transition-all text-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center text-white">
              <Shield className="w-4 h-4" />
            </div>
            <span className="font-bold text-amber-900">Fixed Anchor Attractor</span>
            <span className="text-[11px] text-muted">M = 50kg | Gravitational center</span>
          </button>

          {/* Thermal Gas Particles */}
          <button
            onClick={() => {
              for (let i = 0; i < 8; i++) {
                const id = `gas-${Date.now()}-${i}`;
                engine.addBody({
                  id,
                  name: `Gas Molecule ${i + 1}`,
                  type: 'sphere',
                  position: {
                    x: (Math.random() - 0.5) * 6,
                    y: 1.0 + Math.random() * 4,
                    z: (Math.random() - 0.5) * 6,
                  },
                  velocity: {
                    x: (Math.random() - 0.5) * 8,
                    y: (Math.random() - 0.5) * 8,
                    z: (Math.random() - 0.5) * 8,
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
              onBodyAdded();
            }}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-vanilla-50 border border-vanilla-400 hover:border-amber-500 hover:bg-amber-50 transition-all text-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white">
              <Circle className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-amber-900">Gas Molecules (x8)</span>
            <span className="text-[11px] text-muted">Maxwell-Boltzmann thermal gas</span>
          </button>

          {/* Relativistic Quantum Wave Packet */}
          <button
            onClick={() => {
              const id = `quantum-${Date.now()}`;
              engine.addBody({
                id,
                name: 'Relativistic Wave Packet',
                type: 'sphere',
                position: {
                  x: -7.0,
                  y: 3.0 + (Math.random() - 0.5),
                  z: (Math.random() - 0.5) * 2,
                },
                velocity: { x: 13.5, y: 0, z: 0 },
                acceleration: { x: 0, y: 0, z: 0 },
                mass: 0.5,
                charge: 0,
                radius: 0.35,
                restitution: 0.9,
                friction: 0.0,
                color: '#8B5CF6',
                isFixed: false,
                trail: [],
                maxTrailLength: 180,
                metadata: { restMass: 0.5 },
              });
              onBodyAdded();
            }}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-vanilla-50 border border-vanilla-400 hover:border-purple-600 hover:bg-purple-50 transition-all text-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center text-white">
              <Atom className="w-4 h-4" />
            </div>
            <span className="font-bold text-purple-900">Quantum Wave Packet</span>
            <span className="text-[11px] text-muted">v = 0.9c | Relativistic γ boost</span>
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-vanilla-300 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-indigo-900 bg-vanilla-200 hover:bg-vanilla-300 rounded-lg"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
