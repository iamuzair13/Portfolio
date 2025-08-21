"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait until page is ready
    const timer = setTimeout(() => setLoading(false), 3000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);
  if (!loading) return null;

  return (
    <>
      {/* <div className="flex justify-center items-center h-screen bg-black">
      <motion.img
        src="/Logos/ProgrammersSQUAD-final-logof.png"
        alt="Animated"
        // initial={{ filter: "grayscale(100%)" }}   // start gray
        // animate={{ filter: ["grayscale(0%)", "grayscale(100%)", "grayscale(0%)"] }}
        initial={{ scale: 1, filter: "grayscale(0%)", }} // start gray
        animate={{
          scale: [1, 1.3, 1],
          filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(100%)"],
          
        }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        className="w-150 max-lg:w-60  rounded-xl shadow-lg"
      />
    </div> */}
      <motion.div className="flex justify-center gap-6 max-lg:gap-1 items-center max-lg:items-center h-[100vh] bg-black"
         initial={{opacity:0}}
      animate={{opacity:[1]}}
      transition={{duration:0.3, ease:'easeInOut'}}>
        <motion.img
          src="/Logos/ji.png"
          alt="Animated"
          // initial={{ filter: "grayscale(100%)" }}   // start gray
          // animate={{ filter: ["grayscale(0%)", "grayscale(100%)", "grayscale(0%)"] }}
          initial={{ rotateZ: 0 }} // start gray
          animate={{
            rotateZ: 360,
          }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          className="w-30 max-lg:w-10  rounded-xl shadow-lg"
        />

        {/* <h2 className="text-[60px] max-lg:text-[20px] text-white">Programmers Squad</h2> */}
        <img src="/Logos/20.png" alt="" className="max-lg:w-60"/>
      </motion.div>
    </>
  );
}
