"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { type CSSProperties, useEffect } from "react";
import "./Counter.css";

interface NumberProps {
  mv: any;
  number: number;
}

function Number({ mv, number }: NumberProps) {
  // 1. We no longer need the 'height' prop because we will use 'em' sizing.
  const y = useTransform(mv, (latest: number) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;

    let memo = offset;
    if (offset > 5) {
      memo -= 10;
    }
    // 2. Output the translation string dynamically in 'em' units.
    return `${memo}em`; 
  });

  return (
    <motion.span className="counter-number" style={{ y }}>
      {number}
    </motion.span>
  );
}

interface DigitProps {
  digit: string;
}

function Digit({ digit }: DigitProps) {
  if (digit === ".") {
    return (
      <span className="counter-digit" style={{ width: "fit-content" }}>
        .
      </span>
    );
  }

  const targetDigit = parseInt(digit, 10);
  const finalValue = 30 + targetDigit;

  const animatedValue = useSpring(0, {
    stiffness: 60,
    damping: 20,
    mass: 1,
  });

  useEffect(() => {
    animatedValue.set(finalValue);
  }, [finalValue, animatedValue]);

  return (
    // 3. Force height to 1em so it scales perfectly with the parent font-size.
    <span className="counter-digit" style={{ height: "1em" }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </span>
  );
}

interface CounterProps {
  value: number;
  fontSize?: number;
  padding?: number;
  textColor?: string;
  fontWeight?: CSSProperties["fontWeight"];
}

export default function Counter({
  value,
  fontSize = 38,
  textColor = "inherit",
  fontWeight = 500,
}: CounterProps) {
  const digits = value.toString().split("");

  return (
    <span className="counter-container">
      <span
        className="counter-counter"
        style={{
          fontSize, // Sets the baseline size, but CSS !important can now override it
          color: textColor,
          fontWeight,
        }}
      >
        {digits.map((digit, index) => (
          <Digit key={`${index}-${digit}`} digit={digit} />
        ))}
      </span>
    </span>
  );
}