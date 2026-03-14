"use client";

import { ReactNode, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Triple = [number, number, number];

type ScrollLinkedProps = {
  children: ReactNode;
  className?: string;
  offset?: [string, string];
  yRange?: Triple;
  opacityRange?: Triple;
  scaleRange?: Triple;
};

export default function ScrollLinked({
  children,
  className = "",
  offset = ["start 92%", "end 8%"],
  yRange = [48, 0, -12],
  opacityRange = [1, 1, 1],
  scaleRange = [0.995, 1, 1],
}: ScrollLinkedProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const y = useTransform(scrollYProgress, [0, 0.22, 1], yRange);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 1], opacityRange);
  const scale = useTransform(scrollYProgress, [0, 0.25, 1], scaleRange);

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, opacity, scale }}
    >
      {children}
    </motion.div>
  );
}