import { DURATION } from '@init';
import './BalloonList.scss';

import { BalloonNumber } from '@components/BalloonNumber/BalloonNumber';

export function BalloonList({ list }: { list: number[] }) {
  return (
    <div className="BalloonList" style={{ animationDuration: `${DURATION}s` }}>
      {list.map((calcul, index) => (
        <BalloonNumber key={index} number={calcul} index={index + 1} />
      ))}
    </div>
  );
}
