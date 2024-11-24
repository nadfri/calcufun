import { useStoreGame } from '@store/useStoreGame';
import './GameOver.scss';

export function GameOver() {
  const { resetGame } = useStoreGame();

  return (
    <div className="GameOver fade-in">
      <div className="container">
        <h1>
          <span className="rotate30 red">G</span>am
          <span className="rotate15 yellow">e</span>{' '}
          <span className="rotate15 cyan">O</span>ve
          <span className="rotate15 green">r</span>
        </h1>

        <div className="btn-container">
          <button className="btn-retry" onClick={() => resetGame(true)}>
            <span className="red">R</span>e<span className="yellow">t</span>r
            <span className="red">y</span>
          </button>

          <button className="btn-quit" onClick={() => resetGame(false)}>
            QUIT
          </button>
        </div>
      </div>
    </div>
  );
}
