import './App.scss';
import Home from '@components/Home/Home';
import { Game } from '@components/Game/Game';
import PWABadge from '@components/PWABadge/PWABadge';
import { useStoreGame } from '@store/useStoreGame';
import { RotateDevice } from '@components/RotateDevice/RotateDevice';

function App() {
  const { openGame } = useStoreGame();

  return (
    <div className="App">
      {openGame ? <Game /> : <Home />}
      <PWABadge />
      <RotateDevice />
    </div>
  );
}

export default App;
