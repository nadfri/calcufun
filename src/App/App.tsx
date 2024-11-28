import './App.scss';
import Home from '@components/Home/Home';
import { Game } from '@components/Game/Game';
import { useStoreGame } from '@store/useStoreGame';
import { RotateDevice } from '@components/RotateDevice/RotateDevice';
import { PWABadge } from '../PWA/PWABadge/PWABadge';
import InstallPWA from '../PWA/InstallPWA/InstallPWA';

function App() {
  const { openGame } = useStoreGame();

  return (
    <div className="App">
      {openGame ? <Game /> : <Home />}
      <RotateDevice />

      <InstallPWA />
      <PWABadge />
    </div>
  );
}

export default App;
