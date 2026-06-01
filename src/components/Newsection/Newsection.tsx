import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Newsection.css";

export default function NewSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  
  // Background parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // First section animations
  const beachOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const beachY = useTransform(scrollYProgress, [0, 0.3], ["0px", "-100px"]);
  const beachSubOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const beachVisibility = useTransform(beachOpacity, (v) =>
    v <= 0.01 ? "hidden" : "visible"
  );

  // Scroll indicator animation
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="app-container">
      <section ref={ref} className="parallax-section">
        <div className="sticky-wrapper">

          {/* Background Images */}
          <motion.div className="bg-motion-wrapper" style={{ y: bgY }}>
            <div className="image-container">
              <img src="images/beach1.png" alt="Water and Sand" />
            </div>
            {/* <div className="image-container sand-layer">
              <img src="/beach.png" alt="Pure Sand" />
            </div> */}
          </motion.div>

          {/* Content Overlay - First Section Only */}
          <div className="content-overlay">
            <motion.div
              style={{ opacity: beachOpacity, y: beachY, visibility: beachVisibility }}
              className="scene-container"
            >
              <h1 className="hero-heading">
                <span className="text-serif">Beach</span>
                <span className="text-script">Vibes</span>
              </h1>
              <motion.p style={{ opacity: beachSubOpacity }} className="subtitle">
                Scroll to discover the world's best beaches
              </motion.p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          {/* <motion.div style={{ opacity: indicatorOpacity }} className="scroll-indicator">
            <div className="pulse-line" />
            <span className="arrow-down">↓</span>
          </motion.div> */}

        </div>
      </section>
    </div>
  );
}