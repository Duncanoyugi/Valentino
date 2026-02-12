import React from 'react';
import { motion } from 'framer-motion';

interface PlayButtonProps {
  onClick: () => void;
  className?: string;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ onClick, className = '' }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white text-xl rounded-full 
                  shadow-lg hover:shadow-xl transition-all duration-300 
                  font-serif tracking-wide ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Begin Experience
    </motion.button>
  );
};