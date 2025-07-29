"use client";
import LandingPage from "@/components/home/landing";
import News from "@/components/home/News";
import NewsAlert from "@/components/home/NewsAlert";
import React from "react";
import { motion, useSpring, useScroll } from "motion/react";

const Page = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="">
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
        
        
      />
      <LandingPage />
      <NewsAlert />
      <News />
    </div>
  );
};

export default Page;
