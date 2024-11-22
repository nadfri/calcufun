import './App.scss';
import PWABadge from '@components/PWABadge/PWABadge';
import Home from '@components/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <PWABadge />
    </div>
  );
}

export default App;
