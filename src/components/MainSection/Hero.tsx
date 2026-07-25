import { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";

type HeroVideoProps = {
  id?: string;
};

const HeroVideo = ({ id = "hero" }: HeroVideoProps) => {
 const [videoLoaded, setVideoLoaded] = useState(false);
const [videoSrc, setVideoSrc] = useState("");

const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
  const isMobile = window.matchMedia("(max-width: 480px)").matches;

  setVideoSrc(
    isMobile
      ? "/videos/Malibu_Hero_Phone.mp4"
      : "/videos/Malibu_Hero_1.mp4"
  );
}, []);

useEffect(() => {
  const video = videoRef.current;

  if (!video || !videoSrc) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  const startVideo = async () => {
    try {
      await video.play();
      setVideoLoaded(true);
    } catch (error) {
      console.log("Initial autoplay failed:", error);
    }
  };

  const handleLoadedMetadata = () => {
    startVideo();
  };

  const handleCanPlay = () => {
    startVideo();
  };

  const handlePageShow = () => {
    startVideo();
  };

  video.addEventListener("loadedmetadata", handleLoadedMetadata);
  video.addEventListener("canplay", handleCanPlay);
  window.addEventListener("pageshow", handlePageShow);

  video.load();
  startVideo();

  return () => {
    video.removeEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );
    video.removeEventListener("canplay", handleCanPlay);
    window.removeEventListener("pageshow", handlePageShow);
  };
}, [videoSrc]);

  return (
    <section id={id} className={styles.hero}>
      {!videoLoaded && (
        <div className={styles.cinematicLoader}>
          <div className={styles.ambientOverlay}>
            <div className={styles.sunRay}></div>
            <div className={styles.lightCaustics}></div>
          </div>

          {/* Cinematic Sun Component */}
          <div className={styles.sunWrapper}>
            <div className={styles.sunGlow}></div>
            <svg className={styles.sunSvg} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="url(#sunGrad)" />
              <defs>
                <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF9E6" />
                  <stop offset="60%" stopColor="#FFE0A3" />
                  <stop offset="100%" stopColor="#F3C37A" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Animated Moving Clouds */}
          <div className={styles.cloudsWrapper}>
            <svg
              className={`${styles.cloud} ${styles.cloud1}`}
              viewBox="0 0 500 150"
              fill="none"
            >
              <path
                d="M50 100 Q80 50 140 60 Q180 20 240 50 Q290 20 350 50 Q400 40 430 80 Q470 70 480 100 Z"
                fill="rgba(255, 255, 255, 0.85)"
              />
            </svg>

            <svg
              className={`${styles.cloud} ${styles.cloud2}`}
              viewBox="0 0 500 150"
              fill="none"
            >
              <path
                d="M40 110 Q70 60 130 70 Q170 30 230 60 Q280 30 330 60 Q380 40 420 90 Q450 80 470 110 Z"
                fill="rgba(235, 220, 195, 0.75)"
              />
            </svg>

            <svg
              className={`${styles.cloud} ${styles.cloud3}`}
              viewBox="0 0 500 150"
              fill="none"
            >
              <path
                d="M60 90 Q90 40 150 50 Q190 10 250 40 Q300 10 360 40 Q400 30 440 70 Q470 60 480 90 Z"
                fill="rgba(255, 255, 255, 0.9)"
              />
            </svg>
          </div>

          {/* Flying Flapping Birds */}
          <div className={styles.birdsWrapper}>
            <div className={`${styles.birdContainer} ${styles.bird1}`}>
              <svg className={styles.birdSvg} viewBox="0 0 100 60" fill="none">
                <path
                  className={styles.wingLeft}
                  d="M50 35 C35 10 15 5 0 20 C20 25 38 30 50 35 Z"
                  fill="#1a4b5e"
                />
                <path
                  className={styles.wingRight}
                  d="M50 35 C65 10 85 5 100 20 C80 25 62 30 50 35 Z"
                  fill="#1a4b5e"
                />
                <ellipse cx="50" cy="35" rx="5" ry="12" fill="#0a2530" />
              </svg>
            </div>

            <div className={`${styles.birdContainer} ${styles.bird2}`}>
              <svg className={styles.birdSvg} viewBox="0 0 100 60" fill="none">
                <path
                  className={styles.wingLeft}
                  d="M50 35 C35 10 15 5 0 20 C20 25 38 30 50 35 Z"
                  fill="#849d6a"
                />
                <path
                  className={styles.wingRight}
                  d="M50 35 C65 10 85 5 100 20 C80 25 62 30 50 35 Z"
                  fill="#849d6a"
                />
                <ellipse cx="50" cy="35" rx="5" ry="12" fill="#0a2530" />
              </svg>
            </div>
          </div>

          <div className={styles.centerContent}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.textOutline}>23 MALIBU WEST</h1>
              <h1 className={styles.textFill}>23 MALIBU WEST</h1>
            </div>

            <div className={styles.dividerBox}>
              <span className={styles.line}></span>
              <span className={styles.diamond}>◆</span>
              <span className={styles.line}></span>
            </div>
            <p className={styles.subtitle}>Luxury Sea Facing</p>
          </div>

          {/* Left Corner Tree */}
          <div className={`${styles.palmTreeWrapper} ${styles.palmTreeLeft}`}>
            <svg viewBox="0 0 200 300" className={styles.palmTreeSvg}>
              <defs>
                <linearGradient
                  id="treeGradLeft"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#849d6a" />
                  <stop offset="100%" stopColor="#0a2530" />
                </linearGradient>
              </defs>
              <path
                d="M 20,300 C 60,200 80,120 90,60 C 92,54 84,52 80,58 C 70,118 48,200 0,300 Z"
                fill="url(#treeGradLeft)"
              />
              <g fill="url(#treeGradLeft)">
                <path d="M 85,57 C 50,10 10,20 -30,40 C 10,40 55,35 85,57 Z" />
                <path d="M 85,57 C 30,35 -20,70 -50,110 C -10,80 40,70 85,57 Z" />
                <path d="M 85,57 C 130,10 180,20 220,40 C 175,38 130,35 85,57 Z" />
                <path d="M 85,57 C 140,35 190,70 215,115 C 175,80 130,70 85,57 Z" />
                <path d="M 85,57 C 90,0 85,-30 80,-50 C 95,-20 100,10 85,57 Z" />
              </g>
              <circle cx="80" cy="62" r="5" fill="#ba9f70" />
              <circle cx="90" cy="64" r="4.5" fill="#cbb387" />
            </svg>
          </div>

          {/* Right Corner Tree */}
          <div className={`${styles.palmTreeWrapper} ${styles.palmTreeRight}`}>
            <svg viewBox="0 0 200 300" className={styles.palmTreeSvg}>
              <defs>
                <linearGradient
                  id="treeGradRight"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#849d6a" />
                  <stop offset="100%" stopColor="#0a2530" />
                </linearGradient>
              </defs>
              <path
                d="M 180,300 C 140,200 120,120 110,60 C 108,54 116,52 120,58 C 130,118 152,200 200,300 Z"
                fill="url(#treeGradRight)"
              />
              <g fill="url(#treeGradRight)">
                <path d="M 115,57 C 150,10 190,20 230,40 C 190,40 145,35 115,57 Z" />
                <path d="M 115,57 C 170,35 220,70 250,110 C 210,80 160,70 115,57 Z" />
                <path d="M 115,57 C 70,10 20,20 -20,40 C 25,38 70,35 115,57 Z" />
                <path d="M 115,57 C 60,35 10,70 -15,115 C 25,80 70,70 115,57 Z" />
                <path d="M 115,57 C 110,0 115,-30 120,-50 C 105,-20 100,10 115,57 Z" />
              </g>
              <circle cx="120" cy="62" r="5" fill="#ba9f70" />
              <circle cx="110" cy="64" r="4.5" fill="#cbb387" />
            </svg>
          </div>

          {/* Floating Water Bubbles Layer */}
          <div className={styles.bubblesContainer}>
            <span className={`${styles.bubble} ${styles.b1}`}></span>
            <span className={`${styles.bubble} ${styles.b2}`}></span>
            <span className={`${styles.bubble} ${styles.b3}`}></span>
            <span className={`${styles.bubble} ${styles.b4}`}></span>
            <span className={`${styles.bubble} ${styles.b5}`}></span>
            <span className={`${styles.bubble} ${styles.b6}`}></span>
          </div>

          <div className={styles.waveLayer}>
            <svg
              className={styles.waves}
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className={styles.parallaxWave}>
                <use
                  href="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(39, 114, 124, 0.15)"
                />
                <use
                  href="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(220, 198, 156, 0.25)"
                />
                <use
                  href="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(26, 75, 94, 0.35)"
                />
                <use
                  href="#gentle-wave"
                  x="48"
                  y="7"
                  fill="rgba(252, 249, 242, 0.8)"
                />
              </g>
            </svg>
          </div>
        </div>
      )}

      <video
  ref={videoRef}
  key={videoSrc}
  src={videoSrc}
  autoPlay
  muted
  loop
  playsInline
  preload="none"
  className={styles.heroVideo}
  poster="/poster.jpg"
/>
    </section>
  );
};

export default HeroVideo;
