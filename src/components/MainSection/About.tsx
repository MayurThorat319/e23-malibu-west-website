import styles from "./About.module.css";
const listings = [
    { img: "https://cdn.prod.website-files.com/68be88697888dc89e94b23e5/68be97999c8527d4df019bae_olexandr-ignatov-w72a24brINI-unsplash%20(1).jpg", sqft: 800, rooms: 4, baths: 1, addr: "2803 Ocean St, Carlsbad, CA 92008", price: "$2,350,000" },
    { img: "https://cdn.prod.website-files.com/68be88697888dc89e94b23e5/68bfd2af6b176ba2ec0a5b3e_juan-verdaguer-aguerrebehere-mcSZ1pNmUNU-unsplash%20(1).jpg", sqft: 2000, rooms: 8, baths: 4, addr: "731 Olive Ave, Vista, CA 92083", price: "$1,395,000" },
    { img: "https://cdn.prod.website-files.com/68be88697888dc89e94b23e5/68be999544a335791c2d5852_clay-banks-kiv1ggvkgQk-unsplash%20(1).jpg", sqft: 980, rooms: 5, baths: 2, addr: "6425 Avenida Cresta, La Jolla, CA 92037", price: "$800,000" },

];

const AboutSection = () => {
    return (
        <section id="about" className={styles.aboutContainer}>
            <div className={styles.sectionlisting}>
                <div className={styles.sticky}>
                    <div className={styles.contentWrapCentered}>
                        <div className={styles.pillWrap}>
                            <div className={styles.pillDot}>
                            </div>
                            <div className={styles.pillText}>Most popular</div>
                        </div>
                        <h2 className={styles.htwoHeading}>Top listings you <br />
                            ‍<span className={styles.handwriting} >can’t miss</span>
                        </h2>
                    </div>
                    
                    <div className={styles.cards}>
                        {listings.map((l, i) => (
                            <a key={i} className={styles.card} href="#">
                                <div className={styles.cardImgWrap}>
                                    <img className={styles.cardImg} src={l.img} alt={l.addr} />
                                    <span className={styles.cardBadge}>New on market</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.cardSpecs}>
                                        <div className={styles.cardSpec}><strong>{l.sqft}</strong>sqft</div>
                                        <div className={styles.cardSpec}><strong>{l.rooms}</strong>rooms</div>
                                        <div className={styles.cardSpec}><strong>{l.baths}</strong>baths</div>
                                    </div>
                                    <p className={styles.cardAddr}>{l.addr}</p>
                                    <div className={styles.cardPrice}>{l.price}<span>/month</span></div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
         
        </section>

    );
};

export default AboutSection;