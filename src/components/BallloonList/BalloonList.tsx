import './BalloonList.scss';
import { BalloonNumber } from '@components/BalloonNumber/BalloonNumber';
import { DURATION } from '@init/init';
import { useStoreGame } from '@store/useStoreGame';
import { useEffect, useRef } from 'react';

export function BalloonList() {
  const { isGameOver, currentTable } = useStoreGame();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = ref.current;

    if (current) {
      if (isGameOver) {
        current.style.animationPlayState = 'paused';
      } else {
        current.style.animationPlayState = 'running';
      }

      current.style.animation = 'none';
      void current.offsetWidth; /*Force Reflow CSS*/
      current.style.animation = `float-up ${DURATION}ms linear`;
    }
  }, [isGameOver, currentTable.key]);

  return (
    <div className="BalloonList" style={{ animationDuration: `${DURATION}ms` }} ref={ref}>
      {currentTable.solutions.map((solution, index) => (
        <BalloonNumber key={index + currentTable.key} index={index} solution={solution} />
      ))}
    </div>
  );
}
