import "./EleganceHorizons.css";
import { useLucideDrawerAnimation } from "../hooks/use-lucide-drawer-animation";

const cards = [
  {
    title: "The Address",
    subtitle: "MOST DESIRED. PERFECTLY CONNECTED.",
    icon: (
      <svg viewBox="0 0 120 120" className="eh-svg" aria-hidden="true">
        <defs>
          <radialGradient id="eh-glow-a" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#8fdcff" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#8fdcff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8fdcff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          className="eh-aura"
          cx="60"
          cy="55"
          r="34"
          fill="url(#eh-glow-a)"
        />
        {/* pin */}
        <path
          className="eh-line"
          d="M60 18c-12 0-21 9-21 21 0 16 21 38 21 38s21-22 21-38c0-12-9-21-21-21z"
          fill="none"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          className="eh-trace"
          d="M60 18c-12 0-21 9-21 21 0 16 21 38 21 38s21-22 21-38c0-12-9-21-21-21z"
          strokeWidth="2.4"
        />
        <circle
          className="eh-line"
          cx="60"
          cy="39"
          r="7.5"
          fill="none"
          strokeWidth="2.2"
        />
        {/* skyline */}
        <g className="eh-line" strokeWidth="1.6" fill="none">
          <path d="M20 95 L30 95 L30 82 L40 82 L40 90 L50 90 L50 78 L58 78" />
          <path d="M62 78 L70 78 L70 88 L80 88 L80 80 L90 80 L90 92 L100 92" />
        </g>
        <line
          className="eh-line"
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
    subtitle: "SOPHISTICATED LIVING, REIMAGINED.",
    icon: (
      <svg viewBox="0 0 120 120" className="eh-svg" aria-hidden="true">
        <defs>
          <radialGradient id="eh-glow-b" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#8fdcff" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#8fdcff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8fdcff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          className="eh-aura"
          cx="60"
          cy="60"
          r="38"
          fill="url(#eh-glow-b)"
        />
        <g
          className="eh-line"
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
          className="eh-trace"
          d="M28 96 L28 60 M46 96 L46 40 M62 96 L62 28 M80 96 L80 50"
          strokeWidth="2.2"
        />
        <line
          className="eh-line"
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
    subtitle: "EVERY DAY FEELS EXTRAORDINARY.",
    icon: (
      <svg viewBox="0 0 120 120" className="eh-svg" aria-hidden="true">
        <defs>
          <radialGradient id="eh-glow-c" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8fdcff" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#8fdcff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8fdcff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          className="eh-aura"
          cx="60"
          cy="60"
          r="34"
          fill="url(#eh-glow-c)"
        />
        {/* sun */}
        <path
          className="eh-line"
          d="M36 66 a24 24 0 0 1 48 0"
          fill="none"
          strokeWidth="2.4"
        />
        {/* rays */}
        <g className="eh-rays eh-line" strokeWidth="2.2" strokeLinecap="round">
          <line x1="60" y1="22" x2="60" y2="32" />
          <line x1="32" y1="34" x2="38" y2="42" />
          <line x1="88" y1="34" x2="82" y2="42" />
          <line x1="22" y1="58" x2="32" y2="58" />
          <line x1="88" y1="58" x2="98" y2="58" />
        </g>
        {/* water */}
        <g className="eh-line" fill="none" strokeWidth="1.8">
          <path d="M22 78 q10 -6 20 0 t20 0 t20 0 t16 0" />
          <path d="M22 88 q10 -6 20 0 t20 0 t20 0 t16 0" />
          <path d="M22 98 q10 -6 20 0 t20 0 t20 0 t16 0" />
        </g>
        <path
          className="eh-trace"
          d="M22 88 q10 -6 20 0 t20 0 t20 0 t16 0"
          strokeWidth="2.2"
        />
      </svg>
    ),
  },
];

export default function EleganceHorizons() {
  const gridRef = useLucideDrawerAnimation<HTMLDivElement>();
  return (
    <section className="eh-section">
      <div className="eh-top">
        <div className="eh-scrollable-title-box">
          <h2 className="eh-title">
            Where Timeless
            <br />
            Elegance Meets
            <br />
            Endless Horizons
          </h2>

          <div className="eh-title-divider">
            <span></span>
            <div className="eh-diamond"></div>
            <span></span>
          </div>
        </div>

        <p className="eh-copy">
          In the heart of Kopar Khairane's most coveted corridor, 23 Malibu West
          is more than a residence — it is a destination of elevated living.
          <br />
          <br />
          This landmark address seamlessly blends panoramic water-inspired
          views, sophisticated architecture, and thoughtfully curated lifestyle
          experiences. From expansive wrap-around decks and designer interiors
          to breathtaking skyline vistas, every detail is crafted to embody
          timeless elegance and modern refinement. Here, every sunrise inspires,
          every space rejuvenates, and every moment reflects a life reserved for
          the exceptional.
        </p>
      </div>
      <div className="eh-grid" ref={gridRef}>
        {cards.map((c) => (
          <article key={c.title} className="eh-card">
            <div className="eh-icon-wrap">{c.icon}</div>
            <h3 className="eh-card-title">{c.title}</h3>
            <p className="eh-card-sub">{c.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
