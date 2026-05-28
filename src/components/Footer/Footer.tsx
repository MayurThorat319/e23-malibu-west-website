"use client";

import Reveal from "./Reveal";
import { StaggerContainer, StaggerItem } from "./Stagger";
import styles from "./Footer.module.css";

interface FooterColumn {
  title: string;
  links: string[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: "Services",
    links: ["UI/UX Design", "3D & Motion", "Digital Marketing", "Branding"],
  },
  {
    title: "Company",
    links: ["About", "Work", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Insights", "Case Studies", "Privacy", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.waveTop} aria-hidden="true">
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
    d="M0,120 
       C240,60 480,180 720,120 
       C960,60 1200,180 1440,120 
       L1440,160 
       L0,160 Z"
    fill="url(#waveFillGradient)"
  />
</svg>
</div>

      <div className="container">
        <div className={styles.top}>
          <Reveal direction="up">
            <div className={styles.brand}>
              <img
  src="/images/Malibu_logo.png"
  alt="Malibu West Logo"
  className={styles.logoImage}
/>
              {/* <span className={styles.logoText}>MALIBU WEST</span> */}

              <p className={styles.tagline}>
                Designing experiences. Building brands that endure.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className={styles.columns}>
            {COLUMNS.map((col) => (
              <StaggerItem key={col.title}>
                <div className={styles.col}>
                  <h4 className={styles.colTitle}>{col.title}</h4>

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

                <div className={styles.social}>
                  <a
                    href="https://www.facebook.com/evgindia"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    fb
                  </a>

                  <a
                    href="https://www.instagram.com/evhomesofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    ig
                  </a>

                  <a
                    href="https://www.linkedin.com/company/ev-homes"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>

                  <a
                    href="https://www.youtube.com/@evhomes3892"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    yt
                  </a>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <div className="divider" />

        <Reveal direction="up" delay={0.1}>
          <div className={styles.bottom}>
            <span>
              © {new Date().getFullYear()} E V Group. All rights reserved.
            </span>

            <div className={styles.legal}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}