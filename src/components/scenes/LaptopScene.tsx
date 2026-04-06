import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const keyColors = [
  '#ff0066', '#ff0066', '#ff0066', '#ff0066', '#ff0066', '#ff0066', '#ff0066', '#ff0066', '#ff0066', '#ff0066',
  '#00ff88', '#00ff88', '#00ff88', '#00ff88', '#00ff88', '#00ff88', '#00ff88', '#00ff88', '#00ff88', '#00ff88',
  '#ff6600', '#ff6600', '#ff6600', '#ff6600', '#ff6600', '#ff6600', '#ff6600', '#ff6600', '#ff6600', '#ff6600',
];

function Laptop() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    metalness: 0.8,
    roughness: 0.2,
  }), []);

  const glowMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#00d4ff',
    emissive: '#00d4ff',
    emissiveIntensity: 1.5,
  }), []);

  const cpuMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#222222',
    metalness: 0.9,
    roughness: 0.1,
  }), []);

  const createKeyMaterial = (color: string) => new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: 0.3,
    metalness: 0.5,
    roughness: 0.3,
  });

  const createSpeakerMaterial = (color: string) => new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: 0.5,
    metalness: 0.7,
    roughness: 0.2,
  });

  const createCPUMaterial = (color: string) => new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    emissive: color,
    emissiveIntensity: 0.8,
    metalness: 0.9,
    roughness: 0.1,
  });

  return (
    <group ref={groupRef} scale={1.5} rotation={[0.1, -0.3, 0]}>
      {/* Laptop Screen */}
      <group position={[0, 0.3, -0.4]} rotation={[0.2, 0, 0]}>
        {/* Screen frame */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 1.2, 0.05]} />
          <primitive object={bodyMaterial} />
        </mesh>
        {/* Screen Display - Code Editor */}
        <mesh position={[0, 0, 0.025]}>
          <planeGeometry args={[1.8, 1.02]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.1} roughness={0.8} />
        </mesh>
        {/* Code Lines on Screen */}
        {/* Line 1 - Header bar */}
        <mesh position={[0, 0.4, 0.03]}>
          <planeGeometry args={[1.6, 0.08]} />
          <meshStandardMaterial color="#ff0066" emissive="#ff0066" emissiveIntensity={0.3} />
        </mesh>
        {/* Line 2 - Code line pink */}
        <mesh position={[-0.5, 0.25, 0.03]}>
          <planeGeometry args={[0.4, 0.03]} />
          <meshStandardMaterial color="#ff0066" emissive="#ff0066" emissiveIntensity={0.2} />
        </mesh>
        {/* Line 3 - Code line cyan */}
        <mesh position={[0.2, 0.25, 0.03]}>
          <planeGeometry args={[0.6, 0.03]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.2} />
        </mesh>
        {/* Line 4 - Code line green */}
        <mesh position={[-0.6, 0.15, 0.03]}>
          <planeGeometry args={[0.3, 0.03]} />
          <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.2} />
        </mesh>
        {/* Line 5 - Code line orange */}
        <mesh position={[0.1, 0.15, 0.03]}>
          <planeGeometry args={[0.7, 0.03]} />
          <meshStandardMaterial color="#ff6600" emissive="#ff6600" emissiveIntensity={0.2} />
        </mesh>
        {/* Line 6 - Code line purple */}
        <mesh position={[-0.4, 0.05, 0.03]}>
          <planeGeometry args={[0.5, 0.03]} />
          <meshStandardMaterial color="#9b59b6" emissive="#9b59b6" emissiveIntensity={0.2} />
        </mesh>
        {/* Line 7 - Code line cyan */}
        <mesh position={[0.3, 0.05, 0.03]}>
          <planeGeometry args={[0.5, 0.03]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.2} />
        </mesh>
        {/* Line 8 - Code line yellow */}
        <mesh position={[-0.5, -0.05, 0.03]}>
          <planeGeometry args={[0.2, 0.03]} />
          <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.2} />
        </mesh>
        {/* Line 9 - Code line pink */}
        <mesh position={[0, -0.05, 0.03]}>
          <planeGeometry args={[0.8, 0.03]} />
          <meshStandardMaterial color="#ff0066" emissive="#ff0066" emissiveIntensity={0.2} />
        </mesh>
        {/* Line 10 - Code line green */}
        <mesh position={[-0.3, -0.15, 0.03]}>
          <planeGeometry args={[0.6, 0.03]} />
          <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.2} />
        </mesh>
        {/* Line 11 - Code line cyan */}
        <mesh position={[0.4, -0.15, 0.03]}>
          <planeGeometry args={[0.4, 0.03]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.2} />
        </mesh>
        {/* Line 12 - Cursor block */}
        <mesh position={[-0.6, -0.25, 0.03]}>
          <planeGeometry args={[0.05, 0.12]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
        {/* Line 13 - Closing tag */}
        <mesh position={[0.3, -0.35, 0.03]}>
          <planeGeometry args={[0.4, 0.03]} />
          <meshStandardMaterial color="#9b59b6" emissive="#9b59b6" emissiveIntensity={0.2} />
        </mesh>
        {/* Line 14 - HTML tag */}
        <mesh position={[-0.4, -0.45, 0.03]}>
          <planeGeometry args={[0.5, 0.03]} />
          <meshStandardMaterial color="#ff6600" emissive="#ff6600" emissiveIntensity={0.2} />
        </mesh>
        {/* Screen glow overlay */}
        <mesh position={[0, 0, 0.035]}>
          <planeGeometry args={[1.75, 1]} />
          <meshBasicMaterial color="#00d4ff" opacity={0.05} transparent />
        </mesh>
        {/* Camera */}
        <mesh position={[0, 0.48, 0.03]}>
          <circleGeometry args={[0.025, 16]} />
          <meshBasicMaterial color="#333" />
        </mesh>
      </group>

      {/* Laptop Base */}
      <group position={[0, 0, 0]}>
        {/* Main base */}
        <mesh position={[0, -0.05, 0.1]}>
          <boxGeometry args={[2, 0.08, 1.2]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* RGB Keyboard Area Background */}
        <mesh position={[0, -0.025, 0.15]}>
          <boxGeometry args={[1.6, 0.01, 0.7]} />
          <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.8} />
        </mesh>
        
        {/* Colorful RGB Keys Row 1 */}
        <group position={[0, -0.01, -0.55]}>
          {Array.from({ length: 10 }).map((_, i) => (
            <mesh key={i} position={[(i - 4.5) * 0.15, 0, 0]}>
              <boxGeometry args={[0.12, 0.025, 0.08]} />
              <primitive object={createKeyMaterial(keyColors[i])} />
            </mesh>
          ))}
        </group>
        
        {/* Colorful RGB Keys Row 2 */}
        <group position={[0, -0.01, -0.2]}>
          {Array.from({ length: 10 }).map((_, i) => (
            <mesh key={i} position={[(i - 4.5) * 0.15, 0, 0]}>
              <boxGeometry args={[0.12, 0.025, 0.08]} />
              <primitive object={createKeyMaterial(keyColors[10 + i])} />
            </mesh>
          ))}
        </group>
        
        {/* Colorful RGB Keys Row 3 */}
        <group position={[0, -0.01, 0.15]}>
          {Array.from({ length: 10 }).map((_, i) => (
            <mesh key={i} position={[(i - 4.5) * 0.15, 0, 0]}>
              <boxGeometry args={[0.12, 0.025, 0.08]} />
              <primitive object={createKeyMaterial(keyColors[20 + i])} />
            </mesh>
          ))}
        </group>
        
        {/* Spacebar with RGB */}
        <group position={[0, -0.01, 0.35]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.5, 0.025, 0.08]} />
            <primitive object={createKeyMaterial('#00ffff')} />
          </mesh>
        </group>
        
        {/* Left Speaker - Visible Box Speakers */}
        <group position={[-0.7, -0.02, 0.55]}>
          {/* Speaker housing */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.25, 0.04, 0.2]} />
            <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Speaker cone 1 */}
          <mesh position={[-0.05, 0.025, 0]}>
            <cylinderGeometry args={[0.04, 0.05, 0.02, 16]} />
            <primitive object={createSpeakerMaterial('#ff0066')} />
          </mesh>
          {/* Speaker cone 2 */}
          <mesh position={[0.05, 0.025, 0]}>
            <cylinderGeometry args={[0.04, 0.05, 0.02, 16]} />
            <primitive object={createSpeakerMaterial('#ff0066')} />
          </mesh>
          {/* Speaker mesh */}
          <mesh position={[0, 0.03, 0]}>
            <boxGeometry args={[0.2, 0.005, 0.15]} />
            <meshStandardMaterial color="#333333" metalness={0.5} roughness={0.5} transparent opacity={0.7} />
          </mesh>
        </group>
        
        {/* Right Speaker - Visible Box Speakers */}
        <group position={[0.7, -0.02, 0.55]}>
          {/* Speaker housing */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.25, 0.04, 0.2]} />
            <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Speaker cone 1 */}
          <mesh position={[-0.05, 0.025, 0]}>
            <cylinderGeometry args={[0.04, 0.05, 0.02, 16]} />
            <primitive object={createSpeakerMaterial('#00ff88')} />
          </mesh>
          {/* Speaker cone 2 */}
          <mesh position={[0.05, 0.025, 0]}>
            <cylinderGeometry args={[0.04, 0.05, 0.02, 16]} />
            <primitive object={createSpeakerMaterial('#00ff88')} />
          </mesh>
          {/* Speaker mesh */}
          <mesh position={[0, 0.03, 0]}>
            <boxGeometry args={[0.2, 0.005, 0.15]} />
            <meshStandardMaterial color="#333333" metalness={0.5} roughness={0.5} transparent opacity={0.7} />
          </mesh>
        </group>
        
        {/* CPU 1 - Left side with RGB glow */}
        <group position={[-0.35, -0.025, -0.4]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.2, 0.015, 0.2]} />
            <primitive object={cpuMaterial} />
          </mesh>
          {/* CPU heat spreader */}
          <mesh position={[0, 0.008, 0]}>
            <boxGeometry args={[0.15, 0.005, 0.15]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.05} />
          </mesh>
          {/* CPU RGB logo */}
          <mesh position={[0, 0.012, 0]}>
            <boxGeometry args={[0.08, 0.002, 0.08]} />
            <primitive object={createCPUMaterial('#ff0066')} />
          </mesh>
          {/* CPU pins */}
          {[[-0.06, -0.06], [0.06, -0.06], [-0.06, 0.06], [0.06, 0.06]].map((pos, i) => (
            <mesh key={i} position={[pos[0], -0.005, pos[1]]}>
              <boxGeometry args={[0.02, 0.01, 0.02]} />
              <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.3} />
            </mesh>
          ))}
        </group>
        
        {/* CPU 2 - Right side with RGB glow */}
        <group position={[0.35, -0.025, -0.4]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.2, 0.015, 0.2]} />
            <primitive object={cpuMaterial} />
          </mesh>
          {/* CPU heat spreader */}
          <mesh position={[0, 0.008, 0]}>
            <boxGeometry args={[0.15, 0.005, 0.15]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.05} />
          </mesh>
          {/* CPU RGB logo */}
          <mesh position={[0, 0.012, 0]}>
            <boxGeometry args={[0.08, 0.002, 0.08]} />
            <primitive object={createCPUMaterial('#00ff88')} />
          </mesh>
          {/* CPU pins */}
          {[[-0.06, -0.06], [0.06, -0.06], [-0.06, 0.06], [0.06, 0.06]].map((pos, i) => (
            <mesh key={i} position={[pos[0], -0.005, pos[1]]}>
              <boxGeometry args={[0.02, 0.01, 0.02]} />
              <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.3} />
            </mesh>
          ))}
        </group>
        
        {/* GPU - Center bottom with RGB */}
        <group position={[0, -0.025, -0.15]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.4, 0.012, 0.25]} />
            <primitive object={cpuMaterial} />
          </mesh>
          {/* GPU heat sink */}
          <mesh position={[0, 0.008, 0]}>
            <boxGeometry args={[0.35, 0.004, 0.2]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.95} roughness={0.05} />
          </mesh>
          {/* GPU RGB logo */}
          <mesh position={[0, 0.011, 0]}>
            <boxGeometry args={[0.12, 0.002, 0.06]} />
            <primitive object={createCPUMaterial('#6600ff')} />
          </mesh>
        </group>
        
        {/* Trackpad */}
        <mesh position={[0, -0.015, 0.55]}>
          <boxGeometry args={[0.4, 0.01, 0.25]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.6} />
        </mesh>
        
        {/* RGB Accent Line */}
        <mesh position={[0, -0.055, 0.1]}>
          <boxGeometry args={[1.8, 0.015, 0.03]} />
          <primitive object={glowMaterial} />
        </mesh>
        
        {/* Side RGB Strips */}
        <mesh position={[-0.95, -0.03, 0.1]}>
          <boxGeometry args={[0.02, 0.03, 0.8]} />
          <meshStandardMaterial color="#ff0066" emissive="#ff0066" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0.95, -0.03, 0.1]}>
          <boxGeometry args={[0.02, 0.03, 0.8]} />
          <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Glow effect underneath */}
      <mesh position={[0, -0.2, 0.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#00d4ff" opacity={0.08} transparent />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00d4ff" />
      <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#ff0066" />
      <pointLight position={[0, 2, 0]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[5, 1, 2]} intensity={0.3} color="#ff0066" />
      <pointLight position={[-5, 1, 2]} intensity={0.3} color="#00ff88" />

      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Laptop />
      </Float>

      <Sparkles 
        count={50} 
        scale={6} 
        size={2} 
        speed={0.4} 
        color="#00d4ff" 
        opacity={0.3}
      />

      <Environment preset="night" />
    </>
  );
}

export default function LaptopScene() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}