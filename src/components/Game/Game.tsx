import './Game.scss';
import { useStoreGame } from '@store/useStoreGame';
import { BalloonList } from '@components/BallloonList/BalloonList';
import { useEffect, useRef } from 'react';
import { GameOver } from '@components/GameOver/GameOver';
import { BackHome } from '@components/BackHome/BackHome';
import { Win } from '@components/Win/Win';
import { Timer } from '@components/Timer/Timer';

export default function Game() {
  const { count, currentTable, isGameOver, isWin } = useStoreGame();
  const ref = useRef<HTMLSpanElement>(null);

  /*CSS Animation*/
  useEffect(() => {
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
  }, [count]);

  return (
    <div className="Game fade-in">
      <BackHome />

      <div className="multiplication">
        <span className="selected">{currentTable.tableOf}</span>
        <span className="random-number" ref={ref}>
          x{currentTable.randomNumbers[count]}
        </span>
      </div>

      <Timer />

      <BalloonList />

      {!isWin && isGameOver && <GameOver />}
      {isWin && <Win />}
    </div>
  );
}
