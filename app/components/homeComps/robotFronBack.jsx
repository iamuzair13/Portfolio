"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

export default function RobotFace() {
  const containerRef = useRef(null);

  // Mouse motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const translateX = useMotionValue(0);
  const translateY = useMotionValue(0);

  // Parallax scroll
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -300]); // Adjust speed

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

  // Rotations and translations based on mouse
  const rotateXNormal = useTransform(mouseY, [-1000, 1000], [60, -60]);
  const rotateYNormal = useTransform(mouseX, [-1000, 1000], [-90, 90]);
  const xTranslateNormal = useTransform(translateX, [-1000, 1000], [-15, 15]);
  const backxTranslateNormal = useTransform(translateX, [-1000, 1000], [40, -40]);
  const yTranslateInverted = useTransform(translateY, [-1000, 1000], [-10, 10]);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full flex flex-col justify-center items-center bg-transparent overflow-hidden"
      style={{ y: parallaxY }} // ✅ Scroll parallax applied
      // animate={{
      //   y: [0, -20, 0], // Floating animation
      // }}
      // transition={{
      //   duration: 4,
      //   repeat: Infinity,
      //   ease: "easeInOut",
      // }}
    >
      {/* Face wrapper */}
      <div className="flex justify-end items-start">
        {/* Robot Face */}
        <motion.img
          src="/images/robot/uzair-robotry5.png"
          alt="Robot Face"
          className="absolute w-53 mt-[-5] mr-[-103] brightness-70 z-[5] max-lg:w-20"
          style={{
            rotateX: rotateXNormal,
            rotateY: rotateYNormal,
            transformPerspective: 800,
          }}
        />

        {/* Robot Eyes */}
        <motion.img
          src="/images/robot/uzair-robot77.png"
          alt="Robot Eyes"
          className="absolute w-53 mt-[-30] mr-[-103] brightness-70 z-[10] max-lg:w-[20px]"
          style={{
            rotateX: rotateXNormal,
            rotateY: rotateYNormal,
            x: xTranslateNormal,
            y: yTranslateInverted,
            transformPerspective: 800,
          }}
        />

        <motion.img
          src="/images/robot/uzair-robotiiiiiiiiiiii.png"
          alt="Robot Shadow"
          className="absolute w-53 h-30 mt-[-9] mr-[-109] brightness-[0.2] max-lg:w-[20px]"
          style={{
            rotateZ: 180,
            rotateX: rotateXNormal,
            rotateY: rotateYNormal,
            x: backxTranslateNormal,
            y: yTranslateInverted,
            transformPerspective: 800,
          }}
        />
      </div>

      {/* Robot Body */}
      <Image
        alt="robot"
        src={"/images/robot/robot--3.png"}
        width={400}
        height={400}
        className="w-[500px]  brightness-80 transform scale-x-[-1]"
      />
    </motion.div>
  );
}
