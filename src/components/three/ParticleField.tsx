'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Animated particle field for hero background
 * Creates a floating, dynamic particle effect
 */

interface ParticlesProps {
  count?: number;
}

function Particles({ count = 3000 }: ParticlesProps) {
  const ref = useRef<THREE.Points>(null);

  // Generate random particle positions
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Brand colors for particles
    const primaryColor = new THREE.Color('#4361EE');
    const secondaryColor = new THREE.Color('#7209B7');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Spread particles in a sphere
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      // Mix between primary and secondary colors
      const mixFactor = Math.random();
      const color = primaryColor.clone().lerp(secondaryColor, mixFactor);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return { positions, colors };
  }, [count]);

  // Animate rotation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <Points ref={ref} positions={particles.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/**
 * Glowing orb component
 */
function GlowingOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshBasicMaterial
        color="#4361EE"
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

/**
 * Main 3D Scene component
 */
export function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={2000} />
        <GlowingOrb />
      </Canvas>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark pointer-events-none" />
    </div>
  );
}
