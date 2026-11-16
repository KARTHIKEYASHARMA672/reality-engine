import { GuidedLabExperiment } from '../types/physics';

export const GUIDED_LABS: GuidedLabExperiment[] = [
  {
    id: 'lab-cavendish',
    title: 'Cavendish Torsion Balance',
    subtitle: 'Measurement of the Universal Gravitational Constant G',
    domain: 'mechanics',
    historicalContext: 'In 1798, Henry Cavendish built a delicate torsion balance to measure the weak gravitational attraction between lead spheres, allowing humanity to "weigh the Earth".',
    scientificObjective: 'Observe mutual gravitational deflection between heavy attractor masses and light test masses, calculating G from deflection angle and oscillation period.',
    theoreticalFormula: 'F = G \\frac{m_1 m_2}{r^2}',
    procedureSteps: [
      'Load the Cavendish apparatus with two 5.0 kg lead spheres and two 0.5 kg test spheres.',
      'Release the torsion fiber from rest and observe initial displacement toward the attractors.',
      'Track the damped harmonic oscillation period of the torsion arm.',
      'Vary the distance r between attractor spheres and record force scaling (1/r²).'
    ],
    expectedOutcome: 'The test masses oscillate toward the large attractors, confirming inverse-square attraction without external mechanical contact.',
    presetConceptId: 'mech-cavendish'
  },
  {
    id: 'lab-rutherford',
    title: 'Rutherford Alpha Particle Scattering',
    subtitle: 'Discovery of the Atomic Nucleus & Coulomb Deflection',
    domain: 'modern',
    historicalContext: 'In 1911, Ernest Rutherford, Hans Geiger, and Ernest Marsden fired alpha particles at thin gold foil and observed backward ricochets, disproving the Thomson plum pudding model.',
    scientificObjective: 'Simulate high-velocity charged alpha particles (+2e) fired at a massive positive gold nucleus (+79e) and measure scattering angle as a function of impact parameter b.',
    theoreticalFormula: '\\cot\\left(\\frac{\\theta}{2}\\right) = \\frac{2\\pi \\varepsilon_0 m v^2 b}{z Z e^2}',
    procedureSteps: [
      'Position the central heavy positive nucleus (+79e) at origin.',
      'Fire a collimated beam of alpha particles (+2e) with varying vertical impact parameters b.',
      'Observe trajectory hyperbolas and large-angle deflection when b < 0.5.',
      'Verify that alpha particles with direct head-on trajectories reverse direction completely (180° backscattering).'
    ],
    expectedOutcome: 'Most particles experience small deflections, but close-proximity trajectories scatter at extreme angles, demonstrating point-like nuclear mass concentration.',
    presetConceptId: 'modern-rutherford'
  },
  {
    id: 'lab-cyclotron',
    title: 'Lorentz Magnetic Cyclotron',
    subtitle: 'Relativistic Particle Spiraling & Magnetic Resonant Acceleration',
    domain: 'electromagnetism',
    historicalContext: 'Invented by Ernest Lawrence in 1932, the cyclotron uses a perpendicular magnetic field to bend charged particles into circular orbits while an alternating electric field accelerates them.',
    scientificObjective: 'Demonstrate circular trajectory radius r = mv / (qB) and verify that orbital period T = 2πm / (qB) remains independent of velocity in non-relativistic regimes.',
    theoreticalFormula: 'r = \\frac{m v}{q B}, \\quad f_c = \\frac{q B}{2\\pi m}',
    procedureSteps: [
      'Engage a uniform magnetic field B_z = 2.5 Tesla perpendicular to the laboratory plane.',
      'Inject a stream of positive charges (q = +1.0 μC, m = 1.0 kg) with initial tangential velocity v_x = 4.0 m/s.',
      'Observe stable circular orbit with radius r = 1.60 m.',
      'Increase particle velocity to 8.0 m/s and verify that radius doubles to 3.20 m while orbital frequency remains constant.'
    ],
    expectedOutcome: 'Charges execute uniform circular motion with magnetic Lorentz force acting purely centripetally, doing zero work on the particle.',
    presetConceptId: 'em-lorentz'
  },
  {
    id: 'lab-double-pendulum',
    title: 'Double Pendulum Chaotic Attractor',
    subtitle: 'Deterministic Chaos & Extreme Sensitivity to Initial Conditions',
    domain: 'mechanics',
    historicalContext: 'The double pendulum is the quintessential model of non-linear deterministic chaos. Governed by coupled Euler-Lagrange equations, two identical setups diverge exponentially.',
    scientificObjective: 'Release two nearly identical double pendulums (initial angle difference Δθ = 0.001 rad) and observe the Lyapunov exponent horizon where trajectories diverge chaotically.',
    theoreticalFormula: '\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{\\theta}_i}\\right) - \\frac{\\partial L}{\\partial \\theta_i} = 0',
    procedureSteps: [
      'Suspend two linked articulated pendulum arms from a rigid ceiling pivot.',
      'Set initial angles θ1 = 90° and θ2 = 90° and release from zero initial angular velocity.',
      'Observe regular motion at low amplitudes transitioning to unpredictable geometric loop-de-loops at high energy.',
      'Inspect the phase-space trajectory (θ vs ω) to see strange attractor topology.'
    ],
    expectedOutcome: 'The pendulum displays complex, non-repeating trajectories with total mechanical energy strictly conserved throughout the motion.',
    presetConceptId: 'mech-double-pendulum'
  },
  {
    id: 'lab-newtons-cradle',
    title: "Newton's Cradle Momentum Relay",
    subtitle: 'Conservation of Linear Momentum and Kinetic Energy in Elastic Chains',
    domain: 'collisions',
    historicalContext: 'Demonstrated by Edme Mariotte and named after Isaac Newton, this 5-sphere suspension illustrates how momentum propagates through adjacent elastic bodies.',
    scientificObjective: 'Verify that releasing k spheres from height h causes exactly k spheres to eject from the opposite end at identical velocity, validating simultaneous conservation of p and KE.',
    theoreticalFormula: '\\sum m_i \\mathbf{v}_i = \\sum m_i \\mathbf{v}_f, \\quad \\sum \\frac{1}{2}m_i v_i^2 = \\sum \\frac{1}{2}m_i v_f^2',
    procedureSteps: [
      'Align 5 identical steel spheres (restitution e = 0.98) in contact along a horizontal line.',
      'Displace 1 sphere to the left by 3.0 meters and release from rest.',
      'Observe momentum transfer: middle 3 spheres remain stationary while the rightmost sphere ejects with full initial velocity.',
      'Test multi-sphere release (pull 2 spheres) and observe 2 spheres ejecting from the opposite side.'
    ],
    expectedOutcome: 'Energy and momentum pulse sequentially through the chain with near-zero energy loss, demonstrating wave-like collision impulse transfer.',
    presetConceptId: 'coll-newtons-cradle'
  },
  {
    id: 'lab-archimedes',
    title: "Archimedes' Buoyancy & Density Balance",
    subtitle: 'Hydrostatic Lift, Fluid Displacement, and Flotation Criteria',
    domain: 'fluids',
    historicalContext: 'Discovered in Syracuse around 250 BC when Archimedes stepped into a full bath, formulating the law that any floating or submerged body is buoyed up by the weight of fluid displaced.',
    scientificObjective: 'Submerge spheres of varying material densities (Wood: 600 kg/m³, Water: 1000 kg/m³, Aluminum: 2700 kg/m³) and measure buoyant equilibrium and submerged volume fraction.',
    theoreticalFormula: 'F_b = \\rho_{\\text{fluid}} V_{\\text{submerged}} g, \\quad \\frac{V_{\\text{sub}}}{V} = \\frac{\\rho_{\\text{body}}}{\\rho_{\\text{fluid}}}',
    procedureSteps: [
      'Fill the virtual laboratory fluid chamber with water (ρ = 1000 kg/m³).',
      'Drop a lightweight sphere (ρ = 500 kg/m³) from height y = 6.0 m into the fluid.',
      'Observe deceleration upon water entry, oscillation around equilibrium depth, and stable flotation at 50% submerged depth.',
      'Drop a dense metal sphere (ρ = 2500 kg/m³) and observe terminal sinking velocity governed by Stokes drag.'
    ],
    expectedOutcome: 'Low-density bodies float with submerged fraction equal to density ratio, while heavy bodies settle to the container bottom with reduced net downward weight.',
    presetConceptId: 'fluid-archimedes'
  },
  {
    id: 'lab-thomson-em',
    title: "J.J. Thomson's e/m Charge-to-Mass Ratio",
    subtitle: 'Cathode Rays, Crossed Fields & Discovery of the Electron',
    domain: 'electromagnetism',
    historicalContext: 'In 1897, J.J. Thomson measured the deflection of cathode rays under crossed electric and magnetic fields, proving electrons were subatomic particles with immense charge-to-mass ratio.',
    scientificObjective: 'Balance electric force F_E = qE against magnetic force F_B = qvB to create an undeflected velocity selector (v = E/B), then remove E to measure circular radius r and compute e/m.',
    theoreticalFormula: '\\frac{q}{m} = \\frac{E}{r B^2}, \\quad v = \\frac{E}{B}',
    procedureSteps: [
      'Inject charged particles between parallel plates with downward electric field E_y = -100 N/C.',
      'Apply perpendicular magnetic field B_z = 2.0 T to create upward magnetic force.',
      'Fine-tune particle velocity until electric and magnetic forces cancel (v = 50 m/s), yielding zero net deflection.',
      'Switch off electric field E and measure circular deflection radius r to deduce specific charge q/m.'
    ],
    expectedOutcome: 'Crossed fields filter particles of a specific velocity, and subsequent magnetic bending allows exact calculation of q/m.',
    presetConceptId: 'em-thomson'
  },
  {
    id: 'lab-inelastic-impact',
    title: 'Inelastic Collisions & Kinetic Energy Dissipation',
    subtitle: 'Momentum Conservation vs. Thermal Energy Conversion',
    domain: 'collisions',
    historicalContext: 'From automotive crumple zones to meteorite impacts, inelastic collisions illustrate how total linear momentum is preserved while mechanical kinetic energy converts into heat and deformation.',
    scientificObjective: 'Simulate head-on impacts with coefficient of restitution e = 0.0 (perfectly inelastic) and measure kinetic energy loss ΔE as a function of mass ratio.',
    theoreticalFormula: '\\Delta E_k = \\frac{1}{2}\\frac{m_1 m_2}{m_1 + m_2}(v_1 - v_2)^2 (1 - e^2)',
    procedureSteps: [
      'Place two bodies of masses m1 = 4.0 kg and m2 = 2.0 kg moving toward each other at v1 = +3 m/s and v2 = -3 m/s.',
      'Set restitution coefficient e = 0.0.',
      'Trigger collision and observe sticking together into a combined mass of 6.0 kg moving at v_f = +1.0 m/s.',
      'Check the Telemetry Deck: verify that linear momentum is 100% conserved (+6 kg·m/s) while kinetic energy drops, converting into thermal dissipation.'
    ],
    expectedOutcome: 'Bodies coalesce after impact with final velocity determined by momentum conservation, with maximum possible kinetic energy dissipated.',
    presetConceptId: 'coll-inelastic'
  },
  {
    id: 'lab-kepler-orbits',
    title: 'Keplerian Planetary Orbits & Gravitational Lensing',
    subtitle: 'Elliptical Orbits, Equal Areas in Equal Times & Escape Velocity',
    domain: 'mechanics',
    historicalContext: 'Formulated by Johannes Kepler in 1609 from Tycho Brahe’s observations, Kepler’s three laws laid the foundation for Newton’s Universal Gravitation.',
    scientificObjective: 'Simulate a satellite orbiting a central star and demonstrate that orbits are ellipses with the star at one focus, confirming that areal velocity dA/dt is constant.',
    theoreticalFormula: 'T^2 = \\frac{4\\pi^2}{G M} a^3, \\quad v_{\\text{esc}} = \\sqrt{\\frac{2 G M}{r}}',
    procedureSteps: [
      'Anchor a massive central star (M = 100 kg) at origin with zero velocity.',
      'Spawn an orbiting planet at distance r = 5.0 m with tangential velocity v = 3.65 m/s (circular orbit).',
      'Increase orbital velocity to 4.5 m/s to observe an eccentric Keplerian ellipse with perihelion and aphelion.',
      'Push velocity above escape threshold (v > v_esc = 5.16 m/s) to observe a hyperbolic escape trajectory.'
    ],
    expectedOutcome: 'The planet accelerates at perihelion and decelerates at aphelion, sweeping out equal areas in equal time intervals.',
    presetConceptId: 'mech-kepler'
  }
];
