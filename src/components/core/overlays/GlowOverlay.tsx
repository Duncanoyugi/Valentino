import React from 'react';
import { motion } from 'framer-motion';

interface GlowOverlayProps {
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export const GlowOverlay: React.FC<GlowOverlayProps> = ({
  color = 'rgba(244, 63, 94, 0.15)',
  intensity = 'medium',
  className = ''
}) => {
  const intensityMap = {
    low: 0.1,
    medium: 0.2,
    high: 0.3
  };

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 70%)`,
      }}
      animate={{
        opacity: [intensityMap[intensity], intensityMap[intensity] * 1.5, intensityMap[intensity]],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
};