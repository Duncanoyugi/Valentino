import React, { useMemo } from 'react';
import { HeartParticle } from './HeartParticle';
import { SparkleParticle } from './SparkleParticle';
import { APP_CONSTANTS } from '../../../data/constants/appConstants';

interface ParticleFieldProps {
  intensity: 0 | 1 | 2 | 3 | 4 | 5;
  type?: 'hearts' | 'sparkles' | 'both';
}

export const ParticleField: React.FC<ParticleFieldProps> = ({
  intensity,
  type = 'both'
}) => {
  const heartCount = useMemo(() => {
    return APP_CONSTANTS.HEART_COUNT_PER_SCENE[intensity] ?? 0;
  }, [intensity]);

  const sparkleCount = useMemo(() => {
    return Math.floor(heartCount * 0.5);
  }, [heartCount]);

  if (intensity === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {type !== 'sparkles' && 
        Array.from({ length: heartCount }).map((_, i) => (
          <HeartParticle key={`heart-${i}`} index={i} intensity={intensity} />
        ))
      }
      {type !== 'hearts' && 
        Array.from({ length: sparkleCount }).map((_, i) => (
          <SparkleParticle key={`sparkle-${i}`} index={i} intensity={intensity} />
        ))
      }
    </div>
  );
};