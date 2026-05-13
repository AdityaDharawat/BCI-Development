import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const createHemisphericLobe = (offsetX: number) => {
  const geometry = new THREE.SphereGeometry(1, 64, 64);
  const position = geometry.attributes.position;

  for (let i = 0; i < position.count; i += 1) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);
    const distortion = 0.08 * Math.sin(y * 8) * Math.cos(z * 6) + 0.04 * Math.sin(x * 10);
    position.setXYZ(i, x * (1 + distortion), y * (1 + distortion / 1.3), z * (1 + distortion));
  }

  geometry.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    color: '#f6eef1',
    roughness: 0.35,
    metalness: 0.08,
    emissive: '#eaf5ff',
    emissiveIntensity: 0.18,
    transparent: true,
    opacity: 0.95,
    side: THREE.DoubleSide,
    clearcoat: 0.15,
    clearcoatRoughness: 0.45,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = offsetX;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
};

const createBrainGroup = () => {
  const group = new THREE.Group();
  const leftLobe = createHemisphericLobe(-0.78);
  const rightLobe = createHemisphericLobe(0.78);
  const connector = new THREE.Mesh(
    new THREE.CylinderGeometry(0.24, 0.28, 0.6, 40),
    new THREE.MeshStandardMaterial({
      color: '#f6eef1',
      roughness: 0.32,
      metalness: 0.06,
      emissive: '#eaf5ff',
      emissiveIntensity: 0.12,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
    })
  );

  connector.rotation.z = Math.PI / 2;
  connector.position.y = -0.12;
  connector.receiveShadow = true;
  connector.castShadow = true;

  group.add(leftLobe, rightLobe, connector);
  return group;
};

const createFloorPlate = () => {
  const geometry = new THREE.CircleGeometry(2.4, 80);
  const material = new THREE.MeshBasicMaterial({
    color: '#dbeafe',
    transparent: true,
    opacity: 0.12,
  });
  const plate = new THREE.Mesh(geometry, material);
  plate.rotation.x = -Math.PI / 2;
  plate.position.y = -1.05;
  return plate;
};

const BrainCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const isWebGLAvailable = (() => {
      if (typeof window === 'undefined' || !window.WebGLRenderingContext) {
        return false;
      }
      const testCanvas = document.createElement('canvas');
      return !!(
        testCanvas.getContext('webgl') ||
        testCanvas.getContext('experimental-webgl')
      );
    })();

    if (!isWebGLAvailable) {
      setWebglSupported(false);
      return;
    }

    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f9fbff');

    const camera = new THREE.PerspectiveCamera(32, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0.9, 4.2);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = !isMobile;
    controls.autoRotateSpeed = 0.18;
    controls.minPolarAngle = Math.PI * 0.2;
    controls.maxPolarAngle = Math.PI * 0.85;
    controls.minDistance = 2.4;
    controls.maxDistance = 6.5;

    const ambientLight = new THREE.HemisphereLight('#e9f5ff', '#b8c4d8', 0.55);
    const mainLight = new THREE.DirectionalLight('#ffffff', 0.95);
    mainLight.position.set(3.5, 4.5, 3);
    mainLight.castShadow = true;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 15;
    mainLight.shadow.mapSize.set(1024, 1024);

    const accentLight = new THREE.PointLight('#8dc4ff', 0.85, 8, 2);
    accentLight.position.set(-3, 1.8, 2.5);

    const rimLight = new THREE.PointLight('#c0d9ff', 0.6, 10, 2);
    rimLight.position.set(2.8, 0.8, -2.2);

    scene.add(ambientLight, mainLight, accentLight, rimLight);

    const brainGroup = createBrainGroup();
    scene.add(brainGroup);
    scene.add(createFloorPlate());

    const helper = new THREE.AxesHelper(0);
    helper.visible = false;
    scene.add(helper);

    let pointerX = 0;
    let pointerY = 0;

    const handlePointerMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / rect.width * 2 - 1;
      pointerY = -((event.clientY - rect.top) / rect.height * 2 - 1);
    };

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const floatY = Math.sin(elapsed * 0.9) * 0.06;
      brainGroup.position.y = floatY;
      brainGroup.rotation.y += 0.0028;
      brainGroup.rotation.x += (pointerY * 0.18 - brainGroup.rotation.x) * 0.04;
      brainGroup.rotation.z += (pointerX * 0.06 - brainGroup.rotation.z) * 0.02;

      controls.update();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    container.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      controls.dispose();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-[420px] overflow-hidden rounded-[2rem] bg-white/80">
      {!webglSupported ? (
        <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 p-8 text-center text-sm text-slate-500">
          <div className="h-14 w-14 rounded-full border-4 border-indigo-200 border-t-indigo-500 animate-spin" />
          <p>Interactive 3D rendering is unavailable in this browser.</p>
          <p>Try a modern desktop browser for the full MRI experience.</p>
        </div>
      ) : (
        <canvas ref={canvasRef} className="block h-full w-full" />
      )}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_30%)]" />
    </div>
  );
};

export default BrainCanvas;
