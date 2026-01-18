import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

interface SkillOrbProps {
  position: [number, number, number];
  skill: string;
  color: string;
  delay?: number;
}

const SkillOrb = ({ position, skill, color, delay = 0 }: SkillOrbProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    meshRef.current.rotation.y = time * 0.3 + delay;
    meshRef.current.rotation.x = Math.sin(time * 0.5 + delay) * 0.2;
    
    const scale = hovered ? 1.3 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={hovered ? 0.9 : 0.6}
            emissive={color}
            emissiveIntensity={hovered ? 0.5 : 0.2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <Text
          position={[0, -0.9, 0]}
          fontSize={0.15}
          color={hovered ? color : '#ffffff'}
          anchorX="center"
          anchorY="middle"
          font="/fonts/SpaceGrotesk-Medium.ttf"
        >
          {skill}
        </Text>
      </group>
    </Float>
  );
};

export default SkillOrb;
