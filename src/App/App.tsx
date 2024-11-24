import './App.scss';
import PWABadge from '@components/PWABadge/PWABadge';
import Home from '@components/Home/Home';
import { useStoreGame } from '@store/useStoreGame';
import Game from '@components/Game/Game';

function App() {
  const { openGame } = useStoreGame();

  return (
    <div className="App">
      {openGame ? <Game /> : <Home />}
      <PWABadge />
    </div>
  );
}

export default App;
