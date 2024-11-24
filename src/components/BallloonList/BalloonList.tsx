import './BalloonList.scss';
import { BalloonNumber } from '@components/BalloonNumber/BalloonNumber';
import { DURATION } from '@init/init';

export function BalloonList({ table }: { table: number[] }) {
  return (
    <div className="BalloonList" style={{ animationDuration: `${DURATION}s` }}>
      {table.map((solution, index) => (
        <BalloonNumber key={index} index={index} solution={solution} />
      ))}
    </div>
  );
}
