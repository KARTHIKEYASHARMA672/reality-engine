import React from 'react';
import { PhysicsEngine } from '../physics/engine';
import { PhysicsBody, PhysicsDomain } from '../types/physics';
import { Sliders, Magnet, Droplets, Orbit, Sparkles, Trash2, Crosshair, Plus } from 'lucide-react';

interface VariableTuningPanelProps {
  engine: PhysicsEngine;
  activeDomain: PhysicsDomain;
  selectedBody: PhysicsBody | null;
  onSelectBody: (body: PhysicsBody | null) => void;
  onParamsChanged: () => void;
  onOpenSpawner: () => void;
}

export const VariableTuningPanel: React.FC<VariableTuningPanelProps> = ({
  engine,
  activeDomain,
  selectedBody,
  onSelectBody,
  onParamsChanged,
  onOpenSpawner,
}) => {
  const p = engine.params;

  return (
    <div className="w-80 h-full bg-vanilla-100/90 backdrop-blur-md border-l border-vanilla-400 flex flex-col shadow-tactile text-indigo-950 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-vanilla-400 bg-vanilla-200/50 flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm tracking-wide">
          <Sliders className="w-4 h-4 text-indigo-800" />
          <span>APPARATUS PARAMETERS</span>
        </div>
        <button
          onClick={onOpenSpawner}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-indigo-800 text-vanilla-50 rounded-lg hover:bg-indigo-900 transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Spawn</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs">
        
        {/* Selected Body Inspector (if clicked) */}
        {selectedBody ? (
          <div className="bg-vanilla-50 p-3.5 rounded-xl border border-indigo-300 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-vanilla-300 pb-2">
              <div className="flex items-center gap-1.5 font-bold text-indigo-900">
                <Crosshair className="w-4 h-4 text-indigo-700" />
                <span>INSPECTING: {selectedBody.name}</span>
              </div>
              <button
                onClick={() => {
                  engine.removeBody(selectedBody.id);
                  onSelectBody(null);
                  onParamsChanged();
                }}
                className="text-red-600 hover:text-red-700 p-1"
                title="Remove this body"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div>
              <div className="flex justify-between text-muted mb-1">
                <span>Mass (kg):</span>
                <span className="font-mono font-bold text-indigo-900">{selectedBody.mass.toFixed(1)} kg</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="20.0"
                step="0.1"
                value={selectedBody.mass}
                onChange={e => {
                  selectedBody.mass = parseFloat(e.target.value);
                  onParamsChanged();
                }}
                className="w-full accent-indigo-800 cursor-pointer"
              />
            </div>

            {activeDomain === 'electromagnetism' && (
              <div>
                <div className="flex justify-between text-muted mb-1">
                  <span>Charge q (μC):</span>
                  <span className={`font-mono font-bold ${selectedBody.charge >= 0 ? 'text-red-600' : 'text-blue-600'}`}>
                    {selectedBody.charge.toFixed(1)} μC
                  </span>
                </div>
                <input
                  type="range"
                  min="-5.0"
                  max="5.0"
                  step="0.2"
                  value={selectedBody.charge}
                  onChange={e => {
                    selectedBody.charge = parseFloat(e.target.value);
                    onParamsChanged();
                  }}
                  className="w-full accent-indigo-800 cursor-pointer"
                />
              </div>
            )}

            <div>
              <div className="flex justify-between text-muted mb-1">
                <span>Restitution (e):</span>
                <span className="font-mono font-bold text-indigo-900">{selectedBody.restitution.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="1.0"
                step="0.05"
                value={selectedBody.restitution}
                onChange={e => {
                  selectedBody.restitution = parseFloat(e.target.value);
                  onParamsChanged();
                }}
                className="w-full accent-indigo-800 cursor-pointer"
              />
            </div>

            <div className="pt-1 text-[11px] font-mono text-muted grid grid-cols-2 gap-1 bg-vanilla-100 p-2 rounded">
              <div>Vx: {selectedBody.velocity.x.toFixed(2)}</div>
              <div>Vy: {selectedBody.velocity.y.toFixed(2)}</div>
              <div>Vz: {selectedBody.velocity.z.toFixed(2)}</div>
              <div>Radius: {selectedBody.radius.toFixed(2)}m</div>
            </div>
          </div>
        ) : (
          <div className="bg-vanilla-50/70 p-3 rounded-xl border border-dashed border-vanilla-400 text-center text-muted">
            <span className="text-[11px]">Click any 3D body in the viewport to inspect and tune its properties directly.</span>
          </div>
        )}

        {/* Global Physical Parameters */}
        <div className="space-y-4">
          <div className="font-bold text-indigo-900 tracking-wider text-[11px] uppercase border-b border-vanilla-300 pb-1">
            Global Environment
          </div>

          {/* Gravity */}
          <div>
            <div className="flex justify-between text-muted mb-1">
              <span>Gravity Acceleration g:</span>
              <span className="font-mono font-bold text-indigo-900">{p.gravityConstant.toFixed(2)} m/s²</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="25.0"
              step="0.1"
              value={p.gravityConstant}
              onChange={e => {
                p.gravityConstant = parseFloat(e.target.value);
                onParamsChanged();
              }}
              className="w-full accent-indigo-800 cursor-pointer"
            />
          </div>

          {/* Collision Restitution */}
          <div>
            <div className="flex justify-between text-muted mb-1">
              <span>Collision Elasticity e:</span>
              <span className="font-mono font-bold text-indigo-900">{p.globalRestitution.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="1.0"
              step="0.05"
              value={p.globalRestitution}
              onChange={e => {
                p.globalRestitution = parseFloat(e.target.value);
                onParamsChanged();
              }}
              className="w-full accent-indigo-800 cursor-pointer"
            />
          </div>

          {/* Air Drag */}
          <div>
            <div className="flex justify-between text-muted mb-1">
              <span>Air Drag Coefficient Cd:</span>
              <span className="font-mono font-bold text-indigo-900">{p.airDragCoefficient.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="0.2"
              step="0.005"
              value={p.airDragCoefficient}
              onChange={e => {
                p.airDragCoefficient = parseFloat(e.target.value);
                onParamsChanged();
              }}
              className="w-full accent-indigo-800 cursor-pointer"
            />
          </div>

          {/* Electromagnetic Domain Controls */}
          {activeDomain === 'electromagnetism' && (
            <div className="pt-2 border-t border-vanilla-300 space-y-4">
              <div className="font-bold text-indigo-900 tracking-wider text-[11px] uppercase flex items-center gap-1.5">
                <Magnet className="w-3.5 h-3.5 text-indigo-700" />
                <span>Field Strengths</span>
              </div>

              <div>
                <div className="flex justify-between text-muted mb-1">
                  <span>Magnetic Flux Bz (Tesla):</span>
                  <span className="font-mono font-bold text-indigo-900">{p.magneticFieldStrength.z.toFixed(1)} T</span>
                </div>
                <input
                  type="range"
                  min="-6.0"
                  max="6.0"
                  step="0.2"
                  value={p.magneticFieldStrength.z}
                  onChange={e => {
                    p.magneticFieldStrength.z = parseFloat(e.target.value);
                    onParamsChanged();
                  }}
                  className="w-full accent-indigo-800 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-muted mb-1">
                  <span>Electric Field Ey (N/C):</span>
                  <span className="font-mono font-bold text-indigo-900">{p.electricFieldStrength.y.toFixed(0)} N/C</span>
                </div>
                <input
                  type="range"
                  min="-200"
                  max="200"
                  step="10"
                  value={p.electricFieldStrength.y}
                  onChange={e => {
                    p.electricFieldStrength.y = parseFloat(e.target.value);
                    onParamsChanged();
                  }}
                  className="w-full accent-indigo-800 cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* Fluid Domain Controls */}
          {activeDomain === 'fluids' && (
            <div className="pt-2 border-t border-vanilla-300 space-y-4">
              <div className="font-bold text-indigo-900 tracking-wider text-[11px] uppercase flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-blue-600" />
                <span>Fluid Properties</span>
              </div>

              <div>
                <div className="flex justify-between text-muted mb-1">
                  <span>Fluid Density ρ:</span>
                  <span className="font-mono font-bold text-indigo-900">{p.fluidDensity.toFixed(0)} kg/m³</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="2500"
                  step="50"
                  value={p.fluidDensity}
                  onChange={e => {
                    p.fluidDensity = parseFloat(e.target.value);
                    onParamsChanged();
                  }}
                  className="w-full accent-indigo-800 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-muted mb-1">
                  <span>Dynamic Viscosity η:</span>
                  <span className="font-mono font-bold text-indigo-900">{p.fluidViscosity.toFixed(3)} Pa·s</span>
                </div>
                <input
                  type="range"
                  min="0.005"
                  max="0.5"
                  step="0.01"
                  value={p.fluidViscosity}
                  onChange={e => {
                    p.fluidViscosity = parseFloat(e.target.value);
                    onParamsChanged();
                  }}
                  className="w-full accent-indigo-800 cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* Solver Sub-Steps */}
          <div className="pt-2 border-t border-vanilla-300">
            <div className="flex justify-between text-muted mb-1">
              <span>Numerical Sub-Steps:</span>
              <span className="font-mono font-bold text-indigo-900">{p.subSteps}x</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[4, 8, 16].map(steps => (
                <button
                  key={steps}
                  onClick={() => {
                    p.subSteps = steps;
                    onParamsChanged();
                  }}
                  className={`py-1 rounded font-mono text-xs border ${
                    p.subSteps === steps
                      ? 'bg-indigo-800 text-vanilla-50 border-indigo-800 font-bold'
                      : 'bg-vanilla-50 text-indigo-900 border-vanilla-400 hover:bg-vanilla-200'
                  }`}
                >
                  {steps}x
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
