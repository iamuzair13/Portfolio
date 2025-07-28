'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function RobotFace() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef(null);

  // Handle mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Rotation mappings (adjust limits to control sensitivity)
  const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] flex flex-col justify-center items-center bg-white"
    >
      <motion.img
        src="/images/robot/0.png" // your image path
        alt="Robot"
        className="w-[150px] h-auto absolute top-[30] right-[650]"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 800,
        }}
      />
      {/* <img className=' w-[400px] h-[500px]' src="/images/ij.jpg " alt="" /> */}
      
    </div>



  );
}
