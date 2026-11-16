# 🔬 REALITY ENGINE — Physics-Based Virtual Laboratory

> 📌 **REALITY ENGINE** is an interactive, authentic computational physics virtual laboratory engineered to bridge abstract mathematical physics formulas with tactile, real-time 3D experimental simulations. Built with **React 19, TypeScript 5.8+, Three.js WebGL2, and KaTeX**, it allows researchers, students, and engineers to observe, manipulate, and measure physical phenomena across four core numerical simulation engines, featuring an encyclopedia of **120 fundamental physics concepts** and synchronized real-time mathematical telemetry.
> 
> 🎨 **Color Identity:** Wine & Warm Sandal (`#76283B` Primary Accent / `#F4E7D7` Background / `#FFF9F2` Elevated Surface / `#E1CDBB` Sandal Border / `#B78A63` Sandal Gold Accent) — Grounded, prestigious academic laboratory aesthetic with zero neon/sci-fi gimmicks.
> 
> 🚀 **LinkedIn Publication Schedule:**
> - **Approval:** Yes
> - **Pushed to GitHub:** `2026-11-16`
> - **Scheduled LinkedIn Release:** `2026-11-17` at 23:00 IST (24h post-push showcase)
> - **Publication Status:** Pending (`Day 19: 19_REALITY_ENGINE` in automation pipeline)

<!-- linkedin-automation: {"status": "approved", "pushed_date": "2026-11-16", "scheduled_date": "2026-11-17", "published": false} -->

---

## 📋 Page Properties & Project Metadata

| Property | Value |
| :--- | :--- |
| **Project Code** | `REALITY-ENGINE-09` |
| **Workspace Root** | `L:\pr 19` |
| **Pushed to GitHub** | `2026-11-16` |
| **Scheduled LinkedIn Date** | `2026-11-17` at 23:00 IST |
| **Target Deployment** | Vercel (`npx vercel --prod`) |
| **Frontend Framework** | React 19 + TypeScript 5.8+ + Vite 6 + Tailwind CSS v3.4 |
| **3D Rendering** | Three.js WebGL2 (`three@0.175.0`), OrbitControls, Instanced Arrow Meshes |
| **Numerical Solvers** | Symplectic Velocity-Verlet, Continuous Impulse-Momentum, Runge-Kutta 4th Order (RK4), SPH Fluid Engine, Maxwell-Boltzmann Gas Solver, Relativistic Quantum Engine |
| **Live Formula Math** | KaTeX (`katex@0.16.21`) with real-time numeric variable substitution |
| **Telemetry System** | Canvas 2D 120-Frame Sliding Ring Buffer (Energy Conservation & Momentum) |
| **Concepts Catalog** | **120 Curated Academic Physics Concepts** with derivations and 1-click 3D apparatus presets |
| **Test Coverage** | 9 / 9 Automated Tests Passed (Vitest Unit & Physics Conservation Checks) |
| **Automation Queue State** | `Day 19: 19_REALITY_ENGINE` staged in `automation_tracker.json` |

---

## 🧭 Table of Contents

- [1. Executive Overview](#1-executive-overview)
- [2. 🖼️ Verified Visual Verification Gallery](#2-️-verified-visual-verification-gallery)
- [3. The Six Numerical Physics Solvers](#3-the-six-numerical-physics-solvers)
- [4. The 120 Curated Physics Concepts Matrix](#4-the-120-curated-physics-concepts-matrix)
- [5. Historic Guided Laboratory Walkthroughs](#5-historic-guided-laboratory-walkthroughs)
- [6. Synchronized Telemetry Deck & Live Formula Inspector](#6-synchronized-telemetry-deck--live-formula-inspector)
- [7. Verification, Tests & Numerical Integrity](#7-verification-tests--numerical-integrity)
- [8. Installation, Run & Deployment Guide](#8-installation-run--deployment-guide)

---

## 1. Executive Overview

Modern physics education often suffers from a cognitive disconnect between dry static textbook equations and dynamic physical intuition. **REALITY ENGINE** dissolves this barrier by embedding active mathematical equations directly into a high-performance 3D WebGL laboratory environment.

### What it Does
* **Celestial Gravity & N-Body Motion:** Simulates multi-body gravitational interactions with Symplectic Velocity-Verlet integration, demonstrating Keplerian elliptical orbits, Lagrange points, and escape velocities without artificial orbital decay.
* **Continuous 3D Collisions:** Real-time impulse-momentum collision resolution with variable coefficient of restitution ($e \in [0.0, 1.0]$), friction, and kinetic energy dissipation tracking.
* **Electromagnetic Lorentz Fields:** 4th-Order Runge-Kutta (RK4) integration of charged particles spiraling in uniform or crossed electric ($\mathbf{E}$) and magnetic ($\mathbf{B}$) fields, driving cyclotrons and Thomson $e/m$ velocity selectors.
* **Fluid Dynamics & Archimedes Buoyancy:** Particle-based Smoothed Particle Hydrodynamics (SPH) coupled with Archimedes buoyant forces ($F_b = \rho V g$) and Stokes viscous drag.
* **Live Formula Inspector (KaTeX):** Equations dynamically substitute active numerical variables frame-by-frame, demonstrating how formulas translate into physical quantities.
* **Rolling Telemetry Charts:** 120-frame rolling window plotting Kinetic Energy ($KE$), Potential Energy ($PE$), and Total Mechanical Energy ($E_{\text{total}}$) to visually prove conservation laws.
* **120-Concept Academic Compendium:** Searchable encyclopedia of 120 core physics concepts, each featuring formal derivations and 1-click **"Load Preset"** buttons that mount the apparatus in 3D.

---

## 2. 🖼️ Verified Visual Verification Gallery

Every component, simulation state, and modal of REALITY ENGINE was visually audited and verified using automated headless Chromium WebGL2 tests. Below are the verified high-resolution captures:

| Experimental State | Visual Capture & Verification Details |
| :--- | :--- |
| **01. Laboratory Stage & N-Body Orbits** | ![Laboratory Stage](./screenshots/01_reality_engine_laboratory_view.png)<br><sub>*Full 3D WebGL2 laboratory viewport in Wine & Warm Sandal with central star, orbiting planetary bodies, dynamic 3D field arrows, and bottom telemetry deck.*</sub> |
| **02. Lorentz Magnetic Cyclotron** | ![Lorentz Magnetic Cyclotron](./screenshots/02_lorentz_magnetic_cyclotron.png)<br><sub>*Electromagnetism domain showing opposite circular helical trajectories of positive ions and negative electrons in a 2.5 Tesla magnetic field governed by $\mathbf{F} = q(\mathbf{v} \times \mathbf{B})$.*</sub> |
| **03. 3D Elastic Collisions & Momentum Relay** | ![3D Elastic Collisions](./screenshots/03_elastic_collisions_momentum_relay.png)<br><sub>*Multi-body elastic collision chain demonstrating linear momentum conservation ($p_i = p_f$) and Newton's Cradle impulse propagation with restitution $e = 0.95$.*</sub> |
| **04. Archimedes Buoyancy & Fluid Dynamics** | ![Archimedes Buoyancy](./screenshots/04_archimedes_buoyancy_fluid_equilibrium.png)<br><sub>*Translucent fluid chamber simulating hydrostatic equilibrium, showing a low-density sphere floating at surface level and a dense metal sphere sinking with Stokes drag.*</sub> |
| **05. 120-Concept Academic Compendium** | ![Concept Compendium](./screenshots/05_concept_compendium_120_encyclopedia.png)<br><sub>*Searchable left drawer displaying 120 physics concepts across 6 branches with difficulty tags, KaTeX formulas, expandable derivations, and 1-click apparatus testing.*</sub> |
| **06. Historic Guided Labs Dossier** | ![Historic Guided Labs](./screenshots/06_guided_historic_labs_dossier.png)<br><sub>*Interactive laboratory walkthrough modal with historical context, objectives, step-by-step procedures, and expected scientific observations for classic experiments.*</sub> |
| **07. Live KaTeX Formula & Telemetry Deck** | ![Live Formula Telemetry](./screenshots/07_live_katex_formula_telemetry.png)<br><sub>*Dynamic mathematical formula inspector substituting real-time variables into KaTeX equations at 60 FPS, alongside rolling-buffer energy conservation curves.*</sub> |
| **08. Laboratory Observation Report** | ![Laboratory Observation Report](./screenshots/08_laboratory_observation_report.png)<br><sub>*Institutional-grade experimental report with environmental parameter tables, active entity manifests, and 1-click Print / PDF and JSON state export.*</sub> |
| **09. Thermal & Kinetic Gas Chamber** | ![Thermal Gas Chamber](./screenshots/09_thermal_kinetic_gas_chamber.png)<br><sub>*Sealed 3D glass containment chamber with brass frame and movable piston plate, simulating 28 gas molecules colliding with Maxwell-Boltzmann velocity distribution and live $P = \frac{N k_B T}{V}$ calculation.*</sub> |
| **10. Quantum Matter Wave Diffraction** | ![Quantum Wave Diffraction](./screenshots/10_quantum_matter_wave_diffraction.png)<br><sub>*Double-slit barrier aperture with dual slit channels and phosphorescent detector screen, demonstrating de Broglie matter wave beam propagation ($\lambda = h/p$) and relativistic time dilation ($\gamma = 1/\sqrt{1 - v^2/c^2}$).*</sub> |

---

## 3. The Six Numerical Physics Solvers & Simulation Domains

REALITY ENGINE avoids generic monolithic game physics in favor of six domain-specialized numerical integrators:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   REALITY ENGINE COMPUTATIONAL CORE                    │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 1. Orbital Gravity │ a = -G Σ M_j / r²  │ Symplectic Velocity Verlet   │
├────────────────────┼────────────────────┼──────────────────────────────┤
│ 2. 3D Collisions   │ J = -(1+e)v_rel / m│ Impulse Collision Solver     │
├────────────────────┼────────────────────┼──────────────────────────────┤
│ 3. Lorentz Fields  │ F = q(E + v × B)   │ Runge-Kutta 4th Order (RK4)  │
├────────────────────┼────────────────────┼──────────────────────────────┤
│ 4. SPH Fluid       │ ρ, P, μ ∇²v + F_b  │ Smoothed Particle Hydro (SPH)│
├────────────────────┼────────────────────┼──────────────────────────────┤
│ 5. Thermal Gas     │ PV = N k_B T, v_rms│ Maxwell-Boltzmann Enclosure  │
├────────────────────┼────────────────────┼──────────────────────────────┤
│ 6. Quantum & Waves │ λ = h/p, γ(v)      │ Relativistic Wave Engine     │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

### 1. Symplectic Velocity-Verlet Integrator (Mechanics & Orbits)
$$\mathbf{x}(t + \Delta t) = \mathbf{x}(t) + \mathbf{v}(t)\Delta t + \frac{1}{2}\mathbf{a}(t)\Delta t^2$$
$$\mathbf{a}(t + \Delta t) = -\sum_{j \ne i} \frac{G M_j (\mathbf{x}_i - \mathbf{x}_j)}{(|\mathbf{x}_i - \mathbf{x}_j|^2 + \epsilon^2)^{3/2}}$$
$$\mathbf{v}(t + \Delta t) = \mathbf{v}(t) + \frac{1}{2}(\mathbf{a}(t) + \mathbf{a}(t + \Delta t))\Delta t$$
* **Symplectic Phase-Space Conservation:** Conserves the Hamiltonian $\mathcal{H}$ over thousands of orbits without artificial energy gain or spiral decay. Includes 3 dedicated apparatus setups: *Sol & Planets*, *Gravity Slingshot*, and *3-Body Chaotic Dance*.

### 2. Impulse-Momentum Collision Engine (Collisions & Restitution)
$$J = \frac{-(1 + e)(\mathbf{v}_{\text{rel}} \cdot \hat{\mathbf{n}})}{\frac{1}{m_1} + \frac{1}{m_2}}$$
$$\mathbf{v}_1' = \mathbf{v}_1 + \frac{J}{m_1}\hat{\mathbf{n}}, \qquad \mathbf{v}_2' = \mathbf{v}_2 - \frac{J}{m_2}\hat{\mathbf{n}}$$
* **Restitution Tunability:** Supports elastic ($e = 1.0$), partially inelastic ($0 < e < 1$), and completely inelastic ($e = 0.0$) impacts with positional correction to eliminate interpenetration. Includes 3 dedicated apparatus setups: *Newton's Cradle*, *Clay Splat Inelastic*, and *2D Oblique Billiards*.

### 3. Runge-Kutta 4th-Order (Lorentz Electromagnetism)
$$\frac{d\mathbf{v}}{dt} = \frac{q}{m}\left(\mathbf{E}(\mathbf{x}) + \mathbf{v} \times \mathbf{B}\right)$$
* Evaluates 4 sub-step slopes ($k_1, k_2, k_3, k_4$) per frame, accurately integrating magnetic curvature where pure centripetal forces perform zero net work ($\Delta W = 0$). Includes 3 dedicated apparatus setups: *Magnetic Cyclotron*, *Thomson $E \times B$ Velocity Selector*, and *Coulomb Electric Dipole*.

### 4. SPH Fluid & Archimedes Buoyancy Engine (Fluids & Hydrodynamics)
$$F_b = \rho_{\text{fluid}} V_{\text{submerged}} g, \qquad \mathbf{F}_{\text{net}} = \mathbf{F}_g + \mathbf{F}_b - 6\pi \eta r \mathbf{v}$$
* Particle pressure computed via Poly6 kernel and Spiky gradient, supporting fluid buoyancy, surface equilibrium, and Stokes viscous damping. Includes 3 dedicated apparatus setups: *Archimedes Flotation Tank*, *Stokes Terminal Sinking*, and *SPH Fluid Droplet Jet*.

### 5. Maxwell-Boltzmann Thermal Enclosure (Thermodynamics & Kinetic Theory)
$$P = \frac{N k_B T}{V}, \qquad v_{\text{rms}} = \sqrt{\frac{3 k_B T}{m}}$$
* 3D glass containment chamber with movable piston plate and specular elastic boundary collision reflection. Temperature scrubbing ($T \in [100\text{ K}, 1200\text{ K}]$) dynamically rescales particle velocity distributions according to kinetic theory. Includes 3 dedicated apparatus setups: *Maxwell-Boltzmann Kinetic Chamber*, *Brownian Motion Colloidal Diffusion*, and *Adiabatic Piston Compression*.

### 6. Relativistic Quantum & Wave Mechanics Engine (Modern Physics)
$$\lambda = \frac{h}{p} = \frac{h}{m v}, \qquad \gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$$
* Integrates high-speed particle dynamics with Lorentz factor mass scaling and matter wave propagation through physical double-slit apertures. Includes 3 dedicated apparatus setups: *Double-Slit Matter Wave Beam*, *Rutherford Alpha Nuclear Scattering (+79e)*, and *Special Relativity Lorentz Boost*.

---

## 4. The 120 Curated Physics Concepts Matrix

To ensure REALITY ENGINE functions as a genuine university-grade laboratory instrument, it includes **120 comprehensively documented physics concepts** across 6 core branches. Every concept card features formal mathematical derivations, variable legends with SI units, real-world engineering applications, and a 1-click **"Test in Simulation"** preset button.

| Branch | Count | Core Concepts Covered |
| :--- | :---: | :--- |
| **1. Classical Mechanics & Gravitation** | **22** | Newton's 1st/2nd/3rd Laws, Universal Gravitation, Kepler's 1st/2nd/3rd Laws, Gravitational Potential & Escape Velocity, Orbital Resonance, Lagrange Points (L1-L5), Centripetal Force, Coriolis Effect, Simple Harmonic Motion (Hooke's Law), Damped & Driven Oscillations (Resonance), Chaotic Double Pendulum, Conservation of Angular Momentum & Gyroscopic Precession, Euler-Lagrange Equations, Hamiltonian Mechanics, Coupled Oscillators & Normal Modes, Gravitational Virial Theorem, Roche Limit & Tidal Disruption, Foucault Pendulum Precession. |
| **2. Kinematics, Momentum & Collisions** | **20** | 1D & 2D Elastic Collisions, Inelastic Collisions & Dissipated Energy, Coefficient of Restitution ($e$), Impulse-Momentum Theorem, Center of Mass Frame, Newton's Cradle, Ballistic Pendulum, Oblique Impact, Static & Kinetic Friction, Rotational Kinetic Energy ($I$), Rolling Without Slipping, Torricelli's Efflux Theorem, Explosive Momentum Conservation & Recoil, Pendulum Large Angle Elliptic Correction, Gravitational Slingshot Assist, Relativistic 4-Momentum, Angular Impulse & Impact Torque, Viscoelastic Restitution $e(v_0)$, Granular Gas Cooling (Haff's Law). |
| **3. Electromagnetism & Field Theory** | **24** | Coulomb's Law & Superposition, Electric Field Vectors, Gauss's Law & Flux Enclosure, Electric Potential Gradient ($-\nabla V$), Equipotential Surfaces, Capacitance & Dielectric Energy Density, Drift Velocity & Ohm's Law, Lorentz Force ($\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})$), Cyclotron Frequency, Thomson $e/m$ Ratio, Magnetic Dipole Moment & Torque, Biot-Savart Law, Ampere's Law, Faraday's Law, Lenz's Law & Eddy Current Damping, Hall Effect, Helmholtz Coils Uniform Field, Poynting Vector, Maxwell-Ampère Displacement Current, Magnetic Dipole-Dipole Interaction, Skin Depth Penetration, EM Radiation Pressure, MHD Alfvén Waves, Synchrotron Radiation Power. |
| **4. Fluid Dynamics & Aerodynamics** | **19** | Archimedes' Principle of Buoyancy, Hydrostatic Pressure Depth Gradient, Pascal's Principle & Hydraulic Multiplication, Equation of Continuity ($A_1 v_1 = A_2 v_2$), Bernoulli's Principle, Poiseuille's Viscous Flow ($R^4$), Stokes' Drag Law, Reynolds Number & Turbulence Regimes, Terminal Velocity in Viscous Media, Surface Tension & Young-Laplace Capillarity, Venturi Effect, Magnus Effect Spin Lift, Navier-Stokes Advection-Diffusion, Rayleigh-Taylor Instability, von Kármán Vortex Shedding, Jurin's Law of Capillarity, Hydrodynamic Cavitation & Rayleigh-Plesset, Rankine-Hugoniot Shock Jumps, Marangoni Surface Tension Convection. |
| **5. Thermodynamics & Kinetic Theory** | **16** | Ideal Gas Law ($PV = N k_B T$), Maxwell-Boltzmann Velocity Distribution, Brownian Motion & Einstein Diffusion ($\langle x^2 \rangle = 2Dt$), Kinetic Interpretation of Temperature, Fourier's Law of Heat Conduction, Adiabatic Expansion ($P V^\gamma = \text{const}$), First Law of Thermodynamics, Second Law & Entropy Generation, Carnot Cycle Efficiency ($\eta = 1 - T_C/T_H$), Thermal Expansion & Internal Strain, Van der Waals Equation of State, Joule-Thomson Throttling & Inversion, Planck Blackbody Radiance, Otto Cycle Efficiency, Clausius-Clapeyron Phase Equilibrium, Equipartition Theorem. |
| **6. Wave Mechanics & Modern Physics** | **19** | Principle of Wave Superposition & Interference, Standing Waves & Harmonics ($f_n = n v / 2L$), 3D Doppler Effect, Snell's Law of Refraction & Fermat's Principle, Total Internal Reflection, Rutherford Alpha Scattering & Nuclear Cross-Section, Millikan Oil Drop Charge Quantization, Photoelectric Effect & Einstein's Work Function, De Broglie Matter Wavelength, Heisenberg Uncertainty Principle, Bohr Model Quantized Orbit Radii, Compton Scattering, Quantum Tunneling Barrier Transmission, Stern-Gerlach Spin Quantization, Pair Production & Annihilation, Zeeman Spectral Splitting, Cherenkov Radiation Cone, Special Relativity Time Dilation ($\gamma$), Schwarzschild Black Hole Horizon. |
| **TOTAL CONCEPTS** | **120** | **100% Mathematically Rigorous & 3D Interactive** |

---

## 5. Historic Guided Laboratory Walkthroughs

REALITY ENGINE features 15+ pre-calibrated historic guided laboratory walkthroughs accessible via the **"Historic Labs"** modal:

1. **Cavendish Torsion Balance:** Measurement of the Universal Gravitational Constant $G$ using lead attractor masses and a delicate torsion fiber.
2. **Rutherford Alpha Particle Scattering:** Firing high-velocity alpha particles (+2e) at a heavy gold nucleus (+79e) to observe point-mass Coulomb backscattering.
3. **Lorentz Magnetic Cyclotron:** Demonstrating circular trajectory radius $r = mv / (qB)$ and constant orbital resonance frequency $f_c = qB / (2\pi m)$.
4. **Double Pendulum Chaotic Attractor:** Revealing extreme sensitivity to initial conditions and strange attractor geometry in phase-space.
5. **Newton's Cradle Momentum Relay:** Proving wave-like impulse propagation with simultaneous momentum and kinetic energy conservation.
6. **Archimedes' Buoyancy & Density Balance:** Hydrostatic flotation equilibrium comparing wood, water, and aluminum densities.
7. **J.J. Thomson's $e/m$ Ratio:** Crossed electric and magnetic fields creating a velocity selector followed by circular magnetic deflection.
8. **Keplerian Planetary Orbits:** Simulating elliptical orbits, perihelion acceleration, and hyperbolic escape velocities.

---

## 6. Synchronized Telemetry Deck & Live Formula Inspector

* **Dynamic KaTeX Formula Inspector:** Substitutes live numerical step variables into formulas in real-time.
  * Kinetic Energy: $E_k = \frac{1}{2}(2.00\text{ kg})(4.50\text{ m/s})^2 = 20.25\text{ J}$
  * Lorentz Force: $\mathbf{F}_B = (2.00\,\mu\text{C})(4.50\text{ m/s} \times 2.50\text{ T}) = 22.50\,\mu\text{N} \implies r = \frac{mv}{|q|B} = 0.90\text{ m}$
  * Buoyancy Force: $F_b = (1000\text{ kg/m}^3)(0.001\text{ m}^3)(9.81\text{ m/s}^2) = 9.81\text{ N}$
* **120-Frame Sliding Ring Buffer Canvas:**
  * Plots Kinetic Energy (Rich Wine `#76283B`), Potential Energy (Warm Amber), and Total Mechanical Energy (Emerald dashed line) simultaneously to verify conservation.
  * Instant toggle to Linear Momentum and Velocity curve views.

---

## 7. Verification, Tests & Numerical Integrity

The codebase is protected by automated tests using Vitest and TypeScript strict type checking:

```bash
# Run Vitest test suites
npm test

# Expected Output:
# ✓ src/physics/solvers/solvers.test.ts (3 tests)
#   - Verlet: Conserves energy in Kepler 2-body orbit (ΔE/E < 0.05%)
#   - Collisions: Strictly conserves linear momentum in 1D head-on impact
#   - Lorentz: Verifies magnetic force is perpendicular to velocity (dW = 0)
# ✓ src/__tests__/physicsConcepts.test.ts (6 tests)
#   - Contains exactly 120 concepts across all 6 branches
#   - Validates non-empty formulas, derivations (>100 chars), and preset configs
# Test Files  2 passed (2)
# Tests       9 passed (9)
```

---

## 8. Installation, Run & Deployment Guide

### Prerequisites
* Node.js `v18.0.0+` (verified on `v24.14.1`)
* npm `9.0.0+`

### Local Development Setup
```bash
# 1. Clone repository
git clone https://github.com/KARTHIKEYASHARMA672/reality-engine.git
cd reality-engine

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open browser at http://localhost:5173
```

### Production Build & Preview
```bash
# Compile TypeScript and bundle Vite production assets
npm run build

# Preview production build locally
npm run preview
```

### Vercel Deployment (Enforced Hosting)
```bash
# Deploy directly to Vercel Production
npx vercel --prod
```

---

*Engineered with precision for scientific exploration and discovery.*
