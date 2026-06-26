import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import "./luxury_section.css";

interface CardItem {
  title: string;
  text: string;
  animationPath: string;
}

const cards: CardItem[] = [
  {
    title: "The Address",
    text: "Most Desired. Perfectly Connected.",
    animationPath: "/assets/earth.json",
  },
  {
    title: "The Residence",
    text: "Sophisticated Living, Reimagined.",
    animationPath: "/assets/Buildings.json",
  },
  {
    title: "The Experience",
    text: "Every Day Feels Extraordinary.",
    animationPath: "/assets/Beach.json",
  },
];

export default function LuxurySection() {
  return (
    <section className="lux-section">
      <div className="lux-grid">
        {cards.map((card, index) => (
          <LottieCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
}

function LottieCard({ card }: { card: CardItem }) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(card.animationPath)
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded:", card.animationPath);
        setAnimationData(data);
      })
      .catch((err) => {
        console.error("JSON Load Error:", err);
      });
  }, [card.animationPath]);

  return (
    <div className="lux-card">
      <h3 className="lux-card-title">{card.title}</h3>
      <p className="lux-card-text">{card.text}</p>

      <div className="lux-lottie-wrap">
        {animationData && (
          <LottiePlayer animationData={animationData} />
        )}
      </div>
    </div>
  );
}

function LottiePlayer({
  animationData,
}: {
  animationData: any;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => {
      animation.destroy();
    };
  }, [animationData]);

  return (
    <div
      ref={containerRef}
      className="lux-lottie"
      style={{
        width: "180px",
        height: "180px",
        margin: "0 auto",
      }}
    />
  );
}