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
    { id: 1, number: 1, title: "EXCLUSIVE GYM", description: "More than a gym, it’s a luxurious wellness sanctuary — where inspiring views, energy, and elegance come together to elevate every step of your fitness journey.", image: "/images/gym.png" },
    { id: 2, number: 2, title: "SACRED GARDEN", description: "A Sacred Garden designed to soothe the soul - a serene retreat where silence, spirituality, and nature embrace you with a sense of peace beyond the everyday.", image: "/images/garden.png" },
    { id: 3, number: 3, title: "INFINITY POOL", description: "Experience Kopar Khairane’s first and only rooftop infinity pool on the 27th floor — where endless skyline views and golden sunsets create moments of pure escape above the city.", image: "/images/swimming.png" },
    { id: 4, number: 4, title: "THE BANQUET HALL", description: "A breathtaking Sky Banquet in the clouds — an elegant space crafted for unforgettable celebrations, cherished moments, and memories that last a lifetime.", image: "/images/hall.png" },
    { id: 5, number: 5, title: "WORK FROM HOME", description: "A thoughtfully designed work-from-home space where comfort meets focus — inspiring productivity, balance, and the freedom to work peacefully within the comfort of your own world.", image: "/images/office.png" },
    { id: 6, number: 6, title: "MEDITATION CENTER", description: "A tranquil sanctuary where serenity, mindfulness, and breathtaking views come together — creating a soulful escape to relax, reconnect, and rejuvenate your mind, body, and spirit.", image: "/images/maditation.png" },
    { id: 7, number: 7, title: "JOGGING TRACK", description: "A serene jogging track where fitness flows through nature — inspiring every stride with fresh air, peaceful surroundings, and a sense of everyday renewal.", image: "/images/jogging.png" },
    { id: 8, number: 8, title: "Sky Sports Turf", description: "Kopar Khairane’s first-ever Sky Sports Turf — a premium arena where passion rises above the city, bringing the thrill of pro basketball/ football to life for every enthusiast and athlete.", image: "/images/football.png" },
    { id: 9, number: 9, title: "ROOFTOP LOUNGE", description: "From sunset evenings to unforgettable celebrations, the rooftop party lounge offers breathtaking sea views and an atmosphere where every moment feels timeless, intimate, and truly unforgettable.", image: "/images/rooftop.png" },
    { id: 10, number: 10, title: "KIDS PLAY AREA", description: "A joyful haven where imagination runs free — a safe, vibrant play space that inspires curiosity, creativity, and endless moments of childhood wonder.", image: "/images/play_area.png" },
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
// const ArrowRight = () => (
//     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <line x1="5" y1="12" x2="19" y2="12" />
//         <polyline points="12 5 19 12 12 19" />
//     </svg>
// );

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
        <section className={styles.section} id="amenities">
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
                <div className={styles.luxsubtitle}>Amenities</div>
                <div className={styles.luxdiamond}><span></span><i></i><span></span></div>
                <div className={styles.titleBlock}>
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
                        {"Exclusively For You".split("").map((char, index) => (
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
                    Step into a world of thoughtfully curated spaces, where wellness, leisure, and effortless luxury become part of everyday living.
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


                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* <div className={styles.cardContent}>
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
                        </div> */}
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