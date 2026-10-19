import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Seeded random for reproducible particle positions
function createSeededRandom(seed: number) {
  let x = Math.sin(seed) * 10000;
  return () => {
    x = (x * 16807) % 2147483647;
    return (x - 1) / 2147483646;
  };
}

const particleRandom = createSeededRandom(42);

function AboutGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const torusMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: 0x00d4ff,
    metalness: 0.3,
    roughness: 0.2,
    transparent: true,
    opacity: 0.6,
    transmission: 0.3,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    side: THREE.DoubleSide,
  }), []);

  const icoMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: 0x0066ff,
    metalness: 0.7,
    roughness: 0.1,
    transparent: true,
    opacity: 0.4,
    transmission: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    side: THREE.DoubleSide,
    wireframe: true,
  }), []);

  const particleMaterial = useMemo(() => new THREE.PointsMaterial({
    color: 0x00d4ff,
    size: 0.02,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
  }), []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.15;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3;
      torusRef.current.rotation.z += delta * 0.2;
    }
    if (icoRef.current) {
      icoRef.current.rotation.y -= delta * 0.2;
      icoRef.current.rotation.x += delta * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.02;
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time * 2 + i) * 0.001;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const count = 800;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const radius = 3.5 + particleRandom() * 1.5;
      const theta = particleRandom() * Math.PI * 2;
      const phi = Math.acos(2 * particleRandom() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      sizes[i] = particleRandom() * 0.5 + 0.5;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    return geometry;
  }, []);

  return (
    <group ref={groupRef}>
      <points ref={particlesRef} geometry={particleGeometry} material={particleMaterial} />
      
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.2, 0.35, 120, 20]} />
        <primitive object={torusMaterial} />
      </mesh>
      
      <mesh ref={icoRef} position={[0, 0, 0]} scale={1.8}>
        <icosahedronGeometry args={[0.9, 0]} />
        <primitive object={icoMaterial} />
      </mesh>
      
      <pointLight position={[5, 5, 5]} color="#00d4ff" intensity={80} decay={2} />
      <pointLight position={[-5, -3, 5]} color="#0066ff" intensity={60} decay={2} />
      <pointLight position={[0, 5, -5]} color="#ffd700" intensity={40} decay={2} />
    </group>
  );
}

export default function AboutScene() {
  return (
    <div className="w-full h-[450px] relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 35 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <color attach="background" args={[0x090a0f]} />
        <fog attach="fog" args={[0x090a0f, 1, 20]} />
        <ambientLight color="#ffffff" intensity={0.6} />
        <directionalLight position={[5, 10, 7]} color="#00d4ff" intensity={1.5} />
        <directionalLight position={[-5, 5, -7]} color="#0066ff" intensity={1} />
        
        <AboutGlobe />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-2xl pointer-events-none" />
      <div className="absolute -inset-6 border-2 border-accent-cyan/30 rounded-2xl -z-10" />
    </div>
  );
}