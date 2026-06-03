import styles from "./About.module.css";
const AboutSection = () => {
    return (
        <section id="wayus" className={styles.wayusContainer}>
            <div className={styles.videoContainer}>
                <div className={styles.textContent}>
                    <a href="#home" className={styles.logo}>
                        <img
                            className={styles.cardImg}
                            src="/images/Malibu_logo.png"
                            alt="logo"
                        />
                    </a>
                    <h2 className={styles.heading}>About Us</h2>
                    <p className={styles.description}>
                        At EV Homes, we are more than just a real estate company; we are curators of extraordinary living experiences. With a passion for design, innovation, and sustainability, we specialize in creating homes that seamlessly blend luxury with nature. Our commitment to excellence is reflected in every project we undertake, where we strive to craft spaces that inspire and elevate the way you live. From breathtaking waterfront properties to sophisticated urban residences, EV Homes is dedicated to turning your dream home into a reality.
                    </p>
                </div>
                <div className={styles.videoWrapper}>
                    <img src="/images/aboutImage.png" alt="About Us Background" className={styles.backgroundImage} />

                </div>
            </div>
            <div className={styles.scroll} />
        </section>

    );
};

export default AboutSection;