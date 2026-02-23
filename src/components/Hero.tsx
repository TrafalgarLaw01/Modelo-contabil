import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const TextLoop = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [texts.length]);

  return (
    <div className="relative h-[1em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-12 md:pb-24">
      <div className="container-custom">
        <h1 className="hd-1 flex flex-col leading-[0.85]">
          <span className="reveal-text">Parceiros para</span>
          <span className="text-brand-accent">
            <TextLoop texts={["Lucrar", "Escalar", "Crescer", "Vencer"]} />
          </span>
        </h1>
      </div>
    </section>
  );
};
