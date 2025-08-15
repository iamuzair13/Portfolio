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
  const rotateXNormal = useTransform(mouseY, [-2000, 2000], [60, -60]);
  const rotateYNormal = useTransform(mouseX, [-2000, 2000], [-40, 40]);
  const xTranslateNormal = useTransform(translateX, [-2000, 2000], [-15, 15]);
  const backxTranslateNormal = useTransform(
    translateX,
    [-2000, 2000],
    [40, -40]
  );
  const yTranslateInverted = useTransform(translateY, [-2000, 2000], [-10, 10]);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full max-lg:w-[200px] max-lg:h-[420px] flex flex-col  justify-center items-center bg-transparent overflow-hidden"
      // style={{ y: parallaxY }} // ✅ Scroll parallax applied
      animate={{
        y: [0, -20, 0], // Floating animation
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Face wrapper */}
      <div className="flex justify-end max-lg:justify-center items-start  max-lg:items-center pt-10">
        {/* Robot Face */}
        <motion.img
          initial={{ translateY: 300 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1, ease: "easeIn",  }}
          src="/images/robot/uzair-robotry5.png"
          alt="Robot Face"
          className="absolute max-lg:-mt-[-60px] xl:w-53 xl:mt-[-30] lg:mt-[-25] xl:mr-[-103] lg:mr-[-78] brightness-80 z-[-5] lg:w-40 max-lg:w-20"
          style={{
            rotateX: rotateXNormal,
            rotateY: rotateYNormal,
            transformPerspective: 800,
          }}
        />

        {/* Robot Eyes */}
        <motion.img
          initial={{ translateY: 300 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1, ease: "easeIn",  }}
          src="/images/robot/uzair-robot77.png"
          alt="Robot Eyes"
          className="absolute xl:w-53 max-lg:-mt-[-45px] xl:mt-[-55] lg:mt-[-45] xl:mr-[-103] lg:mr-[-78] brightness-80 z-[10] lg:w-40  max-lg:w-20"
          style={{
            rotateX: rotateXNormal,
            rotateY: rotateYNormal,
            x: xTranslateNormal,
            y: yTranslateInverted,
            transformPerspective: 800,
          }}
        />

        <motion.img
          initial={{ translateY: 300 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1, ease: "easeIn" ,}}
          src="/images/robot/uzair-robotiiiiiiiiiiii.png"
          alt="Robot Shadow"
          className="absolute max-xl:hidden xl:w-53 lg:w-40 lg:mt-[-46] lg:mr-[-85] xl:h-30 xl:mt-[-35] xl:mr-[-109] brightness-[0.3] lg:w-[20px] z-[-10]"
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
      <div className="relative lg:pb-40 flex flex-col justify-between  items-center">
        <motion.div
          initial={{ translateY: 300 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1, ease: "easeIn" , }}
        >
          <Image
            alt="robot"
            src={"/images/robot/ChatGPT Image Aug 1, 2025, 12_32_24 PM.png"}
            width={400}
            height={400}
            className="xl:w-[500px] lg:w-[350px] max-lg:w-[250px]  brightness-80 transform  scale-x-[-1]"
          />
        </motion.div>
        <motion.div
          className="absolute lg:bottom-[-40] max-lg:bottom-[-40]"
          animate={{
            translateY: [-20, 0, -20],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <motion.div
            animate={{
              opacity: [1, 0.7, 0.5, 0.7, 1],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className=" absolute rotate-x-80 max-lg:rotate-x-80 border-8 max-lg:border-2 shadow-[inset_0_0_80px_30px_#2563eb] max-lg:shadow-[inset_0_0_30px_4px_#2563eb] border-blue-800 max-lg:w-[100px] max-lg:h-[50px] xl:w-[300px] lg:w-[200px]  lg:h-[200px] xl:h-[300px] rounded-full"
          ></motion.div>
          <motion.div
            animate={{
              opacity: [1, 0.7, 0.5, 0.7, 1],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className=" border-8 max-lg:border-2 shadow-[0_0_60px_30px_#2563eb] border-blue-800 xl:w-[300px] lg:w-[200px] lg:h-[200px] max-lg:w-[100px] max-lg:h-[50px] max-lg:shadow-[0_0_20px_4px_#2563eb] rotate-x-80 max-lg:rotate-x-80 xl:h-[300px]  rounded-full"
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
