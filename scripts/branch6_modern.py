# -*- coding: utf-8 -*-
"""
Branch 6: Wave Mechanics & Modern/Quantum Foundations (12 concepts)
"""

BRANCH6_CONCEPTS = [
    {
        "id": "wave-superposition-interference",
        "title": "Principle of Wave Superposition & Wave Interference",
        "branch": "modern",
        "tag": "Wave Optics & Interference",
        "difficulty": "Foundational",
        "formulaLatex": r"\psi_{\text{total}}(\mathbf{r}, t) = \psi_1(\mathbf{r}, t) + \psi_2(\mathbf{r}, t), \quad I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos(\Delta \phi)",
        "summary": "When two or more propagating waves traverse the same spatial region, the resultant disturbance at any point equals the algebraic sum of the individual wave displacements. Coherent phase differences generate constructive and destructive interference fringes.",
        "derivation": r"Because the classical wave equation \nabla^2 \psi - \frac{1}{v^2}\frac{\partial^2 \psi}{\partial t^2} = 0 is a linear second-order partial differential equation, any linear combination of solutions is itself an exact solution: \psi_{\text{total}} = \psi_1 + \psi_2. Consider two monochromatic waves of equal angular frequency \omega and wavevector k having spatial amplitudes A_1, A_2 and phase difference \Delta \phi: \psi_1 = A_1 \cos(k x - \omega t) and \psi_2 = A_2 \cos(k x - \omega t + \Delta \phi). Summing the waves: \psi_{\text{total}} = A_1 \cos(\theta) + A_2 \cos(\theta + \Delta \phi) = [A_1 + A_2 \cos(\Delta \phi)]\cos\theta - A_2 \sin(\Delta \phi)\sin\theta. The time-averaged intensity I \propto \langle \psi_{\text{total}}^2 \rangle is the square of the resultant amplitude: I = A_1^2 + A_2^2 + 2 A_1 A_2 \cos(\Delta \phi) = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos(\Delta \phi). When \Delta \phi = 2m\pi (m \in \mathbb{Z}), interference is constructive with maximum intensity I_{\text{max}} = (\sqrt{I_1} + \sqrt{I_2})^2. When \Delta \phi = (2m + 1)\pi, interference is destructive with minimum intensity I_{\text{min}} = (\sqrt{I_1} - \sqrt{I_2})^2.",
        "realWorldApplication": "LIGO gravitational wave laser interferometers detecting spacetime metric distortions smaller than 1/10,000th of a proton diameter, and anti-reflective lens coatings.",
        "variables": [
            {"symbol": r"\psi", "label": "Wave Disturbance Field", "unit": "arbitrary"},
            {"symbol": "I", "label": "Resultant Wave Intensity", "unit": "W/m²"},
            {"symbol": r"\Delta \phi", "label": "Relative Phase Difference", "unit": "rad"},
            {"symbol": "k", "label": "Wavenumber (2π/λ)", "unit": "rad/m"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 8, 16],
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
        "formulaLatex": r"y(x, t) = 2A \sin(kx)\cos(\omega t), \quad \lambda_n = \frac{2L}{n}, \quad f_n = n \frac{v}{2L}",
        "summary": "Formed by the continuous superposition of two identical waves traveling in opposite directions along a bounded medium. The resulting pattern features stationary nodes (points of zero displacement) and antinodes (maximum oscillation).",
        "derivation": r"Consider two identical harmonic transverse waves propagating in opposite directions along a string under tension: y_1(x, t) = A \sin(kx - \omega t) (forward wave) and y_2(x, t) = A \sin(kx + \omega t) (reflected wave). Applying the trigonometric sum-to-product identity \sin\alpha + \sin\beta = 2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}: y(x, t) = y_1 + y_2 = A [\sin(kx - \omega t) + \sin(kx + \omega t)] = 2A \sin(kx) \cos(\omega t). Unlike traveling waves, this waveform does not propagate spatial phase: every point oscillates in place with local amplitude 2A|\sin(kx)|. Fixed boundary conditions at ends x = 0 and x = L require y(0, t) = y(L, t) = 0 for all t. The condition y(L, t) = 0 requires \sin(k L) = 0 \implies k_n L = n\pi \implies \frac{2\pi}{\lambda_n} L = n\pi \implies \lambda_n = \frac{2L}{n} (n = 1, 2, 3, \dots). The corresponding quantized harmonic eigenfrequencies are: f_n = \frac{v}{\lambda_n} = n \frac{v}{2L} = \frac{n}{2L}\sqrt{\frac{T_{\text{tension}}}{\mu}}.",
        "realWorldApplication": "Acoustic resonance in musical instruments (violins, guitars, organ pipes), microwave oven cavity standing wave hotspots, and quantum quantum well energy levels.",
        "variables": [
            {"symbol": "y(x, t)", "label": "Transverse String Displacement", "unit": "m"},
            {"symbol": r"\lambda_n", "label": "Harmonic Wavelength", "unit": "m"},
            {"symbol": "f_n", "label": "Normal Mode Harmonic Frequency", "unit": "Hz"},
            {"symbol": "n", "label": "Harmonic Integer Mode Index", "unit": "dimensionless"},
            {"symbol": "L", "label": "Boundary Domain Length", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 6, 14],
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
        "formulaLatex": r"f_o = f_s \left(\frac{v \pm v_o}{v \mp v_s}\right), \quad f_o = f_s \frac{\sqrt{1 - \beta^2}}{1 - \beta \cos \theta} \quad (\text{Relativistic})",
        "summary": "The apparent shift in observed wave frequency caused by relative motion between the wave emitter and observer. Moving sources compress wave crests forward (blueshift) and stretch them rearward (redshift).",
        "derivation": r"Consider a stationary medium where waves propagate at speed v. Let a source emit pulses with period T_s = 1/f_s while moving with velocity \mathbf{v}_s toward a stationary observer. Over one period T_s, the source moves a distance d = v_s T_s. The emitted wavefront has expanded to radius v T_s. The spatial distance between consecutive crests in the forward direction is compressed: \lambda' = v T_s - v_s T_s = (v - v_s) T_s = \frac{v - v_s}{f_s}. The frequency detected by the observer is f_o = \frac{v}{\lambda'} = f_s \left(\frac{v}{v - v_s}\right). If the observer also moves with speed v_o toward the source: f_o = f_s \left(\frac{v + v_o}{v - v_s}\right). In relativistic electrodynamics with electromagnetic waves in vacuum (v = c, \beta = v/c), time dilation slows the source clock: T_o = \gamma T_s (1 - \beta \cos\theta). Inverting yields the relativistic Doppler formula: f_o = f_s \frac{\sqrt{1 - \beta^2}}{1 - \beta \cos\theta}, demonstrating a transverse Doppler shift even at \theta = 90^\circ.",
        "realWorldApplication": "Doppler weather radar tracking tornado mesocyclones, police speed radar guns, and astronomical cosmological redshift proving the expansion of the universe (Hubble's law).",
        "variables": [
            {"symbol": "f_o", "label": "Observed Frequency", "unit": "Hz"},
            {"symbol": "f_s", "label": "Source Emitted Frequency", "unit": "Hz"},
            {"symbol": "v", "label": "Medium Phase Velocity", "unit": "m/s"},
            {"symbol": "v_s, v_o", "label": "Source & Observer Velocities", "unit": "m/s"},
            {"symbol": r"\beta", "label": "Relativistic Velocity Ratio (v/c)", "unit": "dimensionless"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 10, 18],
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
        "formulaLatex": r"n_1 \sin \theta_1 = n_2 \sin \theta_2, \quad \delta \int_A^B n(\mathbf{r}) \, ds = 0",
        "summary": "Describes the angular bending of light rays crossing the planar interface between two transparent optical media with refractive indices n_1 and n_2. It derives rigorously from Fermat's Principle of Least Time.",
        "derivation": r"Fermat's Principle states that the optical path taken by light between two fixed points A(0, y_A) in medium 1 and B(d, -y_B) in medium 2 minimizes elapsed travel time t. Let the ray cross the boundary interface (y = 0) at horizontal coordinate x. Phase velocities are v_1 = c/n_1 and v_2 = c/n_2. Total transit time is: t(x) = \frac{\sqrt{x^2 + y_A^2}}{v_1} + \frac{\sqrt{(d - x)^2 + y_B^2}}{v_2} = \frac{n_1}{c}\sqrt{x^2 + y_A^2} + \frac{n_2}{c}\sqrt{(d - x)^2 + y_B^2}. By Fermat's principle, the physical trajectory satisfies \frac{dt}{dx} = 0: \frac{dt}{dx} = \frac{n_1}{c}\frac{x}{\sqrt{x^2 + y_A^2}} - \frac{n_2}{c}\frac{d - x}{\sqrt{(d - x)^2 + y_B^2}} = 0. Recognizing geometric trigonometry where \sin\theta_1 = \frac{x}{\sqrt{x^2 + y_A^2}} and \sin\theta_2 = \frac{d - x}{\sqrt{(d - x)^2 + y_B^2}}, this gives: \frac{n_1}{c}\sin\theta_1 - \frac{n_2}{c}\sin\theta_2 = 0 \implies n_1 \sin\theta_1 = n_2 \sin\theta_2.",
        "realWorldApplication": "Prescription eyeglasses, high-performance camera lens achromatic doublets, and fiber optic core cladding index profile engineering.",
        "variables": [
            {"symbol": "n_1, n_2", "label": "Optical Refractive Indices", "unit": "dimensionless"},
            {"symbol": r"\theta_1", "label": "Angle of Incidence", "unit": "rad"},
            {"symbol": r"\theta_2", "label": "Angle of Refraction", "unit": "rad"},
            {"symbol": "c", "label": "Vacuum Speed of Light", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"\theta_c = \arcsin\left(\frac{n_2}{n_1}\right) \quad (n_1 > n_2), \quad R = 1.0 \; (\theta \ge \theta_c)",
        "summary": "When light propagating in an optically dense medium strikes an interface with a rarer medium at an angle exceeding the critical angle \theta_c, 100% of the electromagnetic energy is reflected back with zero transmitted power, generating an evanescent boundary wave.",
        "derivation": r"From Snell's law: n_1 \sin\theta_1 = n_2 \sin\theta_2 \implies \sin\theta_2 = \frac{n_1}{n_2}\sin\theta_1. When light travels from a higher index medium to a lower index medium (n_1 > n_2), the refracted angle \theta_2 is larger than the incident angle \theta_1. As \theta_1 increases, \theta_2 reaches its maximum physical limit of 90^\circ (\sin\theta_2 = 1). The incident angle producing this grazing emergence is the critical angle \theta_c: \frac{n_1}{n_2}\sin\theta_c = 1 \implies \theta_c = \arcsin\left(\frac{n_2}{n_1}\right). For any incident angle \theta_1 > \theta_c, \sin\theta_2 > 1, meaning no real transmitted propagating ray can exist. Applying electromagnetic boundary conditions from Fresnel's equations: the reflection coefficient magnitude is identically unity (|r_\perp| = |r_\parallel| = 1), reflecting 100% of radiant energy. An evanescent wave \mathbf{E} \sim e^{-\kappa z} decays exponentially into medium 2 without carrying time-averaged Poynting flux.",
        "realWorldApplication": "Telecommunications fiber optic cables transmitting global internet bandwidth thousands of kilometers without light leaking through glass cladding.",
        "variables": [
            {"symbol": r"\theta_c", "label": "Critical Angle of Incidence", "unit": "rad"},
            {"symbol": "n_1", "label": "Dense Core Index", "unit": "dimensionless"},
            {"symbol": "n_2", "label": "Rare Cladding Index", "unit": "dimensionless"},
            {"symbol": "R", "label": "Power Reflection Coefficient", "unit": "dimensionless"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"\frac{d\sigma}{d\Omega} = \left(\frac{z Z e^2}{4\pi \varepsilon_0 \cdot 4 E}\right)^2 \frac{1}{\sin^4(\theta/2)}, \quad b = \frac{z Z e^2}{4\pi \varepsilon_0 \cdot 2E} \cot(\theta/2)",
        "summary": "Ernest Rutherford's 1911 experiment bombarding thin gold foil with alpha particles. Large-angle backward deflections overturned Thomson's plum pudding model, establishing that atomic positive charge and mass are concentrated in a tiny dense nucleus.",
        "derivation": r"Consider an alpha particle of charge q_1 = z e (z = 2) and kinetic energy E = \frac{1}{2}m v_0^2 scattering from a stationary gold nucleus of charge q_2 = Z e (Z = 79) with impact parameter b. Under the repulsive Coulomb central force F = \frac{z Z e^2}{4\pi \varepsilon_0 r^2}, conservation of angular momentum gives L = m v_0 b = m r^2 \dot{\phi} = \text{const}. The change in linear momentum along the symmetry axis of the hyperbolic orbit is: \Delta p = \int F \cos\phi \, dt = \int_{-\phi_0}^{\phi_0} \frac{z Z e^2}{4\pi \varepsilon_0 r^2} \cos\phi \left(\frac{r^2 d\phi}{v_0 b}\right) = \frac{z Z e^2}{4\pi \varepsilon_0 v_0 b} \int_{-\phi_0}^{\phi_0} \cos\phi \, d\phi = \frac{2 z Z e^2}{4\pi \varepsilon_0 v_0 b} \sin\phi_0. From orbit geometry, \phi_0 = \frac{\pi - \theta}{2} \implies \sin\phi_0 = \cos(\theta/2). Also, momentum triangle gives \Delta p = 2 m v_0 \sin(\theta/2). Equating: 2 m v_0 \sin(\theta/2) = \frac{2 z Z e^2 \cos(\theta/2)}{4\pi \varepsilon_0 v_0 b} \implies b = \frac{z Z e^2}{4\pi \varepsilon_0 \cdot 2E} \cot(\theta/2). The differential scattering cross-section is \frac{d\sigma}{d\Omega} = \frac{b}{\sin\theta}\left|\frac{db}{d\theta}\right| = \left(\frac{z Z e^2}{4\pi \varepsilon_0 \cdot 4 E}\right)^2 \frac{1}{\sin^4(\theta/2)}.",
        "realWorldApplication": "Rutherford Backscattering Spectrometry (RBS) used in materials science for non-destructive surface thin-film elemental composition depth profiling.",
        "variables": [
            {"symbol": r"\frac{d\sigma}{d\Omega}", "label": "Differential Cross-Section", "unit": "m²/sr or barns/sr"},
            {"symbol": r"\theta", "label": "Scattering Angle", "unit": "rad"},
            {"symbol": "b", "label": "Impact Parameter", "unit": "m"},
            {"symbol": "E", "label": "Alpha Particle Incident Energy", "unit": "J or MeV"},
            {"symbol": "Z", "label": "Target Atomic Number", "unit": "dimensionless"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 8, 16],
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
        "formulaLatex": r"q = \frac{m g d}{V} = n e, \quad e \approx 1.602 \times 10^{-19}\text{ C}, \quad n \in \mathbb{Z}",
        "summary": "Robert Millikan's 1909 experiment proving that electric charge is fundamentally quantized in discrete integer multiples of an elementary quantum of charge e, measuring its magnitude with high precision.",
        "derivation": r"In Millikan's apparatus, microscopic atomized oil droplets of density \rho and radius r are introduced between two parallel horizontal capacitor plates separated by distance d with variable voltage V. (1) Free fall under gravity with zero electric field (V = 0): The droplet reaches downward terminal velocity v_1 when drag balances gravity and buoyancy: 6\pi \eta r v_1 = m_{\text{eff}} g = \frac{4}{3}\pi r^3 (\rho - \rho_{\text{air}}) g. From v_1, the droplet radius r is precisely determined: r = \sqrt{\frac{9\eta v_1}{2(\rho - \rho_{\text{air}})g}}. (2) Upward drift under applied electric field E = V/d: A voltage V is applied creating upward electrostatic force F_E = q E = q \frac{V}{d}. The droplet moves upward at steady velocity v_2: q \frac{V}{d} - m_{\text{eff}} g = 6\pi \eta r v_2. Substituting m_{\text{eff}} g = 6\pi \eta r v_1: q \frac{V}{d} = 6\pi \eta r (v_1 + v_2) \implies q = \frac{6\pi \eta r d (v_1 + v_2)}{V}. Millikan observed across thousands of drops that measured charge was always an exact integer multiple: q = n e with e \approx 1.602 \times 10^{-19} \text{ C}.",
        "realWorldApplication": "Establishing charge quantization in quantum electrodynamics and defining the SI base unit Ampere via the exact fixed elementary charge.",
        "variables": [
            {"symbol": "q", "label": "Net Droplet Electric Charge", "unit": "C"},
            {"symbol": "e", "label": "Elementary Charge Quantum", "unit": "C"},
            {"symbol": "n", "label": "Integer Number of Excess Electrons", "unit": "dimensionless"},
            {"symbol": "V", "label": "Suspension Plate Voltage", "unit": "V"},
            {"symbol": "r", "label": "Oil Droplet Radius", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 6, 12],
            "timeDilation": 1.0,
            "parameters": {
                "plateVoltage": 350.0,
                "plateSeparation": 0.016,
                "dropletRadius": 1.5e-6
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
        "formulaLatex": r"K_{\text{max}} = h f - \Phi = e V_{\text{stop}}, \quad f_{\text{threshold}} = \frac{\Phi}{h}",
        "summary": r"Albert Einstein's 1905 quantum hypothesis: light consists of discrete energy packets (photons) of energy E = hf. Electrons are ejected instantaneously from a metal surface only if photon energy exceeds the material's work function \Phi.",
        "derivation": r"Classical wave theory predicted that electron kinetic energy would increase with light wave intensity and that faint illumination would produce a time delay while electrons slowly absorb wave energy. Heinrich Hertz and Philipp Lenard observed instead that electron kinetic energy depends strictly on light frequency f, and emission is instantaneous. Albert Einstein resolved this by proposing that electromagnetic radiation is quantized into localized photons with energy E = h f, where h \approx 6.626 \times 10^{-34} \text{ J·s} is Planck's constant. When an electron absorbs a single photon, energy \Phi (the material work function) is expended to liberate the electron across the surface potential barrier. By conservation of energy, the maximum kinetic energy of ejected photoelectrons is: K_{\text{max}} = h f - \Phi. In a retarding electric potential, stopping voltage V_{\text{stop}} required to halt the fastest electrons satisfies e V_{\text{stop}} = K_{\text{max}} = h f - \Phi \implies V_{\text{stop}} = \left(\frac{h}{e}\right)f - \frac{\Phi}{e}. Below threshold frequency f_0 = \Phi/h, no electrons can be emitted regardless of light beam intensity.",
        "realWorldApplication": "Solar photovoltaic cells converting sunlight directly to electricity, night-vision photomultiplier tubes, and digital camera CMOS image sensors.",
        "variables": [
            {"symbol": "K_{\text{max}}", "label": "Maximum Photoelectron Kinetic Energy", "unit": "J or eV"},
            {"symbol": "h", "label": "Planck Constant", "unit": "J·s"},
            {"symbol": "f", "label": "Incident Light Frequency", "unit": "Hz"},
            {"symbol": r"\Phi", "label": "Material Work Function", "unit": "eV or J"},
            {"symbol": "V_{\text{stop}}", "label": "Stopping Voltage", "unit": "V"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 6, 14],
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
        "formulaLatex": r"\lambda = \frac{h}{p} = \frac{h}{m v} = \frac{h}{\sqrt{2m E_k}}",
        "summary": "Louis de Broglie's 1924 hypothesis establishing that all matter exhibits intrinsic wave-like properties. A moving particle of momentum p possesses an associated matter wavelength inversely proportional to its momentum.",
        "derivation": r"In special relativity, photons with zero rest mass possess energy E = h f and momentum p = E/c. Since c = f \lambda, photon momentum is p = \frac{h f}{c} = \frac{h}{\lambda} \implies \lambda = \frac{h}{p}. Louis de Broglie hypothesized that nature possesses deep fundamental symmetry: if electromagnetic waves behave like discrete corpuscular particles (photons), then material particles (electrons, protons) must also exhibit wave characteristics. For a massive particle with non-relativistic velocity v, momentum is p = m v. The associated matter wavelength is: \lambda = \frac{h}{p} = \frac{h}{m v}. For a particle accelerated through an electric potential difference V, kinetic energy is E_k = q V = \frac{p^2}{2m} \implies p = \sqrt{2m q V}. The de Broglie wavelength is therefore: \lambda = \frac{h}{\sqrt{2m q V}}. Experimentally confirmed in 1927 by Clinton Davisson and Lester Germer, and independently by George Paget Thomson, observing electron diffraction rings through nickel and gold crystalline lattices.",
        "realWorldApplication": "Transmission Electron Microscopes (TEM) achieving sub-angstrom spatial resolution (<0.05 nm) by exploiting picometer-wavelength high-energy electron beams.",
        "variables": [
            {"symbol": r"\lambda", "label": "De Broglie Matter Wavelength", "unit": "m"},
            {"symbol": "h", "label": "Planck Constant", "unit": "J·s"},
            {"symbol": "p", "label": "Particle Linear Momentum", "unit": "kg·m/s"},
            {"symbol": "m", "label": "Particle Rest Mass", "unit": "kg"},
            {"symbol": "v", "label": "Particle Velocity", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "modern" if False else "collisions",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"\Delta x \, \Delta p_x \ge \frac{\hbar}{2}, \quad \Delta E \, \Delta t \ge \frac{\hbar}{2}, \quad \hbar = \frac{h}{2\pi}",
        "summary": r"A fundamental mathematical limit in quantum mechanics stating that the position and linear momentum of a particle cannot be simultaneously measured with arbitrary precision. The product of their standard deviations is bounded below by \hbar/2.",
        "derivation": r"Formulated by Werner Heisenberg in 1927. In the Hilbert space formulation of quantum mechanics, physical observables correspond to Hermitian linear operators acting on wavefunctions \psi(x). Position \hat{x} and momentum \hat{p} = -i\hbar \frac{d}{dx} satisfy the fundamental canonical commutation relation: [\hat{x}, \hat{p}] \equiv \hat{x}\hat{p} - \hat{p}\hat{x} = i\hbar \hat{I}. By the Robertson-Schrödinger uncertainty theorem, for any two Hermitian operators \hat{A} and \hat{B}: (\Delta A)^2 (\Delta B)^2 \ge \left|\frac{1}{2i}\langle [\hat{A}, \hat{B}] \rangle\right|^2. Substituting \hat{A} = \hat{x} and \hat{B} = \hat{p}: (\Delta x)^2 (\Delta p)^2 \ge \left|\frac{1}{2i}(i\hbar)\right|^2 = \frac{\hbar^2}{4}. Taking the square root yields: \Delta x \, \Delta p \ge \frac{\hbar}{2}. The equality is saturated uniquely by Gaussian wave packets: \psi(x) = (\pi \sigma^2)^{-1/4} \exp(-x^2 / 2\sigma^2). The energy-time uncertainty relation \Delta E \, \Delta t \ge \frac{\hbar}{2} governs quantum vacuum fluctuations and unstable resonance decay lifetimes \tau \approx \hbar / \Gamma.",
        "realWorldApplication": "Quantum tunneling in semiconductor flash memory transistors, atomic scanning tunneling microscopes (STM), and zero-point energy in quantum cryogenic liquids.",
        "variables": [
            {"symbol": r"\Delta x", "label": "Position Measurement Uncertainty", "unit": "m"},
            {"symbol": r"\Delta p", "label": "Momentum Measurement Uncertainty", "unit": "kg·m/s"},
            {"symbol": r"\hbar", "label": "Reduced Planck Constant (h / 2π)", "unit": "J·s"},
            {"symbol": r"\Delta E", "label": "Energy State Uncertainty", "unit": "J"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 8, 14],
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
        "formulaLatex": r"r_n = \frac{4\pi \varepsilon_0 \hbar^2 n^2}{m_e e^2} = n^2 a_0, \quad E_n = -\frac{m_e e^4}{32\pi^2 \varepsilon_0^2 \hbar^2} \frac{1}{n^2} = -\frac{13.6\text{ eV}}{n^2}",
        "summary": r"Niels Bohr's 1913 semi-classical model of the hydrogen atom, postulating that orbital angular momentum of electrons is quantized in integer units of \hbar. This resolved atomic collapse and explained discrete spectral emission series.",
        "derivation": r"In classical electrodynamics, an accelerating electron in circular orbit would continuously radiate electromagnetic power (Larmor formula) and spiral into the nucleus within 10⁻¹¹ seconds. Bohr postulated that electrons inhabit discrete stationary non-radiating orbits governed by quantized orbital angular momentum: L = m_e v r = n \hbar (n = 1, 2, 3, \dots). Equating Coulomb attraction to centripetal acceleration: \frac{1}{4\pi \varepsilon_0}\frac{e^2}{r^2} = m_e \frac{v^2}{r} \implies v^2 = \frac{e^2}{4\pi \varepsilon_0 m_e r}. From quantization, v = \frac{n \hbar}{m_e r}. Squaring: \frac{n^2 \hbar^2}{m_e^2 r^2} = \frac{e^2}{4\pi \varepsilon_0 m_e r}. Solving for orbital radius r_n: r_n = \frac{4\pi \varepsilon_0 \hbar^2}{m_e e^2} n^2 = n^2 a_0, where a_0 \approx 0.529 \times 10^{-10} \text{ m} is the Bohr radius. Total mechanical energy is E = K + U = \frac{1}{2} m_e v^2 - \frac{e^2}{4\pi \varepsilon_0 r} = -\frac{e^2}{8\pi \varepsilon_0 r}. Substituting r_n: E_n = -\frac{m_e e^4}{32\pi^2 \varepsilon_0^2 \hbar^2}\frac{1}{n^2} = -\frac{13.606\text{ eV}}{n^2}. Transition wavelengths satisfy the Rydberg formula: \frac{1}{\lambda} = R_\infty \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right).",
        "realWorldApplication": "Hydrogen emission spectrometry (Balmer, Lyman, Paschen series) used to identify elemental compositions in distant stars and galaxies.",
        "variables": [
            {"symbol": "r_n", "label": "Quantized Orbital Radius", "unit": "m"},
            {"symbol": "a_0", "label": "Bohr Radius", "unit": "m"},
            {"symbol": "E_n", "label": "Principal Energy Level", "unit": "eV or J"},
            {"symbol": "n", "label": "Principal Quantum Number", "unit": "dimensionless"}
        ],
        "presetConfig": {
            "domain": "mechanics",
            "cameraPosition": [0, 8, 16],
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
        "formulaLatex": r"\Delta \lambda = \lambda' - \lambda = \frac{h}{m_e c} (1 - \cos \theta) = \lambda_C (1 - \cos \theta)",
        "summary": "Arthur Compton's 1923 experiment demonstrating the particle nature of electromagnetic radiation. High-energy X-ray or gamma photons scatter elastically off stationary electrons, imparting momentum and recoiling with an increased (longer) wavelength.",
        "derivation": r"Treat the collision between an incident photon and a stationary free electron (mass m_e) relativistically in 2D. Initial photon: energy E = h f = \frac{h c}{\lambda}, momentum \mathbf{p} = \frac{h}{\lambda}\hat{\mathbf{i}}. Initial electron at rest: energy E_e = m_e c^2, momentum \mathbf{p}_e = \mathbf{0}. Scattered photon at angle \theta: energy E' = \frac{h c}{\lambda'}, momentum \mathbf{p}' with magnitude \frac{h}{\lambda'}. Recoil electron at angle \phi: momentum \mathbf{p}_e'. Conservation of relativistic energy: E + m_e c^2 = E' + E_e' \implies E_e' = (E - E') + m_e c^2. Conservation of vector momentum: \mathbf{p} = \mathbf{p}' + \mathbf{p}_e' \implies \mathbf{p}_e' = \mathbf{p} - \mathbf{p}'. Squaring the momentum equation: |\mathbf{p}_e'|^2 = p^2 + {p'}^2 - 2 p p' \cos\theta. Using relativistic energy-momentum invariant (E_e')^2 = (p_e' c)^2 + (m_e c^2)^2: [(E - E') + m_e c^2]^2 = c^2 [p^2 + {p'}^2 - 2 p p' \cos\theta] + m_e^2 c^4. Expanding both sides and substituting E = p c, E' = p' c: -2 E E' + 2 m_e c^2 (E - E') = -2 c^2 p p' \cos\theta = -2 E E' \cos\theta. Simplifying: m_e c^2 (E - E') = E E' (1 - \cos\theta) \implies \frac{E - E'}{E E'} = \frac{1 - \cos\theta}{m_e c^2} \implies \frac{1}{E'} - \frac{1}{E} = \frac{1 - \cos\theta}{m_e c^2}. Substituting E = \frac{h c}{\lambda} and E' = \frac{h c}{\lambda'}: \frac{\lambda'}{h c} - \frac{\lambda}{h c} = \frac{1 - \cos\theta}{m_e c^2} \implies \lambda' - \lambda = \frac{h}{m_e c}(1 - \cos\theta). The Compton wavelength of an electron is \lambda_C = \frac{h}{m_e c} \approx 2.426 \times 10^{-12} \text{ m}.",
        "realWorldApplication": "Radiation therapy oncology planning, gamma-ray telescope Compton cameras (NASA Fermi Gamma-ray Space Telescope), and PET scan attenuation correction.",
        "variables": [
            {"symbol": r"\Delta \lambda", "label": "Compton Wavelength Shift", "unit": "m"},
            {"symbol": r"\lambda_C", "label": "Compton Wavelength of Electron", "unit": "m (2.426 pm)"},
            {"symbol": r"\theta", "label": "Photon Scattering Angle", "unit": "rad"},
            {"symbol": "h", "label": "Planck Constant", "unit": "J·s"},
            {"symbol": "m_e", "label": "Electron Rest Mass", "unit": "kg"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 8, 14],
            "timeDilation": 1.0,
            "parameters": {
                "incidentWavelengthPm": 20.0,
                "scatterAngleDeg": 90.0
            },
            "description": "Relativistic photon-electron elastic scattering chamber recording wavelength elongation and electron recoil.",
            "apparatusType": "compton_spectrometer_chamber"
        }
    }
]
