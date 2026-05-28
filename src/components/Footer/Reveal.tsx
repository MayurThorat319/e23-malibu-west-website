"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -56 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 56 },
  visible: { opacity: 1, x: 0 },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

const blurIn = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 24 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

const MAP = {
  up: variants,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleUp,
  blur: blurIn,
};

// 1. Props ke liye rigid types define kiye
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale" | "blur"; // Limited options set kiye
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  animation?: "slide" | "flip";
  as?: keyof typeof motion; // Taaki sirf valid Framer Motion elements hi pass ho sakein (jaise 'div', 'section', etc.)
}

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.9,
  once = true,
  amount = 0.2,
  as = "div",
}: RevealProps) {
  // 2. Element type aur dynamic variants ko safe cast kiya
  const Component = (motion[as] || motion.div) as any;
  const variant = MAP[direction] || variants;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variant}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}