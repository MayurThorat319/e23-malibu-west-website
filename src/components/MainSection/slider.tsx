"use client";

import { useEffect, useRef, useState } from "react";
import "./slider.css";
import {
  FaBed,
  FaBuilding,
  FaCity,
  FaMapMarkerAlt,
  FaUtensils,
} from "react-icons/fa";

interface Slide {
  id: number;
  title: string;
  heading: string;
  description: string;
  image: string;
  bottomTitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Luxury 2BHK",
    heading: "Luxury 2BHK",
    description:
      "Experience elevated living with breathtaking views, modern design, and world class amenities.",
    image: "images/slider-1.jpg",
    bottomTitle: "The Sagar Ratna",
  },
  {
    id: 2,
    title: "Luxury 3BHK",
    heading: "Luxury 3BHK",
    description:
      "Experience elevated living with breathtaking views, modern design, and world class amenities.",
    image: "images/slider-2.jpg",
    bottomTitle: "The Sagar Nivas",
  },
  {
    id: 3,
    title: "Luxury 4BHK",
    heading: "Luxury 4BHK",
    description:
      "Experience elevated living with breathtaking views, modern design, and world class amenities.",
    image: "images/slider-3.jpg",
    bottomTitle: "The Anant Sagar",
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
            <div className="detail-left">
              <div className="premium-badge">✦ PREMIUM RESIDENCE</div>

              <h1 className="detail-heading">{activeSlide.heading}</h1>

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
                    <FaCity />
                  </div>
                  <p className="feature-des">Stunning Cityscape Views</p>
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
                  <h2 className="price-number">₹2.35* CR</h2>
                  <p className="tc-text">T&C APPLY</p>
                </div>

                <div className="price-divider" />

                <div className="price-mini">
                  <div className="mini-icon">
                    <FaBed />
                  </div>

                  <div>
                    <h4>2</h4>
                    <span>BEDROOMS</span>
                  </div>
                </div>

                <div className="price-divider" />

                <div className="price-mini">
                  <div className="mini-icon">
                    <FaBuilding />
                  </div>

                  <div>
                    <h4>1</h4>
                    <span>WASHROOM</span>
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="detail-buttons">
                <button className="gold-btn">
                  {" "}
                  <FaMapMarkerAlt /> Schedule a Site Visit
                </button>

                <button className="outline-btn">
                  {" "}
                  <FaBuilding /> View Floor Plan
                </button>
              </div>
            </div>

            {/* RIGHT SMALL IMAGES */}
            <div className="detail-right">
              <div className="mini-card">
                <img src="images/slider-2.jpg" alt="" />
                <div className="mini-overlay" />
                <p>Master Bedroom</p>
              </div>

              <div className="mini-card">
                <img src="images/slider-1.jpg" alt="" />
                <div className="mini-overlay" />
                <p>Premium Bathroom</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
