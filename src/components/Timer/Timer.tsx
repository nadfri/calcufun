/* eslint-disable react-hooks/exhaustive-deps */
import './Timer.scss';
import { DURATION } from '@init/init';
import { useStoreGame } from '@store/useStoreGame';
import { useEffect, useState } from 'react';
import timerURL from '@assets/sounds/timer.mp3';
import { useAudio } from '@hooks/useAudio';

export function Timer() {
  const { isGameOver, isWin, setIsGameOver, setCurrentTime } = useStoreGame();
  const [time, setTime] = useState(DURATION);

  const timerAUDIO = useAudio(timerURL);

  /*Game Over*/
  useEffect(() => {
    if (time <= 0) {
      setIsGameOver(true);
    }
  }, [time, setIsGameOver]);

  /*Win*/
  useEffect(() => {
    if (isWin) setCurrentTime((DURATION - time) / 1000);
  }, [isWin]);

  /*Timer*/
  useEffect(() => {
    if (isGameOver || isWin) return;

    setTime(DURATION);

    timerAUDIO.loop();
    timerAUDIO.playBackRate(1);
    timerAUDIO.play();

    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1000;
        if (newTime <= 0) {
          clearInterval(timer);
          timerAUDIO.stop();
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
