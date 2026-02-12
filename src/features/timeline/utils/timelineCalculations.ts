import type { TimelineScene } from '../../../types/scenes/Timeline.types';

export const calculateTotalDuration = (scenes: TimelineScene[]): number => {
  return scenes.reduce((total, scene) => total + scene.duration, 0);
};

export const getSceneProgress = (
  currentIndex: number,
  totalScenes: number
): number => {
  return (currentIndex + 1) / totalScenes;
};

export const getElapsedTime = (
  currentIndex: number,
  scenes: TimelineScene[]
): number => {
  return scenes
    .slice(0, currentIndex)
    .reduce((total, scene) => total + scene.duration, 0);
};