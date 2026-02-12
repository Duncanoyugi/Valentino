import { useEffect } from 'react';
import { useTimeline } from './features/timeline/hooks/useTimeline';
import { useAudioPlayer } from './features/audio/hooks/useAudioPlayer';
import { AppContainer } from './components/layout/AppContainer';
import { Background } from './components/core/Background';
import { ParticleField } from './components/core/particles';
import { VignetteOverlay } from './components/core/overlays';
import { PlayButton } from './components/ui/buttons/PlayButton';
import { MusicToggle } from './components/ui/controls/MusicToggle';

import { SceneIntro } from './scenes/SceneIntro';
import { SceneMessage1 } from './scenes/SceneMessage1';
import { SceneMessage2 } from './scenes/SceneMessage2';
import { SceneMessage3 } from './scenes/SceneMessage3';
import { SceneMessage4 } from './scenes/SceneMessage4';
import { SceneMessage5 } from './scenes/SceneMessage5';
import { SceneMessage6 } from './scenes/SceneMessage6';
import { SceneMessage7 } from './scenes/SceneMessage7';
import { SceneMessage8 } from './scenes/SceneMessage8';
import { SceneMessage9 } from './scenes/SceneMessage9';
import { SceneMessage10 } from './scenes/SceneMessage10';
import { SceneClimax } from './scenes/SceneClimax';
import { SceneFinale } from './scenes/SceneFinale';
import { SceneFallback } from './scenes/SceneFallback';

function App() {
  const {
    currentSceneIndex,
    hasStarted,
    currentScene,
    start,
    replay,
  } = useTimeline();

  const {
    isPlaying: isAudioPlaying,
    isMuted,
    play: playAudio,
    toggleMute
  } = useAudioPlayer({
    src: '/music/perfect.mp3',
    autoPlay: false,
    loop: true,
    volume: 0.2 // Low volume, romantic
  });

  // Start audio when experience begins
  useEffect(() => {
    if (hasStarted && !isAudioPlaying) {
      playAudio();
    }
  }, [hasStarted, isAudioPlaying, playAudio]);

  const renderScene = () => {
    const sceneProps = {
      config: currentScene,
      isActive: true,
    };

    switch (currentSceneIndex) {
      case 0:
        return <SceneIntro {...sceneProps} />;
      case 1:
        return <SceneMessage1 {...sceneProps} />;
      case 2:
        return <SceneMessage2 {...sceneProps} />;
      case 3:
        return <SceneMessage3 {...sceneProps} />;
      case 4:
        return <SceneMessage4 {...sceneProps} />;
      case 5:
        return <SceneMessage5 {...sceneProps} />;
      case 6:
        return <SceneMessage6 {...sceneProps} />;
      case 7:
        return <SceneMessage7 {...sceneProps} />;
      case 8:
        return <SceneMessage8 {...sceneProps} />;
      case 9:
        return <SceneMessage9 {...sceneProps} />;
      case 10:
        return <SceneMessage10 {...sceneProps} />;
      case 11:
        return <SceneClimax {...sceneProps} />;
      case 12:
        return <SceneFinale {...sceneProps} onReplay={replay} />;
      default:
        return <SceneFallback />;
    }
  };

  return (
    <AppContainer>
      {/* Background Layers */}
      <Background sceneIndex={currentSceneIndex} />
      <ParticleField intensity={currentScene.particleIntensity} />
      <VignetteOverlay opacity={0.6} />

      {/* Audio Controls - Only show when experience started */}
      {hasStarted && (
        <MusicToggle
          isPlaying={!isMuted}
          onToggle={toggleMute}
        />
      )}

      {/* Current Scene */}
      {renderScene()}

      {/* Start Button */}
      {!hasStarted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <PlayButton onClick={start} />
        </div>
      )}
    </AppContainer>
  );
}

export default App;