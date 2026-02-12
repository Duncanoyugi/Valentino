export const lockScroll = (): void => {
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = '0px';
};

export const unlockScroll = (): void => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};