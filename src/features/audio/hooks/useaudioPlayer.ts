import { useState, useEffect, useCallback, useRef } from 'react';
import { APP_CONSTANTS } from '../../../data/constants/appConstants';

interface UseAudioPlayerProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  volume?: number;
}

export const useAudioPlayer = ({
  src,
  autoPlay = false,
  loop = true,
  volume = APP_CONSTANTS.DEFAULT_VOLUME,
}: UseAudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = loop;
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src, loop, volume]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (autoPlay && isPlaying) {
      audioRef.current.play().catch(() => {
        // Autoplay was prevented
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [autoPlay, isPlaying]);

  const play = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const mute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  }, []);

  const unmute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    }
  }, [volume]);

  const toggleMute = useCallback(() => {
    if (isMuted) {
      unmute();
    } else {
      mute();
    }
  }, [isMuted, mute, unmute]);

  return {
    isPlaying,
    isMuted,
    play,
    pause,
    toggle,
    mute,
    unmute,
    toggleMute,
  };
};