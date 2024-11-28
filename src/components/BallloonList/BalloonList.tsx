import './BalloonList.scss';
import { BalloonNumber } from '@components/BalloonNumber/BalloonNumber';
import { DURATION } from '@init/init';
import { useStoreGame } from '@store/useStoreGame';
import { useEffect, useRef } from 'react';

export function BalloonList() {
  const { isGameOver, currentTable } = useStoreGame();
  const ref = useRef<HTMLDivElement>(null);
  const randomUniqueKey = currentTable.randomNumbers.join(''); /*Force list re-render*/

  useEffect(() => {
    const current = ref.current;

    if (current) {
      if (isGameOver) {
        current.style.animationPlayState = 'paused';
      } else {
        current.style.animation = 'none';
        void current.offsetWidth; /*Force Reflow Animation CSS*/
        current.style.animation = `float-up ${DURATION}ms linear forwards`;
      }
    }
  }, [isGameOver, currentTable]);

  return (
    <div className="BalloonList" ref={ref}>
      {currentTable.solutions.map((_, index) => (
        <BalloonNumber key={index + randomUniqueKey} index={index} />
      ))}
    </div>
  );
}
