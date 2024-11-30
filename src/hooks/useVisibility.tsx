import { useEffect } from 'react';
import { useStoreGame } from '@store/useStoreGame';

export function useVisibility() {
  const { openGame, setOpenGame } = useStoreGame();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && openGame) {
        setOpenGame(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [openGame, setOpenGame]);

  return { openGame };
}
