import './Game.scss';
import { useEffect, useRef } from 'react';
import { useStoreGame } from '@store/useStoreGame';
import { BalloonList } from '@components/BallloonList/BalloonList';
import { GameOver } from '@components/GameOver/GameOver';
import { BackHome } from '@components/BackHome/BackHome';
import { Win } from '@components/Win/Win';
import { Timer } from '@components/Timer/Timer';
import { LENGTH } from '@init/init';
import { MuteBtn } from '@components/MuteBtn/MuteBtn';

export default function Game() {
  const { count, currentTable, isGameOver, isWin, setIsWin } = useStoreGame();
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (count === LENGTH) {
      setIsWin(true);
    }

    /*CSS Animation*/
    const current = ref.current;

    if (current) {
      current.classList.add('scale-pulse');

      const timer = setTimeout(() => {
        ref.current?.classList.remove('scale-pulse');
      }, 500);

      return () => {
        clearTimeout(timer);
        current.classList.remove('scale-pulse');
      };
    }
  }, [count, setIsWin]);

  return (
    <div className="Game fade-in">
      <BackHome />
      <MuteBtn />

      <div className="multiplication">
        <span className="selected">{currentTable.tableOf}</span>
        <span className="random-number" ref={ref}>
          x{currentTable.randomNumbers[count] || '⭐'}
        </span>
      </div>

      <Timer />

      <BalloonList />

      {!isWin && isGameOver && <GameOver />}
      {isWin && <Win />}
    </div>
  );
}
