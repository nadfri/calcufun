import './Game.scss';
import { useStoreGame } from '@store/useStoreGame';
import { BalloonList } from '@components/BallloonList/BalloonList';
import { useEffect, useRef } from 'react';
import { GameOver } from '@components/GameOver/GameOver';
import { DURATION } from '@init/init';
import { BackHome } from '@components/BackHome/BackHome';

export default function Game() {
  const { count, currentTable, isGameOver, setIsGameOver } = useStoreGame();
  const ref = useRef<HTMLSpanElement>(null);

  /*Multiplication Animation*/
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

  /*Game Over Timer*/
  useEffect(() => {
    if (isGameOver) return;

    const timer = setTimeout(() => {
      setIsGameOver(true);
    }, DURATION);

    return () => clearTimeout(timer);
  }, [isGameOver, setIsGameOver]);

  return (
    <div className="Game fade-in">
      <BackHome />

      <div className="multiplication">
        <span className="selected">{currentTable.tableOf}</span>
        <span className="random-number" ref={ref}>
          x{currentTable.randomNumbers[count]}
        </span>
      </div>

      <div className="equal"> = </div>

      <BalloonList />

      {isGameOver && <GameOver />}
    </div>
  );
}
