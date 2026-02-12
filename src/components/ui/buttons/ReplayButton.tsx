import React from 'react';
import { motion } from 'framer-motion';

interface ReplayButtonProps {
  onClick: () => void;
  className?: string;
}

export const ReplayButton: React.FC<ReplayButtonProps> = ({ onClick, className = '' }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-lg 
                  rounded-full backdrop-blur-sm border border-white/30
                  transition-all duration-300 font-light ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Watch Again ❤️
    </motion.button>
  );
};