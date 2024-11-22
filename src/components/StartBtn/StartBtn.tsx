import { useStoreGame } from '@store/useStoreGame';
import './StartBtn.scss';

export default function StartBtn() {
  const { setOpenGame, numbers } = useStoreGame();

  return (
    <button
      className="StartBtn"
      onClick={() => setOpenGame(true)}
      disabled={numbers.length === 0}
    >
      <span className="red">S</span>
      <span className="cyan">T</span>
      <span className="yellow rotate10">A</span>
      <span className="cyan">R</span>
      <span className="green rotate25">T</span>
    </button>
  );
}
