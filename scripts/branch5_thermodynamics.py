# -*- coding: utf-8 -*-
"""
Branch 5: Thermodynamics & Kinetic Theory (10 concepts)
"""

BRANCH5_CONCEPTS = [
    {
        "id": "ideal-gas-law",
        "title": "Ideal Gas Law & Equation of State",
        "branch": "thermodynamics",
        "tag": "Equations of State",
        "difficulty": "Foundational",
        "formulaLatex": r"P V = N k_B T = n R T",
        "summary": "The fundamental equation of state governing hypothetical dilute gases composed of point-like non-interacting particles undergoing perfectly elastic collisions. It unifies Boyle's, Charles's, and Avogadro's empirical laws.",
        "derivation": r"In the kinetic theory of gases, consider N identical point particles of mass m inside a cubic container of side L and volume V = L^3. When a particle collides elastically with a perpendicular wall parallel to the yz-plane, its x-velocity reverses from +v_x to -v_x, delivering momentum impulse \Delta p_x = 2m v_x. The time between successive impacts on the same wall is \Delta t = \frac{2L}{v_x}. By Newton's second law, average force exerted on the wall is F_x = \frac{\Delta p_x}{\Delta t} = \frac{2m v_x}{2L/v_x} = \frac{m v_x^2}{L}. Summing over all N particles: F_{\text{total}} = \frac{m}{L}\sum_{i=1}^N v_{ix}^2 = \frac{N m}{L}\langle v_x^2 \rangle. By spatial isotropy, \langle v_x^2 \rangle = \langle v_y^2 \rangle = \langle v_z^2 \rangle = \frac{1}{3}\langle v^2 \rangle. Wall pressure is P = \frac{F_{\text{total}}}{L^2} = \frac{N m \langle v^2 \rangle}{3 L^3} = \frac{2}{3}\frac{N}{V}\left(\frac{1}{2}m\langle v^2 \rangle\right). Connecting average translational kinetic energy to thermodynamic temperature via equipartition: \frac{1}{2}m\langle v^2 \rangle = \frac{3}{2}k_B T. Substituting gives P V = \frac{2}{3} N \left(\frac{3}{2} k_B T\right) = N k_B T = n R T, where R = N_A k_B.",
        "realWorldApplication": "Internal combustion engine compression strokes, SCUBA diving gas tank filling, and high-altitude weather balloon expansion.",
        "variables": [
            {"symbol": "P", "label": "Gas Pressure", "unit": "Pa"},
            {"symbol": "V", "label": "Container Volume", "unit": "m³"},
            {"symbol": "T", "label": "Absolute Thermodynamic Temperature", "unit": "K"},
            {"symbol": "N", "label": "Total Molecule Count", "unit": "dimensionless"},
            {"symbol": "k_B", "label": "Boltzmann Constant", "unit": "J/K"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 8, 14],
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
        "formulaLatex": r"f(v) = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 \exp\left(-\frac{m v^2}{2 k_B T}\right)",
        "summary": "Describes the statistical probability distribution of molecular speeds in a classical gas in thermodynamic equilibrium. The probability density forms an asymmetric Maxwellian curve with a high-velocity exponential tail.",
        "derivation": r"In classical statistical mechanics, the probability of a gas molecule occupying a phase-space state with kinetic energy E = \frac{1}{2} m (v_x^2 + v_y^2 + v_z^2) is given by the canonical Boltzmann factor: P(\mathbf{v}) \, d^3\mathbf{v} = C \exp\left(-\frac{E}{k_B T}\right) dv_x dv_y dv_z = C \exp\left(-\frac{m(v_x^2 + v_y^2 + v_z^2)}{2 k_B T}\right) dv_x dv_y dv_z. Normalizing over all 3D velocity space: \iiint_{-\infty}^\infty P(\mathbf{v}) d^3\mathbf{v} = 1 \implies C = \left(\frac{m}{2\pi k_B T}\right)^{3/2}. To find the scalar speed distribution f(v) where v = |\mathbf{v}|, transform velocity Cartesian coordinates into spherical coordinates (v, \theta, \phi), where volume element is d^3\mathbf{v} = v^2 \sin\theta \, dv \, d\theta \, d\phi. Integrating over all solid angles d\Omega = \sin\theta d\theta d\phi (giving 4\pi): f(v) dv = 4\pi v^2 C \exp\left(-\frac{m v^2}{2 k_B T}\right) dv = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 \exp\left(-\frac{m v^2}{2 k_B T}\right) dv. Key characteristic speeds: Most probable speed: v_p = \sqrt{\frac{2 k_B T}{m}}, Mean speed: \langle v \rangle = \sqrt{\frac{8 k_B T}{\pi m}}, Root-mean-square speed: v_{\text{rms}} = \sqrt{\frac{3 k_B T}{m}}.",
        "realWorldApplication": "Uranium isotope enrichment via gaseous diffusion (separating ²³⁵UF₆ from ²³⁸UF₆ based on molecular velocity differentials) and planetary atmospheric retention.",
        "variables": [
            {"symbol": "f(v)", "label": "Speed Probability Density", "unit": "s/m"},
            {"symbol": "v", "label": "Molecular Speed", "unit": "m/s"},
            {"symbol": "m", "label": "Molecular Mass", "unit": "kg"},
            {"symbol": "T", "label": "Equilibrium Temperature", "unit": "K"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 8, 16],
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
        "formulaLatex": r"\langle x^2(t) \rangle = 2 D t, \quad D = \frac{k_B T}{6\pi \eta r} = \frac{R T}{6\pi \eta r N_A}",
        "summary": "The random, erratic wandering of microscopic particles suspended in a fluid, caused by continuous bombardment by surrounding solvent molecules. Albert Einstein's 1905 paper linked this diffusion to atomic reality.",
        "derivation": r"Formulated by Albert Einstein and Paul Langevin (1905-1908). A microscopic colloidal particle of radius r and mass m undergoes random thermal impacts in a fluid of viscosity \eta. The 1D Langevin equation is: m \frac{dv}{dt} = -6\pi \eta r v + \xi(t), where \xi(t) is a stochastic zero-mean Gaussian white-noise force representing molecular collisions: \langle \xi(t) \rangle = 0, \langle \xi(t)\xi(t') \rangle = 2\gamma k_B T \delta(t - t') with damping coefficient \gamma = 6\pi \eta r. In the overdamped regime (inertia m \frac{dv}{dt} \approx 0), friction balances the fluctuating force: 6\pi \eta r \frac{dx}{dt} = \xi(t). Multiplying by x and taking the statistical ensemble average with equipartition theorem \langle m v^2 \rangle = k_B T: \frac{d}{dt}\langle x^2 \rangle = 2 D, where diffusion coefficient is D = \frac{k_B T}{6\pi \eta r}. Integrating over elapsed time t yields the linear mean-square displacement: \langle x^2(t) \rangle = 2 D t (in 1D) and \langle r^2(t) \rangle = 6 D t (in 3D). Jean Perrin's experimental confirmation in 1908 provided the definitive experimental proof of the physical existence of atoms.",
        "realWorldApplication": "Dynamic Light Scattering (DLS) nanoparticle size analyzers and intracellular molecular motor cargo diffusion.",
        "variables": [
            {"symbol": r"\langle x^2(t) \rangle", "label": "Mean-Square Displacement", "unit": "m²"},
            {"symbol": "D", "label": "Stokes-Einstein Diffusion Coefficient", "unit": "m²/s"},
            {"symbol": r"\eta", "label": "Solvent Dynamic Viscosity", "unit": "Pa·s"},
            {"symbol": "r", "label": "Colloidal Particle Radius", "unit": "m"},
            {"symbol": "T", "label": "Fluid Absolute Temperature", "unit": "K"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 6, 12],
            "timeDilation": 1.0,
            "parameters": {
                "particleRadius": 1.0e-6,
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
        "formulaLatex": r"\langle K \rangle = \frac{3}{2} k_B T, \quad \lambda_{\text{mfp}} = \frac{1}{\sqrt{2} \pi d^2 n} = \frac{k_B T}{\sqrt{2} \pi d^2 P}",
        "summary": "Establishes that macroscopic absolute temperature is a direct measure of the average translational kinetic energy of constituent molecules. Mean free path represents the average distance a molecule travels between collisions.",
        "derivation": r"From the kinetic derivation of the ideal gas law: P = \frac{2}{3} n \langle K_{\text{trans}} \rangle, where n = N/V is number density. Comparing with P = n k_B T directly establishes the microscopic definition of thermodynamic temperature: \langle K_{\text{trans}} \rangle = \frac{1}{2} m \langle v^2 \rangle = \frac{3}{2} k_B T. To determine the mean free path \lambda, consider a spherical molecule of effective collision diameter d moving at average speed v through stationary target molecules. The effective collision cross-section is a cylinder of radius d and cross-sectional area \sigma = \pi d^2. In time \Delta t, the swept volume is V_{\text{swept}} = \pi d^2 v \Delta t. The number of collisions is N_{\text{coll}} = n V_{\text{swept}} = n \pi d^2 v \Delta t. Collision frequency is \nu = \frac{N_{\text{coll}}}{\Delta t} = n \pi d^2 v. Accounting for relative motion among all target molecules by multiplying by the Maxwellian relative speed factor \sqrt{2}: \nu_{\text{rel}} = \sqrt{2} \pi d^2 n v. The mean free path is the distance traveled divided by collision count: \lambda_{\text{mfp}} = \frac{v}{\nu_{\text{rel}}} = \frac{1}{\sqrt{2} \pi d^2 n}. Substituting n = \frac{P}{k_B T} yields: \lambda_{\text{mfp}} = \frac{k_B T}{\sqrt{2} \pi d^2 P}.",
        "realWorldApplication": r"Ultra-High Vacuum (UHV) systems in semiconductor fabrication where mean free path exceeds chamber dimensions (\lambda > 10 m), enabling ballistic molecular beam epitaxy.",
        "variables": [
            {"symbol": r"\langle K \rangle", "label": "Mean Translational Kinetic Energy", "unit": "J"},
            {"symbol": r"\lambda_{\text{mfp}}", "label": "Mean Free Path", "unit": "m"},
            {"symbol": "d", "label": "Molecular Hard-Sphere Diameter", "unit": "m"},
            {"symbol": "n", "label": "Molecular Number Density", "unit": "m⁻³"},
            {"symbol": "P", "label": "Gas Pressure", "unit": "Pa"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 8, 14],
            "timeDilation": 1.0,
            "parameters": {
                "pressure": 101325.0,
                "temperature": 300.0,
                "molecularDiameter": 3.0e-10
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
        "formulaLatex": r"\mathbf{q} = -k \nabla T, \quad \frac{\partial T}{\partial t} = \alpha \nabla^2 T, \quad \alpha = \frac{k}{\rho c_p}",
        "summary": "The conductive heat flux vector is directly proportional to the negative spatial temperature gradient. Heat flows spontaneously from regions of high temperature to low temperature, leading to the heat diffusion equation.",
        "derivation": r"Formulated by Joseph Fourier in 1822. Empirical observation demonstrates that the conductive heat transfer rate dQ/dt across a planar slab of area A and thickness \Delta x under temperature difference \Delta T = T_{\text{hot}} - T_{\text{cold}} is: \frac{dQ}{dt} = k A \frac{\Delta T}{\Delta x}, where k is thermal conductivity. In differential continuum form, local heat flux density is \mathbf{q} \equiv \frac{1}{A}\frac{dQ}{dt}\hat{\mathbf{n}} = -k \nabla T. The negative sign guarantees positive energy flow down the thermal gradient. Applying local conservation of energy to an infinitesimal volume dV: \rho c_p \frac{\partial T}{\partial t} dV = -\oint_{\partial V} \mathbf{q} \cdot d\mathbf{A} + q_{\text{gen}} dV. Applying the Divergence Theorem: \rho c_p \frac{\partial T}{\partial t} = -\nabla \cdot \mathbf{q} + q_{\text{gen}} = -\nabla \cdot (-k \nabla T) + q_{\text{gen}}. For uniform thermal conductivity k with no internal sources: \frac{\partial T}{\partial t} = \frac{k}{\rho c_p} \nabla^2 T = \alpha \nabla^2 T, where \alpha \equiv \frac{k}{\rho c_p} is the thermal diffusivity.",
        "realWorldApplication": "Aerospace atmospheric re-entry heat shield tiles (space shuttle silica fibrous tiles) and computer CPU heat sink copper vapor chambers.",
        "variables": [
            {"symbol": r"\mathbf{q}", "label": "Heat Flux Vector", "unit": "W/m²"},
            {"symbol": "k", "label": "Thermal Conductivity", "unit": "W/(m·K)"},
            {"symbol": r"\nabla T", "label": "Temperature Gradient", "unit": "K/m"},
            {"symbol": r"\alpha", "label": "Thermal Diffusivity", "unit": "m²/s"},
            {"symbol": "c_p", "label": "Specific Heat Capacity", "unit": "J/(kg·K)"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"P V^\gamma = \text{const}, \quad T V^{\gamma - 1} = \text{const}, \quad \gamma = \frac{C_p}{C_v}",
        "summary": "A thermodynamic transformation occurring with zero net heat exchange with the environment (Q = 0). Rapid gas compression raises internal temperature dramatically because all compressive boundary work converts into internal energy.",
        "derivation": r"For an adiabatic process, heat exchange is zero: \delta Q = 0. By the First Law of Thermodynamics: dU = \delta Q - \delta W = -P dV. For an ideal gas, internal energy depends solely on temperature: dU = n C_v dT. Equating both expressions: n C_v dT = -P dV. From the ideal gas law: P = \frac{n R T}{V}. Substituting P: n C_v dT = -\frac{n R T}{V} dV \implies \frac{dT}{T} = -\frac{R}{C_v}\frac{dV}{V}. Using Mayer's relation R = C_p - C_v and defining the adiabatic heat capacity ratio \gamma \equiv \frac{C_p}{C_v}: \frac{R}{C_v} = \frac{C_p - C_v}{C_v} = \gamma - 1. Thus: \frac{dT}{T} = -(\gamma - 1)\frac{dV}{V}. Integrating both sides: \ln T = -(\gamma - 1)\ln V + \text{const} \implies \ln(T V^{\gamma - 1}) = \text{const} \implies T V^{\gamma - 1} = \text{constant}. Substituting T = \frac{P V}{n R}: \left(\frac{P V}{n R}\right) V^{\gamma - 1} = \text{const} \implies P V^\gamma = \text{constant}.",
        "realWorldApplication": "Diesel engine compression ignition (where rapid 20:1 adiabatic piston compression heats air to >700 °C, spontaneously igniting injected fuel without spark plugs).",
        "variables": [
            {"symbol": r"\gamma", "label": "Adiabatic Index (Cp/Cv)", "unit": "dimensionless"},
            {"symbol": "P", "label": "Instantaneous Pressure", "unit": "Pa"},
            {"symbol": "V", "label": "Chamber Volume", "unit": "m³"},
            {"symbol": "T", "label": "Instantaneous Temperature", "unit": "K"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"\Delta U = Q - W, \quad dU = \delta Q - P \, dV",
        "summary": r"The universal law of conservation of energy applied to thermodynamic systems. The change in internal energy \Delta U of a closed system equals the net heat added to the system minus the mechanical work done by the system on its surroundings.",
        "derivation": r"Established by Rudolf Clausius and James Prescott Joule through mechanical equivalent of heat paddle-wheel experiments. Internal energy U is an exact state function: \oint dU = 0, depending solely on the thermodynamic coordinates of the state, independent of the path taken. Heat Q and work W are path-dependent inexact differentials (\delta Q, \delta W). In differential form: dU = \delta Q - \delta W. For reversible quasi-static expansions against boundary pressure P: \delta W = P dV, leading to the fundamental thermodynamic relation for closed simple systems: dU = \delta Q - P dV. In a cyclic process returning to its initial state (\Delta U = 0), net work produced equals net heat absorbed: W_{\text{net}} = Q_{\text{net}}, ruling out perpetual motion machines of the first kind (PMM1).",
        "realWorldApplication": "Steam power plant Rankine cycles, refrigeration compression systems, and biological metabolic caloric balance.",
        "variables": [
            {"symbol": r"\Delta U", "label": "Change in Internal Energy", "unit": "J"},
            {"symbol": "Q", "label": "Heat Added to System", "unit": "J"},
            {"symbol": "W", "label": "Work Done by System", "unit": "J"},
            {"symbol": "P", "label": "System Pressure", "unit": "Pa"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 8, 14],
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
        "formulaLatex": r"\Delta S_{\text{universe}} \ge 0, \quad dS = \frac{\delta Q_{\text{rev}}}{T}, \quad S = k_B \ln \Omega",
        "summary": "In any spontaneous real physical process, the total entropy of an isolated system (the universe) always increases, establishing the unidirectional thermodynamic arrow of time and the impossibility of 100% efficient heat-to-work conversion.",
        "derivation": r"Clausius formulation: It is impossible to construct a cyclic device whose sole effect is the transfer of heat from a cooler body to a hotter body. Kelvin-Planck formulation: It is impossible to construct a cyclic engine whose sole effect is the absorption of heat from a single thermal reservoir and complete conversion into equivalent work. Clausius inequality for any closed cycle: \oint \frac{\delta Q}{T} \le 0, with equality holding strictly for reversible cycles. Defining the state function entropy S such that for a reversible path dS \equiv \frac{\delta Q_{\text{rev}}}{T}. For an irreversible real process between states 1 and 2: \int_1^2 \frac{\delta Q}{T} < S_2 - S_1 = \Delta S. For an isolated system (\delta Q = 0), this necessitates \Delta S_{\text{isolated}} \ge 0. In Ludwig Boltzmann's statistical mechanics, entropy is linked to the number of microstates \Omega corresponding to a macroscopic state: S = k_B \ln \Omega. Spontaneous evolution drives systems from ordered, low-probability microstate configurations toward maximum thermodynamic probability.",
        "realWorldApplication": "Determining theoretical maximum efficiency limits of chemical fuel cells, refrigerators, heat pumps, and cosmological heat death models.",
        "variables": [
            {"symbol": "S", "label": "Thermodynamic Entropy", "unit": "J/K"},
            {"symbol": r"\delta Q_{\text{rev}}", "label": "Reversible Heat Transfer", "unit": "J"},
            {"symbol": "T", "label": "Absolute Temperature", "unit": "K"},
            {"symbol": r"\Omega", "label": "Microstate Multiplicity", "unit": "dimensionless"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 8, 16],
            "timeDilation": 1.0,
            "parameters": {
                "hotReservoirTemp": 500.0,
                "coldReservoirTemp": 300.0,
                "heatTransfer": 1000.0
            },
            "description": r"Partitioned dual-chamber thermal diffusion system tracking spontaneous entropy generation \Delta S > 0.",
            "apparatusType": "entropy_diffusion_chamber"
        }
    },
    {
        "id": "carnot-cycle-efficiency",
        "title": "Carnot Engine Cycle & Maximum Thermal Efficiency",
        "branch": "thermodynamics",
        "tag": "Thermodynamic Cycles",
        "difficulty": "Intermediate",
        "formulaLatex": r"\eta_{\text{carnot}} = 1 - \frac{T_C}{T_H} = \frac{W_{\text{net}}}{Q_H}",
        "summary": "Nicolas Léonard Sadi Carnot's 1824 theorem establishes that no heat engine operating between two thermal reservoirs can be more efficient than a reversible Carnot engine operating between the same two temperatures.",
        "derivation": r"The idealized Carnot cycle consists of four reversible stages: (1) Reversible isothermal expansion at T_H: Absorbs heat Q_H from hot reservoir while expanding from V_1 to V_2: Q_H = n R T_H \ln(V_2/V_1). (2) Reversible adiabatic expansion from T_H to T_C: Work done by gas with Q = 0, expanding from V_2 to V_3: T_H V_2^{\gamma-1} = T_C V_3^{\gamma-1}. (3) Reversible isothermal compression at T_C: Rejects heat Q_C to cold sink while compressing from V_3 to V_4: |Q_C| = n R T_C \ln(V_3/V_4). (4) Reversible adiabatic compression from T_C back to T_H: Compressing from V_4 to V_1: T_C V_4^{\gamma-1} = T_H V_1^{\gamma-1}. Dividing the two adiabatic relations: \frac{V_2^{\gamma-1}}{V_1^{\gamma-1}} = \frac{V_3^{\gamma-1}}{V_4^{\gamma-1}} \implies \frac{V_2}{V_1} = \frac{V_3}{V_4}. Thus, the logarithmic expansion ratios are identical: \ln(V_2/V_1) = \ln(V_3/V_4). The ratio of heats is therefore: \frac{|Q_C|}{Q_H} = \frac{n R T_C \ln(V_3/V_4)}{n R T_H \ln(V_2/V_1)} = \frac{T_C}{T_H}. Thermal efficiency is defined as net work output divided by heat input: \eta \equiv \frac{W_{\text{net}}}{Q_H} = \frac{Q_H - |Q_C|}{Q_H} = 1 - \frac{|Q_C|}{Q_H} = 1 - \frac{T_C}{T_H}.",
        "realWorldApplication": "Setting the fundamental upper efficiency benchmark for nuclear power plants, combined-cycle gas turbines, and geothermal generators.",
        "variables": [
            {"symbol": r"\eta_{\text{carnot}}", "label": "Carnot Thermal Efficiency", "unit": "dimensionless (0 to 1)"},
            {"symbol": "T_H", "label": "Hot Reservoir Temperature", "unit": "K"},
            {"symbol": "T_C", "label": "Cold Reservoir Temperature", "unit": "K"},
            {"symbol": "W_{\text{net}}", "label": "Net Mechanical Work Output", "unit": "J"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 8, 16],
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
        "formulaLatex": r"\frac{\Delta L}{L_0} = \alpha_L \Delta T, \quad \sigma_{\text{thermal}} = -E \alpha_L \Delta T",
        "summary": "As temperature increases, thermal kinetic agitation widens the average separation of atoms in asymmetric interatomic potential wells, causing macroscopic dimensional expansion. If constrained, severe thermal stress develops.",
        "derivation": r"In a crystal lattice, the interatomic potential energy U(r) as a function of atomic separation r is asymmetric (anharmonic Lennard-Jones or Morse potential): U(r) = U_0 + \frac{1}{2} k (r - r_0)^2 - g (r - r_0)^3. Calculating the thermal average displacement \langle r - r_0 \rangle using the Boltzmann distribution factor \exp(-U/k_B T): \langle r - r_0 \rangle \propto \frac{3g}{k^2} k_B T. Because the cubic anharmonicity factor g > 0, the mean atomic separation increases linearly with temperature T. On a macroscopic scale, fractional elongation is directly proportional to temperature change: \frac{\Delta L}{L_0} = \alpha_L \Delta T, where \alpha_L is the linear coefficient of thermal expansion. For volumetric expansion in isotropic solids: \beta \approx 3\alpha_L. If a solid bar is rigidly constrained between immovable abutments (\Delta L_{\text{total}} = 0), thermal expansion strain \epsilon_{\text{th}} = \alpha_L \Delta T is countered by compressive elastic strain \epsilon_{\text{mech}} = \frac{\sigma}{E}. By superposition: \epsilon_{\text{total}} = \alpha_L \Delta T + \frac{\sigma}{E} = 0 \implies \sigma_{\text{thermal}} = -E \alpha_L \Delta T, where E is Young's modulus.",
        "realWorldApplication": "Railway track expansion gaps (preventing summer sun kinks and buckling), bridge finger expansion joints, and bimetallic strip thermostats.",
        "variables": [
            {"symbol": r"\alpha_L", "label": "Linear Thermal Expansion Coefficient", "unit": "K⁻¹"},
            {"symbol": r"\Delta L / L_0", "label": "Fractional Thermal Strain", "unit": "dimensionless"},
            {"symbol": r"\sigma_{\text{thermal}}", "label": "Internal Thermal Stress", "unit": "Pa"},
            {"symbol": "E", "label": "Young's Elastic Modulus", "unit": "Pa"},
            {"symbol": r"\Delta T", "label": "Temperature Change", "unit": "K"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 6, 12],
            "timeDilation": 1.0,
            "parameters": {
                "initialLength": 2.0,
                "tempRise": 120.0,
                "alphaCoeff": 1.7e-5,
                "youngsModulus": 1.1e11
            },
            "description": "Bimetallic composite strip warping under heat and constrained bridge expansion joint.",
            "apparatusType": "bimetallic_expansion_bench"
        }
    }
]
