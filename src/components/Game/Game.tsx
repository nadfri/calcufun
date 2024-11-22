import { useStoreGame } from '@store/useStoreGame';
import './Game.scss';

export default function Game() {
  const { availableTables } = useStoreGame();

  const number1 = availableTables[0];
  const number2 = availableTables[1];

  return (
    <div className="Game fade-in">
      <span>
        {number1} x {number2} = ???
      </span>
    </div>
  );
}
