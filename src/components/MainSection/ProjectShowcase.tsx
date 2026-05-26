"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import "./ProjectShowcase.css";

interface Project {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "EV10 Marina Bay",
    description: "Luxury waterfront residences designed with modern architecture and premium amenities.",
    year: "2020",
    link: "#",
    image: "images/marina.webp",
  },
  {
    title: "EV9 Square",
    description: "Contemporary commercial and lifestyle destination crafted for urban living experiences.",
    year: "2024",
    link: "#",
    image: "images/ninesquare.webp",
  },
  {
    title: "EV23 Malibu West",
    description: "Elegant residential development blending spacious interiors with sophisticated design.",
    year: "2025",
    link: "#",
    image: "images/malibuwest.webp",
  },
  {
    title: "EV Solaris",
    description: "Futuristic high-rise project focused on sustainability, comfort, and smart living.",
    year: "2026",
    link: "#",
    image: "images/solaris.webp",
  },
];

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (s: number, e: number, f: number) => s + (e - s) * f;
    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseEnter = (i: number) => {
    setHoveredIndex(i);
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

  const rect = containerRef.current?.getBoundingClientRect();

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="ps-section"
    >
      <h2 className="ps-heading">Selected Work</h2>

      <div
        className="ps-preview"
        style={{
          left: rect?.left ?? 0,
          top: rect?.top ?? 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="ps-preview-inner">
          {projects.map((p, i) => (
            <img
              key={p.title}
              src={p.image}
              alt={p.title}
              className="ps-preview-img"
              style={{
  opacity: hoveredIndex === i ? 1 : 0,
  transform: hoveredIndex === i ? "scale(1)" : "scale(1.05)",
  filter: hoveredIndex === i ? "brightness(1)" : "brightness(0.7)",
}}
            />
          ))}
          <div className="ps-preview-overlay" />
        </div>
      </div>

      <div className="ps-list">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="ps-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="ps-item-inner">
              <div
                className="ps-item-bg"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform: hoveredIndex === index ? "scale(1)" : "scale(0.95)",
                }}
              />
              <div className="ps-item-row">
                <div className="ps-item-main">
                  <div className="ps-title-wrap">
                    <h3 className="ps-title">
                      <span className="ps-title-text">
                        {project.title}
                        <span
                          className="ps-underline"
                          style={{ width: hoveredIndex === index ? "100%" : "0" }}
                        />
                      </span>
                    </h3>
                    <ArrowUpRight
                      className="ps-arrow"
                      style={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        transform:
                          hoveredIndex === index
                            ? "translate(0,0)"
                            : "translate(-8px,8px)",
                      }}
                    />
                  </div>
                  <p className="ps-desc">{project.description}</p>
                </div>
                <span className="ps-year">{project.year}</span>
              </div>
            </div>
          </a>
        ))}
        <div className="ps-divider" />
      </div>
    </section>
  );
}
