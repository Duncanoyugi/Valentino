import React from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 0,
  className = '',
  onComplete
}) => {
  React.useEffect(() => {
    if (onComplete) {
      const timer = setTimeout(onComplete, delay);
      return () => clearTimeout(timer);
    }
  }, [onComplete, delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={className}
    >
      {text}
    </motion.div>
  );
};
