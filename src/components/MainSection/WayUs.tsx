import BuildingReveal from "./buildingReveal";
import styles from "./WayUs.module.css";

const WayUsSection = () => {
  return (
    <section id="wayus" className={styles.wayusContainer}>
      <div className={styles.container}>
        <div className={styles.horizontalwrap}>
          {/* <div className={styles.pillwrap}> */}
          {/* <div className={styles.pilldot}></div> */}
          {/* <div className={styles.pilltext}>Why us?</div> */}
        </div>
        {/* <p className={styles.paragpaph}>
                        At Solflare, we believe finding a home is more than a transaction — it’s a life-changing experience. Our team of passionate local experts is dedicated to guiding you through every step, from the first search to the final handshake. With deep market knowledge, honest advice, and a commitment to your goals, we make the journey to your new home smooth, transparent, and even enjoyable.
                    </p> */}
        {/* </div> */}

        {/* --- ADVANCED LAYERED WAVE --- */}
        <div className={styles.waveContainer}>
          <svg
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
            className={styles.waveSvg}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Creates the fading shimmer effect for the gold lines */}
              <linearGradient
                id="goldShimmer"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#cca25d" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#cca25d" stopOpacity="1" />
                <stop offset="100%" stopColor="#cca25d" stopOpacity="0.1" />
              </linearGradient>

              {/* Creates the deep 3D drop shadow casting onto the building */}
              <filter
                id="waveShadow"
                x="-10%"
                y="-10%"
                width="120%"
                height="150%"
              >
                <feDropShadow
                  dx="0"
                  dy="25"
                  stdDeviation="20"
                  floodColor="#000000"
                  floodOpacity="0.65"
                />
              </filter>
            </defs>

            {/* 1. Main Background Shape with Shadow */}
          {/* Main Big Curved Wave */}
<path
    fill="#285260"
    filter="url(#waveShadow)"
    d="
      M0,320
      C250,520 650,520 950,260
      C1180,60 1320,40 1440,120
      L1440,0
      L0,0
      Z
    "
/>

{/* Primary Thick Gold Edge */}
<path 
    fill="none" 
    stroke="url(#goldShimmer)" 
    strokeWidth="4"
    strokeLinecap="round"
    d="
      M0,320
      C250,520 650,520 950,260
      C1180,60 1320,40 1440,120
    "
/>

{/* Upper Sweeping Accent */}
<path 
    fill="none" 
    stroke="url(#goldShimmer)" 
    strokeWidth="1.5"
    strokeLinecap="round"
    opacity="0.85"
    d="
      M0,290
      C320,470 640,420 960,180
      C1180,20 1330,10 1440,60
    "
/>

{/* Lower Sweeping Accent */}
<path 
    fill="none" 
    stroke="url(#goldShimmer)" 
    strokeWidth="1.5"
    strokeLinecap="round"
    opacity="0.55"
    d="
      M0,350
      C300,580 760,600 1080,320
      C1260,180 1360,170 1440,210
    "
/>
          </svg>
        </div>
        {/* --------------------------- */}
      </div>

      <div className={styles.revealWrapper}>
        <div className={styles.videoOverlay}>
          <BuildingReveal />
        </div>
      </div>
      <div className={styles.scroll} />
    </section>
  );
};

export default WayUsSection;
