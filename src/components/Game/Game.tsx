import './Game.scss';
import { useStoreGame } from '@store/useStoreGame';
import { BalloonList } from '@components/BallloonList/BalloonList';
import { useEffect, useRef } from 'react';

export default function Game() {
  const { count, currentTable } = useStoreGame();
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('scale-pulse');

      const timer = setTimeout(() => {
        ref.current?.classList.remove('scale-pulse');
      }, 500);

      return () => {
        clearTimeout(timer);
        ref.current?.classList.remove('scale-pulse');
      };
    }
  }, [count]);

  return (
    <div className="Game fade-in">
      <div className="multiplication">
        <span className="selected">{currentTable.tableOf}</span>
        <span className="random-number" ref={ref}>
          x{currentTable.randomNumbers[count]}
        </span>
      </div>

      <div className="equal"> = </div>

      <BalloonList table={currentTable.randomSolutions} />
    </div>
  );
}
