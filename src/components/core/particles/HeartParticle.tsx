import React from 'react';
import { motion } from 'framer-motion';
import { random } from '../../../utils/math/random';

interface HeartParticleProps {
  index: number;
  intensity: number;
}

export const HeartParticle: React.FC<HeartParticleProps> = ({ index, intensity }) => {
  const size = random.number(20, 40);
  const duration = random.number(5, 15);
  const delay = random.number(0, 5);
  const startX = random.number(0, window.innerWidth);
  const startY = window.innerHeight + 50;
  const rotation = random.number(0, 360);
  const opacity = random.number(0.3, 0.7) * (intensity / 5);

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
      initial={{ y: startY, rotate: 0 }}
      animate={{
        y: -100,
        rotate: rotation,
        opacity: [opacity, opacity * 1.5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      ❤️
    </motion.div>
  );
};