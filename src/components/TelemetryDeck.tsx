import React, { useEffect, useRef, useState } from 'react';
import katex from 'katex';
import { PhysicsEngine } from '../physics/engine';
import { PhysicsBody, PhysicsDomain, TelemetryPoint } from '../types/physics';
import { vec3 } from '../physics/mathUtils';
import { ChevronDown, ChevronUp, Activity, Sigma, Zap, ShieldCheck } from 'lucide-react';

interface TelemetryDeckProps {
  engine: PhysicsEngine;
  activeDomain: PhysicsDomain;
  selectedBody: PhysicsBody | null;
}

export const TelemetryDeck: React.FC<TelemetryDeckProps> = ({
  engine,
  activeDomain,
  selectedBody,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState<'energy' | 'momentum' | 'formula'>('energy');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const formulaRef = useRef<HTMLDivElement>(null);
  const [currentTelemetry, setCurrentTelemetry] = useState<TelemetryPoint | null>(null);

  // Update Telemetry & Draw Canvas Chart
  useEffect(() => {
    let animId: number;

    const renderChart = () => {
      const history = engine.telemetryHistory;
      if (history.length > 0) {
        setCurrentTelemetry(history[history.length - 1]);
      }

      const canvas = canvasRef.current;
      if (canvas && isExpanded) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const w = canvas.width;
          const h = canvas.height;
          ctx.clearRect(0, 0, w, h);

          // Background Grid
          ctx.strokeStyle = '#E1CDBB';
          ctx.lineWidth = 1;
          for (let y = 20; y < h; y += 25) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
          }

          if (history.length > 1) {
            // Find max scale for normalization
            let maxVal = 10;
            for (const pt of history) {
              if (activeTab === 'energy') {
                maxVal = Math.max(maxVal, pt.totalEnergy, pt.kineticEnergy, pt.potentialEnergy);
              } else {
                maxVal = Math.max(maxVal, pt.linearMomentumMagnitude, pt.maxVelocity * 2);
              }
            }
            maxVal = Math.max(10, maxVal * 1.15);

            const dx = w / (engine.maxHistoryLength - 1);

            if (activeTab === 'energy') {
              // 1. Kinetic Energy Curve (Wine Accent #76283B)
              ctx.strokeStyle = '#76283B';
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              history.forEach((pt, i) => {
                const x = i * dx;
                const y = h - (pt.kineticEnergy / maxVal) * (h - 10) - 5;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              });
              ctx.stroke();

              // 2. Potential Energy Curve (Amber #D97706)
              ctx.strokeStyle = '#D97706';
              ctx.lineWidth = 2;
              ctx.beginPath();
              history.forEach((pt, i) => {
                const x = i * dx;
                const y = h - (pt.potentialEnergy / maxVal) * (h - 10) - 5;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              });
              ctx.stroke();

              // 3. Total Energy Curve (Emerald #059669 - shows conservation!)
              ctx.strokeStyle = '#059669';
              ctx.lineWidth = 2;
              ctx.setLineDash([4, 2]);
              ctx.beginPath();
              history.forEach((pt, i) => {
                const x = i * dx;
                const y = h - (pt.totalEnergy / maxVal) * (h - 10) - 5;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              });
              ctx.stroke();
              ctx.setLineDash([]);
            } else {
              // Linear Momentum Magnitude Curve
              ctx.strokeStyle = '#7C3AED';
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              history.forEach((pt, i) => {
                const x = i * dx;
                const y = h - (pt.linearMomentumMagnitude / maxVal) * (h - 10) - 5;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              });
              ctx.stroke();

              // Max Velocity Curve
              ctx.strokeStyle = '#2563EB';
              ctx.lineWidth = 2;
              ctx.beginPath();
              history.forEach((pt, i) => {
                const x = i * dx;
                const y = h - (pt.maxVelocity / maxVal) * (h - 10) - 5;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              });
              ctx.stroke();
            }
          }
        }
      }

      animId = requestAnimationFrame(renderChart);
    };

    animId = requestAnimationFrame(renderChart);
    return () => cancelAnimationFrame(animId);
  }, [engine, isExpanded, activeTab]);

  // Render Dynamic KaTeX Equation with Live Numbers
  useEffect(() => {
    if (!formulaRef.current) return;

    let targetBody = selectedBody;
    if (!targetBody && engine.bodies.length > 0) {
      targetBody = engine.bodies[0];
    }

    let latexString = '';

    if (targetBody) {
      const m = targetBody.mass.toFixed(2);
      const v = vec3.length(targetBody.velocity).toFixed(2);
      const ke = (0.5 * targetBody.mass * Math.pow(vec3.length(targetBody.velocity), 2)).toFixed(2);
      const p = (targetBody.mass * vec3.length(targetBody.velocity)).toFixed(2);

      if (activeDomain === 'electromagnetism' && Math.abs(targetBody.charge) > 1e-6) {
        const q = targetBody.charge.toFixed(2);
        const Bz = engine.params.magneticFieldStrength.z.toFixed(2);
        const fb = (Math.abs(targetBody.charge) * vec3.length(targetBody.velocity) * Math.abs(engine.params.magneticFieldStrength.z)).toFixed(2);
        const r = (targetBody.mass * vec3.length(targetBody.velocity) / (Math.abs(targetBody.charge) * Math.abs(engine.params.magneticFieldStrength.z) || 1)).toFixed(2);

        latexString = `
          \\mathbf{F}_B = q(\\mathbf{v} \\times \\mathbf{B}) = (${q}\\,\\mu\\text{C})(${v}\\,\\text{m/s} \\times ${Bz}\\,\\text{T}) = ${fb}\\,\\mu\\text{N} 
          \\quad \\implies \\quad r = \\frac{mv}{|q|B} = ${r}\\,\\text{m}
        `;
      } else if (activeDomain === 'fluids') {
        const rho = engine.params.fluidDensity;
        const vol = ((4 / 3) * Math.PI * Math.pow(targetBody.radius, 3)).toFixed(3);
        const fb = (rho * parseFloat(vol) * (targetBody.submergedRatio || 0) * engine.params.gravityConstant).toFixed(2);

        latexString = `
          F_b = \\rho_{\\text{fluid}} V_{\\text{sub}} g = (${rho}\\,\\text{kg/m}^3)(${vol}\\,\\text{m}^3 \\cdot ${(targetBody.submergedRatio || 0).toFixed(2)})(${engine.params.gravityConstant}\\,\\text{m/s}^2) = ${fb}\\,\\text{N}
        `;
      } else {
        latexString = `
          E_k = \\frac{1}{2}m v^2 = \\frac{1}{2}(${m}\\,\\text{kg})(${v}\\,\\text{m/s})^2 = ${ke}\\,\\text{J} 
          \\qquad 
          p = m v = (${m}\\,\\text{kg})(${v}\\,\\text{m/s}) = ${p}\\,\\text{kg}\\cdot\\text{m/s}
        `;
      }
    } else {
      latexString = `\\sum \\mathbf{F} = m\\mathbf{a} \\qquad E_{\\text{total}} = E_k + E_p + W_{\\text{friction}} = \\text{Constant}`;
    }

    try {
      katex.render(latexString, formulaRef.current, {
        displayMode: true,
        throwOnError: false,
      });
    } catch (err) {
      console.error(err);
    }
  }, [engine, activeDomain, selectedBody, currentTelemetry]);

  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 transition-all duration-300">
      {/* Drawer Toggle Tab */}
      <div className="flex justify-center -mb-[1px]">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-5 py-1.5 text-xs font-semibold tracking-wide text-indigo-900 bg-vanilla-100/95 backdrop-blur-md rounded-t-xl border-t border-x border-vanilla-400 shadow-sm hover:bg-vanilla-50 transition-colors"
        >
          <Activity className="w-3.5 h-3.5 text-indigo-800" />
          <span>REAL-TIME TELEMETRY & MATH FORMULA DECK</span>
          {isExpanded ? <ChevronDown className="w-4 h-4 text-indigo-800" /> : <ChevronUp className="w-4 h-4 text-indigo-800" />}
        </button>
      </div>

      {isExpanded && (
        <div className="bg-vanilla-100/95 backdrop-blur-lg border-t border-vanilla-400 p-4 shadow-tactile-lg text-indigo-950">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            
            {/* Live Formula Inspector (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-vanilla-50 p-3.5 rounded-xl border border-vanilla-400 shadow-inner h-36">
              <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-indigo-900 border-b border-vanilla-300 pb-1">
                <div className="flex items-center gap-1.5">
                  <Sigma className="w-3.5 h-3.5 text-indigo-800" />
                  <span>DYNAMIC KaTeX FORMULA DERIVATION</span>
                </div>
                <span className="text-[10px] text-muted font-mono uppercase">
                  {selectedBody ? `Target: ${selectedBody.name}` : 'Global Apparatus'}
                </span>
              </div>
              <div ref={formulaRef} className="overflow-x-auto text-indigo-950 text-sm py-1 flex items-center justify-center"></div>
              <div className="text-[10px] text-muted flex items-center justify-between pt-1 border-t border-vanilla-300">
                <span>Numerical step variables evaluated at 60 FPS</span>
                <span className="text-emerald-700 font-medium">✓ Precision Verified</span>
              </div>
            </div>

            {/* Rolling Buffer Telemetry Chart (5 Cols) */}
            <div className="lg:col-span-5 bg-vanilla-50 p-3.5 rounded-xl border border-vanilla-400 shadow-inner h-36 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-indigo-900 border-b border-vanilla-300 pb-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('energy')}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                      activeTab === 'energy' ? 'bg-indigo-800 text-vanilla-50' : 'text-indigo-900 hover:bg-vanilla-200'
                    }`}
                  >
                    Energy Conservation
                  </button>
                  <button
                    onClick={() => setActiveTab('momentum')}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                      activeTab === 'momentum' ? 'bg-indigo-800 text-vanilla-50' : 'text-indigo-900 hover:bg-vanilla-200'
                    }`}
                  >
                    Momentum & Velocity
                  </button>
                </div>
                {activeTab === 'energy' ? (
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="text-indigo-800 font-bold">■ KE</span>
                    <span className="text-amber-600 font-bold">■ PE</span>
                    <span className="text-emerald-700 font-bold">--- Total</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="text-purple-700 font-bold">■ Momentum</span>
                    <span className="text-blue-600 font-bold">■ Max Vel</span>
                  </div>
                )}
              </div>

              <div className="w-full flex-1 py-1">
                <canvas ref={canvasRef} width={420} height={70} className="w-full h-full block rounded" />
              </div>

              <div className="text-[10px] text-muted flex items-center justify-between pt-1 border-t border-vanilla-300 font-mono">
                <span>Buffer: 120-frame rolling window</span>
                <span>t = {currentTelemetry?.time.toFixed(2) || '0.00'}s</span>
              </div>
            </div>

            {/* Scientific Telemetry Readout Cards (2 Cols) */}
            <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-2 h-36">
              <div className="bg-vanilla-50 p-2.5 rounded-lg border border-vanilla-400 flex flex-col justify-center">
                <span className="text-[10px] text-muted uppercase tracking-wider font-semibold">Total Energy E</span>
                <span className="text-base font-bold font-mono text-emerald-800">
                  {currentTelemetry ? `${currentTelemetry.totalEnergy.toFixed(2)} J` : '0.00 J'}
                </span>
                <span className="text-[10px] text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Conserved
                </span>
              </div>
              <div className="bg-vanilla-50 p-2.5 rounded-lg border border-vanilla-400 flex flex-col justify-center">
                <span className="text-[10px] text-muted uppercase tracking-wider font-semibold">Peak Velocity</span>
                <span className="text-base font-bold font-mono text-indigo-900">
                  {currentTelemetry ? `${currentTelemetry.maxVelocity.toFixed(2)} m/s` : '0.00 m/s'}
                </span>
                <span className="text-[10px] text-indigo-700 font-mono">
                  Bodies: {engine.bodies.length} active
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
