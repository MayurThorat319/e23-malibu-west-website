import { useEffect, useRef, useState } from "react";
import styles from "./ScrollReveal.module.css";
import { motion } from "framer-motion";

type Tile = {
  url: string;
  x: number;
  y: number;
  w: number;
  h: number;
  delay: number;
  maxOpacity: number;
};

const IMG = (id: string, w = 600, h = 700) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const TILES: Tile[] = [
  { url: IMG("1582719478250-c89cae4dc85b"), x: -23, y: -38, w: 11, h: 30, delay: 0.0, maxOpacity: 0.8 },
  { url: IMG("1600585154340-be6161a56a0c"), x: 22, y: -30, w: 15, h: 40, delay: 0.05, maxOpacity: 0.7 },
  { url: IMG("1545324418-cc1a3fa10c00"), x: -41, y: -2, w: 15, h: 40, delay: 0.1, maxOpacity: 0.9 },
  { url: IMG("1600607687939-ce8a6c25118c"), x: 43, y: -15, w: 11, h: 30, delay: 0.12, maxOpacity: 0.3 },
  { url: IMG("1512917774080-9991f1c4c750"), x: -1, y: 1, w: 15, h: 40, delay: 0.18, maxOpacity: 0.2 },
  { url: IMG("1564013799919-ab600027ffc6"), x: -20, y: 30, w: 11, h: 30, delay: 0.25, maxOpacity: 0.5 },
  { url: IMG("1600585154526-990dced4db0d"), x: 24, y: 30, w: 11, h: 30, delay: 0.28, maxOpacity: 1.0 },
  { url: IMG("1600210492486-724fe5c67fb0"), x: -35, y: 45, w: 14, h: 35, delay: 0.32, maxOpacity: 0.9 },
  { url: IMG("1600566753376-12c8ab7fb75b"), x: 38, y: 42, w: 12, h: 32, delay: 0.35, maxOpacity: 0.7 },
];

const CITY_VIDEO = "/videos/Malibu_Hero.mp4";

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function clamp(v: number, a = 0, b = 1) {
  return Math.max(a, Math.min(b, v));
}

export function ScrollReveal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = el.offsetHeight - vh;
        const scrolled = clamp(-rect.top / total, 0, 1);
        setP(scrolled);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (p > 0.32 && p <= 0.60) {
      if (video.paused) {
        video.play().catch((err) => console.log("Autoplay check:", err));
      }
    } else {
      if (!video.paused) {
        video.pause();
      }
    }
  }, [p]);

  const phase1 = clamp(p / 0.20);
  const continuousScrollProgress = clamp((p - 0.20) / 0.80);
  const continuousScrollY = continuousScrollProgress * -60;

  const cityMoveUpProgress = clamp((p - 0.20) / 0.12);
  const cityMoveUpEase = easeOut(cityMoveUpProgress);

  const bottomY = p < 0.20 ? 150 : 75;
  const midwayY = 25;
  const currentInitialY = bottomY + (midwayY - bottomY) * cityMoveUpEase;

  const cityGrowProgress = clamp((p - 0.32) / 0.13);
  const cityGrowEase = easeOut(cityGrowProgress);

  const expandY = currentInitialY + (0 - midwayY) * cityGrowEase;

  const cityShrinkProgress = clamp((p - 0.60) / 0.40);
  const cityShrinkEase = easeOutQuart(cityShrinkProgress);

  const cityStartW = 32;
  const cityStartH = 40;
  const cityEndW = 100;
  const cityEndH = 100;

  let cityW = cityStartW + (cityEndW - cityStartW) * cityGrowEase;
  let cityH = cityStartH + (cityEndH - cityStartH) * cityGrowEase;
  let cityRadius = 18 * (1 - cityGrowEase);
  let cityY = expandY;

  if (p > 0.60) {
    cityW = cityEndW - (cityEndW - cityStartW) * cityShrinkEase;
    cityH = cityEndH - (cityEndH - cityStartH) * cityShrinkEase;
    cityRadius = 18 * cityShrinkEase;
  }

  return (
    <div ref={wrapRef} className={styles.wrapper}>
      <img src="/images/bgdesignTop.png" alt="Scroll down" className={styles.scrollIndicator} />
      <img src="/images/bgdesign.png" alt="Scroll down" className={styles.scrollIndiTwo} />

      <div className={styles.sticky}>
        {/* Layer 1: Surrounding choti tiles */}
        {TILES.map((t, i) => {
          const local = clamp((phase1 - t.delay) / (1 - t.delay));
          const e = easeOut(local);
          const tileStartY = 60;
          const ty = tileStartY + (t.y - tileStartY) * e + continuousScrollY;

          return (
            <div
              key={i}
              className={styles.img}
              style={{
                width: `${t.w}vw`,
                height: `${t.h}vh`,
                left: `calc(50% + ${t.x}vw)`,
                top: `calc(50% + ${ty}vh)`,
                transform: `translate(-50%, -50%)`,
                opacity: local * t.maxOpacity,
              }}
            >
              <img src={t.url} alt="" loading="lazy" />
            </div>
          );
        })}

        <div className={styles.center}>
          {/* <h2 className={styles.heading}>
            Some Views are seen.
            <br />
            Others are lived.
          </h2> */}
          <motion.h2
            className={styles.heading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
          >
            {" Some Views are seen.".split("").map((char, index) => (
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
            {"Others are lived.".split("").map((char, index) => (
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

          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.4,
            }}>
            <div className={styles.luxdiamond}><span></span>✦<span></span></div>
            <p className={styles.subheading}>
              Life Unfolds differently from here.
            </p>
          </motion.div>

        </div>

        <div
          className={styles.cityImg}
          style={{
            width: `${cityW}vw`,
            height: `${cityH}vh`,
            left: "50%",
            top: `calc(50% + ${cityY}vh)`,
            transform: "translate(-50%, -50%)",
            borderRadius: `${cityRadius}px`,
            opacity: 1,
            overflow: "hidden"
          }}
        >
          <video
            ref={videoRef}
            src={CITY_VIDEO}
            loop
            muted
            playsInline
            preload="auto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollReveal;