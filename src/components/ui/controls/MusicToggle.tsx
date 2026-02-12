import React from 'react';
import { motion } from 'framer-motion';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
  className?: string;
}

export const MusicToggle: React.FC<MusicToggleProps> = ({
  isPlaying,
  onToggle,
  className = ''
}) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`fixed top-4 right-4 p-3 bg-black/30 hover:bg-black/50 
                  text-white rounded-full backdrop-blur-sm 
                  transition-all duration-300 z-50 ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isPlaying ? '🔊' : '🔇'}
    </motion.button>
  );
};