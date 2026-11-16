import React, { useState, useMemo } from 'react';
import katex from 'katex';
import { PhysicsConcept, PhysicsDomain } from '../types/physics';
import {
  BookOpen,
  Search,
  X,
  Play,
  ChevronDown,
  ChevronUp,
  Tag,
  Zap,
  Globe,
  Sliders,
  CheckCircle2
} from 'lucide-react';

interface ConceptCompendiumDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  concepts: PhysicsConcept[];
  onSelectConcept: (concept: PhysicsConcept) => void;
  activeDomain: PhysicsDomain;
}

export const ConceptCompendiumDrawer: React.FC<ConceptCompendiumDrawerProps> = ({
  isOpen,
  onClose,
  concepts,
  onSelectConcept,
  activeDomain,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [expandedConceptId, setExpandedConceptId] = useState<string | null>(null);

  const branches = [
    { id: 'all', label: 'All Branches' },
    { id: 'mechanics', label: 'Mechanics & Gravity' },
    { id: 'collisions', label: 'Collisions & Momentum' },
    { id: 'electromagnetism', label: 'Electromagnetism' },
    { id: 'fluids', label: 'Fluid Dynamics' },
    { id: 'thermodynamics', label: 'Thermodynamics' },
    { id: 'modern', label: 'Wave & Modern Physics' },
  ];

  const filteredConcepts = useMemo(() => {
    return concepts.filter(c => {
      const matchesBranch = selectedBranch === 'all' || c.branch === selectedBranch;
      const matchesDiff = selectedDifficulty === 'all' || c.difficulty === selectedDifficulty;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.tag.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.realWorldApplication.toLowerCase().includes(q);

      return matchesBranch && matchesDiff && matchesSearch;
    });
  }, [concepts, selectedBranch, selectedDifficulty, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 left-0 z-40 w-full sm:w-[480px] bg-vanilla-100/95 backdrop-blur-xl border-r border-vanilla-400 shadow-tactile-lg flex flex-col text-indigo-950">
      
      {/* Header */}
      <div className="p-4 border-b border-vanilla-400 bg-vanilla-200/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-800" />
          <div>
            <h2 className="font-bold text-sm tracking-wide text-indigo-900">PHYSICS CONCEPT COMPENDIUM</h2>
            <p className="text-[11px] text-muted">{concepts.length} Academic Concepts • Derivations & 3D Presets</p>
          </div>
        </div>
        <button onClick={onClose} data-testid="close-concepts" className="p-1 text-muted hover:text-indigo-950">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Search & Filter Controls */}
      <div className="p-4 border-b border-vanilla-300 space-y-3 bg-vanilla-50/50">
        <div className="relative">
          <Search className="w-4 h-4 text-muted absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search concepts, laws, formulas, phenomena..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-vanilla-50 border border-vanilla-400 rounded-xl focus:outline-none focus:border-indigo-700 text-indigo-950"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2 text-xs text-muted hover:text-indigo-900"
            >
              ✕
            </button>
          )}
        </div>

        {/* Branch Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
          {branches.map(b => (
            <button
              key={b.id}
              onClick={() => setSelectedBranch(b.id)}
              className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedBranch === b.id
                  ? 'bg-indigo-800 text-vanilla-50 shadow-sm'
                  : 'bg-vanilla-200 hover:bg-vanilla-300 text-indigo-950'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <div className="text-[11px] font-mono text-muted flex justify-between">
          <span>Showing {filteredConcepts.length} of {concepts.length} concepts</span>
          <span>Click to view derivations & test in 3D</span>
        </div>

        {filteredConcepts.map(c => {
          const isExpanded = expandedConceptId === c.id;

          // Render LaTeX formula
          let renderedLatex = '';
          try {
            renderedLatex = katex.renderToString(c.formulaLatex, { displayMode: true, throwOnError: false });
          } catch {
            renderedLatex = c.formulaLatex;
          }

          return (
            <div
              key={c.id}
              className={`rounded-xl border transition-all ${
                isExpanded ? 'bg-vanilla-50 border-indigo-400 shadow-sm' : 'bg-vanilla-50/80 border-vanilla-400 hover:border-indigo-300'
              }`}
            >
              {/* Card Header */}
              <div className="p-3.5 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded font-bold">
                        {c.branch}
                      </span>
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                        c.difficulty === 'Foundational' ? 'bg-emerald-100 text-emerald-800' :
                        c.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {c.difficulty}
                      </span>
                    </div>
                    <h3 className="font-bold text-xs text-indigo-950 font-serif leading-snug">{c.title}</h3>
                  </div>

                  <button
                    onClick={() => {
                      onSelectConcept(c);
                      onClose();
                    }}
                    className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold bg-indigo-800 hover:bg-indigo-900 text-vanilla-50 rounded-lg shadow-sm transition-colors"
                    title="Load apparatus and test in 3D simulation"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Test</span>
                  </button>
                </div>

                {/* KaTeX Formula Display */}
                <div
                  className="bg-vanilla-100 p-2 rounded-lg border border-vanilla-300 overflow-x-auto text-center"
                  dangerouslySetInnerHTML={{ __html: renderedLatex }}
                />

                {/* Summary */}
                <p className="text-[11px] text-muted leading-relaxed line-clamp-2">
                  {c.summary}
                </p>

                {/* Tag & Expand Button */}
                <div className="flex items-center justify-between pt-1 border-t border-vanilla-300 text-[10px]">
                  <span className="text-muted flex items-center gap-1 font-mono">
                    <Tag className="w-3 h-3 text-indigo-600" />
                    {c.tag}
                  </span>
                  <button
                    onClick={() => setExpandedConceptId(isExpanded ? null : c.id)}
                    className="text-indigo-800 font-semibold hover:text-indigo-950 flex items-center gap-0.5"
                  >
                    <span>{isExpanded ? 'Hide Derivation' : 'Full Derivation'}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>
              </div>

              {/* Expanded Derivation & Real-World Application */}
              {isExpanded && (
                <div className="px-3.5 pb-3.5 pt-1 space-y-3 text-xs border-t border-vanilla-300 bg-vanilla-100/60 rounded-b-xl">
                  {/* Derivation */}
                  <div>
                    <span className="font-bold text-[11px] text-indigo-950 block mb-1">Mathematical Derivation:</span>
                    <p className="text-[11px] text-muted leading-relaxed whitespace-pre-line bg-vanilla-50 p-2.5 rounded border border-vanilla-300 font-mono">
                      {c.derivation}
                    </p>
                  </div>

                  {/* Real-World Application */}
                  <div>
                    <span className="font-bold text-[11px] text-indigo-950 block mb-1">Real-World Application:</span>
                    <p className="text-[11px] text-muted leading-relaxed bg-vanilla-50 p-2 rounded border border-vanilla-300 flex items-start gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-indigo-700 flex-shrink-0 mt-0.5" />
                      <span>{c.realWorldApplication}</span>
                    </p>
                  </div>

                  {/* Variable Legend */}
                  {c.variables && c.variables.length > 0 && (
                    <div>
                      <span className="font-bold text-[11px] text-indigo-950 block mb-1">Variables & Units:</span>
                      <div className="grid grid-cols-2 gap-1 text-[10px] font-mono">
                        {c.variables.map((v, idx) => (
                          <div key={idx} className="bg-vanilla-50 p-1 rounded border border-vanilla-300 flex justify-between">
                            <span className="font-bold text-indigo-900">{v.symbol}</span>
                            <span className="text-muted">{v.label} ({v.unit})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Load Action Button */}
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => {
                        onSelectConcept(c);
                        onClose();
                      }}
                      className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-bold bg-indigo-800 hover:bg-indigo-900 text-vanilla-50 rounded-lg shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>LOAD APPARATUS INTO 3D LAB</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
