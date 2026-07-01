"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Counts up from 0 to the numeric part of `value` when scrolled into view.
// Preserves prefixes/suffixes: "15,000+" -> counts 15000 then "+", "4.8/5" -> "4.8/5".
export default function AnimatedCounter({ value, duration = 1.8, className = "" }) {
  const str = String(value);
  const match = str.match(/([\d,.]+)/);
  const numStr = match ? match[1] : "0";
  const target = parseFloat(numStr.replace(/,/g, "")) || 0;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const [prefix, suffix] = match
    ? [str.slice(0, match.index), str.slice(match.index + match[1].length)]
    : ["", str];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    let startTime;
    const step = (now) => {
      if (startTime === undefined) startTime = now;
      const p = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("en-IN");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
