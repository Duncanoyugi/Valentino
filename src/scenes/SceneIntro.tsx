import React from 'react';
import { SceneLayout } from '../components/scenes/shared/SceneLayout';
import { MessageText } from '../components/scenes/shared/MessageText';
import type { SceneProps } from '../types/scenes/Scene.types';

export const SceneIntro: React.FC<SceneProps> = ({ config, isActive }) => {
  if (!isActive) return null;

  return (
    <SceneLayout>
      <MessageText
        text={config.text}
        animation={config.animation}
        delay={config.animationDelay}
        className="text-6xl md:text-7xl font-cursive text-white mb-6"
      />
      <MessageText
        text="A Valentine Story"
        animation="fadeIn"
        delay={(config.animationDelay || 0) + 1500}
        className="text-2xl md:text-3xl font-serif text-rose-300/80 mt-8"
      />
    </SceneLayout>
  );
};
