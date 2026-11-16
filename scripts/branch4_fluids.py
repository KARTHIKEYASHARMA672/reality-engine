# -*- coding: utf-8 -*-
"""
Branch 4: Fluid Dynamics & Aerodynamics (13 concepts)
"""

BRANCH4_CONCEPTS = [
    {
        "id": "archimedes-buoyancy",
        "title": "Archimedes' Principle of Buoyancy",
        "branch": "fluids",
        "tag": "Hydrostatics & Flotation",
        "difficulty": "Foundational",
        "formulaLatex": r"F_b = \rho_{\text{fluid}} V_{\text{disp}} g",
        "summary": "Any body wholly or partially submerged in a static fluid experiences an upward buoyant force equal in magnitude to the weight of the fluid displaced by the body. Flotation occurs when buoyant force equals total body weight.",
        "derivation": r"Consider an arbitrary volume V of fluid at rest inside a fluid body of uniform density \rho_f. Because the fluid element is in static equilibrium, the net force on it must be zero: \mathbf{F}_{\text{net}} = \mathbf{F}_{\text{surrounding}} + \mathbf{F}_g = \mathbf{0}. The gravitational force on this fluid volume is downward with magnitude W = m g = \rho_f V g. Consequently, the surrounding fluid must exert an upward resultant force \mathbf{F}_b on the boundary of volume V: F_b = \rho_f V g. Replacing this fluid volume with a solid object of identical shape, the pressure distribution exerted by the surrounding fluid on the surface remains identical because pressure depends solely on depth: P(z) = \rho_f g z. Integrating the pressure over the closed surface \partial V via the Divergence Theorem: \mathbf{F}_b = -\oint_{\partial V} P \, \hat{\mathbf{n}} \, dA = -\iiint_V \nabla P \, dV. In a uniform gravitational field, hydrostatic gradient is \nabla P = -\rho_f g \hat{\mathbf{k}}, yielding: \mathbf{F}_b = -\iiint_V (-\rho_f g \hat{\mathbf{k}}) dV = \rho_f g V_{\text{disp}} \hat{\mathbf{k}}.",
        "realWorldApplication": "Submarine ballast tank depth trim controls and cargo ship Plimsoll waterline load limits.",
        "variables": [
            {"symbol": "F_b", "label": "Upward Buoyant Force", "unit": "N"},
            {"symbol": r"\rho_{\text{fluid}}", "label": "Fluid Mass Density", "unit": "kg/m³"},
            {"symbol": "V_{\text{disp}}", "label": "Displaced Fluid Volume", "unit": "m³"},
            {"symbol": "g", "label": "Gravitational Acceleration", "unit": "m/s²"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"P(h) = P_0 + \rho g h, \quad \frac{dP}{dz} = -\rho g",
        "summary": "In an incompressible fluid at rest under gravity, hydrostatic pressure increases linearly with vertical depth beneath the free surface, acting isotropically in all spatial directions.",
        "derivation": r"Isolate an infinitesimal fluid cylindrical parcel of cross-sectional area A and vertical height dz between vertical coordinates z and z + dz. The upward force on the lower face is P(z) A. The downward force on the upper face is P(z + dz) A. The weight of the parcel is dW = dm \, g = (\rho A dz) g. For static mechanical equilibrium: \sum F_z = P(z) A - P(z + dz) A - \rho g A dz = 0. Dividing by A dz and taking the differential limit dz \to 0 yields the fundamental hydrostatic equation: \frac{dP}{dz} = -\rho g. For constant fluid density \rho (incompressible assumption), integrating from free surface z = z_0 (where P = P_0) downward to elevation z = z_0 - h: \int_{P_0}^P dP' = -\int_0^{-h} \rho g \, dz' \implies P - P_0 = \rho g h \implies P(h) = P_0 + \rho g h.",
        "realWorldApplication": "Deep-sea submersible hull engineering (e.g. Alvin and Deepsea Challenger resisting >1100 atmospheres at the Mariana Trench) and dam wall structural thickness tapering.",
        "variables": [
            {"symbol": "P(h)", "label": "Absolute Fluid Pressure", "unit": "Pa or N/m²"},
            {"symbol": "P_0", "label": "Surface Atmospheric Pressure", "unit": "Pa"},
            {"symbol": r"\rho", "label": "Fluid Mass Density", "unit": "kg/m³"},
            {"symbol": "h", "label": "Submerged Depth", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 8, 14],
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
        "formulaLatex": r"\Delta P = \frac{F_1}{A_1} = \frac{F_2}{A_2} \implies F_2 = F_1 \left(\frac{A_2}{A_1}\right)",
        "summary": "A pressure change applied to an enclosed, incompressible static fluid is transmitted undiminished and instantaneously to every portion of the fluid and to the walls of the containing vessel.",
        "derivation": r"Formulated by Blaise Pascal in 1653. In an enclosed fluid reservoir, hydrostatic pressure satisfies P(z) = P_{\text{applied}} + \rho g h. If an external force F_1 is applied across input piston of area A_1, the generated pressure increment is \Delta P = \frac{F_1}{A_1}. Because the fluid is incompressible and molecules are in dense contact, this pressure increase \Delta P propagates equally to all points. At an output piston of area A_2, the resulting force exerted by the fluid is F_2 = \Delta P \cdot A_2 = \left(\frac{F_1}{A_1}\right) A_2 = F_1 \left(\frac{A_2}{A_1}\right). By conservation of fluid volume, displaced volume is equal: V = A_1 d_1 = A_2 d_2 \implies d_2 = d_1 \left(\frac{A_1}{A_2}\right). Mechanical work input W_1 = F_1 d_1 equals work output W_2 = F_2 d_2 = \left[F_1 \frac{A_2}{A_1}\right] \left[d_1 \frac{A_1}{A_2}\right] = F_1 d_1, conforming to conservation of energy.",
        "realWorldApplication": "Automotive hydraulic disc brakes, industrial hydraulic presses, aircraft fly-by-wire hydraulic flight control actuators.",
        "variables": [
            {"symbol": "F_1, F_2", "label": "Input & Output Forces", "unit": "N"},
            {"symbol": "A_1, A_2", "label": "Piston Cross-Sectional Areas", "unit": "m²"},
            {"symbol": r"\Delta P", "label": "Transmitted Pressure Change", "unit": "Pa"},
            {"symbol": "d_1, d_2", "label": "Piston Strokes", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"A_1 v_1 = A_2 v_2 \iff Q = \text{const} \iff \nabla \cdot \mathbf{v} = 0",
        "summary": "Expresses the principle of conservation of mass in fluid dynamics. For steady, incompressible laminar flow along a stream tube, the volumetric flow rate Q remains invariant along the conduit.",
        "derivation": r"Consider a stream tube carrying fluid across cross-sectional areas A_1 and A_2 with average velocities v_1 and v_2. Over time interval dt, mass entering cross-section 1 is dm_1 = \rho_1 A_1 v_1 dt. Mass exiting cross-section 2 over the same interval is dm_2 = \rho_2 A_2 v_2 dt. For steady flow with no mass accumulation or cavitation within the conduit: dm_1 = dm_2 \implies \rho_1 A_1 v_1 = \rho_2 A_2 v_2. For incompressible fluids (\rho_1 = \rho_2 = \text{const}), the density cancels out: A_1 v_1 = A_2 v_2 = Q (\text{constant volumetric flow rate}). In differential vector form, Reynolds Transport Theorem gives \frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0. For constant density (\frac{\partial \rho}{\partial t} = 0), this simplifies to the divergence-free solenoidal condition: \nabla \cdot \mathbf{v} = 0.",
        "realWorldApplication": "Fire hose constriction nozzles accelerating water jets, cardiovascular arterial stenosis velocity increases, and river rapids narrowing.",
        "variables": [
            {"symbol": "Q", "label": "Volumetric Flow Rate", "unit": "m³/s"},
            {"symbol": "A_1, A_2", "label": "Pipe Cross-Sectional Areas", "unit": "m²"},
            {"symbol": "v_1, v_2", "label": "Mean Flow Velocities", "unit": "m/s"},
            {"symbol": r"\nabla \cdot \mathbf{v}", "label": "Velocity Field Divergence", "unit": "s⁻¹"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 6, 14],
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
        "formulaLatex": r"P + \frac{1}{2} \rho v^2 + \rho g z = \text{const}",
        "summary": "Along any steady streamline in an inviscid, incompressible fluid, the sum of static pressure, dynamic pressure (kinetic energy per unit volume), and hydrostatic potential energy per unit volume is constant.",
        "derivation": r"Derived from the Euler momentum equation for inviscid flow: \frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla)\mathbf{v} = -\frac{1}{\rho}\nabla P - g \hat{\mathbf{k}}. For steady flow (\frac{\partial \mathbf{v}}{\partial t} = \mathbf{0}), using vector identity (\mathbf{v} \cdot \nabla)\mathbf{v} = \frac{1}{2}\nabla(v^2) - \mathbf{v} \times (\nabla \times \mathbf{v}). Projecting along a streamline with tangent unit vector \hat{\mathbf{s}}: [(\mathbf{v} \times (\nabla \times \mathbf{v})) \cdot \hat{\mathbf{s}} = 0], the equation becomes: \frac{1}{2}\frac{\partial (v^2)}{\partial s} = -\frac{1}{\rho}\frac{\partial P}{\partial s} - g\frac{\partial z}{\partial s}. Integrating with respect to streamline coordinate s for constant density \rho: \int \left(\frac{1}{\rho}\frac{\partial P}{\partial s} + v\frac{\partial v}{\partial s} + g\frac{\partial z}{\partial s}\right) ds = \text{const} \implies \frac{P}{\rho} + \frac{1}{2}v^2 + g z = \text{const}. Multiplying through by density \rho yields Bernoulli's celebrated equation: P + \frac{1}{2}\rho v^2 + \rho g z = \text{constant along a streamline}.",
        "realWorldApplication": "Aircraft airfoil aerodynamic lift generation, pitot tube airspeed indicators in commercial jets, and atomizers.",
        "variables": [
            {"symbol": "P", "label": "Static Fluid Pressure", "unit": "Pa"},
            {"symbol": r"\frac{1}{2}\rho v^2", "label": "Dynamic Pressure", "unit": "Pa"},
            {"symbol": r"\rho g z", "label": "Hydrostatic Potential Pressure", "unit": "Pa"},
            {"symbol": "v", "label": "Streamline Velocity", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 8, 16],
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
        "formulaLatex": r"Q = \frac{\pi R^4 \Delta P}{8 \eta L}, \quad v(r) = \frac{\Delta P}{4 \eta L} (R^2 - r^2)",
        "summary": "Governs the steady laminar flow of an incompressible Newtonian fluid through a long cylindrical pipe. The volumetric flow rate scales with the fourth power of pipe radius R, making flow exceptionally sensitive to diameter.",
        "derivation": r"Consider steady, fully-developed laminar flow in a horizontal circular pipe of radius R and length L under pressure difference \Delta P = P_1 - P_2. Isolate a concentric fluid cylinder of radius r. The driving pressure force is F_{\text{pressure}} = \Delta P (\pi r^2). The opposing viscous shear force at radius r by Newton's law of viscosity is F_{\text{viscous}} = \tau (2\pi r L) = \left(-\eta \frac{dv}{dr}\right)(2\pi r L). In steady equilibrium: \Delta P \pi r^2 = -2\pi r L \eta \frac{dv}{dr} \implies \frac{dv}{dr} = -\frac{\Delta P}{2\eta L} r. Integrating with respect to r with no-slip boundary condition at the wall v(R) = 0: \int_0^{v(r)} dv' = -\frac{\Delta P}{2\eta L}\int_R^r r' dr' \implies v(r) = \frac{\Delta P}{4\eta L}(R^2 - r^2), proving a parabolic velocity profile. Total volumetric flow rate is integrated across annular rings dA = 2\pi r dr: Q = \int_0^R v(r) (2\pi r) dr = \frac{2\pi \Delta P}{4\eta L}\int_0^R (R^2 r - r^3) dr = \frac{\pi \Delta P}{2\eta L} \left[\frac{R^4}{2} - \frac{R^4}{4}\right] = \frac{\pi R^4 \Delta P}{8 \eta L}.",
        "realWorldApplication": r"Cardiovascular hemodynamics: Arterial constriction (atherosclerosis halving radius R reduces blood flow rate Q by a factor of 16 for identical blood pressure \Delta P).",
        "variables": [
            {"symbol": "Q", "label": "Volumetric Flow Rate", "unit": "m³/s"},
            {"symbol": "R", "label": "Pipe Internal Radius", "unit": "m"},
            {"symbol": r"\Delta P", "label": "Pressure Drop along Pipe", "unit": "Pa"},
            {"symbol": r"\eta", "label": "Dynamic Viscosity", "unit": "Pa·s or kg/(m·s)"},
            {"symbol": "L", "label": "Pipe Length", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"F_{\text{drag}} = 6 \pi \eta r v",
        "summary": "Describes the retarding frictional viscous drag force experienced by a small spherical object moving through a continuous viscous fluid in the creeping flow regime (Reynolds number Re << 1).",
        "derivation": r"Formulated by Sir George Gabriel Stokes in 1851. In the creeping flow limit (\mathrm{Re} = \frac{\rho v r}{\eta} \ll 1), inertial advection terms (\mathbf{v}\cdot\nabla)\mathbf{v} in the Navier-Stokes equations are negligible compared to viscous diffusion terms, reducing to the linear Stokes equation: \nabla P = \eta \nabla^2 \mathbf{v} with incompressibility \nabla \cdot \mathbf{v} = 0. Introducing the Stokes stream function \psi(r, \theta) in spherical coordinates with no-slip boundary conditions at sphere surface (v_r(R) = 0, v_\theta(R) = 0) and uniform approach flow at infinity (v_z \to v): \psi(r, \theta) = v \left(\frac{r^2}{2} - \frac{3Rr}{4} + \frac{R^3}{4r}\right)\sin^2\theta. Integrating the normal pressure and tangential shear stress tensors over the sphere surface: F_{\text{pressure}} = \int_0^\pi (P \cos\theta)(2\pi R^2 \sin\theta) d\theta = 2\pi \eta R v, and F_{\text{shear}} = \int_0^\pi (\tau_{r\theta}\sin\theta)(2\pi R^2 \sin\theta) d\theta = 4\pi \eta R v. Summing both components yields Stokes' law: F_{\text{drag}} = F_{\text{pressure}} + F_{\text{shear}} = 6\pi \eta R v.",
        "realWorldApplication": "Millikan oil drop experiment determining elementary charge e and sedimentation rates of biological virus particles in centrifuges.",
        "variables": [
            {"symbol": "F_{\text{drag}}", "label": "Viscous Retarding Force", "unit": "N"},
            {"symbol": r"\eta", "label": "Dynamic Fluid Viscosity", "unit": "Pa·s"},
            {"symbol": "r", "label": "Sphere Radius", "unit": "m"},
            {"symbol": "v", "label": "Terminal Settling Speed", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 8, 14],
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
        "formulaLatex": r"\mathrm{Re} = \frac{\rho v D}{\eta} = \frac{v D}{\nu} = \frac{\text{Inertial Forces}}{\text{Viscous Forces}}",
        "summary": "A dimensionless similarity parameter in fluid mechanics quantifying the relative ratio of inertial convective forces to viscous shearing forces. It predicts the transition from smooth laminar flow to chaotic turbulent eddies.",
        "derivation": r"Non-dimensionalize the incompressible Navier-Stokes momentum equation: \rho \left[\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v}\cdot\nabla)\mathbf{v}\right] = -\nabla P + \eta \nabla^2 \mathbf{v}. Define characteristic length scale D, velocity scale v_0, time scale t_0 = D/v_0, and pressure scale P_0 = \rho v_0^2. Introducing dimensionless variables: \mathbf{x}^* = \mathbf{x}/D, \mathbf{v}^* = \mathbf{v}/v_0, t^* = t v_0/D, P^* = P/(\rho v_0^2). Substituting into the momentum equation: \frac{\rho v_0^2}{D}\left[\frac{\partial \mathbf{v}^*}{\partial t^*} + (\mathbf{v}^*\cdot\nabla^*)\mathbf{v}^*\right] = -\frac{\rho v_0^2}{D}\nabla^* P^* + \frac{\eta v_0}{D^2} {\nabla^*}^2 \mathbf{v}^*. Dividing through by \frac{\rho v_0^2}{D}: \frac{\partial \mathbf{v}^*}{\partial t^*} + (\mathbf{v}^*\cdot\nabla^*)\mathbf{v}^* = -\nabla^* P^* + \left(\frac{\eta}{\rho v_0 D}\right){\nabla^*}^2 \mathbf{v}^*. Defining Reynolds number \mathrm{Re} \equiv \frac{\rho v_0 D}{\eta} = \frac{v_0 D}{\nu}: \frac{\partial \mathbf{v}^*}{\partial t^*} + (\mathbf{v}^*\cdot\nabla^*)\mathbf{v}^* = -\nabla^* P^* + \frac{1}{\mathrm{Re}} {\nabla^*}^2 \mathbf{v}^*. For pipe flow, \mathrm{Re} < 2300 is laminar; \mathrm{Re} > 4000 is fully turbulent.",
        "realWorldApplication": "Wind tunnel aerodynamic scale model testing of commercial airliners and submarine hydrodynamic hull optimization.",
        "variables": [
            {"symbol": r"\mathrm{Re}", "label": "Reynolds Number", "unit": "dimensionless"},
            {"symbol": r"\rho", "label": "Fluid Mass Density", "unit": "kg/m³"},
            {"symbol": "v", "label": "Flow Velocity", "unit": "m/s"},
            {"symbol": "D", "label": "Characteristic Hydraulic Diameter", "unit": "m"},
            {"symbol": r"\nu = \eta/\rho", "label": "Kinematic Viscosity", "unit": "m²/s"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 6, 14],
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
        "formulaLatex": r"v_t = \frac{2 r^2 g (\rho_{\text{obj}} - \rho_{\text{fluid}})}{9 \eta} \quad (\text{Stokes}) \quad \text{or} \quad v_t = \sqrt{\frac{2mg}{\rho C_d A}} \quad (\text{Newton})",
        "summary": "The steady maximum speed achieved by an object falling through a fluid medium when the downward gravitational force is precisely balanced by the sum of the upward buoyant force and hydrodynamic drag.",
        "derivation": r"Consider a sphere of radius r and density \rho_{\text{obj}} falling vertically under gravity in a fluid of density \rho_f and viscosity \eta. The active forces along the vertical axis are: Downward gravity: F_g = m g = \frac{4}{3}\pi r^3 \rho_{\text{obj}} g. Upward buoyancy: F_b = \frac{4}{3}\pi r^3 \rho_f g. Upward viscous drag: F_d. Newton's second law: m \frac{dv}{dt} = F_g - F_b - F_d. At terminal velocity v_t, acceleration vanishes: \frac{dv}{dt} = 0 \implies F_d = F_g - F_b = \frac{4}{3}\pi r^3 (\rho_{\text{obj}} - \rho_f) g. In the laminar Stokes regime (Re < 1), substituting F_d = 6\pi \eta r v_t: 6\pi \eta r v_t = \frac{4}{3}\pi r^3 (\rho_{\text{obj}} - \rho_f) g \implies v_t = \frac{2 r^2 g (\rho_{\text{obj}} - \rho_f)}{9 \eta}. In the high-Reynolds quadratic drag regime (Re > 1000), substituting F_d = \frac{1}{2}\rho_f A C_d v_t^2 yields: v_t = \sqrt{\frac{2(m - \rho_f V)g}{\rho_f A C_d}} \approx \sqrt{\frac{2mg}{\rho_f A C_d}}.",
        "realWorldApplication": "Parachute descent velocity design, atmospheric raindrop terminal velocities (~9 m/s), and geological sediment settling.",
        "variables": [
            {"symbol": "v_t", "label": "Terminal Velocity", "unit": "m/s"},
            {"symbol": r"\rho_{\text{obj}}, \rho_{\text{fluid}}", "label": "Object & Fluid Densities", "unit": "kg/m³"},
            {"symbol": "C_d", "label": "Drag Coefficient", "unit": "dimensionless"},
            {"symbol": "A", "label": "Cross-Sectional Area", "unit": "m²"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 10, 18],
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
        "formulaLatex": r"\Delta P = \gamma \left(\frac{1}{R_1} + \frac{1}{R_2}\right), \quad h = \frac{2\gamma \cos \theta}{\rho g r}",
        "summary": r"Cohesive intermolecular forces create surface tension \gamma along liquid interfaces. The Young-Laplace equation governs the pressure jump across curved fluid menisci, driving capillary rise in narrow tubes.",
        "derivation": r"Molecules at a liquid interface experience unbalanced cohesive attractions toward the bulk liquid, minimizing surface area with interfacial energy dW = \gamma dA. Across a curved liquid interface with principal radii of curvature R_1 and R_2, mechanical virtual work balance yields the Young-Laplace equation: \Delta P = P_{\text{concave}} - P_{\text{convex}} = \gamma \left(\frac{1}{R_1} + \frac{1}{R_2}\right). In a vertical circular capillary tube of radius r with contact angle \theta, the meniscus forms a spherical cap with radius of curvature R = \frac{r}{\cos\theta}. The pressure deficit immediately beneath the curved meniscus compared to the flat bulk surface is \Delta P = \frac{2\gamma}{R} = \frac{2\gamma \cos\theta}{r}. This negative pressure lifts a liquid column of height h until hydrostatic pressure balances it: \rho g h = \Delta P = \frac{2\gamma \cos\theta}{r} \implies h = \frac{2\gamma \cos\theta}{\rho g r} (Jurin's law).",
        "realWorldApplication": "Xylem sap transport in tall redwood trees, microfluidic lab-on-a-chip diagnostic devices, and lung pulmonary surfactant function.",
        "variables": [
            {"symbol": r"\gamma", "label": "Surface Tension Coefficient", "unit": "N/m or J/m²"},
            {"symbol": r"\theta", "label": "Wetting Contact Angle", "unit": "rad"},
            {"symbol": "r", "label": "Capillary Tube Radius", "unit": "m"},
            {"symbol": "h", "label": "Equilibrium Capillary Rise", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 5, 10],
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
        "formulaLatex": r"v_1 = \sqrt{\frac{2(P_1 - P_2)}{\rho \left(\left(\frac{A_1}{A_2}\right)^2 - 1\right)}}, \quad Q = A_1 v_1",
        "summary": "When a fluid flows through a constricted throat section of a pipe, its velocity increases in accordance with mass continuity, causing its static pressure to drop in accordance with Bernoulli's principle.",
        "derivation": r"Apply the continuity equation between wide pipe section 1 (area A_1) and constricted throat section 2 (area A_2): A_1 v_1 = A_2 v_2 \implies v_2 = \left(\frac{A_1}{A_2}\right) v_1. Applying Bernoulli's equation along the horizontal centerline (z_1 = z_2): P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2 \implies P_1 - P_2 = \frac{1}{2}\rho (v_2^2 - v_1^2). Substituting v_2 from continuity: P_1 - P_2 = \frac{1}{2}\rho \left[\left(\frac{A_1}{A_2}\right)^2 v_1^2 - v_1^2\right] = \frac{1}{2}\rho v_1^2 \left[\left(\frac{A_1}{A_2}\right)^2 - 1\right]. Solving for upstream velocity v_1: v_1 = \sqrt{\frac{2(P_1 - P_2)}{\rho \left(\left(\frac{A_1}{A_2}\right)^2 - 1\right)}}. Total volumetric flow rate is then determined directly from differential pressure measurement: Q = A_1 v_1 = A_1 A_2 \sqrt{\frac{2(P_1 - P_2)}{\rho (A_1^2 - A_2^2)}}.",
        "realWorldApplication": "Venturi flowmeters in municipal water pipelines, engine carburetors drawing fuel into airflows, and aspirator vacuum pumps.",
        "variables": [
            {"symbol": "P_1 - P_2", "label": "Differential Throat Pressure", "unit": "Pa"},
            {"symbol": "A_1 / A_2", "label": "Constriction Area Ratio", "unit": "dimensionless"},
            {"symbol": "Q", "label": "Volumetric Flow Rate", "unit": "m³/s"},
            {"symbol": r"\rho", "label": "Fluid Density", "unit": "kg/m³"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 6, 14],
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
        "formulaLatex": r"\mathbf{F}_L = \rho (\mathbf{v}_\infty \times \boldsymbol{\Gamma}), \quad F_L = \rho v_\infty \Gamma = 2\pi \rho v_\infty R^2 \omega",
        "summary": "A spinning cylinder or sphere translating through a fluid deflects the surrounding airflow via viscous boundary layer adhesion. This creates asymmetric velocity and pressure distributions, generating an aerodynamic lift force perpendicular to motion.",
        "derivation": r"By the Kutta-Joukowski theorem of potential flow theory, a body possessing circulation \Gamma in a freestream velocity v_\infty experiences an aerodynamic lift force per unit span: L' = \rho_\infty v_\infty \Gamma. When a cylinder of radius R spins with angular velocity \omega in a viscous fluid, no-slip boundary conditions entrain fluid molecules, creating bound circulation \Gamma = \oint \mathbf{v}\cdot d\mathbf{l} = \omega R (2\pi R) = 2\pi R^2 \omega. On the side where surface spin coincides with freestream flow, relative velocity increases: v_{\text{top}} = v_\infty + v_{\text{rot}}. On the opposite side where spin opposes flow, relative velocity decreases: v_{\text{bottom}} = v_\infty - v_{\text{rot}}. By Bernoulli's principle, higher velocity creates lower static pressure: P_{\text{top}} < P_{\text{bottom}}. Integrating this asymmetric pressure differential around the perimeter yields a net transverse Magnus lift force: \mathbf{F}_L = \rho (\mathbf{v}_\infty \times \boldsymbol{\Gamma}).",
        "realWorldApplication": "Rotor ships equipped with Flettner spinning cylinders for marine propulsion fuel savings, and baseball curveballs, golf ball backspin lift, and soccer curve shots.",
        "variables": [
            {"symbol": "F_L", "label": "Magnus Aerodynamic Lift", "unit": "N"},
            {"symbol": r"\Gamma", "label": "Bound Vortex Circulation", "unit": "m²/s"},
            {"symbol": "v_\\infty", "label": "Freestream Velocity", "unit": "m/s"},
            {"symbol": r"\omega", "label": "Rotor Spin Rate", "unit": "rad/s"},
            {"symbol": "R", "label": "Cylinder / Sphere Radius", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 8, 16],
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
        "formulaLatex": r"\rho \left(\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla)\mathbf{v}\right) = -\nabla P + \mu \nabla^2 \mathbf{v} + \mathbf{f}",
        "summary": "The cornerstone non-linear partial differential equations of fluid dynamics, expressing Newton's second law for a continuous viscous Newtonian fluid under the Cauchy stress tensor.",
        "derivation": r"Formulated by Claude-Louis Navier (1822) and George Gabriel Stokes (1845). By continuum momentum conservation, material acceleration of a fluid parcel is \rho \frac{D\mathbf{v}}{Dt} = \nabla \cdot \boldsymbol{\sigma} + \mathbf{f}, where material derivative is \frac{D\mathbf{v}}{Dt} = \frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v}\cdot\nabla)\mathbf{v}. For an isotropic Newtonian fluid, the Cauchy stress tensor decomposes into isotropic thermodynamic pressure and viscous deviatoric stress: \boldsymbol{\sigma} = -P \mathbf{I} + \boldsymbol{\tau}, with \tau_{ij} = \mu \left(\frac{\partial v_i}{\partial x_j} + \frac{\partial v_j}{\partial x_i}\right) + \lambda (\nabla \cdot \mathbf{v})\delta_{ij}. For incompressible fluids (\nabla \cdot \mathbf{v} = 0), divergence of the stress tensor becomes: \nabla \cdot \boldsymbol{\sigma} = -\nabla P + \mu \nabla^2 \mathbf{v}. Substituting into Cauchy's equation yields the incompressible Navier-Stokes momentum equation: \rho \left(\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla)\mathbf{v}\right) = -\nabla P + \mu \nabla^2 \mathbf{v} + \mathbf{f}, where (\mathbf{v}\cdot\nabla)\mathbf{v} governs non-linear inertial advection (leading to turbulence) and \mu \nabla^2 \mathbf{v} governs viscous diffusion.",
        "realWorldApplication": "Computational Fluid Dynamics (CFD) aerodynamic simulations for Formula 1 racing cars, commercial airliners, and climate global circulation models.",
        "variables": [
            {"symbol": r"\mathbf{v}", "label": "Velocity Vector Field", "unit": "m/s"},
            {"symbol": "P", "label": "Thermodynamic Static Pressure", "unit": "Pa"},
            {"symbol": r"\mu", "label": "Dynamic Viscosity", "unit": "Pa·s"},
            {"symbol": r"\rho", "label": "Fluid Mass Density", "unit": "kg/m³"},
            {"symbol": r"\mathbf{f}", "label": "Body Force per Unit Volume", "unit": "N/m³"}
        ],
        "presetConfig": {
            "domain": "fluids",
            "cameraPosition": [0, 8, 16],
            "timeDilation": 0.8,
            "parameters": {
                "viscosity": 0.005,
                "reynoldsTarget": 1200.0,
                "obstacleRadius": 0.8
            },
            "description": "2D SPH particle channel flowing around a cylindrical obstruction exhibiting Von Kármán vortex street shedding.",
            "apparatusType": "navier_stokes_vortex_street"
        }
    }
]
