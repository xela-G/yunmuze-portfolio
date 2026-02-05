import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseClasses = "px-8 py-4 rounded-full font-display font-bold uppercase tracking-wider text-sm transition-colors duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-acid-lime text-black hover:bg-white",
    outline: "border border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-sm"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
