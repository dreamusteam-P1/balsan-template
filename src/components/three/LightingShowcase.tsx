"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

import { useScroll } from "framer-motion";

function ExplodedModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scrollYProgress } = useScroll();
  
  useFrame(() => {
    if (!groupRef.current) return;
    const progress = scrollYProgress.get();
    
    const parts = groupRef.current.children;
    if (parts.length >= 4) {
      // 1. Heat Sink & Fins
      parts[0].position.y = -1;
      
      // 2. LED Module Grid
      parts[1].position.y = -0.5 + progress * 2.5;
      if ((parts[1] as any).children[0]?.material) {
        (parts[1] as any).children[0].material.emissiveIntensity = progress > 0.5 ? 8 : 0.5;
      }
      
      // 3. Optical Lens
      parts[2].position.y = 0 + progress * 5;
      
      // 4. Top Cover
      parts[3].position.y = 0.5 + progress * 7.5;
    }
    
    // 스크롤에 따른 미세한 회전
    groupRef.current.rotation.y = progress * Math.PI;
  });

  return (
    <group ref={groupRef}>
      {/* 1. Heat Sink (Base + Fins) */}
      <group>
        <mesh>
          <cylinderGeometry args={[1.2, 1.2, 0.4, 32]} />
          <meshStandardMaterial color="#222" roughness={0.3} metalness={0.9} />
        </mesh>
        {[...Array(16)].map((_, i) => (
          <mesh key={i} rotation={[0, (i * Math.PI) / 8, 0]} position={[0, 0, 0]}>
            <boxGeometry args={[0.05, 0.4, 1.3]} />
            <meshStandardMaterial color="#111" roughness={0.2} metalness={0.8} />
          </mesh>
        ))}
      </group>

      {/* 2. LED Module (Grid of Chips) */}
      <group>
        <mesh>
          <cylinderGeometry args={[1, 1, 0.05, 32]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
        {[...Array(25)].map((_, i) => (
          <mesh key={i} position={[(i % 5 - 2) * 0.25, 0.03, (Math.floor(i / 5) - 2) * 0.25]}>
            <boxGeometry args={[0.1, 0.02, 0.1]} />
            <meshStandardMaterial color="#ffcc00" emissive="#ffcc00" />
          </mesh>
        ))}
      </group>

      {/* 3. Optical Lens */}
      <mesh>
        <cylinderGeometry args={[1.1, 1.1, 0.15, 32]} />
        <meshStandardMaterial transparent opacity={0.5} roughness={0.05} metalness={0.1} color="#eef" />
      </mesh>

      {/* 4. Top Cover / Bezel */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#333" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function LightingShowcase() {
  return (
    <div className="w-full h-full">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={50} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
          
          <ExplodedModel />
          
          <gridHelper args={[20, 20, 0x444444, 0x222222]} position={[0, -2, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
