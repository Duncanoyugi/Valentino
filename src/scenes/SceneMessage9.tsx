import React from 'react';
import { SceneLayout } from '../components/scenes/shared/SceneLayout';
import { MessageText } from '../components/scenes/shared/MessageText';
import type { SceneProps } from '../types/scenes/Scene.types';

export const SceneMessage9: React.FC<SceneProps> = ({ config, isActive }) => {
  if (!isActive) return null;

  return (
    <SceneLayout>
      <MessageText
        text={config.text}
        animation={config.animation}
        delay={config.animationDelay}
        className="text-4xl md:text-6xl font-serif text-white leading-relaxed"
      />
      <MessageText
        text="— With All My Heart"
        animation="fadeIn"
        delay={(config.animationDelay || 0) + 2000}
        className="text-xl md:text-2xl text-rose-300/80 mt-8"
      />
    </SceneLayout>
  );
};
