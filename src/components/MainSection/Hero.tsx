import styles from "./Hero.module.css";
const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.heroVideo}
                poster="/poster.jpg"
            >
                <source src="/videos/start_vid.webm" type="video/mp4" />
            </video>
            <div className={styles.blockcontainer}>
                <div className={styles.heroContentWrap}>
                        <div className={styles.heroContent}>
                            {/* <div className={styles.pillWrap}>
                                <div className={styles.pillDot}>
                                </div>
                                <div className={styles.pillText}>Trusted since 2005</div>
                            </div>
                            <h1 className={styles.h1Heading}>Your perfect place, just a
                                <span className={styles.handwriting}>click away</span>
                            </h1> */}
                        </div>
                        <div className={styles.buttonWrap}>
                            <a data-w-id="8313cf5e-8c41-fedb-fcf2-f412f14b610e" href="/#top-properties" className={styles.buttonPrimary} >
                                <div className={styles.primaryButtonBg} style={{ opacity: 0, display: "none" }}>
                                </div>
                                <div className={styles.buttonText}>Get started</div>
                              
                            </a>
                            <a data-w-id="597bc061-c384-46fc-8ccf-134180d4672d" href="/#contact" className={styles.buttonSecondary} style={{ willChange: "transform", transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
                                <div className={styles.secondaryButtonBg} style={{ opacity: 0, display: "none" }}>
                                </div>
                                <div className={styles.buttonText}>Contact us</div>
                                
                            </a>
                        </div>
                    </div>
            </div>
        </section>

    );
};

export default Hero;