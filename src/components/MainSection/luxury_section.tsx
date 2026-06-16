import { useEffect, useRef } from "react";
import "./luxury_section.css";

interface CardItem {
  title: string;
  text: string;
  icon: React.ReactNode;
}

const cards: CardItem[] = [
  {
    title: "The Address",
    text: "Most Desired. Perfectly Connected.",
    icon: (
      <svg
        viewBox="0 0 120 120"
        className="lux-animated-svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="lux-glow-a" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#8fdcff" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#8fdcff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8fdcff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          className="lux-aura"
          cx="60"
          cy="55"
          r="34"
          fill="url(#lux-glow-a)"
        />
        <path
          className="lux-line"
          d="M60 18c-12 0-21 9-21 21 0 16 21 38 21 38s21-22 21-38c0-12-9-21-21-21z"
          fill="none"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          className="lux-trace"
          d="M60 18c-12 0-21 9-21 21 0 16 21 38 21 38s21-22 21-38c0-12-9-21-21-21z"
          strokeWidth="2.4"
        />
        <circle
          className="lux-line"
          cx="60"
          cy="39"
          r="7.5"
          fill="none"
          strokeWidth="2.2"
        />
        <g className="lux-line" strokeWidth="1.6" fill="none">
          <path d="M20 95 L30 95 L30 82 L40 82 L40 90 L50 90 L50 78 L58 78" />
          <path d="M62 78 L70 78 L70 88 L80 88 L80 80 L90 80 L90 92 L100 92" />
        </g>
        <line
          className="lux-line"
          x1="14"
          y1="100"
          x2="106"
          y2="100"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    title: "The Residence",
    text: "Sophisticated Living, Reimagined.",
    icon: (
      <svg
        viewBox="0 0 120 120"
        className="lux-animated-svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="lux-glow-b" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#8fdcff" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#8fdcff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8fdcff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          className="lux-aura"
          cx="60"
          cy="60"
          r="38"
          fill="url(#lux-glow-b)"
        />
        <g
          className="lux-line"
          fill="none"
          strokeWidth="2.2"
          strokeLinejoin="round"
        >
          <rect x="28" y="60" width="14" height="36" />
          <rect x="46" y="40" width="12" height="56" />
          <rect x="62" y="28" width="14" height="68" />
          <rect x="80" y="50" width="12" height="46" />
        </g>
        <path
          className="lux-trace"
          d="M28 96 L28 60 M46 96 L46 40 M62 96 L62 28 M80 96 L80 50"
          strokeWidth="2.2"
        />
        <line
          className="lux-line"
          x1="18"
          y1="96"
          x2="102"
          y2="96"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    title: "The Experience",
    text: "Every Day Feels Extraordinary.",
    icon: (
      <svg
        viewBox="0 0 120 120"
        className="lux-animated-svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="lux-glow-c" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8fdcff" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#8fdcff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8fdcff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          className="lux-aura"
          cx="60"
          cy="60"
          r="34"
          fill="url(#lux-glow-c)"
        />
        <path
          className="lux-line"
          d="M36 66 a24 24 0 0 1 48 0"
          fill="none"
          strokeWidth="2.4"
        />
        <g
          className="lux-rays lux-line"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <line x1="60" y1="22" x2="60" y2="32" />
          <line x1="32" y1="34" x2="38" y2="42" />
          <line x1="88" y1="34" x2="82" y2="42" />
          <line x1="22" y1="58" x2="32" y2="58" />
          <line x1="88" y1="58" x2="98" y2="58" />
        </g>
        <g className="lux-line" fill="none" strokeWidth="1.8">
          <path d="M22 78 q10 -6 20 0 t20 0 t20 0 t16 0" />
          <path d="M22 88 q10 -6 20 0 t20 0 t20 0 t16 0" />
          <path d="M22 98 q10 -6 20 0 t20 0 t20 0 t16 0" />
        </g>
        <path
          className="lux-trace"
          d="M22 88 q10 -6 20 0 t20 0 t20 0 t16 0"
          strokeWidth="2.2"
        />
      </svg>
    ),
  },
];

export default function LuxurySection() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const gridEl = rootRef.current?.querySelector(".lux-grid");
    const cardEls = rootRef.current?.querySelectorAll(".lux-card");

    if (!gridEl || !cardEls) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            cardEls.forEach((card) => card.classList.add("is-visible"));
          } else {
            cardEls.forEach((card) => card.classList.remove("is-visible"));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    io.observe(gridEl);
    return () => io.disconnect();
  }, []);

  return (
    <section className="lux-section" ref={rootRef}>
      <div className="lux-sticky-boundary">
        <div className="lux-header-sticky">
          <h2 className="lux-title">
            Where Timeless Elegance Meets Endless Horizons
          </h2>

          <div className="lux-diamond">
            <span></span>
            <i></i>
            <span></span>
          </div>

          <p className="lux-subtitle">
            In the heart of Kopar Khairane's most coveted corridor, 23 Malibu
            West is more than a residence — it is a destination of elevated
            living.
            <br />
            <br />
            Designed for those who appreciate the finer things in life, 23
            Malibu West seamlessly blends breathtaking vistas, refined
            architecture, and exceptional craftsmanship. Every space is
            thoughtfully created to inspire, offering a living experience that
            is both sophisticated and effortlessly luxurious.
          </p>
        </div>

        <div className="lux-grid">
          {cards.map(({ title, text, icon }, i) => (
            <div key={i} className="lux-card">
              <h3 className="lux-card-title">
                {title.split("\n").map((line, k) => (
                  <span key={k} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
              </h3>

              <p className="lux-card-text">{text}</p>

              <div className="lux-icon-wrap">{icon}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="lux-footer">
        Waterfront Residences <span>|</span> Timeless Design <span>|</span>{" "}
        Curated Living
      </div>

      <div className="lux-overlay-bottom"></div>
    </section>
  );
}
