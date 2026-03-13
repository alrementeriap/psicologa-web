"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Pair = [number, number];

type ParallaxShapeProps = {
  className?: string;
  yRange?: Pair;
  rotateRange?: Pair;
};

export default function ParallaxShape({
  className = "",
  yRange = [-30, 30],
  rotateRange = [-4, 4],
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
    return <div ref={ref} className={className} />;
  }

  return <motion.div ref={ref} className={className} style={{ y, rotate }} />;
}