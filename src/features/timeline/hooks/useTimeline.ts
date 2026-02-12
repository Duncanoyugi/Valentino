import { useState, useEffect, useCallback } from 'react';
import { TIMELINE_CONFIG } from '../../../data/config/timelineConfig';
import type { TimelineState } from '../../../types/scenes/Timeline.types';

interface UseTimelineReturn extends TimelineState {
  currentScene: typeof TIMELINE_CONFIG[0];
  totalScenes: number;
  start: () => void;
  pause: () => void;
  replay: () => void;
  skipToScene: (index: number) => void;
}

export const useTimeline = (): UseTimelineReturn => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const currentScene = TIMELINE_CONFIG[currentSceneIndex];
  const totalScenes = TIMELINE_CONFIG.length;

  const start = useCallback(() => {
    setIsPlaying(true);
    setHasStarted(true);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const replay = useCallback(() => {
    setCurrentSceneIndex(0);
    setIsPlaying(true);
    setHasStarted(true);
  }, []);

  const skipToScene = useCallback((index: number) => {
    if (index >= 0 && index < totalScenes) {
      setCurrentSceneIndex(index);
    }
  }, [totalScenes]);

  // Auto-advance scenes
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentSceneIndex < totalScenes - 1) {
        setCurrentSceneIndex(prev => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }, currentScene.duration);

    return () => clearTimeout(timer);
  }, [currentSceneIndex, currentScene.duration, isPlaying, totalScenes]);

  return {
    currentSceneIndex,
    isPlaying,
    hasStarted,
    currentScene,
    totalScenes,
    start,
    pause,
    replay,
    skipToScene,
  };
};