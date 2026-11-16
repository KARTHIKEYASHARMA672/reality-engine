import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PhysicsEngine } from '../physics/engine';
import { PhysicsBody, PhysicsDomain, Vector3D } from '../types/physics';
import { vec3 } from '../physics/mathUtils';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface LaboratoryCanvasProps {
  engine: PhysicsEngine;
  isPlaying: boolean;
  timeDilation: number;
  showVectorField: boolean;
  showTrails: boolean;
  activeDomain: PhysicsDomain;
  selectedBody: PhysicsBody | null;
  onSelectBody: (body: PhysicsBody | null) => void;
  onEngineUpdate?: () => void;
}

export const LaboratoryCanvas: React.FC<LaboratoryCanvasProps> = ({
  engine,
  isPlaying,
  timeDilation,
  showVectorField,
  showTrails,
  activeDomain,
  selectedBody,
  onSelectBody,
  onEngineUpdate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const meshesMapRef = useRef<Map<string, THREE.Mesh>>(new Map());
  const trailsMapRef = useRef<Map<string, THREE.Line>>(new Map());
  const vectorArrowsGroupRef = useRef<THREE.Group | null>(null);
  const fluidSurfaceMeshRef = useRef<THREE.Mesh | null>(null);
  const thermalChamberGroupRef = useRef<THREE.Group | null>(null);
  const modernApparatusGroupRef = useRef<THREE.Group | null>(null);
  const pistonMeshRef = useRef<THREE.Mesh | null>(null);

  // Dragging & raycasting
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());

  // Initialize Three.js Scene
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#F4E7D7'); // Warm Sandal Background
    sceneRef.current = scene;

    // Subtle atmospheric fog
    scene.fog = new THREE.FogExp2('#F4E7D7', 0.015);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 8, 16);
    cameraRef.current = camera;

    // 3. Renderer with antialiasing and soft shadows
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // 4. Controls
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI / 2 - 0.02; // Keep camera above laboratory floor
    controls.minDistance = 2;
    controls.maxDistance = 80;
    controls.target.set(0, 3, 0);
    controlsRef.current = controls;

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight('#FFFFFF', 0.7);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight('#FFF9F2', 1.2);
    mainLight.position.set(12, 20, 10);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.bias = -0.0001;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight('#B78A63', 0.4);
    fillLight.position.set(-10, 10, -10);
    scene.add(fillLight);

    // 6. Laboratory Floor & Precision Grid
    const floorGeo = new THREE.PlaneGeometry(60, 60);
    const floorMat = new THREE.MeshStandardMaterial({
      color: '#EBD8C6',
      roughness: 0.85,
      metalness: 0.1,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);

    // Primary & secondary grid lines (Wine & Sandal)
    const grid = new THREE.GridHelper(30, 30, '#76283B', '#E1CDBB');
    grid.position.y = 0.01;
    scene.add(grid);

    // 7. Vector Arrows Group
    const vectorGroup = new THREE.Group();
    scene.add(vectorGroup);
    vectorArrowsGroupRef.current = vectorGroup;

    // 8. Fluid Surface Mesh (shown when domain is 'fluids')
    const fluidGeo = new THREE.BoxGeometry(20, 4, 20);
    const fluidMat = new THREE.MeshPhysicalMaterial({
      color: '#3B82F6',
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      transmission: 0.6,
      ior: 1.333,
    });
    const fluidMesh = new THREE.Mesh(fluidGeo, fluidMat);
    fluidMesh.position.set(0, 2, 0);
    fluidMesh.visible = false;
    scene.add(fluidMesh);
    fluidSurfaceMeshRef.current = fluidMesh;

    // 9. Thermal Gas Chamber Group (shown when domain is 'thermodynamics')
    const thermalGroup = new THREE.Group();
    const chamberHeight = engine.params.chamberHeight || 6.0;
    const glassGeo = new THREE.BoxGeometry(8, chamberHeight, 8);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: '#E1CDBB',
      transparent: true,
      opacity: 0.18,
      roughness: 0.1,
      transmission: 0.85,
    });
    const chamberGlass = new THREE.Mesh(glassGeo, glassMat);
    chamberGlass.position.set(0, chamberHeight / 2, 0);
    thermalGroup.add(chamberGlass);

    const frameEdges = new THREE.EdgesGeometry(glassGeo);
    const frameLineMat = new THREE.LineBasicMaterial({ color: '#76283B' });
    const frameLines = new THREE.LineSegments(frameEdges, frameLineMat);
    frameLines.position.set(0, chamberHeight / 2, 0);
    thermalGroup.add(frameLines);

    const pistonGeo = new THREE.BoxGeometry(7.9, 0.25, 7.9);
    const pistonMat = new THREE.MeshStandardMaterial({
      color: '#B78A63',
      metalness: 0.6,
      roughness: 0.3,
    });
    const piston = new THREE.Mesh(pistonGeo, pistonMat);
    piston.position.set(0, chamberHeight, 0);
    thermalGroup.add(piston);
    pistonMeshRef.current = piston;

    thermalGroup.visible = false;
    scene.add(thermalGroup);
    thermalChamberGroupRef.current = thermalGroup;

    // 10. Quantum / Modern Double-Slit Barrier (shown when domain is 'modern')
    const modernGroup = new THREE.Group();
    const barrierMat = new THREE.MeshStandardMaterial({
      color: '#321922',
      roughness: 0.5,
      metalness: 0.3,
    });
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(2.8, 6.0, 0.2), barrierMat);
    leftWall.position.set(-2.0, 3.0, 0);
    modernGroup.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(2.8, 6.0, 0.2), barrierMat);
    rightWall.position.set(2.0, 3.0, 0);
    modernGroup.add(rightWall);

    const centerPillar = new THREE.Mesh(new THREE.BoxGeometry(0.8, 6.0, 0.2), barrierMat);
    centerPillar.position.set(0, 3.0, 0);
    modernGroup.add(centerPillar);

    const screenGeo = new THREE.PlaneGeometry(8, 6);
    const screenMat = new THREE.MeshStandardMaterial({
      color: '#FFF9F2',
      emissive: '#76283B',
      emissiveIntensity: 0.15,
      side: THREE.DoubleSide,
    });
    const detectorScreen = new THREE.Mesh(screenGeo, screenMat);
    detectorScreen.position.set(0, 3.0, 5.5);
    modernGroup.add(detectorScreen);

    modernGroup.visible = false;
    scene.add(modernGroup);
    modernApparatusGroupRef.current = modernGroup;

    // Resize listener
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  // Update domain-specific 3D apparatus visibility
  useEffect(() => {
    if (fluidSurfaceMeshRef.current) {
      fluidSurfaceMeshRef.current.visible = activeDomain === 'fluids';
    }
    if (thermalChamberGroupRef.current) {
      thermalChamberGroupRef.current.visible = activeDomain === 'thermodynamics';
    }
    if (modernApparatusGroupRef.current) {
      modernApparatusGroupRef.current.visible = activeDomain === 'modern';
    }
    if (pistonMeshRef.current && engine.params.chamberHeight) {
      pistonMeshRef.current.position.y = engine.params.chamberHeight;
    }
  }, [activeDomain, engine.params.chamberHeight]);

  // Raycasting click to select body
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!containerRef.current || !cameraRef.current || !sceneRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const interactiveMeshes = Array.from(meshesMapRef.current.values());
    const intersects = raycasterRef.current.intersectObjects(interactiveMeshes);

    if (intersects.length > 0) {
      const clickedMesh = intersects[0].object as THREE.Mesh;
      const bodyId = clickedMesh.userData?.bodyId;
      const body = engine.bodies.find(b => b.id === bodyId) || null;
      onSelectBody(body);
    } else {
      onSelectBody(null);
    }
  };

  // Main 60 FPS Simulation & Render Loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const rawDt = Math.min((currentTime - lastTime) / 1000, 0.05); // cap at 50ms
      lastTime = currentTime;

      // 1. Advance physics simulation if playing
      if (isPlaying) {
        const effectiveDt = rawDt * timeDilation;
        engine.step(effectiveDt);
        if (onEngineUpdate) {
          onEngineUpdate();
        }
      }

      // 2. Synchronize Three.js Meshes with Physics Engine Bodies
      if (sceneRef.current) {
        const currentBodyIds = new Set(engine.bodies.map(b => b.id));

        // Remove obsolete meshes
        meshesMapRef.current.forEach((mesh, id) => {
          if (!currentBodyIds.has(id)) {
            sceneRef.current?.remove(mesh);
            mesh.geometry.dispose();
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(m => m.dispose());
            } else {
              mesh.material.dispose();
            }
            meshesMapRef.current.delete(id);
          }
        });

        // Remove obsolete trails
        trailsMapRef.current.forEach((trailLine, id) => {
          if (!currentBodyIds.has(id)) {
            sceneRef.current?.remove(trailLine);
            trailLine.geometry.dispose();
            (trailLine.material as THREE.Material).dispose();
            trailsMapRef.current.delete(id);
          }
        });

        // Update or create meshes for bodies
        engine.bodies.forEach(body => {
          let mesh = meshesMapRef.current.get(body.id);
          if (!mesh) {
            const geo = new THREE.SphereGeometry(body.radius, 32, 32);
            
            // Material styled by body type and charge
            let mat: THREE.Material;
            if (Math.abs(body.charge) > 1e-6) {
              const isPos = body.charge > 0;
              mat = new THREE.MeshStandardMaterial({
                color: isPos ? '#EF4444' : '#3B82F6', // Red for positive, blue for negative
                emissive: isPos ? '#991B1B' : '#1E40AF',
                emissiveIntensity: 0.35,
                roughness: 0.3,
                metalness: 0.2,
              });
            } else if (body.type === 'fluid_particle') {
              mat = new THREE.MeshStandardMaterial({
                color: '#60A5FA',
                transparent: true,
                opacity: 0.75,
                roughness: 0.2,
              });
            } else {
              mat = new THREE.MeshStandardMaterial({
                color: body.color || '#76283B',
                roughness: 0.35,
                metalness: 0.5,
              });
            }

            mesh = new THREE.Mesh(geo, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.userData = { bodyId: body.id };
            sceneRef.current?.add(mesh);
            meshesMapRef.current.set(body.id, mesh);
          }

          // Update position
          mesh.position.set(body.position.x, body.position.y, body.position.z);

          // Highlight selected body
          const isSelected = selectedBody?.id === body.id;
          if (mesh.material instanceof THREE.MeshStandardMaterial) {
            mesh.material.emissive.set(isSelected ? '#B78A63' : (body.charge > 0 ? '#991B1B' : (body.charge < 0 ? '#1E40AF' : '#000000')));
            mesh.material.emissiveIntensity = isSelected ? 0.6 : (Math.abs(body.charge) > 1e-6 ? 0.35 : 0.0);
          }

          // Trajectory Ribbon Trail
          if (showTrails && body.trail && body.trail.length > 2) {
            let trailLine = trailsMapRef.current.get(body.id);
            const points = body.trail.map(p => new THREE.Vector3(p.x, p.y, p.z));

            if (!trailLine) {
              const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
              const lineMat = new THREE.LineBasicMaterial({
                color: body.color || '#B78A63',
                transparent: true,
                opacity: 0.5,
                linewidth: 2,
              });
              trailLine = new THREE.Line(lineGeo, lineMat);
              sceneRef.current?.add(trailLine);
              trailsMapRef.current.set(body.id, trailLine);
            } else {
              trailLine.geometry.setFromPoints(points);
              trailLine.visible = true;
            }
          } else {
            const existing = trailsMapRef.current.get(body.id);
            if (existing) existing.visible = false;
          }
        });

        // 3. Render 3D Vector Field Arrows
        if (vectorArrowsGroupRef.current) {
          vectorArrowsGroupRef.current.clear();

          if (showVectorField && engine.bodies.length > 0) {
            // Draw field arrows on a 3D grid slice
            const step = 2.5;
            const arrowLength = 0.8;
            for (let x = -8; x <= 8; x += step) {
              for (let z = -8; z <= 8; z += step) {
                const samplePos = { x, y: 2.0, z };

                let dir = vec3.create(0, 0, 0);
                if (activeDomain === 'electromagnetism') {
                  // Electric field vector at this point
                  for (const b of engine.bodies) {
                    if (Math.abs(b.charge) > 1e-9) {
                      const delta = vec3.sub(samplePos, b.position);
                      const distSq = vec3.lengthSq(delta) + 0.1;
                      const dist = Math.sqrt(distSq);
                      const mag = (engine.params.electricPermittivity * b.charge) / distSq;
                      dir = vec3.add(dir, vec3.scale(delta, mag / dist));
                    }
                  }
                } else {
                  // Gravitational field vector at this point
                  for (const b of engine.bodies) {
                    const delta = vec3.sub(b.position, samplePos);
                    const distSq = vec3.lengthSq(delta) + 0.2;
                    const dist = Math.sqrt(distSq);
                    const mag = (engine.params.gravityConstant * b.mass) / distSq;
                    dir = vec3.add(dir, vec3.scale(delta, mag / dist));
                  }
                }

                const len = vec3.length(dir);
                if (len > 0.05) {
                  const normDir = vec3.normalize(dir);
                  const arrowDir = new THREE.Vector3(normDir.x, normDir.y, normDir.z);
                  const arrowOrigin = new THREE.Vector3(samplePos.x, samplePos.y, samplePos.z);
                  
                  // Color mapped by field intensity (Wine & Sandal Palette)
                  const color = activeDomain === 'electromagnetism' ? '#C85B75' : '#76283B';
                  const arrow = new THREE.ArrowHelper(arrowDir, arrowOrigin, arrowLength, color, 0.25, 0.15);
                  vectorArrowsGroupRef.current.add(arrow);
                }
              }
            }
          }
        }
      }

      // 4. Update controls & render
      if (controlsRef.current) controlsRef.current.update();
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, timeDilation, showVectorField, showTrails, activeDomain, selectedBody]);

  return (
    <div ref={containerRef} className="relative w-full h-full select-none cursor-grab active:cursor-grabbing">
      <canvas ref={canvasRef} onClick={handleCanvasClick} className="w-full h-full block" />
      
      {/* 3D Viewport HUD Overlay */}
      <div className="absolute top-4 left-4 pointer-events-none flex flex-col gap-1 text-xs font-mono text-indigo-950 bg-vanilla-100/80 backdrop-blur-md px-3 py-2 rounded-lg border border-vanilla-400 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-indigo-900 tracking-wider">REALITY WEBGL2 VIEWPORT</span>
        </div>
        <div className="text-muted text-[11px]">
          Bodies: {engine.bodies.length} | Sub-Steps: {engine.params.subSteps}x | Time: {engine.time.toFixed(2)}s
        </div>
      </div>
    </div>
  );
};
