"use client";

import { useEffect, useRef, useState } from "react";
import "./slider.css";
import {
  FaBath,
  FaBed,
  FaBuilding,
  FaMapMarkerAlt,
  FaUtensils,
  FaWater,
} from "react-icons/fa";
import EnquiryDialog from "../Form/form";

interface Slide {
  id: number;
  title: string;
  heading: string;
  description: string;
  image: string;
  bottomTitle: string;

  price: string;
  bedrooms: number;
  bathrooms: number;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "LUXURY 2BHK",
    heading: "LUXURY 2BHK",
    description:
      "Experience elevated living with breathtaking views, modern design and world class amenities.",
    image: "images/slider-1.jpg",
    bottomTitle: "The Sagar Ratna",

    price: "₹2.10",
    bedrooms: 2,
    bathrooms: 2,
  },

  {
    id: 2,
    title: "LUXURY 3BHK",
    heading: "LUXURY 3BHK",
    description:
      "Experience elevated living with breathtaking views, modern design and world class amenities.",
    image: "images/slider-2.jpg",
    bottomTitle: "The Sagar Nivas",

    price: "₹2.45",
    bedrooms: 3,
    bathrooms: 3,
  },

  {
    id: 3,
    title: "LUXURY 3BHK",
    heading: "LUXURY 3BHK",
    description:
      "Experience elevated living with breathtaking views, modern design and world class amenities.",
    image: "images/slider-3.jpg",
    bottomTitle: "The Anant Sagar",

    price: "₹2.67",
    bedrooms: 3,
    bathrooms: 3,
  },
];

type Rect = { top: number; left: number; width: number; height: number };

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState<Slide | null>(null);
  const [originRect, setOriginRect] = useState<Rect | null>(null);
  const [detailState, setDetailState] = useState<
    "closed" | "opening" | "open" | "closing"
  >("closed");
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [isFormOpen, setIsFormOpen] = useState(false);

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
    setOriginRect({
      top: r.top,
      left: r.left,
      width: r.width,
      height: r.height,
    });
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
      setOriginRect({
        top: r.top,
        left: r.left,
        width: r.width,
        height: r.height,
      });
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
      <section className="ocean-slider" id="layout">
        {/* NEW DESIGN HEADER */}
        <div className="slider-header-container">
          <div className="slider-header-left">
            <span className="slider-pretitle">CONFIGURATIONS</span>
            <h1 className="slider-main-title">
              Elevated living. <span>Thoughtfully designed.</span>
            </h1>
            <div className="slider-gold-line" />
            <p className="slider-subtitle">
              Discover timeless spaces crafted for comfort, elegance, and modern
              lifestyles.
            </p>
          </div>
        </div>

        {/* SLIDER */}
        <div className="cards-wrapper">
          {slides.map((slide, index) => {
            const position =
              (index - currentIndex + 1 + slides.length) % slides.length;
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
                <div className="card-hover">
                  <div className="hover-line" />
                  <div className="hover-content">
                    <span>VIEW</span>
                    <div className="hover-arrow">↗</div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="vertical-text">{slide.title}</div>
                  {position === 1 && (
                    <div className="bottom-title">{slide.bottomTitle}</div>
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
              className={`dot ${currentIndex === index ? "active-dot" : ""}`}
              onClick={() => setCurrentIndex(index)}
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
            <div className="detail-left">
              <div className="premium-badge">✦ PREMIUM RESIDENCE</div>

              <h1 className="detail-heading">{activeSlide.heading}</h1>

              <h2 className="detail-subtitle">{activeSlide.bottomTitle}</h2>

              <div className="gold-line" />

              <div className="detail-description">
                <p>{activeSlide.description}</p>
              </div>

              {/* FEATURES */}
              <div className="feature-grid">
                <div className="feature-card">
                  <div className="feature-icon">
                    <FaBuilding />
                  </div>
                  <p className="feature-des">Expansive Balcony</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    <FaWater />
                  </div>
                  <p className="feature-des">Sea Facing Views</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    <FaUtensils />
                  </div>
                  <p className="feature-des">Spacious Living & Dining</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    <FaBed />
                  </div>
                  <p className="feature-des">King-Sized Bedrooms</p>
                </div>
              </div>
              {/* PRICE BOX */}
              <div className="price-box">
                <div className="price-left">
                  <span className="price-label">STARTING AT</span>
                  <h2 className="price-number">
                    {activeSlide.price} <span>CR</span>
                  </h2>
                  <p className="tc-text">T&C APPLY</p>
                </div>

                <div className="price-divider" />

                <div className="price-mini">
                  <div className="price-top">
                    <div className="mini-icon">
                      <FaBed />
                    </div>

                    <h4>{activeSlide.bedrooms}</h4>
                  </div>

                  <span>BEDROOMS</span>
                </div>

                <div className="price-divider" />

                <div className="price-mini">
                  <div className="price-top">
                    <div className="mini-icon">
                      <FaBath />
                    </div>

                    <h4>{activeSlide.bathrooms}</h4>
                  </div>

                  <span>WASHROOM</span>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="detail-buttons">
                <button
                  className="gold-btn"
                  onClick={() => setIsFormOpen(true)}
                >
                  <FaMapMarkerAlt /> Book a Site Visit
                </button>

                <button
                  className="outline-btn"
                  onClick={() => setIsFormOpen(true)}
                >
                  <FaBuilding /> View Floor Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <EnquiryDialog isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
