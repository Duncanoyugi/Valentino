import React from 'react';
import { SceneLayout } from '../components/scenes/shared/SceneLayout';
import { MessageText } from '../components/scenes/shared/MessageText';
import { ReplayButton } from '../components/ui/buttons/ReplayButton';
import type { SceneProps } from '../types/scenes/Scene.types';
import { TIMINGS } from '../data/constants/timings';

interface SceneFinaleProps extends SceneProps {
  onReplay: () => void;
}

export const SceneFinale: React.FC<SceneFinaleProps> = ({ 
  config, 
  isActive,
  onReplay 
}) => {
  if (!isActive) return null;

  return (
    <SceneLayout>
      <MessageText
        text={config.text}
        animation={config.animation}
        delay={config.animationDelay}
        className="text-5xl md:text-7xl font-cursive text-white mb-12"
      />
      
      <MessageText
        text=""
        animation="fadeIn"
        delay={(config.animationDelay || 0) + TIMINGS.DELAYS.REPLAY_BUTTON}
        className="mt-16"
      >
        <ReplayButton onClick={onReplay} />
      </MessageText>
    </SceneLayout>
  );
};