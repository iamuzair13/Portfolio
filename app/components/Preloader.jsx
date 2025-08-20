"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait until page is ready
    const timer = setTimeout(() => setLoading(false), 10000); // 2 seconds
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
    <div className="flex justify-center items-center h-screen bg-black">
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
    </div>
  );
}
