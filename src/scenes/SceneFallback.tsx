import React from 'react';

export const SceneFallback: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">❤️</div>
        <div className="text-white text-xl">Loading...</div>
      </div>
    </div>
  );
};