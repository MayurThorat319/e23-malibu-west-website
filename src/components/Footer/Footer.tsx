"use client";

import Reveal from "./Reveal";
import { StaggerContainer, StaggerItem } from "./Stagger";
import styles from "./Footer.module.css";

// 1. Column item ke liye interface banaya
interface FooterColumn {
  title: string;
  links: string[];
}

// 2. COLUMNS array ko explicitly typed kiya
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
      <div className="container">
        <div className={styles.top}>
          <Reveal direction="up">
            <div className={styles.brand}>
              <span className={styles.logoMark}>M</span>
              <span className={styles.logoText}>MALIBU WEST</span>
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
                <h4 className={styles.colTitle}>Let&apos;s Connect</h4>
                <p className={styles.contact}>
                  hello@aviora.studio
                  <br />
                  +1 (555) 012-3456
                </p>
                <div className={styles.social}>
                  {["In", "X", "Ig", "Li"].map((s) => (
                    <a key={s} href="#" aria-label={s}>
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <div className="divider" />
        <Reveal direction="up" delay={0.1}>
          <div className={styles.bottom}>
            <span>© {new Date().getFullYear()} AVIORA. All rights reserved.</span>
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