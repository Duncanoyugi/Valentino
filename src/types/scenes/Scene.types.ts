import type { TimelineScene } from './Timeline.types';
import type { ReactNode } from 'react';

export interface SceneProps {
  config: TimelineScene;
  isActive: boolean;
}

export interface MessageTextProps {
  text: string;
  animation: string;
  delay?: number;
  className?: string;
  textColor?: string;
  children?: ReactNode;
}

export interface SceneLayoutProps {
  children: React.ReactNode;
  className?: string;
}
