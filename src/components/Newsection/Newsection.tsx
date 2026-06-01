import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Newsection.css";

export default function NewSection() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 1. Text Sinking Effect
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "500px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // 2. Water Distortion Effect!
  // At top of page (0), distortion is 0. As you scroll (1), it warps up to 60.
  const distortionScale = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="app-container" ref={ref}>
      
      {/* --- THE MAGIC WATER FILTER (Invisible on the page) --- */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="water-distortion">
          {/* This creates the wavy noise pattern */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.015 0.05" 
            numOctaves="2" 
            result="noise" 
          />
          {/* Framer motion animates the scale of the distortion! */}
          <motion.feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={distortionScale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* --- THE BACKGROUND --- */}
      {/* We apply the filter to this container in the CSS */}
      <div className="bg-fixed distortion-wrapper">
        <img src="images/beach1.png" alt="Water and Sand" />
      </div>

      {/* --- THE TEXT --- */}
      <motion.div
        className="content-overlay"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="scene-container">
          <h1 className="hero-heading">
            <span className="text-serif">23</span>
            <span className="text-script">Malibu West</span>
          </h1>
          <p className="subtitle">Scroll to dive in</p>
        </div>
      </motion.div>

      {/* Allows the page to scroll */}
      <div className="scroll-space"></div>
      
    </div>
  );
}