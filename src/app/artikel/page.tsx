'use client'
import LandingArtikel from "@/components/artikel/Landing";
import React from "react";

import { motion, useSpring, useScroll } from "motion/react";

const page = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <motion.div
        className="z-[1000] "
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
        animate={{
          background: [
            "linear-gradient(90deg, #ff0088, #ffcc00)",
            "linear-gradient(90deg, #ffcc00, #00ffcc)",
            "linear-gradient(90deg, #00ffcc, #0099ff)",
            "linear-gradient(90deg, #0099ff, #ff0088)",
            "linear-gradient(90deg, #ff0088, #ffcc00)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
      />
      <LandingArtikel></LandingArtikel>
    </div>
  );
};

export default page;
