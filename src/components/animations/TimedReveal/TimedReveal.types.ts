import type { ReactNode } from 'react';

export interface TimedRevealProps {
  children: ReactNode;
  delay: number;
  duration?: number;
  animation?: 'fade' | 'slide' | 'scale';
  className?: string;
}

export type AnimationVariant = 'fade' | 'slide' | 'scale';