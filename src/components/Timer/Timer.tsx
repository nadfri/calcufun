import './Timer.scss';
import { DURATION } from '@init/init';
import { useStoreGame } from '@store/useStoreGame';
import { useEffect, useState } from 'react';
import timerURL from '@assets/sounds/timer.mp3';
import { useAudio } from '@hooks/useAudio';

export function Timer() {
  const { isGameOver, isWin, setIsGameOver } = useStoreGame();
  const [time, setTime] = useState(DURATION);
  const timerAUDIO = useAudio(timerURL);
  timerAUDIO.loop();

  useEffect(() => {
    if (time <= 0) {
      setIsGameOver(true);
    }
  }, [time, setIsGameOver]);

  useEffect(() => {
    if (isGameOver || isWin) return;

    setTime(DURATION);
    timerAUDIO.playBackRate(1);
    timerAUDIO.play();

    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1000;
        if (newTime <= 0) {
          clearInterval(timer);
          timerAUDIO.stop();

          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      timerAUDIO.stop();

    };
  }, [isGameOver, isWin]);

  let color = 'var(--green)';

  switch (true) {
    case time <= DURATION / 3:
      color = 'var(--red)';
      timerAUDIO.playBackRate(1.1);
      break;
    case time <= (DURATION / 3) * 2:
      color = '#ff8f00';
      break;
  }

  return (
    <div className="Timer" style={{ color }}>
      {time / 1000}s
    </div>
  );
}
