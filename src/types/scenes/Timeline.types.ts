export type SceneId =
  | 'intro'
  | 'message1'
  | 'message2'
  | 'message3'
  | 'message4'
  | 'message5'
  | 'message6'
  | 'message7'
  | 'message8'
  | 'message9'
  | 'message10'
  | 'climax'
  | 'finale';

export type AnimationType =
  | 'fadeIn'
  | 'fadeInUp'
  | 'typewriter'
  | 'glowPulse'
  | 'scale';

export interface TimelineScene {
  id: SceneId;
  duration: number; // milliseconds
  text: string;
  animation: AnimationType;
  animationDelay?: number;
  gradientStart: string;
  gradientEnd: string;
  particleIntensity: 0 | 1 | 2 | 3 | 4 | 5;
  textColor?: string;
}

export interface TimelineState {
  currentSceneIndex: number;
  isPlaying: boolean;
  hasStarted: boolean;
}
