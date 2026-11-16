import { describe, it, expect } from 'vitest';
import {
  PHYSICS_CONCEPTS,
  BRANCH_METADATA,
  getConceptsByBranch,
  getConceptById,
  searchConcepts,
  type PhysicsBranch
} from '../data/physicsConcepts';

describe('REALITY ENGINE — Concept Compendium (120 Concepts)', () => {
  it('contains exactly 120 curated physics concepts', () => {
    expect(PHYSICS_CONCEPTS).toHaveLength(120);
  });

  it('verifies all 120 concept IDs are distinct and non-empty', () => {
    const ids = new Set<string>();
    for (const c of PHYSICS_CONCEPTS) {
      expect(c.id).toBeTruthy();
      expect(typeof c.id).toBe('string');
      expect(ids.has(c.id)).toBe(false);
      ids.add(c.id);
    }
    expect(ids.size).toBe(120);
  });

  it('verifies exact branch distributions across all 6 physics branches', () => {
    const branchExpectedCounts: Record<PhysicsBranch, number> = {
      mechanics: 22,
      collisions: 20,
      electromagnetism: 24,
      fluids: 19,
      thermodynamics: 16,
      modern: 19
    };

    for (const [branch, count] of Object.entries(branchExpectedCounts) as [PhysicsBranch, number][]) {
      const concepts = getConceptsByBranch(branch);
      expect(concepts).toHaveLength(count);
      expect(BRANCH_METADATA[branch].count).toBe(count);
    }
  });

  it('validates complete mathematical rigor and structure of each concept', () => {
    const validDomains = new Set(['mechanics', 'collisions', 'electromagnetism', 'fluids']);
    const validDifficulties = new Set(['Foundational', 'Intermediate', 'Advanced']);

    for (const c of PHYSICS_CONCEPTS) {
      // Titles and tags
      expect(c.title.length).toBeGreaterThan(5);
      expect(c.tag.length).toBeGreaterThan(2);
      expect(validDifficulties.has(c.difficulty)).toBe(true);

      // Formulas and text
      expect(c.formulaLatex.length).toBeGreaterThan(3);
      expect(c.summary.length).toBeGreaterThan(30);
      expect(c.derivation.length).toBeGreaterThan(100);
      expect(c.realWorldApplication.length).toBeGreaterThan(20);

      // Variables list
      expect(c.variables.length).toBeGreaterThanOrEqual(2);
      for (const v of c.variables) {
        expect(v.symbol).toBeTruthy();
        expect(v.label).toBeTruthy();
        expect(v.unit).toBeTruthy();
      }

      // 3D Preset configuration
      expect(validDomains.has(c.presetConfig.domain)).toBe(true);
      expect(c.presetConfig.cameraPosition).toHaveLength(3);
      expect(typeof c.presetConfig.timeDilation).toBe('number');
      expect(c.presetConfig.timeDilation).toBeGreaterThan(0);
      expect(c.presetConfig.description.length).toBeGreaterThan(10);
      expect(c.presetConfig.apparatusType.length).toBeGreaterThan(3);
      expect(Object.keys(c.presetConfig.parameters).length).toBeGreaterThan(0);
    }
  });

  it('retrieves concepts by ID accurately', () => {
    const newton = getConceptById('newtons-second-law');
    expect(newton).toBeDefined();
    expect(newton?.title).toContain("Newton's Second Law");
    expect(newton?.branch).toBe('mechanics');

    const lorentz = getConceptById('lorentz-force');
    expect(lorentz).toBeDefined();
    expect(lorentz?.formulaLatex).toContain('q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})');

    const bernoulli = getConceptById('bernoullis-principle');
    expect(bernoulli).toBeDefined();
    expect(bernoulli?.branch).toBe('fluids');

    const compton = getConceptById('compton-scattering-shift');
    expect(compton).toBeDefined();
    expect(compton?.branch).toBe('modern');

    // Test new concepts
    const eulerLagrange = getConceptById('euler-lagrange-action-principle');
    expect(eulerLagrange).toBeDefined();
    expect(eulerLagrange?.branch).toBe('mechanics');

    const maxwell = getConceptById('maxwell-ampere-displacement-current');
    expect(maxwell).toBeDefined();
    expect(maxwell?.branch).toBe('electromagnetism');

    const cherenkov = getConceptById('cherenkov-radiation-cone');
    expect(cherenkov).toBeDefined();
    expect(cherenkov?.branch).toBe('modern');
  });

  it('performs query searches effectively across titles and summaries', () => {
    const keplerSearch = searchConcepts('Kepler');
    expect(keplerSearch.length).toBeGreaterThanOrEqual(3);

    const entropySearch = searchConcepts('entropy');
    expect(entropySearch.length).toBeGreaterThanOrEqual(1);
    expect(entropySearch.some((c) => c.id === 'second-law-entropy')).toBe(true);

    const tunnelingSearch = searchConcepts('tunneling');
    expect(tunnelingSearch.length).toBeGreaterThanOrEqual(1);

    const emptySearch = searchConcepts('');
    expect(emptySearch).toHaveLength(120);
  });
});
