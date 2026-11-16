import sys
import json
import os

sys.path.append(os.path.join(os.path.dirname(__file__)))

from branch1_mechanics import BRANCH1_CONCEPTS
from branch2_collisions import BRANCH2_CONCEPTS
from branch3_electromagnetism import BRANCH3_CONCEPTS
from branch4_fluids import BRANCH4_CONCEPTS
from branch5_thermodynamics import BRANCH5_CONCEPTS
try:
    from branch6_modern import BRANCH6_CONCEPTS
except ImportError:
    BRANCH6_CONCEPTS = []

all_concepts = (
    BRANCH1_CONCEPTS +
    BRANCH2_CONCEPTS +
    BRANCH3_CONCEPTS +
    BRANCH4_CONCEPTS +
    BRANCH5_CONCEPTS +
    BRANCH6_CONCEPTS
)

print(f"Total concepts aggregated: {len(all_concepts)}")
output_path = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'physicsConcepts.ts')

json_str = json.dumps(all_concepts, indent=2, ensure_ascii=False)

ts_content = f"""import {{ PhysicsConcept }} from '../types/physics';

export const PHYSICS_CONCEPTS: PhysicsConcept[] = {json_str};
"""

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Successfully generated {output_path} with {len(all_concepts)} concepts!")
