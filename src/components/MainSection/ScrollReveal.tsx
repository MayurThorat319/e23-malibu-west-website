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

  hideOnMobile?: boolean;
  mobileX?: number;
  mobileY?: number;
  mobileW?: number;
  mobileH?: number;

  hideOnTablet?: boolean;
  tabletX?: number;
  tabletY?: number;
  tabletW?: number;
  tabletH?: number;
};

const IMG = (id: string, w = 600, h = 700) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const TILES: Tile[] = [
  {
    url: IMG("1582719478250-c89cae4dc85b"),
    x: -23, y: -38, w: 11, h: 30, delay: 0.0, maxOpacity: 0.8,
    mobileX: -25, mobileY: -55, mobileW: 40, mobileH: 35,
    tabletX: -24, tabletY: -36, tabletW: 18, tabletH: 25
  },
  {
    url: IMG("1600585154340-be6161a56a0c"),
    x: 22, y: -30, w: 15, h: 40, delay: 0.05, maxOpacity: 0.7,
    mobileX: 25, mobileY: -45, mobileW: 40, mobileH: 35,
    tabletX: 24, tabletY: -28, tabletW: 19, tabletH: 30
  },
  {
    url: IMG("1545324418-cc1a3fa10c00"),
    x: -41, y: -2, w: 15, h: 40, delay: 0.1, maxOpacity: 0.9,
    hideOnMobile: true,
    tabletX: -38, tabletY: -2, tabletW: 20, tabletH: 30
  },
  {
    url: IMG("1600607687939-ce8a6c25118c"),
    x: 43, y: -15, w: 11, h: 30, delay: 0.12, maxOpacity: 0.3,
    mobileX: 24, mobileY: 40, mobileW: 40, mobileH: 35,
        tabletX: 12, tabletY: 35, tabletW: 18, tabletH: 25

  },
  {
    url: IMG("1512917774080-9991f1c4c750"),
    x: -1, y: 1, w: 15, h: 40, delay: 0.18, maxOpacity: 0.2,
    mobileX: -1, mobileY: -8, mobileW: 40, mobileH: 35,
    tabletX: -1, tabletY: 1, tabletW: 22, tabletH: 30
  },
  {
    url: IMG("1564013799919-ab600027ffc6"),
    x: -20, y: 30, w: 11, h: 30, delay: 0.25, maxOpacity: 0.5,
    mobileX: -28, mobileY: 30, mobileW: 40, mobileH: 35,
    
    tabletX: -22, tabletY: 30, tabletW: 18, tabletH: 25
  },
  {
    url: IMG("1600585154526-990dced4db0d"),
    x: 24, y: 30, w: 11, h: 30, delay: 0.28, maxOpacity: 1.0,
    hideOnMobile: true,
        tabletX: 35, tabletY: 10, tabletW: 22, tabletH: 30

  },
  {
    url: IMG("1600210492486-724fe5c67fb0"),
    x: -35, y: 45, w: 14, h: 35, delay: 0.32, maxOpacity: 0.9,
    hideOnMobile: true,
    hideOnTablet: true
  },
  {
    url: IMG("1600566753376-12c8ab7fb75b"),
    x: 38, y: 42, w: 12, h: 32, delay: 0.35, maxOpacity: 0.7,
    hideOnMobile: true,
    hideOnTablet: true
  },
];

const CITY_VIDEO = "/videos/AmenitiesVideoTwo.mp4";
function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }

export function ScrollReveal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [p, setP] = useState(0);
  const [screenSize, setScreenSize] = useState({ isMobile: false, isTablet: false });

  useEffect(() => {
    let raf = 0;
    const handleResizeAndScroll = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < 500,
        isTablet: width >= 500 && width < 1024,
      });

      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const scrolled = Math.max(0, Math.min(1, -rect.top / total));
      setP(scrolled);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        handleResizeAndScroll();
      });
    };

    handleResizeAndScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleResizeAndScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResizeAndScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (p > 0.32 && p <= 0.6) {
      if (video.paused) video.play().catch((err) => console.log("Autoplay:", err));
    } else {
      if (!video.paused) video.pause();
    }
  }, [p]);

  const phase1 = Math.max(0, Math.min(1, p / 0.2));
  const continuousScrollProgress = Math.max(0, Math.min(1, (p - 0.2) / 0.8));
  const continuousScrollY = continuousScrollProgress * -60;

  const cityMoveUpProgress = Math.max(0, Math.min(1, (p - 0.2) / 0.12));
  const cityMoveUpEase = easeOut(cityMoveUpProgress);

  const bottomY = p < 0.2 ? 150 : 75;
  const midwayY = screenSize.isMobile ? 30 : screenSize.isTablet ? 28 : 25;
  const currentInitialY = bottomY + (midwayY - bottomY) * cityMoveUpEase;

  const cityGrowProgress = Math.max(0, Math.min(1, (p - 0.32) / 0.13));
  const cityGrowEase = easeOut(cityGrowProgress);

  const expandY = currentInitialY + (0 - midwayY) * cityGrowEase;

  const cityShrinkProgress = Math.max(0, Math.min(1, (p - 0.6) / 0.4));
  const cityShrinkEase = (1 - Math.pow(1 - cityShrinkProgress, 4));

  const cityStartW = screenSize.isMobile ? 65 : screenSize.isTablet ? 45 : 32;
  const cityStartH = screenSize.isMobile ? 35 : screenSize.isTablet ? 38 : 40;
  const cityEndW = 100;
  const cityEndH = 100;

  let cityW = cityStartW + (cityEndW - cityStartW) * cityGrowEase;
  let cityH = cityStartH + (cityEndH - cityStartH) * cityGrowEase;
  let cityRadius = 12 * (1 - cityGrowEase);
  let cityY = expandY;

  if (p > 0.6) {
    cityW = cityEndW - (cityEndW - cityStartW) * cityShrinkEase;
    cityH = cityEndH - (cityEndH - cityStartH) * cityShrinkEase;
    cityRadius = 12 * cityShrinkEase;
    cityY = expandY + (continuousScrollProgress * 20) * cityShrinkEase;

  }

  return (
    <div ref={wrapRef} className={styles.wrapper}>
      <img src="/images/bgdesignTop.webp" alt="" className={styles.scrollIndicator} />
      <img src="/images/bgdesign.webp" alt="" className={styles.scrollIndiTwo} />
      <div className={styles.sticky}>
        {TILES.map((t, i) => {
          if (screenSize.isMobile && t.hideOnMobile) return null;

          if (screenSize.isTablet && t.hideOnTablet) return null;

          let currentX = t.x;
          let currentY = t.y;
          let currentW = t.w;
          let currentH = t.h;

          if (screenSize.isMobile) {
            currentX = t.mobileX !== undefined ? t.mobileX : t.x;
            currentY = t.mobileY !== undefined ? t.mobileY : t.y;
            currentW = t.mobileW !== undefined ? t.mobileW : t.w;
            currentH = t.mobileH !== undefined ? t.mobileH : t.h;
          } else if (screenSize.isTablet) {
            currentX = t.tabletX !== undefined ? t.tabletX : t.x;
            currentY = t.tabletY !== undefined ? t.tabletY : t.y;
            currentW = t.tabletW !== undefined ? t.tabletW : t.w;
            currentH = t.tabletH !== undefined ? t.tabletH : t.h;
          }

          const local = Math.max(0, Math.min(1, (phase1 - t.delay) / (1 - t.delay)));
          const e = easeOut(local);
          const tileStartY = 60;
          const ty = tileStartY + (currentY - tileStartY) * e + continuousScrollY;

          return (
            <div
              key={i}
              className={styles.img}
              style={{
                width: `${currentW}vw`,
                height: `${currentH}vh`,
                left: `calc(50% + ${currentX}vw)`,
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
          <motion.h2 className={styles.heading}>
            {"Some Views are seen.".split("").map((char, index) => (
              <motion.span key={index} style={{ display: "inline-block" }}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            {"Others are lived.".split("").map((char, index) => (
              <motion.span key={index} style={{ display: "inline-block" }}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <div>
            <div className={styles.luxdiamond}>
              <span></span>✦<span></span>
            </div>
            <p className={styles.subheading}>
              Life Unfolds differently from here.
            </p>
          </div>
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
            overflow: "hidden",
          }}
        >
          <video
            ref={videoRef}
            src={CITY_VIDEO}
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollReveal;