import { useRef, useMemo, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

const ParticleField = ({ count = 2000, mouse }: ParticleFieldProps) => {
  const mesh = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const colorCyan = new THREE.Color('#00D9FF');
    const colorViolet = new THREE.Color('#8B5CF6');
    const colorWhite = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Distribute particles in a 3D space
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 15;
      positions[i3 + 2] = (Math.random() - 0.5) * 10 - 2;

      // Mix colors
      const mixRatio = Math.random();
      const color = mixRatio < 0.4 
        ? colorCyan.clone() 
        : mixRatio < 0.7 
          ? colorViolet.clone() 
          : colorWhite.clone().multiplyScalar(0.5);
      
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 1;
    }

    return [positions, colors, sizes];
  }, [count]);

  const originalPositions = useMemo(() => positions.slice(), [positions]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    const geometry = mesh.current.geometry;
    const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
    const array = positionAttr.array as Float32Array;

    const mouseX = (mouse.current.x * viewport.width) / 2;
    const mouseY = (mouse.current.y * viewport.height) / 2;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Base wave motion
      const originalX = originalPositions[i3];
      const originalY = originalPositions[i3 + 1];
      const originalZ = originalPositions[i3 + 2];

      // Smooth wave animation
      array[i3] = originalX + Math.sin(time * 0.3 + originalY * 0.5) * 0.3;
      array[i3 + 1] = originalY + Math.cos(time * 0.4 + originalX * 0.5) * 0.2;
      array[i3 + 2] = originalZ + Math.sin(time * 0.2 + originalX * 0.3) * 0.5;

      // Mouse interaction - repel particles
      const dx = array[i3] - mouseX;
      const dy = array[i3 + 1] - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 3;

      if (dist < maxDist) {
        const force = (1 - dist / maxDist) * 0.8;
        array[i3] += (dx / dist) * force;
        array[i3 + 1] += (dy / dist) * force;
      }
    }

    positionAttr.needsUpdate = true;
    mesh.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default ParticleField;
