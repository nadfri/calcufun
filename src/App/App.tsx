import './App.scss';
import PWABadge from '@components/PWABadge/PWABadge';
import Home from '@components/Home/Home';
import { useStoreGame } from '@store/useStoreGame';
import Game from '@components/Game/Game';
import { GameOver } from '@components/GameOver/GameOver';

function App() {
  const { openGame, isGameOver } = useStoreGame();

  return (
    <div className="App">
      {openGame ? <Game /> : <Home />}
      {isGameOver && <GameOver />}
      <PWABadge />
    </div>
  );
}

export default App;
