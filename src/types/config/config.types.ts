export interface ThemeConfig {
  gradients: Record<string, {
    start: string;
    end: string;
  }>;
  fonts: {
    serif: string;
    cursive: string;
  };
}

export interface AppConfig {
  version: string;
  defaultVolume: number;
  enableAudio: boolean;
}