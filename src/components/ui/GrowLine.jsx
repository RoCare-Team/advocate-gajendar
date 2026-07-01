"use client";

import { motion } from "framer-motion";

// A gold accent rule that grows into view — used under section titles.
export default function GrowLine({ align = "center", className = "" }) {
  return (
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`block h-[3px] w-16 rounded-full bg-gradient-to-r from-gold-400 to-gold-200 ${
        align === "center" ? "origin-center" : "origin-left"
      } ${className}`}
    />
  );
}
