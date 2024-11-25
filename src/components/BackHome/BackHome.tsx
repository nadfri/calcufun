import { useStoreGame } from '@store/useStoreGame';
import './BackHome.scss';
import HomeIcon from '@assets/icons/home.svg?react';

export function BackHome() {
  const { resetGame } = useStoreGame();

  return (
    <button className="BackHome">
      <HomeIcon className="icon" onClick={() => resetGame(false)}></HomeIcon>
    </button>
  );
}
