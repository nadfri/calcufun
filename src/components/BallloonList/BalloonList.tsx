import './BalloonList.scss';
import { BalloonNumber } from '@components/BalloonNumber/BalloonNumber';
import { DURATION } from '@init/init';
import { useStoreGame } from '@store/useStoreGame';
import { useEffect, useRef } from 'react';

export function BalloonList({ table }: { table: number[] }) {
  const { isGameOver } = useStoreGame();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = ref.current;

    if (current && isGameOver) {
      current.style.animationPlayState = 'paused';
    }

    return () => {
      if (current) {
        current.style.animationPlayState = 'running';
      }
    };
  }, [isGameOver]);

  return (
    <div className="BalloonList" style={{ animationDuration: `${DURATION}ms` }} ref={ref}>
      {table.map((solution, index) => (
        <BalloonNumber key={index} index={index} solution={solution} />
      ))}
    </div>
  );
}
