import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'


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
    <div className="text-gray-400">
      <Typewriter 
        words={[...quotes.map(e=>e.text +"\n\n"+e.from)]} 
        typeSpeed={7} 
        deleteSpeed={2}
        delaySpeed={10000}
        loop={false}
        cursor={true}
      />
    </div>
  );
};

export default AnimatedText;
