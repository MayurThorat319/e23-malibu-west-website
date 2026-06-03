import { useEffect, useRef, useState } from "react";
import styles from "./ScrollReveal.module.css";

type Tile = {
  url: string;
  x: number;
  y: number;
  w: number;
  h: number;
  delay: number;
};

const IMG = (id: string, w = 600, h = 700) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const TILES: Tile[] = [
  { url: IMG("1582719478250-c89cae4dc85b"), x: -23, y: -38, w: 11, h: 30, delay: 0.0 },
  { url: IMG("1600585154340-be6161a56a0c"), x: 22, y: -30, w: 15, h: 40, delay: 0.05 },
  { url: IMG("1545324418-cc1a3fa10c00"), x: -41, y: -2, w: 15, h: 40, delay: 0.1 },
  { url: IMG("1600607687939-ce8a6c25118c"), x: 43, y: -15, w: 11, h: 30, delay: 0.12 },
  { url: IMG("1512917774080-9991f1c4c750"), x: -1, y: 1, w: 15, h: 40, delay: 0.18 },
  { url: IMG("1564013799919-ab600027ffc6"), x: -20, y: 30, w: 11, h: 30, delay: 0.25 },
  { url: IMG("1600585154526-990dced4db0d"), x: 24, y: 30, w: 11, h: 30, delay: 0.28 },
  { url: IMG("1600210492486-724fe5c67fb0"), x: -35, y: 45, w: 14, h: 35, delay: 0.32 },
  { url: IMG("1600566753376-12c8ab7fb75b"), x: 38, y: 42, w: 12, h: 32, delay: 0.35 },
];

const CITY = IMG("1542314831-068cd1dbfeeb", 1600, 900);

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
function clamp(v: number, a = 0, b = 1) {
  return Math.max(a, Math.min(b, v));
}

export function ScrollReveal() {
  const wrapRef = useRef<HTMLDivElement>(null);
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

  const phase1 = clamp(p / 0.45); 

  const continuousScrollProgress = clamp((p - 0.45) / 0.55);
  const continuousScrollY = continuousScrollProgress * -50; 

  const cityMoveUpProgress = clamp((p - 0.45) / 0.20);
  const cityMoveUpEase = easeOut(cityMoveUpProgress);
  
  const bottomY = 50;  
  const midwayY = 25;  
  const currentInitialY = bottomY + (midwayY - bottomY) * cityMoveUpEase;

  const cityGrowProgress = clamp((p - 0.65) / 0.35);
  const cityGrowEase = easeOut(cityGrowProgress);

  const cityY = currentInitialY + (0 - midwayY) * cityGrowEase;

  const cityStartW = 32;
  const cityStartH = 40;
  const cityEndW = 100;
  const cityEndH = 100;

  const cityW = cityStartW + (cityEndW - cityStartW) * cityGrowEase;
  const cityH = cityStartH + (cityEndH - cityStartH) * cityGrowEase;
  const cityRadius = 18 * (1 - cityGrowEase);
  
  const cityOpacity = p >= 0.45 ? 1 : 0;

  return (
    <div ref={wrapRef} className={styles.wrapper}>
      <div className={styles.sticky}>
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
                opacity: local * 0.6, 
              }}
            >
              <img src={t.url} alt="" loading="lazy" />
            </div>
          );
        })}

        <div className={styles.center}>
          <svg className={styles.star} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2v6.5l4.6-4.6 2.1 2.1L14.1 11H21v3h-6.9l4.6 4.6-2.1 2.1L12 16.1V23h-3v-6.9l-4.6 4.6-2.1-2.1L6.9 14H0v-3h6.9L2.3 6.4l2.1-2.1L9 8.9V2z" />
          </svg>

          <h2 className={styles.heading}>
            Some horizons are admired. Others are lived in.
          </h2>

          <div className={styles.years}>
            <div className={styles.yearsNum}>
              15<span className={styles.plus}>+</span>
            </div>
            <div className={styles.yearsLabel}>YEARS OF EXPERIENCE</div>
          </div>
        </div>

        {/* Layer 3: Badi city image */}
        <div
          className={styles.cityImg}
          style={{
            width: `${cityW}vw`,
            height: `${cityH}vh`,
            left: "50%",
            top: `calc(50% + ${cityY}vh)`,
            transform: "translate(-50%, -50%)",
            borderRadius: `${cityRadius}px`,
            opacity: cityOpacity,
            display: p >= 0.45 ? "block" : "none",
          }}
        >
          <img src={CITY} alt="City skyline" />
        </div>
      </div>
    </div>
  );
}

export default ScrollReveal;