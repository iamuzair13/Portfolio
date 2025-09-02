import { Fragment } from "react";
import { motion } from "framer-motion";
import Robot from "./TurnRobot";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Fragment>
      <div className="relative w-full  flex flex-col items-center max-lg:pt-24  lg:items-start md:px-4">
        <div className=" text-center md:text-left  absolute  w-full flex flex-col justify-center items-center ">
          <div className=" items-center flex flex-col justify-between ">
            <h1 className="text-white text-[70px] max-lg:text-[30px] font-[700]  tracking-wider drop-shadow-md">
              Start{" "}
              <span className="bg-gradient-to-b from-gray-200 via-gray-500 to-gray-200 bg-clip-text text-transparent">
                {" "}
                Building{" "}
              </span>{" "}
              Today
              <span className="text-blue-500"></span>
            </h1>
          </div>
        </div>

        <div className="relative flex mt-10 w-full flex-row justify-center  ">
          <div className="max-md:hidden w-[30%] max-md:p-0 max-md:pt-20 max-lg:w-full justify-between flex  max-lg:gap-2 max-lg:flex-row lg:felx-col max-lg:pt-20 max-lg:p-20 ">
            <motion.img
              initial={{ translateY: 0 }}
              animate={{ translateY: [-30, 0, -30] }}
              transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Android.png"
              alt="Android Service"
              className="absolute cursor-pointer w-[40px] h-[40px] max-lg:w-[30px] max-lg:h-[30px] lg:left-[230px] max-lg:left-[50px] max-lg:top-[120px] lg:top-[200px] object-cover rounded-none"
            />

            <motion.img
              initial={{ translateY: 0 }}
              animate={{ translateY: [30, 0, 30] }}
              transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/AWS.png"
              className="absolute  lg:left-[90]  lg:top-[150]  max-lg:w-[30px] max-md:h-[30px] max-lg:left-[10] max-lg:top-[170]   w-[40px] object-cover rounded-[15px] p-2 bg-white "
            />
            <motion.img
              initial={{ translateY: 100, rotateZ: 0 }}
              animate={{ translateY: [50, 0, 50], rotateZ: [0, 360] }}
              transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Next.js.svg "
              className="absolute  lg:left-[330]  lg:top-[140] max-lg:left-[80] max-lg:top-[170]    max-lg:w-[30px] max-md:h-[30px]   w-[40px] object-cover rounded-full  bg-gray-500 "
            />
            <motion.img
              initial={{ translateY: 0 }}
              animate={{
                translateY: [0, 50, 0],
              }}
              transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Node.js.png"
              className="absolute  lg:top-[300]  lg:left-[320] max-lg:left-[50] max-lg:top-[230]   max-lg:w-[30px] max-md:h-[30px]   w-[40px] object-cover rounded-none  "
            />
            <motion.img
              initial={{ translateY: 0 }}
              animate={{
                translateY: [50, 0, 50],
              }}
              transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Node.js.png"
              className="absolute  lg:top-[300]  lg:left-[150] max-lg:left-[50] max-lg:top-[230]   max-lg:w-[30px] max-md:h-[30px]   w-[40px] object-cover rounded-none  "
            />
          </div>
          <motion.div>
            <motion.div
              className="relative  w-[100vw]  h-[80vh] max-lg:w-[100%] z-[10] text-center mt-10 flex flex-col  "
              initial={{ translateY: 0 }}
              animate={{ translateY: [50, 0, 50] }}
              transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <Robot />
            </motion.div>
          </motion.div>

          <div className=" max-md:hidden w-[30%] max-lg:w-[80%] max-md:p-0  max-lg:w-full justify-between max-md:justify-evenly flex  max-lg:gap-2 max-lg:flex-row max-lg:flex-wrap lg:felx-col  max-lg:p-20 ">
            <motion.img
              initial={{ translateY: 50, rotateZ: 0 }}
              animate={{
                translateY: [0, 50, 0],
                rotateZ: [0, 360],
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="../images/ourServices/React.png"
              className="absolute  lg:top-[140] max-lg:right-[50] max-lg:top-[80]  max-lg:w-[30px] max-md:h-[30px]   lg:right-[120] w-[40px] object-cover rounded-none  "
            />

            <motion.img
              initial={{ translateY: 0 }}
              animate={{ translateY: [-70, 0, -70] }}
              transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/illustrator.png"
              className=" absolute  w-[40px]  lg:right-[380] max-lg:w-[30px] max-lg:right-[100] max-lg:top-[150] max-md:h-[30px]    lg:top-[200] object-cover rounded-full   "
            />
            <motion.img
              initial={{ translateY: 50 }}
              animate={{
                translateY: [60, 0, 60],
              }}
              transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Nodemon.png"
              className="absolute  lg:top-[260]   max-lg:w-[30px] max-md:h-[30px] max-lg:right-[60] max-lg:top-[180] lg:right-[120] w-[40px] object-cover rounded-none  "
            />

            <motion.img
              initial={{ translateY: 50 }}
              animate={{
                translateY: [0, 70, 0],
              }}
              transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Photoshop.png"
              className="absolute  lg:top-[200px]  max-lg:w-[30px] max-md:h-[30px] lg:right-[250px] w-[40px] object-cover max-lg:top-[150] rounded-full"
            />

            <motion.img
              initial={{ translateY: 0 }}
              animate={{
                translateY: [50, 0, 50],
              }}
              transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/PremierePro.png"
              className="absolute  lg:top-[280]  max-lg:right-[100] max-lg:top-[210]  max-lg:w-[30px] max-md:h-[30px] lg:right-[380] w-[40px]  object-cover rounded-[10px] "
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
