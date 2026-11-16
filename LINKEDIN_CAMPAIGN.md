# 🚀 REALITY ENGINE — Official LinkedIn Launch Campaign
### 10-Day Multi-Phase Social Campaign Matrix, Image Assets & Post Copy

> **Project:** REALITY ENGINE — Physics-Based Virtual Laboratory  
> **Live Deployment:** [https://reality-engine-orpin.vercel.app](https://reality-engine-orpin.vercel.app)  
> **GitHub Repository:** [https://github.com/KARTHIKEYASHARMA672/reality-engine](https://github.com/KARTHIKEYASHARMA672/reality-engine)  
> **Campaign Dates:** Monday, November 16, 2026 – Friday, November 27, 2026 (Mon–Fri 2-Week Cadence)  
> **Design Theme:** Classical Scientific Editorial — Wine & Warm Sandal (`#76283B` / `#F4E7D7`)

---

## 📋 Campaign Schedule & Metadata Overview

| Day / Date | Phase / Domain | Focus & Feature | Attached Image Asset | Optimal Time |
|---|---|---|---|---|
| **Day 1: Mon, Nov 16, 2026** | **Phase 1: The Reveal** | Official Launch, 3D Canvas, Orbit Simulation | `screenshots/01_reality_engine_laboratory_view.png` | 08:30 AM EST / 06:00 PM IST |
| **Day 2: Tue, Nov 17, 2026** | **Phase 2: Electromagnetism** | Lorentz Force, Magnetic Cyclotron, RK4 | `screenshots/02_lorentz_magnetic_cyclotron.png` | 09:00 AM EST / 06:30 PM IST |
| **Day 3: Wed, Nov 18, 2026** | **Phase 3: 3D Collisions** | Newton's Cradle, Restitution & Momentum | `screenshots/03_elastic_collisions_momentum_relay.png` | 08:30 AM EST / 06:00 PM IST |
| **Day 4: Thu, Nov 19, 2026** | **Phase 4: Fluid Dynamics** | Archimedes Buoyancy & Stokes Drag | `screenshots/04_archimedes_buoyancy_fluid_equilibrium.png` | 09:00 AM EST / 06:30 PM IST |
| **Day 5: Fri, Nov 20, 2026** | **Phase 5: Encyclopedia** | 120-Concept Academic Compendium | `screenshots/05_concept_compendium_120_encyclopedia.png` | 08:00 AM EST / 05:30 PM IST |
| **Day 6: Mon, Nov 23, 2026** | **Phase 6: Historic Labs** | 9 Guided Historical Lab Dossiers | `screenshots/06_guided_historic_labs_dossier.png` | 08:30 AM EST / 06:00 PM IST |
| **Day 7: Tue, Nov 24, 2026** | **Phase 7: Live Math** | Real-Time KaTeX Derivations at 60 FPS | `screenshots/07_live_katex_formula_telemetry.png` | 09:00 AM EST / 06:30 PM IST |
| **Day 8: Wed, Nov 25, 2026** | **Phase 8: EdTech / Reports**| Formal Lab Observation Report Generator | `screenshots/08_laboratory_observation_report.png` | 08:30 AM EST / 06:00 PM IST |
| **Day 9: Thu, Nov 26, 2026** | **Phase 9: Thermodynamics** | Kinetic Gas Chamber & Moving Piston | `screenshots/09_thermal_kinetic_gas_chamber.png` | 09:00 AM EST / 06:30 PM IST |
| **Day 10: Fri, Nov 27, 2026**| **Phase 10: Quantum Waves** | Double-Slit Diffraction & Relativistic c | `screenshots/10_quantum_matter_wave_diffraction.png` | 08:00 AM EST / 05:30 PM IST |

---

## 📌 Post-by-Post Campaign Assets & Copy

---

### 📅 Day 1 — Monday, November 16, 2026 (08:30 AM EST / 06:00 PM IST)
#### **Line:** The Grand Launch — "Textbooks Are Static. Physics Is Not."
* **Attached Image:** `screenshots/01_reality_engine_laboratory_view.png`
* **Image Alt Text:** Three.js WebGL2 3D virtual physics laboratory interface showing celestial orbits, parameter tuning deck, and real-time telemetry graphs in a warm editorial palette.

#### ✍️ Post Copy:
```text
Textbooks are static. Physics is not.

For centuries, students and researchers have been asked to understand celestial mechanics, electromagnetic fields, and kinetic thermodynamics through flat two-dimensional sketches on dead chalkboards.

Today, we are launching REALITY ENGINE — a full-featured, zero-install, 3D virtual physics laboratory running entirely in your browser.

🔬 What is REALITY ENGINE?
It is a browser-native virtual physics laboratory built from the ground up to let you construct, tweak, and rigorously verify physics experiments in real time.

Highlights under the hood:
🪐 6 Core Physics Domains: Classical Mechanics & Orbits, 3D Collisions, E & B Fields, Fluid Dynamics, Thermal Gas, and Waves & Quantum Mechanics.
📐 Symplectic Velocity-Verlet Integration: Preserves orbital phase space and total energy (ΔE/E < 0.005) over long celestial integrations.
⚡ Live KaTeX Telemetry: Mathematical derivations that evaluate and substitute active simulation variables at 60 FPS.
🎛️ Real-Time Parameter Rack: Tweak G, vacuum permittivity ε₀, magnetic permeability μ₀, fluid density, temperature, and restitution coefficients on the fly.
📚 120 Academic Concepts with 1-Click Setups: Instantly test any theoretical concept in the 3D viewport.

No sci-fi neon gimmicks. Designed in a refined scientific editorial aesthetic inspired by classical laboratory apparatuses (Wine & Warm Sandal).

Experience it live in your browser (no sign-up required):
🔗 Live Lab: https://reality-engine-orpin.vercel.app
📦 GitHub (Open Source): https://github.com/KARTHIKEYASHARMA672/reality-engine

I’d love to hear your thoughts — what was your favorite physics experiment in university?

#Physics #Threejs #WebGL #EdTech #OpenSource #React #TypeScript #WebDev #Simulation #Science
```

* **First Comment to Pin:**
```text
Built with React 19, TypeScript 5.8+, Vite 6, Tailwind CSS, Three.js WebGL2, and KaTeX. Fully open source under the MIT License! Star the repo or submit your favorite physics experiment preset: https://github.com/KARTHIKEYASHARMA672/reality-engine
```

---

### 📅 Day 2 — Tuesday, November 17, 2026 (09:00 AM EST / 06:30 PM IST)
#### **Line:** Electromagnetism Deep Dive — "Why Do Magnetic Fields Do Zero Work?"
* **Attached Image:** `screenshots/02_lorentz_magnetic_cyclotron.png`
* **Image Alt Text:** 3D magnetic cyclotron simulation showing an electron's helical trajectory inside a uniform B-field with real-time vector field needles.

#### ✍️ Post Copy:
```text
Why does a magnetic field bend an electron into a tight spiral, yet do exactly zero work on it? ⚡🧲

In vector physics:
F = q(E + v × B)

Because the magnetic force F_B is perpendicular to the particle velocity vector v (via the cross product), the dot product F_B · v = 0. The kinetic energy remains strictly invariant; only the direction of momentum rotates.

In REALITY ENGINE, we didn't approximate this with standard Euler integration (which quickly spirals out of control and violates energy conservation). 

Instead, we implemented a 4th-Order Runge-Kutta (RK4) numerical integrator specifically for Lorentz electrodynamics:
🔹 Real-time calculation of cyclotron radius: r = m*v_perp / (|q|*B)
🔹 Live cyclotron gyrofrequency: ω_c = |q|*B / m
🔹 Crossed-field E × B velocity filtering (Thomson e/m apparatus)
🔹 3D vector needles rendering the spatial field topology in WebGL

Whether you want to fire positrons into a 1.2 Tesla magnetic field or balance electric and magnetic deflections, you can observe the exact physics unfold live at 60 frames per second.

Try the Lorentz Cyclotron experiment directly:
👉 https://reality-engine-orpin.vercel.app

#Electromagnetism #Physics #STEM #Engineering #Mathematics #WebGL #WebDevelopment #DataVisualization
```

* **First Comment to Pin:**
```text
Check out how the RK4 integrator is structured in `src/physics/solvers/lorentzSolver.ts`: https://github.com/KARTHIKEYASHARMA672/reality-engine
```

---

### 📅 Day 3 — Wednesday, November 18, 2026 (08:30 AM EST / 06:00 PM IST)
#### **Line:** 3D Collisions & Momentum — "Continuous Collision Detection in 3D WebGL"
* **Attached Image:** `screenshots/03_elastic_collisions_momentum_relay.png`
* **Image Alt Text:** Newton's Cradle momentum relay apparatus demonstrating elastic collision velocity exchange in 3D.

#### ✍️ Post Copy:
```text
Newton’s Cradle is deceptively simple — until you try to simulate it accurately in a 3D browser viewport. 🎱

In discrete physics engines, high-speed spheres suffer from "tunneling" — passing right through one another between frames. Furthermore, floating-point rounding errors bleed kinetic energy, turning an elastic collision into a sluggish mess.

In REALITY ENGINE, we built a Continuous Impulse-Momentum Solver that models:
✅ Exact Line-of-Centers Velocity Decomposition: Projecting velocities onto normal and tangential collision planes.
✅ Restitution Tuning (e ∈ [0, 1]): Switch seamlessly from perfectly elastic kinetic conservation (e = 1.0) to inelastic clay-like plastic deformation (e = 0.05).
✅ Energy Dissipation Accounting: The engine computes ΔE_lost = KE_initial - KE_final per collision event and streams it to the telemetry HUD.
✅ Newton's Cradle Momentum Relay: Demonstrating instantaneous momentum transfer across identical mass spheres.

Watch the balls bounce, deform, and exchange momentum with mathematical fidelity:
🔗 https://reality-engine-orpin.vercel.app

#GameDev #PhysicsEngine #JavaScript #Threejs #ComputerScience #Mechanics #EdTech
```

---

### 📅 Day 4 — Thursday, November 19, 2026 (09:00 AM EST / 06:30 PM IST)
#### **Line:** Fluid Dynamics & Hydrostatics — "Archimedes' Principle at 60 FPS"
* **Attached Image:** `screenshots/04_archimedes_buoyancy_fluid_equilibrium.png`
* **Image Alt Text:** Hydrostatic fluid immersion tank in REALITY ENGINE showing floating wood blocks, submerged lead spheres, and buoyant equilibrium forces.

#### ✍️ Post Copy:
```text
Eureka! 🌊

Legend has it that Archimedes stepped into a bath in Syracuse, noticed the water displaced, and shouted "Eureka!" as he realized that the buoyant force equals the weight of the displaced liquid.

In REALITY ENGINE, we brought hydrostatics and fluid resistance into an interactive 3D WebGL immersion tank:

🧪 What the simulation calculates:
1. Archimedes Buoyant Force: F_b = -ρ_fluid * V_submerged * g
2. Stokes Viscous Drag: F_drag = -6 * π * η * r * v
3. Dynamic Submersion Depth: As density ratios (ρ_obj / ρ_fluid) vary, objects smoothly transition between surface flotation, neutral equilibrium, and terminal sinking.
4. Smoothed Particle Hydrodynamics (SPH): Simulating fluid droplet surface tension and splash relaxation.

You can drop a block of balsa wood (400 kg/m³), an aluminum cylinder (2700 kg/m³), or a dense lead weight (11340 kg/m³) into water, glycerin, or mercury — and inspect the exact buoyant equilibrium forces live.

Test fluid dynamics in your browser:
🔗 https://reality-engine-orpin.vercel.app

#FluidDynamics #Physics #STEM #Engineering #Threejs #WebDev #ScientificComputing
```

---

### 📅 Day 5 — Friday, November 20, 2026 (08:00 AM EST / 05:30 PM IST)
#### **Line:** The Academic Compendium — "120 Deep Physics Concepts at Your Fingertips"
* **Attached Image:** `screenshots/05_concept_compendium_120_encyclopedia.png`
* **Image Alt Text:** The 120-Concept Academic Compendium modal in REALITY ENGINE displaying categorized physics theorems with 1-click testable 3D simulation setups.

#### ✍️ Post Copy:
```text
Most virtual physics apps provide 3 toy sliders and call it a day.

We wanted to build an academic encyclopedia that you can actually interact with.

Introducing the REALITY ENGINE Concept Compendium:
Exactly 120 deep, fully derived university-grade physics concepts organized across 6 core branches:
🔹 22 Classical Mechanics & Orbital Gravity Concepts
🔹 20 Momentum, Collisions & Conservation Laws
🔹 24 Electromagnetism & Field Theory Concepts
🔹 19 Fluid Dynamics & Hydrostatic Principles
🔹 16 Thermodynamics & Kinetic Theory Laws
🔹 19 Modern, Relativistic & Quantum Mechanics Principles

Every single concept includes:
📖 Formal Definition & Historical Context
📐 Full Mathematical Derivations formatted with KaTeX
🔬 1-Click Interactive 3D Simulation Setup: Click "Load Setup into 3D Lab" and the engine automatically spawns the apparatus, tunes the variables, and runs the experiment!

Whether you're brushing up on Lagrangian points, the Meissner effect, Carnot cycle efficiency, or Compton scattering, it’s all indexed and searchable.

Explore the complete compendium live:
🔗 https://reality-engine-orpin.vercel.app

#Education #EdTech #HigherEducation #Physics #OpenSource #Learning #WebDevelopment
```

---

### 📅 Day 6 — Monday, November 23, 2026 (08:30 AM EST / 06:00 PM IST)
#### **Line:** Guided Historical Labs — "Recreate Physics History from Your Desk"
* **Attached Image:** `screenshots/06_guided_historic_labs_dossier.png`
* **Image Alt Text:** Guided historic lab dossier modal showing Cavendish Torsion Balance experiment setup, apparatus background, and objective steps.

#### ✍️ Post Copy:
```text
How did Henry Cavendish "weigh the Earth" in 1798 using two small lead balls and a wire? ⚖️🌍

Historically, breakthroughs in physics came from ingenious physical apparatus designs that pushed the limits of measurement.

In REALITY ENGINE, we built 9 Guided Historic Lab Dossiers that walk you through humanity's most pivotal experiments step by step:

1️⃣ The Cavendish Torsion Balance (1798) — Measuring the Gravitational Constant G
2️⃣ Rutherford Alpha Particle Scattering (1911) — Discovery of the Atomic Nucleus
3️⃣ Lawrence Magnetic Cyclotron (1932) — Helical Particle Resonance
4️⃣ The Double Pendulum — Deterministic Chaos & Sensitive Dependence
5️⃣ Newton's Cradle (1676) — Momentum Conservation & Elastic Relays
6️⃣ Archimedes Buoyancy Immersion Tank (c. 250 BC) — Hydrostatic Density
7️⃣ J.J. Thomson e/m Ratio (1897) — Crossed-Field Velocity Filter
8️⃣ High-Velocity Inelastic Impact — Kinetic Energy Dissipation
9️⃣ Keplerian Planetary Orbits — Heliocentric Orbital Resonance

Each dossier provides historical background, apparatus diagrams, step-by-step experiment instructions, and expected observation criteria.

Step into the shoes of history’s greatest experimentalists:
🔗 https://reality-engine-orpin.vercel.app

#HistoryOfScience #Physics #STEMEducation #ScientificDiscovery #Threejs #JavaScript
```

---

### 📅 Day 7 — Tuesday, November 24, 2026 (09:00 AM EST / 06:30 PM IST)
#### **Line:** Mathematical Telemetry — "Watching Equations Solve Themselves at 60 FPS"
* **Attached Image:** `screenshots/07_live_katex_formula_telemetry.png`
* **Image Alt Text:** Real-time telemetry deck showing dynamic KaTeX formula evaluation and energy conservation rolling graph.

#### ✍️ Post Copy:
```text
In most simulations, equations are static labels pasted on top of canvas drawings.

In REALITY ENGINE, the mathematics is alive. 📐⚡

We integrated real-time KaTeX formula evaluation directly into the animation loop:
Every single frame (60 FPS), the telemetry deck:
1. Samples active system parameters (masses, velocities, distances, fields, temperatures, charge).
2. Substitutes those numerical values directly into theoretical physics formulas.
3. Renders the mathematical steps and final derived quantities dynamically.
4. Plots real-time energy conservation buffers: Kinetic Energy (KE) + Potential Energy (PE) = Total Mechanical Energy (E_total).

If an orbital body falls closer to a star, you see the potential energy dip, kinetic energy spike, and orbital velocity v = √(GM/r) adjust instantaneously — with total energy preserved to 99.5%+ fidelity.

Mathematics is the language of physics. Now you can watch it speak in real time.

Try the live mathematical telemetry:
🔗 https://reality-engine-orpin.vercel.app

#KaTeX #Mathematics #Math #Physics #DataViz #FrontEnd #React #TypeScript
```

---

### 📅 Day 8 — Wednesday, November 25, 2026 (08:30 AM EST / 06:00 PM IST)
#### **Line:** Academic Auditing & Reports — "Can a Virtual Lab Issue Lab Reports?"
* **Attached Image:** `screenshots/08_laboratory_observation_report.png`
* **Image Alt Text:** Institutional Lab Observation Report dialog displaying simulation parameters, entity positions, energy audit, and export buttons.

#### ✍️ Post Copy:
```text
"If you didn't document the experiment, it never happened." 📝

One of the biggest hurdles in online STEM education is providing students with formal laboratory reporting and audit trails.

In REALITY ENGINE, we introduced the Institutional Laboratory Observation Report Generator:

Whenever you run an experiment in the 3D lab, clicking "Generate Report" instantly compiles a complete institutional observation dossier:
📄 Formal Experiment Metadata & Domain Classification
⚙️ System Configuration (G, ε₀, μ₀, fluid viscosity, temperature, restitution)
📊 Live Entity Inventory: Positions, velocity vectors, masses, and net forces
⚡ Energy Balance & Conservation Audit: Verifying ΔE and dissipated heat
🖨️ One-Click Print & PDF Export: Ready for submission in university lab courses
💾 JSON Data Telemetry Download: For programmatic analysis in Python / Jupyter notebooks

Designed specifically for physics educators, university students, and independent researchers.

Generate your own observation report today:
🔗 https://reality-engine-orpin.vercel.app

#EdTech #HigherEd #STEM #CollegePhysics #LabReport #AcademicResearch #SoftwareEngineering
```

---

### 📅 Day 9 — Thursday, November 26, 2026 (09:00 AM EST / 06:30 PM IST)
#### **Line:** Thermodynamics & Kinetic Theory — "Inside the Molecular Gas Chamber"
* **Attached Image:** `screenshots/09_thermal_kinetic_gas_chamber.png`
* **Image Alt Text:** Three.js transparent glass containment chamber with brass frame and moving piston roof, containing gas particles simulating Maxwell-Boltzmann kinetic distribution.

#### ✍️ Post Copy:
```text
What is temperature, really? 🌡️🔥

In macroscopic physics, temperature is a number on a dial.
In statistical mechanics, temperature is nothing more than the mean kinetic energy of chaotic particles colliding elastically in space:
(1/2) * m * ⟨v²⟩ = (3/2) * k_B * T

To make this intuitive, we designed a custom 3D WebGL apparatus for REALITY ENGINE:
The Thermal Kinetic Gas Chamber:
🧪 Transparent cubic glass containment cell with brass-reinforced frame edges.
🔩 Adjustable Piston Roof: Move the piston height slider to physically compress the volume (V) and watch the internal pressure (P) surge in accordance with the Ideal Gas Law: P = (N * k_B * T) / V.
💨 Maxwell-Boltzmann Velocity Rescaling: Adjust the Temperature slider (100 K to 1200 K) and see the root-mean-square speed v_rms = √(3k_B T / m) scale dynamically.
🔬 Brownian Motion Apparatus: Drop a massive colloidal particle among rapid light gas molecules and observe microscopic random walk diffusion.

See statistical thermodynamics come to life in 3D:
🔗 https://reality-engine-orpin.vercel.app

#Thermodynamics #Physics #Threejs #CreativeCoding #Simulation #Science #WebDevelopment
```

---

### 📅 Day 10 — Friday, November 27, 2026 (08:00 AM EST / 05:30 PM IST)
#### **Line:** Waves & Quantum Mechanics — "Wave-Particle Duality in Browser WebGL"
* **Attached Image:** `screenshots/10_quantum_matter_wave_diffraction.png`
* **Image Alt Text:** Quantum double-slit apparatus barrier partition and phosphorescent detector screen in REALITY ENGINE showing matter wave diffraction and relativistic Lorentz dilation.

#### ✍️ Post Copy:
```text
Is matter a particle or a wave? 🌊⚛️

In 1924, Louis de Broglie made the daring proposal that particles of matter have an associated wavelength:
λ = h / p = h / (m * v)

And in 1905, Albert Einstein showed that as velocities approach the speed of light c, time dilates and relativistic momentum scales by the Lorentz factor:
γ = 1 / √(1 - v²/c²)

In our latest update to REALITY ENGINE, we added the Waves & Quantum Mechanics simulation domain:
🎯 Dual-Aperture Double-Slit Barrier: A physical 3D partition with dual slits and a phosphorescent detector backdrop for observing matter wave diffraction patterns.
⚡ Relativistic Wave Packets: Spawn particles traveling at 0.9c and observe real-time Lorentz factor scaling in the telemetry deck.
🔬 Rutherford Alpha Scattering: Fire alpha particles (+2e) directly at a heavy Gold nucleus (+79e) and observe hyperbolic Coulomb backscattering.

From Kepler's orbits in 1609 to modern relativistic quantum mechanics, REALITY ENGINE now covers the complete arc of foundational physics.

Explore all 6 domains and 18 dedicated apparatus setups:
🔗 Live Experience: https://reality-engine-orpin.vercel.app
⭐ Star on GitHub: https://github.com/KARTHIKEYASHARMA672/reality-engine

Thank you to everyone who tested and shared feedback over this 2-week launch! Which experiment should we build next?

#QuantumMechanics #Relativity #Physics #STEM #Threejs #OpenSource #React #WebDevelopment
```

---

## 💡 Best Practices for Campaign Execution

1. **Native Image Upload:** Always attach the image file directly on LinkedIn rather than relying on external preview scrapers for 3–5x higher algorithmic reach.
2. **First Comment Technique:** Keep outbound links (GitHub, live app) in the first pinned comment as well as the post body to maximize dwell time and engagement.
3. **Engagement Window:** Reply to all comments within the first 60 minutes after posting to accelerate LinkedIn network distribution.
4. **Tag Relevant Organizations & Leaders:** Tag university physics departments, Three.js creators, and science communication groups when discussing specific topics (e.g. Rutherford lab, Cavendish balance).
