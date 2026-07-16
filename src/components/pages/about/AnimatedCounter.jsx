import { useState, useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

export default function AnimatedCounter({ target, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, (latest) => latest.toFixed(decimals));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 1.5,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, target]);

  useEffect(() => {
    return roundedValue.on("change", (latest) => setDisplayValue(latest));
  }, [roundedValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}