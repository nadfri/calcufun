import { useEffect, useRef } from 'react';

export function useAudio(url: string) {
  const audioRef = useRef<HTMLAudioElement>(new Audio(url));

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return {
    playBackRate: (number: number) => (audioRef.current.playbackRate = number),
    play: () => audioRef.current.play().catch(() => {}),
    stop: () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    },
    loop: () => (audioRef.current.loop = true),
  };
}
