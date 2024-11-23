import './Game.scss';
import { useStoreGame } from '@store/useStoreGame';
import { BalloonList } from '@components/BallloonList/BalloonList';
import { useState } from 'react';

export default function Game() {
  const { table } = useStoreGame();
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 52];
  const randomsNumbers = numbers.sort(() => Math.random() - 0.5);
  const randomCalculList = randomsNumbers.map((number) => table * number);



  return (
    <div className="Game fade-in">
      <div className="multiplication">
        <span className="table">{table}</span>x{randomsNumbers[0]}
        <div className="question">???</div>
      </div>
      <BalloonList list={randomCalculList}  />
    </div>
  );
}
