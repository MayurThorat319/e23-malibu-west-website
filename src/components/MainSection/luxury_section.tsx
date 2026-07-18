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
          <linearGradient
            id="luxStrokeGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#162f37" />
            <stop offset="30%" stopColor="#2f7078" />
            <stop offset="70%" stopColor="#4a7989" />
            <stop offset="100%" stopColor="#6eb3bb" />
          </linearGradient>
        </defs>
        <circle
          pathLength={1}
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
          pathLength={1}
        />
        <path
          className="lux-trace"
          d="M60 18c-12 0-21 9-21 21 0 16 21 38 21 38s21-22 21-38c0-12-9-21-21-21z"
          strokeWidth="2.4"
          pathLength={1}
        />
        <circle
          pathLength={1}
          className="lux-line"
          cx="60"
          cy="39"
          r="7.5"
          fill="none"
          strokeWidth="2.2"
        />
        <g className="lux-line" strokeWidth="1.6" fill="none">
          <path
            pathLength={1}
            d="M20 95 L30 95 L30 82 L40 82 L40 90 L50 90 L50 78 L58 78"
          />
          <path
            pathLength={1}
            d="M62 78 L70 78 L70 88 L80 88 L80 80 L90 80 L90 92 L100 92"
          />
        </g>
        <line
          pathLength={1}
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
          <linearGradient
            id="luxStrokeGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#162f37" />
            <stop offset="30%" stopColor="#2f7078" />
            <stop offset="70%" stopColor="#4a7989" />
            <stop offset="100%" stopColor="#6eb3bb" />
          </linearGradient>
        </defs>
        <circle
          pathLength={1}
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
          <path pathLength="1" d="M28 96 V60 H42 V96 Z" />
          <path pathLength="1" d="M46 96 V40 H58 V96 Z" />
          <path pathLength="1" d="M62 96 V28 H76 V96 Z" />
          <path pathLength="1" d="M80 96 V50 H92 V96 Z" />
        </g>
        <path
          pathLength={1}
          className="lux-trace"
          d="M28 96 L28 60 M46 96 L46 40 M62 96 L62 28 M80 96 L80 50"
          strokeWidth="2.2"
        />
        <line
          pathLength={1}
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
          <linearGradient
            id="luxStrokeGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#162f37" />
            <stop offset="30%" stopColor="#2f7078" />
            <stop offset="70%" stopColor="#4a7989" />
            <stop offset="100%" stopColor="#6eb3bb" />
          </linearGradient>
        </defs>
        <circle
          pathLength={1}
          className="lux-aura"
          cx="60"
          cy="60"
          r="34"
          fill="url(#lux-glow-c)"
        />
        <path
          pathLength={1}
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
          <line pathLength={1} x1="60" y1="22" x2="60" y2="32" />
          <line pathLength={1} x1="32" y1="34" x2="38" y2="42" />
          <line pathLength={1} x1="88" y1="34" x2="82" y2="42" />
          <line pathLength={1} x1="22" y1="58" x2="32" y2="58" />
          <line pathLength={1} x1="88" y1="58" x2="98" y2="58" />
        </g>
        <g className="lux-line" fill="none" strokeWidth="1.8">
          <path pathLength={1} d="M22 78 q10 -6 20 0 t20 0 t20 0 t16 0" />
          <path pathLength={1} d="M22 88 q10 -6 20 0 t20 0 t20 0 t16 0" />
          <path pathLength={1} d="M22 98 q10 -6 20 0 t20 0 t20 0 t16 0" />
        </g>
        <path
          pathLength={1}
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