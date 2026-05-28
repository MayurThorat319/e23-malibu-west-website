import { useEffect, useRef, useState } from "react";
import "./buildingReveal.css";

export default function BuildingReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // Tracks asset load status
const sceneRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const onScroll = () => {
    const el = sceneRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const progress = Math.min(
      1,
      Math.max(0, -rect.top / (window.innerHeight * 1.2))
    );

    const scale = 1 + progress * 0.12;
    const y = progress * -80;
    const opacity = progress > 0.75
      ? 1 - (progress - 0.75) / 0.25
      : 1;

    el.style.transform = `
      translate3d(0, ${y}px, 0)
      scale(${scale})
    `;

    el.style.opacity = `${opacity}`;
  };

  onScroll();

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => window.removeEventListener("scroll", onScroll);
}, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.9 },
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="building-reveal-section">
      <div className="grid-bg" />

      <div className="building-container">
        {/* Dynamic class added when visible AND image asset is fully loaded */}
        <div ref={sceneRef} className={`building-wrapper ${visible ? "is-visible" : ""} ${imageLoaded ? "is-image-loaded" : ""}`}>
          
          {/* ACCURATE ISOMETRIC LINE DRAWING SVG */}
          <svg
            viewBox="0 0 450 950"
            className="building-svg"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* BASE / GROUND PODIUM */}
            <g className="stage s-ground">
              <path d="M 65 890 L 410 900 L 410 855 L 70 820 Z" />
              <path d="M 200 500 L 200 850" />
            </g>

            {/* LEFT BALCONY COLUMN (STACKED BOXES) */}
            <g className="stage s-lower">
              {Array.from({ length: 16 }).map((_, i) => {
                const y = 780 - i * 32; 
                return (
                  <g key={`left-balc-${i}`}>
                    <path d={`M 90 ${y} L 150 ${y - 12} L 150 ${y - 32} L 90 ${y - 20} Z`} />
                    <path d={`M 150 ${y - 12} L 180 ${y - 5} L 180 ${y - 25} L 150 ${y - 32}`} />
                    <line x1={105} y1={y - 17} x2={135} y2={y - 23} />
                  </g>
                );
              })}
            </g>

            {/* CENTER SPARK / MAIN DIVIDER VERTICAL WALL */}
            <g className="stage s-upper">
              <path d="M 185 830 L 185 240 L 215 230 L 215 820 Z" />
              <path d="M 215 230 L 245 240 L 245 810" />
              
              {Array.from({ length: 28 }).map((_, i) => {
                const y = 800 - i * 19;
                if (y < 260) return null;
                return (
                  <path 
                    key={`center-slit-${i}`} 
                    d={`M 188 ${y} L 212 ${y - 5} M 218 ${y - 5} L 242 ${y}`} 
                  />
                );
              })}
            </g>

            {/* RIGHT BALCONY COLUMN (STACKED BOXES WITH ISOMETRIC ANGLE) */}
            <g className="stage s-deck">
              {Array.from({ length: 18 }).map((_, i) => {
                const y = 810 - i * 32;
                return (
                  <g key={`right-balc-${i}`}>
                    <path d={`M 250 ${y} L 280 ${y - 6} L 280 ${y - 26} L 250 ${y - 20} Z`} />
                    <path d={`M 280 ${y - 6} L 340 ${y - 18} L 340 ${y - 38} L 280 ${y - 26} Z`} />
                    <line x1={290} y1={y - 18} x2={330} y2={y - 26} />
                  </g>
                );
              })}
            </g>

            {/* MIDDLE CONNECTIVE PODIUM AND CORNICE */}
            <g className="stage s-sign">
              <path d="M 85 540 L 185 520 L 245 530 L 345 510" />
              <path d="M 85 548 L 185 528 L 245 538 L 345 518" />
            </g>

            {/* TOP WAVY ARCHITECTURE & HATCHED CROWN */}
            <g className="stage s-crown">
              <path d="M 140 210 L 215 180 L 290 200 L 350 185" />
              <path d="M 145 210 L 145 150 L 215 120 L 295 140 L 295 200" />
              <path d="M 135 150 Q 170 120 210 135 Q 230 145 260 110" />
              <path d="M 135 142 Q 170 112 210 127 Q 230 137 260 102" />
              <path d="M 260 110 Q 290 80 330 110 Q 350 125 345 155" />
              <path d="M 260 102 Q 290 72 330 102 Q 350 117 345 147" />

              {Array.from({ length: 14 }).map((_, i) => (
                <path
                  key={`hatch-1-${i}`}
                  d={`M ${268 + i * 5} ${102 + i * 2} L ${276 + i * 5} ${120 + i * 2}`}
                />
              ))}
              
              {Array.from({ length: 8 }).map((_, i) => (
                <path
                  key={`hatch-2-${i}`}
                  d={`M ${155 + i * 6} ${144 - i * 2} L ${161 + i * 6} ${160 - i * 2}`}
                />
              ))}
            </g>
          </svg>

          {/* REAL BUILDING IMAGE OVERLAY */}
          <img
            src="/images/ev_malibu.png"
            alt="Malibu Heights Real Reveal"
            className="photo-reveal"
            onLoad={() => setImageLoaded(true)} // Toggles state when fully loaded
          />
        </div>
      </div>
    </section>
  );
}