/**
 * REALITY ENGINE — Comprehensive Physics Concept Compendium
 * 84 Curated Fundamental Physics Concepts across 6 Branches
 * 
 * Fully typed, mathematically validated, with KaTeX formulas, derivations,
 * SI variable definitions, real-world engineering applications, and 3D apparatus presets.
 */

export interface PhysicsConcept {
  id: string;
  title: string;
  branch: 'mechanics' | 'collisions' | 'electromagnetism' | 'fluids' | 'thermodynamics' | 'modern';
  tag: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Advanced';
  formulaLatex: string;
  summary: string;
  derivation: string;
  realWorldApplication: string;
  variables: { symbol: string; label: string; unit: string }[];
  presetConfig: {
    domain: 'mechanics' | 'collisions' | 'electromagnetism' | 'fluids';
    cameraPosition: [number, number, number];
    timeDilation: number;
    parameters: Record<string, number>;
    description: string;
    apparatusType: string;
  };
}

export type PhysicsBranch = PhysicsConcept['branch'];
export type PhysicsDifficulty = PhysicsConcept['difficulty'];
export type PhysicsDomain = PhysicsConcept['presetConfig']['domain'];

export interface BranchInfo {
  id: PhysicsBranch;
  name: string;
  count: number;
  description: string;
  icon: string;
  defaultDomain: PhysicsDomain;
}

export const BRANCH_METADATA: Record<PhysicsBranch, BranchInfo> = {
  mechanics: {
    id: 'mechanics',
    name: 'Classical Mechanics & Celestial Gravitation',
    count: 16,
    description: 'Newtonian dynamics, orbital Keplerian laws, potential wells, resonances, and non-linear oscillations.',
    icon: 'Orbit',
    defaultDomain: 'mechanics'
  },
  collisions: {
    id: 'collisions',
    name: 'Kinematics, Momentum & Collisions',
    count: 15,
    description: '1D/2D elastic/inelastic collisions, restitution, impulse theorems, and rolling mechanics.',
    icon: 'Activity',
    defaultDomain: 'collisions'
  },
  electromagnetism: {
    id: 'electromagnetism',
    name: 'Electromagnetism & Field Theory',
    count: 18,
    description: 'Coulomb potentials, Lorentz trajectories, cyclotron acceleration, and Maxwell electrodynamics.',
    icon: 'Zap',
    defaultDomain: 'electromagnetism'
  },
  fluids: {
    id: 'fluids',
    name: 'Fluid Dynamics & Aerodynamics',
    count: 13,
    description: 'Archimedes buoyancy, Bernoulli stream tubes, Poiseuille viscous flow, and aerodynamic lift.',
    icon: 'Droplets',
    defaultDomain: 'fluids'
  },
  thermodynamics: {
    id: 'thermodynamics',
    name: 'Thermodynamics & Kinetic Theory',
    count: 10,
    description: 'Ideal gas behavior, Maxwell-Boltzmann velocity statistics, entropy, and Carnot heat engines.',
    icon: 'Flame',
    defaultDomain: 'fluids'
  },
  modern: {
    id: 'modern',
    name: 'Wave Mechanics & Modern/Quantum Foundations',
    count: 12,
    description: 'Wave interference, photoelectric emission, de Broglie duality, Bohr orbits, and Compton scattering.',
    icon: 'Atom',
    defaultDomain: 'mechanics'
  }
};

export const PHYSICS_CONCEPTS: PhysicsConcept[] = [
  {
    "id": "newtons-first-law",
    "title": "Newton's First Law of Motion (Law of Inertia)",
    "branch": "mechanics",
    "tag": "Inertial Reference Frames",
    "difficulty": "Foundational",
    "formulaLatex": "\\sum \\mathbf{F} = \\mathbf{0} \\iff \\frac{d\\mathbf{v}}{dt} = \\mathbf{0}",
    "summary": "An object at rest remains at rest, and an object in uniform rectilinear motion continues at constant velocity unless acted upon by a non-zero net external force. This law defines the class of inertial reference frames where Newtonian mechanics is valid without fictitious forces.",
    "derivation": "From Newton's second law, net force is the time rate of change of linear momentum: \\mathbf{F}_{\\text{net}} = \\frac{d\\mathbf{p}}{dt} = \\frac{d(m\\mathbf{v})}{dt}. For an object with invariant inertial mass m > 0 in an inertial frame, this simplifies to \\mathbf{F}_{\\text{net}} = m \\frac{d\\mathbf{v}}{dt} = m \\mathbf{a}. When the net external force is identically zero (\\sum \\mathbf{F} = \\mathbf{0}), we obtain m \\frac{d\\mathbf{v}}{dt} = \\mathbf{0}. Because m \\ne 0, it strictly follows that \\frac{d\\mathbf{v}}{dt} = \\mathbf{0}. Integrating both sides with respect to time yields \\mathbf{v}(t) = \\mathbf{v}_0 = \\text{constant vector}. Thus, in the absence of net force, velocity is invariant in both magnitude and spatial direction.",
    "realWorldApplication": "Interstellar probe trajectory planning: Deep space probes such as Voyager 1 and New Horizons coast across interstellar space at constant velocity without propellant expenditure once outside planetary gravitational influences.",
    "variables": [
      {
        "symbol": "\\mathbf{F}",
        "label": "Net External Force",
        "unit": "N"
      },
      {
        "symbol": "m",
        "label": "Inertial Mass",
        "unit": "kg"
      },
      {
        "symbol": "\\mathbf{v}",
        "label": "Velocity Vector",
        "unit": "m/s"
      },
      {
        "symbol": "t",
        "label": "Elapsed Time",
        "unit": "s"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        6,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "initialVelocity": 4.0,
        "frictionCoeff": 0.0,
        "mass": 2.0
      },
      "description": "Frictionless linear air bench demonstrating perpetual rectilinear motion at constant velocity.",
      "apparatusType": "frictionless_air_bench"
    }
  },
  {
    "id": "newtons-second-law",
    "title": "Newton's Second Law of Motion (Fundamental Dynamics)",
    "branch": "mechanics",
    "tag": "Momentum & Acceleration",
    "difficulty": "Foundational",
    "formulaLatex": "\\mathbf{F}_{\\text{net}} = \\frac{d\\mathbf{p}}{dt} = m \\mathbf{a}",
    "summary": "The time rate of change of linear momentum of a body is directly proportional to the applied net external force and occurs in the direction of that force vector. For constant mass, the resulting acceleration is directly proportional to net force and inversely proportional to mass.",
    "derivation": "Linear momentum is defined as \\mathbf{p} = m \\mathbf{v}. Newton's fundamental definition of force is \\mathbf{F}_{\\text{net}} = \\frac{d\\mathbf{p}}{dt}. Applying the Leibniz product rule yields \\mathbf{F}_{\\text{net}} = \\frac{d(m\\mathbf{v})}{dt} = m \\frac{d\\mathbf{v}}{dt} + \\mathbf{v} \\frac{dm}{dt}. In non-relativistic systems with constant mass (\\frac{dm}{dt} = 0), this simplifies to \\mathbf{F}_{\\text{net}} = m \\frac{d\\mathbf{v}}{dt} = m \\mathbf{a}. For systems with variable mass such as chemical rockets, the second term leads directly to the Tsiolkovsky rocket equation.",
    "realWorldApplication": "Aerospace launch vehicle propulsion: Rocket thrust profiles and stage separations are computed directly by balancing engine thrust, atmospheric aerodynamic drag, and gravitational force to achieve targeted orbital injection accelerations.",
    "variables": [
      {
        "symbol": "\\mathbf{F}_{\\text{net}}",
        "label": "Net Resultant Force",
        "unit": "N"
      },
      {
        "symbol": "m",
        "label": "Body Mass",
        "unit": "kg"
      },
      {
        "symbol": "\\mathbf{a}",
        "label": "Acceleration Vector",
        "unit": "m/s²"
      },
      {
        "symbol": "\\mathbf{p}",
        "label": "Linear Momentum",
        "unit": "kg·m/s"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "appliedForce": 18.0,
        "mass": 3.0,
        "trackLength": 25.0
      },
      "description": "Instrumented linear dynamic track demonstrating a = F/m acceleration under constant force.",
      "apparatusType": "accelerated_cart_track"
    }
  },
  {
    "id": "newtons-third-law",
    "title": "Newton's Third Law of Motion (Action-Reaction Pairs)",
    "branch": "mechanics",
    "tag": "Force Reciprocity",
    "difficulty": "Foundational",
    "formulaLatex": "\\mathbf{F}_{A \\to B} = -\\mathbf{F}_{B \\to A}",
    "summary": "Whenever two bodies interact, the force exerted by body A upon body B is equal in magnitude, opposite in direction, and collinear with the force simultaneously exerted by body B upon body A. These forces act on distinct bodies and never cancel each other.",
    "derivation": "Consider an isolated system composed of two interacting point particles A and B with masses m_A, m_B and velocities \\mathbf{v}_A, \\mathbf{v}_B. The total linear momentum of the system is \\mathbf{P}_{\\text{total}} = \\mathbf{p}_A + \\mathbf{p}_B. By Newton's second law, \\frac{d\\mathbf{p}_A}{dt} = \\mathbf{F}_{B \\to A} and \\frac{d\\mathbf{p}_B}{dt} = \\mathbf{F}_{A \\to B}. In the absence of external forces, total momentum is strictly conserved: \\frac{d\\mathbf{P}_{\\text{total}}}{dt} = \\mathbf{0} \\implies \\frac{d\\mathbf{p}_A}{dt} + \\frac{d\\mathbf{p}_B}{dt} = \\mathbf{0}. Substituting the respective forces yields \\mathbf{F}_{B \\to A} + \\mathbf{F}_{A \\to B} = \\mathbf{0} \\implies \\mathbf{F}_{A \\to B} = -\\mathbf{F}_{B \\to A}.",
    "realWorldApplication": "Rocket engine combustion chambers: Expulsion of high-velocity combustion gases through a de Laval nozzle exerts an equal and opposite reaction force against the combustion chamber dome, accelerating the rocket forward.",
    "variables": [
      {
        "symbol": "\\mathbf{F}_{A \\to B}",
        "label": "Force on Body B by Body A",
        "unit": "N"
      },
      {
        "symbol": "\\mathbf{F}_{B \\to A}",
        "label": "Force on Body A by Body B",
        "unit": "N"
      },
      {
        "symbol": "\\mathbf{P}",
        "label": "Total Isolated Momentum",
        "unit": "kg·m/s"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        5,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "massA": 2.0,
        "massB": 5.0,
        "springImpulse": 25.0
      },
      "description": "Dual recoil carts coupled by a compressed spring illustrating symmetric mutual reaction forces.",
      "apparatusType": "recoil_cart_pair"
    }
  },
  {
    "id": "universal-gravitation",
    "title": "Newton's Universal Law of Gravitation",
    "branch": "mechanics",
    "tag": "Inverse-Square Gravity",
    "difficulty": "Foundational",
    "formulaLatex": "\\mathbf{F}_g = -G \\frac{m_1 m_2}{r^2} \\hat{\\mathbf{r}}",
    "summary": "Every point mass in the universe attracts every other point mass with a force directly proportional to the product of their masses and inversely proportional to the square of the distance separating their centers.",
    "derivation": "Combining Kepler's empirical laws with circular centripetal acceleration a_c = \\frac{v^2}{r} = \\frac{4\\pi^2 r}{T^2}. Kepler's third law states \\frac{T^2}{r^3} = K (constant for all orbiting bodies around central mass M). Substituting T^2 into the acceleration formula yields a_c = \\frac{4\\pi^2 r}{K r^3} = \\frac{4\\pi^2}{K} \\frac{1}{r^2}. By Newton's second law, force on orbiting mass m is F = m a_c = \\frac{4\\pi^2 m}{K r^2}. By Newton's third law, the force must be symmetric in both masses, requiring the constant \\frac{4\\pi^2}{K} to be proportional to central mass M: \\frac{4\\pi^2}{K} = G M. Thus, the gravitational force magnitude is F = G \\frac{M m}{r^2}, acting attractively along the displacement vector -\\hat{\\mathbf{r}}.",
    "realWorldApplication": "Orbital mechanics of GPS satellites and interplanetary trajectory navigation for Mars rovers and lunar transfer orbits.",
    "variables": [
      {
        "symbol": "G",
        "label": "Newtonian Gravitational Constant",
        "unit": "N·m²/kg²"
      },
      {
        "symbol": "m_1",
        "label": "Primary Mass",
        "unit": "kg"
      },
      {
        "symbol": "m_2",
        "label": "Secondary Mass",
        "unit": "kg"
      },
      {
        "symbol": "r",
        "label": "Radial Separation",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        16,
        24
      ],
      "timeDilation": 0.8,
      "parameters": {
        "G": 6.674e-11,
        "mass1": 1000000000000.0,
        "mass2": 20000000000.0,
        "separation": 12.0
      },
      "description": "Gravitational two-body interaction well displaying mutual orbital curvature and vector lines.",
      "apparatusType": "two_body_gravity_well"
    }
  },
  {
    "id": "keplers-first-law",
    "title": "Kepler's First Law of Planetary Motion (Law of Ellipses)",
    "branch": "mechanics",
    "tag": "Orbital Conics",
    "difficulty": "Intermediate",
    "formulaLatex": "r(\\theta) = \\frac{a(1 - e^2)}{1 + e \\cos \\theta}",
    "summary": "The orbit of every planet is an ellipse with the Sun situated at one of its two geometric foci. The semi-major axis defines the orbit's spatial scale, while orbital eccentricity characterizes its deviation from circularity.",
    "derivation": "In a central inverse-square gravitational field \\mathbf{F} = -\\frac{GMm}{r^2}\\hat{\\mathbf{r}}, the specific angular momentum \\mathbf{h} = \\mathbf{r} \\times \\mathbf{v} is strictly conserved. In plane polar coordinates (r, \\theta), Binet's equation for central orbital motion substituting u = \\frac{1}{r} states: \\frac{d^2 u}{d\\theta^2} + u = -\\frac{F(1/u)}{m h^2 u^2}. Since F(1/u) = -\\frac{GMm}{(1/u)^2} = -GMm u^2, the right-hand side simplifies to \\frac{GM}{h^2}. This yields the linear inhomogeneous ordinary differential equation: \\frac{d^2 u}{d\\theta^2} + u = \\frac{GM}{h^2}. The general solution is u(\\theta) = \\frac{GM}{h^2}\\left(1 + e \\cos(\\theta - \\theta_0)\\right). Orienting coordinates such that periapsis occurs at \\theta_0 = 0 and defining the semi-latus rectum p = \\frac{h^2}{GM} = a(1 - e^2), we recover the polar equation of an ellipse: r(\\theta) = \\frac{a(1 - e^2)}{1 + e \\cos \\theta}.",
    "realWorldApplication": "Highly eccentric Molniya communications orbits and interplanetary transfer orbit insertion geometry (Hohmann transfer ellipses).",
    "variables": [
      {
        "symbol": "r",
        "label": "Radial Distance from Focus",
        "unit": "m"
      },
      {
        "symbol": "a",
        "label": "Semi-Major Axis",
        "unit": "m"
      },
      {
        "symbol": "e",
        "label": "Orbital Eccentricity",
        "unit": "dimensionless"
      },
      {
        "symbol": "\\theta",
        "label": "True Anomaly Angle",
        "unit": "rad"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        20,
        30
      ],
      "timeDilation": 0.6,
      "parameters": {
        "semiMajorAxis": 14.0,
        "eccentricity": 0.68,
        "centralMass": 600000000000.0
      },
      "description": "High-eccentricity elliptical orbit demonstrating focal positioning and variable orbital speed.",
      "apparatusType": "keplerian_elliptic_orbit"
    }
  },
  {
    "id": "keplers-second-law",
    "title": "Kepler's Second Law of Planetary Motion (Law of Equal Areas)",
    "branch": "mechanics",
    "tag": "Areal Velocity Conservation",
    "difficulty": "Intermediate",
    "formulaLatex": "\\frac{dA}{dt} = \\frac{1}{2} r^2 \\frac{d\\theta}{dt} = \\frac{L}{2m} = \\text{const}",
    "summary": "A radius vector joining any planet to the central sun sweeps out equal geometric areas during equal intervals of time. This law is an exact physical consequence of the conservation of orbital angular momentum under central forces.",
    "derivation": "In plane polar coordinates, the differential area dA swept out by the position vector \\mathbf{r} over time increment dt corresponds to the area of the infinitesimal triangle formed by \\mathbf{r} and d\\mathbf{r}: dA = \\frac{1}{2} |\\mathbf{r} \\times d\\mathbf{r}| = \\frac{1}{2} r (r d\\theta) = \\frac{1}{2} r^2 \\dot{\\theta} dt. Dividing by dt yields the instantaneous areal velocity: \\frac{dA}{dt} = \\frac{1}{2} r^2 \\dot{\\theta}. The orbital angular momentum magnitude is defined as L = |\\mathbf{r} \\times \\mathbf{p}| = m r^2 \\dot{\\theta}. Because the gravitational force is purely central, \\mathbf{F} \\parallel \\mathbf{r}, the net gravitational torque on the planet vanishes: \\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F} = \\mathbf{0}. Consequently, \\frac{d\\mathbf{L}}{dt} = \\boldsymbol{\\tau} = \\mathbf{0}, meaning L is strictly constant in time. Substituting L into the areal velocity expression gives \\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}.",
    "realWorldApplication": "Cometary orbital tracking: Long-period comets (e.g. Halley's Comet) accelerate to extreme speeds at perihelion and spend decades creeping slowly at distant aphelion.",
    "variables": [
      {
        "symbol": "\\frac{dA}{dt}",
        "label": "Areal Velocity",
        "unit": "m²/s"
      },
      {
        "symbol": "L",
        "label": "Orbital Angular Momentum",
        "unit": "kg·m²/s"
      },
      {
        "symbol": "r",
        "label": "Instantaneous Radius",
        "unit": "m"
      },
      {
        "symbol": "\\dot{\\theta}",
        "label": "Angular Velocity",
        "unit": "rad/s"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        18,
        28
      ],
      "timeDilation": 0.5,
      "parameters": {
        "eccentricity": 0.75,
        "semiMajorAxis": 12.0,
        "angularMomentum": 30.0
      },
      "description": "Sector area visualizer plotting dynamic geometric area sweeps across perihelion and aphelion.",
      "apparatusType": "areal_velocity_sweeper"
    }
  },
  {
    "id": "keplers-third-law",
    "title": "Kepler's Third Law of Planetary Motion (Harmonic Law)",
    "branch": "mechanics",
    "tag": "Orbital Harmonics",
    "difficulty": "Intermediate",
    "formulaLatex": "T^2 = \\frac{4\\pi^2}{G(M + m)} a^3",
    "summary": "The square of the orbital period of a celestial body is directly proportional to the cube of the semi-major axis of its orbit. The proportionality constant depends solely on the universal gravitational constant and the combined mass of the system.",
    "derivation": "For a circular orbit of radius r around central mass M \\gg m, equating gravitational attraction to the required centripetal force gives: \\frac{G M m}{r^2} = m \\frac{v^2}{r} \\implies v^2 = \\frac{G M}{r}. The orbital period T is the circumference divided by orbital speed: T = \\frac{2\\pi r}{v}. Squaring both sides: T^2 = \\frac{4\\pi^2 r^2}{v^2} = \\frac{4\\pi^2 r^2}{\\frac{GM}{r}} = \\frac{4\\pi^2}{GM} r^3. In general elliptical orbits, integration of areal velocity over one full period yields total area A = \\int_0^T \\frac{dA}{dt} dt = \\frac{L}{2m} T. The area of an ellipse is A = \\pi a b = \\pi a^2 \\sqrt{1 - e^2}. Since semi-latus rectum p = a(1 - e^2) = \\frac{L^2}{G(M+m)m^2}, substituting L gives T^2 = \\frac{4\\pi^2}{G(M + m)} a^3.",
    "realWorldApplication": "Determining supermassive black hole masses at galactic cores (such as Sagittarius A*) by monitoring the orbital periods and semi-major axes of surrounding S-stars.",
    "variables": [
      {
        "symbol": "T",
        "label": "Orbital Period",
        "unit": "s"
      },
      {
        "symbol": "a",
        "label": "Semi-Major Axis",
        "unit": "m"
      },
      {
        "symbol": "M",
        "label": "Primary Mass",
        "unit": "kg"
      },
      {
        "symbol": "G",
        "label": "Gravitational Constant",
        "unit": "N·m²/kg²"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        26,
        42
      ],
      "timeDilation": 0.4,
      "parameters": {
        "centralMass": 2500000000000.0,
        "orbitRadius1": 6.0,
        "orbitRadius2": 12.0,
        "orbitRadius3": 18.0
      },
      "description": "Multi-satellite concentric orbital system proving T² proportional to a³ across three bodies.",
      "apparatusType": "multi_planet_solar_system"
    }
  },
  {
    "id": "gravitational-potential-escape-velocity",
    "title": "Gravitational Potential Energy & Escape Velocity",
    "branch": "mechanics",
    "tag": "Potential Wells & Energetics",
    "difficulty": "Intermediate",
    "formulaLatex": "v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}, \\quad U(r) = -\\frac{GMm}{r}",
    "summary": "Gravitational potential energy represents the work required to assemble masses from infinite separation against mutual gravity. Escape velocity is the minimum ballistic speed needed to break free from a gravitational well without further propulsion.",
    "derivation": "The gravitational force is conservative: \\mathbf{F}_g = -\\frac{GMm}{r^2} \\hat{\\mathbf{r}}. Setting reference zero potential at infinity (U(\\infty) = 0), potential energy U(r) is defined as work done against gravity from r to \\infty: U(r) = -\\int_\\infty^r \\mathbf{F}_g \\cdot d\\mathbf{r}' = -\\int_\\infty^r \\left(-\\frac{GMm}{{r'}^2}\\right) dr' = \\left[-\\frac{GMm}{r'}\\right]_\\infty^r = -\\frac{GMm}{r}. Total mechanical energy of a projectile launched from radius R with speed v is E = K + U = \\frac{1}{2} m v^2 - \\frac{GMm}{R}. To escape to infinity, the projectile must reach r \\to \\infty with non-negative kinetic energy (E \\ge 0). The threshold boundary occurs at E = 0: \\frac{1}{2} m v_{\\text{esc}}^2 - \\frac{GMm}{R} = 0 \\implies v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}.",
    "realWorldApplication": "Lunar and interplanetary missions: Earth's escape velocity (11.186 km/s) dictates rocket stage sizing and fuel fraction for Mars or lunar transfer injections.",
    "variables": [
      {
        "symbol": "v_{\\text{esc}}",
        "label": "Escape Velocity",
        "unit": "m/s"
      },
      {
        "symbol": "U(r)",
        "label": "Gravitational Potential Energy",
        "unit": "J"
      },
      {
        "symbol": "M",
        "label": "Celestial Body Mass",
        "unit": "kg"
      },
      {
        "symbol": "R",
        "label": "Launch Radius",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        15,
        25
      ],
      "timeDilation": 0.7,
      "parameters": {
        "planetMass": 600000000000.0,
        "planetRadius": 5.0,
        "launchSpeed": 4.0
      },
      "description": "Sub-orbital, circular orbital, and hyperbolic escape trajectories launched from a spherical planet.",
      "apparatusType": "gravity_well_cannon"
    }
  },
  {
    "id": "orbital-resonance",
    "title": "Orbital Resonance & Gravitational Perturbations",
    "branch": "mechanics",
    "tag": "Non-Linear Orbital Mechanics",
    "difficulty": "Advanced",
    "formulaLatex": "\\frac{T_1}{T_2} = \\frac{p}{q}, \\quad p, q \\in \\mathbb{Z}^+",
    "summary": "Occurs when orbiting celestial bodies exert regular, periodic mutual gravitational tugs upon one another because their orbital periods are related by a ratio of small integers. This can produce orbital stability or rapid chaotic ejection.",
    "derivation": "Let mean orbital motions of two bodies be n_1 = \\frac{2\\pi}{T_1} and n_2 = \\frac{2\\pi}{T_2}. A mean-motion resonance satisfies p n_1 - q n_2 \\approx 0. In celestial perturbation theory, the gravitational disturbing function \\mathcal{R} acting on the secondary body is expanded as a Fourier series in mean longitudes \\lambda_1 = n_1 t + \\epsilon_1 and \\lambda_2 = n_2 t + \\epsilon_2: \\mathcal{R} = \\sum C_{j,k} \\cos(j \\lambda_1 - k \\lambda_2 + \\varpi). When j/k \\approx q/p, the argument \\phi = p \\lambda_1 - q \\lambda_2 + \\varpi oscillates very slowly (librates). Secular integration of Lagrange's planetary equations: \\frac{de}{dt} = -\\frac{\\sqrt{1-e^2}}{n a^2 e} \\frac{\\partial \\mathcal{R}}{\\partial \\varpi} demonstrates that resonant terms do not average to zero, generating secular amplifications in eccentricity and inclination.",
    "realWorldApplication": "The Laplace resonance among Jupiter's Galilean moons Io, Europa, and Ganymede (4:2:1 period ratio), maintaining Io's eccentric orbit and fueling immense tidal volcanic activity.",
    "variables": [
      {
        "symbol": "T_1",
        "label": "Inner Body Orbital Period",
        "unit": "s"
      },
      {
        "symbol": "T_2",
        "label": "Outer Body Orbital Period",
        "unit": "s"
      },
      {
        "symbol": "p, q",
        "label": "Small Integer Resonance Ratio",
        "unit": "dimensionless"
      },
      {
        "symbol": "\\phi",
        "label": "Resonant Resonating Angle",
        "unit": "rad"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        22,
        34
      ],
      "timeDilation": 0.5,
      "parameters": {
        "innerRadius": 5.0,
        "outerRadius": 7.937,
        "massRatio": 2.0
      },
      "description": "Simulated 2:1 mean-motion orbital resonance showing conjunction alignment and eccentricity oscillation.",
      "apparatusType": "resonant_moons_system"
    }
  },
  {
    "id": "lagrange-points",
    "title": "Lagrange Points (Three-Body Equilibrium Solutions)",
    "branch": "mechanics",
    "tag": "Effective Potential & Equilibrium",
    "difficulty": "Advanced",
    "formulaLatex": "\\nabla \\Phi_{\\text{eff}} = \\mathbf{0}, \\quad \\Phi_{\\text{eff}} = -\\frac{GM_1}{r_1} - \\frac{GM_2}{r_2} - \\frac{1}{2} \\omega^2 (x^2 + y^2)",
    "summary": "In the circular restricted three-body problem, five equilibrium positions exist in the corotating reference frame where the gravitational attractions of two large masses precisely balance the centrifugal fictitious force.",
    "derivation": "In a non-inertial reference frame corotating with two massive bodies M_1, M_2 at angular frequency \\omega = \\sqrt{\\frac{G(M_1 + M_2)}{R^3}} around their center of mass, the equation of motion for a test particle of negligible mass m is: \\ddot{\\mathbf{r}} + 2\\boldsymbol{\\omega} \\times \\dot{\\mathbf{r}} = -\\nabla \\Phi_{\\text{eff}}. The effective potential per unit mass is \\Phi_{\\text{eff}}(\\mathbf{r}) = -\\frac{G M_1}{r_1} - \\frac{G M_2}{r_2} - \\frac{1}{2} \\omega^2 (x^2 + y^2). Equilibrium points require static velocity and acceleration in the rotating frame: \\dot{\\mathbf{r}} = \\mathbf{0}, \\ddot{\\mathbf{r}} = \\mathbf{0} \\implies \\nabla \\Phi_{\\text{eff}} = \\mathbf{0}. Setting \\frac{\\partial \\Phi_{\\text{eff}}}{\\partial x} = 0, \\frac{\\partial \\Phi_{\\text{eff}}}{\\partial y} = 0 yields the three collinear points L1, L2, L3 along the inter-mass axis, and the two equilateral triangle points L4, L5 where r_1 = r_2 = R forming equilateral triangles with M_1 and M_2.",
    "realWorldApplication": "Space telescope positioning: The James Webb Space Telescope (JWST) operates in a halo orbit around the Sun-Earth L2 Lagrange point to maintain an unobstructed, cryogenically dark deep-space view.",
    "variables": [
      {
        "symbol": "\\Phi_{\\text{eff}}",
        "label": "Effective Gravitational Potential",
        "unit": "J/kg"
      },
      {
        "symbol": "\\omega",
        "label": "Corotating Frame Angular Frequency",
        "unit": "rad/s"
      },
      {
        "symbol": "r_1, r_2",
        "label": "Distances to Primaries",
        "unit": "m"
      },
      {
        "symbol": "x, y",
        "label": "Planar Coordinates in Corotating Frame",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        24,
        30
      ],
      "timeDilation": 0.5,
      "parameters": {
        "primaryMass": 1000000000000.0,
        "secondaryMass": 30000000000.0,
        "separation": 16.0
      },
      "description": "Corotating 3D Roche potential topology revealing stationary equilibrium wells L1 through L5.",
      "apparatusType": "corotating_lagrange_field"
    }
  },
  {
    "id": "centripetal-force",
    "title": "Centripetal Acceleration & Curvature Dynamics",
    "branch": "mechanics",
    "tag": "Curvilinear Kinematics",
    "difficulty": "Foundational",
    "formulaLatex": "\\mathbf{a}_c = -\\frac{v^2}{r} \\hat{\\mathbf{r}} = -\\omega^2 r \\hat{\\mathbf{r}}",
    "summary": "Any particle traversing a curved path experiences an instantaneous acceleration directed perpendicularly to its velocity vector toward the instantaneous center of curvature, changing its heading rather than its speed.",
    "derivation": "Represent planar circular trajectory in Cartesian coordinates: \\mathbf{r}(t) = r \\cos(\\omega t) \\hat{\\mathbf{i}} + r \\sin(\\omega t) \\hat{\\mathbf{j}}. Taking the first time derivative gives velocity: \\mathbf{v}(t) = \\dot{\\mathbf{r}}(t) = -r \\omega \\sin(\\omega t) \\hat{\\mathbf{i}} + r \\omega \\cos(\\omega t) \\hat{\\mathbf{j}}, with constant speed v = |\\mathbf{v}| = r \\omega. Taking the second time derivative yields acceleration: \\mathbf{a}(t) = \\ddot{\\mathbf{r}}(t) = -r \\omega^2 \\cos(\\omega t) \\hat{\\mathbf{i}} - r \\omega^2 \\sin(\\omega t) \\hat{\\mathbf{j}} = -\\omega^2 \\mathbf{r}(t). Since the unit radial vector is \\hat{\\mathbf{r}} = \\frac{\\mathbf{r}}{r} and \\omega = \\frac{v}{r}, we conclude \\mathbf{a}_c = -\\frac{v^2}{r} \\hat{\\mathbf{r}}. By Newton's second law, the required net centripetal force is \\mathbf{F}_c = m \\mathbf{a}_c = -m \\frac{v^2}{r} \\hat{\\mathbf{r}}.",
    "realWorldApplication": "Civil highway banked curves and high-speed railway track geometry, designed with specific banking angles \theta = \u0007rctan(v^2 / (r g)) to eliminate lateral tire shear forces.",
    "variables": [
      {
        "symbol": "a_c",
        "label": "Centripetal Acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "v",
        "label": "Tangential Speed",
        "unit": "m/s"
      },
      {
        "symbol": "r",
        "label": "Radius of Curvature",
        "unit": "m"
      },
      {
        "symbol": "\\omega",
        "label": "Angular Frequency",
        "unit": "rad/s"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "radius": 4.5,
        "angularVelocity": 2.8,
        "mass": 1.5
      },
      "description": "Tethered rotating bob showing orthogonal velocity and inward centripetal acceleration vector arrows.",
      "apparatusType": "whirling_tether_bob"
    }
  },
  {
    "id": "coriolis-effect",
    "title": "Coriolis Effect & Rotating Reference Frames",
    "branch": "mechanics",
    "tag": "Non-Inertial Dynamics",
    "difficulty": "Intermediate",
    "formulaLatex": "\\mathbf{F}_{\\text{coriolis}} = -2m (\\boldsymbol{\\omega} \\times \\mathbf{v}_{\\text{rot}})",
    "summary": "An apparent inertial force acting on bodies moving linearly within a rotating frame of reference. It deflects moving masses perpendicularly to both the frame's angular velocity vector and the apparent velocity.",
    "derivation": "Let inertial frame be I and rotating frame with angular velocity \\boldsymbol{\\omega} be R. The transformation rule for time derivative of any vector \\mathbf{A} is \\left(\\frac{d\\mathbf{A}}{dt}\\right)_I = \\left(\\frac{d\\mathbf{A}}{dt}\\right)_R + \\boldsymbol{\\omega} \\times \\mathbf{A}. Applying this to position vector \\mathbf{r}: \\mathbf{v}_I = \\mathbf{v}_R + \\boldsymbol{\\omega} \\times \\mathbf{r}. Differentiating again: \\mathbf{a}_I = \\left(\\frac{d\\mathbf{v}_I}{dt}\\right)_I = \\left(\\frac{d}{dt}(\\mathbf{v}_R + \\boldsymbol{\\omega} \\times \\mathbf{r})\\right)_R + \\boldsymbol{\\omega} \\times (\\mathbf{v}_R + \\boldsymbol{\\omega} \\times \\mathbf{r}) = \\mathbf{a}_R + 2(\\boldsymbol{\\omega} \\times \\mathbf{v}_R) + \\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\mathbf{r}) + \\dot{\\boldsymbol{\\omega}} \\times \\mathbf{r}. Multiplying by mass m and rearranging into Newton's effective law in the rotating frame: m \\mathbf{a}_R = \\mathbf{F}_{\\text{real}} - 2m(\\boldsymbol{\\omega} \\times \\mathbf{v}_R) - m\\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\mathbf{r}). The second term is the Coriolis force: \\mathbf{F}_{\\text{coriolis}} = -2m(\\boldsymbol{\\omega} \\times \\mathbf{v}_R).",
    "realWorldApplication": "Meteorological cyclone rotation: Low-pressure atmospheric systems spin counterclockwise in the Northern Hemisphere and clockwise in the Southern Hemisphere due to planetary Coriolis deflection.",
    "variables": [
      {
        "symbol": "\\mathbf{F}_{\\text{coriolis}}",
        "label": "Coriolis Apparent Force",
        "unit": "N"
      },
      {
        "symbol": "m",
        "label": "Moving Mass",
        "unit": "kg"
      },
      {
        "symbol": "\\boldsymbol{\\omega}",
        "label": "Frame Angular Velocity",
        "unit": "rad/s"
      },
      {
        "symbol": "\\mathbf{v}_{\\text{rot}}",
        "label": "Velocity in Rotating Frame",
        "unit": "m/s"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        14,
        18
      ],
      "timeDilation": 0.8,
      "parameters": {
        "rotationSpeed": 1.6,
        "projectileSpeed": 6.0,
        "discRadius": 8.0
      },
      "description": "Rotating turntable firing radial projectiles that appear curved from the rotating reference perspective.",
      "apparatusType": "rotating_carousel_turntable"
    }
  },
  {
    "id": "simple-harmonic-motion-hooke",
    "title": "Simple Harmonic Motion & Hooke's Law",
    "branch": "mechanics",
    "tag": "Linear Oscillations",
    "difficulty": "Foundational",
    "formulaLatex": "F = -k x \\implies \\frac{d^2 x}{dt^2} + \\omega_0^2 x = 0, \\quad \\omega_0 = \\sqrt{\\frac{k}{m}}",
    "summary": "Linear restorative dynamics where restoring force is directly proportional to displacement from equilibrium. The resulting motion is sinusoidal oscillation whose period depends solely on inertia and stiffness.",
    "derivation": "Hooke's empirical law for an elastic spring states F(x) = -k x, where k is spring stiffness. Combining with Newton's second law: m \\frac{d^2 x}{dt^2} = -k x \\implies \\frac{d^2 x}{dt^2} + \\frac{k}{m} x = 0. Defining the natural angular frequency \\omega_0 = \\sqrt{\\frac{k}{m}}, the equation becomes the classical harmonic oscillator ODE: \\ddot{x} + \\omega_0^2 x = 0. The characteristic equation is r^2 + \\omega_0^2 = 0 \\implies r = \\pm i \\omega_0. The general real solution is x(t) = A \\cos(\\omega_0 t + \\phi), where amplitude A and phase constant \\phi are determined by initial conditions x(0) and \\dot{x}(0). The period of oscillation is T = \\frac{2\\pi}{\\omega_0} = 2\\pi \\sqrt{\\frac{m}{k}}.",
    "realWorldApplication": "Quartz crystal clock resonators, automotive suspension coil tuning, and microelectromechanical (MEMS) accelerometers.",
    "variables": [
      {
        "symbol": "k",
        "label": "Spring Constant",
        "unit": "N/m"
      },
      {
        "symbol": "x",
        "label": "Displacement from Equilibrium",
        "unit": "m"
      },
      {
        "symbol": "m",
        "label": "Oscillating Mass",
        "unit": "kg"
      },
      {
        "symbol": "\\omega_0",
        "label": "Natural Angular Frequency",
        "unit": "rad/s"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "springConstant": 24.0,
        "mass": 1.2,
        "initialDisplacement": 2.4
      },
      "description": "Horizontal linear spring-mass oscillator exchanging kinetic and elastic potential energies.",
      "apparatusType": "horizontal_spring_mass"
    }
  },
  {
    "id": "damped-driven-oscillations",
    "title": "Damped & Driven Harmonic Oscillations (Resonance)",
    "branch": "mechanics",
    "tag": "Forced Oscillations & Resonance",
    "difficulty": "Intermediate",
    "formulaLatex": "\\frac{d^2 x}{dt^2} + 2\\gamma \\frac{dx}{dt} + \\omega_0^2 x = \\frac{F_0}{m} \\cos(\\omega t)",
    "summary": "When an oscillator is subjected to viscous fluid damping and a periodic external driving force, it undergoes transient decay followed by a steady-state response whose amplitude peaks dramatically near natural resonance.",
    "derivation": "Accounting for restoring force F_k = -k x, viscous damping force F_{\\text{drag}} = -b \\dot{x}, and sinusoidal driving force F_{\\text{drive}} = F_0 \\cos(\\omega t), Newton's second law yields: m \\ddot{x} + b \\dot{x} + k x = F_0 \\cos(\\omega t). Dividing through by mass m and defining damping factor \\gamma = \\frac{b}{2m} and natural frequency \\omega_0 = \\sqrt{\\frac{k}{m}} gives: \\ddot{x} + 2\\gamma \\dot{x} + \\omega_0^2 x = \\frac{F_0}{m} \\cos(\\omega t). Seeking the steady-state complex solution x_p(t) = \\text{Re}[X e^{i\\omega t}], substitution gives: [-\\omega^2 + 2i\\gamma\\omega + \\omega_0^2] X = \\frac{F_0}{m} \\implies X(\\omega) = \\frac{F_0/m}{(\\omega_0^2 - \\omega^2) + 2i\\gamma\\omega}. The steady-state amplitude is the modulus A(\\omega) = |X(\\omega)| = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + 4\\gamma^2 \\omega^2}}. Amplitude reaches resonance maximum when \\omega = \\sqrt{\\omega_0^2 - 2\\gamma^2}.",
    "realWorldApplication": "Tuned mass damper in Taipei 101 skyscraper dissipating destructive typhoon wind sway and seismic oscillations.",
    "variables": [
      {
        "symbol": "\\gamma",
        "label": "Damping Coefficient",
        "unit": "s⁻¹"
      },
      {
        "symbol": "\\omega_0",
        "label": "Natural Frequency",
        "unit": "rad/s"
      },
      {
        "symbol": "\\omega",
        "label": "Driving Frequency",
        "unit": "rad/s"
      },
      {
        "symbol": "F_0",
        "label": "Driving Force Amplitude",
        "unit": "N"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        7,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "naturalFreq": 5.0,
        "drivingFreq": 4.92,
        "dampingRatio": 0.08,
        "drivingAmplitude": 4.0
      },
      "description": "Driven mechanical resonator tracing dynamic Lorentzian amplitude resonance curves.",
      "apparatusType": "driven_harmonic_resonator"
    }
  },
  {
    "id": "double-pendulum-chaos",
    "title": "Double Pendulum Dynamics & Deterministic Chaos",
    "branch": "mechanics",
    "tag": "Non-Linear Dynamics & Chaos",
    "difficulty": "Advanced",
    "formulaLatex": "\\frac{d}{dt}\\left(\\frac{\\partial \\mathcal{L}}{\\partial \\dot{\\theta}_i}\\right) - \\frac{\\partial \\mathcal{L}}{\\partial \\theta_i} = 0, \\quad |\\delta \\mathbf{Z}(t)| \\sim |\\delta \\mathbf{Z}_0| e^{\\lambda t}",
    "summary": "A coupled physical system consisting of one pendulum suspended from another that exhibits sensitive dependence on initial conditions (butterfly effect) and positive Lyapunov exponents in phase space.",
    "derivation": "Parameterize the positions of two coupled bobs with lengths l_1, l_2 and masses m_1, m_2: x_1 = l_1 \\sin\\theta_1, y_1 = -l_1 \\cos\\theta_1, and x_2 = x_1 + l_2 \\sin\\theta_2, y_2 = y_1 - l_2 \\cos\\theta_2. The system kinetic energy T = \\frac{1}{2} m_1 (\\dot{x}_1^2 + \\dot{y}_1^2) + \\frac{1}{2} m_2 (\\dot{x}_2^2 + \\dot{y}_2^2) expands to: T = \\frac{1}{2}(m_1 + m_2)l_1^2 \\dot{\\theta}_1^2 + \\frac{1}{2}m_2 l_2^2 \\dot{\\theta}_2^2 + m_2 l_1 l_2 \\dot{\\theta}_1 \\dot{\\theta}_2 \\cos(\\theta_1 - \\theta_2). Potential energy is V = -(m_1 + m_2) g l_1 \\cos\\theta_1 - m_2 g l_2 \\cos\\theta_2. Applying the Euler-Lagrange equations for \\theta_1 and \\theta_2 yields two non-linearly coupled second-order ODEs. In high-energy regimes, homoclinic tangles in phase space lead to positive maximal Lyapunov exponents \\lambda > 0, producing deterministic exponential divergence of adjacent trajectories.",
    "realWorldApplication": "Atmospheric predictability horizons in numerical weather forecasting and turbulent fluid boundary layer modeling.",
    "variables": [
      {
        "symbol": "\\theta_1, \\theta_2",
        "label": "Bob Angular Displacements",
        "unit": "rad"
      },
      {
        "symbol": "l_1, l_2",
        "label": "Rod Segment Lengths",
        "unit": "m"
      },
      {
        "symbol": "m_1, m_2",
        "label": "Bob Inertial Masses",
        "unit": "kg"
      },
      {
        "symbol": "\\lambda",
        "label": "Maximum Lyapunov Exponent",
        "unit": "s⁻¹"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        4,
        10
      ],
      "timeDilation": 1.0,
      "parameters": {
        "length1": 2.0,
        "length2": 1.8,
        "mass1": 1.5,
        "mass2": 1.0,
        "initialAngle1": 2.2,
        "initialAngle2": 1.9
      },
      "description": "Chaotic double pendulum emitting phosphor trace ribbons displaying sensitive initial-condition divergence.",
      "apparatusType": "chaotic_double_pendulum"
    }
  },
  {
    "id": "angular-momentum-gyroscopic-precession",
    "title": "Conservation of Angular Momentum & Gyroscopic Precession",
    "branch": "mechanics",
    "tag": "Rotational Rigid Body Dynamics",
    "difficulty": "Advanced",
    "formulaLatex": "\\boldsymbol{\\tau} = \\frac{d\\mathbf{L}}{dt} \\implies \\boldsymbol{\\Omega}_p = \\frac{\\boldsymbol{\\tau}}{I \\omega_s}",
    "summary": "When a spinning rigid rotor with high axial angular momentum is acted upon by an orthogonal external torque, its spin axis precesses steadily around a third mutually perpendicular axis rather than collapsing.",
    "derivation": "A symmetric rotor spinning at high angular velocity \\boldsymbol{\\omega}_s possesses axial angular momentum \\mathbf{L} = I \\boldsymbol{\\omega}_s. An external gravitational torque about the gimbal pivot at distance r is \\boldsymbol{\\tau} = \\mathbf{r} \\times m \\mathbf{g}. Newton's rotational second law dictates: \\boldsymbol{\\tau} = \\frac{d\\mathbf{L}}{dt}. Over an infinitesimal interval dt, the change in angular momentum is d\\mathbf{L} = \\boldsymbol{\\tau} dt. Because \\boldsymbol{\\tau} \\perp \\mathbf{L}, the torque changes the direction of \\mathbf{L} without altering its magnitude. The axis tilts through an angle d\\phi = \\frac{|d\\mathbf{L}|}{|\\mathbf{L}|} = \\frac{\\tau dt}{I \\omega_s}. The steady-state precession frequency is therefore \\Omega_p = \\frac{d\\phi}{dt} = \\frac{\\tau}{I \\omega_s} = \\frac{m g r}{I \\omega_s}.",
    "realWorldApplication": "Spacecraft attitude control: Control Moment Gyroscopes (CMGs) aboard the International Space Station orient the station without thruster fuel consumption.",
    "variables": [
      {
        "symbol": "\\boldsymbol{\\Omega}_p",
        "label": "Precession Angular Velocity",
        "unit": "rad/s"
      },
      {
        "symbol": "\\boldsymbol{\\tau}",
        "label": "External Applied Torque",
        "unit": "N·m"
      },
      {
        "symbol": "I",
        "label": "Flywheel Moment of Inertia",
        "unit": "kg·m²"
      },
      {
        "symbol": "\\omega_s",
        "label": "Flywheel Spin Rate",
        "unit": "rad/s"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        6,
        9
      ],
      "timeDilation": 1.0,
      "parameters": {
        "spinRate": 65.0,
        "flywheelRadius": 1.2,
        "flywheelMass": 3.0,
        "leverArm": 1.2
      },
      "description": "Counterweighted gimballed gyroscope exhibiting steady horizontal precession under gravitational torque.",
      "apparatusType": "gimballed_gyroscope"
    }
  },
  {
    "id": "elastic-collisions-1d",
    "title": "1D Perfectly Elastic Collisions",
    "branch": "collisions",
    "tag": "Conservation Laws",
    "difficulty": "Foundational",
    "formulaLatex": "v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2} v_{1i} + \\frac{2m_2}{m_1 + m_2} v_{2i}",
    "summary": "In a one-dimensional perfectly elastic collision between two isolated bodies, both total linear momentum and total kinetic energy are strictly conserved. No kinetic energy is dissipated into internal heat or deformation.",
    "derivation": "Conservation of linear momentum: m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f} \\implies m_1(v_{1i} - v_{1f}) = m_2(v_{2f} - v_{2i}). Conservation of kinetic energy: \\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2 = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2 \\implies m_1(v_{1i}^2 - v_{1f}^2) = m_2(v_{2f}^2 - v_{2i}^2). Factoring differences of squares: m_1(v_{1i} - v_{1f})(v_{1i} + v_{1f}) = m_2(v_{2f} - v_{2i})(v_{2f} + v_{2i}). Dividing the energy equation by the momentum equation yields: v_{1i} + v_{1f} = v_{2f} + v_{2i} \\implies v_{2f} - v_{1f} = -(v_{2i} - v_{1i}). Substituting this relative velocity condition back into the momentum conservation equation yields the explicit post-collision velocities: v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2} v_{1i} + \\frac{2m_2}{m_1 + m_2} v_{2i} and v_{2f} = \\frac{2m_1}{m_1 + m_2} v_{1i} + \\frac{m_2 - m_1}{m_1 + m_2} v_{2i}.",
    "realWorldApplication": "Neutron moderation in nuclear fission reactors: Heavy water or graphite moderators slow down fast neutrons via elastic collisions with atomic nuclei of comparable mass.",
    "variables": [
      {
        "symbol": "v_{1f}, v_{2f}",
        "label": "Final Velocities",
        "unit": "m/s"
      },
      {
        "symbol": "v_{1i}, v_{2i}",
        "label": "Initial Velocities",
        "unit": "m/s"
      },
      {
        "symbol": "m_1, m_2",
        "label": "Colliding Masses",
        "unit": "kg"
      },
      {
        "symbol": "K",
        "label": "Conserved Kinetic Energy",
        "unit": "J"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        6,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "mass1": 2.0,
        "mass2": 3.0,
        "velocity1": 5.0,
        "velocity2": -2.0,
        "elasticity": 1.0
      },
      "description": "Head-on elastic collision between two hard spheres on a linear track preserving kinetic energy.",
      "apparatusType": "linear_collision_track"
    }
  },
  {
    "id": "elastic-collisions-2d",
    "title": "2D Planar Elastic Collisions & Scattering Angle",
    "branch": "collisions",
    "tag": "Vector Scattering",
    "difficulty": "Intermediate",
    "formulaLatex": "m_1 \\mathbf{v}_{1i} = m_1 \\mathbf{v}_{1f} + m_2 \\mathbf{v}_{2f}, \\quad \\theta_1 + \\theta_2 = 90^\\circ \\; (m_1 = m_2, \\mathbf{v}_{2i} = \\mathbf{0})",
    "summary": "In two-dimensional planar elastic impacts, vector momentum is conserved along both spatial axes while kinetic energy is invariant. For identical masses with one initially stationary, the post-collision trajectories are orthogonal.",
    "derivation": "Vector momentum conservation for target at rest (\\mathbf{v}_{2i} = \\mathbf{0}) states: m_1 \\mathbf{v}_{1i} = m_1 \\mathbf{v}_{1f} + m_2 \\mathbf{v}_{2f}. For equal masses m_1 = m_2 = m: \\mathbf{v}_{1i} = \\mathbf{v}_{1f} + \\mathbf{v}_{2f}. Taking the vector dot product of this equation with itself: |\\mathbf{v}_{1i}|^2 = |\\mathbf{v}_{1f}|^2 + |\\mathbf{v}_{2f}|^2 + 2 (\\mathbf{v}_{1f} \\cdot \\mathbf{v}_{2f}). Kinetic energy conservation gives: \\frac{1}{2}m |\\mathbf{v}_{1i}|^2 = \\frac{1}{2}m |\\mathbf{v}_{1f}|^2 + \\frac{1}{2}m |\\mathbf{v}_{2f}|^2 \\implies |\\mathbf{v}_{1i}|^2 = |\\mathbf{v}_{1f}|^2 + |\\mathbf{v}_{2f}|^2. Equating the two scalar expressions requires 2(\\mathbf{v}_{1f} \\cdot \\mathbf{v}_{2f}) = 0 \\implies \\mathbf{v}_{1f} \\cdot \\mathbf{v}_{2f} = 0. Thus, the final velocity vectors are strictly orthogonal: \\theta_1 + \\theta_2 = 90^\\circ.",
    "realWorldApplication": "Billiards and cue sports shot geometry, and proton-proton nuclear elastic scattering analysis in subatomic particle bubble chambers.",
    "variables": [
      {
        "symbol": "\\mathbf{v}_{1i}",
        "label": "Incident Velocity Vector",
        "unit": "m/s"
      },
      {
        "symbol": "\\mathbf{v}_{1f}, \\mathbf{v}_{2f}",
        "label": "Scattered Velocity Vectors",
        "unit": "m/s"
      },
      {
        "symbol": "\\theta_1, \\theta_2",
        "label": "Scattering Angles",
        "unit": "deg"
      },
      {
        "symbol": "b",
        "label": "Impact Parameter",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        10,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "impactSpeed": 6.0,
        "impactParameter": 0.8,
        "sphereRadius": 1.0,
        "elasticity": 1.0
      },
      "description": "Glancing 2D billiard sphere impact exhibiting 90-degree post-collision trajectory divergence.",
      "apparatusType": "billiard_scattering_table"
    }
  },
  {
    "id": "inelastic-collisions-energy-loss",
    "title": "Inelastic Collisions & Kinetic Energy Dissipation",
    "branch": "collisions",
    "tag": "Energy Dissipation",
    "difficulty": "Intermediate",
    "formulaLatex": "\\Delta K = \\frac{1}{2} \\frac{m_1 m_2}{m_1 + m_2} (v_{1i} - v_{2i})^2 (1 - e^2)",
    "summary": "In an inelastic collision, total linear momentum is conserved while a fraction of kinetic energy is irreversibly converted into internal thermal excitation, acoustic radiation, and plastic material deformation.",
    "derivation": "In the center of mass frame, total kinetic energy is decomposed into center-of-mass motion and relative motion: K_{\\text{total}} = K_{\\text{cm}} + K_{\\text{rel}} = \\frac{1}{2}(m_1 + m_2) v_{\\text{cm}}^2 + \\frac{1}{2} \\mu v_{\\text{rel}}^2, where reduced mass is \\mu = \\frac{m_1 m_2}{m_1 + m_2} and relative velocity is v_{\\text{rel}} = |v_{1i} - v_{2i}|. Because external forces are zero, K_{\\text{cm}} is invariant throughout the collision. By definition of coefficient of restitution e, the final relative velocity is v_{\\text{rel}, f} = e v_{\\text{rel}, i}. The dissipated kinetic energy is solely lost from relative motion: \\Delta K = K_{\\text{initial}} - K_{\\text{final}} = \\frac{1}{2} \\mu v_{\\text{rel}, i}^2 - \\frac{1}{2} \\mu (e v_{\\text{rel}, i})^2 = \\frac{1}{2} \\mu v_{\\text{rel}, i}^2 (1 - e^2). In a completely inelastic collision (e = 0), the maximum possible kinetic energy \\frac{1}{2}\\mu v_{\\text{rel}, i}^2 is dissipated as the bodies coalesce.",
    "realWorldApplication": "Automotive crumple zone engineering: Vehicles are designed to deform plastically during collisions, maximizing kinetic energy dissipation to protect occupants from extreme decelerations.",
    "variables": [
      {
        "symbol": "\\Delta K",
        "label": "Dissipated Kinetic Energy",
        "unit": "J"
      },
      {
        "symbol": "e",
        "label": "Coefficient of Restitution",
        "unit": "dimensionless"
      },
      {
        "symbol": "\\mu",
        "label": "Reduced Mass",
        "unit": "kg"
      },
      {
        "symbol": "v_{\text{rel}}",
        "label": "Relative Approach Speed",
        "unit": "m/s"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "mass1": 3.0,
        "mass2": 3.0,
        "velocity1": 6.0,
        "velocity2": 0.0,
        "elasticity": 0.0
      },
      "description": "Completely inelastic collision where clay-like bobs coalesce into a single combined mass.",
      "apparatusType": "inelastic_coalescence_bench"
    }
  },
  {
    "id": "coefficient-of-restitution",
    "title": "Coefficient of Restitution (COR)",
    "branch": "collisions",
    "tag": "Impact Restitution",
    "difficulty": "Foundational",
    "formulaLatex": "e = \\frac{|\\mathbf{v}_{2f} - \\mathbf{v}_{1f}|}{|\\mathbf{v}_{1i} - \\mathbf{v}_{2i}|} = \\sqrt{\\frac{h_f}{h_i}}",
    "summary": "A dimensionless scalar measuring the elasticity of an impact, defined as the ratio of relative separation speed to relative approach speed along the normal collision axis. It ranges from e = 1 (perfectly elastic) to e = 0 (perfectly plastic).",
    "derivation": "Consider a sphere dropped from height h_i onto a massive rigid floor (m_2 \\to \\infty, v_{2i} = v_{2f} = 0). The impact velocity just before contact from free fall is v_{1i} = -\\sqrt{2gh_i}. After bouncing with coefficient of restitution e, the upward rebound speed is v_{1f} = -e v_{1i} = e \\sqrt{2gh_i}. The ball rises to rebound height h_f where kinetic energy is converted back to gravitational potential: \\frac{1}{2}m v_{1f}^2 = m g h_f \\implies h_f = \\frac{v_{1f}^2}{2g} = \\frac{e^2 (2gh_i)}{2g} = e^2 h_i. Taking the square root gives: e = \\sqrt{\\frac{h_f}{h_i}}.",
    "realWorldApplication": "Sports ball regulatory testing: FIFA soccer balls and tennis balls must satisfy strict drop-height coefficient of restitution ranges to guarantee uniform rebound behavior.",
    "variables": [
      {
        "symbol": "e",
        "label": "Coefficient of Restitution",
        "unit": "dimensionless"
      },
      {
        "symbol": "h_i",
        "label": "Initial Drop Height",
        "unit": "m"
      },
      {
        "symbol": "h_f",
        "label": "Rebound Height",
        "unit": "m"
      },
      {
        "symbol": "v_{\text{sep}}, v_{\text{app}}",
        "label": "Separation & Approach Speeds",
        "unit": "m/s"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "dropHeight": 8.0,
        "elasticity": 0.75,
        "gravity": 9.81
      },
      "description": "Vertical drop apparatus measuring successive rebound heights and kinetic decay.",
      "apparatusType": "rebound_drop_tower"
    }
  },
  {
    "id": "impulse-momentum-theorem",
    "title": "Impulse-Momentum Theorem",
    "branch": "collisions",
    "tag": "Impulsive Forces",
    "difficulty": "Foundational",
    "formulaLatex": "\\mathbf{J} = \\int_{t_1}^{t_2} \\mathbf{F}(t) \\, dt = \\Delta \\mathbf{p} = m \\mathbf{v}_f - m \\mathbf{v}_i",
    "summary": "The time integral of a net force acting on a body over an interval is defined as mechanical impulse, and precisely equals the change in the body's linear momentum vector over that duration.",
    "derivation": "Starting from Newton's second law in differential form: \\mathbf{F}(t) = \\frac{d\\mathbf{p}}{dt}. Multiplying by differential time dt: \\mathbf{F}(t) \\, dt = d\\mathbf{p}. Integrating both sides between time limits t_1 and t_2: \\int_{t_1}^{t_2} \\mathbf{F}(t) \\, dt = \\int_{\\mathbf{p}_i}^{\\mathbf{p}_f} d\\mathbf{p} = \\mathbf{p}_f - \\mathbf{p}_i = \\Delta \\mathbf{p}. Defining impulse vector \\mathbf{J} \\equiv \\int_{t_1}^{t_2} \\mathbf{F}(t) \\, dt, we have \\mathbf{J} = \\Delta \\mathbf{p}. If the collision occurs over short duration \\Delta t with average force \\bar{\\mathbf{F}}, then \\mathbf{J} = \\bar{\\mathbf{F}} \\Delta t = m(\\mathbf{v}_f - \\mathbf{v}_i), illustrating that increasing collision time \\Delta t dramatically reduces peak contact force.",
    "realWorldApplication": "Automotive airbag deployment and sports protective helmets: Soft cushioning lengthens impact deceleration time \\Delta t, reducing peak biological impact force \\bar{F} below fatal injury thresholds.",
    "variables": [
      {
        "symbol": "\\mathbf{J}",
        "label": "Mechanical Impulse",
        "unit": "N·s"
      },
      {
        "symbol": "\\mathbf{F}(t)",
        "label": "Time-Varying Force",
        "unit": "N"
      },
      {
        "symbol": "\\Delta \\mathbf{p}",
        "label": "Momentum Change",
        "unit": "kg·m/s"
      },
      {
        "symbol": "\\Delta t",
        "label": "Impact Duration",
        "unit": "s"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        5,
        10
      ],
      "timeDilation": 0.5,
      "parameters": {
        "impactMass": 2.5,
        "initialVelocity": 8.0,
        "barrierStiffness": 500.0
      },
      "description": "High-speed force plate recording real-time force profile F(t) during barrier collision.",
      "apparatusType": "impulse_force_plate"
    }
  },
  {
    "id": "center-of-mass-frame",
    "title": "Center of Mass Frame Dynamics",
    "branch": "collisions",
    "tag": "Reference Frames",
    "difficulty": "Intermediate",
    "formulaLatex": "\\mathbf{R}_{\\text{cm}} = \\frac{\\sum m_i \\mathbf{r}_i}{\\sum m_i}, \\quad \\mathbf{P}_{\\text{cm}} = \\sum m_i \\mathbf{v}'_i = \\mathbf{0}",
    "summary": "The unique reference frame moving at the velocity of the center of mass of an isolated system, in which the total linear momentum is identically zero. This isolates internal interactions from global translational motion.",
    "derivation": "Given a multi-particle system with masses m_i and positions \\mathbf{r}_i in lab frame, center of mass is \\mathbf{R}_{\\text{cm}} = \\frac{1}{M}\\sum m_i \\mathbf{r}_i, where M = \\sum m_i. Differentiating with respect to time gives center of mass velocity: \\mathbf{V}_{\\text{cm}} = \\frac{1}{M}\\sum m_i \\mathbf{v}_i = \\frac{\\mathbf{P}_{\\text{total}}}{M}. Transforming particle velocities to the CM frame: \\mathbf{v}'_i = \\mathbf{v}_i - \\mathbf{V}_{\\text{cm}}. Calculating total momentum in CM frame: \\mathbf{P}'_{\\text{cm}} = \\sum m_i \\mathbf{v}'_i = \\sum m_i (\\mathbf{v}_i - \\mathbf{V}_{\\text{cm}}) = \\sum m_i \\mathbf{v}_i - \\mathbf{V}_{\\text{cm}}\\sum m_i = \\mathbf{P}_{\\text{total}} - M \\left(\\frac{\\mathbf{P}_{\\text{total}}}{M}\\right) = \\mathbf{0}. In the zero-momentum frame, two-body collisions simplify to particles moving with equal and opposite momenta: \\mathbf{p}'_1 = -\\mathbf{p}'_2 before and after impact.",
    "realWorldApplication": "High-energy particle collider physics (CERN LHC): Experiments smash counter-circulating proton beams in their center-of-mass frame to maximize available center-of-mass collision energy \\sqrt{s}.",
    "variables": [
      {
        "symbol": "\\mathbf{R}_{\\text{cm}}",
        "label": "Center of Mass Position",
        "unit": "m"
      },
      {
        "symbol": "\\mathbf{V}_{\\text{cm}}",
        "label": "CM Frame Velocity",
        "unit": "m/s"
      },
      {
        "symbol": "M",
        "label": "Total System Mass",
        "unit": "kg"
      },
      {
        "symbol": "\\mathbf{P}'",
        "label": "CM Frame Momentum",
        "unit": "kg·m/s"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "mass1": 1.5,
        "mass2": 4.5,
        "velocity1": 8.0,
        "velocity2": -1.0
      },
      "description": "Simultaneous side-by-side visualization of laboratory frame and zero-momentum center-of-mass frame.",
      "apparatusType": "dual_frame_collision_arena"
    }
  },
  {
    "id": "newtons-cradle",
    "title": "Newton's Cradle & Momentum Wave Propagation",
    "branch": "collisions",
    "tag": "Multi-Body Dynamics",
    "difficulty": "Intermediate",
    "formulaLatex": "\\sum_{i=1}^N m_i v_i = \\text{const}, \\quad \\sum_{i=1}^N \\frac{1}{2} m_i v_i^2 = \\text{const}",
    "summary": "Demonstrates simultaneous conservation of momentum and mechanical energy in a sequence of identical elastic spheres. Compression solitary waves propagate through the sphere chain, ejecting precisely the same number of bobs as were drawn back.",
    "derivation": "Consider N identical steel spheres of mass m in contact. Let k spheres with velocity v strike the remaining (N - k) stationary spheres. Momentum conservation requires: k m v = \\sum_{j=1}^N m v_{j,f}. Kinetic energy conservation requires: \\frac{1}{2} k m v^2 = \\sum_{j=1}^N \\frac{1}{2} m v_{j,f}^2. If n spheres are ejected with speed u, then: k v = n u and k v^2 = n u^2. Dividing the energy equation by the momentum equation yields: u = v. Substituting u = v back into the momentum equation gives k v = n v \\implies n = k. Thus, the exact number of suspended spheres pulled back must emerge with the exact incoming velocity. Hertzian contact mechanics shows that momentum transfers sequentially as an elastic stress wave without bulk intermediate movement.",
    "realWorldApplication": "Seismic stress wave propagation through dense geological strata and granular shock wave attenuation in ballistic shielding materials.",
    "variables": [
      {
        "symbol": "k",
        "label": "Number of Incident Spheres",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "label": "Number of Ejected Spheres",
        "unit": "dimensionless"
      },
      {
        "symbol": "v",
        "label": "Collision Velocity",
        "unit": "m/s"
      },
      {
        "symbol": "m",
        "label": "Sphere Mass",
        "unit": "kg"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "numSpheres": 5,
        "pulledSpheres": 2,
        "sphereRadius": 0.6,
        "stringLength": 4.0
      },
      "description": "5-ball classical Newton's Cradle demonstrating exact integer momentum packet transfers.",
      "apparatusType": "newtons_cradle_apparatus"
    }
  },
  {
    "id": "ballistic-pendulum",
    "title": "Ballistic Pendulum",
    "branch": "collisions",
    "tag": "Inelastic Momentum & Energy",
    "difficulty": "Intermediate",
    "formulaLatex": "v_{\\text{bullet}} = \\frac{m + M}{m} \\sqrt{2gh}",
    "summary": "A historical apparatus used to measure high projectile velocities. A high-speed bullet embeds completely inelastically into a heavy suspended block, and the combined system swings up to a measurable vertical height.",
    "derivation": "The event divides into two distinct stages: (1) Rapid completely inelastic collision: During bullet embedding (duration \\Delta t \\to 0), gravity is negligible. Linear momentum is conserved: m v_{\\text{bullet}} = (m + M) V_{\\text{combo}} \\implies V_{\\text{combo}} = \\frac{m}{m + M} v_{\\text{bullet}}. (Kinetic energy is not conserved during embedding). (2) Conservative swing up: The combined mass (m + M) swings upward against gravity without non-conservative losses. By conservation of mechanical energy: \\frac{1}{2}(m + M) V_{\\text{combo}}^2 = (m + M) g h \\implies V_{\\text{combo}} = \\sqrt{2gh}. Equating the two expressions for V_{\\text{combo}}: \\frac{m}{m + M} v_{\\text{bullet}} = \\sqrt{2gh} \\implies v_{\\text{bullet}} = \\frac{m + M}{m} \\sqrt{2gh}.",
    "realWorldApplication": "Forensic ballistics testing and aerospace kinetic projectile impact velocity calibration.",
    "variables": [
      {
        "symbol": "v_{\text{bullet}}",
        "label": "Incident Projectile Speed",
        "unit": "m/s"
      },
      {
        "symbol": "m",
        "label": "Bullet Mass",
        "unit": "kg"
      },
      {
        "symbol": "M",
        "label": "Pendulum Block Mass",
        "unit": "kg"
      },
      {
        "symbol": "h",
        "label": "Maximum Rise Height",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        6,
        14
      ],
      "timeDilation": 0.8,
      "parameters": {
        "bulletMass": 0.02,
        "blockMass": 4.0,
        "bulletVelocity": 250.0,
        "armLength": 3.0
      },
      "description": "Ballistic capture block recording projectile embedding and subsequent gravitational pendulum rise.",
      "apparatusType": "ballistic_pendulum_stand"
    }
  },
  {
    "id": "oblique-impact-glancing",
    "title": "Oblique Impact & Glancing Surface Collisions",
    "branch": "collisions",
    "tag": "Decomposed Collisions",
    "difficulty": "Intermediate",
    "formulaLatex": "v_{nt} = v_{it}, \\quad v_{nn} = -e v_{in}, \\quad \\tan \\theta_r = \\frac{\\tan \\theta_i}{e}",
    "summary": "When a body collides obliquely with a planar surface, velocity components decompose into normal and tangential axes. In the frictionless limit, tangential momentum is conserved while the normal velocity reverses with coefficient of restitution e.",
    "derivation": "Decompose incident velocity \\mathbf{v}_i at angle \\theta_i from normal into normal and tangential components: v_{in} = v_i \\cos\\theta_i, v_{it} = v_i \\sin\\theta_i. Across a frictionless plane surface, normal contact force produces no shear component: F_t = 0 \\implies \\Delta p_t = 0 \\implies v_{ft} = v_{it} = v_i \\sin\\theta_i. Normal impulse satisfies Newton's restitution law: v_{fn} = -e v_{in} = -e v_i \\cos\\theta_i. The angle of rebound \\theta_r measured from the normal is given by: \\tan\\theta_r = \\frac{|v_{ft}|}{|v_{fn}|} = \\frac{v_i \\sin\\theta_i}{e v_i \\cos\\theta_i} = \\frac{\\tan\\theta_i}{e}. Because e \\le 1, \\tan\\theta_r \\ge \\tan\\theta_i \\implies \\theta_r \\ge \\theta_i: the ball rebounds flatter and closer to the surface plane.",
    "realWorldApplication": "Asteroid glancing impacts producing elliptical craters on planetary surfaces; sonar and acoustic boundary scattering in naval submarines.",
    "variables": [
      {
        "symbol": "\\theta_i",
        "label": "Incident Angle from Normal",
        "unit": "rad"
      },
      {
        "symbol": "\\theta_r",
        "label": "Rebound Angle from Normal",
        "unit": "rad"
      },
      {
        "symbol": "e",
        "label": "Normal Restitution",
        "unit": "dimensionless"
      },
      {
        "symbol": "v_{it}, v_{ft}",
        "label": "Tangential Velocities",
        "unit": "m/s"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "incidentAngle": 45.0,
        "incidentSpeed": 10.0,
        "elasticity": 0.6
      },
      "description": "Glancing surface impact displaying velocity component vector decomposition and flatter rebound angle.",
      "apparatusType": "oblique_rebound_plane"
    }
  },
  {
    "id": "friction-angle-of-repose",
    "title": "Static vs Kinetic Friction & Inclined Plane Angle of Repose",
    "branch": "collisions",
    "tag": "Tribology & Contact Mechanics",
    "difficulty": "Foundational",
    "formulaLatex": "f_s \\le \\mu_s N, \\quad f_k = \\mu_k N, \\quad \\theta_{\\text{repose}} = \\arctan(\\mu_s)",
    "summary": "Coulomb-Amontons friction models tangential resistance at contacting surfaces. The angle of repose represents the critical incline angle where component gravitational shear overcomes maximum static friction.",
    "derivation": "Consider a block of mass m resting on an incline tilted at angle \\theta. Resolving gravity along normal and parallel incline axes: normal component N = m g \\cos\\theta, downhill shear component F_\\parallel = m g \\sin\\theta. For the block to remain static, static friction must balance downhill gravity: f_s = m g \\sin\\theta. Static friction has a maximum threshold: f_s \\le f_{s,\\text{max}} = \\mu_s N = \\mu_s m g \\cos\\theta. At the critical tipping angle \\theta_c (angle of repose), static friction reaches its maximum limit: m g \\sin\\theta_c = \\mu_s m g \\cos\\theta_c \\implies \\frac{\\sin\\theta_c}{\\cos\\theta_c} = \\tan\\theta_c = \\mu_s \\implies \\theta_{\\text{repose}} = \\arctan(\\mu_s). Once sliding begins (\\theta > \\theta_{\\text{repose}}), friction drops to kinetic friction f_k = \\mu_k N with net acceleration a = g(\\sin\\theta - \\mu_k \\cos\\theta).",
    "realWorldApplication": "Geotechnical slope stability (landslides and avalanche prevention) and granular bulk material handling in grain silos and civil embankments.",
    "variables": [
      {
        "symbol": "\\mu_s",
        "label": "Coefficient of Static Friction",
        "unit": "dimensionless"
      },
      {
        "symbol": "\\mu_k",
        "label": "Coefficient of Kinetic Friction",
        "unit": "dimensionless"
      },
      {
        "symbol": "N",
        "label": "Normal Contact Force",
        "unit": "N"
      },
      {
        "symbol": "\\theta_{\\text{repose}}",
        "label": "Angle of Repose",
        "unit": "deg"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "inclineAngle": 28.0,
        "muStatic": 0.65,
        "muKinetic": 0.45,
        "mass": 3.0
      },
      "description": "Adjustable tilt inclined plane demonstrating static pinning transition into accelerated kinetic sliding.",
      "apparatusType": "incline_friction_ramp"
    }
  },
  {
    "id": "rotational-kinetic-energy",
    "title": "Rotational Kinetic Energy & Moment of Inertia",
    "branch": "collisions",
    "tag": "Rigid Body Mechanics",
    "difficulty": "Foundational",
    "formulaLatex": "K_{\\text{rot}} = \\frac{1}{2} I \\omega^2, \\quad I = \\int r^2 \\, dm = \\sum m_i r_i^2",
    "summary": "The kinetic energy stored in the rotational motion of a rigid body about an axis, proportional to its rotational inertia (moment of inertia) and the square of its angular velocity.",
    "derivation": "Consider a rigid body rotating about a fixed axis with angular velocity \\omega. Each constituent point mass element dm at perpendicular distance r from the rotation axis possesses instantaneous tangential speed v = r \\omega. The total kinetic energy is the volume integral of individual kinetic elements: K_{\\text{rot}} = \\int \\frac{1}{2} v^2 \\, dm = \\int \\frac{1}{2} (r \\omega)^2 \\, dm. Factoring out the uniform angular speed \\omega: K_{\\text{rot}} = \\frac{1}{2} \\omega^2 \\int r^2 \\, dm. Defining the moment of inertia as I \\equiv \\int r^2 \\, dm, we arrive at the rotational kinetic energy: K_{\\text{rot}} = \\frac{1}{2} I \\omega^2, forming the direct rotational analog to translational kinetic energy K_{\\text{trans}} = \\frac{1}{2} m v^2.",
    "realWorldApplication": "Flywheel Energy Storage Systems (FESS) used for grid power frequency stabilization and hybrid electric transit buses.",
    "variables": [
      {
        "symbol": "K_{\text{rot}}",
        "label": "Rotational Kinetic Energy",
        "unit": "J"
      },
      {
        "symbol": "I",
        "label": "Moment of Inertia",
        "unit": "kg·m²"
      },
      {
        "symbol": "\\omega",
        "label": "Angular Velocity",
        "unit": "rad/s"
      },
      {
        "symbol": "r",
        "label": "Perpendicular Distance to Axis",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "rotorMass": 4.0,
        "rotorRadius": 1.5,
        "angularSpeed": 15.0
      },
      "description": "High-speed spinning flywheel measuring kinetic energy storage and torque deceleration.",
      "apparatusType": "rotational_flywheel_bench"
    }
  },
  {
    "id": "rolling-without-slipping",
    "title": "Rolling Without Slipping Dynamics",
    "branch": "collisions",
    "tag": "Coupled Translation & Rotation",
    "difficulty": "Intermediate",
    "formulaLatex": "v_{\\text{cm}} = R \\omega, \\quad a_{\\text{cm}} = \\frac{g \\sin \\theta}{1 + \\frac{I_{\\text{cm}}}{M R^2}}",
    "summary": "When a circular object rolls down an incline without slipping, static friction provides the necessary torque to synchronize translation and rotation such that the contact point remains instantaneously stationary.",
    "derivation": "Kinematic condition for no-slip contact: v_{\\text{cm}} = R \\omega \\implies a_{\\text{cm}} = R \\alpha. Newton's laws for rolling down incline \\theta: Linear motion down slope: M g \\sin\\theta - f_s = M a_{\\text{cm}}. Rotational motion about CM axis: \\tau = f_s R = I_{\\text{cm}} \\alpha. Substituting \\alpha = \\frac{a_{\\text{cm}}}{R} into torque equation gives: f_s = I_{\\text{cm}} \\frac{a_{\\text{cm}}}{R^2}. Substituting f_s into linear equation: M g \\sin\\theta - I_{\\text{cm}} \\frac{a_{\\text{cm}}}{R^2} = M a_{\\text{cm}} \\implies M g \\sin\\theta = a_{\\text{cm}}\\left(M + \\frac{I_{\\text{cm}}}{R^2}\\right). Solving for linear acceleration: a_{\\text{cm}} = \\frac{g \\sin\\theta}{1 + \\frac{I_{\\text{cm}}}{M R^2}}. Objects with smaller dimensionless rotational inertia \\beta = \\frac{I_{\\text{cm}}}{M R^2} (e.g., solid sphere \\beta = 0.4 vs hoop \\beta = 1.0) accelerate faster down the slope.",
    "realWorldApplication": "Automotive braking systems (ABS) maintaining static tire contact without lockup sliding, ensuring maximum braking traction and steering control.",
    "variables": [
      {
        "symbol": "a_{\text{cm}}",
        "label": "Center of Mass Acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "I_{\text{cm}}",
        "label": "Rotational Inertia about CM",
        "unit": "kg·m²"
      },
      {
        "symbol": "R",
        "label": "Rolling Radius",
        "unit": "m"
      },
      {
        "symbol": "\\theta",
        "label": "Incline Angle",
        "unit": "deg"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        8,
        18
      ],
      "timeDilation": 1.0,
      "parameters": {
        "inclineAngle": 20.0,
        "radius": 1.0,
        "mass": 2.0,
        "shapeInertiaFactor": 0.4
      },
      "description": "Side-by-side rolling race between solid sphere, solid cylinder, and hollow hoop down a ramp.",
      "apparatusType": "rolling_down_incline_race"
    }
  },
  {
    "id": "torricellis-efflux-theorem",
    "title": "Torricelli's Efflux Theorem",
    "branch": "collisions",
    "tag": "Fluid Kinematics & Energy",
    "difficulty": "Foundational",
    "formulaLatex": "v_{\\text{efflux}} = \\sqrt{2g h}",
    "summary": "The speed of fluid efflux through a sharp orifice at depth h beneath an open liquid surface equals the speed that a solid mass would achieve falling freely under gravity from the same height.",
    "derivation": "Apply Bernoulli's principle along a streamline from top surface (point 1) to efflux orifice (point 2): P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g z_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g z_2. Both the top surface and the discharge jet are open to atmospheric pressure: P_1 = P_2 = P_{\\text{atm}}. Setting reference elevation z_2 = 0 at the orifice, top surface height is z_1 = h. By equation of continuity: A_1 v_1 = A_2 v_2 \\implies v_1 = \\left(\\frac{A_2}{A_1}\\right) v_2. For a large tank where reservoir surface area is vastly greater than orifice area (A_1 \\gg A_2), surface velocity is negligible: v_1 \\approx 0. Substituting these values into Bernoulli's equation: \\rho g h = \\frac{1}{2}\\rho v_2^2 \\implies v_2 = \\sqrt{2g h}.",
    "realWorldApplication": "Reservoir dam outlet design, industrial chemical batch draining, and liquid propellant rocket tank draining calculations.",
    "variables": [
      {
        "symbol": "v_{\text{efflux}}",
        "label": "Efflux Jet Velocity",
        "unit": "m/s"
      },
      {
        "symbol": "h",
        "label": "Fluid Column Height",
        "unit": "m"
      },
      {
        "symbol": "g",
        "label": "Gravitational Acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "\\rho",
        "label": "Fluid Density",
        "unit": "kg/m³"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "liquidHeight": 5.0,
        "orificeRadius": 0.1,
        "gravity": 9.81
      },
      "description": "Fluid tank with multi-height discharge nozzles demonstrating parabolic jet trajectory reaches.",
      "apparatusType": "torricelli_reservoir_tank"
    }
  },
  {
    "id": "explosive-momentum-recoil",
    "title": "Explosive Momentum Conservation & Recoil",
    "branch": "collisions",
    "tag": "Internal Kinetic Energy Release",
    "difficulty": "Foundational",
    "formulaLatex": "\\mathbf{P}_{\\text{initial}} = \\mathbf{0} \\implies m_1 \\mathbf{v}_1 + m_2 \\mathbf{v}_2 = \\mathbf{0}, \\quad v_f = v_0 + v_e \\ln\\left(\\frac{m_0}{m_f}\\right)",
    "summary": "When internal chemical or explosive energy breaks an isolated body apart, total vector momentum remains strictly zero. In continuous rocket expulsions, this yields the fundamental Tsiolkovsky rocket equation.",
    "derivation": "For an isolated system initially at rest (\\mathbf{P}_{\\text{initial}} = \\mathbf{0}), an internal explosive release separates the system into two fragments: \\mathbf{P}_{\\text{final}} = m_1 \\mathbf{v}_1 + m_2 \\mathbf{v}_2 = \\mathbf{0} \\implies \\mathbf{v}_2 = -\\frac{m_1}{m_2}\\mathbf{v}_1. The kinetic energy ratio is \\frac{K_1}{K_2} = \\frac{\\frac{1}{2}m_1 v_1^2}{\\frac{1}{2}m_2 v_2^2} = \\frac{m_2}{m_1}, showing that the lighter fragment receives the lion's share of explosive energy. For continuous exhaust ejection with mass m(t) and relative exhaust speed v_e: m \\frac{dv}{dt} = -v_e \\frac{dm}{dt} \\implies dv = -v_e \\frac{dm}{m}. Integrating from initial mass m_0 to burnout mass m_f yields Tsiolkovsky's equation: \\Delta v = v_e \\ln\\left(\\frac{m_0}{m_f}\\right).",
    "realWorldApplication": "Rocket launch staging and artillery muzzle brake recoil mitigation systems.",
    "variables": [
      {
        "symbol": "\\mathbf{v}_1, \\mathbf{v}_2",
        "label": "Fragment Recoil Velocities",
        "unit": "m/s"
      },
      {
        "symbol": "v_e",
        "label": "Effective Exhaust Velocity",
        "unit": "m/s"
      },
      {
        "symbol": "m_0 / m_f",
        "label": "Mass Ratio",
        "unit": "dimensionless"
      },
      {
        "symbol": "\\Delta v",
        "label": "Velocity Increment",
        "unit": "m/s"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        6,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "projectileMass": 0.5,
        "cannonMass": 5.0,
        "ejectionSpeed": 20.0
      },
      "description": "Isolated frictionless cart separation demonstrating inverse-mass momentum recoil velocity splitting.",
      "apparatusType": "recoil_cannon_cart"
    }
  },
  {
    "id": "pendulum-period-large-angle",
    "title": "Pendulum Period Independence (Small Angle vs Large Angle)",
    "branch": "collisions",
    "tag": "Non-Linear Restoring Dynamics",
    "difficulty": "Intermediate",
    "formulaLatex": "T = 2\\pi \\sqrt{\\frac{L}{g}} \\left(1 + \\frac{1}{4} \\sin^2\\frac{\\theta_0}{2} + \\frac{9}{64} \\sin^4\\frac{\\theta_0}{2} + \\dots\\right)",
    "summary": "For small angular swings (\\theta_0 < 10^\\circ), a pendulum's period is virtually independent of amplitude (isochronism). At large release angles, the non-linear restoring torque increases the period measurably.",
    "derivation": "The exact equation of motion of a simple pendulum of length L is \\ddot{\\theta} + \\frac{g}{L} \\sin\\theta = 0. Under the small-angle Taylor expansion \\sin\\theta \\approx \\theta - \\frac{\\theta^3}{6}, the linear approximation yields simple harmonic motion with period T_0 = 2\\pi \\sqrt{\\frac{L}{g}}. For arbitrary initial amplitude \\theta_0, conservation of mechanical energy gives: \\frac{1}{2} m (L \\dot{\\theta})^2 + m g L (1 - \\cos\\theta) = m g L (1 - \\cos\\theta_0). Solving for \\dot{\\theta} and integrating over a quarter period: T = 4 \\sqrt{\\frac{L}{2g}} \\int_0^{\\theta_0} \\frac{d\\theta}{\\sqrt{\\cos\\theta - \\cos\\theta_0}}. Substituting \\sin\\phi = \\frac{\\sin(\\theta/2)}{\\sin(\\theta_0/2)} transforms the integral into the complete elliptic integral of the first kind K(k): T = 4 \\sqrt{\\frac{L}{g}} K\\left(\\sin\\frac{\\theta_0}{2}\\right) = 2\\pi \\sqrt{\\frac{L}{g}} \\left[1 + \\frac{1}{4} \\sin^2\\frac{\\theta_0}{2} + \\frac{9}{64}\\sin^4\\frac{\\theta_0}{2} + \\dots\\right].",
    "realWorldApplication": "Horological grandfather clocks and Foucault pendulums: Amplitude must be kept tiny or cycloidal guides used (Huygens) to prevent clock period drift.",
    "variables": [
      {
        "symbol": "T",
        "label": "Full Period of Oscillation",
        "unit": "s"
      },
      {
        "symbol": "T_0",
        "label": "Small-Angle Period",
        "unit": "s"
      },
      {
        "symbol": "L",
        "label": "Pendulum Cord Length",
        "unit": "m"
      },
      {
        "symbol": "\\theta_0",
        "label": "Release Amplitude Angle",
        "unit": "rad"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "cordLength": 3.0,
        "smallAngle": 5.0,
        "largeAngle": 80.0
      },
      "description": "Dual pendulum comparison contrasting small-angle isochronous oscillation with large-angle elliptic delay.",
      "apparatusType": "dual_angle_pendulum_stand"
    }
  },
  {
    "id": "coulombs-law",
    "title": "Coulomb's Law & Superposition of Electrostatic Forces",
    "branch": "electromagnetism",
    "tag": "Electrostatics",
    "difficulty": "Foundational",
    "formulaLatex": "\\mathbf{F}_{12} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q_1 q_2}{r_{12}^2} \\hat{\\mathbf{r}}_{12}",
    "summary": "The electrostatic force between two stationary electric charges is directly proportional to the product of their charges, inversely proportional to the square of their separation distance, and directed along the line joining them. Net force on any charge is the vector superposition of forces from all other charges.",
    "derivation": "Experimentally established by Charles-Augustin de Coulomb using a torsion balance. In SI units, the force exerted by point charge q_1 on point charge q_2 separated by displacement \\mathbf{r}_{12} = \\mathbf{r}_2 - \\mathbf{r}_1 with magnitude r_{12} = |\\mathbf{r}_{12}| is: \\mathbf{F}_{12} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q_1 q_2}{r_{12}^2} \\hat{\\mathbf{r}}_{12}, where \\varepsilon_0 \\approx 8.854 \\times 10^{-12} \\text{ F/m} is the vacuum permittivity. By Newton's third law, \\mathbf{F}_{21} = -\\mathbf{F}_{12}. For an ensemble of N discrete charges q_i, the linearity of Maxwell's electrostatic equations guarantees linear vector superposition: \\mathbf{F}_{\\text{total}, j} = \\sum_{i \\ne j}^N \\mathbf{F}_{ij} = \\frac{q_j}{4\\pi \\varepsilon_0} \\sum_{i \\ne j}^N \\frac{q_i}{|\\mathbf{r}_j - \\mathbf{r}_i|^3} (\\mathbf{r}_j - \\mathbf{r}_i).",
    "realWorldApplication": "Electrostatic dust precipitation in industrial chimney scrubbers and toner deposition in laser printers and xerography.",
    "variables": [
      {
        "symbol": "\\mathbf{F}_{12}",
        "label": "Electrostatic Force Vector",
        "unit": "N"
      },
      {
        "symbol": "q_1, q_2",
        "label": "Point Electric Charges",
        "unit": "C"
      },
      {
        "symbol": "\\varepsilon_0",
        "label": "Vacuum Permittivity",
        "unit": "F/m"
      },
      {
        "symbol": "r_{12}",
        "label": "Charge Separation Distance",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "charge1": 2e-06,
        "charge2": -2e-06,
        "separation": 4.0
      },
      "description": "Coulomb dipole interaction displaying inverse-square attractive vector field lines.",
      "apparatusType": "coulomb_charge_bench"
    }
  },
  {
    "id": "electric-field-mapping",
    "title": "Electric Field Vectors & Point Charge Mapping",
    "branch": "electromagnetism",
    "tag": "Field Vector Topologies",
    "difficulty": "Foundational",
    "formulaLatex": "\\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi \\varepsilon_0} \\sum_{i=1}^N \\frac{q_i}{|\\mathbf{r} - \\mathbf{r}_i|^3} (\\mathbf{r} - \\mathbf{r}_i)",
    "summary": "The electric field at any spatial point represents the force per unit positive test charge placed at that location. Electric field lines emanate radially outward from positive charges and terminate on negative charges.",
    "derivation": "Define the electric field as the limit of force per unit test charge q_0 as q_0 \\to 0 to prevent field distortion: \\mathbf{E}(\\mathbf{r}) \\equiv \\lim_{q_0 \\to 0} \\frac{\\mathbf{F}(\\mathbf{r})}{q_0}. Substituting Coulomb's force from a source charge q at \\mathbf{r}' gives: \\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{|\\mathbf{r} - \\mathbf{r}'|^2} \\frac{\\mathbf{r} - \\mathbf{r}'}{|\\mathbf{r} - \\mathbf{r}'|}. For a continuous spatial charge density \\rho(\\mathbf{r}'): \\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi \\varepsilon_0} \\iiint_V \\frac{\\rho(\\mathbf{r}')}{|\\mathbf{r} - \\mathbf{r}'|^3} (\\mathbf{r} - \\mathbf{r}') \\, d^3\\mathbf{r}'. The field line density at any point is directly proportional to field magnitude |\\mathbf{E}|.",
    "realWorldApplication": "Field emission electron microscopes and high-voltage transmission line insulator corona discharge prevention.",
    "variables": [
      {
        "symbol": "\\mathbf{E}",
        "label": "Electric Field Vector",
        "unit": "N/C or V/m"
      },
      {
        "symbol": "q_i",
        "label": "Source Charge",
        "unit": "C"
      },
      {
        "symbol": "\\mathbf{r}",
        "label": "Observation Field Point",
        "unit": "m"
      },
      {
        "symbol": "\\rho",
        "label": "Volume Charge Density",
        "unit": "C/m³"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        10,
        18
      ],
      "timeDilation": 1.0,
      "parameters": {
        "numPositive": 2,
        "numNegative": 2,
        "gridResolution": 20.0
      },
      "description": "Multi-pole electrostatic configuration mapping 3D vector arrows and field line streamlines.",
      "apparatusType": "electric_field_mapper"
    }
  },
  {
    "id": "gauss-law-flux",
    "title": "Gauss's Law & Electrostatic Flux Enclosure",
    "branch": "electromagnetism",
    "tag": "Maxwell's Equations",
    "difficulty": "Intermediate",
    "formulaLatex": "\\Phi_E = \\oint_{\\partial V} \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q_{\\text{enclosed}}}{\\varepsilon_0} \\iff \\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}",
    "summary": "The total electric flux passing outward through any closed mathematical surface (Gaussian surface) is directly proportional to the total net electric charge enclosed within that surface, independent of its shape or size.",
    "derivation": "For a single point charge q at the origin, the electric field is \\mathbf{E} = \\frac{q}{4\\pi \\varepsilon_0 r^2} \\hat{\\mathbf{r}}. Integrating over a concentric sphere of radius r with normal area element d\\mathbf{A} = r^2 d\\Omega \\, \\hat{\\mathbf{r}}: \\Phi_E = \\oint_S \\mathbf{E} \\cdot d\\mathbf{A} = \\oint_S \\left(\\frac{q}{4\\pi \\varepsilon_0 r^2} \\hat{\\mathbf{r}}\\right) \\cdot (r^2 d\\Omega \\, \\hat{\\mathbf{r}}) = \\frac{q}{4\\pi \\varepsilon_0} \\oint_S d\\Omega = \\frac{q}{4\\pi \\varepsilon_0} (4\\pi) = \\frac{q}{\\varepsilon_0}. By the Divergence Theorem, the surface integral transforms into a volume integral: \\oint_{\\partial V} \\mathbf{E} \\cdot d\\mathbf{A} = \\iiint_V (\\nabla \\cdot \\mathbf{E}) \\, dV = \\frac{1}{\\varepsilon_0} \\iiint_V \\rho \\, dV. Because this must hold for any arbitrary volume V, the integrands must be identical everywhere: \\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}, establishing the first of Maxwell's equations.",
    "realWorldApplication": "Faraday cages providing electromagnetic shielding for sensitive MRI suites, avionics electronics, and lightning strike protection in commercial aircraft.",
    "variables": [
      {
        "symbol": "\\Phi_E",
        "label": "Electric Flux",
        "unit": "N·m²/C or V·m"
      },
      {
        "symbol": "Q_{\text{enc}}",
        "label": "Enclosed Net Charge",
        "unit": "C"
      },
      {
        "symbol": "d\\mathbf{A}",
        "label": "Outward Normal Area Vector",
        "unit": "m²"
      },
      {
        "symbol": "\\nabla \\cdot \\mathbf{E}",
        "label": "Field Divergence",
        "unit": "V/m²"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "enclosedCharge": 5e-06,
        "gaussianRadius": 3.0
      },
      "description": "Spherical and cylindrical Gaussian bounding surfaces computing enclosed flux in real time.",
      "apparatusType": "gaussian_flux_enclosure"
    }
  },
  {
    "id": "electric-potential-gradient",
    "title": "Electric Potential & Conservative Gradient Field",
    "branch": "electromagnetism",
    "tag": "Scalar Potentials",
    "difficulty": "Intermediate",
    "formulaLatex": "\\mathbf{E} = -\\nabla V, \\quad V(\\mathbf{r}) = -\\int_{\\mathbf{r}_{\\text{ref}}}^{\\mathbf{r}} \\mathbf{E} \\cdot d\\mathbf{l} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{|\\mathbf{r}|}",
    "summary": "Because static electric fields are conservative (\\nabla \\times \\mathbf{E} = \\mathbf{0}), the electric field vector is uniquely represented as the negative spatial gradient of a scalar electric potential field V.",
    "derivation": "Faraday's law in electrostatics reduces to \\nabla \\times \\mathbf{E} = \\mathbf{0}. By vector calculus, any curl-free vector field can be expressed as the gradient of a scalar function: \\mathbf{E} = -\\nabla V. The negative sign ensures that the electric field points in the direction of steepest decrease of potential (from high voltage to low voltage). The potential difference between two points A and B is path-independent: V(B) - V(A) = -\\int_A^B \\mathbf{E} \\cdot d\\mathbf{l}. Setting reference zero at infinity (V(\\infty) = 0) for a point charge q at the origin: V(\\mathbf{r}) = -\\int_\\infty^r \\left(\\frac{q}{4\\pi \\varepsilon_0 {r'}^2}\\right) dr' = \\left[\\frac{q}{4\\pi \\varepsilon_0 r'}\\right]_\\infty^r = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r}. In Cartesian coordinates: \\mathbf{E} = -\\left(\\frac{\\partial V}{\\partial x}\\hat{\\mathbf{i}} + \\frac{\\partial V}{\\partial y}\\hat{\\mathbf{j}} + \\frac{\\partial V}{\\partial z}\\hat{\\mathbf{k}}\\right).",
    "realWorldApplication": "Cathode ray tubes, electron guns, and electrostatic ion thrusters where potential gradients \nabla V accelerate xenon ions to 30 km/s.",
    "variables": [
      {
        "symbol": "V",
        "label": "Electric Potential (Voltage)",
        "unit": "V"
      },
      {
        "symbol": "\\mathbf{E}",
        "label": "Electric Field Gradient",
        "unit": "V/m"
      },
      {
        "symbol": "d\\mathbf{l}",
        "label": "Path Displacement Element",
        "unit": "m"
      },
      {
        "symbol": "q",
        "label": "Source Charge",
        "unit": "C"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        10,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "sourceVoltage": 100.0,
        "plateSeparation": 4.0
      },
      "description": "3D potential relief terrain with test charges rolling down steepest negative gradient slopes.",
      "apparatusType": "potential_landscape_visualizer"
    }
  },
  {
    "id": "equipotential-surfaces",
    "title": "Equipotential Surfaces & Field Orthogonality",
    "branch": "electromagnetism",
    "tag": "Potential Topography",
    "difficulty": "Intermediate",
    "formulaLatex": "V(\\mathbf{r}) = C \\implies dV = -\\mathbf{E} \\cdot d\\mathbf{l} = 0 \\implies \\mathbf{E} \\perp \\mathcal{S}_{\\text{equi}}",
    "summary": "An equipotential surface is a geometric locus of points in space having identical electric potential. Electric field vectors are strictly perpendicular to equipotential surfaces at every intersection point.",
    "derivation": "Let a surface \\mathcal{S} be defined by V(x, y, z) = C (constant). Consider an infinitesimal displacement d\\mathbf{l} lying tangent to this surface. By differential calculus: dV = \\frac{\\partial V}{\\partial x} dx + \\frac{\\partial V}{\\partial y} dy + \\frac{\\partial V}{\\partial z} dz = \\nabla V \\cdot d\\mathbf{l}. Because potential is constant everywhere along the surface, dV = 0 for any tangential step: \\nabla V \\cdot d\\mathbf{l} = 0. Since \\mathbf{E} = -\\nabla V, this requires: -\\mathbf{E} \\cdot d\\mathbf{l} = 0 \\implies \\mathbf{E} \\cdot d\\mathbf{l} = 0. Because this holds for all tangential vectors d\\mathbf{l} on the surface, the electric field vector \\mathbf{E} must be perpendicular to the tangent plane of the equipotential surface: \\mathbf{E} \\perp \\mathcal{S}_{\\text{equi}}. Furthermore, the work done moving a charge along an equipotential surface is identically zero: W = -q \\int \\mathbf{E} \\cdot d\\mathbf{l} = 0.",
    "realWorldApplication": "Electrostatic lens focusing in transmission electron microscopes (TEM) and design of high-voltage transmission bushing stress cones.",
    "variables": [
      {
        "symbol": "\\mathcal{S}_{\\text{equi}}",
        "label": "Equipotential Surface",
        "unit": "manifold"
      },
      {
        "symbol": "V",
        "label": "Scalar Potential Value",
        "unit": "V"
      },
      {
        "symbol": "\\mathbf{E}",
        "label": "Orthogonal Electric Field",
        "unit": "V/m"
      },
      {
        "symbol": "W",
        "label": "Work Done Along Surface",
        "unit": "J"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "dipoleSeparation": 4.0,
        "numContours": 12,
        "potentialDelta": 10.0
      },
      "description": "3D equipotential nested contour shells intersecting field lines at exact 90-degree angles.",
      "apparatusType": "equipotential_contour_tank"
    }
  },
  {
    "id": "capacitance-dielectrics",
    "title": "Capacitance, Dielectrics & Electrostatic Energy Density",
    "branch": "electromagnetism",
    "tag": "Energy Storage & Dielectrics",
    "difficulty": "Intermediate",
    "formulaLatex": "C = \\frac{\\kappa \\varepsilon_0 A}{d}, \\quad u_E = \\frac{1}{2} \\varepsilon_0 E^2, \\quad U = \\frac{1}{2} C V^2",
    "summary": "Capacitance quantifies the capacity of a conductor configuration to store separated electric charge per unit potential difference. Introducing a dielectric material of permittivity \\kappa scales capacitance by polarizing bound molecular dipoles.",
    "derivation": "For two planar parallel conducting plates of area A separated by distance d with surface charge density \\sigma = Q/A, Gauss's law gives electric field between plates: E_0 = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{\\varepsilon_0 A}. Potential difference is V = E_0 d = \\frac{Q d}{\\varepsilon_0 A}. Capacitance is defined as C_0 \\equiv \\frac{Q}{V} = \\frac{\\varepsilon_0 A}{d}. Inserting a linear dielectric material of dielectric constant \\kappa reduces the internal electric field via induced bound polarization charges: E = \\frac{E_0}{\\kappa} \\implies V = \\frac{V_0}{\\kappa}. The new capacitance increases: C = \\frac{Q}{V} = \\kappa C_0 = \\frac{\\kappa \\varepsilon_0 A}{d}. Total stored electrostatic energy is derived by charging plates incrementally: U = \\int_0^Q V(q') dq' = \\int_0^Q \\frac{q'}{C} dq' = \\frac{Q^2}{2C} = \\frac{1}{2} C V^2. Dividing by volume A d yields energy density: u_E = \\frac{U}{A d} = \\frac{1}{2} \\varepsilon_0 E^2.",
    "realWorldApplication": "Supercapacitors in regenerative braking systems, defibrillator discharge circuits, and computer DRAM capacitive memory cell arrays.",
    "variables": [
      {
        "symbol": "C",
        "label": "Capacitance",
        "unit": "F"
      },
      {
        "symbol": "\\kappa",
        "label": "Dielectric Constant (Relative Permittivity)",
        "unit": "dimensionless"
      },
      {
        "symbol": "A",
        "label": "Plate Surface Area",
        "unit": "m²"
      },
      {
        "symbol": "d",
        "label": "Plate Separation Gap",
        "unit": "m"
      },
      {
        "symbol": "u_E",
        "label": "Electrostatic Energy Density",
        "unit": "J/m³"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "plateArea": 2.0,
        "gapDistance": 0.5,
        "dielectricK": 4.5,
        "voltage": 50.0
      },
      "description": "Parallel plate capacitor with retractable dielectric slab measuring charge, voltage, and stored energy.",
      "apparatusType": "parallel_plate_capacitor_lab"
    }
  },
  {
    "id": "drift-velocity-ohms-law",
    "title": "Drift Velocity & Microscopic Ohm's Law",
    "branch": "electromagnetism",
    "tag": "Charge Transport",
    "difficulty": "Intermediate",
    "formulaLatex": "\\mathbf{J} = n q \\mathbf{v}_d = \\sigma \\mathbf{E}, \\quad \\mathbf{v}_d = -\\frac{e \\tau}{m_e} \\mathbf{E}",
    "summary": "Under an applied macroscopic electric field, conduction electrons undergo rapid random thermal collisions while superimposing a net slow directional drift velocity. This yields the microscopic local form of Ohm's law: J = \\sigma E.",
    "derivation": "In the Drude model of electrical conduction, electrons with charge -e and mass m_e experience acceleration \\mathbf{a} = -\\frac{e \\mathbf{E}}{m_e} between lattice collisions. If the mean time between randomized scattering events is \\tau (relaxation time), the average acquired drift velocity is: \\mathbf{v}_d = \\mathbf{a} \\tau = -\\frac{e \\tau}{m_e} \\mathbf{E}. In a conductor with free carrier number density n, current density \\mathbf{J} is total charge crossing unit area per second: \\mathbf{J} = n (-e) \\mathbf{v}_d = n (-e) \\left(-\\frac{e \\tau}{m_e} \\mathbf{E}\\right) = \\left(\\frac{n e^2 \\tau}{m_e}\\right) \\mathbf{E}. Defining electrical conductivity as \\sigma \\equiv \\frac{n e^2 \\tau}{m_e}, we obtain microscopic Ohm's law: \\mathbf{J} = \\sigma \\mathbf{E}. For a wire of length L and cross-section A with uniform field E = V/L and current I = J A, this maps to macroscopic Ohm's law V = I R with resistance R = \\frac{L}{\\sigma A}.",
    "realWorldApplication": "Integrated circuit interconnect metal selection (copper vs aluminium) and semiconductor electromigration mitigation.",
    "variables": [
      {
        "symbol": "\\mathbf{v}_d",
        "label": "Electron Drift Velocity",
        "unit": "m/s"
      },
      {
        "symbol": "\\mathbf{J}",
        "label": "Current Density",
        "unit": "A/m²"
      },
      {
        "symbol": "\\sigma",
        "label": "Electrical Conductivity",
        "unit": "S/m or (\\Omega·m)⁻¹"
      },
      {
        "symbol": "\\tau",
        "label": "Mean Scattering Relaxation Time",
        "unit": "s"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        5,
        10
      ],
      "timeDilation": 0.8,
      "parameters": {
        "carrierDensity": 8.5e+28,
        "electricField": 0.05,
        "relaxationTime": 2.5e-14
      },
      "description": "Microscopic lattice lattice scattering chamber tracking thermal jitter vs net electron drift.",
      "apparatusType": "electron_drift_lattice"
    }
  },
  {
    "id": "lorentz-force",
    "title": "Lorentz Force on Moving Charges",
    "branch": "electromagnetism",
    "tag": "Electrodynamics",
    "difficulty": "Foundational",
    "formulaLatex": "\\mathbf{F} = q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})",
    "summary": "The fundamental unified force exerted by electromagnetic fields on a charged particle. The electric component accelerates along the field lines, while the magnetic component deflects perpendicularly to both velocity and magnetic field vectors.",
    "derivation": "Formulated by Hendrik Lorentz. The electric force \\mathbf{F}_E = q\\mathbf{E} is velocity-independent and can perform mechanical work on the charge: dW_E = \\mathbf{F}_E \\cdot d\\mathbf{l} = q\\mathbf{E} \\cdot \\mathbf{v} dt. The magnetic force \\mathbf{F}_B = q(\\mathbf{v} \\times \\mathbf{B}) arises from relativistic transformation of Coulomb fields between moving frames. By vector product properties, \\mathbf{F}_B is strictly perpendicular to instantaneous velocity \\mathbf{v}: \\mathbf{F}_B \\cdot \\mathbf{v} = q(\\mathbf{v} \\times \\mathbf{B}) \\cdot \\mathbf{v} = 0. Consequently, the rate of work done by a purely magnetic field is identically zero: \\frac{dW_B}{dt} = \\mathbf{F}_B \\cdot \\mathbf{v} = 0. Magnetic fields alter the heading and trajectory curvature of charged particles, conserving instantaneous kinetic energy and scalar speed.",
    "realWorldApplication": "Tokamak fusion reactors (ITER) magnetically confining 150-million-degree plasma particles via helical magnetic field coils.",
    "variables": [
      {
        "symbol": "\\mathbf{F}",
        "label": "Total Lorentz Force",
        "unit": "N"
      },
      {
        "symbol": "q",
        "label": "Particle Electric Charge",
        "unit": "C"
      },
      {
        "symbol": "\\mathbf{E}",
        "label": "Electric Field Vector",
        "unit": "V/m"
      },
      {
        "symbol": "\\mathbf{B}",
        "label": "Magnetic Flux Density",
        "unit": "T"
      },
      {
        "symbol": "\\mathbf{v}",
        "label": "Particle Velocity Vector",
        "unit": "m/s"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "particleCharge": 1.602e-19,
        "particleMass": 9.109e-31,
        "electricFieldY": 0.0,
        "magneticFieldZ": 0.5,
        "initialVelocityX": 2000000.0
      },
      "description": "Charged particle trajectory chamber displaying perpendicular magnetic Lorentz deflection.",
      "apparatusType": "lorentz_deflection_chamber"
    }
  },
  {
    "id": "cyclotron-resonance",
    "title": "Cyclotron Resonance & Helical Particle Acceleration",
    "branch": "electromagnetism",
    "tag": "Magnetic Confinement & Resonance",
    "difficulty": "Intermediate",
    "formulaLatex": "\\omega_c = \\frac{q B}{m}, \\quad r_L = \\frac{m v_\\perp}{q B}",
    "summary": "In a uniform magnetic field, a charged particle undergoes circular cyclotron gyration with an angular frequency that is strictly independent of particle speed or orbit radius (in the non-relativistic regime).",
    "derivation": "Consider a particle of mass m and charge q injected with velocity \\mathbf{v} into a uniform magnetic field \\mathbf{B} = B \\hat{\\mathbf{z}}. The velocity resolves into parallel component v_\\parallel = v_z and perpendicular component v_\\perp = \\sqrt{v_x^2 + v_y^2}. Because \\mathbf{F}_B = q(\\mathbf{v} \\times \\mathbf{B}) has zero z-component, v_\\parallel = \\text{const}, producing uniform longitudinal drift. In the perpendicular plane, the magnetic force acts as pure centripetal force: q v_\\perp B = m \\frac{v_\\perp^2}{r_L} \\implies r_L = \\frac{m v_\\perp}{q B}, where r_L is the Larmor (gyroradius). The cyclotron angular frequency is \\omega_c = \\frac{v_\\perp}{r_L} = \\frac{q B}{m}. Remarkably, \\omega_c is independent of orbital radius r_L and velocity v_\\perp. This isochronism allows fixed-frequency RF electric fields across 'Dee' gaps in a cyclotron to continuously accelerate particles into expanding spirals.",
    "realWorldApplication": "Medical isotope production cyclotrons (synthesizing Fluorine-18 for PET cancer imaging scans) and mass spectrometry.",
    "variables": [
      {
        "symbol": "\\omega_c",
        "label": "Cyclotron Angular Frequency",
        "unit": "rad/s"
      },
      {
        "symbol": "r_L",
        "label": "Larmor Gyroradius",
        "unit": "m"
      },
      {
        "symbol": "B",
        "label": "Magnetic Field Strength",
        "unit": "T"
      },
      {
        "symbol": "v_\\perp",
        "label": "Perpendicular Velocity",
        "unit": "m/s"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        10,
        16
      ],
      "timeDilation": 0.8,
      "parameters": {
        "magneticField": 1.2,
        "rfVoltage": 500.0,
        "charge": 1.6e-19,
        "mass": 1.67e-27
      },
      "description": "Cyclotron D-shaped electrode chamber accelerating protons outward in expanding resonant spiral turns.",
      "apparatusType": "cyclotron_resonance_chamber"
    }
  },
  {
    "id": "thomson-em-ratio",
    "title": "Thomson e/m Charge-to-Mass Ratio & Cathode Rays",
    "branch": "electromagnetism",
    "tag": "Historical Breakthroughs",
    "difficulty": "Intermediate",
    "formulaLatex": "\\frac{e}{m_e} = \\frac{E^2}{2 V_a B^2} = \\frac{v_x}{r B}",
    "summary": "J.J. Thomson's 1897 discovery of the electron: using crossed electric and magnetic velocity filters and magnetic deflection to determine the fundamental charge-to-mass ratio e/m_e of cathode ray corpuscles.",
    "derivation": "In Thomson's experiment, electrons are accelerated from a cathode through anode potential V_a, acquiring kinetic energy: \\frac{1}{2} m_e v_x^2 = e V_a \\implies v_x = \\sqrt{\\frac{2e V_a}{m_e}}. The beam passes through perpendicular electric (\\mathbf{E} = E \\hat{\\mathbf{y}}) and magnetic (\\mathbf{B} = B \\hat{\\mathbf{z}}) fields. Adjusting fields to achieve zero net vertical deflection (\\mathbf{F}_{\\text{net}} = \\mathbf{0}): e E = e v_x B \\implies v_x = \\frac{E}{B}. Equating the two velocity expressions: \\frac{E}{B} = \\sqrt{\\frac{2e V_a}{m_e}} \\implies \\frac{E^2}{B^2} = \\frac{2e V_a}{m_e} \\implies \\frac{e}{m_e} = \\frac{E^2}{2 V_a B^2}. Alternatively, with electric field turned off, the beam bends in the magnetic field alone into circular arc of radius r: r = \\frac{m_e v_x}{e B} \\implies \\frac{e}{m_e} = \\frac{v_x}{r B} = \\frac{E}{r B^2}. Thomson obtained \\frac{e}{m_e} \\approx 1.76 \\times 10^{11} \\text{ C/kg}, proving cathode rays were subatomic particles ~1836 times lighter than hydrogen ions.",
    "realWorldApplication": "Mass spectrometers separating chemical isotopes and modern scanning electron microscope column optics.",
    "variables": [
      {
        "symbol": "e/m_e",
        "label": "Specific Charge of Electron",
        "unit": "C/kg"
      },
      {
        "symbol": "E",
        "label": "Electric Field Strength",
        "unit": "V/m"
      },
      {
        "symbol": "B",
        "label": "Magnetic Field Strength",
        "unit": "T"
      },
      {
        "symbol": "V_a",
        "label": "Anode Accelerating Voltage",
        "unit": "V"
      },
      {
        "symbol": "r",
        "label": "Circular Deflection Radius",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        6,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "acceleratingVoltage": 250.0,
        "electricField": 1200.0,
        "magneticField": 0.002
      },
      "description": "Thomson vacuum cathode tube with crossed Wien velocity filter and luminescent phosphor scale.",
      "apparatusType": "thomson_cathode_tube"
    }
  },
  {
    "id": "magnetic-dipole-moment",
    "title": "Magnetic Dipole Moment & Torque in Uniform Fields",
    "branch": "electromagnetism",
    "tag": "Magnetic Dipoles",
    "difficulty": "Intermediate",
    "formulaLatex": "\\boldsymbol{\\tau} = \\boldsymbol{\\mu} \\times \\mathbf{B}, \\quad U = -\\boldsymbol{\\mu} \\cdot \\mathbf{B}, \\quad \\boldsymbol{\\mu} = I \\mathbf{A}",
    "summary": "A planar current loop acts as a magnetic dipole with dipole moment vector \\boldsymbol{\\mu} = I \\mathbf{A}. In an external magnetic field, it experiences a restoring torque seeking to align its dipole axis with the field lines.",
    "derivation": "Consider a rectangular loop of dimensions a \\times b carrying current I in a uniform magnetic field \\mathbf{B} = B \\hat{\\mathbf{z}}. Let the loop normal \\hat{\\mathbf{n}} make angle \\theta with \\mathbf{B}. The magnetic forces on the opposite parallel sides of length a are F = I a B, oriented in opposite directions with separation distance d = b \\sin\\theta. The net force is zero: \\mathbf{F}_{\\text{net}} = \\mathbf{0}, but the forces create a mechanical couple (torque): \\tau = F d = (I a B)(b \\sin\\theta) = I (a b) B \\sin\\theta. Recognizing the loop area A = a b and defining the magnetic dipole moment vector \\boldsymbol{\\mu} \\equiv I A \\hat{\\mathbf{n}}, the vector torque is: \\boldsymbol{\\tau} = \\boldsymbol{\\mu} \\times \\mathbf{B}. The work required to rotate the dipole against torque from reference 90^\\circ is the potential energy: U(\\theta) = -\\int_{\\pi/2}^\\theta \\tau \\, d\\theta' = -\\int_{\\pi/2}^\\theta (-\\mu B \\sin\\theta') d\\theta' = -\\mu B \\cos\\theta = -\\boldsymbol{\\mu} \\cdot \\mathbf{B}.",
    "realWorldApplication": "Galvanometer needle movements, electric motor rotors, and Magnetic Resonance Imaging (MRI) nuclear spin alignment.",
    "variables": [
      {
        "symbol": "\\boldsymbol{\\mu}",
        "label": "Magnetic Dipole Moment",
        "unit": "A·m² or J/T"
      },
      {
        "symbol": "\\boldsymbol{\\tau}",
        "label": "Magnetic Torque",
        "unit": "N·m"
      },
      {
        "symbol": "U",
        "label": "Dipole Potential Energy",
        "unit": "J"
      },
      {
        "symbol": "I",
        "label": "Loop Current",
        "unit": "A"
      },
      {
        "symbol": "A",
        "label": "Enclosed Loop Area",
        "unit": "m²"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "current": 4.0,
        "loopRadius": 1.2,
        "magneticField": 0.8,
        "initialAngle": 60.0
      },
      "description": "Suspended current loop oscillating about stable equilibrium alignment in a uniform magnetic field.",
      "apparatusType": "magnetic_dipole_suspension"
    }
  },
  {
    "id": "biot-savart-law",
    "title": "Biot-Savart Law for Current Elements",
    "branch": "electromagnetism",
    "tag": "Magnetostatics",
    "difficulty": "Intermediate",
    "formulaLatex": "\\mathbf{B}(\\mathbf{r}) = \\frac{\\mu_0 I}{4\\pi} \\int_C \\frac{d\\mathbf{l}' \\times (\\mathbf{r} - \\mathbf{r}')}{|\\mathbf{r} - \\mathbf{r}'|^3}",
    "summary": "Calculates the magnetic field generated by steady electric currents. Each infinitesimal current element d\\mathbf{l}' contributes a magnetic field element perpendicular to both the current direction and the displacement vector.",
    "derivation": "Discovered empirically by Jean-Baptiste Biot and Félix Savart in 1820. The differential magnetic field contribution d\\mathbf{B} from a current element I d\\mathbf{l}' at \\mathbf{r}' observed at \\mathbf{r} with displacement \\mathbf{R} = \\mathbf{r} - \\mathbf{r}' is: d\\mathbf{B}(\\mathbf{r}) = \\frac{\\mu_0}{4\\pi} \\frac{I d\\mathbf{l}' \\times \\hat{\\mathbf{R}}}{R^2} = \\frac{\\mu_0 I}{4\\pi} \\frac{d\\mathbf{l}' \\times \\mathbf{R}}{R^3}, where \\mu_0 = 4\\pi \\times 10^{-7} \\text{ T·m/A} is vacuum permeability. For an infinitely long straight wire carrying current I along the z-axis: integrating from z' = -\\infty to +\\infty at perpendicular distance r yields: B = \\frac{\\mu_0 I}{4\\pi} \\int_{-\\infty}^\\infty \\frac{r \\, dz'}{(r^2 + {z'}^2)^{3/2}} = \\frac{\\mu_0 I}{2\\pi r}, directed azimuthally (\\hat{\\boldsymbol{\\phi}}) by the right-hand rule.",
    "realWorldApplication": "Electromagnet core winding design and high-current power transmission line electromagnetic field (EMF) compliance calculations.",
    "variables": [
      {
        "symbol": "\\mathbf{B}",
        "label": "Magnetic Flux Density",
        "unit": "T"
      },
      {
        "symbol": "\\mu_0",
        "label": "Vacuum Permeability",
        "unit": "T·m/A"
      },
      {
        "symbol": "I",
        "label": "Steady Electric Current",
        "unit": "A"
      },
      {
        "symbol": "d\\mathbf{l}'",
        "label": "Differential Current Element",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "wireCurrent": 10.0,
        "wireLength": 20.0,
        "probeRadius": 2.5
      },
      "description": "Linear current-carrying filament surrounded by concentric azimuthal magnetic vector rings.",
      "apparatusType": "biot_savart_filament"
    }
  },
  {
    "id": "amperes-circuital-law",
    "title": "Ampere's Circuital Law",
    "branch": "electromagnetism",
    "tag": "Maxwell's Equations",
    "difficulty": "Intermediate",
    "formulaLatex": "\\oint_{\\partial S} \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{\\text{enclosed}} \\iff \\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}",
    "summary": "The line integral of magnetic field \\mathbf{B} around any closed Amperian loop is directly proportional to the total net electric current piercing through the surface bounded by that loop.",
    "derivation": "Consider a circular loop of radius r centered symmetrically on an infinite wire carrying current I. By rotational symmetry, \\mathbf{B} has constant magnitude along the circle and is directed purely tangentially: \\mathbf{B} = B(r) \\hat{\\boldsymbol{\\phi}}. Evaluating the closed path line integral: \\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\int_0^{2\\pi} B(r) (r d\\phi) = B(r) (2\\pi r). By Biot-Savart law, B(r) = \\frac{\\mu_0 I}{2\\pi r}. Multiplying yields: \\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\left(\\frac{\\mu_0 I}{2\\pi r}\\right) (2\\pi r) = \\mu_0 I. By Stokes' Theorem, the line integral converts to a surface integral of the curl over bounded area S: \\oint_{\\partial S} \\mathbf{B} \\cdot d\\mathbf{l} = \\iint_S (\\nabla \\times \\mathbf{B}) \\cdot d\\mathbf{A} = \\mu_0 \\iint_S \\mathbf{J} \\cdot d\\mathbf{A}. Because this holds for any arbitrary surface, the local differential form follows: \\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J} (Maxwell's 4th equation in magnetostatics).",
    "realWorldApplication": "Toroidal transformers, inductors, and clamp-on AC ammeters measuring current non-invasively via enclosed magnetic flux.",
    "variables": [
      {
        "symbol": "\\oint \\mathbf{B} \\cdot d\\mathbf{l}",
        "label": "Circulation of B",
        "unit": "T·m"
      },
      {
        "symbol": "I_{\text{enc}}",
        "label": "Enclosed Current",
        "unit": "A"
      },
      {
        "symbol": "\\mathbf{J}",
        "label": "Volume Current Density",
        "unit": "A/m²"
      },
      {
        "symbol": "\\mu_0",
        "label": "Permeability of Free Space",
        "unit": "T·m/A"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "numFilaments": 3,
        "currentPerFilament": 5.0,
        "amperianRadius": 3.2
      },
      "description": "Flexible closed Amperian path integrating tangential magnetic field around multi-conductor bundles.",
      "apparatusType": "amperian_loop_integrator"
    }
  },
  {
    "id": "faradays-law-induction",
    "title": "Faraday's Law of Electromagnetic Induction",
    "branch": "electromagnetism",
    "tag": "Maxwell's Equations",
    "difficulty": "Foundational",
    "formulaLatex": "\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -\\frac{d}{dt} \\iint_S \\mathbf{B} \\cdot d\\mathbf{A} \\iff \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}",
    "summary": "A changing magnetic flux through any closed conducting circuit induces an electromotive force (EMF) proportional to the negative time rate of change of the magnetic flux. This links electricity and magnetism dynamically.",
    "derivation": "Discovered by Michael Faraday in 1831. Magnetic flux through surface S bounded by contour C is \\Phi_B \\equiv \\iint_S \\mathbf{B} \\cdot d\\mathbf{A}. The induced electromotive force around contour C is \\mathcal{E} \\equiv \\oint_C \\mathbf{E} \\cdot d\\mathbf{l}. Faraday's empirical law states \\mathcal{E} = -\\frac{d\\Phi_B}{dt}. Applying Stokes' theorem to convert the contour integral into a surface integral: \\oint_C \\mathbf{E} \\cdot d\\mathbf{l} = \\iint_S (\\nabla \\times \\mathbf{E}) \\cdot d\\mathbf{A} = -\\frac{d}{dt}\\iint_S \\mathbf{B} \\cdot d\\mathbf{A} = -\\iint_S \\frac{\\partial \\mathbf{B}}{\\partial t} \\cdot d\\mathbf{A}. Because this holds for any arbitrary closed contour and bounded surface: \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}, the third of Maxwell's fundamental equations, proving that time-varying magnetic fields generate non-conservative curling electric fields.",
    "realWorldApplication": "Hydroelectric turbine generators, electrical power transformers, and induction cooking stovetops.",
    "variables": [
      {
        "symbol": "\\mathcal{E}",
        "label": "Induced Electromotive Force (EMF)",
        "unit": "V"
      },
      {
        "symbol": "\\Phi_B",
        "label": "Magnetic Flux",
        "unit": "Wb or T·m²"
      },
      {
        "symbol": "t",
        "label": "Time",
        "unit": "s"
      },
      {
        "symbol": "\\mathbf{E}",
        "label": "Induced Curling Electric Field",
        "unit": "V/m"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "solenoidTurns": 50,
        "coilRadius": 1.5,
        "fluxRateOfChange": 2.5
      },
      "description": "Bar magnet plunging through a copper wire solenoid inducing galvanometer voltage deflections.",
      "apparatusType": "induction_coil_galvanometer"
    }
  },
  {
    "id": "lenz-law-eddy-currents",
    "title": "Lenz's Law & Eddy Current Magnetic Braking",
    "branch": "electromagnetism",
    "tag": "Induced Currents & Damping",
    "difficulty": "Intermediate",
    "formulaLatex": "\\mathcal{E}_{\\text{ind}} = -\\frac{d\\Phi_B}{dt}, \\quad \\mathbf{F}_{\\text{drag}} \\propto -\\sigma B^2 \\mathbf{v}",
    "summary": "An induced electric current always flows in such a direction that its secondary magnetic field opposes the change in magnetic flux that produced it (the minus sign in Faraday's law). In bulk conductors, circulating eddy currents create smooth contactless magnetic braking.",
    "derivation": "Formulated by Heinrich Lenz in 1834. If the induced current reinforced the flux change instead of opposing it, a positive feedback loop would spontaneously amplify magnetic flux and electrical energy from zero, violating conservation of energy. In a conducting metal plate moving with velocity \\mathbf{v} through a localized transverse magnetic field \\mathbf{B} = B \\hat{\\mathbf{z}}, the free electrons experience a motional Lorentz field \\mathbf{E}_{\\text{mot}} = \\mathbf{v} \\times \\mathbf{B}. By Ohm's law, circulating eddy currents are generated: \\mathbf{J} = \\sigma(\\mathbf{v} \\times \\mathbf{B}). These induced currents in turn experience a magnetic Lorentz retarding force: \\mathbf{F}_{\\text{drag}} = \\int_V (\\mathbf{J} \\times \\mathbf{B}) \\, dV = \\int_V \\sigma [(\\mathbf{v} \\times \\mathbf{B}) \\times \\mathbf{B}] \\, dV. Expanding the vector triple product: (\\mathbf{v} \\times \\mathbf{B}) \\times \\mathbf{B} = -B^2 \\mathbf{v}, yielding an exact viscous drag force: \\mathbf{F}_{\\text{drag}} = -\\sigma B^2 V_{\\text{eff}} \\mathbf{v}, purely converting mechanical kinetic energy into Joule heating.",
    "realWorldApplication": "Contactless eddy current brakes in high-speed bullet trains (TGV/Shinkansen) and free-fall amusement park drop towers.",
    "variables": [
      {
        "symbol": "\\mathbf{F}_{\\text{drag}}",
        "label": "Eddy Current Retarding Drag",
        "unit": "N"
      },
      {
        "symbol": "\\sigma",
        "label": "Metal Electrical Conductivity",
        "unit": "S/m"
      },
      {
        "symbol": "B",
        "label": "Applied Magnetic Field",
        "unit": "T"
      },
      {
        "symbol": "\\mathbf{v}",
        "label": "Plate Translation Velocity",
        "unit": "m/s"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "plateConductivity": 59600000.0,
        "magneticField": 1.4,
        "pendulumLength": 3.0
      },
      "description": "Solid vs slotted copper pendulum swinging through neodymium magnet gap demonstrating eddy braking.",
      "apparatusType": "eddy_current_brake_pendulum"
    }
  },
  {
    "id": "hall-effect",
    "title": "Hall Effect & Charge Carrier Sign Determination",
    "branch": "electromagnetism",
    "tag": "Solid State Transport",
    "difficulty": "Intermediate",
    "formulaLatex": "V_H = \\frac{I B}{n q d} = R_H \\frac{I B}{d}, \\quad R_H = \\frac{1}{n q}",
    "summary": "When a current-carrying electrical conductor is placed in a transverse magnetic field, charge carriers are deflected sideways by the magnetic Lorentz force until a transverse electric Hall voltage develops that balances the magnetic force.",
    "derivation": "Discovered by Edwin Hall in 1879. Consider a slab of width w and thickness d carrying longitudinal current I in the x-direction, subjected to transverse magnetic field \\mathbf{B} = B \\hat{\\mathbf{z}}. Free carriers with charge q and drift velocity v_d experience magnetic Lorentz deflection along y: F_y = q v_d B. Charges accumulate on the lateral edge until the built-up transverse electric field E_H exerts an equal and opposite electrostatic force: q E_H = q v_d B \\implies E_H = v_d B. The transverse Hall voltage across width w is V_H = E_H w = v_d B w. Current is related to drift velocity by I = n q A v_d = n q (w d) v_d \\implies v_d = \\frac{I}{n q w d}. Substituting v_d into the Hall voltage equation gives: V_H = \\left(\\frac{I}{n q w d}\\right) B w = \\frac{I B}{n q d}. Defining the Hall coefficient R_H \\equiv \\frac{1}{n q}, the polarity of V_H reveals whether conduction carriers are negative electrons (R_H < 0) or positive holes (R_H > 0).",
    "realWorldApplication": "Hall effect sensor ICs in brushless DC motors, smartphone compasses, automotive wheel speed sensors, and current probes.",
    "variables": [
      {
        "symbol": "V_H",
        "label": "Transverse Hall Voltage",
        "unit": "V"
      },
      {
        "symbol": "R_H",
        "label": "Hall Coefficient",
        "unit": "m³/C"
      },
      {
        "symbol": "n",
        "label": "Carrier Number Density",
        "unit": "m⁻³"
      },
      {
        "symbol": "d",
        "label": "Slab Thickness Along B",
        "unit": "m"
      },
      {
        "symbol": "q",
        "label": "Carrier Elementary Charge",
        "unit": "C"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        5,
        10
      ],
      "timeDilation": 1.0,
      "parameters": {
        "carrierDensity": 2.5e+23,
        "current": 2.0,
        "magneticField": 1.5,
        "slabThickness": 0.001
      },
      "description": "Semiconductor Hall probe bar recording lateral charge pileup and transverse millivolt voltage.",
      "apparatusType": "hall_effect_sensor_bench"
    }
  },
  {
    "id": "helmholtz-coil",
    "title": "Helmholtz Coil Uniform Field Geometry",
    "branch": "electromagnetism",
    "tag": "Precision Magnetics",
    "difficulty": "Intermediate",
    "formulaLatex": "B(0) = \\left(\\frac{4}{5}\\right)^{3/2} \\frac{\\mu_0 N I}{R}, \\quad \\left.\\frac{d^2 B_z}{dz^2}\\right|_{z=0} = 0",
    "summary": "A pair of identical circular coaxial coils separated by a distance exactly equal to their radius R, carrying identical currents in the same direction. This geometric configuration produces a remarkably uniform central magnetic field with zero second spatial derivative.",
    "derivation": "The on-axis magnetic field of a single N-turn loop of radius R at axial distance z is given by Biot-Savart integration: B_1(z) = \\frac{\\mu_0 N I R^2}{2(R^2 + z^2)^{3/2}}. For two identical coils placed at z = -d/2 and z = +d/2, total central field is B(z) = B_1(z - d/2) + B_1(z + d/2). Expanding B(z) as a Taylor series about the midpoint z = 0: B(z) = B(0) + z B'(0) + \\frac{z^2}{2!} B''(0) + \\frac{z^3}{3!} B'''(0) + \\frac{z^4}{4!} B^{(4)}(0) + \\dots By mirror symmetry, all odd derivatives vanish at the center: B'(0) = B'''(0) = 0. Calculating the second derivative: B''(0) \\propto \\left[4(d/2)^2 - R^2\\right]. By choosing coil separation distance d = R, the second derivative vanishes identically: B''(0) = 0. The first non-vanishing spatial variation term is the 4th derivative, yielding exceptional central magnetic field homogeneity: B(0) = 2 \\left[\\frac{\\mu_0 N I R^2}{2(R^2 + (R/2)^2)^{3/2}}\\right] = \\frac{\\mu_0 N I R^2}{(5 R^2 / 4)^{3/2}} = \\left(\\frac{4}{5}\\right)^{3/2} \\frac{\\mu_0 N I}{R} \\approx 0.7155 \\frac{\\mu_0 N I}{R}.",
    "realWorldApplication": "Earth magnetic field cancellation in magnetic sensor calibration facilities and electron beam deflection experiments.",
    "variables": [
      {
        "symbol": "B(0)",
        "label": "Central Magnetic Flux Density",
        "unit": "T"
      },
      {
        "symbol": "R",
        "label": "Coil Radius and Separation",
        "unit": "m"
      },
      {
        "symbol": "N",
        "label": "Number of Wire Turns per Coil",
        "unit": "dimensionless"
      },
      {
        "symbol": "I",
        "label": "Coil Excitation Current",
        "unit": "A"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "coilRadius": 2.5,
        "current": 5.0,
        "turns": 100
      },
      "description": "Twin coaxial Helmholtz coils generating a high-uniformity central magnetic field plateau.",
      "apparatusType": "helmholtz_coil_rig"
    }
  },
  {
    "id": "poynting-vector",
    "title": "Poynting Vector & Electromagnetic Energy Flow",
    "branch": "electromagnetism",
    "tag": "Electrodynamic Energy Flow",
    "difficulty": "Advanced",
    "formulaLatex": "\\mathbf{S} = \\frac{1}{\\mu_0} (\\mathbf{E} \\times \\mathbf{B}), \\quad -\\frac{\\partial u_{\\text{em}}}{\\partial t} = \\nabla \\cdot \\mathbf{S} + \\mathbf{J} \\cdot \\mathbf{E}",
    "summary": "The directional energy flux density (power per unit area) transported by coupled electric and magnetic fields. Poynting's theorem represents the exact local conservation of electromagnetic energy.",
    "derivation": "Formulated by John Henry Poynting in 1884. Total electromagnetic energy density stored in fields is u_{\\text{em}} = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{1}{2\\mu_0}B^2. Differentiating with respect to time: \\frac{\\partial u_{\\text{em}}}{\\partial t} = \\varepsilon_0 \\mathbf{E} \\cdot \\frac{\\partial \\mathbf{E}}{\\partial t} + \\frac{1}{\\mu_0} \\mathbf{B} \\cdot \\frac{\\partial \\mathbf{B}}{\\partial t}. Using Maxwell-Faraday equation \\frac{\\partial \\mathbf{B}}{\\partial t} = -\\nabla \\times \\mathbf{E} and Ampere-Maxwell equation \\varepsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t} = \\frac{1}{\\mu_0}\\nabla \\times \\mathbf{B} - \\mathbf{J}: \\frac{\\partial u_{\\text{em}}}{\\partial t} = \\mathbf{E} \\cdot \\left(\\frac{1}{\\mu_0}\\nabla \\times \\mathbf{B} - \\mathbf{J}\\right) - \\frac{1}{\\mu_0} \\mathbf{B} \\cdot (\\nabla \\times \\mathbf{E}) = -\\mathbf{J} \\cdot \\mathbf{E} - \\frac{1}{\\mu_0} [\\mathbf{B} \\cdot (\\nabla \\times \\mathbf{E}) - \\mathbf{E} \\cdot (\\nabla \\times \\mathbf{B})]. Using vector identity \\nabla \\cdot (\\mathbf{E} \\times \\mathbf{B}) = \\mathbf{B} \\cdot (\\nabla \\times \\mathbf{E}) - \\mathbf{E} \\cdot (\\nabla \\times \\mathbf{B}): \\frac{\\partial u_{\\text{em}}}{\\partial t} = -\\mathbf{J} \\cdot \\mathbf{E} - \\nabla \\cdot \\left(\\frac{1}{\\mu_0}\\mathbf{E} \\times \\mathbf{B}\\right). Defining the Poynting vector \\mathbf{S} \\equiv \\frac{1}{\\mu_0} (\\mathbf{E} \\times \\mathbf{B}), we arrive at Poynting's theorem: -\\frac{\\partial u_{\\text{em}}}{\\partial t} = \\nabla \\cdot \\mathbf{S} + \\mathbf{J} \\cdot \\mathbf{E}, where \\mathbf{J} \\cdot \\mathbf{E} represents Joule dissipation into matter.",
    "realWorldApplication": "Solar radiation pressure on space exploration solar sails and microwave/RF power beam transmission waveguides.",
    "variables": [
      {
        "symbol": "\\mathbf{S}",
        "label": "Poynting Energy Flux Density",
        "unit": "W/m²"
      },
      {
        "symbol": "u_{\text{em}}",
        "label": "EM Field Energy Density",
        "unit": "J/m³"
      },
      {
        "symbol": "\\mathbf{J} \\cdot \\mathbf{E}",
        "label": "Joule Heating Rate",
        "unit": "W/m³"
      },
      {
        "symbol": "\\mathbf{E}, \\mathbf{B}",
        "label": "Electric and Magnetic Fields",
        "unit": "V/m, T"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "frequency": 100000000.0,
        "electricAmplitude": 300.0,
        "phaseVelocity": 300000000.0
      },
      "description": "Propagating transverse electromagnetic wave displaying orthogonal E, B, and forward Poynting vector S.",
      "apparatusType": "poynting_wave_guide"
    }
  },
  {
    "id": "archimedes-buoyancy",
    "title": "Archimedes' Principle of Buoyancy",
    "branch": "fluids",
    "tag": "Hydrostatics & Flotation",
    "difficulty": "Foundational",
    "formulaLatex": "F_b = \\rho_{\\text{fluid}} V_{\\text{disp}} g",
    "summary": "Any body wholly or partially submerged in a static fluid experiences an upward buoyant force equal in magnitude to the weight of the fluid displaced by the body. Flotation occurs when buoyant force equals total body weight.",
    "derivation": "Consider an arbitrary volume V of fluid at rest inside a fluid body of uniform density \\rho_f. Because the fluid element is in static equilibrium, the net force on it must be zero: \\mathbf{F}_{\\text{net}} = \\mathbf{F}_{\\text{surrounding}} + \\mathbf{F}_g = \\mathbf{0}. The gravitational force on this fluid volume is downward with magnitude W = m g = \\rho_f V g. Consequently, the surrounding fluid must exert an upward resultant force \\mathbf{F}_b on the boundary of volume V: F_b = \\rho_f V g. Replacing this fluid volume with a solid object of identical shape, the pressure distribution exerted by the surrounding fluid on the surface remains identical because pressure depends solely on depth: P(z) = \\rho_f g z. Integrating the pressure over the closed surface \\partial V via the Divergence Theorem: \\mathbf{F}_b = -\\oint_{\\partial V} P \\, \\hat{\\mathbf{n}} \\, dA = -\\iiint_V \\nabla P \\, dV. In a uniform gravitational field, hydrostatic gradient is \\nabla P = -\\rho_f g \\hat{\\mathbf{k}}, yielding: \\mathbf{F}_b = -\\iiint_V (-\\rho_f g \\hat{\\mathbf{k}}) dV = \\rho_f g V_{\\text{disp}} \\hat{\\mathbf{k}}.",
    "realWorldApplication": "Submarine ballast tank depth trim controls and cargo ship Plimsoll waterline load limits.",
    "variables": [
      {
        "symbol": "F_b",
        "label": "Upward Buoyant Force",
        "unit": "N"
      },
      {
        "symbol": "\\rho_{\\text{fluid}}",
        "label": "Fluid Mass Density",
        "unit": "kg/m³"
      },
      {
        "symbol": "V_{\text{disp}}",
        "label": "Displaced Fluid Volume",
        "unit": "m³"
      },
      {
        "symbol": "g",
        "label": "Gravitational Acceleration",
        "unit": "m/s²"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "fluidDensity": 1000.0,
        "blockDensity": 650.0,
        "blockVolume": 0.008
      },
      "description": "Graduated immersion cylinder displaying Archimedes overflow displacement and equilibrium waterline.",
      "apparatusType": "archimedes_immersion_tank"
    }
  },
  {
    "id": "hydrostatic-pressure-depth",
    "title": "Hydrostatic Pressure vs Depth",
    "branch": "fluids",
    "tag": "Hydrostatics",
    "difficulty": "Foundational",
    "formulaLatex": "P(h) = P_0 + \\rho g h, \\quad \\frac{dP}{dz} = -\\rho g",
    "summary": "In an incompressible fluid at rest under gravity, hydrostatic pressure increases linearly with vertical depth beneath the free surface, acting isotropically in all spatial directions.",
    "derivation": "Isolate an infinitesimal fluid cylindrical parcel of cross-sectional area A and vertical height dz between vertical coordinates z and z + dz. The upward force on the lower face is P(z) A. The downward force on the upper face is P(z + dz) A. The weight of the parcel is dW = dm \\, g = (\\rho A dz) g. For static mechanical equilibrium: \\sum F_z = P(z) A - P(z + dz) A - \\rho g A dz = 0. Dividing by A dz and taking the differential limit dz \\to 0 yields the fundamental hydrostatic equation: \\frac{dP}{dz} = -\\rho g. For constant fluid density \\rho (incompressible assumption), integrating from free surface z = z_0 (where P = P_0) downward to elevation z = z_0 - h: \\int_{P_0}^P dP' = -\\int_0^{-h} \\rho g \\, dz' \\implies P - P_0 = \\rho g h \\implies P(h) = P_0 + \\rho g h.",
    "realWorldApplication": "Deep-sea submersible hull engineering (e.g. Alvin and Deepsea Challenger resisting >1100 atmospheres at the Mariana Trench) and dam wall structural thickness tapering.",
    "variables": [
      {
        "symbol": "P(h)",
        "label": "Absolute Fluid Pressure",
        "unit": "Pa or N/m²"
      },
      {
        "symbol": "P_0",
        "label": "Surface Atmospheric Pressure",
        "unit": "Pa"
      },
      {
        "symbol": "\\rho",
        "label": "Fluid Mass Density",
        "unit": "kg/m³"
      },
      {
        "symbol": "h",
        "label": "Submerged Depth",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "surfacePressure": 101325.0,
        "fluidDensity": 1025.0,
        "maxDepth": 10.0
      },
      "description": "Deep vertical pressure column with dynamic manometer gauges reading isotropic hydrostatic gradient.",
      "apparatusType": "hydrostatic_pressure_column"
    }
  },
  {
    "id": "pascals-principle-hydraulics",
    "title": "Pascal's Principle & Hydraulic Multiplication",
    "branch": "fluids",
    "tag": "Hydraulic Mechanics",
    "difficulty": "Foundational",
    "formulaLatex": "\\Delta P = \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{A_2}{A_1}\\right)",
    "summary": "A pressure change applied to an enclosed, incompressible static fluid is transmitted undiminished and instantaneously to every portion of the fluid and to the walls of the containing vessel.",
    "derivation": "Formulated by Blaise Pascal in 1653. In an enclosed fluid reservoir, hydrostatic pressure satisfies P(z) = P_{\\text{applied}} + \\rho g h. If an external force F_1 is applied across input piston of area A_1, the generated pressure increment is \\Delta P = \\frac{F_1}{A_1}. Because the fluid is incompressible and molecules are in dense contact, this pressure increase \\Delta P propagates equally to all points. At an output piston of area A_2, the resulting force exerted by the fluid is F_2 = \\Delta P \\cdot A_2 = \\left(\\frac{F_1}{A_1}\\right) A_2 = F_1 \\left(\\frac{A_2}{A_1}\\right). By conservation of fluid volume, displaced volume is equal: V = A_1 d_1 = A_2 d_2 \\implies d_2 = d_1 \\left(\\frac{A_1}{A_2}\\right). Mechanical work input W_1 = F_1 d_1 equals work output W_2 = F_2 d_2 = \\left[F_1 \\frac{A_2}{A_1}\\right] \\left[d_1 \\frac{A_1}{A_2}\\right] = F_1 d_1, conforming to conservation of energy.",
    "realWorldApplication": "Automotive hydraulic disc brakes, industrial hydraulic presses, aircraft fly-by-wire hydraulic flight control actuators.",
    "variables": [
      {
        "symbol": "F_1, F_2",
        "label": "Input & Output Forces",
        "unit": "N"
      },
      {
        "symbol": "A_1, A_2",
        "label": "Piston Cross-Sectional Areas",
        "unit": "m²"
      },
      {
        "symbol": "\\Delta P",
        "label": "Transmitted Pressure Change",
        "unit": "Pa"
      },
      {
        "symbol": "d_1, d_2",
        "label": "Piston Strokes",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "inputArea": 0.05,
        "outputArea": 0.5,
        "appliedForce": 200.0
      },
      "description": "Dual-piston hydraulic press showing 10x force multiplication lifting a heavy automotive load.",
      "apparatusType": "hydraulic_multiplier_press"
    }
  },
  {
    "id": "continuity-equation-fluids",
    "title": "Equation of Continuity for Incompressible Flow",
    "branch": "fluids",
    "tag": "Mass Conservation",
    "difficulty": "Foundational",
    "formulaLatex": "A_1 v_1 = A_2 v_2 \\iff Q = \\text{const} \\iff \\nabla \\cdot \\mathbf{v} = 0",
    "summary": "Expresses the principle of conservation of mass in fluid dynamics. For steady, incompressible laminar flow along a stream tube, the volumetric flow rate Q remains invariant along the conduit.",
    "derivation": "Consider a stream tube carrying fluid across cross-sectional areas A_1 and A_2 with average velocities v_1 and v_2. Over time interval dt, mass entering cross-section 1 is dm_1 = \\rho_1 A_1 v_1 dt. Mass exiting cross-section 2 over the same interval is dm_2 = \\rho_2 A_2 v_2 dt. For steady flow with no mass accumulation or cavitation within the conduit: dm_1 = dm_2 \\implies \\rho_1 A_1 v_1 = \\rho_2 A_2 v_2. For incompressible fluids (\\rho_1 = \\rho_2 = \\text{const}), the density cancels out: A_1 v_1 = A_2 v_2 = Q (\\text{constant volumetric flow rate}). In differential vector form, Reynolds Transport Theorem gives \\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\mathbf{v}) = 0. For constant density (\\frac{\\partial \\rho}{\\partial t} = 0), this simplifies to the divergence-free solenoidal condition: \\nabla \\cdot \\mathbf{v} = 0.",
    "realWorldApplication": "Fire hose constriction nozzles accelerating water jets, cardiovascular arterial stenosis velocity increases, and river rapids narrowing.",
    "variables": [
      {
        "symbol": "Q",
        "label": "Volumetric Flow Rate",
        "unit": "m³/s"
      },
      {
        "symbol": "A_1, A_2",
        "label": "Pipe Cross-Sectional Areas",
        "unit": "m²"
      },
      {
        "symbol": "v_1, v_2",
        "label": "Mean Flow Velocities",
        "unit": "m/s"
      },
      {
        "symbol": "\\nabla \\cdot \\mathbf{v}",
        "label": "Velocity Field Divergence",
        "unit": "s⁻¹"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        6,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "inletArea": 1.0,
        "throatArea": 0.25,
        "inletVelocity": 2.0
      },
      "description": "Tapered constriction conduit tracking stream tracer velocity acceleration across narrow sections.",
      "apparatusType": "flow_continuity_pipe"
    }
  },
  {
    "id": "bernoullis-principle",
    "title": "Bernoulli's Principle & Pressure Differential",
    "branch": "fluids",
    "tag": "Energy Conservation in Fluids",
    "difficulty": "Intermediate",
    "formulaLatex": "P + \\frac{1}{2} \\rho v^2 + \\rho g z = \\text{const}",
    "summary": "Along any steady streamline in an inviscid, incompressible fluid, the sum of static pressure, dynamic pressure (kinetic energy per unit volume), and hydrostatic potential energy per unit volume is constant.",
    "derivation": "Derived from the Euler momentum equation for inviscid flow: \\frac{\\partial \\mathbf{v}}{\\partial t} + (\\mathbf{v} \\cdot \\nabla)\\mathbf{v} = -\\frac{1}{\\rho}\\nabla P - g \\hat{\\mathbf{k}}. For steady flow (\\frac{\\partial \\mathbf{v}}{\\partial t} = \\mathbf{0}), using vector identity (\\mathbf{v} \\cdot \\nabla)\\mathbf{v} = \\frac{1}{2}\\nabla(v^2) - \\mathbf{v} \\times (\\nabla \\times \\mathbf{v}). Projecting along a streamline with tangent unit vector \\hat{\\mathbf{s}}: [(\\mathbf{v} \\times (\\nabla \\times \\mathbf{v})) \\cdot \\hat{\\mathbf{s}} = 0], the equation becomes: \\frac{1}{2}\\frac{\\partial (v^2)}{\\partial s} = -\\frac{1}{\\rho}\\frac{\\partial P}{\\partial s} - g\\frac{\\partial z}{\\partial s}. Integrating with respect to streamline coordinate s for constant density \\rho: \\int \\left(\\frac{1}{\\rho}\\frac{\\partial P}{\\partial s} + v\\frac{\\partial v}{\\partial s} + g\\frac{\\partial z}{\\partial s}\\right) ds = \\text{const} \\implies \\frac{P}{\\rho} + \\frac{1}{2}v^2 + g z = \\text{const}. Multiplying through by density \\rho yields Bernoulli's celebrated equation: P + \\frac{1}{2}\\rho v^2 + \\rho g z = \\text{constant along a streamline}.",
    "realWorldApplication": "Aircraft airfoil aerodynamic lift generation, pitot tube airspeed indicators in commercial jets, and atomizers.",
    "variables": [
      {
        "symbol": "P",
        "label": "Static Fluid Pressure",
        "unit": "Pa"
      },
      {
        "symbol": "\\frac{1}{2}\\rho v^2",
        "label": "Dynamic Pressure",
        "unit": "Pa"
      },
      {
        "symbol": "\\rho g z",
        "label": "Hydrostatic Potential Pressure",
        "unit": "Pa"
      },
      {
        "symbol": "v",
        "label": "Streamline Velocity",
        "unit": "m/s"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "inletPressure": 150000.0,
        "inletVelocity": 4.0,
        "fluidDensity": 1000.0,
        "elevationChange": 2.0
      },
      "description": "Streamline tunnel with vertical manometer tubes visualizing inverse pressure-velocity exchange.",
      "apparatusType": "bernoulli_manometer_tunnel"
    }
  },
  {
    "id": "poiseuilles-laminar-flow",
    "title": "Poiseuille's Law of Laminar Viscous Flow",
    "branch": "fluids",
    "tag": "Viscous Pipe Flow",
    "difficulty": "Intermediate",
    "formulaLatex": "Q = \\frac{\\pi R^4 \\Delta P}{8 \\eta L}, \\quad v(r) = \\frac{\\Delta P}{4 \\eta L} (R^2 - r^2)",
    "summary": "Governs the steady laminar flow of an incompressible Newtonian fluid through a long cylindrical pipe. The volumetric flow rate scales with the fourth power of pipe radius R, making flow exceptionally sensitive to diameter.",
    "derivation": "Consider steady, fully-developed laminar flow in a horizontal circular pipe of radius R and length L under pressure difference \\Delta P = P_1 - P_2. Isolate a concentric fluid cylinder of radius r. The driving pressure force is F_{\\text{pressure}} = \\Delta P (\\pi r^2). The opposing viscous shear force at radius r by Newton's law of viscosity is F_{\\text{viscous}} = \\tau (2\\pi r L) = \\left(-\\eta \\frac{dv}{dr}\\right)(2\\pi r L). In steady equilibrium: \\Delta P \\pi r^2 = -2\\pi r L \\eta \\frac{dv}{dr} \\implies \\frac{dv}{dr} = -\\frac{\\Delta P}{2\\eta L} r. Integrating with respect to r with no-slip boundary condition at the wall v(R) = 0: \\int_0^{v(r)} dv' = -\\frac{\\Delta P}{2\\eta L}\\int_R^r r' dr' \\implies v(r) = \\frac{\\Delta P}{4\\eta L}(R^2 - r^2), proving a parabolic velocity profile. Total volumetric flow rate is integrated across annular rings dA = 2\\pi r dr: Q = \\int_0^R v(r) (2\\pi r) dr = \\frac{2\\pi \\Delta P}{4\\eta L}\\int_0^R (R^2 r - r^3) dr = \\frac{\\pi \\Delta P}{2\\eta L} \\left[\\frac{R^4}{2} - \\frac{R^4}{4}\\right] = \\frac{\\pi R^4 \\Delta P}{8 \\eta L}.",
    "realWorldApplication": "Cardiovascular hemodynamics: Arterial constriction (atherosclerosis halving radius R reduces blood flow rate Q by a factor of 16 for identical blood pressure \\Delta P).",
    "variables": [
      {
        "symbol": "Q",
        "label": "Volumetric Flow Rate",
        "unit": "m³/s"
      },
      {
        "symbol": "R",
        "label": "Pipe Internal Radius",
        "unit": "m"
      },
      {
        "symbol": "\\Delta P",
        "label": "Pressure Drop along Pipe",
        "unit": "Pa"
      },
      {
        "symbol": "\\eta",
        "label": "Dynamic Viscosity",
        "unit": "Pa·s or kg/(m·s)"
      },
      {
        "symbol": "L",
        "label": "Pipe Length",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "pipeRadius": 0.05,
        "pipeLength": 2.0,
        "viscosity": 0.001,
        "pressureDrop": 200.0
      },
      "description": "Cylindrical glass pipe tracking parabolic velocity cross-section and R⁴ flow rate scaling.",
      "apparatusType": "poiseuille_capillary_viscometer"
    }
  },
  {
    "id": "stokes-drag-law",
    "title": "Stokes' Drag Law for Low-Reynolds Spheres",
    "branch": "fluids",
    "tag": "Creeping Flow",
    "difficulty": "Intermediate",
    "formulaLatex": "F_{\\text{drag}} = 6 \\pi \\eta r v",
    "summary": "Describes the retarding frictional viscous drag force experienced by a small spherical object moving through a continuous viscous fluid in the creeping flow regime (Reynolds number Re << 1).",
    "derivation": "Formulated by Sir George Gabriel Stokes in 1851. In the creeping flow limit (\\mathrm{Re} = \\frac{\\rho v r}{\\eta} \\ll 1), inertial advection terms (\\mathbf{v}\\cdot\\nabla)\\mathbf{v} in the Navier-Stokes equations are negligible compared to viscous diffusion terms, reducing to the linear Stokes equation: \\nabla P = \\eta \\nabla^2 \\mathbf{v} with incompressibility \\nabla \\cdot \\mathbf{v} = 0. Introducing the Stokes stream function \\psi(r, \\theta) in spherical coordinates with no-slip boundary conditions at sphere surface (v_r(R) = 0, v_\\theta(R) = 0) and uniform approach flow at infinity (v_z \\to v): \\psi(r, \\theta) = v \\left(\\frac{r^2}{2} - \\frac{3Rr}{4} + \\frac{R^3}{4r}\\right)\\sin^2\\theta. Integrating the normal pressure and tangential shear stress tensors over the sphere surface: F_{\\text{pressure}} = \\int_0^\\pi (P \\cos\\theta)(2\\pi R^2 \\sin\\theta) d\\theta = 2\\pi \\eta R v, and F_{\\text{shear}} = \\int_0^\\pi (\\tau_{r\\theta}\\sin\\theta)(2\\pi R^2 \\sin\\theta) d\\theta = 4\\pi \\eta R v. Summing both components yields Stokes' law: F_{\\text{drag}} = F_{\\text{pressure}} + F_{\\text{shear}} = 6\\pi \\eta R v.",
    "realWorldApplication": "Millikan oil drop experiment determining elementary charge e and sedimentation rates of biological virus particles in centrifuges.",
    "variables": [
      {
        "symbol": "F_{\text{drag}}",
        "label": "Viscous Retarding Force",
        "unit": "N"
      },
      {
        "symbol": "\\eta",
        "label": "Dynamic Fluid Viscosity",
        "unit": "Pa·s"
      },
      {
        "symbol": "r",
        "label": "Sphere Radius",
        "unit": "m"
      },
      {
        "symbol": "v",
        "label": "Terminal Settling Speed",
        "unit": "m/s"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "sphereRadius": 0.02,
        "fluidViscosity": 1.2,
        "settlingSpeed": 0.15
      },
      "description": "Glycerol settling column tracking creeping viscous laminar streamlines past a micro-sphere.",
      "apparatusType": "stokes_viscometer_column"
    }
  },
  {
    "id": "reynolds-number",
    "title": "Reynolds Number & Laminar-Turbulent Transition",
    "branch": "fluids",
    "tag": "Hydrodynamic Regimes",
    "difficulty": "Foundational",
    "formulaLatex": "\\mathrm{Re} = \\frac{\\rho v D}{\\eta} = \\frac{v D}{\\nu} = \\frac{\\text{Inertial Forces}}{\\text{Viscous Forces}}",
    "summary": "A dimensionless similarity parameter in fluid mechanics quantifying the relative ratio of inertial convective forces to viscous shearing forces. It predicts the transition from smooth laminar flow to chaotic turbulent eddies.",
    "derivation": "Non-dimensionalize the incompressible Navier-Stokes momentum equation: \\rho \\left[\\frac{\\partial \\mathbf{v}}{\\partial t} + (\\mathbf{v}\\cdot\\nabla)\\mathbf{v}\\right] = -\\nabla P + \\eta \\nabla^2 \\mathbf{v}. Define characteristic length scale D, velocity scale v_0, time scale t_0 = D/v_0, and pressure scale P_0 = \\rho v_0^2. Introducing dimensionless variables: \\mathbf{x}^* = \\mathbf{x}/D, \\mathbf{v}^* = \\mathbf{v}/v_0, t^* = t v_0/D, P^* = P/(\\rho v_0^2). Substituting into the momentum equation: \\frac{\\rho v_0^2}{D}\\left[\\frac{\\partial \\mathbf{v}^*}{\\partial t^*} + (\\mathbf{v}^*\\cdot\\nabla^*)\\mathbf{v}^*\\right] = -\\frac{\\rho v_0^2}{D}\\nabla^* P^* + \\frac{\\eta v_0}{D^2} {\\nabla^*}^2 \\mathbf{v}^*. Dividing through by \\frac{\\rho v_0^2}{D}: \\frac{\\partial \\mathbf{v}^*}{\\partial t^*} + (\\mathbf{v}^*\\cdot\\nabla^*)\\mathbf{v}^* = -\\nabla^* P^* + \\left(\\frac{\\eta}{\\rho v_0 D}\\right){\\nabla^*}^2 \\mathbf{v}^*. Defining Reynolds number \\mathrm{Re} \\equiv \\frac{\\rho v_0 D}{\\eta} = \\frac{v_0 D}{\\nu}: \\frac{\\partial \\mathbf{v}^*}{\\partial t^*} + (\\mathbf{v}^*\\cdot\\nabla^*)\\mathbf{v}^* = -\\nabla^* P^* + \\frac{1}{\\mathrm{Re}} {\\nabla^*}^2 \\mathbf{v}^*. For pipe flow, \\mathrm{Re} < 2300 is laminar; \\mathrm{Re} > 4000 is fully turbulent.",
    "realWorldApplication": "Wind tunnel aerodynamic scale model testing of commercial airliners and submarine hydrodynamic hull optimization.",
    "variables": [
      {
        "symbol": "\\mathrm{Re}",
        "label": "Reynolds Number",
        "unit": "dimensionless"
      },
      {
        "symbol": "\\rho",
        "label": "Fluid Mass Density",
        "unit": "kg/m³"
      },
      {
        "symbol": "v",
        "label": "Flow Velocity",
        "unit": "m/s"
      },
      {
        "symbol": "D",
        "label": "Characteristic Hydraulic Diameter",
        "unit": "m"
      },
      {
        "symbol": "\\nu = \\eta/\\rho",
        "label": "Kinematic Viscosity",
        "unit": "m²/s"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        6,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "velocity": 1.5,
        "diameter": 0.1,
        "density": 1000.0,
        "viscosity": 0.001
      },
      "description": "Reynolds dye-injection glass tube demonstrating smooth filament transition into turbulent vortex shedding.",
      "apparatusType": "reynolds_transition_tube"
    }
  },
  {
    "id": "terminal-velocity-viscous",
    "title": "Terminal Velocity in Viscous Media",
    "branch": "fluids",
    "tag": "Force Balance",
    "difficulty": "Intermediate",
    "formulaLatex": "v_t = \\frac{2 r^2 g (\\rho_{\\text{obj}} - \\rho_{\\text{fluid}})}{9 \\eta} \\quad (\\text{Stokes}) \\quad \\text{or} \\quad v_t = \\sqrt{\\frac{2mg}{\\rho C_d A}} \\quad (\\text{Newton})",
    "summary": "The steady maximum speed achieved by an object falling through a fluid medium when the downward gravitational force is precisely balanced by the sum of the upward buoyant force and hydrodynamic drag.",
    "derivation": "Consider a sphere of radius r and density \\rho_{\\text{obj}} falling vertically under gravity in a fluid of density \\rho_f and viscosity \\eta. The active forces along the vertical axis are: Downward gravity: F_g = m g = \\frac{4}{3}\\pi r^3 \\rho_{\\text{obj}} g. Upward buoyancy: F_b = \\frac{4}{3}\\pi r^3 \\rho_f g. Upward viscous drag: F_d. Newton's second law: m \\frac{dv}{dt} = F_g - F_b - F_d. At terminal velocity v_t, acceleration vanishes: \\frac{dv}{dt} = 0 \\implies F_d = F_g - F_b = \\frac{4}{3}\\pi r^3 (\\rho_{\\text{obj}} - \\rho_f) g. In the laminar Stokes regime (Re < 1), substituting F_d = 6\\pi \\eta r v_t: 6\\pi \\eta r v_t = \\frac{4}{3}\\pi r^3 (\\rho_{\\text{obj}} - \\rho_f) g \\implies v_t = \\frac{2 r^2 g (\\rho_{\\text{obj}} - \\rho_f)}{9 \\eta}. In the high-Reynolds quadratic drag regime (Re > 1000), substituting F_d = \\frac{1}{2}\\rho_f A C_d v_t^2 yields: v_t = \\sqrt{\\frac{2(m - \\rho_f V)g}{\\rho_f A C_d}} \\approx \\sqrt{\\frac{2mg}{\\rho_f A C_d}}.",
    "realWorldApplication": "Parachute descent velocity design, atmospheric raindrop terminal velocities (~9 m/s), and geological sediment settling.",
    "variables": [
      {
        "symbol": "v_t",
        "label": "Terminal Velocity",
        "unit": "m/s"
      },
      {
        "symbol": "\\rho_{\\text{obj}}, \\rho_{\\text{fluid}}",
        "label": "Object & Fluid Densities",
        "unit": "kg/m³"
      },
      {
        "symbol": "C_d",
        "label": "Drag Coefficient",
        "unit": "dimensionless"
      },
      {
        "symbol": "A",
        "label": "Cross-Sectional Area",
        "unit": "m²"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        10,
        18
      ],
      "timeDilation": 1.0,
      "parameters": {
        "sphereRadius": 0.05,
        "objectDensity": 7800.0,
        "fluidDensity": 1000.0,
        "viscosity": 0.001
      },
      "description": "Multi-fluid drop tank tracking vertical velocity saturation curves to steady terminal velocity.",
      "apparatusType": "terminal_velocity_drop_tube"
    }
  },
  {
    "id": "surface-tension-capillary",
    "title": "Surface Tension & Young-Laplace Capillary Action",
    "branch": "fluids",
    "tag": "Interfacial Phenomena",
    "difficulty": "Intermediate",
    "formulaLatex": "\\Delta P = \\gamma \\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right), \\quad h = \\frac{2\\gamma \\cos \\theta}{\\rho g r}",
    "summary": "Cohesive intermolecular forces create surface tension \\gamma along liquid interfaces. The Young-Laplace equation governs the pressure jump across curved fluid menisci, driving capillary rise in narrow tubes.",
    "derivation": "Molecules at a liquid interface experience unbalanced cohesive attractions toward the bulk liquid, minimizing surface area with interfacial energy dW = \\gamma dA. Across a curved liquid interface with principal radii of curvature R_1 and R_2, mechanical virtual work balance yields the Young-Laplace equation: \\Delta P = P_{\\text{concave}} - P_{\\text{convex}} = \\gamma \\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right). In a vertical circular capillary tube of radius r with contact angle \\theta, the meniscus forms a spherical cap with radius of curvature R = \\frac{r}{\\cos\\theta}. The pressure deficit immediately beneath the curved meniscus compared to the flat bulk surface is \\Delta P = \\frac{2\\gamma}{R} = \\frac{2\\gamma \\cos\\theta}{r}. This negative pressure lifts a liquid column of height h until hydrostatic pressure balances it: \\rho g h = \\Delta P = \\frac{2\\gamma \\cos\\theta}{r} \\implies h = \\frac{2\\gamma \\cos\\theta}{\\rho g r} (Jurin's law).",
    "realWorldApplication": "Xylem sap transport in tall redwood trees, microfluidic lab-on-a-chip diagnostic devices, and lung pulmonary surfactant function.",
    "variables": [
      {
        "symbol": "\\gamma",
        "label": "Surface Tension Coefficient",
        "unit": "N/m or J/m²"
      },
      {
        "symbol": "\\theta",
        "label": "Wetting Contact Angle",
        "unit": "rad"
      },
      {
        "symbol": "r",
        "label": "Capillary Tube Radius",
        "unit": "m"
      },
      {
        "symbol": "h",
        "label": "Equilibrium Capillary Rise",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        5,
        10
      ],
      "timeDilation": 1.0,
      "parameters": {
        "surfaceTension": 0.0728,
        "contactAngle": 15.0,
        "tubeRadius": 0.0008,
        "fluidDensity": 1000.0
      },
      "description": "Array of graduated micro-bore capillary tubes demonstrating inverse radius height scaling h ~ 1/r.",
      "apparatusType": "capillary_action_manifold"
    }
  },
  {
    "id": "venturi-effect-metering",
    "title": "Venturi Effect & Flow Metering",
    "branch": "fluids",
    "tag": "Fluid Metering & Low Pressure",
    "difficulty": "Intermediate",
    "formulaLatex": "v_1 = \\sqrt{\\frac{2(P_1 - P_2)}{\\rho \\left(\\left(\\frac{A_1}{A_2}\\right)^2 - 1\\right)}}, \\quad Q = A_1 v_1",
    "summary": "When a fluid flows through a constricted throat section of a pipe, its velocity increases in accordance with mass continuity, causing its static pressure to drop in accordance with Bernoulli's principle.",
    "derivation": "Apply the continuity equation between wide pipe section 1 (area A_1) and constricted throat section 2 (area A_2): A_1 v_1 = A_2 v_2 \\implies v_2 = \\left(\\frac{A_1}{A_2}\\right) v_1. Applying Bernoulli's equation along the horizontal centerline (z_1 = z_2): P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2 \\implies P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2). Substituting v_2 from continuity: P_1 - P_2 = \\frac{1}{2}\\rho \\left[\\left(\\frac{A_1}{A_2}\\right)^2 v_1^2 - v_1^2\\right] = \\frac{1}{2}\\rho v_1^2 \\left[\\left(\\frac{A_1}{A_2}\\right)^2 - 1\\right]. Solving for upstream velocity v_1: v_1 = \\sqrt{\\frac{2(P_1 - P_2)}{\\rho \\left(\\left(\\frac{A_1}{A_2}\\right)^2 - 1\\right)}}. Total volumetric flow rate is then determined directly from differential pressure measurement: Q = A_1 v_1 = A_1 A_2 \\sqrt{\\frac{2(P_1 - P_2)}{\\rho (A_1^2 - A_2^2)}}.",
    "realWorldApplication": "Venturi flowmeters in municipal water pipelines, engine carburetors drawing fuel into airflows, and aspirator vacuum pumps.",
    "variables": [
      {
        "symbol": "P_1 - P_2",
        "label": "Differential Throat Pressure",
        "unit": "Pa"
      },
      {
        "symbol": "A_1 / A_2",
        "label": "Constriction Area Ratio",
        "unit": "dimensionless"
      },
      {
        "symbol": "Q",
        "label": "Volumetric Flow Rate",
        "unit": "m³/s"
      },
      {
        "symbol": "\\rho",
        "label": "Fluid Density",
        "unit": "kg/m³"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        6,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "inletDiameter": 0.2,
        "throatDiameter": 0.08,
        "flowRate": 0.05,
        "fluidDensity": 1000.0
      },
      "description": "Transparent Venturi tube with differential U-tube manometer measuring throat vacuum draw.",
      "apparatusType": "venturi_meter_conduit"
    }
  },
  {
    "id": "magnus-effect-lift",
    "title": "Magnus Effect & Cylinder/Sphere Spin Lift",
    "branch": "fluids",
    "tag": "Aerodynamic Lift & Circulation",
    "difficulty": "Intermediate",
    "formulaLatex": "\\mathbf{F}_L = \\rho (\\mathbf{v}_\\infty \\times \\boldsymbol{\\Gamma}), \\quad F_L = \\rho v_\\infty \\Gamma = 2\\pi \\rho v_\\infty R^2 \\omega",
    "summary": "A spinning cylinder or sphere translating through a fluid deflects the surrounding airflow via viscous boundary layer adhesion. This creates asymmetric velocity and pressure distributions, generating an aerodynamic lift force perpendicular to motion.",
    "derivation": "By the Kutta-Joukowski theorem of potential flow theory, a body possessing circulation \\Gamma in a freestream velocity v_\\infty experiences an aerodynamic lift force per unit span: L' = \\rho_\\infty v_\\infty \\Gamma. When a cylinder of radius R spins with angular velocity \\omega in a viscous fluid, no-slip boundary conditions entrain fluid molecules, creating bound circulation \\Gamma = \\oint \\mathbf{v}\\cdot d\\mathbf{l} = \\omega R (2\\pi R) = 2\\pi R^2 \\omega. On the side where surface spin coincides with freestream flow, relative velocity increases: v_{\\text{top}} = v_\\infty + v_{\\text{rot}}. On the opposite side where spin opposes flow, relative velocity decreases: v_{\\text{bottom}} = v_\\infty - v_{\\text{rot}}. By Bernoulli's principle, higher velocity creates lower static pressure: P_{\\text{top}} < P_{\\text{bottom}}. Integrating this asymmetric pressure differential around the perimeter yields a net transverse Magnus lift force: \\mathbf{F}_L = \\rho (\\mathbf{v}_\\infty \\times \\boldsymbol{\\Gamma}).",
    "realWorldApplication": "Rotor ships equipped with Flettner spinning cylinders for marine propulsion fuel savings, and baseball curveballs, golf ball backspin lift, and soccer curve shots.",
    "variables": [
      {
        "symbol": "F_L",
        "label": "Magnus Aerodynamic Lift",
        "unit": "N"
      },
      {
        "symbol": "\\Gamma",
        "label": "Bound Vortex Circulation",
        "unit": "m²/s"
      },
      {
        "symbol": "v_\\infty",
        "label": "Freestream Velocity",
        "unit": "m/s"
      },
      {
        "symbol": "\\omega",
        "label": "Rotor Spin Rate",
        "unit": "rad/s"
      },
      {
        "symbol": "R",
        "label": "Cylinder / Sphere Radius",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "windSpeed": 12.0,
        "spinRate": 30.0,
        "cylinderRadius": 0.5,
        "cylinderHeight": 2.0
      },
      "description": "Flettner rotating cylinder in a wind tunnel visualizing asymmetric streamlines and transverse lift vector.",
      "apparatusType": "magnus_flettner_tunnel"
    }
  },
  {
    "id": "navier-stokes-fundamentals",
    "title": "Navier-Stokes Advection-Diffusion Fundamentals",
    "branch": "fluids",
    "tag": "Non-Linear Continuum Mechanics",
    "difficulty": "Advanced",
    "formulaLatex": "\\rho \\left(\\frac{\\partial \\mathbf{v}}{\\partial t} + (\\mathbf{v} \\cdot \\nabla)\\mathbf{v}\\right) = -\\nabla P + \\mu \\nabla^2 \\mathbf{v} + \\mathbf{f}",
    "summary": "The cornerstone non-linear partial differential equations of fluid dynamics, expressing Newton's second law for a continuous viscous Newtonian fluid under the Cauchy stress tensor.",
    "derivation": "Formulated by Claude-Louis Navier (1822) and George Gabriel Stokes (1845). By continuum momentum conservation, material acceleration of a fluid parcel is \\rho \\frac{D\\mathbf{v}}{Dt} = \\nabla \\cdot \\boldsymbol{\\sigma} + \\mathbf{f}, where material derivative is \\frac{D\\mathbf{v}}{Dt} = \\frac{\\partial \\mathbf{v}}{\\partial t} + (\\mathbf{v}\\cdot\\nabla)\\mathbf{v}. For an isotropic Newtonian fluid, the Cauchy stress tensor decomposes into isotropic thermodynamic pressure and viscous deviatoric stress: \\boldsymbol{\\sigma} = -P \\mathbf{I} + \\boldsymbol{\\tau}, with \\tau_{ij} = \\mu \\left(\\frac{\\partial v_i}{\\partial x_j} + \\frac{\\partial v_j}{\\partial x_i}\\right) + \\lambda (\\nabla \\cdot \\mathbf{v})\\delta_{ij}. For incompressible fluids (\\nabla \\cdot \\mathbf{v} = 0), divergence of the stress tensor becomes: \\nabla \\cdot \\boldsymbol{\\sigma} = -\\nabla P + \\mu \\nabla^2 \\mathbf{v}. Substituting into Cauchy's equation yields the incompressible Navier-Stokes momentum equation: \\rho \\left(\\frac{\\partial \\mathbf{v}}{\\partial t} + (\\mathbf{v} \\cdot \\nabla)\\mathbf{v}\\right) = -\\nabla P + \\mu \\nabla^2 \\mathbf{v} + \\mathbf{f}, where (\\mathbf{v}\\cdot\\nabla)\\mathbf{v} governs non-linear inertial advection (leading to turbulence) and \\mu \\nabla^2 \\mathbf{v} governs viscous diffusion.",
    "realWorldApplication": "Computational Fluid Dynamics (CFD) aerodynamic simulations for Formula 1 racing cars, commercial airliners, and climate global circulation models.",
    "variables": [
      {
        "symbol": "\\mathbf{v}",
        "label": "Velocity Vector Field",
        "unit": "m/s"
      },
      {
        "symbol": "P",
        "label": "Thermodynamic Static Pressure",
        "unit": "Pa"
      },
      {
        "symbol": "\\mu",
        "label": "Dynamic Viscosity",
        "unit": "Pa·s"
      },
      {
        "symbol": "\\rho",
        "label": "Fluid Mass Density",
        "unit": "kg/m³"
      },
      {
        "symbol": "\\mathbf{f}",
        "label": "Body Force per Unit Volume",
        "unit": "N/m³"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 0.8,
      "parameters": {
        "viscosity": 0.005,
        "reynoldsTarget": 1200.0,
        "obstacleRadius": 0.8
      },
      "description": "2D SPH particle channel flowing around a cylindrical obstruction exhibiting Von Kármán vortex street shedding.",
      "apparatusType": "navier_stokes_vortex_street"
    }
  },
  {
    "id": "ideal-gas-law",
    "title": "Ideal Gas Law & Equation of State",
    "branch": "thermodynamics",
    "tag": "Equations of State",
    "difficulty": "Foundational",
    "formulaLatex": "P V = N k_B T = n R T",
    "summary": "The fundamental equation of state governing hypothetical dilute gases composed of point-like non-interacting particles undergoing perfectly elastic collisions. It unifies Boyle's, Charles's, and Avogadro's empirical laws.",
    "derivation": "In the kinetic theory of gases, consider N identical point particles of mass m inside a cubic container of side L and volume V = L^3. When a particle collides elastically with a perpendicular wall parallel to the yz-plane, its x-velocity reverses from +v_x to -v_x, delivering momentum impulse \\Delta p_x = 2m v_x. The time between successive impacts on the same wall is \\Delta t = \\frac{2L}{v_x}. By Newton's second law, average force exerted on the wall is F_x = \\frac{\\Delta p_x}{\\Delta t} = \\frac{2m v_x}{2L/v_x} = \\frac{m v_x^2}{L}. Summing over all N particles: F_{\\text{total}} = \\frac{m}{L}\\sum_{i=1}^N v_{ix}^2 = \\frac{N m}{L}\\langle v_x^2 \\rangle. By spatial isotropy, \\langle v_x^2 \\rangle = \\langle v_y^2 \\rangle = \\langle v_z^2 \\rangle = \\frac{1}{3}\\langle v^2 \\rangle. Wall pressure is P = \\frac{F_{\\text{total}}}{L^2} = \\frac{N m \\langle v^2 \\rangle}{3 L^3} = \\frac{2}{3}\\frac{N}{V}\\left(\\frac{1}{2}m\\langle v^2 \\rangle\\right). Connecting average translational kinetic energy to thermodynamic temperature via equipartition: \\frac{1}{2}m\\langle v^2 \\rangle = \\frac{3}{2}k_B T. Substituting gives P V = \\frac{2}{3} N \\left(\\frac{3}{2} k_B T\\right) = N k_B T = n R T, where R = N_A k_B.",
    "realWorldApplication": "Internal combustion engine compression strokes, SCUBA diving gas tank filling, and high-altitude weather balloon expansion.",
    "variables": [
      {
        "symbol": "P",
        "label": "Gas Pressure",
        "unit": "Pa"
      },
      {
        "symbol": "V",
        "label": "Container Volume",
        "unit": "m³"
      },
      {
        "symbol": "T",
        "label": "Absolute Thermodynamic Temperature",
        "unit": "K"
      },
      {
        "symbol": "N",
        "label": "Total Molecule Count",
        "unit": "dimensionless"
      },
      {
        "symbol": "k_B",
        "label": "Boltzmann Constant",
        "unit": "J/K"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "numParticles": 250,
        "temperature": 300.0,
        "chamberVolume": 1.0
      },
      "description": "Enclosed thermal containment cube tracking elastic molecular wall impulses and PV=NkT telemetry.",
      "apparatusType": "ideal_gas_chamber"
    }
  },
  {
    "id": "maxwell-boltzmann-distribution",
    "title": "Maxwell-Boltzmann Molecular Speed Distribution",
    "branch": "thermodynamics",
    "tag": "Statistical Mechanics",
    "difficulty": "Intermediate",
    "formulaLatex": "f(v) = 4\\pi \\left(\\frac{m}{2\\pi k_B T}\\right)^{3/2} v^2 \\exp\\left(-\\frac{m v^2}{2 k_B T}\\right)",
    "summary": "Describes the statistical probability distribution of molecular speeds in a classical gas in thermodynamic equilibrium. The probability density forms an asymmetric Maxwellian curve with a high-velocity exponential tail.",
    "derivation": "In classical statistical mechanics, the probability of a gas molecule occupying a phase-space state with kinetic energy E = \\frac{1}{2} m (v_x^2 + v_y^2 + v_z^2) is given by the canonical Boltzmann factor: P(\\mathbf{v}) \\, d^3\\mathbf{v} = C \\exp\\left(-\\frac{E}{k_B T}\\right) dv_x dv_y dv_z = C \\exp\\left(-\\frac{m(v_x^2 + v_y^2 + v_z^2)}{2 k_B T}\\right) dv_x dv_y dv_z. Normalizing over all 3D velocity space: \\iiint_{-\\infty}^\\infty P(\\mathbf{v}) d^3\\mathbf{v} = 1 \\implies C = \\left(\\frac{m}{2\\pi k_B T}\\right)^{3/2}. To find the scalar speed distribution f(v) where v = |\\mathbf{v}|, transform velocity Cartesian coordinates into spherical coordinates (v, \\theta, \\phi), where volume element is d^3\\mathbf{v} = v^2 \\sin\\theta \\, dv \\, d\\theta \\, d\\phi. Integrating over all solid angles d\\Omega = \\sin\\theta d\\theta d\\phi (giving 4\\pi): f(v) dv = 4\\pi v^2 C \\exp\\left(-\\frac{m v^2}{2 k_B T}\\right) dv = 4\\pi \\left(\\frac{m}{2\\pi k_B T}\\right)^{3/2} v^2 \\exp\\left(-\\frac{m v^2}{2 k_B T}\\right) dv. Key characteristic speeds: Most probable speed: v_p = \\sqrt{\\frac{2 k_B T}{m}}, Mean speed: \\langle v \\rangle = \\sqrt{\\frac{8 k_B T}{\\pi m}}, Root-mean-square speed: v_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m}}.",
    "realWorldApplication": "Uranium isotope enrichment via gaseous diffusion (separating ²³⁵UF₆ from ²³⁸UF₆ based on molecular velocity differentials) and planetary atmospheric retention.",
    "variables": [
      {
        "symbol": "f(v)",
        "label": "Speed Probability Density",
        "unit": "s/m"
      },
      {
        "symbol": "v",
        "label": "Molecular Speed",
        "unit": "m/s"
      },
      {
        "symbol": "m",
        "label": "Molecular Mass",
        "unit": "kg"
      },
      {
        "symbol": "T",
        "label": "Equilibrium Temperature",
        "unit": "K"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "temperature": 450.0,
        "particleMass": 4.65e-26,
        "numParticles": 500
      },
      "description": "Real-time molecular velocity histogram binning particles into the theoretical Maxwell-Boltzmann curve.",
      "apparatusType": "maxwell_boltzmann_spectrometer"
    }
  },
  {
    "id": "brownian-motion-diffusion",
    "title": "Brownian Motion & Einstein Diffusion Relation",
    "branch": "thermodynamics",
    "tag": "Stochastic Processes",
    "difficulty": "Intermediate",
    "formulaLatex": "\\langle x^2(t) \\rangle = 2 D t, \\quad D = \\frac{k_B T}{6\\pi \\eta r} = \\frac{R T}{6\\pi \\eta r N_A}",
    "summary": "The random, erratic wandering of microscopic particles suspended in a fluid, caused by continuous bombardment by surrounding solvent molecules. Albert Einstein's 1905 paper linked this diffusion to atomic reality.",
    "derivation": "Formulated by Albert Einstein and Paul Langevin (1905-1908). A microscopic colloidal particle of radius r and mass m undergoes random thermal impacts in a fluid of viscosity \\eta. The 1D Langevin equation is: m \\frac{dv}{dt} = -6\\pi \\eta r v + \\xi(t), where \\xi(t) is a stochastic zero-mean Gaussian white-noise force representing molecular collisions: \\langle \\xi(t) \\rangle = 0, \\langle \\xi(t)\\xi(t') \\rangle = 2\\gamma k_B T \\delta(t - t') with damping coefficient \\gamma = 6\\pi \\eta r. In the overdamped regime (inertia m \\frac{dv}{dt} \\approx 0), friction balances the fluctuating force: 6\\pi \\eta r \\frac{dx}{dt} = \\xi(t). Multiplying by x and taking the statistical ensemble average with equipartition theorem \\langle m v^2 \\rangle = k_B T: \\frac{d}{dt}\\langle x^2 \\rangle = 2 D, where diffusion coefficient is D = \\frac{k_B T}{6\\pi \\eta r}. Integrating over elapsed time t yields the linear mean-square displacement: \\langle x^2(t) \\rangle = 2 D t (in 1D) and \\langle r^2(t) \\rangle = 6 D t (in 3D). Jean Perrin's experimental confirmation in 1908 provided the definitive experimental proof of the physical existence of atoms.",
    "realWorldApplication": "Dynamic Light Scattering (DLS) nanoparticle size analyzers and intracellular molecular motor cargo diffusion.",
    "variables": [
      {
        "symbol": "\\langle x^2(t) \\rangle",
        "label": "Mean-Square Displacement",
        "unit": "m²"
      },
      {
        "symbol": "D",
        "label": "Stokes-Einstein Diffusion Coefficient",
        "unit": "m²/s"
      },
      {
        "symbol": "\\eta",
        "label": "Solvent Dynamic Viscosity",
        "unit": "Pa·s"
      },
      {
        "symbol": "r",
        "label": "Colloidal Particle Radius",
        "unit": "m"
      },
      {
        "symbol": "T",
        "label": "Fluid Absolute Temperature",
        "unit": "K"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "particleRadius": 1e-06,
        "fluidViscosity": 0.001,
        "temperature": 298.0
      },
      "description": "Microscopic visualizer tracking Brownian random-walk displacement paths of fluorescent beads.",
      "apparatusType": "brownian_particle_tracker"
    }
  },
  {
    "id": "kinetic-temperature-mean-free-path",
    "title": "Kinetic Interpretation of Temperature & Mean Free Path",
    "branch": "thermodynamics",
    "tag": "Kinetic Theory",
    "difficulty": "Intermediate",
    "formulaLatex": "\\langle K \\rangle = \\frac{3}{2} k_B T, \\quad \\lambda_{\\text{mfp}} = \\frac{1}{\\sqrt{2} \\pi d^2 n} = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}",
    "summary": "Establishes that macroscopic absolute temperature is a direct measure of the average translational kinetic energy of constituent molecules. Mean free path represents the average distance a molecule travels between collisions.",
    "derivation": "From the kinetic derivation of the ideal gas law: P = \\frac{2}{3} n \\langle K_{\\text{trans}} \\rangle, where n = N/V is number density. Comparing with P = n k_B T directly establishes the microscopic definition of thermodynamic temperature: \\langle K_{\\text{trans}} \\rangle = \\frac{1}{2} m \\langle v^2 \\rangle = \\frac{3}{2} k_B T. To determine the mean free path \\lambda, consider a spherical molecule of effective collision diameter d moving at average speed v through stationary target molecules. The effective collision cross-section is a cylinder of radius d and cross-sectional area \\sigma = \\pi d^2. In time \\Delta t, the swept volume is V_{\\text{swept}} = \\pi d^2 v \\Delta t. The number of collisions is N_{\\text{coll}} = n V_{\\text{swept}} = n \\pi d^2 v \\Delta t. Collision frequency is \\nu = \\frac{N_{\\text{coll}}}{\\Delta t} = n \\pi d^2 v. Accounting for relative motion among all target molecules by multiplying by the Maxwellian relative speed factor \\sqrt{2}: \\nu_{\\text{rel}} = \\sqrt{2} \\pi d^2 n v. The mean free path is the distance traveled divided by collision count: \\lambda_{\\text{mfp}} = \\frac{v}{\\nu_{\\text{rel}}} = \\frac{1}{\\sqrt{2} \\pi d^2 n}. Substituting n = \\frac{P}{k_B T} yields: \\lambda_{\\text{mfp}} = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}.",
    "realWorldApplication": "Ultra-High Vacuum (UHV) systems in semiconductor fabrication where mean free path exceeds chamber dimensions (\\lambda > 10 m), enabling ballistic molecular beam epitaxy.",
    "variables": [
      {
        "symbol": "\\langle K \\rangle",
        "label": "Mean Translational Kinetic Energy",
        "unit": "J"
      },
      {
        "symbol": "\\lambda_{\\text{mfp}}",
        "label": "Mean Free Path",
        "unit": "m"
      },
      {
        "symbol": "d",
        "label": "Molecular Hard-Sphere Diameter",
        "unit": "m"
      },
      {
        "symbol": "n",
        "label": "Molecular Number Density",
        "unit": "m⁻³"
      },
      {
        "symbol": "P",
        "label": "Gas Pressure",
        "unit": "Pa"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "pressure": 101325.0,
        "temperature": 300.0,
        "molecularDiameter": 3e-10
      },
      "description": "Particle collision chamber tracing trajectory chords between successive hard-sphere impacts.",
      "apparatusType": "mean_free_path_chamber"
    }
  },
  {
    "id": "fouriers-law-conduction",
    "title": "Fourier's Law of Heat Conduction",
    "branch": "thermodynamics",
    "tag": "Thermal Transport",
    "difficulty": "Foundational",
    "formulaLatex": "\\mathbf{q} = -k \\nabla T, \\quad \\frac{\\partial T}{\\partial t} = \\alpha \\nabla^2 T, \\quad \\alpha = \\frac{k}{\\rho c_p}",
    "summary": "The conductive heat flux vector is directly proportional to the negative spatial temperature gradient. Heat flows spontaneously from regions of high temperature to low temperature, leading to the heat diffusion equation.",
    "derivation": "Formulated by Joseph Fourier in 1822. Empirical observation demonstrates that the conductive heat transfer rate dQ/dt across a planar slab of area A and thickness \\Delta x under temperature difference \\Delta T = T_{\\text{hot}} - T_{\\text{cold}} is: \\frac{dQ}{dt} = k A \\frac{\\Delta T}{\\Delta x}, where k is thermal conductivity. In differential continuum form, local heat flux density is \\mathbf{q} \\equiv \\frac{1}{A}\\frac{dQ}{dt}\\hat{\\mathbf{n}} = -k \\nabla T. The negative sign guarantees positive energy flow down the thermal gradient. Applying local conservation of energy to an infinitesimal volume dV: \\rho c_p \\frac{\\partial T}{\\partial t} dV = -\\oint_{\\partial V} \\mathbf{q} \\cdot d\\mathbf{A} + q_{\\text{gen}} dV. Applying the Divergence Theorem: \\rho c_p \\frac{\\partial T}{\\partial t} = -\\nabla \\cdot \\mathbf{q} + q_{\\text{gen}} = -\\nabla \\cdot (-k \\nabla T) + q_{\\text{gen}}. For uniform thermal conductivity k with no internal sources: \\frac{\\partial T}{\\partial t} = \\frac{k}{\\rho c_p} \\nabla^2 T = \\alpha \\nabla^2 T, where \\alpha \\equiv \\frac{k}{\\rho c_p} is the thermal diffusivity.",
    "realWorldApplication": "Aerospace atmospheric re-entry heat shield tiles (space shuttle silica fibrous tiles) and computer CPU heat sink copper vapor chambers.",
    "variables": [
      {
        "symbol": "\\mathbf{q}",
        "label": "Heat Flux Vector",
        "unit": "W/m²"
      },
      {
        "symbol": "k",
        "label": "Thermal Conductivity",
        "unit": "W/(m·K)"
      },
      {
        "symbol": "\\nabla T",
        "label": "Temperature Gradient",
        "unit": "K/m"
      },
      {
        "symbol": "\\alpha",
        "label": "Thermal Diffusivity",
        "unit": "m²/s"
      },
      {
        "symbol": "c_p",
        "label": "Specific Heat Capacity",
        "unit": "J/(kg·K)"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "thermalConductivity": 400.0,
        "hotTemp": 373.15,
        "coldTemp": 273.15,
        "barLength": 1.5
      },
      "description": "Insulated copper thermal conductor bar displaying steady-state linear temperature gradient profile.",
      "apparatusType": "fourier_thermal_bar"
    }
  },
  {
    "id": "adiabatic-processes",
    "title": "Adiabatic Compression & Expansion",
    "branch": "thermodynamics",
    "tag": "Thermodynamic Paths",
    "difficulty": "Intermediate",
    "formulaLatex": "P V^\\gamma = \\text{const}, \\quad T V^{\\gamma - 1} = \\text{const}, \\quad \\gamma = \\frac{C_p}{C_v}",
    "summary": "A thermodynamic transformation occurring with zero net heat exchange with the environment (Q = 0). Rapid gas compression raises internal temperature dramatically because all compressive boundary work converts into internal energy.",
    "derivation": "For an adiabatic process, heat exchange is zero: \\delta Q = 0. By the First Law of Thermodynamics: dU = \\delta Q - \\delta W = -P dV. For an ideal gas, internal energy depends solely on temperature: dU = n C_v dT. Equating both expressions: n C_v dT = -P dV. From the ideal gas law: P = \\frac{n R T}{V}. Substituting P: n C_v dT = -\\frac{n R T}{V} dV \\implies \\frac{dT}{T} = -\\frac{R}{C_v}\\frac{dV}{V}. Using Mayer's relation R = C_p - C_v and defining the adiabatic heat capacity ratio \\gamma \\equiv \\frac{C_p}{C_v}: \\frac{R}{C_v} = \\frac{C_p - C_v}{C_v} = \\gamma - 1. Thus: \\frac{dT}{T} = -(\\gamma - 1)\\frac{dV}{V}. Integrating both sides: \\ln T = -(\\gamma - 1)\\ln V + \\text{const} \\implies \\ln(T V^{\\gamma - 1}) = \\text{const} \\implies T V^{\\gamma - 1} = \\text{constant}. Substituting T = \\frac{P V}{n R}: \\left(\\frac{P V}{n R}\\right) V^{\\gamma - 1} = \\text{const} \\implies P V^\\gamma = \\text{constant}.",
    "realWorldApplication": "Diesel engine compression ignition (where rapid 20:1 adiabatic piston compression heats air to >700 °C, spontaneously igniting injected fuel without spark plugs).",
    "variables": [
      {
        "symbol": "\\gamma",
        "label": "Adiabatic Index (Cp/Cv)",
        "unit": "dimensionless"
      },
      {
        "symbol": "P",
        "label": "Instantaneous Pressure",
        "unit": "Pa"
      },
      {
        "symbol": "V",
        "label": "Chamber Volume",
        "unit": "m³"
      },
      {
        "symbol": "T",
        "label": "Instantaneous Temperature",
        "unit": "K"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "initialVolume": 2.0,
        "compressionRatio": 12.0,
        "gamma": 1.4
      },
      "description": "Rapid pneumatic fire piston cylinder igniting cotton tinder via instantaneous adiabatic compression.",
      "apparatusType": "adiabatic_fire_piston"
    }
  },
  {
    "id": "first-law-thermodynamics",
    "title": "First Law of Thermodynamics & Internal Energy",
    "branch": "thermodynamics",
    "tag": "Energy Conservation",
    "difficulty": "Foundational",
    "formulaLatex": "\\Delta U = Q - W, \\quad dU = \\delta Q - P \\, dV",
    "summary": "The universal law of conservation of energy applied to thermodynamic systems. The change in internal energy \\Delta U of a closed system equals the net heat added to the system minus the mechanical work done by the system on its surroundings.",
    "derivation": "Established by Rudolf Clausius and James Prescott Joule through mechanical equivalent of heat paddle-wheel experiments. Internal energy U is an exact state function: \\oint dU = 0, depending solely on the thermodynamic coordinates of the state, independent of the path taken. Heat Q and work W are path-dependent inexact differentials (\\delta Q, \\delta W). In differential form: dU = \\delta Q - \\delta W. For reversible quasi-static expansions against boundary pressure P: \\delta W = P dV, leading to the fundamental thermodynamic relation for closed simple systems: dU = \\delta Q - P dV. In a cyclic process returning to its initial state (\\Delta U = 0), net work produced equals net heat absorbed: W_{\\text{net}} = Q_{\\text{net}}, ruling out perpetual motion machines of the first kind (PMM1).",
    "realWorldApplication": "Steam power plant Rankine cycles, refrigeration compression systems, and biological metabolic caloric balance.",
    "variables": [
      {
        "symbol": "\\Delta U",
        "label": "Change in Internal Energy",
        "unit": "J"
      },
      {
        "symbol": "Q",
        "label": "Heat Added to System",
        "unit": "J"
      },
      {
        "symbol": "W",
        "label": "Work Done by System",
        "unit": "J"
      },
      {
        "symbol": "P",
        "label": "System Pressure",
        "unit": "Pa"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "heatInput": 1500.0,
        "externalPressure": 101325.0,
        "pistonArea": 0.1
      },
      "description": "Piston-cylinder apparatus visualizing boundary work P·ΔV and internal energy ΔU balance.",
      "apparatusType": "first_law_piston_cylinder"
    }
  },
  {
    "id": "second-law-entropy",
    "title": "Second Law of Thermodynamics & Entropy Increase",
    "branch": "thermodynamics",
    "tag": "Entropy & Irreversibility",
    "difficulty": "Intermediate",
    "formulaLatex": "\\Delta S_{\\text{universe}} \\ge 0, \\quad dS = \\frac{\\delta Q_{\\text{rev}}}{T}, \\quad S = k_B \\ln \\Omega",
    "summary": "In any spontaneous real physical process, the total entropy of an isolated system (the universe) always increases, establishing the unidirectional thermodynamic arrow of time and the impossibility of 100% efficient heat-to-work conversion.",
    "derivation": "Clausius formulation: It is impossible to construct a cyclic device whose sole effect is the transfer of heat from a cooler body to a hotter body. Kelvin-Planck formulation: It is impossible to construct a cyclic engine whose sole effect is the absorption of heat from a single thermal reservoir and complete conversion into equivalent work. Clausius inequality for any closed cycle: \\oint \\frac{\\delta Q}{T} \\le 0, with equality holding strictly for reversible cycles. Defining the state function entropy S such that for a reversible path dS \\equiv \\frac{\\delta Q_{\\text{rev}}}{T}. For an irreversible real process between states 1 and 2: \\int_1^2 \\frac{\\delta Q}{T} < S_2 - S_1 = \\Delta S. For an isolated system (\\delta Q = 0), this necessitates \\Delta S_{\\text{isolated}} \\ge 0. In Ludwig Boltzmann's statistical mechanics, entropy is linked to the number of microstates \\Omega corresponding to a macroscopic state: S = k_B \\ln \\Omega. Spontaneous evolution drives systems from ordered, low-probability microstate configurations toward maximum thermodynamic probability.",
    "realWorldApplication": "Determining theoretical maximum efficiency limits of chemical fuel cells, refrigerators, heat pumps, and cosmological heat death models.",
    "variables": [
      {
        "symbol": "S",
        "label": "Thermodynamic Entropy",
        "unit": "J/K"
      },
      {
        "symbol": "\\delta Q_{\\text{rev}}",
        "label": "Reversible Heat Transfer",
        "unit": "J"
      },
      {
        "symbol": "T",
        "label": "Absolute Temperature",
        "unit": "K"
      },
      {
        "symbol": "\\Omega",
        "label": "Microstate Multiplicity",
        "unit": "dimensionless"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "hotReservoirTemp": 500.0,
        "coldReservoirTemp": 300.0,
        "heatTransfer": 1000.0
      },
      "description": "Partitioned dual-chamber thermal diffusion system tracking spontaneous entropy generation \\Delta S > 0.",
      "apparatusType": "entropy_diffusion_chamber"
    }
  },
  {
    "id": "carnot-cycle-efficiency",
    "title": "Carnot Engine Cycle & Maximum Thermal Efficiency",
    "branch": "thermodynamics",
    "tag": "Thermodynamic Cycles",
    "difficulty": "Intermediate",
    "formulaLatex": "\\eta_{\\text{carnot}} = 1 - \\frac{T_C}{T_H} = \\frac{W_{\\text{net}}}{Q_H}",
    "summary": "Nicolas Léonard Sadi Carnot's 1824 theorem establishes that no heat engine operating between two thermal reservoirs can be more efficient than a reversible Carnot engine operating between the same two temperatures.",
    "derivation": "The idealized Carnot cycle consists of four reversible stages: (1) Reversible isothermal expansion at T_H: Absorbs heat Q_H from hot reservoir while expanding from V_1 to V_2: Q_H = n R T_H \\ln(V_2/V_1). (2) Reversible adiabatic expansion from T_H to T_C: Work done by gas with Q = 0, expanding from V_2 to V_3: T_H V_2^{\\gamma-1} = T_C V_3^{\\gamma-1}. (3) Reversible isothermal compression at T_C: Rejects heat Q_C to cold sink while compressing from V_3 to V_4: |Q_C| = n R T_C \\ln(V_3/V_4). (4) Reversible adiabatic compression from T_C back to T_H: Compressing from V_4 to V_1: T_C V_4^{\\gamma-1} = T_H V_1^{\\gamma-1}. Dividing the two adiabatic relations: \\frac{V_2^{\\gamma-1}}{V_1^{\\gamma-1}} = \\frac{V_3^{\\gamma-1}}{V_4^{\\gamma-1}} \\implies \\frac{V_2}{V_1} = \\frac{V_3}{V_4}. Thus, the logarithmic expansion ratios are identical: \\ln(V_2/V_1) = \\ln(V_3/V_4). The ratio of heats is therefore: \\frac{|Q_C|}{Q_H} = \\frac{n R T_C \\ln(V_3/V_4)}{n R T_H \\ln(V_2/V_1)} = \\frac{T_C}{T_H}. Thermal efficiency is defined as net work output divided by heat input: \\eta \\equiv \\frac{W_{\\text{net}}}{Q_H} = \\frac{Q_H - |Q_C|}{Q_H} = 1 - \\frac{|Q_C|}{Q_H} = 1 - \\frac{T_C}{T_H}.",
    "realWorldApplication": "Setting the fundamental upper efficiency benchmark for nuclear power plants, combined-cycle gas turbines, and geothermal generators.",
    "variables": [
      {
        "symbol": "\\eta_{\\text{carnot}}",
        "label": "Carnot Thermal Efficiency",
        "unit": "dimensionless (0 to 1)"
      },
      {
        "symbol": "T_H",
        "label": "Hot Reservoir Temperature",
        "unit": "K"
      },
      {
        "symbol": "T_C",
        "label": "Cold Reservoir Temperature",
        "unit": "K"
      },
      {
        "symbol": "W_{\text{net}}",
        "label": "Net Mechanical Work Output",
        "unit": "J"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "tempHot": 600.0,
        "tempCold": 300.0,
        "compressionRatio": 3.0
      },
      "description": "Interactive P-V indicator diagram tracing closed 4-stage Carnot cycle area and live efficiency.",
      "apparatusType": "carnot_indicator_engine"
    }
  },
  {
    "id": "thermal-expansion-strain",
    "title": "Thermal Expansion & Thermal Stress Strain",
    "branch": "thermodynamics",
    "tag": "Solid Mechanics & Thermomechanics",
    "difficulty": "Foundational",
    "formulaLatex": "\\frac{\\Delta L}{L_0} = \\alpha_L \\Delta T, \\quad \\sigma_{\\text{thermal}} = -E \\alpha_L \\Delta T",
    "summary": "As temperature increases, thermal kinetic agitation widens the average separation of atoms in asymmetric interatomic potential wells, causing macroscopic dimensional expansion. If constrained, severe thermal stress develops.",
    "derivation": "In a crystal lattice, the interatomic potential energy U(r) as a function of atomic separation r is asymmetric (anharmonic Lennard-Jones or Morse potential): U(r) = U_0 + \\frac{1}{2} k (r - r_0)^2 - g (r - r_0)^3. Calculating the thermal average displacement \\langle r - r_0 \\rangle using the Boltzmann distribution factor \\exp(-U/k_B T): \\langle r - r_0 \\rangle \\propto \\frac{3g}{k^2} k_B T. Because the cubic anharmonicity factor g > 0, the mean atomic separation increases linearly with temperature T. On a macroscopic scale, fractional elongation is directly proportional to temperature change: \\frac{\\Delta L}{L_0} = \\alpha_L \\Delta T, where \\alpha_L is the linear coefficient of thermal expansion. For volumetric expansion in isotropic solids: \\beta \\approx 3\\alpha_L. If a solid bar is rigidly constrained between immovable abutments (\\Delta L_{\\text{total}} = 0), thermal expansion strain \\epsilon_{\\text{th}} = \\alpha_L \\Delta T is countered by compressive elastic strain \\epsilon_{\\text{mech}} = \\frac{\\sigma}{E}. By superposition: \\epsilon_{\\text{total}} = \\alpha_L \\Delta T + \\frac{\\sigma}{E} = 0 \\implies \\sigma_{\\text{thermal}} = -E \\alpha_L \\Delta T, where E is Young's modulus.",
    "realWorldApplication": "Railway track expansion gaps (preventing summer sun kinks and buckling), bridge finger expansion joints, and bimetallic strip thermostats.",
    "variables": [
      {
        "symbol": "\\alpha_L",
        "label": "Linear Thermal Expansion Coefficient",
        "unit": "K⁻¹"
      },
      {
        "symbol": "\\Delta L / L_0",
        "label": "Fractional Thermal Strain",
        "unit": "dimensionless"
      },
      {
        "symbol": "\\sigma_{\\text{thermal}}",
        "label": "Internal Thermal Stress",
        "unit": "Pa"
      },
      {
        "symbol": "E",
        "label": "Young's Elastic Modulus",
        "unit": "Pa"
      },
      {
        "symbol": "\\Delta T",
        "label": "Temperature Change",
        "unit": "K"
      }
    ],
    "presetConfig": {
      "domain": "fluids",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "initialLength": 2.0,
        "tempRise": 120.0,
        "alphaCoeff": 1.7e-05,
        "youngsModulus": 110000000000.0
      },
      "description": "Bimetallic composite strip warping under heat and constrained bridge expansion joint.",
      "apparatusType": "bimetallic_expansion_bench"
    }
  },
  {
    "id": "wave-superposition-interference",
    "title": "Principle of Wave Superposition & Wave Interference",
    "branch": "modern",
    "tag": "Wave Optics & Interference",
    "difficulty": "Foundational",
    "formulaLatex": "\\psi_{\\text{total}}(\\mathbf{r}, t) = \\psi_1(\\mathbf{r}, t) + \\psi_2(\\mathbf{r}, t), \\quad I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos(\\Delta \\phi)",
    "summary": "When two or more propagating waves traverse the same spatial region, the resultant disturbance at any point equals the algebraic sum of the individual wave displacements. Coherent phase differences generate constructive and destructive interference fringes.",
    "derivation": "Because the classical wave equation \\nabla^2 \\psi - \\frac{1}{v^2}\\frac{\\partial^2 \\psi}{\\partial t^2} = 0 is a linear second-order partial differential equation, any linear combination of solutions is itself an exact solution: \\psi_{\\text{total}} = \\psi_1 + \\psi_2. Consider two monochromatic waves of equal angular frequency \\omega and wavevector k having spatial amplitudes A_1, A_2 and phase difference \\Delta \\phi: \\psi_1 = A_1 \\cos(k x - \\omega t) and \\psi_2 = A_2 \\cos(k x - \\omega t + \\Delta \\phi). Summing the waves: \\psi_{\\text{total}} = A_1 \\cos(\\theta) + A_2 \\cos(\\theta + \\Delta \\phi) = [A_1 + A_2 \\cos(\\Delta \\phi)]\\cos\\theta - A_2 \\sin(\\Delta \\phi)\\sin\\theta. The time-averaged intensity I \\propto \\langle \\psi_{\\text{total}}^2 \\rangle is the square of the resultant amplitude: I = A_1^2 + A_2^2 + 2 A_1 A_2 \\cos(\\Delta \\phi) = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos(\\Delta \\phi). When \\Delta \\phi = 2m\\pi (m \\in \\mathbb{Z}), interference is constructive with maximum intensity I_{\\text{max}} = (\\sqrt{I_1} + \\sqrt{I_2})^2. When \\Delta \\phi = (2m + 1)\\pi, interference is destructive with minimum intensity I_{\\text{min}} = (\\sqrt{I_1} - \\sqrt{I_2})^2.",
    "realWorldApplication": "LIGO gravitational wave laser interferometers detecting spacetime metric distortions smaller than 1/10,000th of a proton diameter, and anti-reflective lens coatings.",
    "variables": [
      {
        "symbol": "\\psi",
        "label": "Wave Disturbance Field",
        "unit": "arbitrary"
      },
      {
        "symbol": "I",
        "label": "Resultant Wave Intensity",
        "unit": "W/m²"
      },
      {
        "symbol": "\\Delta \\phi",
        "label": "Relative Phase Difference",
        "unit": "rad"
      },
      {
        "symbol": "k",
        "label": "Wavenumber (2π/λ)",
        "unit": "rad/m"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 1.0,
      "parameters": {
        "wavelength": 1.2,
        "sourceSeparation": 3.0,
        "waveSpeed": 2.0
      },
      "description": "Dual coherent point wave emitters generating hyperbolic constructive and nodal destructive interference bands.",
      "apparatusType": "ripple_tank_interference"
    }
  },
  {
    "id": "standing-waves-normal-modes",
    "title": "Standing Waves & Normal Modes",
    "branch": "modern",
    "tag": "Wave Mechanics & Harmonics",
    "difficulty": "Foundational",
    "formulaLatex": "y(x, t) = 2A \\sin(kx)\\cos(\\omega t), \\quad \\lambda_n = \\frac{2L}{n}, \\quad f_n = n \\frac{v}{2L}",
    "summary": "Formed by the continuous superposition of two identical waves traveling in opposite directions along a bounded medium. The resulting pattern features stationary nodes (points of zero displacement) and antinodes (maximum oscillation).",
    "derivation": "Consider two identical harmonic transverse waves propagating in opposite directions along a string under tension: y_1(x, t) = A \\sin(kx - \\omega t) (forward wave) and y_2(x, t) = A \\sin(kx + \\omega t) (reflected wave). Applying the trigonometric sum-to-product identity \\sin\\alpha + \\sin\\beta = 2\\sin\\frac{\\alpha+\\beta}{2}\\cos\\frac{\\alpha-\\beta}{2}: y(x, t) = y_1 + y_2 = A [\\sin(kx - \\omega t) + \\sin(kx + \\omega t)] = 2A \\sin(kx) \\cos(\\omega t). Unlike traveling waves, this waveform does not propagate spatial phase: every point oscillates in place with local amplitude 2A|\\sin(kx)|. Fixed boundary conditions at ends x = 0 and x = L require y(0, t) = y(L, t) = 0 for all t. The condition y(L, t) = 0 requires \\sin(k L) = 0 \\implies k_n L = n\\pi \\implies \\frac{2\\pi}{\\lambda_n} L = n\\pi \\implies \\lambda_n = \\frac{2L}{n} (n = 1, 2, 3, \\dots). The corresponding quantized harmonic eigenfrequencies are: f_n = \\frac{v}{\\lambda_n} = n \\frac{v}{2L} = \\frac{n}{2L}\\sqrt{\\frac{T_{\\text{tension}}}{\\mu}}.",
    "realWorldApplication": "Acoustic resonance in musical instruments (violins, guitars, organ pipes), microwave oven cavity standing wave hotspots, and quantum quantum well energy levels.",
    "variables": [
      {
        "symbol": "y(x, t)",
        "label": "Transverse String Displacement",
        "unit": "m"
      },
      {
        "symbol": "\\lambda_n",
        "label": "Harmonic Wavelength",
        "unit": "m"
      },
      {
        "symbol": "f_n",
        "label": "Normal Mode Harmonic Frequency",
        "unit": "Hz"
      },
      {
        "symbol": "n",
        "label": "Harmonic Integer Mode Index",
        "unit": "dimensionless"
      },
      {
        "symbol": "L",
        "label": "Boundary Domain Length",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        6,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "harmonicMode": 3,
        "stringLength": 6.0,
        "waveSpeed": 4.0
      },
      "description": "Tensioned string vibrating in stationary harmonic normal modes with clear nodes and antinodes.",
      "apparatusType": "melde_standing_wave_string"
    }
  },
  {
    "id": "doppler-effect-3d",
    "title": "3D Doppler Effect for Moving Sources",
    "branch": "modern",
    "tag": "Wave Kinematics",
    "difficulty": "Intermediate",
    "formulaLatex": "f_o = f_s \\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right), \\quad f_o = f_s \\frac{\\sqrt{1 - \\beta^2}}{1 - \\beta \\cos \\theta} \\quad (\\text{Relativistic})",
    "summary": "The apparent shift in observed wave frequency caused by relative motion between the wave emitter and observer. Moving sources compress wave crests forward (blueshift) and stretch them rearward (redshift).",
    "derivation": "Consider a stationary medium where waves propagate at speed v. Let a source emit pulses with period T_s = 1/f_s while moving with velocity \\mathbf{v}_s toward a stationary observer. Over one period T_s, the source moves a distance d = v_s T_s. The emitted wavefront has expanded to radius v T_s. The spatial distance between consecutive crests in the forward direction is compressed: \\lambda' = v T_s - v_s T_s = (v - v_s) T_s = \\frac{v - v_s}{f_s}. The frequency detected by the observer is f_o = \\frac{v}{\\lambda'} = f_s \\left(\\frac{v}{v - v_s}\\right). If the observer also moves with speed v_o toward the source: f_o = f_s \\left(\\frac{v + v_o}{v - v_s}\\right). In relativistic electrodynamics with electromagnetic waves in vacuum (v = c, \\beta = v/c), time dilation slows the source clock: T_o = \\gamma T_s (1 - \\beta \\cos\\theta). Inverting yields the relativistic Doppler formula: f_o = f_s \\frac{\\sqrt{1 - \\beta^2}}{1 - \\beta \\cos\\theta}, demonstrating a transverse Doppler shift even at \\theta = 90^\\circ.",
    "realWorldApplication": "Doppler weather radar tracking tornado mesocyclones, police speed radar guns, and astronomical cosmological redshift proving the expansion of the universe (Hubble's law).",
    "variables": [
      {
        "symbol": "f_o",
        "label": "Observed Frequency",
        "unit": "Hz"
      },
      {
        "symbol": "f_s",
        "label": "Source Emitted Frequency",
        "unit": "Hz"
      },
      {
        "symbol": "v",
        "label": "Medium Phase Velocity",
        "unit": "m/s"
      },
      {
        "symbol": "v_s, v_o",
        "label": "Source & Observer Velocities",
        "unit": "m/s"
      },
      {
        "symbol": "\\beta",
        "label": "Relativistic Velocity Ratio (v/c)",
        "unit": "dimensionless"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        10,
        18
      ],
      "timeDilation": 1.0,
      "parameters": {
        "sourceSpeed": 0.7,
        "waveSpeed": 1.0,
        "frequency": 2.0
      },
      "description": "Supersonic and subsonic wave source emitting expanding Doppler wavefront circles with Mach cone.",
      "apparatusType": "doppler_wavefront_emitter"
    }
  },
  {
    "id": "snells-law-refraction",
    "title": "Snell's Law of Refraction & Fermat's Principle",
    "branch": "modern",
    "tag": "Geometrical Optics",
    "difficulty": "Foundational",
    "formulaLatex": "n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2, \\quad \\delta \\int_A^B n(\\mathbf{r}) \\, ds = 0",
    "summary": "Describes the angular bending of light rays crossing the planar interface between two transparent optical media with refractive indices n_1 and n_2. It derives rigorously from Fermat's Principle of Least Time.",
    "derivation": "Fermat's Principle states that the optical path taken by light between two fixed points A(0, y_A) in medium 1 and B(d, -y_B) in medium 2 minimizes elapsed travel time t. Let the ray cross the boundary interface (y = 0) at horizontal coordinate x. Phase velocities are v_1 = c/n_1 and v_2 = c/n_2. Total transit time is: t(x) = \\frac{\\sqrt{x^2 + y_A^2}}{v_1} + \\frac{\\sqrt{(d - x)^2 + y_B^2}}{v_2} = \\frac{n_1}{c}\\sqrt{x^2 + y_A^2} + \\frac{n_2}{c}\\sqrt{(d - x)^2 + y_B^2}. By Fermat's principle, the physical trajectory satisfies \\frac{dt}{dx} = 0: \\frac{dt}{dx} = \\frac{n_1}{c}\\frac{x}{\\sqrt{x^2 + y_A^2}} - \\frac{n_2}{c}\\frac{d - x}{\\sqrt{(d - x)^2 + y_B^2}} = 0. Recognizing geometric trigonometry where \\sin\\theta_1 = \\frac{x}{\\sqrt{x^2 + y_A^2}} and \\sin\\theta_2 = \\frac{d - x}{\\sqrt{(d - x)^2 + y_B^2}}, this gives: \\frac{n_1}{c}\\sin\\theta_1 - \\frac{n_2}{c}\\sin\\theta_2 = 0 \\implies n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2.",
    "realWorldApplication": "Prescription eyeglasses, high-performance camera lens achromatic doublets, and fiber optic core cladding index profile engineering.",
    "variables": [
      {
        "symbol": "n_1, n_2",
        "label": "Optical Refractive Indices",
        "unit": "dimensionless"
      },
      {
        "symbol": "\\theta_1",
        "label": "Angle of Incidence",
        "unit": "rad"
      },
      {
        "symbol": "\\theta_2",
        "label": "Angle of Refraction",
        "unit": "rad"
      },
      {
        "symbol": "c",
        "label": "Vacuum Speed of Light",
        "unit": "m/s"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "index1": 1.0,
        "index2": 1.52,
        "incidentAngle": 45.0
      },
      "description": "Optical boundary tank refracting collimated laser beam across air-glass interface.",
      "apparatusType": "snell_refraction_tank"
    }
  },
  {
    "id": "total-internal-reflection",
    "title": "Total Internal Reflection & Critical Angle",
    "branch": "modern",
    "tag": "Waveguide Optics",
    "difficulty": "Foundational",
    "formulaLatex": "\\theta_c = \\arcsin\\left(\\frac{n_2}{n_1}\\right) \\quad (n_1 > n_2), \\quad R = 1.0 \\; (\\theta \\ge \\theta_c)",
    "summary": "When light propagating in an optically dense medium strikes an interface with a rarer medium at an angle exceeding the critical angle \theta_c, 100% of the electromagnetic energy is reflected back with zero transmitted power, generating an evanescent boundary wave.",
    "derivation": "From Snell's law: n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\implies \\sin\\theta_2 = \\frac{n_1}{n_2}\\sin\\theta_1. When light travels from a higher index medium to a lower index medium (n_1 > n_2), the refracted angle \\theta_2 is larger than the incident angle \\theta_1. As \\theta_1 increases, \\theta_2 reaches its maximum physical limit of 90^\\circ (\\sin\\theta_2 = 1). The incident angle producing this grazing emergence is the critical angle \\theta_c: \\frac{n_1}{n_2}\\sin\\theta_c = 1 \\implies \\theta_c = \\arcsin\\left(\\frac{n_2}{n_1}\\right). For any incident angle \\theta_1 > \\theta_c, \\sin\\theta_2 > 1, meaning no real transmitted propagating ray can exist. Applying electromagnetic boundary conditions from Fresnel's equations: the reflection coefficient magnitude is identically unity (|r_\\perp| = |r_\\parallel| = 1), reflecting 100% of radiant energy. An evanescent wave \\mathbf{E} \\sim e^{-\\kappa z} decays exponentially into medium 2 without carrying time-averaged Poynting flux.",
    "realWorldApplication": "Telecommunications fiber optic cables transmitting global internet bandwidth thousands of kilometers without light leaking through glass cladding.",
    "variables": [
      {
        "symbol": "\\theta_c",
        "label": "Critical Angle of Incidence",
        "unit": "rad"
      },
      {
        "symbol": "n_1",
        "label": "Dense Core Index",
        "unit": "dimensionless"
      },
      {
        "symbol": "n_2",
        "label": "Rare Cladding Index",
        "unit": "dimensionless"
      },
      {
        "symbol": "R",
        "label": "Power Reflection Coefficient",
        "unit": "dimensionless"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "indexCore": 1.48,
        "indexCladding": 1.0,
        "incidentAngle": 50.0
      },
      "description": "Semicircular acrylic prism demonstrating critical angle grazing ray and total internal reflection.",
      "apparatusType": "total_internal_reflection_prism"
    }
  },
  {
    "id": "rutherford-alpha-scattering",
    "title": "Rutherford Alpha Particle Scattering & Nuclear Cross-Section",
    "branch": "modern",
    "tag": "Atomic Physics",
    "difficulty": "Advanced",
    "formulaLatex": "\\frac{d\\sigma}{d\\Omega} = \\left(\\frac{z Z e^2}{4\\pi \\varepsilon_0 \\cdot 4 E}\\right)^2 \\frac{1}{\\sin^4(\\theta/2)}, \\quad b = \\frac{z Z e^2}{4\\pi \\varepsilon_0 \\cdot 2E} \\cot(\\theta/2)",
    "summary": "Ernest Rutherford's 1911 experiment bombarding thin gold foil with alpha particles. Large-angle backward deflections overturned Thomson's plum pudding model, establishing that atomic positive charge and mass are concentrated in a tiny dense nucleus.",
    "derivation": "Consider an alpha particle of charge q_1 = z e (z = 2) and kinetic energy E = \\frac{1}{2}m v_0^2 scattering from a stationary gold nucleus of charge q_2 = Z e (Z = 79) with impact parameter b. Under the repulsive Coulomb central force F = \\frac{z Z e^2}{4\\pi \\varepsilon_0 r^2}, conservation of angular momentum gives L = m v_0 b = m r^2 \\dot{\\phi} = \\text{const}. The change in linear momentum along the symmetry axis of the hyperbolic orbit is: \\Delta p = \\int F \\cos\\phi \\, dt = \\int_{-\\phi_0}^{\\phi_0} \\frac{z Z e^2}{4\\pi \\varepsilon_0 r^2} \\cos\\phi \\left(\\frac{r^2 d\\phi}{v_0 b}\\right) = \\frac{z Z e^2}{4\\pi \\varepsilon_0 v_0 b} \\int_{-\\phi_0}^{\\phi_0} \\cos\\phi \\, d\\phi = \\frac{2 z Z e^2}{4\\pi \\varepsilon_0 v_0 b} \\sin\\phi_0. From orbit geometry, \\phi_0 = \\frac{\\pi - \\theta}{2} \\implies \\sin\\phi_0 = \\cos(\\theta/2). Also, momentum triangle gives \\Delta p = 2 m v_0 \\sin(\\theta/2). Equating: 2 m v_0 \\sin(\\theta/2) = \\frac{2 z Z e^2 \\cos(\\theta/2)}{4\\pi \\varepsilon_0 v_0 b} \\implies b = \\frac{z Z e^2}{4\\pi \\varepsilon_0 \\cdot 2E} \\cot(\\theta/2). The differential scattering cross-section is \\frac{d\\sigma}{d\\Omega} = \\frac{b}{\\sin\\theta}\\left|\\frac{db}{d\\theta}\\right| = \\left(\\frac{z Z e^2}{4\\pi \\varepsilon_0 \\cdot 4 E}\\right)^2 \\frac{1}{\\sin^4(\\theta/2)}.",
    "realWorldApplication": "Rutherford Backscattering Spectrometry (RBS) used in materials science for non-destructive surface thin-film elemental composition depth profiling.",
    "variables": [
      {
        "symbol": "\\frac{d\\sigma}{d\\Omega}",
        "label": "Differential Cross-Section",
        "unit": "m²/sr or barns/sr"
      },
      {
        "symbol": "\\theta",
        "label": "Scattering Angle",
        "unit": "rad"
      },
      {
        "symbol": "b",
        "label": "Impact Parameter",
        "unit": "m"
      },
      {
        "symbol": "E",
        "label": "Alpha Particle Incident Energy",
        "unit": "J or MeV"
      },
      {
        "symbol": "Z",
        "label": "Target Atomic Number",
        "unit": "dimensionless"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 0.8,
      "parameters": {
        "incidentEnergyMeV": 5.5,
        "targetZ": 79,
        "impactParameter": 1.2e-14
      },
      "description": "Alpha particle hyperbolic Coulomb trajectory deflection around a dense central gold nucleus.",
      "apparatusType": "rutherford_scattering_chamber"
    }
  },
  {
    "id": "millikan-oil-drop-quantization",
    "title": "Millikan Oil Drop Electric Charge Quantization",
    "branch": "modern",
    "tag": "Charge Quantization",
    "difficulty": "Intermediate",
    "formulaLatex": "q = \\frac{m g d}{V} = n e, \\quad e \\approx 1.602 \\times 10^{-19}\\text{ C}, \\quad n \\in \\mathbb{Z}",
    "summary": "Robert Millikan's 1909 experiment proving that electric charge is fundamentally quantized in discrete integer multiples of an elementary quantum of charge e, measuring its magnitude with high precision.",
    "derivation": "In Millikan's apparatus, microscopic atomized oil droplets of density \\rho and radius r are introduced between two parallel horizontal capacitor plates separated by distance d with variable voltage V. (1) Free fall under gravity with zero electric field (V = 0): The droplet reaches downward terminal velocity v_1 when drag balances gravity and buoyancy: 6\\pi \\eta r v_1 = m_{\\text{eff}} g = \\frac{4}{3}\\pi r^3 (\\rho - \\rho_{\\text{air}}) g. From v_1, the droplet radius r is precisely determined: r = \\sqrt{\\frac{9\\eta v_1}{2(\\rho - \\rho_{\\text{air}})g}}. (2) Upward drift under applied electric field E = V/d: A voltage V is applied creating upward electrostatic force F_E = q E = q \\frac{V}{d}. The droplet moves upward at steady velocity v_2: q \\frac{V}{d} - m_{\\text{eff}} g = 6\\pi \\eta r v_2. Substituting m_{\\text{eff}} g = 6\\pi \\eta r v_1: q \\frac{V}{d} = 6\\pi \\eta r (v_1 + v_2) \\implies q = \\frac{6\\pi \\eta r d (v_1 + v_2)}{V}. Millikan observed across thousands of drops that measured charge was always an exact integer multiple: q = n e with e \\approx 1.602 \\times 10^{-19} \\text{ C}.",
    "realWorldApplication": "Establishing charge quantization in quantum electrodynamics and defining the SI base unit Ampere via the exact fixed elementary charge.",
    "variables": [
      {
        "symbol": "q",
        "label": "Net Droplet Electric Charge",
        "unit": "C"
      },
      {
        "symbol": "e",
        "label": "Elementary Charge Quantum",
        "unit": "C"
      },
      {
        "symbol": "n",
        "label": "Integer Number of Excess Electrons",
        "unit": "dimensionless"
      },
      {
        "symbol": "V",
        "label": "Suspension Plate Voltage",
        "unit": "V"
      },
      {
        "symbol": "r",
        "label": "Oil Droplet Radius",
        "unit": "m"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "plateVoltage": 350.0,
        "plateSeparation": 0.016,
        "dropletRadius": 1.5e-06
      },
      "description": "Charged oil droplet suspended stationary in balance between downward gravity and upward electrostatic field.",
      "apparatusType": "millikan_oil_drop_chamber"
    }
  },
  {
    "id": "photoelectric-effect-work-function",
    "title": "Photoelectric Effect & Einstein's Work Function",
    "branch": "modern",
    "tag": "Quantum Foundations",
    "difficulty": "Foundational",
    "formulaLatex": "K_{\\text{max}} = h f - \\Phi = e V_{\\text{stop}}, \\quad f_{\\text{threshold}} = \\frac{\\Phi}{h}",
    "summary": "Albert Einstein's 1905 quantum hypothesis: light consists of discrete energy packets (photons) of energy E = hf. Electrons are ejected instantaneously from a metal surface only if photon energy exceeds the material's work function \\Phi.",
    "derivation": "Classical wave theory predicted that electron kinetic energy would increase with light wave intensity and that faint illumination would produce a time delay while electrons slowly absorb wave energy. Heinrich Hertz and Philipp Lenard observed instead that electron kinetic energy depends strictly on light frequency f, and emission is instantaneous. Albert Einstein resolved this by proposing that electromagnetic radiation is quantized into localized photons with energy E = h f, where h \\approx 6.626 \\times 10^{-34} \\text{ J·s} is Planck's constant. When an electron absorbs a single photon, energy \\Phi (the material work function) is expended to liberate the electron across the surface potential barrier. By conservation of energy, the maximum kinetic energy of ejected photoelectrons is: K_{\\text{max}} = h f - \\Phi. In a retarding electric potential, stopping voltage V_{\\text{stop}} required to halt the fastest electrons satisfies e V_{\\text{stop}} = K_{\\text{max}} = h f - \\Phi \\implies V_{\\text{stop}} = \\left(\\frac{h}{e}\\right)f - \\frac{\\Phi}{e}. Below threshold frequency f_0 = \\Phi/h, no electrons can be emitted regardless of light beam intensity.",
    "realWorldApplication": "Solar photovoltaic cells converting sunlight directly to electricity, night-vision photomultiplier tubes, and digital camera CMOS image sensors.",
    "variables": [
      {
        "symbol": "K_{\text{max}}",
        "label": "Maximum Photoelectron Kinetic Energy",
        "unit": "J or eV"
      },
      {
        "symbol": "h",
        "label": "Planck Constant",
        "unit": "J·s"
      },
      {
        "symbol": "f",
        "label": "Incident Light Frequency",
        "unit": "Hz"
      },
      {
        "symbol": "\\Phi",
        "label": "Material Work Function",
        "unit": "eV or J"
      },
      {
        "symbol": "V_{\text{stop}}",
        "label": "Stopping Voltage",
        "unit": "V"
      }
    ],
    "presetConfig": {
      "domain": "electromagnetism",
      "cameraPosition": [
        0,
        6,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "lightWavelengthNm": 250.0,
        "workFunctionEv": 2.3,
        "stoppingVoltage": 2.66
      },
      "description": "Phototube circuit measuring stopping potential Vstop across monochromatic frequency sweeps.",
      "apparatusType": "photoelectric_effect_phototube"
    }
  },
  {
    "id": "de-broglie-matter-wavelength",
    "title": "De Broglie Matter Wavelength & Wave-Particle Duality",
    "branch": "modern",
    "tag": "Quantum Wave-Particle Duality",
    "difficulty": "Foundational",
    "formulaLatex": "\\lambda = \\frac{h}{p} = \\frac{h}{m v} = \\frac{h}{\\sqrt{2m E_k}}",
    "summary": "Louis de Broglie's 1924 hypothesis establishing that all matter exhibits intrinsic wave-like properties. A moving particle of momentum p possesses an associated matter wavelength inversely proportional to its momentum.",
    "derivation": "In special relativity, photons with zero rest mass possess energy E = h f and momentum p = E/c. Since c = f \\lambda, photon momentum is p = \\frac{h f}{c} = \\frac{h}{\\lambda} \\implies \\lambda = \\frac{h}{p}. Louis de Broglie hypothesized that nature possesses deep fundamental symmetry: if electromagnetic waves behave like discrete corpuscular particles (photons), then material particles (electrons, protons) must also exhibit wave characteristics. For a massive particle with non-relativistic velocity v, momentum is p = m v. The associated matter wavelength is: \\lambda = \\frac{h}{p} = \\frac{h}{m v}. For a particle accelerated through an electric potential difference V, kinetic energy is E_k = q V = \\frac{p^2}{2m} \\implies p = \\sqrt{2m q V}. The de Broglie wavelength is therefore: \\lambda = \\frac{h}{\\sqrt{2m q V}}. Experimentally confirmed in 1927 by Clinton Davisson and Lester Germer, and independently by George Paget Thomson, observing electron diffraction rings through nickel and gold crystalline lattices.",
    "realWorldApplication": "Transmission Electron Microscopes (TEM) achieving sub-angstrom spatial resolution (<0.05 nm) by exploiting picometer-wavelength high-energy electron beams.",
    "variables": [
      {
        "symbol": "\\lambda",
        "label": "De Broglie Matter Wavelength",
        "unit": "m"
      },
      {
        "symbol": "h",
        "label": "Planck Constant",
        "unit": "J·s"
      },
      {
        "symbol": "p",
        "label": "Particle Linear Momentum",
        "unit": "kg·m/s"
      },
      {
        "symbol": "m",
        "label": "Particle Rest Mass",
        "unit": "kg"
      },
      {
        "symbol": "v",
        "label": "Particle Velocity",
        "unit": "m/s"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        6,
        12
      ],
      "timeDilation": 1.0,
      "parameters": {
        "acceleratingVoltage": 100.0,
        "electronMass": 9.109e-31,
        "crystalLatticeSpacing": 2.15e-10
      },
      "description": "Davisson-Germer electron gun firing at polycrystalline nickel foil generating circular diffraction rings.",
      "apparatusType": "electron_diffraction_tube"
    }
  },
  {
    "id": "heisenberg-uncertainty-principle",
    "title": "Heisenberg Uncertainty Principle",
    "branch": "modern",
    "tag": "Quantum Measurement & Non-Commutativity",
    "difficulty": "Intermediate",
    "formulaLatex": "\\Delta x \\, \\Delta p_x \\ge \\frac{\\hbar}{2}, \\quad \\Delta E \\, \\Delta t \\ge \\frac{\\hbar}{2}, \\quad \\hbar = \\frac{h}{2\\pi}",
    "summary": "A fundamental mathematical limit in quantum mechanics stating that the position and linear momentum of a particle cannot be simultaneously measured with arbitrary precision. The product of their standard deviations is bounded below by \\hbar/2.",
    "derivation": "Formulated by Werner Heisenberg in 1927. In the Hilbert space formulation of quantum mechanics, physical observables correspond to Hermitian linear operators acting on wavefunctions \\psi(x). Position \\hat{x} and momentum \\hat{p} = -i\\hbar \\frac{d}{dx} satisfy the fundamental canonical commutation relation: [\\hat{x}, \\hat{p}] \\equiv \\hat{x}\\hat{p} - \\hat{p}\\hat{x} = i\\hbar \\hat{I}. By the Robertson-Schrödinger uncertainty theorem, for any two Hermitian operators \\hat{A} and \\hat{B}: (\\Delta A)^2 (\\Delta B)^2 \\ge \\left|\\frac{1}{2i}\\langle [\\hat{A}, \\hat{B}] \\rangle\\right|^2. Substituting \\hat{A} = \\hat{x} and \\hat{B} = \\hat{p}: (\\Delta x)^2 (\\Delta p)^2 \\ge \\left|\\frac{1}{2i}(i\\hbar)\\right|^2 = \\frac{\\hbar^2}{4}. Taking the square root yields: \\Delta x \\, \\Delta p \\ge \\frac{\\hbar}{2}. The equality is saturated uniquely by Gaussian wave packets: \\psi(x) = (\\pi \\sigma^2)^{-1/4} \\exp(-x^2 / 2\\sigma^2). The energy-time uncertainty relation \\Delta E \\, \\Delta t \\ge \\frac{\\hbar}{2} governs quantum vacuum fluctuations and unstable resonance decay lifetimes \\tau \\approx \\hbar / \\Gamma.",
    "realWorldApplication": "Quantum tunneling in semiconductor flash memory transistors, atomic scanning tunneling microscopes (STM), and zero-point energy in quantum cryogenic liquids.",
    "variables": [
      {
        "symbol": "\\Delta x",
        "label": "Position Measurement Uncertainty",
        "unit": "m"
      },
      {
        "symbol": "\\Delta p",
        "label": "Momentum Measurement Uncertainty",
        "unit": "kg·m/s"
      },
      {
        "symbol": "\\hbar",
        "label": "Reduced Planck Constant (h / 2π)",
        "unit": "J·s"
      },
      {
        "symbol": "\\Delta E",
        "label": "Energy State Uncertainty",
        "unit": "J"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "wavepacketWidth": 1.0,
        "hbarScale": 1.0,
        "momentumSpread": 0.5
      },
      "description": "Gaussian quantum wavepacket evolution displaying spatial dispersion and Fourier momentum transform.",
      "apparatusType": "quantum_wavepacket_well"
    }
  },
  {
    "id": "bohr-orbital-radii",
    "title": "Bohr Model Quantized Orbital Radii & Energy Levels",
    "branch": "modern",
    "tag": "Atomic Quantization",
    "difficulty": "Intermediate",
    "formulaLatex": "r_n = \\frac{4\\pi \\varepsilon_0 \\hbar^2 n^2}{m_e e^2} = n^2 a_0, \\quad E_n = -\\frac{m_e e^4}{32\\pi^2 \\varepsilon_0^2 \\hbar^2} \\frac{1}{n^2} = -\\frac{13.6\\text{ eV}}{n^2}",
    "summary": "Niels Bohr's 1913 semi-classical model of the hydrogen atom, postulating that orbital angular momentum of electrons is quantized in integer units of \\hbar. This resolved atomic collapse and explained discrete spectral emission series.",
    "derivation": "In classical electrodynamics, an accelerating electron in circular orbit would continuously radiate electromagnetic power (Larmor formula) and spiral into the nucleus within 10⁻¹¹ seconds. Bohr postulated that electrons inhabit discrete stationary non-radiating orbits governed by quantized orbital angular momentum: L = m_e v r = n \\hbar (n = 1, 2, 3, \\dots). Equating Coulomb attraction to centripetal acceleration: \\frac{1}{4\\pi \\varepsilon_0}\\frac{e^2}{r^2} = m_e \\frac{v^2}{r} \\implies v^2 = \\frac{e^2}{4\\pi \\varepsilon_0 m_e r}. From quantization, v = \\frac{n \\hbar}{m_e r}. Squaring: \\frac{n^2 \\hbar^2}{m_e^2 r^2} = \\frac{e^2}{4\\pi \\varepsilon_0 m_e r}. Solving for orbital radius r_n: r_n = \\frac{4\\pi \\varepsilon_0 \\hbar^2}{m_e e^2} n^2 = n^2 a_0, where a_0 \\approx 0.529 \\times 10^{-10} \\text{ m} is the Bohr radius. Total mechanical energy is E = K + U = \\frac{1}{2} m_e v^2 - \\frac{e^2}{4\\pi \\varepsilon_0 r} = -\\frac{e^2}{8\\pi \\varepsilon_0 r}. Substituting r_n: E_n = -\\frac{m_e e^4}{32\\pi^2 \\varepsilon_0^2 \\hbar^2}\\frac{1}{n^2} = -\\frac{13.606\\text{ eV}}{n^2}. Transition wavelengths satisfy the Rydberg formula: \\frac{1}{\\lambda} = R_\\infty \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right).",
    "realWorldApplication": "Hydrogen emission spectrometry (Balmer, Lyman, Paschen series) used to identify elemental compositions in distant stars and galaxies.",
    "variables": [
      {
        "symbol": "r_n",
        "label": "Quantized Orbital Radius",
        "unit": "m"
      },
      {
        "symbol": "a_0",
        "label": "Bohr Radius",
        "unit": "m"
      },
      {
        "symbol": "E_n",
        "label": "Principal Energy Level",
        "unit": "eV or J"
      },
      {
        "symbol": "n",
        "label": "Principal Quantum Number",
        "unit": "dimensionless"
      }
    ],
    "presetConfig": {
      "domain": "mechanics",
      "cameraPosition": [
        0,
        8,
        16
      ],
      "timeDilation": 0.8,
      "parameters": {
        "principalQuantumN": 3,
        "bohrRadiusScale": 2.0,
        "transitionFrom": 3,
        "transitionTo": 2
      },
      "description": "Quantized circular Bohr electron orbits showing photon emission during n=3 to n=2 Balmer alpha quantum jump.",
      "apparatusType": "bohr_atom_orbital"
    }
  },
  {
    "id": "compton-scattering-shift",
    "title": "Compton Scattering Wavelength Shift",
    "branch": "modern",
    "tag": "Relativistic Quantum Kinematics",
    "difficulty": "Advanced",
    "formulaLatex": "\\Delta \\lambda = \\lambda' - \\lambda = \\frac{h}{m_e c} (1 - \\cos \\theta) = \\lambda_C (1 - \\cos \\theta)",
    "summary": "Arthur Compton's 1923 experiment demonstrating the particle nature of electromagnetic radiation. High-energy X-ray or gamma photons scatter elastically off stationary electrons, imparting momentum and recoiling with an increased (longer) wavelength.",
    "derivation": "Treat the collision between an incident photon and a stationary free electron (mass m_e) relativistically in 2D. Initial photon: energy E = h f = \\frac{h c}{\\lambda}, momentum \\mathbf{p} = \\frac{h}{\\lambda}\\hat{\\mathbf{i}}. Initial electron at rest: energy E_e = m_e c^2, momentum \\mathbf{p}_e = \\mathbf{0}. Scattered photon at angle \\theta: energy E' = \\frac{h c}{\\lambda'}, momentum \\mathbf{p}' with magnitude \\frac{h}{\\lambda'}. Recoil electron at angle \\phi: momentum \\mathbf{p}_e'. Conservation of relativistic energy: E + m_e c^2 = E' + E_e' \\implies E_e' = (E - E') + m_e c^2. Conservation of vector momentum: \\mathbf{p} = \\mathbf{p}' + \\mathbf{p}_e' \\implies \\mathbf{p}_e' = \\mathbf{p} - \\mathbf{p}'. Squaring the momentum equation: |\\mathbf{p}_e'|^2 = p^2 + {p'}^2 - 2 p p' \\cos\\theta. Using relativistic energy-momentum invariant (E_e')^2 = (p_e' c)^2 + (m_e c^2)^2: [(E - E') + m_e c^2]^2 = c^2 [p^2 + {p'}^2 - 2 p p' \\cos\\theta] + m_e^2 c^4. Expanding both sides and substituting E = p c, E' = p' c: -2 E E' + 2 m_e c^2 (E - E') = -2 c^2 p p' \\cos\\theta = -2 E E' \\cos\\theta. Simplifying: m_e c^2 (E - E') = E E' (1 - \\cos\\theta) \\implies \\frac{E - E'}{E E'} = \\frac{1 - \\cos\\theta}{m_e c^2} \\implies \\frac{1}{E'} - \\frac{1}{E} = \\frac{1 - \\cos\\theta}{m_e c^2}. Substituting E = \\frac{h c}{\\lambda} and E' = \\frac{h c}{\\lambda'}: \\frac{\\lambda'}{h c} - \\frac{\\lambda}{h c} = \\frac{1 - \\cos\\theta}{m_e c^2} \\implies \\lambda' - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta). The Compton wavelength of an electron is \\lambda_C = \\frac{h}{m_e c} \\approx 2.426 \\times 10^{-12} \\text{ m}.",
    "realWorldApplication": "Radiation therapy oncology planning, gamma-ray telescope Compton cameras (NASA Fermi Gamma-ray Space Telescope), and PET scan attenuation correction.",
    "variables": [
      {
        "symbol": "\\Delta \\lambda",
        "label": "Compton Wavelength Shift",
        "unit": "m"
      },
      {
        "symbol": "\\lambda_C",
        "label": "Compton Wavelength of Electron",
        "unit": "m (2.426 pm)"
      },
      {
        "symbol": "\\theta",
        "label": "Photon Scattering Angle",
        "unit": "rad"
      },
      {
        "symbol": "h",
        "label": "Planck Constant",
        "unit": "J·s"
      },
      {
        "symbol": "m_e",
        "label": "Electron Rest Mass",
        "unit": "kg"
      }
    ],
    "presetConfig": {
      "domain": "collisions",
      "cameraPosition": [
        0,
        8,
        14
      ],
      "timeDilation": 1.0,
      "parameters": {
        "incidentWavelengthPm": 20.0,
        "scatterAngleDeg": 90.0
      },
      "description": "Relativistic photon-electron elastic scattering chamber recording wavelength elongation and electron recoil.",
      "apparatusType": "compton_spectrometer_chamber"
    }
  }
];

/**
 * Filter concepts by scientific branch
 */
export function getConceptsByBranch(branch: PhysicsBranch): PhysicsConcept[] {
  return PHYSICS_CONCEPTS.filter((c) => c.branch === branch);
}

/**
 * Retrieve a specific concept by unique id
 */
export function getConceptById(id: string): PhysicsConcept | undefined {
  return PHYSICS_CONCEPTS.find((c) => c.id === id);
}

/**
 * Search concepts across title, tag, summary, and formula
 */
export function searchConcepts(query: string): PhysicsConcept[] {
  const q = query.trim().toLowerCase();
  if (!q) return PHYSICS_CONCEPTS;
  return PHYSICS_CONCEPTS.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.tag.toLowerCase().includes(q) ||
      c.summary.toLowerCase().includes(q) ||
      c.realWorldApplication.toLowerCase().includes(q)
  );
}
