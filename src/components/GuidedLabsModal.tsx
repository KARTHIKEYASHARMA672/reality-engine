import React, { useState } from 'react';
import { GuidedLabExperiment } from '../types/physics';
import { GUIDED_LABS } from '../data/guidedLabs';
import { Compass, X, Play, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';

interface GuidedLabsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLab: (lab: GuidedLabExperiment) => void;
}

export const GuidedLabsModal: React.FC<GuidedLabsModalProps> = ({
  isOpen,
  onClose,
  onSelectLab,
}) => {
  const [selectedLab, setSelectedLab] = useState<GuidedLabExperiment>(GUIDED_LABS[0]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-950/50 backdrop-blur-sm p-4">
      <div className="bg-vanilla-100 border border-vanilla-400 rounded-2xl shadow-tactile-lg w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden text-indigo-950">
        
        {/* Header */}
        <div className="p-4 border-b border-vanilla-400 bg-vanilla-200/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-800" />
            <div>
              <h2 className="font-bold text-sm tracking-wide text-indigo-900">CURATED HISTORIC EXPERIMENTS</h2>
              <p className="text-[11px] text-muted">Benchmark physics laboratories with step-by-step observation guides</p>
            </div>
          </div>
          <button onClick={onClose} data-testid="close-labs" className="p-1 text-muted hover:text-indigo-950">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content split */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left List of Labs */}
          <div className="w-72 border-r border-vanilla-400 overflow-y-auto p-2 space-y-1.5 bg-vanilla-50/50">
            {GUIDED_LABS.map(lab => (
              <button
                key={lab.id}
                onClick={() => setSelectedLab(lab)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between ${
                  selectedLab.id === lab.id
                    ? 'bg-indigo-800 text-vanilla-50 shadow-sm'
                    : 'hover:bg-vanilla-200 text-indigo-950'
                }`}
              >
                <div>
                  <div className="font-bold text-xs">{lab.title}</div>
                  <div className={`text-[10px] uppercase font-mono tracking-wider ${
                    selectedLab.id === lab.id ? 'text-indigo-200' : 'text-muted'
                  }`}>
                    Domain: {lab.domain}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </button>
            ))}
          </div>

          {/* Right Lab Detail Dossier */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full font-bold">
                  {selectedLab.domain.toUpperCase()} LABORATORY
                </span>
                <h1 className="text-xl font-bold font-serif text-indigo-900 mt-2">{selectedLab.title}</h1>
                <p className="text-xs text-muted font-medium">{selectedLab.subtitle}</p>
              </div>

              {/* Historical Context Callout */}
              <div className="p-3.5 bg-vanilla-50 rounded-xl border border-vanilla-300 text-xs text-indigo-900 leading-relaxed">
                <span className="font-bold text-indigo-950 block mb-1">📜 Historical Significance:</span>
                {selectedLab.historicalContext}
              </div>

              {/* Scientific Objective */}
              <div className="text-xs space-y-1">
                <span className="font-bold text-indigo-950">Scientific Objective:</span>
                <p className="text-muted leading-relaxed">{selectedLab.scientificObjective}</p>
              </div>

              {/* Step-by-step Procedure */}
              <div className="text-xs space-y-2">
                <span className="font-bold text-indigo-950">Experimental Protocol:</span>
                <div className="space-y-1.5">
                  {selectedLab.procedureSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-vanilla-50 p-2.5 rounded-lg border border-vanilla-300">
                      <span className="w-4 h-4 rounded-full bg-indigo-800 text-vanilla-50 text-[10px] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-indigo-950 text-[11px] leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Outcome */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-300 rounded-xl text-xs text-emerald-950">
                <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Expected Scientific Observation:</span>
                </div>
                <p className="text-[11px] text-emerald-900 leading-relaxed">{selectedLab.expectedOutcome}</p>
              </div>
            </div>

            {/* Launch Action Bar */}
            <div className="pt-4 border-t border-vanilla-300 flex items-center justify-between">
              <span className="text-xs text-muted">Clicking launch configures apparatus & mounts scene</span>
              <button
                onClick={() => {
                  onSelectLab(selectedLab);
                  onClose();
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-800 hover:bg-indigo-900 text-vanilla-50 rounded-xl font-bold text-xs shadow-tactile transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>MOUNT & LAUNCH EXPERIMENT</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
