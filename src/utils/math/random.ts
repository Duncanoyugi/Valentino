export const random = {
  number: (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  },
  
  integer: (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  
  boolean: (probability: number = 0.5): boolean => {
    return Math.random() < probability;
  },
  
  element: <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  },
  
  rgb: (): string => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  },
  
  rgba: (alpha: number = 0.5): string => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
};