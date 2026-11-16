import React from 'react';
import { PhysicsEngine } from '../physics/engine';
import { PhysicsDomain } from '../types/physics';
import { FileText, Download, Printer, X, ShieldCheck } from 'lucide-react';

interface LabReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  engine: PhysicsEngine;
  activeDomain: PhysicsDomain;
  experimentTitle: string;
}

export const LabReportModal: React.FC<LabReportModalProps> = ({
  isOpen,
  onClose,
  engine,
  activeDomain,
  experimentTitle,
}) => {
  if (!isOpen) return null;

  const p = engine.params;
  const history = engine.telemetryHistory;
  const latestTelemetry = history.length > 0 ? history[history.length - 1] : null;

  const exportJSON = () => {
    const reportData = {
      reportTitle: `REALITY ENGINE — Laboratory Observation Report`,
      timestamp: new Date().toISOString(),
      experimentTitle,
      domain: activeDomain,
      parameters: p,
      bodiesCount: engine.bodies.length,
      bodies: engine.bodies.map(b => ({
        id: b.id,
        name: b.name,
        type: b.type,
        mass: b.mass,
        charge: b.charge,
        restitution: b.restitution,
        position: b.position,
        velocity: b.velocity,
      })),
      telemetrySampleCount: history.length,
      finalTelemetry: latestTelemetry,
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reality-engine-report-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-950/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-vanilla-100 border border-vanilla-400 rounded-2xl shadow-tactile-lg w-full max-w-3xl my-8 p-6 text-indigo-950">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between border-b border-vanilla-300 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-800" />
            <h2 className="font-bold text-base text-indigo-900 tracking-wide">EXPERIMENTAL DOSSIER & LAB REPORT</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-vanilla-200 hover:bg-vanilla-300 rounded-lg text-indigo-900 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={exportJSON}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-indigo-800 hover:bg-indigo-900 text-vanilla-50 rounded-lg transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>
            <button onClick={onClose} className="p-1.5 text-muted hover:text-indigo-950 ml-2">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="space-y-6 text-xs bg-vanilla-50 p-6 rounded-xl border border-vanilla-300">
          
          {/* Institutional Title Header */}
          <div className="border-b-2 border-indigo-900 pb-4 flex justify-between items-start">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-700 font-bold block">
                REALITY ENGINE • PHYSICAL VIRTUAL LABORATORY
              </span>
              <h1 className="text-xl font-bold font-serif text-indigo-950 mt-1">{experimentTitle}</h1>
              <p className="text-muted mt-0.5">Automated Numerical Telemetry & Conservation Audit</p>
            </div>
            <div className="text-right font-mono text-[10px] text-muted">
              <div>Date: {new Date().toLocaleDateString()}</div>
              <div>Domain: {activeDomain.toUpperCase()}</div>
              <div>Engine: WebGL2 Verlet/RK4</div>
            </div>
          </div>

          {/* Environmental Parameters Table */}
          <div>
            <h3 className="font-bold text-indigo-900 text-xs tracking-wider uppercase mb-2">1. Environmental Constants & Apparatus Setup</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
              <div className="bg-vanilla-100 p-2.5 rounded border border-vanilla-300">
                <span className="text-[10px] text-muted block">Gravity (g)</span>
                <span className="font-bold text-indigo-950">{p.gravityConstant.toFixed(2)} m/s²</span>
              </div>
              <div className="bg-vanilla-100 p-2.5 rounded border border-vanilla-300">
                <span className="text-[10px] text-muted block">Restitution (e)</span>
                <span className="font-bold text-indigo-950">{p.globalRestitution.toFixed(2)}</span>
              </div>
              <div className="bg-vanilla-100 p-2.5 rounded border border-vanilla-300">
                <span className="text-[10px] text-muted block">B-Field (Bz)</span>
                <span className="font-bold text-indigo-950">{p.magneticFieldStrength.z.toFixed(2)} T</span>
              </div>
              <div className="bg-vanilla-100 p-2.5 rounded border border-vanilla-300">
                <span className="text-[10px] text-muted block">Fluid Density (ρ)</span>
                <span className="font-bold text-indigo-950">{p.fluidDensity.toFixed(0)} kg/m³</span>
              </div>
            </div>
          </div>

          {/* Telemetry Summary */}
          <div>
            <h3 className="font-bold text-indigo-900 text-xs tracking-wider uppercase mb-2">2. Experimental Telemetry & Energy Balance</h3>
            <div className="grid grid-cols-3 gap-3 font-mono">
              <div className="bg-vanilla-100 p-3 rounded-lg border border-vanilla-300">
                <span className="text-[10px] text-muted block">Kinetic Energy (KE)</span>
                <span className="text-sm font-bold text-indigo-900">
                  {latestTelemetry ? `${latestTelemetry.kineticEnergy.toFixed(2)} J` : '0.00 J'}
                </span>
              </div>
              <div className="bg-vanilla-100 p-3 rounded-lg border border-vanilla-300">
                <span className="text-[10px] text-muted block">Potential Energy (PE)</span>
                <span className="text-sm font-bold text-amber-700">
                  {latestTelemetry ? `${latestTelemetry.potentialEnergy.toFixed(2)} J` : '0.00 J'}
                </span>
              </div>
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-300">
                <span className="text-[10px] text-emerald-800 block">Total Mechanical Energy</span>
                <span className="text-sm font-bold text-emerald-900 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  {latestTelemetry ? `${latestTelemetry.totalEnergy.toFixed(2)} J` : '0.00 J'}
                </span>
              </div>
            </div>
          </div>

          {/* Active Apparatus State */}
          <div>
            <h3 className="font-bold text-indigo-900 text-xs tracking-wider uppercase mb-2">3. Participating Physical Entities ({engine.bodies.length})</h3>
            <div className="border border-vanilla-300 rounded-lg overflow-hidden font-mono text-[11px]">
              <table className="w-full text-left">
                <thead className="bg-vanilla-200/80 border-b border-vanilla-300 text-indigo-900">
                  <tr>
                    <th className="p-2">Name</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Mass</th>
                    <th className="p-2">Charge</th>
                    <th className="p-2">Restitution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-vanilla-300">
                  {engine.bodies.map(b => (
                    <tr key={b.id} className="hover:bg-vanilla-100">
                      <td className="p-2 font-bold text-indigo-950">{b.name}</td>
                      <td className="p-2 uppercase text-[10px]">{b.type}</td>
                      <td className="p-2">{b.mass.toFixed(2)} kg</td>
                      <td className="p-2">{b.charge !== 0 ? `${b.charge.toFixed(2)} μC` : '0'}</td>
                      <td className="p-2">{b.restitution.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Scientific Certification */}
          <div className="pt-4 border-t border-vanilla-300 flex items-center justify-between text-[11px] text-muted">
            <span>Verified with Symplectic Velocity-Verlet & RK4 Numerical Solvers</span>
            <span className="text-indigo-900 font-semibold">REALITY ENGINE • Research Laboratory Grade</span>
          </div>

        </div>

      </div>
    </div>
  );
};
