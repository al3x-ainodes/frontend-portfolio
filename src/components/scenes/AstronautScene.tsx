import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function AstronautScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} scale={0.8}>
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#e8e8e8" metalness={0.3} roughness={0.5} />
        </mesh>
        
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[0, -0.35, 0]} rotation={[Math.PI / 6, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.3, 0.5, 32]} />
          <meshStandardMaterial color="#d0d0d0" metalness={0.2} roughness={0.6} />
        </mesh>

        <mesh position={[-0.4, -0.1, 0]} rotation={[0, 0, Math.PI / 4]}>
          <capsuleGeometry args={[0.08, 0.3, 8, 16]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.2} roughness={0.6} />
        </mesh>
        <mesh position={[0.4, -0.1, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <capsuleGeometry args={[0.08, 0.3, 8, 16]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.2} roughness={0.6} />
        </mesh>

        <mesh position={[-0.18, -0.7, 0]}>
          <capsuleGeometry args={[0.1, 0.35, 8, 16]} />
          <meshStandardMaterial color="#b0b0b0" metalness={0.2} roughness={0.6} />
        </mesh>
        <mesh position={[0.18, -0.7, 0]}>
          <capsuleGeometry args={[0.1, 0.35, 8, 16]} />
          <meshStandardMaterial color="#b0b0b0" metalness={0.2} roughness={0.6} />
        </mesh>
      </group>
    </Float>
  );
}
