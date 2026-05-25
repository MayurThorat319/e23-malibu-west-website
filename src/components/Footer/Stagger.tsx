"use client";

import { motion } from "framer-motion";

// 1. StaggerContainer ke props ke liye interface
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string; // ? ka matlab ye optional hai
  delay?: number;
}

export function StaggerContainer({ 
  children, 
  className = "", 
  delay = 0 
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// 2. StaggerItem ke props ke liye interface
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}