import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

export default function AnimatedRobo() {
  const containerRef = useRef(null);

  const [currentImage, setCurrentImage] = useState("/images/robot/1.png");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

    if (e.clientX < centerX - 175) {
        setCurrentImage("/images/robot/3.png"); // Very far left
      } else if (e.clientX < centerX - 125) {
        setCurrentImage("/images/robot/4.png"); // Far left
      } else if (e.clientX < centerX - 75) {
        setCurrentImage("/images/robot/5.png"); // Medium left
      } else if (e.clientX < centerX - 25) {
        setCurrentImage("/images/robot/6.png"); // Slightly left of center
      } else if (e.clientX < centerX + 25) {
        setCurrentImage("/images/robot/6.png"); // Centered
      } else if (e.clientX < centerX + 75) {
        setCurrentImage("/images/robot/66.png"); // Slightly right of center
      } else if (e.clientX < centerX + 125) {
        setCurrentImage("/images/robot/55.png"); // Medium right
      } else if (e.clientX < centerX + 175) {
        setCurrentImage("/images/robot/44.png"); // Far right
      } else if (e.clientX > centerX + 175){
        setCurrentImage("/images/robot/33.png"); // Very far right
      }

      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);

  console.log(rotateX);
  console.log(rotateY);

  return (
    <Fragment>
      <div
        className="container relative flex flex-col items-center justify-center w-[350px] border"
        ref={containerRef}
      >
        <motion.img
          src={currentImage}
          className="w-[300px] h-auto absolute object-cover top-[-110] right-[15]"
          style={{
            rotateX,
            rotateY,
            transformPerspective: 800,
          }}
        />

        <Image src={"/images/robot/body.png"} width={400} height={400} alt="Robot" />
      </div>
    </Fragment>
  );
}
