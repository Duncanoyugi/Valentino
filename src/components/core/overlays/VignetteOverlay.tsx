import React from 'react';

interface VignetteOverlayProps {
  opacity?: number;
  className?: string;
}

export const VignetteOverlay: React.FC<VignetteOverlayProps> = ({
  opacity = 0.6,
  className = ''
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        boxShadow: `inset 0 0 150px rgba(0,0,0,${opacity})`,
      }}
    />
  );
};