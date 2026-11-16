# -*- coding: utf-8 -*-
"""
Branch 1: Classical Mechanics & Celestial Gravitation (16 concepts)
"""

BRANCH1_CONCEPTS = [
    {
        "id": "newtons-first-law",
        "title": "Newton's First Law of Motion (Law of Inertia)",
        "branch": "mechanics",
        "tag": "Inertial Reference Frames",
        "difficulty": "Foundational",
        "formulaLatex": r"\sum \mathbf{F} = \mathbf{0} \iff \frac{d\mathbf{v}}{dt} = \mathbf{0}",
        "summary": "An object at rest remains at rest, and an object in uniform rectilinear motion continues at constant velocity unless acted upon by a non-zero net external force. This law defines the class of inertial reference frames where Newtonian mechanics is valid without fictitious forces.",
        "derivation": r"From Newton's second law, net force is the time rate of change of linear momentum: \mathbf{F}_{\text{net}} = \frac{d\mathbf{p}}{dt} = \frac{d(m\mathbf{v})}{dt}. For an object with invariant inertial mass m > 0 in an inertial frame, this simplifies to \mathbf{F}_{\text{net}} = m \frac{d\mathbf{v}}{dt} = m \mathbf{a}. When the net external force is identically zero (\sum \mathbf{F} = \mathbf{0}), we obtain m \frac{d\mathbf{v}}{dt} = \mathbf{0}. Because m \ne 0, it strictly follows that \frac{d\mathbf{v}}{dt} = \mathbf{0}. Integrating both sides with respect to time yields \mathbf{v}(t) = \mathbf{v}_0 = \text{constant vector}. Thus, in the absence of net force, velocity is invariant in both magnitude and spatial direction.",
        "realWorldApplication": "Interstellar probe trajectory planning: Deep space probes such as Voyager 1 and New Horizons coast across interstellar space at constant velocity without propellant expenditure once outside planetary gravitational influences.",
        "variables": [
            {"symbol": r"\mathbf{F}", "label": "Net External Force", "unit": "N"},
            {"symbol": "m", "label": "Inertial Mass", "unit": "kg"},
            {"symbol": r"\mathbf{v}", "label": "Velocity Vector", "unit": "m/s"},
            {"symbol": "t", "label": "Elapsed Time", "unit": "s"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 6, 14],
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
        "formulaLatex": r"\mathbf{F}_{\text{net}} = \frac{d\mathbf{p}}{dt} = m \mathbf{a}",
        "summary": "The time rate of change of linear momentum of a body is directly proportional to the applied net external force and occurs in the direction of that force vector. For constant mass, the resulting acceleration is directly proportional to net force and inversely proportional to mass.",
        "derivation": r"Linear momentum is defined as \mathbf{p} = m \mathbf{v}. Newton's fundamental definition of force is \mathbf{F}_{\text{net}} = \frac{d\mathbf{p}}{dt}. Applying the Leibniz product rule yields \mathbf{F}_{\text{net}} = \frac{d(m\mathbf{v})}{dt} = m \frac{d\mathbf{v}}{dt} + \mathbf{v} \frac{dm}{dt}. In non-relativistic systems with constant mass (\frac{dm}{dt} = 0), this simplifies to \mathbf{F}_{\text{net}} = m \frac{d\mathbf{v}}{dt} = m \mathbf{a}. For systems with variable mass such as chemical rockets, the second term leads directly to the Tsiolkovsky rocket equation.",
        "realWorldApplication": "Aerospace launch vehicle propulsion: Rocket thrust profiles and stage separations are computed directly by balancing engine thrust, atmospheric aerodynamic drag, and gravitational force to achieve targeted orbital injection accelerations.",
        "variables": [
            {"symbol": r"\mathbf{F}_{\text{net}}", "label": "Net Resultant Force", "unit": "N"},
            {"symbol": "m", "label": "Body Mass", "unit": "kg"},
            {"symbol": r"\mathbf{a}", "label": "Acceleration Vector", "unit": "m/s²"},
            {"symbol": r"\mathbf{p}", "label": "Linear Momentum", "unit": "kg·m/s"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 8, 16],
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
        "formulaLatex": r"\mathbf{F}_{A \to B} = -\mathbf{F}_{B \to A}",
        "summary": "Whenever two bodies interact, the force exerted by body A upon body B is equal in magnitude, opposite in direction, and collinear with the force simultaneously exerted by body B upon body A. These forces act on distinct bodies and never cancel each other.",
        "derivation": r"Consider an isolated system composed of two interacting point particles A and B with masses m_A, m_B and velocities \mathbf{v}_A, \mathbf{v}_B. The total linear momentum of the system is \mathbf{P}_{\text{total}} = \mathbf{p}_A + \mathbf{p}_B. By Newton's second law, \frac{d\mathbf{p}_A}{dt} = \mathbf{F}_{B \to A} and \frac{d\mathbf{p}_B}{dt} = \mathbf{F}_{A \to B}. In the absence of external forces, total momentum is strictly conserved: \frac{d\mathbf{P}_{\text{total}}}{dt} = \mathbf{0} \implies \frac{d\mathbf{p}_A}{dt} + \frac{d\mathbf{p}_B}{dt} = \mathbf{0}. Substituting the respective forces yields \mathbf{F}_{B \to A} + \mathbf{F}_{A \to B} = \mathbf{0} \implies \mathbf{F}_{A \to B} = -\mathbf{F}_{B \to A}.",
        "realWorldApplication": "Rocket engine combustion chambers: Expulsion of high-velocity combustion gases through a de Laval nozzle exerts an equal and opposite reaction force against the combustion chamber dome, accelerating the rocket forward.",
        "variables": [
            {"symbol": r"\mathbf{F}_{A \to B}", "label": "Force on Body B by Body A", "unit": "N"},
            {"symbol": r"\mathbf{F}_{B \to A}", "label": "Force on Body A by Body B", "unit": "N"},
            {"symbol": r"\mathbf{P}", "label": "Total Isolated Momentum", "unit": "kg·m/s"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 5, 12],
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
        "formulaLatex": r"\mathbf{F}_g = -G \frac{m_1 m_2}{r^2} \hat{\mathbf{r}}",
        "summary": "Every point mass in the universe attracts every other point mass with a force directly proportional to the product of their masses and inversely proportional to the square of the distance separating their centers.",
        "derivation": r"Combining Kepler's empirical laws with circular centripetal acceleration a_c = \frac{v^2}{r} = \frac{4\pi^2 r}{T^2}. Kepler's third law states \frac{T^2}{r^3} = K (constant for all orbiting bodies around central mass M). Substituting T^2 into the acceleration formula yields a_c = \frac{4\pi^2 r}{K r^3} = \frac{4\pi^2}{K} \frac{1}{r^2}. By Newton's second law, force on orbiting mass m is F = m a_c = \frac{4\pi^2 m}{K r^2}. By Newton's third law, the force must be symmetric in both masses, requiring the constant \frac{4\pi^2}{K} to be proportional to central mass M: \frac{4\pi^2}{K} = G M. Thus, the gravitational force magnitude is F = G \frac{M m}{r^2}, acting attractively along the displacement vector -\hat{\mathbf{r}}.",
        "realWorldApplication": "Orbital mechanics of GPS satellites and interplanetary trajectory navigation for Mars rovers and lunar transfer orbits.",
        "variables": [
            {"symbol": "G", "label": "Newtonian Gravitational Constant", "unit": "N·m²/kg²"},
            {"symbol": "m_1", "label": "Primary Mass", "unit": "kg"},
            {"symbol": "m_2", "label": "Secondary Mass", "unit": "kg"},
            {"symbol": "r", "label": "Radial Separation", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 16, 24],
            "timeDilation": 0.8,
            "parameters": {
                "G": 6.674e-11,
                "mass1": 1.0e12,
                "mass2": 2.0e10,
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
        "formulaLatex": r"r(\theta) = \frac{a(1 - e^2)}{1 + e \cos \theta}",
        "summary": "The orbit of every planet is an ellipse with the Sun situated at one of its two geometric foci. The semi-major axis defines the orbit's spatial scale, while orbital eccentricity characterizes its deviation from circularity.",
        "derivation": r"In a central inverse-square gravitational field \mathbf{F} = -\frac{GMm}{r^2}\hat{\mathbf{r}}, the specific angular momentum \mathbf{h} = \mathbf{r} \times \mathbf{v} is strictly conserved. In plane polar coordinates (r, \theta), Binet's equation for central orbital motion substituting u = \frac{1}{r} states: \frac{d^2 u}{d\theta^2} + u = -\frac{F(1/u)}{m h^2 u^2}. Since F(1/u) = -\frac{GMm}{(1/u)^2} = -GMm u^2, the right-hand side simplifies to \frac{GM}{h^2}. This yields the linear inhomogeneous ordinary differential equation: \frac{d^2 u}{d\theta^2} + u = \frac{GM}{h^2}. The general solution is u(\theta) = \frac{GM}{h^2}\left(1 + e \cos(\theta - \theta_0)\right). Orienting coordinates such that periapsis occurs at \theta_0 = 0 and defining the semi-latus rectum p = \frac{h^2}{GM} = a(1 - e^2), we recover the polar equation of an ellipse: r(\theta) = \frac{a(1 - e^2)}{1 + e \cos \theta}.",
        "realWorldApplication": "Highly eccentric Molniya communications orbits and interplanetary transfer orbit insertion geometry (Hohmann transfer ellipses).",
        "variables": [
            {"symbol": "r", "label": "Radial Distance from Focus", "unit": "m"},
            {"symbol": "a", "label": "Semi-Major Axis", "unit": "m"},
            {"symbol": "e", "label": "Orbital Eccentricity", "unit": "dimensionless"},
            {"symbol": r"\theta", "label": "True Anomaly Angle", "unit": "rad"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 20, 30],
            "timeDilation": 0.6,
            "parameters": {
                "semiMajorAxis": 14.0,
                "eccentricity": 0.68,
                "centralMass": 6.0e11
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
        "formulaLatex": r"\frac{dA}{dt} = \frac{1}{2} r^2 \frac{d\theta}{dt} = \frac{L}{2m} = \text{const}",
        "summary": "A radius vector joining any planet to the central sun sweeps out equal geometric areas during equal intervals of time. This law is an exact physical consequence of the conservation of orbital angular momentum under central forces.",
        "derivation": r"In plane polar coordinates, the differential area dA swept out by the position vector \mathbf{r} over time increment dt corresponds to the area of the infinitesimal triangle formed by \mathbf{r} and d\mathbf{r}: dA = \frac{1}{2} |\mathbf{r} \times d\mathbf{r}| = \frac{1}{2} r (r d\theta) = \frac{1}{2} r^2 \dot{\theta} dt. Dividing by dt yields the instantaneous areal velocity: \frac{dA}{dt} = \frac{1}{2} r^2 \dot{\theta}. The orbital angular momentum magnitude is defined as L = |\mathbf{r} \times \mathbf{p}| = m r^2 \dot{\theta}. Because the gravitational force is purely central, \mathbf{F} \parallel \mathbf{r}, the net gravitational torque on the planet vanishes: \boldsymbol{\tau} = \mathbf{r} \times \mathbf{F} = \mathbf{0}. Consequently, \frac{d\mathbf{L}}{dt} = \boldsymbol{\tau} = \mathbf{0}, meaning L is strictly constant in time. Substituting L into the areal velocity expression gives \frac{dA}{dt} = \frac{L}{2m} = \text{constant}.",
        "realWorldApplication": "Cometary orbital tracking: Long-period comets (e.g. Halley's Comet) accelerate to extreme speeds at perihelion and spend decades creeping slowly at distant aphelion.",
        "variables": [
            {"symbol": r"\frac{dA}{dt}", "label": "Areal Velocity", "unit": "m²/s"},
            {"symbol": "L", "label": "Orbital Angular Momentum", "unit": "kg·m²/s"},
            {"symbol": "r", "label": "Instantaneous Radius", "unit": "m"},
            {"symbol": r"\dot{\theta}", "label": "Angular Velocity", "unit": "rad/s"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 18, 28],
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
        "formulaLatex": r"T^2 = \frac{4\pi^2}{G(M + m)} a^3",
        "summary": "The square of the orbital period of a celestial body is directly proportional to the cube of the semi-major axis of its orbit. The proportionality constant depends solely on the universal gravitational constant and the combined mass of the system.",
        "derivation": r"For a circular orbit of radius r around central mass M \gg m, equating gravitational attraction to the required centripetal force gives: \frac{G M m}{r^2} = m \frac{v^2}{r} \implies v^2 = \frac{G M}{r}. The orbital period T is the circumference divided by orbital speed: T = \frac{2\pi r}{v}. Squaring both sides: T^2 = \frac{4\pi^2 r^2}{v^2} = \frac{4\pi^2 r^2}{\frac{GM}{r}} = \frac{4\pi^2}{GM} r^3. In general elliptical orbits, integration of areal velocity over one full period yields total area A = \int_0^T \frac{dA}{dt} dt = \frac{L}{2m} T. The area of an ellipse is A = \pi a b = \pi a^2 \sqrt{1 - e^2}. Since semi-latus rectum p = a(1 - e^2) = \frac{L^2}{G(M+m)m^2}, substituting L gives T^2 = \frac{4\pi^2}{G(M + m)} a^3.",
        "realWorldApplication": "Determining supermassive black hole masses at galactic cores (such as Sagittarius A*) by monitoring the orbital periods and semi-major axes of surrounding S-stars.",
        "variables": [
            {"symbol": "T", "label": "Orbital Period", "unit": "s"},
            {"symbol": "a", "label": "Semi-Major Axis", "unit": "m"},
            {"symbol": "M", "label": "Primary Mass", "unit": "kg"},
            {"symbol": "G", "label": "Gravitational Constant", "unit": "N·m²/kg²"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 26, 42],
            "timeDilation": 0.4,
            "parameters": {
                "centralMass": 2.5e12,
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
        "formulaLatex": r"v_{\text{esc}} = \sqrt{\frac{2GM}{R}}, \quad U(r) = -\frac{GMm}{r}",
        "summary": "Gravitational potential energy represents the work required to assemble masses from infinite separation against mutual gravity. Escape velocity is the minimum ballistic speed needed to break free from a gravitational well without further propulsion.",
        "derivation": r"The gravitational force is conservative: \mathbf{F}_g = -\frac{GMm}{r^2} \hat{\mathbf{r}}. Setting reference zero potential at infinity (U(\infty) = 0), potential energy U(r) is defined as work done against gravity from r to \infty: U(r) = -\int_\infty^r \mathbf{F}_g \cdot d\mathbf{r}' = -\int_\infty^r \left(-\frac{GMm}{{r'}^2}\right) dr' = \left[-\frac{GMm}{r'}\right]_\infty^r = -\frac{GMm}{r}. Total mechanical energy of a projectile launched from radius R with speed v is E = K + U = \frac{1}{2} m v^2 - \frac{GMm}{R}. To escape to infinity, the projectile must reach r \to \infty with non-negative kinetic energy (E \ge 0). The threshold boundary occurs at E = 0: \frac{1}{2} m v_{\text{esc}}^2 - \frac{GMm}{R} = 0 \implies v_{\text{esc}} = \sqrt{\frac{2GM}{R}}.",
        "realWorldApplication": "Lunar and interplanetary missions: Earth's escape velocity (11.186 km/s) dictates rocket stage sizing and fuel fraction for Mars or lunar transfer injections.",
        "variables": [
            {"symbol": r"v_{\text{esc}}", "label": "Escape Velocity", "unit": "m/s"},
            {"symbol": "U(r)", "label": "Gravitational Potential Energy", "unit": "J"},
            {"symbol": "M", "label": "Celestial Body Mass", "unit": "kg"},
            {"symbol": "R", "label": "Launch Radius", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 15, 25],
            "timeDilation": 0.7,
            "parameters": {
                "planetMass": 6.0e11,
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
        "formulaLatex": r"\frac{T_1}{T_2} = \frac{p}{q}, \quad p, q \in \mathbb{Z}^+",
        "summary": "Occurs when orbiting celestial bodies exert regular, periodic mutual gravitational tugs upon one another because their orbital periods are related by a ratio of small integers. This can produce orbital stability or rapid chaotic ejection.",
        "derivation": r"Let mean orbital motions of two bodies be n_1 = \frac{2\pi}{T_1} and n_2 = \frac{2\pi}{T_2}. A mean-motion resonance satisfies p n_1 - q n_2 \approx 0. In celestial perturbation theory, the gravitational disturbing function \mathcal{R} acting on the secondary body is expanded as a Fourier series in mean longitudes \lambda_1 = n_1 t + \epsilon_1 and \lambda_2 = n_2 t + \epsilon_2: \mathcal{R} = \sum C_{j,k} \cos(j \lambda_1 - k \lambda_2 + \varpi). When j/k \approx q/p, the argument \phi = p \lambda_1 - q \lambda_2 + \varpi oscillates very slowly (librates). Secular integration of Lagrange's planetary equations: \frac{de}{dt} = -\frac{\sqrt{1-e^2}}{n a^2 e} \frac{\partial \mathcal{R}}{\partial \varpi} demonstrates that resonant terms do not average to zero, generating secular amplifications in eccentricity and inclination.",
        "realWorldApplication": "The Laplace resonance among Jupiter's Galilean moons Io, Europa, and Ganymede (4:2:1 period ratio), maintaining Io's eccentric orbit and fueling immense tidal volcanic activity.",
        "variables": [
            {"symbol": "T_1", "label": "Inner Body Orbital Period", "unit": "s"},
            {"symbol": "T_2", "label": "Outer Body Orbital Period", "unit": "s"},
            {"symbol": "p, q", "label": "Small Integer Resonance Ratio", "unit": "dimensionless"},
            {"symbol": r"\phi", "label": "Resonant Resonating Angle", "unit": "rad"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 22, 34],
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
        "formulaLatex": r"\nabla \Phi_{\text{eff}} = \mathbf{0}, \quad \Phi_{\text{eff}} = -\frac{GM_1}{r_1} - \frac{GM_2}{r_2} - \frac{1}{2} \omega^2 (x^2 + y^2)",
        "summary": "In the circular restricted three-body problem, five equilibrium positions exist in the corotating reference frame where the gravitational attractions of two large masses precisely balance the centrifugal fictitious force.",
        "derivation": r"In a non-inertial reference frame corotating with two massive bodies M_1, M_2 at angular frequency \omega = \sqrt{\frac{G(M_1 + M_2)}{R^3}} around their center of mass, the equation of motion for a test particle of negligible mass m is: \ddot{\mathbf{r}} + 2\boldsymbol{\omega} \times \dot{\mathbf{r}} = -\nabla \Phi_{\text{eff}}. The effective potential per unit mass is \Phi_{\text{eff}}(\mathbf{r}) = -\frac{G M_1}{r_1} - \frac{G M_2}{r_2} - \frac{1}{2} \omega^2 (x^2 + y^2). Equilibrium points require static velocity and acceleration in the rotating frame: \dot{\mathbf{r}} = \mathbf{0}, \ddot{\mathbf{r}} = \mathbf{0} \implies \nabla \Phi_{\text{eff}} = \mathbf{0}. Setting \frac{\partial \Phi_{\text{eff}}}{\partial x} = 0, \frac{\partial \Phi_{\text{eff}}}{\partial y} = 0 yields the three collinear points L1, L2, L3 along the inter-mass axis, and the two equilateral triangle points L4, L5 where r_1 = r_2 = R forming equilateral triangles with M_1 and M_2.",
        "realWorldApplication": "Space telescope positioning: The James Webb Space Telescope (JWST) operates in a halo orbit around the Sun-Earth L2 Lagrange point to maintain an unobstructed, cryogenically dark deep-space view.",
        "variables": [
            {"symbol": r"\Phi_{\text{eff}}", "label": "Effective Gravitational Potential", "unit": "J/kg"},
            {"symbol": r"\omega", "label": "Corotating Frame Angular Frequency", "unit": "rad/s"},
            {"symbol": "r_1, r_2", "label": "Distances to Primaries", "unit": "m"},
            {"symbol": "x, y", "label": "Planar Coordinates in Corotating Frame", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 24, 30],
            "timeDilation": 0.5,
            "parameters": {
                "primaryMass": 1.0e12,
                "secondaryMass": 3.0e10,
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
        "formulaLatex": r"\mathbf{a}_c = -\frac{v^2}{r} \hat{\mathbf{r}} = -\omega^2 r \hat{\mathbf{r}}",
        "summary": "Any particle traversing a curved path experiences an instantaneous acceleration directed perpendicularly to its velocity vector toward the instantaneous center of curvature, changing its heading rather than its speed.",
        "derivation": r"Represent planar circular trajectory in Cartesian coordinates: \mathbf{r}(t) = r \cos(\omega t) \hat{\mathbf{i}} + r \sin(\omega t) \hat{\mathbf{j}}. Taking the first time derivative gives velocity: \mathbf{v}(t) = \dot{\mathbf{r}}(t) = -r \omega \sin(\omega t) \hat{\mathbf{i}} + r \omega \cos(\omega t) \hat{\mathbf{j}}, with constant speed v = |\mathbf{v}| = r \omega. Taking the second time derivative yields acceleration: \mathbf{a}(t) = \ddot{\mathbf{r}}(t) = -r \omega^2 \cos(\omega t) \hat{\mathbf{i}} - r \omega^2 \sin(\omega t) \hat{\mathbf{j}} = -\omega^2 \mathbf{r}(t). Since the unit radial vector is \hat{\mathbf{r}} = \frac{\mathbf{r}}{r} and \omega = \frac{v}{r}, we conclude \mathbf{a}_c = -\frac{v^2}{r} \hat{\mathbf{r}}. By Newton's second law, the required net centripetal force is \mathbf{F}_c = m \mathbf{a}_c = -m \frac{v^2}{r} \hat{\mathbf{r}}.",
        "realWorldApplication": "Civil highway banked curves and high-speed railway track geometry, designed with specific banking angles \theta = \arctan(v^2 / (r g)) to eliminate lateral tire shear forces.",
        "variables": [
            {"symbol": "a_c", "label": "Centripetal Acceleration", "unit": "m/s²"},
            {"symbol": "v", "label": "Tangential Speed", "unit": "m/s"},
            {"symbol": "r", "label": "Radius of Curvature", "unit": "m"},
            {"symbol": r"\omega", "label": "Angular Frequency", "unit": "rad/s"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 8, 14],
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
        "formulaLatex": r"\mathbf{F}_{\text{coriolis}} = -2m (\boldsymbol{\omega} \times \mathbf{v}_{\text{rot}})",
        "summary": "An apparent inertial force acting on bodies moving linearly within a rotating frame of reference. It deflects moving masses perpendicularly to both the frame's angular velocity vector and the apparent velocity.",
        "derivation": r"Let inertial frame be I and rotating frame with angular velocity \boldsymbol{\omega} be R. The transformation rule for time derivative of any vector \mathbf{A} is \left(\frac{d\mathbf{A}}{dt}\right)_I = \left(\frac{d\mathbf{A}}{dt}\right)_R + \boldsymbol{\omega} \times \mathbf{A}. Applying this to position vector \mathbf{r}: \mathbf{v}_I = \mathbf{v}_R + \boldsymbol{\omega} \times \mathbf{r}. Differentiating again: \mathbf{a}_I = \left(\frac{d\mathbf{v}_I}{dt}\right)_I = \left(\frac{d}{dt}(\mathbf{v}_R + \boldsymbol{\omega} \times \mathbf{r})\right)_R + \boldsymbol{\omega} \times (\mathbf{v}_R + \boldsymbol{\omega} \times \mathbf{r}) = \mathbf{a}_R + 2(\boldsymbol{\omega} \times \mathbf{v}_R) + \boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r}) + \dot{\boldsymbol{\omega}} \times \mathbf{r}. Multiplying by mass m and rearranging into Newton's effective law in the rotating frame: m \mathbf{a}_R = \mathbf{F}_{\text{real}} - 2m(\boldsymbol{\omega} \times \mathbf{v}_R) - m\boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r}). The second term is the Coriolis force: \mathbf{F}_{\text{coriolis}} = -2m(\boldsymbol{\omega} \times \mathbf{v}_R).",
        "realWorldApplication": "Meteorological cyclone rotation: Low-pressure atmospheric systems spin counterclockwise in the Northern Hemisphere and clockwise in the Southern Hemisphere due to planetary Coriolis deflection.",
        "variables": [
            {"symbol": r"\mathbf{F}_{\text{coriolis}}", "label": "Coriolis Apparent Force", "unit": "N"},
            {"symbol": "m", "label": "Moving Mass", "unit": "kg"},
            {"symbol": r"\boldsymbol{\omega}", "label": "Frame Angular Velocity", "unit": "rad/s"},
            {"symbol": r"\mathbf{v}_{\text{rot}}", "label": "Velocity in Rotating Frame", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 14, 18],
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
        "formulaLatex": r"F = -k x \implies \frac{d^2 x}{dt^2} + \omega_0^2 x = 0, \quad \omega_0 = \sqrt{\frac{k}{m}}",
        "summary": "Linear restorative dynamics where restoring force is directly proportional to displacement from equilibrium. The resulting motion is sinusoidal oscillation whose period depends solely on inertia and stiffness.",
        "derivation": r"Hooke's empirical law for an elastic spring states F(x) = -k x, where k is spring stiffness. Combining with Newton's second law: m \frac{d^2 x}{dt^2} = -k x \implies \frac{d^2 x}{dt^2} + \frac{k}{m} x = 0. Defining the natural angular frequency \omega_0 = \sqrt{\frac{k}{m}}, the equation becomes the classical harmonic oscillator ODE: \ddot{x} + \omega_0^2 x = 0. The characteristic equation is r^2 + \omega_0^2 = 0 \implies r = \pm i \omega_0. The general real solution is x(t) = A \cos(\omega_0 t + \phi), where amplitude A and phase constant \phi are determined by initial conditions x(0) and \dot{x}(0). The period of oscillation is T = \frac{2\pi}{\omega_0} = 2\pi \sqrt{\frac{m}{k}}.",
        "realWorldApplication": "Quartz crystal clock resonators, automotive suspension coil tuning, and microelectromechanical (MEMS) accelerometers.",
        "variables": [
            {"symbol": "k", "label": "Spring Constant", "unit": "N/m"},
            {"symbol": "x", "label": "Displacement from Equilibrium", "unit": "m"},
            {"symbol": "m", "label": "Oscillating Mass", "unit": "kg"},
            {"symbol": r"\omega_0", "label": "Natural Angular Frequency", "unit": "rad/s"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"\frac{d^2 x}{dt^2} + 2\gamma \frac{dx}{dt} + \omega_0^2 x = \frac{F_0}{m} \cos(\omega t)",
        "summary": "When an oscillator is subjected to viscous fluid damping and a periodic external driving force, it undergoes transient decay followed by a steady-state response whose amplitude peaks dramatically near natural resonance.",
        "derivation": r"Accounting for restoring force F_k = -k x, viscous damping force F_{\text{drag}} = -b \dot{x}, and sinusoidal driving force F_{\text{drive}} = F_0 \cos(\omega t), Newton's second law yields: m \ddot{x} + b \dot{x} + k x = F_0 \cos(\omega t). Dividing through by mass m and defining damping factor \gamma = \frac{b}{2m} and natural frequency \omega_0 = \sqrt{\frac{k}{m}} gives: \ddot{x} + 2\gamma \dot{x} + \omega_0^2 x = \frac{F_0}{m} \cos(\omega t). Seeking the steady-state complex solution x_p(t) = \text{Re}[X e^{i\omega t}], substitution gives: [-\omega^2 + 2i\gamma\omega + \omega_0^2] X = \frac{F_0}{m} \implies X(\omega) = \frac{F_0/m}{(\omega_0^2 - \omega^2) + 2i\gamma\omega}. The steady-state amplitude is the modulus A(\omega) = |X(\omega)| = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\gamma^2 \omega^2}}. Amplitude reaches resonance maximum when \omega = \sqrt{\omega_0^2 - 2\gamma^2}.",
        "realWorldApplication": "Tuned mass damper in Taipei 101 skyscraper dissipating destructive typhoon wind sway and seismic oscillations.",
        "variables": [
            {"symbol": r"\gamma", "label": "Damping Coefficient", "unit": "s⁻¹"},
            {"symbol": r"\omega_0", "label": "Natural Frequency", "unit": "rad/s"},
            {"symbol": r"\omega", "label": "Driving Frequency", "unit": "rad/s"},
            {"symbol": "F_0", "label": "Driving Force Amplitude", "unit": "N"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 7, 14],
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
        "formulaLatex": r"\frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{\theta}_i}\right) - \frac{\partial \mathcal{L}}{\partial \theta_i} = 0, \quad |\delta \mathbf{Z}(t)| \sim |\delta \mathbf{Z}_0| e^{\lambda t}",
        "summary": "A coupled physical system consisting of one pendulum suspended from another that exhibits sensitive dependence on initial conditions (butterfly effect) and positive Lyapunov exponents in phase space.",
        "derivation": r"Parameterize the positions of two coupled bobs with lengths l_1, l_2 and masses m_1, m_2: x_1 = l_1 \sin\theta_1, y_1 = -l_1 \cos\theta_1, and x_2 = x_1 + l_2 \sin\theta_2, y_2 = y_1 - l_2 \cos\theta_2. The system kinetic energy T = \frac{1}{2} m_1 (\dot{x}_1^2 + \dot{y}_1^2) + \frac{1}{2} m_2 (\dot{x}_2^2 + \dot{y}_2^2) expands to: T = \frac{1}{2}(m_1 + m_2)l_1^2 \dot{\theta}_1^2 + \frac{1}{2}m_2 l_2^2 \dot{\theta}_2^2 + m_2 l_1 l_2 \dot{\theta}_1 \dot{\theta}_2 \cos(\theta_1 - \theta_2). Potential energy is V = -(m_1 + m_2) g l_1 \cos\theta_1 - m_2 g l_2 \cos\theta_2. Applying the Euler-Lagrange equations for \theta_1 and \theta_2 yields two non-linearly coupled second-order ODEs. In high-energy regimes, homoclinic tangles in phase space lead to positive maximal Lyapunov exponents \lambda > 0, producing deterministic exponential divergence of adjacent trajectories.",
        "realWorldApplication": "Atmospheric predictability horizons in numerical weather forecasting and turbulent fluid boundary layer modeling.",
        "variables": [
            {"symbol": r"\theta_1, \theta_2", "label": "Bob Angular Displacements", "unit": "rad"},
            {"symbol": "l_1, l_2", "label": "Rod Segment Lengths", "unit": "m"},
            {"symbol": "m_1, m_2", "label": "Bob Inertial Masses", "unit": "kg"},
            {"symbol": r"\lambda", "label": "Maximum Lyapunov Exponent", "unit": "s⁻¹"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 4, 10],
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
        "formulaLatex": r"\boldsymbol{\tau} = \frac{d\mathbf{L}}{dt} \implies \boldsymbol{\Omega}_p = \frac{\boldsymbol{\tau}}{I \omega_s}",
        "summary": "When a spinning rigid rotor with high axial angular momentum is acted upon by an orthogonal external torque, its spin axis precesses steadily around a third mutually perpendicular axis rather than collapsing.",
        "derivation": r"A symmetric rotor spinning at high angular velocity \boldsymbol{\omega}_s possesses axial angular momentum \mathbf{L} = I \boldsymbol{\omega}_s. An external gravitational torque about the gimbal pivot at distance r is \boldsymbol{\tau} = \mathbf{r} \times m \mathbf{g}. Newton's rotational second law dictates: \boldsymbol{\tau} = \frac{d\mathbf{L}}{dt}. Over an infinitesimal interval dt, the change in angular momentum is d\mathbf{L} = \boldsymbol{\tau} dt. Because \boldsymbol{\tau} \perp \mathbf{L}, the torque changes the direction of \mathbf{L} without altering its magnitude. The axis tilts through an angle d\phi = \frac{|d\mathbf{L}|}{|\mathbf{L}|} = \frac{\tau dt}{I \omega_s}. The steady-state precession frequency is therefore \Omega_p = \frac{d\phi}{dt} = \frac{\tau}{I \omega_s} = \frac{m g r}{I \omega_s}.",
        "realWorldApplication": "Spacecraft attitude control: Control Moment Gyroscopes (CMGs) aboard the International Space Station orient the station without thruster fuel consumption.",
        "variables": [
            {"symbol": r"\boldsymbol{\Omega}_p", "label": "Precession Angular Velocity", "unit": "rad/s"},
            {"symbol": r"\boldsymbol{\tau}", "label": "External Applied Torque", "unit": "N·m"},
            {"symbol": "I", "label": "Flywheel Moment of Inertia", "unit": "kg·m²"},
            {"symbol": r"\omega_s", "label": "Flywheel Spin Rate", "unit": "rad/s"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 6, 9],
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
    }
]
