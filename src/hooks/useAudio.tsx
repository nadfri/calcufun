import { useStoreGame } from '@store/useStoreGame';
import { useEffect, useRef } from 'react';

export function useAudio(url: string) {
  const { isMute } = useStoreGame();

  const audioRef = useRef<HTMLAudioElement>();

  if (!audioRef.current) {
    const audio = new Audio(url);
    audio.muted = isMute;
    audioRef.current = audio;
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = isMute;
  }, [isMute]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return {
    playBackRate: (rate: number) => {
      const audio = audioRef.current;
      if (audio) audio.playbackRate = rate;
    },
    play: () => {
      const audio = audioRef.current;
      if (audio) {
        audio.play().catch(() => {});
      }
    },
    stop: () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    },
    loop: () => {
      const audio = audioRef.current;
      if (audio) audio.loop = true;
    },
  };
}
