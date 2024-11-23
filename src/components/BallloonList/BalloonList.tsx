import { DURATION } from '@init';
import './BalloonList.scss';
import { BalloonNumber } from '@components/BalloonNumber/BalloonNumber';

type Props = {
  list: number[];
};

export function BalloonList({ list }: Props) {
  return (
    <div className="BalloonList" style={{ animationDuration: `${DURATION}s` }}>
      {list.map((number, index) => (
        <BalloonNumber key={index} number={number} index={index + 1} />
      ))}
    </div>
  );
}
