import React from 'react';
import { motion } from 'framer-motion';
import type { MessageTextProps } from '../../../types/scenes/Scene.types';
import { TypewriterText } from '../../animations/TypewriterText';

export const MessageText: React.FC<MessageTextProps> = ({
  text,
  animation,
  delay = 0,
  className = '',
  textColor
}) => {
  if (animation === 'typewriter') {
    return (
      <TypewriterText
        text={text}
        delay={delay}
        className={`text-white ${className}`}
      />
    );
  }

  const variants = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1.8, delay: delay / 1000 }
    },
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1.5, delay: delay / 1000, ease: 'easeOut' as const }
    },
    glowPulse: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { 
        opacity: 1, 
        scale: 1,
        textShadow: [
          '0 0 20px rgba(244,63,94,0.5)',
          '0 0 40px rgba(244,63,94,0.8)',
          '0 0 20px rgba(244,63,94,0.5)'
        ]
      },
      transition: {
        duration: 2,
        delay: delay / 1000,
        textShadow: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut' as const
        }
      }
    }
  };

  const variant = variants[animation as keyof typeof variants] || variants.fadeIn;

  return (
    <motion.div
      initial={variant.initial}
      animate={variant.animate}
      transition={variant.transition}
      className={className}
      style={{ color: textColor ?? '#ffffff' }}
    >
      {text}
    </motion.div>
  );
};