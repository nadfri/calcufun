import { useStoreGame } from '@store/useStoreGame';
import './Game.scss';
import { BalloonNumber } from '@components/BalloonNumber/BalloonNumber';

export default function Game() {
  const { table } = useStoreGame();

  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const randomsNumbers = numbers.sort(() => Math.random() - 0.5);

  const randomCalculs = randomsNumbers.map((number) => table * number);

  return (
    <div className="Game fade-in">
      <div className="multiplication">
        <span className="table">{table}</span>x{randomsNumbers[0]}
        <div className="question">???</div>
      </div>

      {randomCalculs.map((calcul, index) => (
        <BalloonNumber key={index} number={calcul} index={index + 1} />
      ))}
    </div>
  );
}
