import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

const MetallicObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const animationProgress = useRef(0);

  useFrame((state, delta) => {
    if (meshRef.current && materialRef.current) {
      animationProgress.current = THREE.MathUtils.lerp(
        animationProgress.current,
        hovered ? 1 : 0,
        0.1
      );

      meshRef.current.rotation.x += delta * 0.2 * animationProgress.current;
      meshRef.current.rotation.y += delta * 0.3 * animationProgress.current;

      materialRef.current.speed = animationProgress.current * 2;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={1.5}
    >
      {/* Sphere stretched slightly to look like a balloon */}
      <sphereGeometry args={[1.2, 64, 64]} />
      <MeshDistortMaterial
        ref={materialRef}
        color="#e0e0e0"
        metalness={0.9}
        roughness={0.1}
        distort={0.2}
        speed={0}
        reflectivity={1}
        clearcoat={1}
      />
    </mesh>
  );
};

const BlueAccent = ({ position, delay }: { position: [number, number, number], delay: number }) => {
  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
      <mesh position={position}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshBasicMaterial color="#0000FF" />
      </mesh>
    </Float>
  );
};

const ChromeBalloon = () => {
  return (
    <div className="w-full h-full cursor-pointer">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Center>
          <MetallicObject />
        </Center>
        
        {/* Blue Accents */}
        <BlueAccent position={[-2.5, 0.5, 1]} delay={0} />
        <BlueAccent position={[2, 1.5, 0]} delay={0.5} />
        <BlueAccent position={[2.5, 1.2, -1]} delay={0.2} />
        <BlueAccent position={[1.5, -1.5, 1]} delay={0.8} />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ChromeBalloon;
