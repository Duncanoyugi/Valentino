import React from 'react';
import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  startColor: string;
  endColor: string;
  direction?: 'to-b' | 'to-r' | 'to-br' | 'to-tr';
  className?: string;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  startColor,
  endColor,
  direction = 'to-br',
  className = ''
}) => {
  const gradientMap = {
    'to-b': 'to bottom',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-tr': 'to top right',
  };

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      style={{
        background: `linear-gradient(${gradientMap[direction]}, ${startColor}, ${endColor})`
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    />
  );
};