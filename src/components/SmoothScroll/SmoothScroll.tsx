"use client";

import Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const instance = new Lenis({
      duration: 5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      touchMultiplier: 1.8,
      syncTouch: true,
    });

    setLenis(instance);
    document.documentElement.classList.add("lenis");

    let rafId: number;
    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // क्लीनअप फ़ंक्शन
    return () => {
      document.documentElement.classList.remove("lenis");
      instance.destroy();
      cancelAnimationFrame(rafId);
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}