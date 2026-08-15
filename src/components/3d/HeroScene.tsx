'use client';
import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const count = viewport.width < 5 ? 400 : 800; // Even fewer for bubble look

  const [positions, mathColors] = useMemo(() => {
    const p = new Float32Array(count * 3);
    const c = new Float32Array(count * 3);
    
    // Playful Palette
    const colors = [
      new THREE.Color('#FF5A36'), // Coral
      new THREE.Color('#00D4B2'), // Mint
      new THREE.Color('#FFC800'), // Yellow
      new THREE.Color('#A073FF'), // Lavender
    ];

    for (let i = 0; i < count; i++) {
      const r = 3.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);

      const color = colors[Math.floor(Math.random() * colors.length)];
      c[i * 3] = color.r;
      c[i * 3 + 1] = color.g;
      c[i * 3 + 2] = color.b;
    }
    return [p, c];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (state.pointer.y * Math.PI) / 8;
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -targetY, 0.05);
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        targetX + state.clock.elapsedTime * 0.1, // slightly faster
        0.05
      );
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={mathColors}>
      {/* Changed from additive glow to solid playful dots */}
      <PointMaterial
        transparent
        vertexColors
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
};

export const HeroScene = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-multiply">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ParticleField />
      </Canvas>
    </div>
  );
};
