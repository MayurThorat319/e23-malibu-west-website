import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Newsection.css";

export default function NewSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "500px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const distortionScale = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="new-scroll-track" ref={ref}>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="new-water-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.05"
            numOctaves="2"
            result="noise"
          />
          <motion.feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={distortionScale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="new-sticky-section">
        <div className="base-background">
          <img src="images/wave.png" alt="Sand Background" />
        </div>

        <div className="distortion-wrapper">
          <img src="images/wavescut3.png" alt="Water Waves" />
        </div>

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

      </div>
    </div>
  );
}