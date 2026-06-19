"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#amenities", label: "Amenities" },
  { href: "#layout", label: "Configuration" },
  { href: "#feedback", label: "Feedback" },
  { href: "#contact", label: "Contact" },
];

interface HeaderProps {
  onOpenDialog: () => void;
}

export default function Header({ onOpenDialog }: HeaderProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState(true);

  const lastScrollY = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }

      hideTimer.current = setTimeout(() => {
        if (window.scrollY > 120 && !menuOpen) {
          setShowHeader(false);
        }
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: showHeader ? 0 : -140,
        opacity: showHeader ? 1 : 0.9,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo}>
          <img
            className={styles.cardImg}
            src="/images/Malibu_logo.webp"
            alt="logo"
            loading="lazy"
  decoding="async"
          />
        </a>

        <nav className={styles.nav} aria-label="Main">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${scrolled ? styles.scrollNav : ""}`}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.6 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.button
          type="button"
          onClick={onOpenDialog}
          className={`${styles.cta} ${scrolled ? styles.ctascroll : ""}`}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Now
        </motion.button>

        <button
          type="button"
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className={styles.mobileNavLinks}>
                {LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={styles.mobileLink}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <button
                className={styles.mobileCta}
                onClick={() => {
                  setMenuOpen(false);
                  onOpenDialog();
                }}
              >
                Contact Now
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
