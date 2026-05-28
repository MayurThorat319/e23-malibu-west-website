import BuildingReveal from "./buildingReveal";
import styles from "./WayUs.module.css";
const WayUsSection = () => {
    return (
        <section id="wayus" className={styles.wayusContainer}>
            <div className={styles.container}>
                <div className={styles.horizontalwrap}>
                    <div className={styles.pillwrap}>
                        <div className={styles.pilldot}>
                        </div>
                        <div className={styles.pilltext}>Why us?</div>
                    </div>
                    <p className={styles.paragpaph}>
                        At Solflare, we believe finding a home is more than a transaction — it’s a life-changing experience. Our team of passionate local experts is dedicated to guiding you through every step, from the first search to the final handshake. With deep market knowledge, honest advice, and a commitment to your goals, we make the journey to your new home smooth, transparent, and even enjoyable.
                    </p>
                </div>
            </div>

            {/* <div className={styles.videoContainer}>
                <div className={styles.videoOverlay} />
               
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.fullsizevideo}
                    poster="/poster.jpg"
                >
                    <source src="/videos/Hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}

         <div className={styles.revealWrapper}>
    <div className={styles.videoOverlay}>
        <BuildingReveal />
    </div>
</div>

            <div className={styles.scroll} />
        </section>

    );
};

export default WayUsSection;