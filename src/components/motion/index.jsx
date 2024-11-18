import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import useOnScreen from "../../hooks/useOnScreen.jsx";

const Section = ({ children, animation, duration = 0.5 }) => {
  const hireRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);
  const isHireVisible = useOnScreen(hireRef);
  if (isHireVisible && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.div
      ref={hireRef}
      animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
      initial={{
        opacity: 0,
        x: animation === "slideRight" ? 50 : animation === "slideLeft" ? -50 : 0,
        y: animation === "slideUp" ? 50 : animation === "slideDown" ? 0 : 0
      }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};
export default Section;
