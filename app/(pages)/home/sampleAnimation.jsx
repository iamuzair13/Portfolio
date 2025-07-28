"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function SampleAnimation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Translate mappings (adjust ranges for effect intensity)
  const translateX = useTransform(mouseX, [-100, 100], [-20, 20]);
  const translateY = useTransform(mouseY, [-100, 100], [-20, 20]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] flex flex-col justify-center items-center bg-white"
    >
      <motion.img
        src="/images/robot/0.png"
        alt="Robot"
        className="w-[150px] h-auto absolute top-[30px] right-[650px]"
        style={{
          x: translateX,
          y: translateY,
        }}
      />
    </div>
  );
}
