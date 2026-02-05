import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', speed = 20 }) => {
  return (
    <div className="w-full overflow-hidden py-4 border-y border-white/10 bg-black flex relative z-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[10vw] font-display font-black uppercase leading-none text-transparent stroke-text px-8 opacity-50 hover:opacity-100 transition-opacity duration-300" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
            {text} <span className="text-acid-lime">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};
