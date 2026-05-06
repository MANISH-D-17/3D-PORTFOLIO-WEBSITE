import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const VoidShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() },
    uScroll: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uScroll;
    varying vec2 vUv;

    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution.xy;
      vec2 center = vec2(0.5, 0.5);
      float dist = distance(uv, center);
      
      // Pulsing void rings
      float ring = sin(dist * 20.0 - uTime * 0.8 + uScroll * 6.28) * 0.5 + 0.5;
      ring = pow(ring, 8.0); // sharpen rings
      
      // Cosmic pink tint
      vec3 voidColor = vec3(0.047, 0.047, 0.051); // #0C0C0D
      vec3 glowColor = vec3(0.722, 0.020, 0.667); // #B805AA
      
      vec3 color = mix(voidColor, glowColor, ring * 0.15);
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

const ShaderPlane = () => {
  const mesh = useRef();
  const { size } = useThree();

  useFrame((state) => {
    mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
    mesh.current.material.uniforms.uScroll.value = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    mesh.current.material.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial 
        args={[VoidShaderMaterial]} 
        transparent 
        opacity={0.6}
        depthWrite={false}
      />
    </mesh>
  );
};

const VoidShader = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ShaderPlane />
      </Canvas>
    </div>
  );
};

export default VoidShader;
