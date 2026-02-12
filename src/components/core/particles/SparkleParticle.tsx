import React from 'react';
import { motion } from 'framer-motion';
import { random } from '../../../utils/math/random';

interface SparkleParticleProps {
  index: number;
  intensity: number;
}

export const SparkleParticle: React.FC<SparkleParticleProps> = ({ index, intensity }) => {
  const size = random.number(10, 20);
  const duration = random.number(4, 8);
  const delay = random.number(0, 3);
  const startX = random.number(0, window.innerWidth);
  const startY = random.number(0, window.innerHeight);
  const opacity = random.number(0.2, 0.6) * (intensity / 5);

  return (
    <motion.div
      key={index}
      className="absolute pointer-events-none"
      style={{
        left: startX,
        top: startY,
        fontSize: `${size}px`,
        opacity,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [opacity, opacity * 2, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      ✨
    </motion.div>
  );
};