"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

function offset(direction, distance) {
  switch (direction) {
    case "down": return { y: -distance };
    case "left": return { x: distance };
    case "right": return { x: -distance };
    case "none": return {};
    default: return { y: distance };
  }
}

// Scroll-in animation wrapper used throughout the site.
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y,
  direction = "up",
  distance = 26,
  scale,
  duration = 0.7,
  as = "div",
  once = true,
}) {
  const MotionTag = motion[as] || motion.div;
  const from = y != null ? { y } : offset(direction, distance);

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...from, ...(scale ? { scale } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, ...(scale ? { scale: 1 } : {}) }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

// Stagger container: children using <StaggerItem> animate in sequence.
const containerVariants = (stagger, delayChildren) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export function Stagger({
  children,
  className = "",
  stagger = 0.09,
  delayChildren = 0.05,
  once = true,
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={containerVariants(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-70px" }}
    >
      {children}
    </MotionTag>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function StaggerItem({ children, className = "", as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}
