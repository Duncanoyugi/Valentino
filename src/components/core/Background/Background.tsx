import React from 'react';
import { GradientBackground } from './GradientBackground';
import { TIMELINE_CONFIG } from '../../../data/config/timelineConfig';

interface BackgroundProps {
  sceneIndex: number;
  className?: string;
}

export const Background: React.FC<BackgroundProps> = ({
  sceneIndex,
  className = ''
}) => {
  const scene = TIMELINE_CONFIG[sceneIndex];
  
  if (!scene) return null;

  return (
    <GradientBackground
      startColor={scene.gradientStart}
      endColor={scene.gradientEnd}
      direction="to-br"
      className={className}
    />
  );
};