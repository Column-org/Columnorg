

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

export const ScrollBackground = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll();

  // Transitions background color from white to the requested light cream (#fff7ea)
  // We trigger the transition towards the end where the FAQ is located
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.8, 0.95],
    ["#ffffff", "#fff7ea"]
  );

  return (
    <motion.div className="relative" style={{ backgroundColor }}>
      {children}
    </motion.div>
  );
};
