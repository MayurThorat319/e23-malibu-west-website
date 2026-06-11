import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const HeroVideo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {isMobile ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className={styles.heroVideo}
          poster="/poster.jpg"
        >
          <source src="/videos/Malibu_Hero_1.mp4" type="video/mp4" />
        </video>
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className={styles.heroVideo}
          poster="/poster.jpg"
        >
          <source src="/videos/Malibu_Hero_1.mp4" type="video/mp4" />
        </video>
      )}

      <div className={styles.blockcontainer}>
        <div className={styles.heroContentWrap}>
          <div className={styles.heroContent}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;