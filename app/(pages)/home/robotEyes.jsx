'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function RobotEye() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef(null);

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

  // Eye movement range (adjust px range here)
  const translateX = useTransform(mouseX, [-100, 100], [-3, 3]);
  const translateY = useTransform(mouseY, [-100, 100], [-3, 3]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] flex flex-col justify-center items-center bg-white overflow-hidden"
    >
      {/* Eye image that moves slightly */}
      <motion.img
        src="/images/eye.png" // Path to eyes only
        alt="Robot Eyes"
        className="w-[510px] h-auto absolute top-[-30px] right-[400px] "
        style={{
          x: translateX,
          y: translateY,
        }}
      />

      {/* Static robot body behind the eyes */}
      <img
        className="w-[400px] h-[500px] z-[10]"
        src="/images/body2.png" // Full robot body without moving parts
        alt="Robot Body"
      />
    </div>
  );
}
