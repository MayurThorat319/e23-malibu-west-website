import { useState, useCallback, useEffect, useRef } from "react";
import styles from "./Amenities.module.css";
import { AnimatePresence, motion } from "framer-motion";

interface Amenity {
    id: number;
    title: string;
    description: string;
    image: string;
    number: number;
}

const amenitiesData: Amenity[] = [
    { id: 1, number: 1, title: "EXCLUSIVE GYM", description: "Gym It's A Sanctuary Where Fitness Meets Luxury, Ensuring An Unparalleled Experience Along with A Stunning Backdrop, As You Work Towards Your Health And Wellness Aspirations.", image: "/images/gym.png" },
    { id: 2, number: 2, title: "SACRED GARDEN", description: "The Sacred Garden, Thoughtfully Designed To Provide An Oasis Of Peace And Spiritual Connection Amidst The Bustle Of Daily Life. This Tranquil Sanatan Space Is Perfect For Introspection, Relaxation And Mindfulness, Blending Nature's Beauty With An Ambience Of Sacred Calm.", image: "/images/garden.png" },
    { id: 3, number: 3, title: "INFINITY POOL", description: "Experience The Pinnacle Of Luxury With Kopar-Khairane's First and Only Breathtaking Infinity Pool, Perched On the 27th Floor, Offering Uninterrupted Views of The Stunning Skyline and Sun-set.", image: "/images/swimming.png" },
    { id: 4, number: 4, title: "THE BANQUET HALL", description: "Presenting Kopar-Khairane's First and Only Sky-Banquet The Perfect Venue For All Your Special Occasions. Our Spacious And Aesthetically Designed Banquet Provides A Stunning Backdrop For Unforgettable Moments.", image: "/images/hall.png" },
    { id: 5, number: 5, title: "WORK FROM HOME", description: "Experience The Perfect Blend Or Productivity And Comfort With Our Thoughtfully Designed Work-From-Home-Area. Tailored To Meet The Needs Of Today's Professionals, This Dedicated Space Within The Project Ensures A Seamless Work-Life Balance While Offering All The Conveniences You Need To Stay Focused And Inspired.", image: "/images/office.png" },
    { id: 6, number: 6, title: "MEDITATION CENTER", description: "A Serene Sanctuary Designed to Help You Reconnect With Your Inner Self And Find Peace Amidst Life's Hustle, Nestled in a Tranquil Environment, Along with Stunning Views in The Backdrop, Our Center Offers a Harmonious Blend Of Spirituality, Mindfulness And Relaxation To Rejuvenate Your Mind, Body And Soul.", image: "/images/maditation.png" },
    { id: 7, number: 7, title: "JOGGING TRACK", description: "Discover The Perfect Place To Stay Active And Energized With Our Jogging Track, A Well Designed Pathway That Combines Fitness With The Beauty of Nature. Whether You're A Seasoned Runner Or Just Starting Your Fitness Journey. This Track Offers A Safe, Scenic And Inspiring Space For All.", image: "/images/jogging.png" },
    { id: 8, number: 8, title: "FOOTBALL TURF", description: "Presenting Kopar-Khairane's First Ever Sky-Turf For Players Of All Levels To Experience The Thrill Of The Game. Whether You're Training, Competing, Or Just Enjoying A Casual Match With Friends, Our Turf Offers The Perfect Environment To Unleash Your Passion For Football.", image: "/images/football.png" },
    { id: 9, number: 9, title: "ROOFTOP LOUNGE", description: "Whether It's A Sunset Cocktail, A Romantic Dinner, Or A Vibrant Celebration, Our Rooftop Party Lounge With Stunning Sea Views Promises A Magical Experience like No Other, Where Every Moment Becomes A Cherished Memory.", image: "/images/rooftop.png" },
    { id: 10, number: 10, title: "KIDS PLAY AREA", description: "A Vibrant And Exciting Space Designed To Spark Joy. Creativity And Adventure For Children Of All Ages. Our Play Area Is Thoughtfully Crafted With A Mix Of Fun, Safety And Imagination To Create A Haven Where Kids Can Explore, Learn And Thrive.", image: "/images/play_area.png" },
];

const ChevronLeft = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);
const ChevronRight = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);
const ArrowRight = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

export default function Amenities() {
    const [active, setActive] = useState(0);

    const [bottomImg, setBottomImg] = useState(amenitiesData[0].image);
    const [topImg, setTopImg] = useState(amenitiesData[0].image);
    const [topVisible, setTopVisible] = useState(false);
    const isAnimating = useRef(false);

    const changeSlide = useCallback((nextIdx: number) => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        const newImage = amenitiesData[nextIdx].image;

        // 1. Load new image on top layer (hidden)
        setTopImg(newImage);
        setTopVisible(false);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setTopVisible(true);
                setTimeout(() => {
                    setBottomImg(newImage);
                    setTopVisible(false);
                    setActive(nextIdx);
                    isAnimating.current = false;
                }, 700);
            });
        });
    }, []);

    const prev = useCallback(() => {
        const nextIdx = (active - 1 + amenitiesData.length) % amenitiesData.length;
        changeSlide(nextIdx);
    }, [active, changeSlide]);

    const next = useCallback(() => {
        const nextIdx = (active + 1) % amenitiesData.length;
        changeSlide(nextIdx);
    }, [active, changeSlide]);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIdx = (active + 1) % amenitiesData.length;
            changeSlide(nextIdx);
        }, 3000);
        return () => clearInterval(interval);
    }, [active, changeSlide]);

    const getIdx = (offset: number) =>
        (active + offset + amenitiesData.length) % amenitiesData.length;

    const prevSlide = amenitiesData[getIdx(-1)];
    const centerSlide = amenitiesData[active];
    const nextSlide = amenitiesData[getIdx(1)];

    return (
        <section className={styles.section}>
            <div
                key={`bg-bottom-${bottomImg}`}
                className={styles.bgBottom}
                style={{ backgroundImage: `url(${bottomImg})` }}
            />
            <div
                className={`${styles.bgTop} ${topVisible ? styles.bgTopVisible : ""}`}
                style={{ backgroundImage: `url(${topImg})` }}
            />

            {/* ── Header ── */}
            <div className={styles.header}>
                <div className={styles.titleBlock}>
                    <div className={styles.titleLine} />
                    <motion.h2
                        className={styles.title}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.06,
                                },
                            },
                        }}
                    >
                        {"Exclusively".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 40,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                                style={{ display: "inline-block" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}

                        <br />

                        {"For You".split("").map((char, index) => (
                            <motion.span
                                key={`second-${index}`}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 40,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                                style={{ display: "inline-block" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h2>
                </div>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 0.4,
                    }}
                >
                    Refinement and creativity intertwine with dreamlike destinations
                    and soulful moments on each sojourn with Taj.
                </motion.p>
            </div>

            <div className={styles.carouselWrapper}>
                <div className={styles.track}>
                    {/* LEFT SIDE */}
                    <div className={`${styles.card} ${styles.cardright}`}>
                        <button
                            className={styles.navBtn}
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            aria-label="Previous"
                        >
                            <ChevronLeft />
                        </button>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={prevSlide.title}
                                className={styles.sideLabel}
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                {prevSlide.title}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <div className={`${styles.card} ${styles.cardCenter}`}>
                        <div className={styles.imagePlaceholder}>
                            <div
                                key={`center-bottom-${bottomImg}`}
                                className={styles.centerBottom}
                                style={{ backgroundImage: `url(${bottomImg})` }}
                            />
                            <div
                                className={`${styles.centerTop} ${topVisible ? styles.centerTopVisible : ""}`}
                                style={{ backgroundImage: `url(${topImg})` }}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={centerSlide.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                >
                                    <p className={styles.cardLabel}>
                                        {centerSlide.title}
                                    </p>

                                    <p className={styles.cardDesc}>
                                        {centerSlide.description}
                                    </p>

                                    <button className={styles.cardLink}>
                                        MORE <ArrowRight />
                                    </button>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className={`${styles.card} ${styles.cardSide}`}>
                        <button
                            className={styles.navBtn}
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            aria-label="Next"
                        >
                            <ChevronRight />
                        </button>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={nextSlide.title}
                                className={styles.sideLabel}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                {nextSlide.title}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}