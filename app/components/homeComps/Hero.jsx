import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Fragment } from "react";
import RobotFaceBack from "../../components/homeComps/robotFronBack";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <Fragment>
      <div className="relative w-full h-[500px] lg:h-[120vh] flex flex-col items-center lg:items-start   md:px-4">
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

        <div className="relative flex  w-full lg:flex-row max-lg:flex-col">
          <div className="w-[30%] max-md:p-0 max-md:pt-20 max-lg:w-full justify-between flex  max-lg:gap-2 max-lg:flex-row lg:felx-col max-lg:pt-20 max-lg:p-20 ">
            <motion.img
              initial={{ translateY: 0 }}
              animate={{ translateY: [-70, 0, -70] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Android.png"
              className=" lg:absolute  w-[80px] max-md:w-[50px]  max-md:h-[50px]  lg:left-[230] lg:top-[100] object-cover rounded-none  "
            />

            <motion.img
              initial={{ translateY: 0 }}
              animate={{ translateY: [70, 0, 70] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/AWS.png"
              className="lg:absolute  lg:left-[70]  lg:top-[00] max-md:w-[50px]  max-md:h-[50px]  w-[80px] w-[80px] object-cover rounded-[20px] p-2 bg-white "
            />
            <motion.img
              initial={{ translateY: 0, rotateZ: 0 }}
              animate={{ translateY: [80, 0, 80], rotateZ: [0, 360, 720] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Next.js.svg "
              className="lg:absolute  lg:left-[330]  lg:top-[200]  max-md:w-[50px]  max-md:h-[50px] w-[80px] w-[80px] object-cover rounded-full  bg-gray-500 "
            />
            <motion.img
              initial={{ translateY: 0 }}
              animate={{
                translateY: [0, 100, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Node.js.png"
              className="lg:absolute  lg:top-[320]  lg:left-[220] max-md:w-[50px]  max-md:h-[50px] w-[80px] w-[80px] object-cover rounded-none  "
            />
          </div>
          <div className="relative w-[40%] h-[100vh] flex flex-col justify-center items-center max-lg:hidden">
        
           
              <RobotFaceBack />
          </div>

         <div className="w-[30%] max-md:p-0 max-md:pt-20 max-lg:w-full justify-between max-md:justify-evenly flex  max-lg:gap-2 max-lg:flex-row lg:felx-col max-lg:pt-20 max-lg:p-20 ">
            <motion.img
              initial={{ translateY: 50, rotateZ: 0 }}
              animate={{
                translateY: [0, 90, 0],
                rotateZ: [0, 360, 720],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="../images/ourServices/React.png"
              className="lg:absolute  lg:top-[60] max-md:w-[50px]  max-md:h-[50px]  lg:right-[120] w-[80px] w-[80px] object-cover rounded-none  "
            />

            <motion.img
              initial={{ translateY: 0 }}
              animate={{ translateY: [-130, 0, -130] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/illustrator.png"
              className=" lg:absolute  w-[80px]  lg:right-[430] max-md:w-[50px]  max-md:h-[50px] lg:top-[200] object-cover rounded-full   "
            />
            <motion.img
              initial={{ translateY: 50 }}
              animate={{
                translateY: [120, 0, 120],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Nodemon.png"
              className="lg:absolute  lg:top-[260] max-md:w-[50px]  max-md:h-[50px]  lg:right-[120] w-[80px] w-[80px] object-cover rounded-none  "
            />

            <motion.img
              initial={{ translateY: 50 }}
              animate={{
                translateY: [0, 130, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/Photoshop.png"
              className="lg:absolute  lg:top-[360px] max-md:w-[50px]  max-md:h-[50px] lg:right-[250px] w-[80px] object-cover  rounded-full"
            />

            <motion.img
              initial={{ translateY: 50 }}
              animate={{
                translateY: [170, 0, 170],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/ourServices/PremierePro.png"
              className="lg:absolute  lg:top-[50] max-md:w-[50px]  max-md:h-[50px] lg:right-[280] w-[80px]  object-cover rounded-[10px] "
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
