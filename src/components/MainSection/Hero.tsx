"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    // Fade out text as you scroll
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Water Distortion: Starts at 0, distorts the background color as you scroll
    const distortionScale = useTransform(scrollYProgress, [0, 1], [0, 80]);

    return (
        <>
            {/* --- INVISIBLE WATER FILTER --- */}
            <svg style={{ position: "absolute", width: 0, height: 0 }}>
                <filter id="solid-water-distortion">
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

            {/* --- SCROLL TRACK --- */}
            <section ref={ref} className={styles.scrollTrack}>
                
                {/* --- STICKY SECTION (Locks in place) --- */}
                <div className={styles.stickySection}>
                    
                    {/* NO IMAGE - Just a solid dark background with the wave effect */}
                    <div className={styles.solidDistortedBg}></div>

                    {/* Centered Content */}
                    {/* <motion.div 
                        className={styles.contentContainer}
                        style={{ opacity: textOpacity }}
                    >
                        <div className={styles.heroContent}>
                            <h1 className={styles.mainHeading}>
                                Your perfect place, just a <br />
                                <span className={styles.goldText}>click away</span>
                            </h1>
                            
                            <div className={styles.buttonWrap}>
                                <a href="/#top-properties" className={styles.buttonPrimary}>
                                    <div className={styles.buttonText}>Get started</div>
                                </a>
                                <a href="/#contact" className={styles.buttonSecondary}>
                                    <div className={styles.buttonText}>Contact us</div>
                                </a>
                            </div>
                        </div>
                    </motion.div> */}

                </div>
            </section>
        </>
    );
};

export default Hero;