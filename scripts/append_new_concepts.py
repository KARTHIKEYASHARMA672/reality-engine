# -*- coding: utf-8 -*-
"""
Generates 36 new advanced academic physics concepts (6 branches)
Takes total concept count from 84 to exactly 120 concepts!
"""

NEW_MECHANICS = [
    {
        "id": "euler-lagrange-action-principle",
        "title": "Euler-Lagrange Mechanics & Principle of Least Action",
        "branch": "mechanics",
        "tag": "Analytical Mechanics",
        "difficulty": "Advanced",
        "formulaLatex": r"\delta S = \delta \int_{t_1}^{t_2} L(q, \dot{q}, t)\,dt = 0 \implies \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = 0",
        "summary": "Stationary action principle stating that true physical trajectories extremize the action integral S of the Lagrangian L = T - V. Yields coordinate-independent equations of motion for complex constrained mechanical systems.",
        "derivation": r"Given the action functional S[q] = \int_{t_1}^{t_2} L(q, \dot{q}, t)\,dt, consider a variation q(t) \to q(t) + \epsilon \eta(t) with fixed endpoints \eta(t_1) = \eta(t_2) = 0. The first variation is \delta S = \int_{t_1}^{t_2} \left[ \frac{\partial L}{\partial q} \eta + \frac{\partial L}{\partial \dot{q}} \dot{\eta} \right] dt. Integrating the second term by parts: \int_{t_1}^{t_2} \frac{\partial L}{\partial \dot{q}} \frac{d\eta}{dt} dt = \left[\frac{\partial L}{\partial \dot{q}}\eta\right]_{t_1}^{t_2} - \int_{t_1}^{t_2} \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right) \eta\,dt. The boundary term vanishes identically. Thus, \delta S = \int_{t_1}^{t_2} \left[ \frac{\partial L}{\partial q} - \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right) \right] \eta(t)\,dt = 0. By the fundamental lemma of the calculus of variations, the bracketed term must vanish for all arbitrary variations \eta(t), yielding the Euler-Lagrange equations.",
        "realWorldApplication": "Robotics dynamics and multi-body aerospace structures: Inverted pendulums, robotic manipulator arms, and satellite solar array deployment dynamics are derived using generalized Lagrangian coordinates without calculating internal constraint reaction forces.",
        "variables": [
            {"symbol": "S", "label": "Hamilton's Action Integral", "unit": "J·s"},
            {"symbol": "L", "label": "Lagrangian (T - V)", "unit": "J"},
            {"symbol": r"q_i", "label": "Generalized Coordinates", "unit": "m or rad"},
            {"symbol": r"\dot{q}_i", "label": "Generalized Velocities", "unit": "m/s or rad/s"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 8, 16],
            "timeDilation": 1.0,
            "parameters": {"generalizedMass": 2.5, "springPotential": 40.0},
            "description": "Double-spring constrained Lagrangian mass exhibiting coupled phase-space trajectory.",
            "apparatusType": "lagrangian_slider"
        }
    },
    {
        "id": "hamiltons-canonical-equations",
        "title": "Hamiltonian Mechanics & Canonical Phase Space",
        "branch": "mechanics",
        "tag": "Phase Space & Liouville",
        "difficulty": "Advanced",
        "formulaLatex": r"\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}, \quad H(q, p, t) = \sum p_i \dot{q}_i - L",
        "summary": "Reformulation of classical mechanics into first-order symmetric differential equations on symplectic phase space. Total energy H generates time evolution, with phase space volume conserved by Liouville's theorem.",
        "derivation": r"Perform a Legendre transformation on the Lagrangian L(q, \dot{q}, t) from velocities \dot{q} to generalized canonical momenta p_i \equiv \frac{\partial L}{\partial \dot{q}_i}. The Hamiltonian is defined as H(q, p, t) = \sum_i p_i \dot{q}_i - L(q, \dot{q}, t). Taking the total differential: dH = \sum_i (\dot{q}_i dp_i + p_i d\dot{q}_i) - \sum_i \left(\frac{\partial L}{\partial q_i}dq_i + \frac{\partial L}{\partial \dot{q}_i}d\dot{q}_i\right) - \frac{\partial L}{\partial t}dt. Substituting p_i = \frac{\partial L}{\partial \dot{q}_i} cancels the d\dot{q}_i terms, leaving dH = \sum_i (\dot{q}_i dp_i - \dot{p}_i dq_i) - \frac{\partial L}{\partial t}dt. Comparing this with the natural differential dH = \sum_i \left(\frac{\partial H}{\partial p_i}dp_i + \frac{\partial H}{\partial q_i}dq_i\right) + \frac{\partial H}{\partial t}dt$ yields Hamilton's canonical equations.",
        "realWorldApplication": "Astrodynamics and particle accelerator beam physics: Beam emittance in the Large Hadron Collider (LHC) and long-term solar system orbital stability simulations rely strictly on Hamiltonian symplectic integration to preserve energy invariants.",
        "variables": [
            {"symbol": "H", "label": "Hamiltonian (Total Energy)", "unit": "J"},
            {"symbol": "p", "label": "Canonical Momentum", "unit": "kg·m/s"},
            {"symbol": "q", "label": "Generalized Coordinate", "unit": "m"},
            {"symbol": "t", "label": "Time", "unit": "s"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 10, 18],
            "timeDilation": 1.0,
            "parameters": {"symplecticDt": 0.005, "totalEnergy": 12.5},
            "description": "Harmonic oscillator phase space orbital loop verifying energy surface conservation.",
            "apparatusType": "phase_space_integrator"
        }
    },
    {
        "id": "coupled-harmonic-oscillators-normal-modes",
        "title": "Coupled Harmonic Oscillators & Normal Modes",
        "branch": "mechanics",
        "tag": "Vibrational Dynamics",
        "difficulty": "Intermediate",
        "formulaLatex": r"\mathbf{M}\ddot{\mathbf{x}} + \mathbf{K}\mathbf{x} = \mathbf{0} \implies \det(\mathbf{K} - \omega^2 \mathbf{M}) = 0",
        "summary": "Two or more oscillating bodies connected by elastic coupling exchange energy periodically. The motion can be decomposed into linearly independent normal modes oscillating at characteristic eigenfrequencies without cross-talk.",
        "derivation": r"Consider two identical masses m connected to fixed walls and each other by three springs with constants k_1, k_{12}, k_2. The equations of motion are m \ddot{x}_1 = -k_1 x_1 + k_{12}(x_2 - x_1) and m \ddot{x}_2 = -k_2 x_2 - k_{12}(x_2 - x_1). In matrix notation: \mathbf{M}\ddot{\mathbf{x}} + \mathbf{K}\mathbf{x} = \mathbf{0}, where \mathbf{M} = \text{diag}(m, m) and \mathbf{K} = \begin{bmatrix} k_1+k_{12} & -k_{12} \\ -k_{12} & k_2+k_{12} \end{bmatrix}. Assuming harmonic solutions \mathbf{x}(t) = \mathbf{A} e^{i\omega t}, substitution yields (-\omega^2 \mathbf{M} + \mathbf{K})\mathbf{A} = \mathbf{0}. For non-trivial amplitudes \mathbf{A} \ne \mathbf{0}, the secular determinant must vanish: \det(\mathbf{K} - \omega^2 \mathbf{M}) = 0. Solving this characteristic quadratic yields the symmetric in-phase mode \omega_1 = \sqrt{k/m} and anti-symmetric out-of-phase mode \omega_2 = \sqrt{(k + 2k_{12})/m}.",
        "realWorldApplication": "Civil seismic dampers and molecular spectroscopy: Tuned mass dampers in skyscrapers (Taipei 101) absorb earthquake resonance frequencies; infrared vibrational modes of CO2 and methane molecules reveal greenhouse absorption lines.",
        "variables": [
            {"symbol": r"\omega_i", "label": "Eigenfrequency Normal Mode", "unit": "rad/s"},
            {"symbol": r"\mathbf{M}", "label": "Mass Matrix", "unit": "kg"},
            {"symbol": r"\mathbf{K}", "label": "Stiffness Coupling Matrix", "unit": "N/m"},
            {"symbol": r"\mathbf{x}", "label": "Displacement Vector", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 6, 14],
            "timeDilation": 1.0,
            "parameters": {"mass1": 1.5, "mass2": 1.5, "couplingK": 8.0},
            "description": "Two coupled oscillators demonstrating beat frequency energy transfer.",
            "apparatusType": "coupled_pendulums"
        }
    },
    {
        "id": "gravitational-virial-theorem",
        "title": "The Virial Theorem & Gravitational Equilibrium",
        "branch": "mechanics",
        "tag": "Astrophysical Mechanics",
        "difficulty": "Advanced",
        "formulaLatex": r"2\langle K \rangle + \langle U \rangle = 0 \implies E_{\text{total}} = -\langle K \rangle = \frac{1}{2}\langle U \rangle",
        "summary": "For a stable, gravitationally bound system of N bodies interacting via inverse-square forces, the time-averaged kinetic energy K is exactly equal to half the absolute value of the time-averaged potential energy U.",
        "derivation": r"Define the scalar moment of inertia / virial function G \equiv \sum_i \mathbf{p}_i \cdot \mathbf{r}_i = \frac{1}{2} \frac{d}{dt} \sum_i m_i r_i^2. Differentiating with respect to time: \frac{dG}{dt} = \sum_i \mathbf{p}_i \cdot \dot{\mathbf{r}}_i + \sum_i \dot{\mathbf{p}}_i \cdot \mathbf{r}_i = 2K + \sum_i \mathbf{F}_i \cdot \mathbf{r}_i. For pairwise central gravitational forces \mathbf{F}_{ij} = -G \frac{m_i m_j}{r_{ij}^3}\mathbf{r}_{ij}, Euler's theorem for homogeneous potentials of degree k = -1 yields \sum_i \mathbf{F}_i \cdot \mathbf{r}_i = - \sum_{i<j} \frac{G m_i m_j}{r_{ij}} = U. Taking the long-term time average \langle \dots \rangle = \lim_{T \to \infty} \frac{1}{T}\int_0^T \dots dt: \left\langle \frac{dG}{dt} \right\rangle = \lim_{T \to \infty} \frac{G(T) - G(0)}{T} = 0 for bounded motion. Therefore, 2\langle K \rangle + \langle U \rangle = 0, giving E = K + U = -K = \frac{1}{2}U.",
        "realWorldApplication": "Dark matter discovery: Fritz Zwicky applied the Virial Theorem to the Coma galaxy cluster in 1933, proving the cluster's kinetic velocities required 400x more gravitational mass than visible stellar luminous matter.",
        "variables": [
            {"symbol": r"\langle K \rangle", "label": "Time-Averaged Kinetic Energy", "unit": "J"},
            {"symbol": r"\langle U \rangle", "label": "Time-Averaged Gravitational Potential", "unit": "J"},
            {"symbol": r"E_{\text{total}}", "label": "Total Bound System Energy", "unit": "J"},
            {"symbol": "G", "label": "Gravitational Constant", "unit": "N·m²/kg²"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 16, 28],
            "timeDilation": 1.0,
            "parameters": {"numStars": 8, "clusterRadius": 10.0, "totalMass": 40.0},
            "description": "N-body bound stellar cluster settling into Virial equilibrium 2K + U = 0.",
            "apparatusType": "n_body_cluster"
        }
    },
    {
        "id": "roche-limit-tidal-disruption",
        "title": "Roche Limit & Gravitational Tidal Disruption",
        "branch": "mechanics",
        "tag": "Planetary Gravitation",
        "difficulty": "Intermediate",
        "formulaLatex": r"d_{\text{Roche}} = R_M \left( 2 \frac{\rho_M}{\rho_m} \right)^{1/3} \approx 2.44 R_M \left(\frac{\rho_M}{\rho_m}\right)^{1/3}",
        "summary": "The minimum orbital orbital distance at which a celestial body held together purely by self-gravitation can orbit a primary massive body without being torn apart by differential gravitational tidal forces.",
        "derivation": r"Consider a small spherical satellite of mass m and radius r orbiting a primary body of mass M and radius R_M at distance d. A test particle of mass \mu on the satellite's surface facing the planet experiences two competing forces: 1. Outward tidal differential force: F_{\text{tidal}} \approx \frac{d}{dd}\left(\frac{G M \mu}{d^2}\right) r = \frac{2 G M \mu r}{d^3}. 2. Inward self-gravitational binding force of the satellite: F_{\text{grav}} = \frac{G m \mu}{r^2}. Tidal disruption occurs when F_{\text{tidal}} \ge F_{\text{grav}}, meaning \frac{2 G M \mu r}{d^3} \ge \frac{G m \mu}{r^2} \implies d^3 \le 2 \frac{M}{m} r^3. Expressing masses in terms of average densities M = \frac{4}{3}\pi R_M^3 \rho_M and m = \frac{4}{3}\pi r^3 \rho_m: d^3 \le 2 \left(\frac{R_M^3 \rho_M}{r^3 \rho_m}\right) r^3 = 2 R_M^3 \left(\frac{\rho_M}{\rho_m}\right). Taking cube roots yields the rigid Roche limit d_{\text{Roche}} = R_M \left(2 \frac{\rho_M}{\rho_m}\right)^{1/3}.",
        "realWorldApplication": "Planetary rings and exoplanetary destruction: Saturn's rings reside entirely within its Roche limit, formed from shredded cometary ice moons; tidal disruption events (TDEs) when stars pass too close to supermassive black holes.",
        "variables": [
            {"symbol": r"d_{\text{Roche}}", "label": "Roche Disruption Distance", "unit": "m"},
            {"symbol": r"R_M", "label": "Primary Body Radius", "unit": "m"},
            {"symbol": r"\rho_M", "label": "Primary Density", "unit": "kg/m³"},
            {"symbol": r"\rho_m", "label": "Satellite Density", "unit": "kg/m³"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 14, 24],
            "timeDilation": 1.0,
            "parameters": {"primaryMass": 60.0, "satelliteRadius": 1.2, "orbitDistance": 4.5},
            "description": "Satellite crossing Roche boundary experiencing structural tidal shearing.",
            "apparatusType": "tidal_shearing_orbit"
        }
    },
    {
        "id": "foucault-pendulum-precession",
        "title": "Foucault Pendulum & Earth's Diurnal Rotation",
        "branch": "mechanics",
        "tag": "Non-Inertial Coriolis",
        "difficulty": "Intermediate",
        "formulaLatex": r"\omega_{\text{prec}} = \Omega_{\text{Earth}} \sin \phi, \quad T_{\text{prec}} = \frac{24\,\text{h}}{\sin \phi}",
        "summary": "A spherical pendulum suspended on a low-friction universal pivot rotates its vertical oscillation plane due to Coriolis acceleration in Earth's rotating frame, directly proving planetary rotation without astronomical observation.",
        "derivation": r"In a local coordinate frame at latitude \phi with vertical z-axis pointing outward, Earth's angular velocity is \boldsymbol{\Omega} = (0, \Omega \cos\phi, \Omega \sin\phi). The equation of motion for a pendulum of length L is \ddot{\mathbf{r}} = -\frac{g}{L}\mathbf{r} - 2(\boldsymbol{\Omega} \times \dot{\mathbf{r}}). Neglecting small vertical velocity (\dot{z} \approx 0), the horizontal component equations are \ddot{x} + \omega_0^2 x = 2 \Omega \sin\phi\, \dot{y} and \ddot{y} + \omega_0^2 y = -2 \Omega \sin\phi\, \dot{x}, where \omega_0 = \sqrt{g/L}. Introducing the complex variable \xi(t) = x(t) + i y(t), the coupled equations combine into \ddot{\xi} + 2 i (\Omega \sin\phi) \dot{\xi} + \omega_0^2 \xi = 0. Substituting \xi(t) = u(t) e^{-i (\Omega \sin\phi) t} eliminates the cross Coriolis velocity term, proving that the oscillation plane rotates clockwise (in the Northern hemisphere) at angular frequency \omega_{\text{prec}} = \Omega \sin\phi.",
        "realWorldApplication": "Inertial navigation gyroscopes: Ring laser and fiber-optic gyroscopes (FOG) in modern civil aircraft and nuclear submarines calibrate Earth's rotation vector using the exact Coriolis angular rate mechanism discovered by Léon Foucault in 1851.",
        "variables": [
            {"symbol": r"\omega_{\text{prec}}", "label": "Plane Precession Rate", "unit": "rad/s"},
            {"symbol": r"\Omega_{\text{Earth}}", "label": "Planetary Rotation Rate", "unit": "rad/s"},
            {"symbol": r"\phi", "label": "Geographic Latitude", "unit": "degrees"},
            {"symbol": r"T_{\text{prec}}", "label": "Complete Precession Period", "unit": "hours"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 8, 16],
            "timeDilation": 1.5,
            "parameters": {"latitude": 48.8, "pendulumLength": 12.0, "bobMass": 5.0},
            "description": "Foucault pendulum precessing clockwise against floor markers in rotating frame.",
            "apparatusType": "foucault_rig"
        }
    }
]

NEW_COLLISIONS = [
    {
        "id": "gravitational-slingshot-hyperbolic-assist",
        "title": "Gravitational Slingshot & Hyperbolic Orbital Assist",
        "branch": "collisions",
        "tag": "Orbital Elastic Relays",
        "difficulty": "Advanced",
        "formulaLatex": r"v_f \approx v_i + 2 v_{\text{planet}} \cos \theta, \quad \Delta E_{\text{kin}} = 2 m v_i v_{\text{planet}}",
        "summary": "Gravitational encounter modeled as an elastic collision between a small spacecraft and a massive moving celestial body. In the planet's frame speed is invariant, but in the heliocentric frame momentum transfer grants massive velocity boost.",
        "derivation": r"Let a spacecraft of mass m approach a planet of mass M \gg m moving at heliocentric velocity \mathbf{V}_P. Transform into the planet-centric frame: initial relative velocity is \mathbf{u}_i = \mathbf{v}_i - \mathbf{V}_P. The hyperbolic flyby is governed purely by conservative gravitational force; by energy conservation in the planet's rest frame, the exit speed equals the entrance speed: |\mathbf{u}_f| = |\mathbf{u}_i| = u. The trajectory is deflected by angle \delta = 2 \arcsin\left(\frac{1}{1 + \frac{r_p u^2}{G M}}\right). Transforming back into the heliocentric rest frame: \mathbf{v}_f = \mathbf{u}_f + \mathbf{V}_P. For a head-on encounter where the deflection rotates \mathbf{u} by 180 degrees (\mathbf{u}_f = -\mathbf{u}_i = \mathbf{V}_P - \mathbf{v}_i): \mathbf{v}_f = (\mathbf{V}_P - \mathbf{v}_i) + \mathbf{V}_P = 2\mathbf{V}_P - \mathbf{v}_i. For approaching from behind, the spacecraft gains up to \Delta v = 2 V_P, transferring planetary orbital momentum.",
        "realWorldApplication": "Interplanetary trajectory design: NASA's Cassini mission utilized two Venus assists, one Earth assist, and one Jupiter assist to reach Saturn without requiring an impossibly large launch booster; Voyager 2 visited Jupiter, Saturn, Uranus, and Neptune.",
        "variables": [
            {"symbol": r"v_f", "label": "Final Heliocentric Speed", "unit": "km/s"},
            {"symbol": r"v_i", "label": "Initial Heliocentric Speed", "unit": "km/s"},
            {"symbol": r"v_{\text{planet}}", "label": "Orbital Velocity of Planet", "unit": "km/s"},
            {"symbol": r"\delta", "label": "Hyperbolic Turn Angle", "unit": "rad"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 12, 22],
            "timeDilation": 1.0,
            "parameters": {"planetMass": 80.0, "planetSpeed": 6.0, "probeSpeed": 3.0},
            "description": "Probe entering moving planet's gravitational well receiving +2V momentum assist.",
            "apparatusType": "gravity_assist_arena"
        }
    },
    {
        "id": "relativistic-momentum-conservation",
        "title": "Relativistic Collisions & 4-Momentum Conservation",
        "branch": "collisions",
        "tag": "High-Energy Collisions",
        "difficulty": "Advanced",
        "formulaLatex": r"P^\mu = \left(\frac{E}{c}, \mathbf{p}\right), \quad \sum P^\mu_{\text{initial}} = \sum P^\mu_{\text{final}}, \quad E^2 = (pc)^2 + (m_0 c^2)^2",
        "summary": "In relativistic kinematics near lightspeed c, energy and linear momentum combine into invariant four-momentum vectors P^mu whose sum is strictly conserved in all Lorentz frames, enabling mass-energy conversion.",
        "derivation": r"In special relativity, the four-momentum is defined as P^\mu = m_0 U^\mu = (\gamma m_0 c, \gamma m_0 \mathbf{v}) = (E/c, \mathbf{p}), where \gamma = 1/\sqrt{1 - v^2/c^2}. The Minkowski norm is a Lorentz invariant scalar: P^\mu P_\mu = -(E/c)^2 + \mathbf{p}^2 = -(m_0 c)^2, yielding the relativistic energy-momentum invariant E^2 = (pc)^2 + (m_0 c^2)^2. For an inelastic collision where particles 1 and 2 merge to form composite particle 3: P_1^\mu + P_2^\mu = P_3^\mu. The invariant mass of the resulting particle is M_3^2 c^2 = -(P_1^\mu + P_2^\mu)^2 = m_1^2 c^2 + m_2^2 c^2 + 2\left(\frac{E_1 E_2}{c^2} - \mathbf{p}_1 \cdot \mathbf{p}_2\right). In the center-of-momentum frame where \mathbf{p}_1 + \mathbf{p}_2 = \mathbf{0}, the threshold center-of-mass energy \sqrt{s} = E_1 + E_2 is directly available for particle creation.",
        "realWorldApplication": "Collider physics: CERN's Large Hadron Collider collides protons at 13.6 TeV center-of-mass energy, transforming kinetic momentum directly into rest mass to discover massive bosons (Higgs, W/Z).",
        "variables": [
            {"symbol": r"P^\mu", "label": "Four-Momentum Vector", "unit": "kg·m/s"},
            {"symbol": "E", "label": "Total Relativistic Energy", "unit": "J or GeV"},
            {"symbol": r"m_0", "label": "Invariant Rest Mass", "unit": "kg"},
            {"symbol": "c", "label": "Speed of Light", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 8, 16],
            "timeDilation": 0.5,
            "parameters": {"gammaFactor": 2.5, "restMass": 1.0},
            "description": "Relativistic particle impact demonstrating velocity saturation and mass conversion.",
            "apparatusType": "relativistic_chamber"
        }
    },
    {
        "id": "angular-impulse-momentum-theorem",
        "title": "Angular Impulse & Rigid Body Impact Torque",
        "branch": "collisions",
        "tag": "Rotational Collisions",
        "difficulty": "Intermediate",
        "formulaLatex": r"\mathbf{J}_\theta = \int_{t_1}^{t_2} \boldsymbol{\tau}_{\text{ext}}(t)\,dt = \mathbf{I}\boldsymbol{\omega}_2 - \mathbf{I}\boldsymbol{\omega}_1 = \mathbf{r} \times \mathbf{J}_{\text{linear}}",
        "summary": "An off-center impulsive collision generates both a linear impulse changing center-of-mass translation and an angular impulse changing rigid body rotational spin about the moment of inertia tensor.",
        "derivation": r"Euler's rotational equation of motion is \boldsymbol{\tau}_{\text{net}} = \frac{d\mathbf{L}}{dt} = \frac{d(\mathbf{I}\boldsymbol{\omega})}{dt}. Integrating over the collision duration \Delta t = t_2 - t_1: \int_{t_1}^{t_2} \boldsymbol{\tau}_{\text{net}}\,dt = \mathbf{L}(t_2) - \mathbf{L}(t_1) = \mathbf{I}\boldsymbol{\omega}_2 - \mathbf{I}\boldsymbol{\omega}_1. For an off-center contact force \mathbf{F}(t) applied at displacement vector \mathbf{r} from the center of mass, torque is \boldsymbol{\tau} = \mathbf{r} \times \mathbf{F}(t). Because \mathbf{r} remains essentially constant over the sub-millisecond impact interval: \mathbf{J}_\theta = \int_{t_1}^{t_2} (\mathbf{r} \times \mathbf{F})\,dt = \mathbf{r} \times \int_{t_1}^{t_2} \mathbf{F}\,dt = \mathbf{r} \times \mathbf{J}_{\text{linear}}. Combining this with linear momentum conservation \mathbf{J} = m(\mathbf{v}_2 - \mathbf{v}_1) completely determines post-impact rotational and translational states.",
        "realWorldApplication": "Automotive crash reconstruction and sports biomechanics: Off-center vehicle collisions induce violent yaw spin calculated via angular impulse; golf club head sweet-spot impacts eliminate shaft twisting.",
        "variables": [
            {"symbol": r"\mathbf{J}_\theta", "label": "Angular Impulse Vector", "unit": "N·m·s"},
            {"symbol": r"\mathbf{I}", "label": "Moment of Inertia Tensor", "unit": "kg·m²"},
            {"symbol": r"\boldsymbol{\omega}", "label": "Angular Velocity Vector", "unit": "rad/s"},
            {"symbol": r"\mathbf{r}", "label": "Impact Lever Arm Vector", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 8, 16],
            "timeDilation": 1.0,
            "parameters": {"barLength": 4.0, "impactOffset": 1.5, "bulletSpeed": 8.0},
            "description": "High-speed projectile striking free floating rod off-center, initiating spin and drift.",
            "apparatusType": "angular_impact_rig"
        }
    },
    {
        "id": "viscoelastic-collision-damping",
        "title": "Viscoelastic Collisions & Contact Damping",
        "branch": "collisions",
        "tag": "Hertzian Contact",
        "difficulty": "Advanced",
        "formulaLatex": r"F_{\text{contact}} = k x^{3/2} + \lambda x^{3/2} \dot{x} \implies e(v_0) \approx 1 - c\, v_0^{1/5}",
        "summary": "Real-world solid collisions deviate from constant coefficient of restitution e. Hertzian elastic contact combined with internal material viscous dissipation shows restitution decays systematically at higher impact velocities.",
        "derivation": r"Hertz contact theory for two elastic spheres shows non-linear elastic restoring force F_{\text{elastic}} = k x^{3/2}, where indentation is x = R_1 + R_2 - d and stiffness k = \frac{4}{3}E^* \sqrt{R^*}. Kuwabara and Kono added dissipative internal friction damping: F = k x^{3/2} + \lambda x^{3/2} \dot{x}, where \lambda is the material viscosity parameter. The equation of relative motion during contact is m^* \ddot{x} + k x^{3/2} + \lambda x^{3/2} \dot{x} = 0. Integrating the energy loss \Delta E = \int \lambda x^{3/2} \dot{x}^2 dt over the compression and rebound cycle via perturbation analysis yields the fractional energy dissipation \frac{\Delta E}{E_0} \propto v_0^{1/5}. Since e = \sqrt{E_{\text{rebound}} / E_0} = \sqrt{1 - \Delta E/E_0} \approx 1 - \frac{1}{2}\frac{\Delta E}{E_0}, the coefficient of restitution follows e(v_0) \approx 1 - c v_0^{1/5}.",
        "realWorldApplication": "Aerospace docking mechanisms and seismic isolation: Spacecraft docking collars incorporate tuned viscoelastic elastomeric bumpers to prevent rebounding and lock docking latches reliably on first contact.",
        "variables": [
            {"symbol": r"F_{\text{contact}}", "label": "Normal Contact Force", "unit": "N"},
            {"symbol": "x", "label": "Surface Indentation Depth", "unit": "m"},
            {"symbol": "k", "label": "Hertzian Contact Stiffness", "unit": "N/m^(3/2)"},
            {"symbol": r"e(v_0)", "label": "Velocity-Dependent Restitution", "unit": "dimensionless"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 6, 14],
            "timeDilation": 0.8,
            "parameters": {"viscosityCoeff": 0.15, "hertzK": 120.0},
            "description": "Viscoelastic sphere bouncing with velocity-dependent energy dissipation.",
            "apparatusType": "viscoelastic_drop_test"
        }
    },
    {
        "id": "granular-cooling-haffs-law",
        "title": "Granular Gas Collisions & Haff's Cooling Law",
        "branch": "collisions",
        "tag": "Statistical Collisions",
        "difficulty": "Advanced",
        "formulaLatex": r"T_g(t) = \frac{T_0}{\left(1 + \frac{t}{\tau_0}\right)^2}, \quad \tau_0 = \frac{2\sqrt{\pi} d}{3(1-e^2)\sqrt{T_0/m}}",
        "summary": "In an unforced assembly of macroscopic particles undergoing inelastic collisions (granular gas), kinetic temperature T_g decays algebraically with time according to Haff's cooling law, leading to spontaneous spatial clustering.",
        "derivation": r"In a granular gas of spherical grains with mass m, diameter d, and restitution e < 1, the granular temperature is defined by random velocity variance: \frac{3}{2} T_g = \frac{1}{2}m \langle v^2 \rangle. In each binary collision, the fractional energy lost is \Delta E_{\text{coll}} = \frac{1-e^2}{4} m v_{\text{rel}}^2. The collision frequency per particle in Enskog kinetic theory is \omega_{\text{coll}} \approx 4 n d^2 \chi \sqrt{\pi T_g/m}, where n is number density and \chi is the pair correlation function. The time rate of change of granular energy density is \frac{d}{dt}\left(\frac{3}{2} n T_g\right) = -\frac{1}{2} n \omega_{\text{coll}} \langle \Delta E_{\text{coll}} \rangle = -\frac{3}{2} n \frac{T_g}{\tau(T_g)}, where \tau(T_g) \propto T_g^{-1/2}. This yields the differential equation \frac{dT_g}{dt} = -A T_g^{3/2}. Separating variables: \int_{T_0}^{T_g} T^{-3/2} dT = -A t \implies -2(T_g^{-1/2} - T_0^{-1/2}) = -A t. Rearranging yields Haff's law: T_g(t) = T_0 / (1 + t/\tau_0)^2.",
        "realWorldApplication": "Protoplanetary accretion and planetary ring dynamics: In Saturn's rings and pre-solar dust clouds, granular cooling drives localized density clustering that triggers planetesimal gravitational collapse.",
        "variables": [
            {"symbol": r"T_g(t)", "label": "Granular Kinetic Temperature", "unit": "J or m²/s²"},
            {"symbol": "e", "label": "Grain Restitution Coefficient", "unit": "dimensionless"},
            {"symbol": r"\tau_0", "label": "Characteristic Inelastic Cooling Time", "unit": "s"},
            {"symbol": "d", "label": "Particle Diameter", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 10, 18],
            "timeDilation": 1.0,
            "parameters": {"numGrains": 24, "restitution": 0.82, "initialVelocity": 5.0},
            "description": "24 inelastic particles in container cooling down and forming dense clusters.",
            "apparatusType": "granular_gas_box"
        }
    }
]

print("Mechanics and Collisions definitions ready.")
