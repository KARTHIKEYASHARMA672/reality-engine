# -*- coding: utf-8 -*-
"""
Branch 2: Kinematics, Momentum & Collisions (15 concepts)
"""

BRANCH2_CONCEPTS = [
    {
        "id": "elastic-collisions-1d",
        "title": "1D Perfectly Elastic Collisions",
        "branch": "collisions",
        "tag": "Conservation Laws",
        "difficulty": "Foundational",
        "formulaLatex": r"v_{1f} = \frac{m_1 - m_2}{m_1 + m_2} v_{1i} + \frac{2m_2}{m_1 + m_2} v_{2i}",
        "summary": "In a one-dimensional perfectly elastic collision between two isolated bodies, both total linear momentum and total kinetic energy are strictly conserved. No kinetic energy is dissipated into internal heat or deformation.",
        "derivation": r"Conservation of linear momentum: m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f} \implies m_1(v_{1i} - v_{1f}) = m_2(v_{2f} - v_{2i}). Conservation of kinetic energy: \frac{1}{2}m_1 v_{1i}^2 + \frac{1}{2}m_2 v_{2i}^2 = \frac{1}{2}m_1 v_{1f}^2 + \frac{1}{2}m_2 v_{2f}^2 \implies m_1(v_{1i}^2 - v_{1f}^2) = m_2(v_{2f}^2 - v_{2i}^2). Factoring differences of squares: m_1(v_{1i} - v_{1f})(v_{1i} + v_{1f}) = m_2(v_{2f} - v_{2i})(v_{2f} + v_{2i}). Dividing the energy equation by the momentum equation yields: v_{1i} + v_{1f} = v_{2f} + v_{2i} \implies v_{2f} - v_{1f} = -(v_{2i} - v_{1i}). Substituting this relative velocity condition back into the momentum conservation equation yields the explicit post-collision velocities: v_{1f} = \frac{m_1 - m_2}{m_1 + m_2} v_{1i} + \frac{2m_2}{m_1 + m_2} v_{2i} and v_{2f} = \frac{2m_1}{m_1 + m_2} v_{1i} + \frac{m_2 - m_1}{m_1 + m_2} v_{2i}.",
        "realWorldApplication": "Neutron moderation in nuclear fission reactors: Heavy water or graphite moderators slow down fast neutrons via elastic collisions with atomic nuclei of comparable mass.",
        "variables": [
            {"symbol": "v_{1f}, v_{2f}", "label": "Final Velocities", "unit": "m/s"},
            {"symbol": "v_{1i}, v_{2i}", "label": "Initial Velocities", "unit": "m/s"},
            {"symbol": "m_1, m_2", "label": "Colliding Masses", "unit": "kg"},
            {"symbol": "K", "label": "Conserved Kinetic Energy", "unit": "J"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 6, 14],
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
        "formulaLatex": r"m_1 \mathbf{v}_{1i} = m_1 \mathbf{v}_{1f} + m_2 \mathbf{v}_{2f}, \quad \theta_1 + \theta_2 = 90^\circ \; (m_1 = m_2, \mathbf{v}_{2i} = \mathbf{0})",
        "summary": "In two-dimensional planar elastic impacts, vector momentum is conserved along both spatial axes while kinetic energy is invariant. For identical masses with one initially stationary, the post-collision trajectories are orthogonal.",
        "derivation": r"Vector momentum conservation for target at rest (\mathbf{v}_{2i} = \mathbf{0}) states: m_1 \mathbf{v}_{1i} = m_1 \mathbf{v}_{1f} + m_2 \mathbf{v}_{2f}. For equal masses m_1 = m_2 = m: \mathbf{v}_{1i} = \mathbf{v}_{1f} + \mathbf{v}_{2f}. Taking the vector dot product of this equation with itself: |\mathbf{v}_{1i}|^2 = |\mathbf{v}_{1f}|^2 + |\mathbf{v}_{2f}|^2 + 2 (\mathbf{v}_{1f} \cdot \mathbf{v}_{2f}). Kinetic energy conservation gives: \frac{1}{2}m |\mathbf{v}_{1i}|^2 = \frac{1}{2}m |\mathbf{v}_{1f}|^2 + \frac{1}{2}m |\mathbf{v}_{2f}|^2 \implies |\mathbf{v}_{1i}|^2 = |\mathbf{v}_{1f}|^2 + |\mathbf{v}_{2f}|^2. Equating the two scalar expressions requires 2(\mathbf{v}_{1f} \cdot \mathbf{v}_{2f}) = 0 \implies \mathbf{v}_{1f} \cdot \mathbf{v}_{2f} = 0. Thus, the final velocity vectors are strictly orthogonal: \theta_1 + \theta_2 = 90^\circ.",
        "realWorldApplication": "Billiards and cue sports shot geometry, and proton-proton nuclear elastic scattering analysis in subatomic particle bubble chambers.",
        "variables": [
            {"symbol": r"\mathbf{v}_{1i}", "label": "Incident Velocity Vector", "unit": "m/s"},
            {"symbol": r"\mathbf{v}_{1f}, \mathbf{v}_{2f}", "label": "Scattered Velocity Vectors", "unit": "m/s"},
            {"symbol": r"\theta_1, \theta_2", "label": "Scattering Angles", "unit": "deg"},
            {"symbol": "b", "label": "Impact Parameter", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 10, 16],
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
        "formulaLatex": r"\Delta K = \frac{1}{2} \frac{m_1 m_2}{m_1 + m_2} (v_{1i} - v_{2i})^2 (1 - e^2)",
        "summary": "In an inelastic collision, total linear momentum is conserved while a fraction of kinetic energy is irreversibly converted into internal thermal excitation, acoustic radiation, and plastic material deformation.",
        "derivation": r"In the center of mass frame, total kinetic energy is decomposed into center-of-mass motion and relative motion: K_{\text{total}} = K_{\text{cm}} + K_{\text{rel}} = \frac{1}{2}(m_1 + m_2) v_{\text{cm}}^2 + \frac{1}{2} \mu v_{\text{rel}}^2, where reduced mass is \mu = \frac{m_1 m_2}{m_1 + m_2} and relative velocity is v_{\text{rel}} = |v_{1i} - v_{2i}|. Because external forces are zero, K_{\text{cm}} is invariant throughout the collision. By definition of coefficient of restitution e, the final relative velocity is v_{\text{rel}, f} = e v_{\text{rel}, i}. The dissipated kinetic energy is solely lost from relative motion: \Delta K = K_{\text{initial}} - K_{\text{final}} = \frac{1}{2} \mu v_{\text{rel}, i}^2 - \frac{1}{2} \mu (e v_{\text{rel}, i})^2 = \frac{1}{2} \mu v_{\text{rel}, i}^2 (1 - e^2). In a completely inelastic collision (e = 0), the maximum possible kinetic energy \frac{1}{2}\mu v_{\text{rel}, i}^2 is dissipated as the bodies coalesce.",
        "realWorldApplication": "Automotive crumple zone engineering: Vehicles are designed to deform plastically during collisions, maximizing kinetic energy dissipation to protect occupants from extreme decelerations.",
        "variables": [
            {"symbol": r"\Delta K", "label": "Dissipated Kinetic Energy", "unit": "J"},
            {"symbol": "e", "label": "Coefficient of Restitution", "unit": "dimensionless"},
            {"symbol": r"\mu", "label": "Reduced Mass", "unit": "kg"},
            {"symbol": "v_{\text{rel}}", "label": "Relative Approach Speed", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"e = \frac{|\mathbf{v}_{2f} - \mathbf{v}_{1f}|}{|\mathbf{v}_{1i} - \mathbf{v}_{2i}|} = \sqrt{\frac{h_f}{h_i}}",
        "summary": "A dimensionless scalar measuring the elasticity of an impact, defined as the ratio of relative separation speed to relative approach speed along the normal collision axis. It ranges from e = 1 (perfectly elastic) to e = 0 (perfectly plastic).",
        "derivation": r"Consider a sphere dropped from height h_i onto a massive rigid floor (m_2 \to \infty, v_{2i} = v_{2f} = 0). The impact velocity just before contact from free fall is v_{1i} = -\sqrt{2gh_i}. After bouncing with coefficient of restitution e, the upward rebound speed is v_{1f} = -e v_{1i} = e \sqrt{2gh_i}. The ball rises to rebound height h_f where kinetic energy is converted back to gravitational potential: \frac{1}{2}m v_{1f}^2 = m g h_f \implies h_f = \frac{v_{1f}^2}{2g} = \frac{e^2 (2gh_i)}{2g} = e^2 h_i. Taking the square root gives: e = \sqrt{\frac{h_f}{h_i}}.",
        "realWorldApplication": "Sports ball regulatory testing: FIFA soccer balls and tennis balls must satisfy strict drop-height coefficient of restitution ranges to guarantee uniform rebound behavior.",
        "variables": [
            {"symbol": "e", "label": "Coefficient of Restitution", "unit": "dimensionless"},
            {"symbol": "h_i", "label": "Initial Drop Height", "unit": "m"},
            {"symbol": "h_f", "label": "Rebound Height", "unit": "m"},
            {"symbol": "v_{\text{sep}}, v_{\text{app}}", "label": "Separation & Approach Speeds", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 8, 14],
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
        "formulaLatex": r"\mathbf{J} = \int_{t_1}^{t_2} \mathbf{F}(t) \, dt = \Delta \mathbf{p} = m \mathbf{v}_f - m \mathbf{v}_i",
        "summary": "The time integral of a net force acting on a body over an interval is defined as mechanical impulse, and precisely equals the change in the body's linear momentum vector over that duration.",
        "derivation": r"Starting from Newton's second law in differential form: \mathbf{F}(t) = \frac{d\mathbf{p}}{dt}. Multiplying by differential time dt: \mathbf{F}(t) \, dt = d\mathbf{p}. Integrating both sides between time limits t_1 and t_2: \int_{t_1}^{t_2} \mathbf{F}(t) \, dt = \int_{\mathbf{p}_i}^{\mathbf{p}_f} d\mathbf{p} = \mathbf{p}_f - \mathbf{p}_i = \Delta \mathbf{p}. Defining impulse vector \mathbf{J} \equiv \int_{t_1}^{t_2} \mathbf{F}(t) \, dt, we have \mathbf{J} = \Delta \mathbf{p}. If the collision occurs over short duration \Delta t with average force \bar{\mathbf{F}}, then \mathbf{J} = \bar{\mathbf{F}} \Delta t = m(\mathbf{v}_f - \mathbf{v}_i), illustrating that increasing collision time \Delta t dramatically reduces peak contact force.",
        "realWorldApplication": r"Automotive airbag deployment and sports protective helmets: Soft cushioning lengthens impact deceleration time \Delta t, reducing peak biological impact force \bar{F} below fatal injury thresholds.",
        "variables": [
            {"symbol": r"\mathbf{J}", "label": "Mechanical Impulse", "unit": "N·s"},
            {"symbol": r"\mathbf{F}(t)", "label": "Time-Varying Force", "unit": "N"},
            {"symbol": r"\Delta \mathbf{p}", "label": "Momentum Change", "unit": "kg·m/s"},
            {"symbol": r"\Delta t", "label": "Impact Duration", "unit": "s"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 5, 10],
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
        "formulaLatex": r"\mathbf{R}_{\text{cm}} = \frac{\sum m_i \mathbf{r}_i}{\sum m_i}, \quad \mathbf{P}_{\text{cm}} = \sum m_i \mathbf{v}'_i = \mathbf{0}",
        "summary": "The unique reference frame moving at the velocity of the center of mass of an isolated system, in which the total linear momentum is identically zero. This isolates internal interactions from global translational motion.",
        "derivation": r"Given a multi-particle system with masses m_i and positions \mathbf{r}_i in lab frame, center of mass is \mathbf{R}_{\text{cm}} = \frac{1}{M}\sum m_i \mathbf{r}_i, where M = \sum m_i. Differentiating with respect to time gives center of mass velocity: \mathbf{V}_{\text{cm}} = \frac{1}{M}\sum m_i \mathbf{v}_i = \frac{\mathbf{P}_{\text{total}}}{M}. Transforming particle velocities to the CM frame: \mathbf{v}'_i = \mathbf{v}_i - \mathbf{V}_{\text{cm}}. Calculating total momentum in CM frame: \mathbf{P}'_{\text{cm}} = \sum m_i \mathbf{v}'_i = \sum m_i (\mathbf{v}_i - \mathbf{V}_{\text{cm}}) = \sum m_i \mathbf{v}_i - \mathbf{V}_{\text{cm}}\sum m_i = \mathbf{P}_{\text{total}} - M \left(\frac{\mathbf{P}_{\text{total}}}{M}\right) = \mathbf{0}. In the zero-momentum frame, two-body collisions simplify to particles moving with equal and opposite momenta: \mathbf{p}'_1 = -\mathbf{p}'_2 before and after impact.",
        "realWorldApplication": r"High-energy particle collider physics (CERN LHC): Experiments smash counter-circulating proton beams in their center-of-mass frame to maximize available center-of-mass collision energy \sqrt{s}.",
        "variables": [
            {"symbol": r"\mathbf{R}_{\text{cm}}", "label": "Center of Mass Position", "unit": "m"},
            {"symbol": r"\mathbf{V}_{\text{cm}}", "label": "CM Frame Velocity", "unit": "m/s"},
            {"symbol": "M", "label": "Total System Mass", "unit": "kg"},
            {"symbol": r"\mathbf{P}'", "label": "CM Frame Momentum", "unit": "kg·m/s"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 8, 16],
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
        "formulaLatex": r"\sum_{i=1}^N m_i v_i = \text{const}, \quad \sum_{i=1}^N \frac{1}{2} m_i v_i^2 = \text{const}",
        "summary": "Demonstrates simultaneous conservation of momentum and mechanical energy in a sequence of identical elastic spheres. Compression solitary waves propagate through the sphere chain, ejecting precisely the same number of bobs as were drawn back.",
        "derivation": r"Consider N identical steel spheres of mass m in contact. Let k spheres with velocity v strike the remaining (N - k) stationary spheres. Momentum conservation requires: k m v = \sum_{j=1}^N m v_{j,f}. Kinetic energy conservation requires: \frac{1}{2} k m v^2 = \sum_{j=1}^N \frac{1}{2} m v_{j,f}^2. If n spheres are ejected with speed u, then: k v = n u and k v^2 = n u^2. Dividing the energy equation by the momentum equation yields: u = v. Substituting u = v back into the momentum equation gives k v = n v \implies n = k. Thus, the exact number of suspended spheres pulled back must emerge with the exact incoming velocity. Hertzian contact mechanics shows that momentum transfers sequentially as an elastic stress wave without bulk intermediate movement.",
        "realWorldApplication": "Seismic stress wave propagation through dense geological strata and granular shock wave attenuation in ballistic shielding materials.",
        "variables": [
            {"symbol": "k", "label": "Number of Incident Spheres", "unit": "dimensionless"},
            {"symbol": "n", "label": "Number of Ejected Spheres", "unit": "dimensionless"},
            {"symbol": "v", "label": "Collision Velocity", "unit": "m/s"},
            {"symbol": "m", "label": "Sphere Mass", "unit": "kg"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"v_{\text{bullet}} = \frac{m + M}{m} \sqrt{2gh}",
        "summary": "A historical apparatus used to measure high projectile velocities. A high-speed bullet embeds completely inelastically into a heavy suspended block, and the combined system swings up to a measurable vertical height.",
        "derivation": r"The event divides into two distinct stages: (1) Rapid completely inelastic collision: During bullet embedding (duration \Delta t \to 0), gravity is negligible. Linear momentum is conserved: m v_{\text{bullet}} = (m + M) V_{\text{combo}} \implies V_{\text{combo}} = \frac{m}{m + M} v_{\text{bullet}}. (Kinetic energy is not conserved during embedding). (2) Conservative swing up: The combined mass (m + M) swings upward against gravity without non-conservative losses. By conservation of mechanical energy: \frac{1}{2}(m + M) V_{\text{combo}}^2 = (m + M) g h \implies V_{\text{combo}} = \sqrt{2gh}. Equating the two expressions for V_{\text{combo}}: \frac{m}{m + M} v_{\text{bullet}} = \sqrt{2gh} \implies v_{\text{bullet}} = \frac{m + M}{m} \sqrt{2gh}.",
        "realWorldApplication": "Forensic ballistics testing and aerospace kinetic projectile impact velocity calibration.",
        "variables": [
            {"symbol": "v_{\text{bullet}}", "label": "Incident Projectile Speed", "unit": "m/s"},
            {"symbol": "m", "label": "Bullet Mass", "unit": "kg"},
            {"symbol": "M", "label": "Pendulum Block Mass", "unit": "kg"},
            {"symbol": "h", "label": "Maximum Rise Height", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 6, 14],
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
        "formulaLatex": r"v_{nt} = v_{it}, \quad v_{nn} = -e v_{in}, \quad \tan \theta_r = \frac{\tan \theta_i}{e}",
        "summary": "When a body collides obliquely with a planar surface, velocity components decompose into normal and tangential axes. In the frictionless limit, tangential momentum is conserved while the normal velocity reverses with coefficient of restitution e.",
        "derivation": r"Decompose incident velocity \mathbf{v}_i at angle \theta_i from normal into normal and tangential components: v_{in} = v_i \cos\theta_i, v_{it} = v_i \sin\theta_i. Across a frictionless plane surface, normal contact force produces no shear component: F_t = 0 \implies \Delta p_t = 0 \implies v_{ft} = v_{it} = v_i \sin\theta_i. Normal impulse satisfies Newton's restitution law: v_{fn} = -e v_{in} = -e v_i \cos\theta_i. The angle of rebound \theta_r measured from the normal is given by: \tan\theta_r = \frac{|v_{ft}|}{|v_{fn}|} = \frac{v_i \sin\theta_i}{e v_i \cos\theta_i} = \frac{\tan\theta_i}{e}. Because e \le 1, \tan\theta_r \ge \tan\theta_i \implies \theta_r \ge \theta_i: the ball rebounds flatter and closer to the surface plane.",
        "realWorldApplication": "Asteroid glancing impacts producing elliptical craters on planetary surfaces; sonar and acoustic boundary scattering in naval submarines.",
        "variables": [
            {"symbol": r"\theta_i", "label": "Incident Angle from Normal", "unit": "rad"},
            {"symbol": r"\theta_r", "label": "Rebound Angle from Normal", "unit": "rad"},
            {"symbol": "e", "label": "Normal Restitution", "unit": "dimensionless"},
            {"symbol": "v_{it}, v_{ft}", "label": "Tangential Velocities", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 8, 14],
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
        "formulaLatex": r"f_s \le \mu_s N, \quad f_k = \mu_k N, \quad \theta_{\text{repose}} = \arctan(\mu_s)",
        "summary": "Coulomb-Amontons friction models tangential resistance at contacting surfaces. The angle of repose represents the critical incline angle where component gravitational shear overcomes maximum static friction.",
        "derivation": r"Consider a block of mass m resting on an incline tilted at angle \theta. Resolving gravity along normal and parallel incline axes: normal component N = m g \cos\theta, downhill shear component F_\parallel = m g \sin\theta. For the block to remain static, static friction must balance downhill gravity: f_s = m g \sin\theta. Static friction has a maximum threshold: f_s \le f_{s,\text{max}} = \mu_s N = \mu_s m g \cos\theta. At the critical tipping angle \theta_c (angle of repose), static friction reaches its maximum limit: m g \sin\theta_c = \mu_s m g \cos\theta_c \implies \frac{\sin\theta_c}{\cos\theta_c} = \tan\theta_c = \mu_s \implies \theta_{\text{repose}} = \arctan(\mu_s). Once sliding begins (\theta > \theta_{\text{repose}}), friction drops to kinetic friction f_k = \mu_k N with net acceleration a = g(\sin\theta - \mu_k \cos\theta).",
        "realWorldApplication": "Geotechnical slope stability (landslides and avalanche prevention) and granular bulk material handling in grain silos and civil embankments.",
        "variables": [
            {"symbol": r"\mu_s", "label": "Coefficient of Static Friction", "unit": "dimensionless"},
            {"symbol": r"\mu_k", "label": "Coefficient of Kinetic Friction", "unit": "dimensionless"},
            {"symbol": "N", "label": "Normal Contact Force", "unit": "N"},
            {"symbol": r"\theta_{\text{repose}}", "label": "Angle of Repose", "unit": "deg"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 8, 16],
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
        "formulaLatex": r"K_{\text{rot}} = \frac{1}{2} I \omega^2, \quad I = \int r^2 \, dm = \sum m_i r_i^2",
        "summary": "The kinetic energy stored in the rotational motion of a rigid body about an axis, proportional to its rotational inertia (moment of inertia) and the square of its angular velocity.",
        "derivation": r"Consider a rigid body rotating about a fixed axis with angular velocity \omega. Each constituent point mass element dm at perpendicular distance r from the rotation axis possesses instantaneous tangential speed v = r \omega. The total kinetic energy is the volume integral of individual kinetic elements: K_{\text{rot}} = \int \frac{1}{2} v^2 \, dm = \int \frac{1}{2} (r \omega)^2 \, dm. Factoring out the uniform angular speed \omega: K_{\text{rot}} = \frac{1}{2} \omega^2 \int r^2 \, dm. Defining the moment of inertia as I \equiv \int r^2 \, dm, we arrive at the rotational kinetic energy: K_{\text{rot}} = \frac{1}{2} I \omega^2, forming the direct rotational analog to translational kinetic energy K_{\text{trans}} = \frac{1}{2} m v^2.",
        "realWorldApplication": "Flywheel Energy Storage Systems (FESS) used for grid power frequency stabilization and hybrid electric transit buses.",
        "variables": [
            {"symbol": "K_{\text{rot}}", "label": "Rotational Kinetic Energy", "unit": "J"},
            {"symbol": "I", "label": "Moment of Inertia", "unit": "kg·m²"},
            {"symbol": r"\omega", "label": "Angular Velocity", "unit": "rad/s"},
            {"symbol": "r", "label": "Perpendicular Distance to Axis", "unit": "m"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"v_{\text{cm}} = R \omega, \quad a_{\text{cm}} = \frac{g \sin \theta}{1 + \frac{I_{\text{cm}}}{M R^2}}",
        "summary": "When a circular object rolls down an incline without slipping, static friction provides the necessary torque to synchronize translation and rotation such that the contact point remains instantaneously stationary.",
        "derivation": r"Kinematic condition for no-slip contact: v_{\text{cm}} = R \omega \implies a_{\text{cm}} = R \alpha. Newton's laws for rolling down incline \theta: Linear motion down slope: M g \sin\theta - f_s = M a_{\text{cm}}. Rotational motion about CM axis: \tau = f_s R = I_{\text{cm}} \alpha. Substituting \alpha = \frac{a_{\text{cm}}}{R} into torque equation gives: f_s = I_{\text{cm}} \frac{a_{\text{cm}}}{R^2}. Substituting f_s into linear equation: M g \sin\theta - I_{\text{cm}} \frac{a_{\text{cm}}}{R^2} = M a_{\text{cm}} \implies M g \sin\theta = a_{\text{cm}}\left(M + \frac{I_{\text{cm}}}{R^2}\right). Solving for linear acceleration: a_{\text{cm}} = \frac{g \sin\theta}{1 + \frac{I_{\text{cm}}}{M R^2}}. Objects with smaller dimensionless rotational inertia \beta = \frac{I_{\text{cm}}}{M R^2} (e.g., solid sphere \beta = 0.4 vs hoop \beta = 1.0) accelerate faster down the slope.",
        "realWorldApplication": "Automotive braking systems (ABS) maintaining static tire contact without lockup sliding, ensuring maximum braking traction and steering control.",
        "variables": [
            {"symbol": "a_{\text{cm}}", "label": "Center of Mass Acceleration", "unit": "m/s²"},
            {"symbol": "I_{\text{cm}}", "label": "Rotational Inertia about CM", "unit": "kg·m²"},
            {"symbol": "R", "label": "Rolling Radius", "unit": "m"},
            {"symbol": r"\theta", "label": "Incline Angle", "unit": "deg"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 8, 18],
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
        "formulaLatex": r"v_{\text{efflux}} = \sqrt{2g h}",
        "summary": "The speed of fluid efflux through a sharp orifice at depth h beneath an open liquid surface equals the speed that a solid mass would achieve falling freely under gravity from the same height.",
        "derivation": r"Apply Bernoulli's principle along a streamline from top surface (point 1) to efflux orifice (point 2): P_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g z_2. Both the top surface and the discharge jet are open to atmospheric pressure: P_1 = P_2 = P_{\text{atm}}. Setting reference elevation z_2 = 0 at the orifice, top surface height is z_1 = h. By equation of continuity: A_1 v_1 = A_2 v_2 \implies v_1 = \left(\frac{A_2}{A_1}\right) v_2. For a large tank where reservoir surface area is vastly greater than orifice area (A_1 \gg A_2), surface velocity is negligible: v_1 \approx 0. Substituting these values into Bernoulli's equation: \rho g h = \frac{1}{2}\rho v_2^2 \implies v_2 = \sqrt{2g h}.",
        "realWorldApplication": "Reservoir dam outlet design, industrial chemical batch draining, and liquid propellant rocket tank draining calculations.",
        "variables": [
            {"symbol": "v_{\text{efflux}}", "label": "Efflux Jet Velocity", "unit": "m/s"},
            {"symbol": "h", "label": "Fluid Column Height", "unit": "m"},
            {"symbol": "g", "label": "Gravitational Acceleration", "unit": "m/s²"},
            {"symbol": r"\rho", "label": "Fluid Density", "unit": "kg/m³"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 6, 12],
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
        "formulaLatex": r"\mathbf{P}_{\text{initial}} = \mathbf{0} \implies m_1 \mathbf{v}_1 + m_2 \mathbf{v}_2 = \mathbf{0}, \quad v_f = v_0 + v_e \ln\left(\frac{m_0}{m_f}\right)",
        "summary": "When internal chemical or explosive energy breaks an isolated body apart, total vector momentum remains strictly zero. In continuous rocket expulsions, this yields the fundamental Tsiolkovsky rocket equation.",
        "derivation": r"For an isolated system initially at rest (\mathbf{P}_{\text{initial}} = \mathbf{0}), an internal explosive release separates the system into two fragments: \mathbf{P}_{\text{final}} = m_1 \mathbf{v}_1 + m_2 \mathbf{v}_2 = \mathbf{0} \implies \mathbf{v}_2 = -\frac{m_1}{m_2}\mathbf{v}_1. The kinetic energy ratio is \frac{K_1}{K_2} = \frac{\frac{1}{2}m_1 v_1^2}{\frac{1}{2}m_2 v_2^2} = \frac{m_2}{m_1}, showing that the lighter fragment receives the lion's share of explosive energy. For continuous exhaust ejection with mass m(t) and relative exhaust speed v_e: m \frac{dv}{dt} = -v_e \frac{dm}{dt} \implies dv = -v_e \frac{dm}{m}. Integrating from initial mass m_0 to burnout mass m_f yields Tsiolkovsky's equation: \Delta v = v_e \ln\left(\frac{m_0}{m_f}\right).",
        "realWorldApplication": "Rocket launch staging and artillery muzzle brake recoil mitigation systems.",
        "variables": [
            {"symbol": r"\mathbf{v}_1, \mathbf{v}_2", "label": "Fragment Recoil Velocities", "unit": "m/s"},
            {"symbol": "v_e", "label": "Effective Exhaust Velocity", "unit": "m/s"},
            {"symbol": "m_0 / m_f", "label": "Mass Ratio", "unit": "dimensionless"},
            {"symbol": r"\Delta v", "label": "Velocity Increment", "unit": "m/s"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 6, 14],
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
        "formulaLatex": r"T = 2\pi \sqrt{\frac{L}{g}} \left(1 + \frac{1}{4} \sin^2\frac{\theta_0}{2} + \frac{9}{64} \sin^4\frac{\theta_0}{2} + \dots\right)",
        "summary": r"For small angular swings (\theta_0 < 10^\circ), a pendulum's period is virtually independent of amplitude (isochronism). At large release angles, the non-linear restoring torque increases the period measurably.",
        "derivation": r"The exact equation of motion of a simple pendulum of length L is \ddot{\theta} + \frac{g}{L} \sin\theta = 0. Under the small-angle Taylor expansion \sin\theta \approx \theta - \frac{\theta^3}{6}, the linear approximation yields simple harmonic motion with period T_0 = 2\pi \sqrt{\frac{L}{g}}. For arbitrary initial amplitude \theta_0, conservation of mechanical energy gives: \frac{1}{2} m (L \dot{\theta})^2 + m g L (1 - \cos\theta) = m g L (1 - \cos\theta_0). Solving for \dot{\theta} and integrating over a quarter period: T = 4 \sqrt{\frac{L}{2g}} \int_0^{\theta_0} \frac{d\theta}{\sqrt{\cos\theta - \cos\theta_0}}. Substituting \sin\phi = \frac{\sin(\theta/2)}{\sin(\theta_0/2)} transforms the integral into the complete elliptic integral of the first kind K(k): T = 4 \sqrt{\frac{L}{g}} K\left(\sin\frac{\theta_0}{2}\right) = 2\pi \sqrt{\frac{L}{g}} \left[1 + \frac{1}{4} \sin^2\frac{\theta_0}{2} + \frac{9}{64}\sin^4\frac{\theta_0}{2} + \dots\right].",
        "realWorldApplication": "Horological grandfather clocks and Foucault pendulums: Amplitude must be kept tiny or cycloidal guides used (Huygens) to prevent clock period drift.",
        "variables": [
            {"symbol": "T", "label": "Full Period of Oscillation", "unit": "s"},
            {"symbol": "T_0", "label": "Small-Angle Period", "unit": "s"},
            {"symbol": "L", "label": "Pendulum Cord Length", "unit": "m"},
            {"symbol": r"\theta_0", "label": "Release Amplitude Angle", "unit": "rad"}
        ],
        "presetConfig": {
            "domain": "collisions",
            "cameraPosition": [0, 6, 12],
            "timeDilation": 1.0,
            "parameters": {
                "cordLength": 3.0,
                "smallAngle": 5.0,
                "largeAngle": 80.0
            },
            "description": "Dual pendulum comparison contrasting small-angle isochronous oscillation with large-angle elliptic delay.",
            "apparatusType": "dual_angle_pendulum_stand"
        }
    }
]
