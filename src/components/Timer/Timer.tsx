import './Timer.scss';
import { DURATION } from '@init/init';
import { useStoreGame } from '@store/useStoreGame';
import { useEffect, useState } from 'react';

export function Timer() {
  const { isGameOver, isWin, setIsGameOver } = useStoreGame();
  const [time, setTime] = useState(DURATION);

  useEffect(() => {
    if (time <= 0) {
      setIsGameOver(true);
    }
  }, [time, setIsGameOver]);

  useEffect(() => {
    if (isGameOver || isWin) return;

    setTime(DURATION);

    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1000;
        if (newTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameOver, isWin]);

  let color = 'var(--green)';

  switch (true) {
    case time <= DURATION / 3:
      color = 'var(--red)';
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
