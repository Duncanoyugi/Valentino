export const calculateDelay = (
  index: number,
  baseDelay: number = 100,
  staggerAmount: number = 50
): number => {
  return baseDelay + index * staggerAmount;
};

export const calculateTypewriterDelay = (
  text: string,
  speed: number = 80
): number => {
  return text.length * speed;
};

export const getRandomDelay = (
  min: number = 0,
  max: number = 1000
): number => {
  return Math.random() * (max - min) + min;
};