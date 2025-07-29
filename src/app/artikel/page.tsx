'use client'
import LandingArtikel from "@/components/artikel/Landing";
import React from "react";

import { motion, useSpring, useScroll } from "framer-motion";

const Page = () => {
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
          backgroundColor: "#C31815",
        }}
        
      />
      <LandingArtikel></LandingArtikel>
    </div>
  );
};

export default Page;
