import './Game.scss';
import { useEffect } from 'react';
import { useStoreGame } from '@store/useStoreGame';
import { BalloonList } from '@components/BallloonList/BalloonList';
import { GameOver } from '@components/GameOver/GameOver';
import { BackHome } from '@components/BackHome/BackHome';
import { Win } from '@components/Win/Win';
import { Timer } from '@components/Timer/Timer';
import { MuteBtn } from '@components/MuteBtn/MuteBtn';
import { CalculDisplay } from '@components/CalculDisplay/CalculDisplay';

export default function Game() {
  const { count, currentTable, isGameOver, isWin, setIsWin } = useStoreGame();

  useEffect(() => {
    const LENGTH = currentTable.solutions.length;
    if (count === LENGTH) {
      setIsWin(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className="Game fade-in">
      <BackHome />
      <MuteBtn />

      <CalculDisplay currentTable={currentTable} count={count} />

      <Timer />

      <BalloonList />

      {!isWin && isGameOver && <GameOver />}
      {isWin && <Win />}
    </div>
  );
}
