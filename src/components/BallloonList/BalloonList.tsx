import { DURATION } from '@init';
import './BalloonList.scss';
import { BalloonNumber } from '@components/BalloonNumber/BalloonNumber';
import { useStoreGame } from '@store/useStoreGame';

export function BalloonList() {
  const { numberSelected, randomNumbers } = useStoreGame();
  const table = randomNumbers.map((number) => numberSelected * number);

  return (
    <div className="BalloonList" style={{ animationDuration: `${DURATION}s` }}>
      {table.map((calcul, index) => (
        <BalloonNumber key={index} index={index} calcul={calcul} />
      ))}
    </div>
  );
}
