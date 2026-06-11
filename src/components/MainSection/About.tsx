import { useEffect, useRef, useState } from "react";
import "./AboutSection.css";
import { motion } from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`dm-root ${isIntersecting ? "start-animation" : ""}`}
    >
      <header className="dm-header">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.4,
          }}
        >
          <div className="dm-tagline-row">
            <span className="dm-rule" />
            <p className="dm-tagline">WAKE UP TO KOPAR KHAIRANE'S FINEST</p>
            <span className="dm-rule" />
          </div>
          <p className="dm-sub">
            An extraordinary waterfront address crafted for those who seek
            uninterrupted views, exceptional design, and a life defined by
            distinction.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.4,
          }}
        >
          <div className="no-destiop">
            <h2 className="dm-heading">
              Kopar Khairane's First Iconic
              <br />
              <span className="dm-heading-accent">
                {" "}
                Malibu Waterfront Living.
              </span>
            </h2>
          </div>
        </motion.div>
      </header>

      <section className="dm-section">
        <div className="dm-text">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.4,
            }}
          >
            <div className="no_mobile">
              <span className="dm-eyebrow">
                <span className="dm-eyebrow-mark">✦</span>Kopar Khairane's
              </span>
              <h2 className="dm-heading">
                First Iconic
                <br />
                <span className="dm-heading-accent">
                  {" "}
                  Malibu Waterfront Living.
                </span>
              </h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.4,
            }}
          >
            <p className="dm-body">
              Experience a world where shimmering waters, breathtaking sunsets,
              and elevated luxury come together to create a life beyond
              expectation.{" "}
              <span style={{ color: "#1c9696", fontWeight: "600" }}>
                Live Above It All.
              </span>
            </p>
          </motion.div>

          <div className="dm-features-row dm-desktop-only">
            <motion.div
              className="dm-feature-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.4,
              }}
            >
              <div className="dm-feature-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <path d="M6 18V4h12v14" />
                  <path d="M10 21v-3" />
                  <path d="M14 21v-3" />
                  <path d="M2 21h20" />
                  <path d="M2 24s2-1 5-1 5 1 10 1 5-1 5-1" />
                </svg>
              </div>
              <span className="dm-feature-label">
                SEA-FACING
                <br />
                RESIDENCES
              </span>
            </motion.div>

            <span className="dm-feature-divider"></span>
            <motion.div
              className="dm-feature-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.4,
              }}
            >
              <div className="dm-feature-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
                  <path d="M2 9h20" />
                  <path d="M12 21l4-12" />
                  <path d="M12 21l-4-12" />
                </svg>
              </div>
              <span className="dm-feature-label">
                CURATED
                <br />
                LUXURY
              </span>
            </motion.div>
            <span className="dm-feature-divider"></span>
            <motion.div
              className="dm-feature-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.4,
              }}
            >
              <div className="dm-feature-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <path d="M12 22v-9" />
                  <path d="M12 13C8 13 5 10 5 6c4 0 7 3 7 7z" />
                  <path d="M12 13c4 0 7-3 7-7-4 0-7 3-7 7z" />
                  <path d="M7 22h10l1-5H6z" />
                </svg>
              </div>
              <span className="dm-feature-label">
                EXCEPTIONAL
                <br />
                AMENITIES
              </span>
            </motion.div>

            <span className="dm-feature-divider"></span>
            <motion.div
              className="dm-feature-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.4,
              }}
            >
              <div className="dm-feature-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <rect x="3" y="3" width="18" height="18" />
                  <path d="M12 3v18" />
                  <path d="M3 12h18" />
                  <rect x="6" y="6" width="12" height="12" />
                </svg>
              </div>
              <span className="dm-feature-label">
                TIMELESS
                <br />
                DESIGN
              </span>
            </motion.div>
          </div>
          <motion.div
            className="dm-feature-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.4,
            }}
          >
            <a className="dm-cta" href="#">
              EXPLORE ALL PROPERTIES <span className="dm-cta-arrow">→</span>
            </a>
          </motion.div>
        </div>

        <div className="dm-image-wrap dm-hero-image">
          <img
            src="/images/aboutImage.png"
            alt="10 Marina Bay - Garden View"
            className="dm-hero-img"
          />
        </div>
      </section>
    </div>
  );
}
