import { useStoreGame } from '@store/useStoreGame';
import './StartBtn.scss';

export default function StartBtn() {
  const { setOpenGame } = useStoreGame();

  return (
    <button className="StartBtn" onClick={() => setOpenGame(true)}>
      <span className="red">S</span>
      <span className="cyan">T</span>
      <span className="yellow rotate15">A</span>
      <span className="cyan">R</span>
      <span className="green rotate30">T</span>
    </button>
  );
}
