# -*- coding: utf-8 -*-
"""
Branch 3: Electromagnetism & Field Theory (18 concepts)
"""

BRANCH3_CONCEPTS = [
    {
        "id": "coulombs-law",
        "title": "Coulomb's Law & Superposition of Electrostatic Forces",
        "branch": "electromagnetism",
        "tag": "Electrostatics",
        "difficulty": "Foundational",
        "formulaLatex": r"\mathbf{F}_{12} = \frac{1}{4\pi \varepsilon_0} \frac{q_1 q_2}{r_{12}^2} \hat{\mathbf{r}}_{12}",
        "summary": "The electrostatic force between two stationary electric charges is directly proportional to the product of their charges, inversely proportional to the square of their separation distance, and directed along the line joining them. Net force on any charge is the vector superposition of forces from all other charges.",
        "derivation": r"Experimentally established by Charles-Augustin de Coulomb using a torsion balance. In SI units, the force exerted by point charge q_1 on point charge q_2 separated by displacement \mathbf{r}_{12} = \mathbf{r}_2 - \mathbf{r}_1 with magnitude r_{12} = |\mathbf{r}_{12}| is: \mathbf{F}_{12} = \frac{1}{4\pi \varepsilon_0} \frac{q_1 q_2}{r_{12}^2} \hat{\mathbf{r}}_{12}, where \varepsilon_0 \approx 8.854 \times 10^{-12} \text{ F/m} is the vacuum permittivity. By Newton's third law, \mathbf{F}_{21} = -\mathbf{F}_{12}. For an ensemble of N discrete charges q_i, the linearity of Maxwell's electrostatic equations guarantees linear vector superposition: \mathbf{F}_{\text{total}, j} = \sum_{i \ne j}^N \mathbf{F}_{ij} = \frac{q_j}{4\pi \varepsilon_0} \sum_{i \ne j}^N \frac{q_i}{|\mathbf{r}_j - \mathbf{r}_i|^3} (\mathbf{r}_j - \mathbf{r}_i).",
        "realWorldApplication": "Electrostatic dust precipitation in industrial chimney scrubbers and toner deposition in laser printers and xerography.",
        "variables": [
            {"symbol": r"\mathbf{F}_{12}", "label": "Electrostatic Force Vector", "unit": "N"},
            {"symbol": "q_1, q_2", "label": "Point Electric Charges", "unit": "C"},
            {"symbol": r"\varepsilon_0", "label": "Vacuum Permittivity", "unit": "F/m"},
            {"symbol": "r_{12}", "label": "Charge Separation Distance", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 8, 16],
            "timeDilation": 1.0,
            "parameters": {
                "charge1": 2.0e-6,
                "charge2": -2.0e-6,
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
        "formulaLatex": r"\mathbf{E}(\mathbf{r}) = \frac{1}{4\pi \varepsilon_0} \sum_{i=1}^N \frac{q_i}{|\mathbf{r} - \mathbf{r}_i|^3} (\mathbf{r} - \mathbf{r}_i)",
        "summary": "The electric field at any spatial point represents the force per unit positive test charge placed at that location. Electric field lines emanate radially outward from positive charges and terminate on negative charges.",
        "derivation": r"Define the electric field as the limit of force per unit test charge q_0 as q_0 \to 0 to prevent field distortion: \mathbf{E}(\mathbf{r}) \equiv \lim_{q_0 \to 0} \frac{\mathbf{F}(\mathbf{r})}{q_0}. Substituting Coulomb's force from a source charge q at \mathbf{r}' gives: \mathbf{E}(\mathbf{r}) = \frac{1}{4\pi \varepsilon_0} \frac{q}{|\mathbf{r} - \mathbf{r}'|^2} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|}. For a continuous spatial charge density \rho(\mathbf{r}'): \mathbf{E}(\mathbf{r}) = \frac{1}{4\pi \varepsilon_0} \iiint_V \frac{\rho(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|^3} (\mathbf{r} - \mathbf{r}') \, d^3\mathbf{r}'. The field line density at any point is directly proportional to field magnitude |\mathbf{E}|.",
        "realWorldApplication": "Field emission electron microscopes and high-voltage transmission line insulator corona discharge prevention.",
        "variables": [
            {"symbol": r"\mathbf{E}", "label": "Electric Field Vector", "unit": "N/C or V/m"},
            {"symbol": "q_i", "label": "Source Charge", "unit": "C"},
            {"symbol": r"\mathbf{r}", "label": "Observation Field Point", "unit": "m"},
            {"symbol": r"\rho", "label": "Volume Charge Density", "unit": "C/m³"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 10, 18],
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
        "formulaLatex": r"\Phi_E = \oint_{\partial V} \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\text{enclosed}}}{\varepsilon_0} \iff \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}",
        "summary": "The total electric flux passing outward through any closed mathematical surface (Gaussian surface) is directly proportional to the total net electric charge enclosed within that surface, independent of its shape or size.",
        "derivation": r"For a single point charge q at the origin, the electric field is \mathbf{E} = \frac{q}{4\pi \varepsilon_0 r^2} \hat{\mathbf{r}}. Integrating over a concentric sphere of radius r with normal area element d\mathbf{A} = r^2 d\Omega \, \hat{\mathbf{r}}: \Phi_E = \oint_S \mathbf{E} \cdot d\mathbf{A} = \oint_S \left(\frac{q}{4\pi \varepsilon_0 r^2} \hat{\mathbf{r}}\right) \cdot (r^2 d\Omega \, \hat{\mathbf{r}}) = \frac{q}{4\pi \varepsilon_0} \oint_S d\Omega = \frac{q}{4\pi \varepsilon_0} (4\pi) = \frac{q}{\varepsilon_0}. By the Divergence Theorem, the surface integral transforms into a volume integral: \oint_{\partial V} \mathbf{E} \cdot d\mathbf{A} = \iiint_V (\nabla \cdot \mathbf{E}) \, dV = \frac{1}{\varepsilon_0} \iiint_V \rho \, dV. Because this must hold for any arbitrary volume V, the integrands must be identical everywhere: \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}, establishing the first of Maxwell's equations.",
        "realWorldApplication": "Faraday cages providing electromagnetic shielding for sensitive MRI suites, avionics electronics, and lightning strike protection in commercial aircraft.",
        "variables": [
            {"symbol": r"\Phi_E", "label": "Electric Flux", "unit": "N·m²/C or V·m"},
            {"symbol": "Q_{\text{enc}}", "label": "Enclosed Net Charge", "unit": "C"},
            {"symbol": r"d\mathbf{A}", "label": "Outward Normal Area Vector", "unit": "m²"},
            {"symbol": r"\nabla \cdot \mathbf{E}", "label": "Field Divergence", "unit": "V/m²"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 8, 14],
            "timeDilation": 1.0,
            "parameters": {
                "enclosedCharge": 5.0e-6,
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
        "formulaLatex": r"\mathbf{E} = -\nabla V, \quad V(\mathbf{r}) = -\int_{\mathbf{r}_{\text{ref}}}^{\mathbf{r}} \mathbf{E} \cdot d\mathbf{l} = \frac{1}{4\pi \varepsilon_0} \frac{q}{|\mathbf{r}|}",
        "summary": r"Because static electric fields are conservative (\nabla \times \mathbf{E} = \mathbf{0}), the electric field vector is uniquely represented as the negative spatial gradient of a scalar electric potential field V.",
        "derivation": r"Faraday's law in electrostatics reduces to \nabla \times \mathbf{E} = \mathbf{0}. By vector calculus, any curl-free vector field can be expressed as the gradient of a scalar function: \mathbf{E} = -\nabla V. The negative sign ensures that the electric field points in the direction of steepest decrease of potential (from high voltage to low voltage). The potential difference between two points A and B is path-independent: V(B) - V(A) = -\int_A^B \mathbf{E} \cdot d\mathbf{l}. Setting reference zero at infinity (V(\infty) = 0) for a point charge q at the origin: V(\mathbf{r}) = -\int_\infty^r \left(\frac{q}{4\pi \varepsilon_0 {r'}^2}\right) dr' = \left[\frac{q}{4\pi \varepsilon_0 r'}\right]_\infty^r = \frac{1}{4\pi \varepsilon_0} \frac{q}{r}. In Cartesian coordinates: \mathbf{E} = -\left(\frac{\partial V}{\partial x}\hat{\mathbf{i}} + \frac{\partial V}{\partial y}\hat{\mathbf{j}} + \frac{\partial V}{\partial z}\hat{\mathbf{k}}\right).",
        "realWorldApplication": "Cathode ray tubes, electron guns, and electrostatic ion thrusters where potential gradients \nabla V accelerate xenon ions to 30 km/s.",
        "variables": [
            {"symbol": "V", "label": "Electric Potential (Voltage)", "unit": "V"},
            {"symbol": r"\mathbf{E}", "label": "Electric Field Gradient", "unit": "V/m"},
            {"symbol": r"d\mathbf{l}", "label": "Path Displacement Element", "unit": "m"},
            {"symbol": "q", "label": "Source Charge", "unit": "C"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 10, 16],
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
        "formulaLatex": r"V(\mathbf{r}) = C \implies dV = -\mathbf{E} \cdot d\mathbf{l} = 0 \implies \mathbf{E} \perp \mathcal{S}_{\text{equi}}",
        "summary": "An equipotential surface is a geometric locus of points in space having identical electric potential. Electric field vectors are strictly perpendicular to equipotential surfaces at every intersection point.",
        "derivation": r"Let a surface \mathcal{S} be defined by V(x, y, z) = C (constant). Consider an infinitesimal displacement d\mathbf{l} lying tangent to this surface. By differential calculus: dV = \frac{\partial V}{\partial x} dx + \frac{\partial V}{\partial y} dy + \frac{\partial V}{\partial z} dz = \nabla V \cdot d\mathbf{l}. Because potential is constant everywhere along the surface, dV = 0 for any tangential step: \nabla V \cdot d\mathbf{l} = 0. Since \mathbf{E} = -\nabla V, this requires: -\mathbf{E} \cdot d\mathbf{l} = 0 \implies \mathbf{E} \cdot d\mathbf{l} = 0. Because this holds for all tangential vectors d\mathbf{l} on the surface, the electric field vector \mathbf{E} must be perpendicular to the tangent plane of the equipotential surface: \mathbf{E} \perp \mathcal{S}_{\text{equi}}. Furthermore, the work done moving a charge along an equipotential surface is identically zero: W = -q \int \mathbf{E} \cdot d\mathbf{l} = 0.",
        "realWorldApplication": "Electrostatic lens focusing in transmission electron microscopes (TEM) and design of high-voltage transmission bushing stress cones.",
        "variables": [
            {"symbol": r"\mathcal{S}_{\text{equi}}", "label": "Equipotential Surface", "unit": "manifold"},
            {"symbol": "V", "label": "Scalar Potential Value", "unit": "V"},
            {"symbol": r"\mathbf{E}", "label": "Orthogonal Electric Field", "unit": "V/m"},
            {"symbol": "W", "label": "Work Done Along Surface", "unit": "J"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 8, 14],
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
        "formulaLatex": r"C = \frac{\kappa \varepsilon_0 A}{d}, \quad u_E = \frac{1}{2} \varepsilon_0 E^2, \quad U = \frac{1}{2} C V^2",
        "summary": r"Capacitance quantifies the capacity of a conductor configuration to store separated electric charge per unit potential difference. Introducing a dielectric material of permittivity \kappa scales capacitance by polarizing bound molecular dipoles.",
        "derivation": r"For two planar parallel conducting plates of area A separated by distance d with surface charge density \sigma = Q/A, Gauss's law gives electric field between plates: E_0 = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\varepsilon_0 A}. Potential difference is V = E_0 d = \frac{Q d}{\varepsilon_0 A}. Capacitance is defined as C_0 \equiv \frac{Q}{V} = \frac{\varepsilon_0 A}{d}. Inserting a linear dielectric material of dielectric constant \kappa reduces the internal electric field via induced bound polarization charges: E = \frac{E_0}{\kappa} \implies V = \frac{V_0}{\kappa}. The new capacitance increases: C = \frac{Q}{V} = \kappa C_0 = \frac{\kappa \varepsilon_0 A}{d}. Total stored electrostatic energy is derived by charging plates incrementally: U = \int_0^Q V(q') dq' = \int_0^Q \frac{q'}{C} dq' = \frac{Q^2}{2C} = \frac{1}{2} C V^2. Dividing by volume A d yields energy density: u_E = \frac{U}{A d} = \frac{1}{2} \varepsilon_0 E^2.",
        "realWorldApplication": "Supercapacitors in regenerative braking systems, defibrillator discharge circuits, and computer DRAM capacitive memory cell arrays.",
        "variables": [
            {"symbol": "C", "label": "Capacitance", "unit": "F"},
            {"symbol": r"\kappa", "label": "Dielectric Constant (Relative Permittivity)", "unit": "dimensionless"},
            {"symbol": "A", "label": "Plate Surface Area", "unit": "m²"},
            {"symbol": "d", "label": "Plate Separation Gap", "unit": "m"},
            {"symbol": "u_E", "label": "Electrostatic Energy Density", "unit": "J/m³"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"\mathbf{J} = n q \mathbf{v}_d = \sigma \mathbf{E}, \quad \mathbf{v}_d = -\frac{e \tau}{m_e} \mathbf{E}",
        "summary": r"Under an applied macroscopic electric field, conduction electrons undergo rapid random thermal collisions while superimposing a net slow directional drift velocity. This yields the microscopic local form of Ohm's law: J = \sigma E.",
        "derivation": r"In the Drude model of electrical conduction, electrons with charge -e and mass m_e experience acceleration \mathbf{a} = -\frac{e \mathbf{E}}{m_e} between lattice collisions. If the mean time between randomized scattering events is \tau (relaxation time), the average acquired drift velocity is: \mathbf{v}_d = \mathbf{a} \tau = -\frac{e \tau}{m_e} \mathbf{E}. In a conductor with free carrier number density n, current density \mathbf{J} is total charge crossing unit area per second: \mathbf{J} = n (-e) \mathbf{v}_d = n (-e) \left(-\frac{e \tau}{m_e} \mathbf{E}\right) = \left(\frac{n e^2 \tau}{m_e}\right) \mathbf{E}. Defining electrical conductivity as \sigma \equiv \frac{n e^2 \tau}{m_e}, we obtain microscopic Ohm's law: \mathbf{J} = \sigma \mathbf{E}. For a wire of length L and cross-section A with uniform field E = V/L and current I = J A, this maps to macroscopic Ohm's law V = I R with resistance R = \frac{L}{\sigma A}.",
        "realWorldApplication": "Integrated circuit interconnect metal selection (copper vs aluminium) and semiconductor electromigration mitigation.",
        "variables": [
            {"symbol": r"\mathbf{v}_d", "label": "Electron Drift Velocity", "unit": "m/s"},
            {"symbol": r"\mathbf{J}", "label": "Current Density", "unit": "A/m²"},
            {"symbol": r"\sigma", "label": "Electrical Conductivity", "unit": r"S/m or (\Omega·m)⁻¹"},
            {"symbol": r"\tau", "label": "Mean Scattering Relaxation Time", "unit": "s"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 5, 10],
            "timeDilation": 0.8,
            "parameters": {
                "carrierDensity": 8.5e28,
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
        "formulaLatex": r"\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})",
        "summary": "The fundamental unified force exerted by electromagnetic fields on a charged particle. The electric component accelerates along the field lines, while the magnetic component deflects perpendicularly to both velocity and magnetic field vectors.",
        "derivation": r"Formulated by Hendrik Lorentz. The electric force \mathbf{F}_E = q\mathbf{E} is velocity-independent and can perform mechanical work on the charge: dW_E = \mathbf{F}_E \cdot d\mathbf{l} = q\mathbf{E} \cdot \mathbf{v} dt. The magnetic force \mathbf{F}_B = q(\mathbf{v} \times \mathbf{B}) arises from relativistic transformation of Coulomb fields between moving frames. By vector product properties, \mathbf{F}_B is strictly perpendicular to instantaneous velocity \mathbf{v}: \mathbf{F}_B \cdot \mathbf{v} = q(\mathbf{v} \times \mathbf{B}) \cdot \mathbf{v} = 0. Consequently, the rate of work done by a purely magnetic field is identically zero: \frac{dW_B}{dt} = \mathbf{F}_B \cdot \mathbf{v} = 0. Magnetic fields alter the heading and trajectory curvature of charged particles, conserving instantaneous kinetic energy and scalar speed.",
        "realWorldApplication": "Tokamak fusion reactors (ITER) magnetically confining 150-million-degree plasma particles via helical magnetic field coils.",
        "variables": [
            {"symbol": r"\mathbf{F}", "label": "Total Lorentz Force", "unit": "N"},
            {"symbol": "q", "label": "Particle Electric Charge", "unit": "C"},
            {"symbol": r"\mathbf{E}", "label": "Electric Field Vector", "unit": "V/m"},
            {"symbol": r"\mathbf{B}", "label": "Magnetic Flux Density", "unit": "T"},
            {"symbol": r"\mathbf{v}", "label": "Particle Velocity Vector", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 8, 16],
            "timeDilation": 1.0,
            "parameters": {
                "particleCharge": 1.602e-19,
                "particleMass": 9.109e-31,
                "electricFieldY": 0.0,
                "magneticFieldZ": 0.5,
                "initialVelocityX": 2.0e6
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
        "formulaLatex": r"\omega_c = \frac{q B}{m}, \quad r_L = \frac{m v_\perp}{q B}",
        "summary": "In a uniform magnetic field, a charged particle undergoes circular cyclotron gyration with an angular frequency that is strictly independent of particle speed or orbit radius (in the non-relativistic regime).",
        "derivation": r"Consider a particle of mass m and charge q injected with velocity \mathbf{v} into a uniform magnetic field \mathbf{B} = B \hat{\mathbf{z}}. The velocity resolves into parallel component v_\parallel = v_z and perpendicular component v_\perp = \sqrt{v_x^2 + v_y^2}. Because \mathbf{F}_B = q(\mathbf{v} \times \mathbf{B}) has zero z-component, v_\parallel = \text{const}, producing uniform longitudinal drift. In the perpendicular plane, the magnetic force acts as pure centripetal force: q v_\perp B = m \frac{v_\perp^2}{r_L} \implies r_L = \frac{m v_\perp}{q B}, where r_L is the Larmor (gyroradius). The cyclotron angular frequency is \omega_c = \frac{v_\perp}{r_L} = \frac{q B}{m}. Remarkably, \omega_c is independent of orbital radius r_L and velocity v_\perp. This isochronism allows fixed-frequency RF electric fields across 'Dee' gaps in a cyclotron to continuously accelerate particles into expanding spirals.",
        "realWorldApplication": "Medical isotope production cyclotrons (synthesizing Fluorine-18 for PET cancer imaging scans) and mass spectrometry.",
        "variables": [
            {"symbol": r"\omega_c", "label": "Cyclotron Angular Frequency", "unit": "rad/s"},
            {"symbol": "r_L", "label": "Larmor Gyroradius", "unit": "m"},
            {"symbol": "B", "label": "Magnetic Field Strength", "unit": "T"},
            {"symbol": "v_\\perp", "label": "Perpendicular Velocity", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 10, 16],
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
        "formulaLatex": r"\frac{e}{m_e} = \frac{E^2}{2 V_a B^2} = \frac{v_x}{r B}",
        "summary": "J.J. Thomson's 1897 discovery of the electron: using crossed electric and magnetic velocity filters and magnetic deflection to determine the fundamental charge-to-mass ratio e/m_e of cathode ray corpuscles.",
        "derivation": r"In Thomson's experiment, electrons are accelerated from a cathode through anode potential V_a, acquiring kinetic energy: \frac{1}{2} m_e v_x^2 = e V_a \implies v_x = \sqrt{\frac{2e V_a}{m_e}}. The beam passes through perpendicular electric (\mathbf{E} = E \hat{\mathbf{y}}) and magnetic (\mathbf{B} = B \hat{\mathbf{z}}) fields. Adjusting fields to achieve zero net vertical deflection (\mathbf{F}_{\text{net}} = \mathbf{0}): e E = e v_x B \implies v_x = \frac{E}{B}. Equating the two velocity expressions: \frac{E}{B} = \sqrt{\frac{2e V_a}{m_e}} \implies \frac{E^2}{B^2} = \frac{2e V_a}{m_e} \implies \frac{e}{m_e} = \frac{E^2}{2 V_a B^2}. Alternatively, with electric field turned off, the beam bends in the magnetic field alone into circular arc of radius r: r = \frac{m_e v_x}{e B} \implies \frac{e}{m_e} = \frac{v_x}{r B} = \frac{E}{r B^2}. Thomson obtained \frac{e}{m_e} \approx 1.76 \times 10^{11} \text{ C/kg}, proving cathode rays were subatomic particles ~1836 times lighter than hydrogen ions.",
        "realWorldApplication": "Mass spectrometers separating chemical isotopes and modern scanning electron microscope column optics.",
        "variables": [
            {"symbol": "e/m_e", "label": "Specific Charge of Electron", "unit": "C/kg"},
            {"symbol": "E", "label": "Electric Field Strength", "unit": "V/m"},
            {"symbol": "B", "label": "Magnetic Field Strength", "unit": "T"},
            {"symbol": "V_a", "label": "Anode Accelerating Voltage", "unit": "V"},
            {"symbol": "r", "label": "Circular Deflection Radius", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 6, 14],
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
        "formulaLatex": r"\boldsymbol{\tau} = \boldsymbol{\mu} \times \mathbf{B}, \quad U = -\boldsymbol{\mu} \cdot \mathbf{B}, \quad \boldsymbol{\mu} = I \mathbf{A}",
        "summary": r"A planar current loop acts as a magnetic dipole with dipole moment vector \boldsymbol{\mu} = I \mathbf{A}. In an external magnetic field, it experiences a restoring torque seeking to align its dipole axis with the field lines.",
        "derivation": r"Consider a rectangular loop of dimensions a \times b carrying current I in a uniform magnetic field \mathbf{B} = B \hat{\mathbf{z}}. Let the loop normal \hat{\mathbf{n}} make angle \theta with \mathbf{B}. The magnetic forces on the opposite parallel sides of length a are F = I a B, oriented in opposite directions with separation distance d = b \sin\theta. The net force is zero: \mathbf{F}_{\text{net}} = \mathbf{0}, but the forces create a mechanical couple (torque): \tau = F d = (I a B)(b \sin\theta) = I (a b) B \sin\theta. Recognizing the loop area A = a b and defining the magnetic dipole moment vector \boldsymbol{\mu} \equiv I A \hat{\mathbf{n}}, the vector torque is: \boldsymbol{\tau} = \boldsymbol{\mu} \times \mathbf{B}. The work required to rotate the dipole against torque from reference 90^\circ is the potential energy: U(\theta) = -\int_{\pi/2}^\theta \tau \, d\theta' = -\int_{\pi/2}^\theta (-\mu B \sin\theta') d\theta' = -\mu B \cos\theta = -\boldsymbol{\mu} \cdot \mathbf{B}.",
        "realWorldApplication": "Galvanometer needle movements, electric motor rotors, and Magnetic Resonance Imaging (MRI) nuclear spin alignment.",
        "variables": [
            {"symbol": r"\boldsymbol{\mu}", "label": "Magnetic Dipole Moment", "unit": "A·m² or J/T"},
            {"symbol": r"\boldsymbol{\tau}", "label": "Magnetic Torque", "unit": "N·m"},
            {"symbol": "U", "label": "Dipole Potential Energy", "unit": "J"},
            {"symbol": "I", "label": "Loop Current", "unit": "A"},
            {"symbol": "A", "label": "Enclosed Loop Area", "unit": "m²"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"\mathbf{B}(\mathbf{r}) = \frac{\mu_0 I}{4\pi} \int_C \frac{d\mathbf{l}' \times (\mathbf{r} - \mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|^3}",
        "summary": r"Calculates the magnetic field generated by steady electric currents. Each infinitesimal current element d\mathbf{l}' contributes a magnetic field element perpendicular to both the current direction and the displacement vector.",
        "derivation": r"Discovered empirically by Jean-Baptiste Biot and Félix Savart in 1820. The differential magnetic field contribution d\mathbf{B} from a current element I d\mathbf{l}' at \mathbf{r}' observed at \mathbf{r} with displacement \mathbf{R} = \mathbf{r} - \mathbf{r}' is: d\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi} \frac{I d\mathbf{l}' \times \hat{\mathbf{R}}}{R^2} = \frac{\mu_0 I}{4\pi} \frac{d\mathbf{l}' \times \mathbf{R}}{R^3}, where \mu_0 = 4\pi \times 10^{-7} \text{ T·m/A} is vacuum permeability. For an infinitely long straight wire carrying current I along the z-axis: integrating from z' = -\infty to +\infty at perpendicular distance r yields: B = \frac{\mu_0 I}{4\pi} \int_{-\infty}^\infty \frac{r \, dz'}{(r^2 + {z'}^2)^{3/2}} = \frac{\mu_0 I}{2\pi r}, directed azimuthally (\hat{\boldsymbol{\phi}}) by the right-hand rule.",
        "realWorldApplication": "Electromagnet core winding design and high-current power transmission line electromagnetic field (EMF) compliance calculations.",
        "variables": [
            {"symbol": r"\mathbf{B}", "label": "Magnetic Flux Density", "unit": "T"},
            {"symbol": r"\mu_0", "label": "Vacuum Permeability", "unit": "T·m/A"},
            {"symbol": "I", "label": "Steady Electric Current", "unit": "A"},
            {"symbol": r"d\mathbf{l}'", "label": "Differential Current Element", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 8, 16],
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
        "formulaLatex": r"\oint_{\partial S} \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\text{enclosed}} \iff \nabla \times \mathbf{B} = \mu_0 \mathbf{J}",
        "summary": r"The line integral of magnetic field \mathbf{B} around any closed Amperian loop is directly proportional to the total net electric current piercing through the surface bounded by that loop.",
        "derivation": r"Consider a circular loop of radius r centered symmetrically on an infinite wire carrying current I. By rotational symmetry, \mathbf{B} has constant magnitude along the circle and is directed purely tangentially: \mathbf{B} = B(r) \hat{\boldsymbol{\phi}}. Evaluating the closed path line integral: \oint \mathbf{B} \cdot d\mathbf{l} = \int_0^{2\pi} B(r) (r d\phi) = B(r) (2\pi r). By Biot-Savart law, B(r) = \frac{\mu_0 I}{2\pi r}. Multiplying yields: \oint \mathbf{B} \cdot d\mathbf{l} = \left(\frac{\mu_0 I}{2\pi r}\right) (2\pi r) = \mu_0 I. By Stokes' Theorem, the line integral converts to a surface integral of the curl over bounded area S: \oint_{\partial S} \mathbf{B} \cdot d\mathbf{l} = \iint_S (\nabla \times \mathbf{B}) \cdot d\mathbf{A} = \mu_0 \iint_S \mathbf{J} \cdot d\mathbf{A}. Because this holds for any arbitrary surface, the local differential form follows: \nabla \times \mathbf{B} = \mu_0 \mathbf{J} (Maxwell's 4th equation in magnetostatics).",
        "realWorldApplication": "Toroidal transformers, inductors, and clamp-on AC ammeters measuring current non-invasively via enclosed magnetic flux.",
        "variables": [
            {"symbol": r"\oint \mathbf{B} \cdot d\mathbf{l}", "label": "Circulation of B", "unit": "T·m"},
            {"symbol": "I_{\text{enc}}", "label": "Enclosed Current", "unit": "A"},
            {"symbol": r"\mathbf{J}", "label": "Volume Current Density", "unit": "A/m²"},
            {"symbol": r"\mu_0", "label": "Permeability of Free Space", "unit": "T·m/A"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 8, 14],
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
        "formulaLatex": r"\mathcal{E} = -\frac{d\Phi_B}{dt} = -\frac{d}{dt} \iint_S \mathbf{B} \cdot d\mathbf{A} \iff \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}",
        "summary": "A changing magnetic flux through any closed conducting circuit induces an electromotive force (EMF) proportional to the negative time rate of change of the magnetic flux. This links electricity and magnetism dynamically.",
        "derivation": r"Discovered by Michael Faraday in 1831. Magnetic flux through surface S bounded by contour C is \Phi_B \equiv \iint_S \mathbf{B} \cdot d\mathbf{A}. The induced electromotive force around contour C is \mathcal{E} \equiv \oint_C \mathbf{E} \cdot d\mathbf{l}. Faraday's empirical law states \mathcal{E} = -\frac{d\Phi_B}{dt}. Applying Stokes' theorem to convert the contour integral into a surface integral: \oint_C \mathbf{E} \cdot d\mathbf{l} = \iint_S (\nabla \times \mathbf{E}) \cdot d\mathbf{A} = -\frac{d}{dt}\iint_S \mathbf{B} \cdot d\mathbf{A} = -\iint_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{A}. Because this holds for any arbitrary closed contour and bounded surface: \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, the third of Maxwell's fundamental equations, proving that time-varying magnetic fields generate non-conservative curling electric fields.",
        "realWorldApplication": "Hydroelectric turbine generators, electrical power transformers, and induction cooking stovetops.",
        "variables": [
            {"symbol": r"\mathcal{E}", "label": "Induced Electromotive Force (EMF)", "unit": "V"},
            {"symbol": r"\Phi_B", "label": "Magnetic Flux", "unit": "Wb or T·m²"},
            {"symbol": "t", "label": "Time", "unit": "s"},
            {"symbol": r"\mathbf{E}", "label": "Induced Curling Electric Field", "unit": "V/m"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"\mathcal{E}_{\text{ind}} = -\frac{d\Phi_B}{dt}, \quad \mathbf{F}_{\text{drag}} \propto -\sigma B^2 \mathbf{v}",
        "summary": "An induced electric current always flows in such a direction that its secondary magnetic field opposes the change in magnetic flux that produced it (the minus sign in Faraday's law). In bulk conductors, circulating eddy currents create smooth contactless magnetic braking.",
        "derivation": r"Formulated by Heinrich Lenz in 1834. If the induced current reinforced the flux change instead of opposing it, a positive feedback loop would spontaneously amplify magnetic flux and electrical energy from zero, violating conservation of energy. In a conducting metal plate moving with velocity \mathbf{v} through a localized transverse magnetic field \mathbf{B} = B \hat{\mathbf{z}}, the free electrons experience a motional Lorentz field \mathbf{E}_{\text{mot}} = \mathbf{v} \times \mathbf{B}. By Ohm's law, circulating eddy currents are generated: \mathbf{J} = \sigma(\mathbf{v} \times \mathbf{B}). These induced currents in turn experience a magnetic Lorentz retarding force: \mathbf{F}_{\text{drag}} = \int_V (\mathbf{J} \times \mathbf{B}) \, dV = \int_V \sigma [(\mathbf{v} \times \mathbf{B}) \times \mathbf{B}] \, dV. Expanding the vector triple product: (\mathbf{v} \times \mathbf{B}) \times \mathbf{B} = -B^2 \mathbf{v}, yielding an exact viscous drag force: \mathbf{F}_{\text{drag}} = -\sigma B^2 V_{\text{eff}} \mathbf{v}, purely converting mechanical kinetic energy into Joule heating.",
        "realWorldApplication": "Contactless eddy current brakes in high-speed bullet trains (TGV/Shinkansen) and free-fall amusement park drop towers.",
        "variables": [
            {"symbol": r"\mathbf{F}_{\text{drag}}", "label": "Eddy Current Retarding Drag", "unit": "N"},
            {"symbol": r"\sigma", "label": "Metal Electrical Conductivity", "unit": "S/m"},
            {"symbol": "B", "label": "Applied Magnetic Field", "unit": "T"},
            {"symbol": r"\mathbf{v}", "label": "Plate Translation Velocity", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 6, 12],
            "timeDilation": 1.0,
            "parameters": {
                "plateConductivity": 5.96e7,
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
        "formulaLatex": r"V_H = \frac{I B}{n q d} = R_H \frac{I B}{d}, \quad R_H = \frac{1}{n q}",
        "summary": "When a current-carrying electrical conductor is placed in a transverse magnetic field, charge carriers are deflected sideways by the magnetic Lorentz force until a transverse electric Hall voltage develops that balances the magnetic force.",
        "derivation": r"Discovered by Edwin Hall in 1879. Consider a slab of width w and thickness d carrying longitudinal current I in the x-direction, subjected to transverse magnetic field \mathbf{B} = B \hat{\mathbf{z}}. Free carriers with charge q and drift velocity v_d experience magnetic Lorentz deflection along y: F_y = q v_d B. Charges accumulate on the lateral edge until the built-up transverse electric field E_H exerts an equal and opposite electrostatic force: q E_H = q v_d B \implies E_H = v_d B. The transverse Hall voltage across width w is V_H = E_H w = v_d B w. Current is related to drift velocity by I = n q A v_d = n q (w d) v_d \implies v_d = \frac{I}{n q w d}. Substituting v_d into the Hall voltage equation gives: V_H = \left(\frac{I}{n q w d}\right) B w = \frac{I B}{n q d}. Defining the Hall coefficient R_H \equiv \frac{1}{n q}, the polarity of V_H reveals whether conduction carriers are negative electrons (R_H < 0) or positive holes (R_H > 0).",
        "realWorldApplication": "Hall effect sensor ICs in brushless DC motors, smartphone compasses, automotive wheel speed sensors, and current probes.",
        "variables": [
            {"symbol": "V_H", "label": "Transverse Hall Voltage", "unit": "V"},
            {"symbol": "R_H", "label": "Hall Coefficient", "unit": "m³/C"},
            {"symbol": "n", "label": "Carrier Number Density", "unit": "m⁻³"},
            {"symbol": "d", "label": "Slab Thickness Along B", "unit": "m"},
            {"symbol": "q", "label": "Carrier Elementary Charge", "unit": "C"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 5, 10],
            "timeDilation": 1.0,
            "parameters": {
                "carrierDensity": 2.5e23,
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
        "formulaLatex": r"B(0) = \left(\frac{4}{5}\right)^{3/2} \frac{\mu_0 N I}{R}, \quad \left.\frac{d^2 B_z}{dz^2}\right|_{z=0} = 0",
        "summary": "A pair of identical circular coaxial coils separated by a distance exactly equal to their radius R, carrying identical currents in the same direction. This geometric configuration produces a remarkably uniform central magnetic field with zero second spatial derivative.",
        "derivation": r"The on-axis magnetic field of a single N-turn loop of radius R at axial distance z is given by Biot-Savart integration: B_1(z) = \frac{\mu_0 N I R^2}{2(R^2 + z^2)^{3/2}}. For two identical coils placed at z = -d/2 and z = +d/2, total central field is B(z) = B_1(z - d/2) + B_1(z + d/2). Expanding B(z) as a Taylor series about the midpoint z = 0: B(z) = B(0) + z B'(0) + \frac{z^2}{2!} B''(0) + \frac{z^3}{3!} B'''(0) + \frac{z^4}{4!} B^{(4)}(0) + \dots By mirror symmetry, all odd derivatives vanish at the center: B'(0) = B'''(0) = 0. Calculating the second derivative: B''(0) \propto \left[4(d/2)^2 - R^2\right]. By choosing coil separation distance d = R, the second derivative vanishes identically: B''(0) = 0. The first non-vanishing spatial variation term is the 4th derivative, yielding exceptional central magnetic field homogeneity: B(0) = 2 \left[\frac{\mu_0 N I R^2}{2(R^2 + (R/2)^2)^{3/2}}\right] = \frac{\mu_0 N I R^2}{(5 R^2 / 4)^{3/2}} = \left(\frac{4}{5}\right)^{3/2} \frac{\mu_0 N I}{R} \approx 0.7155 \frac{\mu_0 N I}{R}.",
        "realWorldApplication": "Earth magnetic field cancellation in magnetic sensor calibration facilities and electron beam deflection experiments.",
        "variables": [
            {"symbol": "B(0)", "label": "Central Magnetic Flux Density", "unit": "T"},
            {"symbol": "R", "label": "Coil Radius and Separation", "unit": "m"},
            {"symbol": "N", "label": "Number of Wire Turns per Coil", "unit": "dimensionless"},
            {"symbol": "I", "label": "Coil Excitation Current", "unit": "A"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 8, 16],
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
        "formulaLatex": r"\mathbf{S} = \frac{1}{\mu_0} (\mathbf{E} \times \mathbf{B}), \quad -\frac{\partial u_{\text{em}}}{\partial t} = \nabla \cdot \mathbf{S} + \mathbf{J} \cdot \mathbf{E}",
        "summary": "The directional energy flux density (power per unit area) transported by coupled electric and magnetic fields. Poynting's theorem represents the exact local conservation of electromagnetic energy.",
        "derivation": r"Formulated by John Henry Poynting in 1884. Total electromagnetic energy density stored in fields is u_{\text{em}} = \frac{1}{2}\varepsilon_0 E^2 + \frac{1}{2\mu_0}B^2. Differentiating with respect to time: \frac{\partial u_{\text{em}}}{\partial t} = \varepsilon_0 \mathbf{E} \cdot \frac{\partial \mathbf{E}}{\partial t} + \frac{1}{\mu_0} \mathbf{B} \cdot \frac{\partial \mathbf{B}}{\partial t}. Using Maxwell-Faraday equation \frac{\partial \mathbf{B}}{\partial t} = -\nabla \times \mathbf{E} and Ampere-Maxwell equation \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} = \frac{1}{\mu_0}\nabla \times \mathbf{B} - \mathbf{J}: \frac{\partial u_{\text{em}}}{\partial t} = \mathbf{E} \cdot \left(\frac{1}{\mu_0}\nabla \times \mathbf{B} - \mathbf{J}\right) - \frac{1}{\mu_0} \mathbf{B} \cdot (\nabla \times \mathbf{E}) = -\mathbf{J} \cdot \mathbf{E} - \frac{1}{\mu_0} [\mathbf{B} \cdot (\nabla \times \mathbf{E}) - \mathbf{E} \cdot (\nabla \times \mathbf{B})]. Using vector identity \nabla \cdot (\mathbf{E} \times \mathbf{B}) = \mathbf{B} \cdot (\nabla \times \mathbf{E}) - \mathbf{E} \cdot (\nabla \times \mathbf{B}): \frac{\partial u_{\text{em}}}{\partial t} = -\mathbf{J} \cdot \mathbf{E} - \nabla \cdot \left(\frac{1}{\mu_0}\mathbf{E} \times \mathbf{B}\right). Defining the Poynting vector \mathbf{S} \equiv \frac{1}{\mu_0} (\mathbf{E} \times \mathbf{B}), we arrive at Poynting's theorem: -\frac{\partial u_{\text{em}}}{\partial t} = \nabla \cdot \mathbf{S} + \mathbf{J} \cdot \mathbf{E}, where \mathbf{J} \cdot \mathbf{E} represents Joule dissipation into matter.",
        "realWorldApplication": "Solar radiation pressure on space exploration solar sails and microwave/RF power beam transmission waveguides.",
        "variables": [
            {"symbol": r"\mathbf{S}", "label": "Poynting Energy Flux Density", "unit": "W/m²"},
            {"symbol": "u_{\text{em}}", "label": "EM Field Energy Density", "unit": "J/m³"},
            {"symbol": r"\mathbf{J} \cdot \mathbf{E}", "label": "Joule Heating Rate", "unit": "W/m³"},
            {"symbol": r"\mathbf{E}, \mathbf{B}", "label": "Electric and Magnetic Fields", "unit": "V/m, T"}
        ],
        "presetConfig": {
            "domain": "electromagnetism",
            "cameraPosition": [0, 8, 16],
            "timeDilation": 1.0,
            "parameters": {
                "frequency": 1.0e8,
                "electricAmplitude": 300.0,
                "phaseVelocity": 3.0e8
            },
            "description": "Propagating transverse electromagnetic wave displaying orthogonal E, B, and forward Poynting vector S.",
            "apparatusType": "poynting_wave_guide"
        }
    }
]
