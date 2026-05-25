"use client";

import { useEffect, useRef, useState } from "react";
import "./slider.css";

interface Slide {
  id: number;
  title: string;
  heading: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "OCEAN FOUNDATION",
    heading: "SAVE THE SEA",
    description:
      "Together we can protect our oceans and marine ecosystems for future generations.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "VOICES FOR OUR SEAS",
    heading: "PROTECT MARINE LIFE",
    description:
      "Every action matters in preserving the beauty and biodiversity of our oceans.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "OUR WORLD",
    heading: "CLEANER OCEANS",
    description:
      "Support conservation efforts and create a cleaner future for the planet.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
  },
];

type Rect = { top: number; left: number; width: number; height: number };

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState<Slide | null>(null);
  const [originRect, setOriginRect] = useState<Rect | null>(null);
  const [detailState, setDetailState] = useState<"closed" | "opening" | "open" | "closing">(
    "closed"
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  /* AUTO SLIDE */
  useEffect(() => {
    if (detailState !== "closed") return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [detailState]);

  /* OPEN DETAIL — capture clicked card rect, then expand to fullscreen */
  const handleOpen = (slide: Slide) => {
    const el = cardRefs.current[slide.id];
    if (!el) return;
    const r = el.getBoundingClientRect();
    setOriginRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    setActiveSlide(slide);
    setDetailState("opening");
    // Next frame -> trigger transition to fullscreen
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setDetailState("open"));
    });
  };

  /* CLOSE DETAIL — animate back to the originating card */
  const handleClose = () => {
    if (!activeSlide) return;
    const el = cardRefs.current[activeSlide.id];
    if (el) {
      const r = el.getBoundingClientRect();
      setOriginRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    }
    setDetailState("closing");
    setTimeout(() => {
      setActiveSlide(null);
      setOriginRect(null);
      setDetailState("closed");
    }, 800);
  };

  const detailStyle: React.CSSProperties =
    detailState === "opening" || detailState === "closing"
      ? originRect
        ? {
            top: originRect.top,
            left: originRect.left,
            width: originRect.width,
            height: originRect.height,
          }
        : {}
      : { top: 0, left: 0, width: "100%", height: "100%" };

  return (
    <>
      <section className="ocean-slider">
        <div className="slider-top-text">
          TOGETHER, WE CAN SAVE OUR PLANET'S FUTURE
        </div>

        {/* SLIDER */}
        <div className="cards-wrapper">
          {slides.map((slide, index) => {
            const position =
              (index - currentIndex + slides.length) % slides.length;
            const isActiveSource =
              activeSlide?.id === slide.id && detailState !== "closed";
            return (
              <div
                key={slide.id}
                ref={(el) => {
                  cardRefs.current[slide.id] = el;
                }}
                className={`
                  ocean-card
                  ${position === 1 ? "main-card" : "side-card"}
                  ${isActiveSource ? "source-card" : ""}
                `}
                onClick={() => handleOpen(slide)}
              >
                <img src={slide.image} alt={slide.title} />
                <div className="overlay" />
                <div className="card-content">
                  <div className="vertical-text">{slide.title}</div>
                  {position === 1 && (
                    <div className="bottom-title">VOICES FOR OUR SEAS</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${
                (currentIndex + 1) % slides.length === index ? "active-dot" : ""
              }`}
              onClick={() =>
                setCurrentIndex(index === 0 ? slides.length - 1 : index - 1)
              }
            />
          ))}
        </div>
      </section>

      {/* DETAIL PAGE — shared element morph */}
      {activeSlide && (
        <div
          className={`detail-page detail-${detailState}`}
          style={detailStyle}
        >
          <img
            src={activeSlide.image}
            alt={activeSlide.heading}
            className="detail-bg"
          />
          <div className="detail-overlay" />

          <button className="close-btn" onClick={handleClose}>
            ✕
          </button>

          <div className="detail-content">
            <p className="small-text">
              TOGETHER, WE CAN SAVE OUR PLANET'S FUTURE
            </p>
            <h1>{activeSlide.heading}</h1>
            <div className="line" />
            <div className="detail-description">
              <h3>{activeSlide.title}</h3>
              <p>{activeSlide.description}</p>
            </div>
            <div className="footer-text">VOICES FOR OUR SEAS</div>
          </div>
        </div>
      )}
    </>
  );
}
