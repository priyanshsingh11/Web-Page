import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, OrbitControls } from '@react-three/drei';
import ParticleField from './ParticleField';
import FloatingMesh from './FloatingMesh';

interface HeroSceneProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

const HeroScene = ({ mouse }: HeroSceneProps) => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 5, 20]} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00D9FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8B5CF6" />
        
        <Suspense fallback={null}>
          <ParticleField count={1500} mouse={mouse} />
          <FloatingMesh position={[-4, 2, -3]} scale={1.5} color="#00D9FF" />
          <FloatingMesh position={[4, -1, -2]} scale={1.2} color="#8B5CF6" />
          <FloatingMesh position={[0, -3, -4]} scale={2} color="#00D9FF" />
        </Suspense>
        
        <Preload all />
      </Canvas>
    </div>
  );
};

export default HeroScene;
