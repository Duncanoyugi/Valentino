import React, { useEffect } from 'react';
import { lockScroll } from '../../utils/dom/scrollLock';

interface FullScreenLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const FullScreenLayout: React.FC<FullScreenLayoutProps> = ({
  children,
  className = ''
}) => {
  useEffect(() => {
    lockScroll();
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={`relative w-screen h-screen overflow-hidden ${className}`}>
      {children}
    </div>
  );
};