"use client";

import React, { useRef } from "react";
import { ArrowRight, Home, Sparkles, Leaf } from "lucide-react";
import { useInView } from "framer-motion";
import Counter from "../counter-anim/Counter";
import "./Aboutev.css";

const features = [
  { icon: Home, label: "Timeless\nDesign" },
  { icon: Sparkles, label: "Quality\nCraftsmanship" },
  { icon: Leaf, label: "Sustainable\nLiving" },
];

const stats = [
  { value: "40+", label: "Years of Trust" },
  { value: "500+", label: "Homes Delivered" },
  { value: "100%", label: "Happy Families" },
];

export default function AboutEVHomes() {
  const statsRef = useRef(null);

  const isInView = useInView(statsRef, {
    amount: 0.5,
    once: false,
  });

  return (
    <section className="ev-about">
      <img
        src="/images/aboutbg.png"
        alt="EV Homes luxury residential tower at night"
        className="ev-about__bg"
      />

      <div className="ev-about__overlay" />

      <div className="ev-about__inner">
        <div className="ev-about__content">
          <div className="ev-about__about-row">
            <span className="ev-about__rule" />
            <span className="ev-about__about-text">ABOUT US</span>
          </div>

          <h2 className="ev-about__title">
            <span className="ev-about__title-ev">
              EV
              <img
                src="/images/evlineslogo.png"
                alt=""
                className="ev-about__stripes-img"
                aria-hidden="true"
              />
            </span>

            <span className="ev-about__title-homes">Homes</span>
          </h2>

          <p className="ev-about__lede">
            For over 30 years, EV Homes has been delivering world-class homes
            that blend innovation, quality craftsmanship, and a lifestyle beyond
            compare.
          </p>

          <ul className="ev-about__features">
            {features.map(({ icon: Icon, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <span className="ev-about__feature-icon">
                    <Icon strokeWidth={1.5} />
                  </span>

                  <span className="ev-about__feature-label">
                    {label}
                  </span>
                </li>

                {index < features.length - 1 && (
                  <span className="ev-about__feature-divider" />
                )}
              </React.Fragment>
            ))}
          </ul>

          <button
            type="button"
            className="ev-about__cta"
            onClick={() => {
              window.open("https://evhomes.tech", "_blank");
            }}
          >
            <span>EXPLORE PROJECTS</span>
            <ArrowRight strokeWidth={2} />
          </button>
        </div>

        <aside
          className="ev-about__stats"
          aria-label="EV Homes track record"
          ref={statsRef}
        >
          {stats.map((s, i) => {
            const numericValue = parseInt(String(s.value));

            const suffix = String(s.value).replace(
              String(numericValue),
              ""
            );

            return (
              <div key={s.label} className="ev-about__stat">
                <div className="ev-about__stat-value counter-wrapper">
                  <Counter
                    value={isInView ? numericValue : 0}
                    fontSize={58}
                    textColor="#6fd3d8"
                    fontWeight={500}
                  />

                  <span className="counter-symbol">
                    {suffix}
                  </span>
                </div>

                <div className="ev-about__stat-label">
                  {s.label}
                </div>

                {i < stats.length - 1 && (
                  <span className="ev-about__stat-divider" />
                )}
              </div>
            );
          })}
        </aside>
      </div>
    </section>
  );
}