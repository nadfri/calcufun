/* eslint-disable react-hooks/exhaustive-deps */
import './Timer.scss';

import { useStoreGame } from '@store/useStoreGame';
import { useEffect, useState } from 'react';
import timerURL from '@assets/sounds/timer.mp3';
import { useAudio } from '@hooks/useAudio';

export function Timer() {
  const { isGameOver, isWin, setIsGameOver, setCurrentTime, duration } = useStoreGame();
  const [time, setTime] = useState(duration);

  const timerAUDIO = useAudio(timerURL);

  /*Game Over*/
  useEffect(() => {
    if (time <= 0) {
      setIsGameOver(true);
      setCurrentTime(0);
    }
  }, [time, setIsGameOver]);

  /*Win*/
  useEffect(() => {
    if (isWin) setCurrentTime(duration - time);
  }, [isWin]);

  /*Timer*/
  useEffect(() => {
    if (isGameOver || isWin) return;

    setTime(duration);

    timerAUDIO.loop();
    timerAUDIO.playBackRate(1);
    timerAUDIO.play();

    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1;
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
    case time <= duration / 3:
      color = 'var(--red)';
      timerAUDIO.playBackRate(1.1);
      break;
    case time <= (duration / 3) * 2:
      color = '#ff8f00';
      break;
  }

  return (
    <div className="Timer" style={{ color }}>
      {time}s
    </div>
  );
}
