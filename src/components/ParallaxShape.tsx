"use client";

import { ReactNode, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxShapeProps = {
  className?: string;
  yRange?: [number, number];
  rotateRange?: [number, number];
  children?: ReactNode;
};

export default function ParallaxShape({
  className = "",
  yRange = [-60, 60],
  rotateRange = [-8, 8],
  children,
}: ParallaxShapeProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange);

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ y, rotate }}>
      {children}
    </motion.div>
  );
}