"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait until page is ready
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
    initial={{opacity:1}}
    animate={{opacity:0}}
    transition={{duration:0.5,ease:'easeOut'}}
    className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </motion.div>
  );
}
