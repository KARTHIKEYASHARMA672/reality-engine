import React from 'react';
import { PhysicsDomain } from '../types/physics';
import {
  Play,
  Pause,
  RotateCcw,
  StepForward,
  BookOpen,
  Compass,
  FileText,
  Trash2,
  Eye,
  GitCommit,
  Sparkles
} from 'lucide-react';

interface HeaderBarProps {
  activeDomain: PhysicsDomain;
  onSelectDomain: (domain: PhysicsDomain) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onStepForward: () => void;
  onReset: () => void;
  onClearBodies: () => void;
  timeDilation: number;
  onChangeTimeDilation: (speed: number) => void;
  showVectorField: boolean;
  onToggleVectorField: () => void;
  showTrails: boolean;
  onToggleTrails: () => void;
  onOpenConcepts: () => void;
  onOpenGuidedLabs: () => void;
  onOpenReport: () => void;
  conceptsCount: number;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  activeDomain,
  onSelectDomain,
  isPlaying,
  onTogglePlay,
  onStepForward,
  onReset,
  onClearBodies,
  timeDilation,
  onChangeTimeDilation,
  showVectorField,
  onToggleVectorField,
  showTrails,
  onToggleTrails,
  onOpenConcepts,
  onOpenGuidedLabs,
  onOpenReport,
  conceptsCount,
}) => {
  const domains: { id: PhysicsDomain; label: string }[] = [
    { id: 'mechanics', label: 'Mechanics & Orbits' },
    { id: 'collisions', label: '3D Collisions' },
    { id: 'electromagnetism', label: 'E & B Fields' },
    { id: 'fluids', label: 'Fluid Dynamics' },
    { id: 'thermodynamics', label: 'Thermal & Gas' },
    { id: 'modern', label: 'Waves & Quantum' },
  ];

  const speeds = [0.2, 0.5, 1.0, 2.0, 4.0];

  return (
    <header className="h-16 bg-vanilla-100 border-b border-vanilla-400 px-4 flex items-center justify-between shadow-tactile select-none z-30 relative text-indigo-950">
      
      {/* Brand & Identity */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-indigo-800 text-vanilla-50 flex items-center justify-center shadow-md">
          <Sparkles className="w-5 h-5 text-indigo-300" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-sm tracking-wider font-serif text-indigo-950">REALITY ENGINE</h1>
            <span className="text-[10px] font-mono font-bold bg-vanilla-300 text-indigo-900 px-1.5 py-0.5 rounded">
              v1.0 LAB
            </span>
          </div>
          <p className="text-[10px] text-muted tracking-tight">Physics-Based Virtual Laboratory & Telemetry</p>
        </div>
      </div>

      {/* Domain Switcher Tabs */}
      <div className="hidden md:flex items-center bg-vanilla-200 p-1 rounded-xl border border-vanilla-400">
        {domains.map(d => (
          <button
            key={d.id}
            onClick={() => onSelectDomain(d.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeDomain === d.id
                ? 'bg-indigo-800 text-vanilla-50 shadow-sm'
                : 'text-indigo-950 hover:bg-vanilla-300'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Simulation Time Controls */}
      <div className="flex items-center gap-2">
        <div className="flex items-center bg-vanilla-200/80 p-1 rounded-xl border border-vanilla-400">
          <button
            onClick={onTogglePlay}
            className={`p-1.5 rounded-lg font-bold transition-colors ${
              isPlaying ? 'bg-amber-600 text-white' : 'bg-indigo-800 text-vanilla-50'
            }`}
            title={isPlaying ? 'Pause Simulation (Space)' : 'Play Simulation (Space)'}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
          </button>
          
          <button
            onClick={onStepForward}
            className="p-1.5 text-indigo-900 hover:bg-vanilla-300 rounded-lg transition-colors"
            title="Step Forward (dt)"
          >
            <StepForward className="w-4 h-4" />
          </button>

          <button
            onClick={onReset}
            className="p-1.5 text-indigo-900 hover:bg-vanilla-300 rounded-lg transition-colors"
            title="Reset Simulation State"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Speed Dilation Dropdown/Buttons */}
        <div className="hidden lg:flex items-center gap-1 bg-vanilla-200/80 p-1 rounded-xl border border-vanilla-400 text-[11px] font-mono">
          {speeds.map(s => (
            <button
              key={s}
              onClick={() => onChangeTimeDilation(s)}
              className={`px-1.5 py-0.5 rounded ${
                timeDilation === s ? 'bg-indigo-800 text-vanilla-50 font-bold' : 'text-indigo-900 hover:bg-vanilla-300'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>

        {/* Visualizer Overlays Toggles */}
        <div className="flex items-center gap-1 bg-vanilla-200/80 p-1 rounded-xl border border-vanilla-400">
          <button
            onClick={onToggleVectorField}
            className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 transition-colors ${
              showVectorField ? 'bg-indigo-800 text-vanilla-50' : 'text-indigo-900 hover:bg-vanilla-300'
            }`}
            title="Toggle 3D Vector Field Arrows"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden xl:inline text-[11px]">Field Arrows</span>
          </button>

          <button
            onClick={onToggleTrails}
            className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 transition-colors ${
              showTrails ? 'bg-indigo-800 text-vanilla-50' : 'text-indigo-900 hover:bg-vanilla-300'
            }`}
            title="Toggle Trajectory Ribbon Trails"
          >
            <GitCommit className="w-3.5 h-3.5" />
            <span className="hidden xl:inline text-[11px]">Trails</span>
          </button>
        </div>
      </div>

      {/* Main Drawer Launchers */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenGuidedLabs}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-vanilla-200 hover:bg-vanilla-300 border border-vanilla-400 text-indigo-900 rounded-xl transition-colors shadow-sm"
        >
          <Compass className="w-3.5 h-3.5 text-indigo-800" />
          <span className="hidden sm:inline">Historic Labs</span>
        </button>

        <button
          onClick={onOpenConcepts}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-indigo-800 hover:bg-indigo-900 text-vanilla-50 rounded-xl transition-colors shadow-sm"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Concepts ({conceptsCount})</span>
        </button>

        <button
          onClick={onOpenReport}
          className="p-2 text-indigo-900 bg-vanilla-200 hover:bg-vanilla-300 border border-vanilla-400 rounded-xl transition-colors"
          title="Open Lab Observation Report"
        >
          <FileText className="w-4 h-4" />
        </button>

        <button
          onClick={onClearBodies}
          className="p-2 text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl transition-colors"
          title="Clear All Bodies"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

    </header>
  );
};
