import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Fragment } from "react";
import RobotFaceBack from "../../components/homeComps/robotFronBack";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <Fragment>
      <div className="relative w-full  flex flex-col items-center lg:items-start md:px-4">
        <div className="text-center md:text-left max-w-xl">
          <motion.h1
            initial={{ opacity: 0, translateY: -30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="text-white text-3xl md:text-5xl font-royal tracking-wider drop-shadow-md"
          >
            Programmers <span className="text-blue-500">Squad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, translateY: -70 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="text-white text-lg md:text-2xl mt-4 font-royal italic tracking-wide"
          >
            Your <span className="text-blue-500 font-semibold">AI-Driven</span>{" "}
            Digital Partner
          </motion.p>
        </div>

        <div className="relative flex  w-full flex-row">
          <div className="w-[30%] max-md:p-0 max-md:pt-20 max-lg:w-full justify-between flex  max-lg:gap-2 max-lg:flex-row lg:felx-col max-lg:pt-20 max-lg:p-20 ">
            <motion.img
              initial={{ translateY: 0 }}
              animate={{ translateY: [-30, 0, -30] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Android.png"
              className=" absolute  w-[60px] max-lg:w-[30px] max-md:h-[30px]  lg:left-[230] max-lg:left-[50] max-lg:top-[120] lg:top-[200] object-cover rounded-none  "
            />

            <motion.img
              initial={{ translateY: 0 }}
              animate={{ translateY: [30, 0, 30] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/AWS.png"
              className="absolute  lg:left-[70]  lg:top-[300]  max-lg:w-[30px] max-md:h-[30px] max-lg:left-[10] max-lg:top-[170]   w-[60px] object-cover rounded-[15px] p-2 bg-white "
            />
            <motion.img
              initial={{ translateY: 100, rotateZ: 0 }}
              animate={{ translateY: [50, 0, 50], rotateZ: [0, 360] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Next.js.svg "
              className="absolute  lg:left-[330]  lg:top-[300] max-lg:left-[80] max-lg:top-[170]    max-lg:w-[30px] max-md:h-[30px]   w-[60px] object-cover rounded-full  bg-gray-500 "
            />
            <motion.img
              initial={{ translateY: 0 }}
              animate={{
                translateY: [0, 50, 0],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Node.js.png"
              className="absolute  lg:top-[400]  lg:left-[220] max-lg:left-[50] max-lg:top-[230]   max-lg:w-[30px] max-md:h-[30px]   w-[60px] object-cover rounded-none  "
            />
          </div>
          <div className="relative w-[40%] max-lg:w-[100%] z-[10] text-center  flex flex-row justify-center items-center ">
            <RobotFaceBack />
          </div>

          <div className="w-[30%] max-lg:w-[80%] max-md:p-0 max-md:pt-20 max-lg:w-full justify-between max-md:justify-evenly flex  max-lg:gap-2 max-lg:flex-row max-lg:flex-wrap lg:felx-col max-lg:pt-20 max-lg:p-20 ">
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
              className="absolute  lg:top-[180] max-lg:right-[50] max-lg:top-[80]  max-lg:w-[30px] max-md:h-[30px]   lg:right-[120] w-[60px] object-cover rounded-none  "
            />

            <motion.img
              initial={{ translateY: 0 }}
              animate={{ translateY: [-70, 0, -70] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/illustrator.png"
              className=" absolute  w-[60px]  lg:right-[380] max-lg:w-[30px] max-lg:right-[100] max-lg:top-[150] max-md:h-[30px]    lg:top-[300] object-cover rounded-full   "
            />
            <motion.img
              initial={{ translateY: 50 }}
              animate={{
                translateY: [60, 0, 60],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Nodemon.png"
              className="absolute  lg:top-[360]   max-lg:w-[30px] max-md:h-[30px] max-lg:right-[60] max-lg:top-[180] lg:right-[120] w-[60px] object-cover rounded-none  "
            />

            <motion.img
              initial={{ translateY: 50 }}
              animate={{
                translateY: [0, 70, 0],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Photoshop.png"
              className="absolute  lg:top-[400px]  max-lg:w-[30px] max-md:h-[30px] lg:right-[250px] w-[60px] object-cover max-lg:top-[150] rounded-full"
            />

            <motion.img
              initial={{ translateY: 50 }}
              animate={{
                translateY: [90, 0, 90],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/PremierePro.png"
              className="absolute  lg:top-[150]  max-lg:right-[100] max-lg:top-[210]  max-lg:w-[30px] max-md:h-[30px] lg:right-[280] w-[60px]  object-cover rounded-[10px] "
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
