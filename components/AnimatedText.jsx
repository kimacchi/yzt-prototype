import React from "react";
import { motion } from "framer-motion";



const AnimatedText = ({ quotes: Array<{text: string, from: string}>}) => {
  const letters = quote.split("");

  const container = {
    // hidden: { opacity: 1 },
    visible: (i = 1) => ({
      // opacity: 1,
      transition: { staggerChildren: 0.004, delayChildren: 0 * i },
    }),
  };
  
  const child = {
    visible: {
      // opacity: 1,
      visibility: "visible",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        visibility: "visible",
      },
    },
    hidden: {
      // opacity: 0,
      visibility: "hidden",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        visibility: "hidden",
      },
    },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => {
        return(
          <motion.span 
            key={index}
            variants={child}
            animate={{visibility: ["hidden", "hidden"]}}
          >
            {letter}
          </motion.span>
        )
      })}
    </motion.p>
  );
};

export default AnimatedText;
