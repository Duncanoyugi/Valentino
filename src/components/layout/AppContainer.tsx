import React from 'react';
import { FullScreenLayout } from './FullScreenLayout';

interface AppContainerProps {
  children: React.ReactNode;
}

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <FullScreenLayout>
      <div className="relative w-full h-full bg-black">
        {children}
      </div>
    </FullScreenLayout>
  );
};