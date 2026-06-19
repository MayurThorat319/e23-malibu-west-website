"use client";

import Reveal from "./Reveal";
import { StaggerContainer, StaggerItem } from "./Stagger";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useEffect, useState } from "react";
// import { HouseHeart } from "lucide-react";
// import { Warp } from "@paper-design/shaders-react";

interface FooterColumn {
  title: string;
  links: string[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: ["About", "Contact"],
  },
  {
    title: "Resources",
    links: ["Privacy Policy", "Terms & Conditions"],
  },
];

export default function Footer() {
  const useIsTabletDown = () => {
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
      const mq = window.matchMedia("(max-width: 1024px)");

      const handler = (e: MediaQueryListEvent | MediaQueryList) => {
        setIsTablet("matches" in e ? e.matches : mq.matches);
      };

      handler(mq);
      mq.addEventListener("change", handler);

      return () => mq.removeEventListener("change", handler);
    }, []);

    return isTablet;
  };

  const isTabletDown = useIsTabletDown();
  return (
    <footer
      className={`${styles.footer} ${!isTabletDown ? styles.desktopGradient : ""
        }`}
      id="contact"
    >
      {/* {isTabletDown && (
    <div className={styles.warpBg}>
      <Warp
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        colors={["#8de7e7", "#2C6A74", "#5DA9B0", "#99d6d3"]}
        proportion={0.55}
        softness={0.9}
        distortion={0.15}
        swirl={0.75}
        swirlIterations={7}
        shape="checks"
        shapeScale={0.2}
        speed={1}
      />

      <div className={styles.bgOverlay} />
    </div>
  )} */}
      <div className={styles.waveTop} aria-hidden="true">
        {isTabletDown ? (
          <svg
            viewBox="0 0 1440 330"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Solid background that follows the top wave and hides the footer container edge */}
            <path
              d="
        M0 120 
        C250 260 650 250 980 110 
        C1180 20 1320 40 1440 130
        L1440 380
        L0 380
        Z
      "
              fill="none"
            />

            {/* Your original multi-line sea waves, now fully visible without cutting off */}
            <g
              fill="none"
              stroke="#99d6d3"
              strokeWidth="4"
            >
              <path d="M0 120 C250 260 650 250 980 110 C1180 20 1320 40 1440 130" />
              <path d="M0 135 C250 275 650 265 980 125 C1180 35 1320 55 1440 145" />
              <path d="M0 150 C250 290 650 280 980 140 C1180 50 1320 70 1440 160" />
              <path d="M0 165 C250 305 650 295 980 155 C1180 65 1320 85 1440 175" />
              <path d="M0 180 C250 320 650 310 980 170 C1180 80 1320 100 1440 190" />
              <path d="M0 195 C250 335 650 325 980 185 C1180 95 1320 115 1440 205" />
              <path d="M0 210 C250 350 650 340 980 200 C1180 110 1320 130 1440 220" />
              <path d="M0 225 C250 365 650 355 980 215 C1180 125 1320 145 1440 235" />
            </g>
          </svg>
        ) : (
          <svg
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="waveLineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.63)" />
              </linearGradient>

              <linearGradient id="waveFillGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(139, 247, 247, 0.56)" />
                <stop offset="100%" stopColor="rgba(22,55,66,0)" />
              </linearGradient>
            </defs>

            <path
              d="M0,80 C240,20 480,140 720,80 C960,20 1200,140 1440,80"
              fill="none"
              stroke="url(#waveLineGradient)"
              strokeWidth="1.5"
            />

            <path
              d="M0,95 C240,35 480,155 720,95 C960,35 1200,155 1440,95"
              fill="none"
              stroke="url(#waveLineGradient)"
              strokeOpacity="0.7"
              strokeWidth="1.2"
            />

            <path
              d="M0,110 C240,50 480,170 720,110 C960,50 1200,170 1440,110"
              fill="none"
              stroke="url(#waveLineGradient)"
              strokeOpacity="0.4"
              strokeWidth="1"
            />

            <path
              d="
    M0 170
    C300 250 600 90 1440 190
    L1440 220
    L0 220
    Z
  "
              fill="#0b3b41"
            />
          </svg>
        )}

      </div>

      <div className={styles.footercontainer}>
        <div className={styles.top}>
          <Reveal direction="up">
            <div className={styles.brand}>
              <img
                src="/images/Malibu_logo.webp"
                alt="Malibu West Logo"
                className={styles.logoImage}
                loading="lazy"
                decoding="async"
              />

              <p className={styles.tagline}>
                23 Malibu West is where luxury, connectivity, and modern living come together.              </p>
            </div>
          </Reveal>

          <StaggerContainer className={styles.columns}>
            {COLUMNS.map((col) => (
              <StaggerItem key={col.title}>
                <div className={styles.col}>
                  <div className={styles.twolineMar}>
                    {/* <div className={styles.lableIcon}>
                      <HouseHeart className={styles.lableDen} />
                    </div> */}
                    <h4 className={styles.colTitle}>{col.title}</h4>
                  </div>

                  <ul>
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}

            {/* LOCATION COLUMN */}
            <StaggerItem>
              <div className={styles.col}>
                <h4 className={styles.colTitle}>Location</h4>

                <div
                  className={styles.footerMap}
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/DoWusg6pdsduZQBt9",
                      "_blank",
                    )
                  }
                >
                  <iframe
                    src="https://www.google.com/maps?q=E.v+Homes+Vashi+Navi+Mumbai&z=15&output=embed"
                    loading="lazy"
                    title="Location Map"
                  />

                  <div className={styles.mapOverlay}>
                    <span>View Location</span>
                  </div>
                </div>

                {/* <div className={styles.addressContainer}>
                  <p>
                    2nd Floor, Office No A-212,
                    <br />
                    Vardhaman Chambers,
                    <br />
                    Plot No-84, Sector-17,
                    <br />
                    Vashi, Navi Mumbai 400703
                  </p>
                </div> */}
              </div>
            </StaggerItem>

            {/* LET'S CONNECT COLUMN */}
            <StaggerItem>
              <div className={styles.col}>
                <h4 className={styles.colTitle}>Let's Connect</h4>

                <p className={styles.contact}>
                  <a
                    href="https://www.evgroup.in/home.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    www.evgroup.in
                  </a>

                  <a
                    href="https://wa.me/918291668777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    +91 82916 68777
                  </a>
                </p>

                <div className={styles.socialWrapper}>
                  <div className={styles.socialGlass}></div>

                  <div className={styles.socialIcons}>
                    <a
                      href="https://www.facebook.com/evgindia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.socialIcon} ${styles.facebook}`}
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href="https://www.instagram.com/evhomesofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.socialIcon} ${styles.instagram}`}
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/ev-homes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.socialIcon} ${styles.linkedin}`}
                    >
                      <FaLinkedinIn />
                    </a>

                    <a
                      href="https://www.youtube.com/@evhomes3892"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.socialIcon} ${styles.youtube}`}
                    >
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* MAHARERA COLUMN */}
            <StaggerItem>
              <div className={styles.col}>
                <h4 className={styles.colTitle}>MAHARERA</h4>

                <div className={styles.qrContainer}>
                  <img
                    src="/images/malibu_qr.webp"
                    alt="MAHARERA QR Code"
                    className={styles.qrImage}
                    loading="lazy"
                    decoding="async"
                  />

                  <p className={styles.qrText}>MAHARERA <br/>Registration Number:</p>

                  <p className={styles.qrNumber}>P51700078094</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
        <Reveal direction="up" delay={0.1}>
          <div className={styles.bottom}>
            <span>
              © {new Date().getFullYear()} E V Group. All rights reserved.
            </span>

            {/* <div className={styles.legal}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div> */}
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
