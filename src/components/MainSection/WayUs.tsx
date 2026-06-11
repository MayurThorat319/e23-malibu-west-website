import BuildingReveal from "./buildingReveal";
import styles from "./WayUs.module.css";

const WayUsSection = () => {
  return (
    <section id="wayus" className={styles.wayusContainer}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.leftCol}>
            <div className={styles.welcomeTag}>
              <span className={styles.trackingWidest}>W E L C O M E</span>
              <div className={styles.welcomeLine}></div>
            </div>

            <h1 className={styles.mainHeading}>
              Home to a Life <br />
              <span className={styles.goldText}>
                {" "}
                Waterfront and the Skyline
              </span>
            </h1>

            <div className={styles.ornateDivider}>
              <span className={styles.diamond}>✦</span>
              <div className={styles.dividerLine}></div>
            </div>

            <p className={styles.description}>
              Where water meets skyline, life takes on a quieter kind of luxury.
              Mornings unfold with open horizons, evenings settle into golden
              reflections, and every space is designed to feel effortlessly
              elevated. A home that doesn’t just frame the view-but becomes part
              of it.
            </p>
          </div>
        </div>

        <div className={styles.waveContainer}>
          <svg
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
            className={styles.waveSvg}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
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

            <path
              fill="#102128"
              filter="url(#waveShadow)"
              d="M0,320 C250,520 650,520 950,260 C1180,60 1320,40 1440,120 L1440,0 L0,0 Z"
            />
            <path
              fill="none"
              stroke="url(#goldShimmer)"
              strokeWidth="4"
              strokeLinecap="round"
              d="M0,320 C250,520 650,520 950,260 C1180,60 1320,40 1440,120"
            />
            <path
              fill="none"
              stroke="url(#goldShimmer)"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.85"
              d="M0,290 C320,470 640,420 960,180 C1180,20 1330,10 1440,60"
            />
            <path
              fill="none"
              stroke="url(#goldShimmer)"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.55"
              d="M0,350 C300,580 760,600 1080,320 C1260,180 1360,170 1440,210"
            />
          </svg>
        </div>
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
