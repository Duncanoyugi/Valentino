import React from 'react';
import type { SceneLayoutProps } from '../../../types/scenes/Scene.types';

export const SceneLayout: React.FC<SceneLayoutProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 flex items-center justify-center p-8 ${className}`}>
      <div className="max-w-4xl w-full text-center">
        {children}
      </div>
    </div>
  );
};