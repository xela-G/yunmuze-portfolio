import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const updateText = () => {
      if (textRef.current) {
        textRef.current.innerText = `X: ${Math.round(cursorX.get())} Y: ${Math.round(cursorY.get())}`;
      }
      requestAnimationFrame(updateText);
    };
    const animationId = requestAnimationFrame(updateText);
    return () => cancelAnimationFrame(animationId);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference text-acid-lime font-mono text-xs"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <span ref={textRef} className="bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-acid-lime/30 ml-4 mt-4 block w-max">
        X: 0 Y: 0
      </span>
    </motion.div>
  );
};
