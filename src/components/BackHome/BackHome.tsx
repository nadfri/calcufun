import { useStoreGame } from '@store/useStoreGame';
import './BackHome.scss';
import HomeIcon from '@assets/icons/home.svg?react';

export function BackHome() {
  const { resetGame } = useStoreGame();

  return (
    <button className="BackHome" onClick={() => resetGame(false)}>
      <HomeIcon className="icon"></HomeIcon>
    </button>
  );
}
