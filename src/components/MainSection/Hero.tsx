import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const HeroVideo = () => {
   const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Don't autoplay immediately - wait for page to load
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay might be blocked, that's fine
        });
      }
    };

    // Wait for the page to be fully loaded
    if (document.readyState === 'complete') {
      playVideo();
    } else {
      window.addEventListener('load', playVideo);
    }

    return () => {
      window.removeEventListener('load', playVideo);
    };
  }, []);
  return (
    <section id="hero" className={styles.hero}>
       <video
        ref={videoRef}
        muted
        loop
        playsInline
        className={styles.heroVideo}
        poster="/poster.jpg"
        preload="none" // Don't load video until needed
        // fetchPriority and autoPlay removed
      >
        <source src="/videos/Malibu_Hero_1.mp4" type="video/mp4" />
      </video>

      {/* <div className={styles.blockcontainer}>
        <div className={styles.heroContentWrap}>
          <div className={styles.heroContent}>
            <div className={styles.pillWrap}>
              <div className={styles.pillDot} />
              <div className={styles.pillText}>Luxury Waterfront Residences</div>
            </div>
            
            <h1 className={styles.h1Heading}>
              Your perfect place, just a{" "}
              <span className={styles.handwriting}>click away</span>
            </h1>
          </div>

          <div className={styles.buttonWrap}>
            <a href="#amenities-section" className={styles.buttonPrimary}>
              <span className={styles.buttonText}>Get started</span>
            </a>
            <a href="#contact" className={styles.buttonSecondary}>
              <span className={styles.buttonText}>Contact us</span>
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroVideo;