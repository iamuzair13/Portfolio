"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function RobotFace() {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const translateX = useMotionValue(0);
  const translateY = useMotionValue(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      mouseX.set(x);
      mouseY.set(y);
      translateX.set(x);
      translateY.set(y);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const rotateXNormal = useTransform(mouseY, [-1000, 1000], [30, -30]);
  const rotateYNormal = useTransform(mouseX, [-1000, 1000], [-30, 30]);
  const xTranslateNormal = useTransform(translateX, [-1000, 1000], [-15, 15]);
  const yTranslateNormal = useTransform(translateY, [-1000, 1000], [5, -5]);

  const rotateXInverted = useTransform(mouseY, [-1000, 1000], [-15, 15]);
  const rotateYInverted = useTransform(mouseX, [-1000, 1000], [40, -40]);
  const xTranslateInverted = useTransform(translateX, [-1000, 1000], [7, -7]);
  const yTranslateInverted = useTransform(translateY, [-1000, 1000], [-10, 10]);

  return (
    <div
      ref={containerRef} 
      className="relative w-[100vw]     flex flex-col justify-center items-center bg-transparent overflow-hidden"
    >
      {/* Face wrapper to attach eyes */}
      <div className=" flex justify-end  items-start ">
        {/* Robot Face */}
        <motion.img
          src="/images/robot/43.png"
          alt="Robot Face"
          className="absolute w-60 mt-10 mr-[-42]  max-lg:w-20 xl:w-60 h-auto"
          style={{
            rotateX: rotateXNormal,
            rotateY: rotateYNormal,
            transformPerspective: 800,
          }}
        />

        {/* Robot Eyes (overlay on face) */}
        <motion.img
          src="/images/robot/34.png"
          alt="Robot Eyes"
          className="absolute w-60 mt-10 mr-[-42]  max-lg:w-20 xl:w-60    "
          style={{
            rotateX: rotateXNormal,
            rotateY: rotateYNormal,
            x: xTranslateNormal,
            y: yTranslateInverted,
            transformPerspective: 800,
          }}
        />
      </div>
      <img
        src="/images/robot/Adobe-Express---file-blsck.png"
        alt="Robot Body"
        className="w-[600px] md:w-[400px] lg:w-[500px]  xl:w-[600px] object-cover"
      />
    </div>
  );
}
