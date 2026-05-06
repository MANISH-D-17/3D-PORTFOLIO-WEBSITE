import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Trophy = ({ type }) => {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [currentScale, setCurrentScale] = useState(1);

  useFrame((state, delta) => {
    // Rotation logic
    const rotationSpeed = hovered ? 3 : 1;
    mesh.current.rotation.y += delta * rotationSpeed;

    // Scale animation logic (simple lerp)
    const targetScale = hovered ? 1.15 : 1;
    const lerpSpeed = 0.1;
    const newScale = currentScale + (targetScale - currentScale) * lerpSpeed;
    setCurrentScale(newScale);
    mesh.current.scale.set(newScale, newScale, newScale);
  });

  return (
    <group
      ref={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {type === 'nvidia' ? (
        <>
          <mesh>
            <torusGeometry args={[0.6, 0.15, 16, 100]} />
            <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, -0.6, 0]}>
            <coneGeometry args={[0.4, 0.8, 32]} />
            <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
          </mesh>
        </>
      ) : (
        <mesh>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#B805AA" metalness={0.9} roughness={0.1} transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  );
};

const TrophyModel = ({ type }) => {
  return (
    <div className="w-full h-[300px] cursor-pointer">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#FFACEB" intensity={1.5} />
        <Trophy type={type} />
      </Canvas>
    </div>
  );
};

export default TrophyModel;
