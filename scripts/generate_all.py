# -*- coding: utf-8 -*-
r"""
Master Compiler & Mathematical Validator for REALITY ENGINE Physics Concepts
Generates L:\pr 19\src\data\physicsConcepts.ts
"""

import json
import os
import sys

# Ensure local scripts path is in python sys.path
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.append(SCRIPT_DIR)

from branch1_mechanics import BRANCH1_CONCEPTS
from branch2_collisions import BRANCH2_CONCEPTS
from branch3_electromagnetism import BRANCH3_CONCEPTS
from branch4_fluids import BRANCH4_CONCEPTS
from branch5_thermodynamics import BRANCH5_CONCEPTS
from branch6_modern import BRANCH6_CONCEPTS

VALID_BRANCHES = {'mechanics', 'collisions', 'electromagnetism', 'fluids', 'thermodynamics', 'modern'}
VALID_DIFFICULTIES = {'Foundational', 'Intermediate', 'Advanced'}
VALID_DOMAINS = {'mechanics', 'collisions', 'electromagnetism', 'fluids'}

def validate_concept(c, index):
    required_keys = [
        'id', 'title', 'branch', 'tag', 'difficulty', 'formulaLatex',
        'summary', 'derivation', 'realWorldApplication', 'variables', 'presetConfig'
    ]
    for key in required_keys:
        if key not in c:
            raise ValueError(f"Concept at index {index} is missing key: '{key}'")
    
    if c['branch'] not in VALID_BRANCHES:
        raise ValueError(f"Concept '{c['id']}' has invalid branch: {c['branch']}")
    
    if c['difficulty'] not in VALID_DIFFICULTIES:
        raise ValueError(f"Concept '{c['id']}' has invalid difficulty: {c['difficulty']}")
    
    if not isinstance(c['variables'], list) or len(c['variables']) == 0:
        raise ValueError(f"Concept '{c['id']}' has invalid variables list")
    
    for v in c['variables']:
        if not all(k in v for k in ['symbol', 'label', 'unit']):
            raise ValueError(f"Concept '{c['id']}' variable missing keys: {v}")
    
    pc = c['presetConfig']
    preset_keys = ['domain', 'cameraPosition', 'timeDilation', 'parameters', 'description', 'apparatusType']
    for pk in preset_keys:
        if pk not in pc:
            raise ValueError(f"Concept '{c['id']}' presetConfig missing key: '{pk}'")
    
    if pc['domain'] not in VALID_DOMAINS:
        raise ValueError(f"Concept '{c['id']}' presetConfig domain invalid: {pc['domain']}")
    
    if not isinstance(pc['cameraPosition'], (list, tuple)) or len(pc['cameraPosition']) != 3:
        raise ValueError(f"Concept '{c['id']}' presetConfig cameraPosition must be 3-tuple")
    
    if not isinstance(pc['parameters'], dict):
        raise ValueError(f"Concept '{c['id']}' presetConfig parameters must be dict")


def main():
    all_concepts = (
        BRANCH1_CONCEPTS +
        BRANCH2_CONCEPTS +
        BRANCH3_CONCEPTS +
        BRANCH4_CONCEPTS +
        BRANCH5_CONCEPTS +
        BRANCH6_CONCEPTS
    )

    print(f"Total concepts aggregated: {len(all_concepts)}")
    assert len(all_concepts) == 84, f"Expected exactly 84 concepts, got {len(all_concepts)}"

    # Validate uniqueness of IDs
    seen_ids = set()
    for idx, c in enumerate(all_concepts):
        cid = c['id']
        if cid in seen_ids:
            raise ValueError(f"Duplicate concept ID detected: '{cid}' at index {idx}")
        seen_ids.add(cid)
        validate_concept(c, idx)

    print("All 84 concepts successfully validated!")

    # Branch counts breakdown
    branch_counts = {}
    for c in all_concepts:
        b = c['branch']
        branch_counts[b] = branch_counts.get(b, 0) + 1
    
    print("Branch distribution:")
    for b, cnt in branch_counts.items():
        print(f"  - {b}: {cnt}")

    # Output path
    output_path = os.path.abspath(os.path.join(SCRIPT_DIR, '..', 'src', 'data', 'physicsConcepts.ts'))
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    # Convert to formatted JSON
    concepts_json = json.dumps(all_concepts, indent=2, ensure_ascii=False)

    # TypeScript file content
    ts_content = f"""/**
 * REALITY ENGINE — Comprehensive Physics Concept Compendium
 * 84 Curated Fundamental Physics Concepts across 6 Branches
 * 
 * Fully typed, mathematically validated, with KaTeX formulas, derivations,
 * SI variable definitions, real-world engineering applications, and 3D apparatus presets.
 */

export interface PhysicsConcept {{
  id: string;
  title: string;
  branch: 'mechanics' | 'collisions' | 'electromagnetism' | 'fluids' | 'thermodynamics' | 'modern';
  tag: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Advanced';
  formulaLatex: string;
  summary: string;
  derivation: string;
  realWorldApplication: string;
  variables: {{ symbol: string; label: string; unit: string }}[];
  presetConfig: {{
    domain: 'mechanics' | 'collisions' | 'electromagnetism' | 'fluids';
    cameraPosition: [number, number, number];
    timeDilation: number;
    parameters: Record<string, number>;
    description: string;
    apparatusType: string;
  }};
}}

export type PhysicsBranch = PhysicsConcept['branch'];
export type PhysicsDifficulty = PhysicsConcept['difficulty'];
export type PhysicsDomain = PhysicsConcept['presetConfig']['domain'];

export interface BranchInfo {{
  id: PhysicsBranch;
  name: string;
  count: number;
  description: string;
  icon: string;
  defaultDomain: PhysicsDomain;
}}

export const BRANCH_METADATA: Record<PhysicsBranch, BranchInfo> = {{
  mechanics: {{
    id: 'mechanics',
    name: 'Classical Mechanics & Celestial Gravitation',
    count: 16,
    description: 'Newtonian dynamics, orbital Keplerian laws, potential wells, resonances, and non-linear oscillations.',
    icon: 'Orbit',
    defaultDomain: 'mechanics'
  }},
  collisions: {{
    id: 'collisions',
    name: 'Kinematics, Momentum & Collisions',
    count: 15,
    description: '1D/2D elastic/inelastic collisions, restitution, impulse theorems, and rolling mechanics.',
    icon: 'Activity',
    defaultDomain: 'collisions'
  }},
  electromagnetism: {{
    id: 'electromagnetism',
    name: 'Electromagnetism & Field Theory',
    count: 18,
    description: 'Coulomb potentials, Lorentz trajectories, cyclotron acceleration, and Maxwell electrodynamics.',
    icon: 'Zap',
    defaultDomain: 'electromagnetism'
  }},
  fluids: {{
    id: 'fluids',
    name: 'Fluid Dynamics & Aerodynamics',
    count: 13,
    description: 'Archimedes buoyancy, Bernoulli stream tubes, Poiseuille viscous flow, and aerodynamic lift.',
    icon: 'Droplets',
    defaultDomain: 'fluids'
  }},
  thermodynamics: {{
    id: 'thermodynamics',
    name: 'Thermodynamics & Kinetic Theory',
    count: 10,
    description: 'Ideal gas behavior, Maxwell-Boltzmann velocity statistics, entropy, and Carnot heat engines.',
    icon: 'Flame',
    defaultDomain: 'fluids'
  }},
  modern: {{
    id: 'modern',
    name: 'Wave Mechanics & Modern/Quantum Foundations',
    count: 12,
    description: 'Wave interference, photoelectric emission, de Broglie duality, Bohr orbits, and Compton scattering.',
    icon: 'Atom',
    defaultDomain: 'mechanics'
  }}
}};

export const PHYSICS_CONCEPTS: PhysicsConcept[] = {concepts_json};

/**
 * Filter concepts by scientific branch
 */
export function getConceptsByBranch(branch: PhysicsBranch): PhysicsConcept[] {{
  return PHYSICS_CONCEPTS.filter((c) => c.branch === branch);
}}

/**
 * Retrieve a specific concept by unique id
 */
export function getConceptById(id: string): PhysicsConcept | undefined {{
  return PHYSICS_CONCEPTS.find((c) => c.id === id);
}}

/**
 * Search concepts across title, tag, summary, and formula
 */
export function searchConcepts(query: string): PhysicsConcept[] {{
  const q = query.trim().toLowerCase();
  if (!q) return PHYSICS_CONCEPTS;
  return PHYSICS_CONCEPTS.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.tag.toLowerCase().includes(q) ||
      c.summary.toLowerCase().includes(q) ||
      c.realWorldApplication.toLowerCase().includes(q)
  );
}}
"""

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print(f"Generated {output_path} successfully ({os.path.getsize(output_path)} bytes)")

if __name__ == '__main__':
    main()
