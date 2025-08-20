"use client";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// 🔹 Robot Model Component
function RobotModel({ mouse }) {
  // Refs for each robot part
  const headRef = useRef();
  const upperRef = useRef();
  const lowerRef = useRef();

  // Load GLTF files for each part
  // ⚠️ Make sure paths are correct (relative to `/public` folder in Next.js)
  const { scene: head } = useGLTF(
    "images/3D-Model/Head/source/Hy3D_textured_00063_.glb"
  );
  const { scene: upper } = useGLTF(
    "images/3D-Model/Upper-body/source/Hy3D_textured_00074_.glb"
  );
  const { scene: lower } = useGLTF(
    "images/3D-Model/lower-body/source/Hy3D_textured_00076_.glb"
  );

  // 🔹 Animation loop (runs every frame)
  useFrame(() => {
    if (headRef.current) {
      // Rotate head with mouse movement
      const baseY = Math.PI / 2; // try 0, Math.PI/2, or -Math.PI/2
      const baseX = 0;
      headRef.current.rotation.y = baseY + mouse.x * 0.5; // Left ↔ Right (yaw)
      headRef.current.rotation.x = baseX + mouse.y * 0.2; // Up ↔ Down (pitch)
    }

    // 👉 Example: slight torso rotation
    if (upperRef.current) {
      upperRef.current.rotation.y = mouse.x * 0.2; // shoulders follow mouse a bit
    }
  });

  return (
    <group>
      {/* Lower Body (base) */}
      {/* 🔧 Adjust scale & position to fit correctly */}
      <primitive
        object={lower}
        ref={lowerRef}
        scale={1.5}
        position={[0, -1, 0]}
      />

      {/* Upper Body */}
      {/* 🔧 Position it above lower body */}
      <primitive
        object={upper}
        ref={upperRef}
        scale={1.5}
        position={[0, 1, 0]}
      />

      {/* Head */}
      {/* 🔧 Position it above upper body */}
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

export default function Robot() {
  // State to store mouse position (-1 to 1)
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 🔹 Mouse tracking
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position from -1 to 1
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 2, 6], fov: 50 }}
      style={{ touchAction: "none" }} // 👈 disable pointer blocking
      onCreated={({ gl }) => {
        gl.domElement.style.touchAction = "auto"; // 👈 allow scrolling
      }}
    >
      <ambientLight intensity={0.7} /> {/* Soft global light */}
      <directionalLight position={[2, 3, 5]} intensity={8} />{" "}
      {/* Main light source */}
      {/* Robot */}
      <RobotModel mouse={mouse} />
      {/* 🔹 Controls for debugging (disable zoom for fixed distance) */}
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
    </Canvas>
  );
}
