"use client";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// 🔹 Robot Model Component
function RobotModel({ mouse }) {
  const headRef = useRef();
  const upperRef = useRef();
  const lowerRef = useRef();

  // Load GLTF files
  const { scene: head } = useGLTF(
    "images/3D-Model/Head/source/compressed.glb"
  );
  const { scene: upper } = useGLTF(
    "images/3D-Model/Upper-body/source/Hy3D_textured_00074_.glb"
  );
  const { scene: lower } = useGLTF(
    "images/3D-Model/lower-body/source/Hy3D_textured_00076_.glb"
  );

  // 🔹 Apply mouse values every frame
  useFrame(() => {
    if (headRef.current) {
      const baseY = Math.PI / 2;
      const baseX = 0;
      headRef.current.rotation.y = baseY + mouse.x * 0.5;
      headRef.current.rotation.x = baseX + mouse.y * 0.2;
    }

    if (upperRef.current) {
      upperRef.current.rotation.y = mouse.x * 0.2;
    }
  });

  return (
    <group>
      <primitive object={lower} ref={lowerRef} scale={1.5} position={[0, -1, 0]} />
      <primitive object={upper} ref={upperRef} scale={1.5} position={[0, 1, 0]} />
      <primitive
        object={head}
        ref={headRef}
        scale={0.5}
        position={[-0.05, 2.2, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}

// 🔹 Smoother Component (runs inside Canvas)
function MouseSmoother({ targetMouse, setMouse }) {
  useFrame(() => {
    setMouse((prev) => {
      const lerp = (a, b, t) => a + (b - a) * t;
      return {
        x: lerp(prev.x, targetMouse.current.x, 0.1), // smoothing factor
        y: lerp(prev.y, targetMouse.current.y, 0.1),
      };
    });
  });
  return null;
}

export default function Robot() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 }); // smoothed value
  const targetMouse = useRef({ x: 0, y: 0 }); // raw input

  useEffect(() => {
    // 🔹 Desktop Mouse Control
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      targetMouse.current = { x, y };
    };

    // 🔹 Mobile Touch Control
    let startX = 0;
    let startY = 0;
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        const dx = e.touches[0].clientX - startX;
        const dy = e.touches[0].clientY - startY;

        const x = (dx / window.innerWidth) * 2;
        const y = (dy / window.innerHeight) * 2;

        targetMouse.current = { x, y };
      }
    };

    const handleTouchEnd = () => {
      targetMouse.current = { x: 0, y: 0 }; // ease back to center
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 2, 6], fov: 50 }}
      style={{ touchAction: "pan-y" }} // allows vertical scrolling
      onCreated={({ gl }) => {
        gl.domElement.style.touchAction = "pan-y";
      }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 3, 5]} intensity={8} />

      {/* 🔹 Run smoother inside Canvas */}
      <MouseSmoother targetMouse={targetMouse} setMouse={setMouse} />

      <RobotModel mouse={mouse} />
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
    </Canvas>
  );
}
