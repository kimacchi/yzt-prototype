import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

const AnimatedText = ({
  quotes,
}: {
  quotes: Array<{ text: string; from: string }>;
}) => {
  const [letters, setLetters] = useState<string[]>([""]);
  const [quote, setQuote] = useState<{ text: string; from: string }>();
  useEffect(() => {
    if (!quote?.text) {
      let index: number = Math.floor(Math.random() * (quotes.length - 1));
      setQuote(quotes[index]);
    }
    setInterval(() => {
      let index: number = Math.floor(Math.random() * (quotes.length - 1));
      while (quote?.text === quotes[index].text) {
        index = Math.floor(Math.random() * (quotes.length - 1));
      }
      setQuote(quotes[index]);
    }, 20000);
  }, []);

  useEffect(() => {
    setLetters(quote?.text.split("") ? quote?.text.split("") : [""]);
  }, [quote]);

  return (
    <div>
      <motion.p
        // variants={container}
        // initial="hidden"
        // animate="visible"
        className="md:text-xl text-xs italic font-extralight"
      >
        {letters.map((letter, index) => {
          return (
            <motion.span
              key={index}
              // variants={child}
              // animate={{visibility: ["hidden", "hidden"]}}
            >
              {letter}
            </motion.span>
          );
        })}
      </motion.p>
      <p className="text-xl font-extralight w-full text-right">- {quote?.from}</p>
    </div>
  );
};

export default AnimatedText;
