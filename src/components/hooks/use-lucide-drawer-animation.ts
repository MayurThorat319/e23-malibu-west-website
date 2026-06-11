import { animate, svg } from "animejs";
import { useEffect, useRef } from "react";

export function useLucideDrawerAnimation<T extends HTMLElement = HTMLDivElement>() {
  const root = useRef<T | null>(null);

  useEffect(() => {
    if (!root.current) return;

    const drawables = root.current.querySelectorAll(
      "svg path, svg circle, svg polyline, svg line, svg rect",
    );
    drawables.forEach((el) => el.classList.add("line"));

    const animation = animate(svg.createDrawable(".line"), {
      draw: ["0 0.05", "0.05 1"],
      ease: "inOutQuad",
      duration: 1800,
      loop: true,
      alternate: true,
    });

    return () => {
      animation.pause();
    };
  }, []);

  return root;
}