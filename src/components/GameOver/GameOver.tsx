import './GameOver.scss';
import { Modal } from '@components/Modal/Modal';
import game_overURL from '@assets/sounds/game_over.mp3';
import { useAudio } from '@hooks/useAudio';
import AngryIcon from '@assets/icons/angry.svg?react';

export function GameOver() {
  const gameOverAudio = useAudio(game_overURL);

  gameOverAudio.playBackRate(1.5);
  gameOverAudio.play();

  return (
    <Modal className="GameOver">
      <h1>
        <span className="rotate30 red">G</span>am
        <span className="rotate15 yellow">e</span>{' '}
        <span className="rotate15 cyan">O</span>ve
        <span className="rotate15 green">r</span>
      </h1>
      <AngryIcon className="AngryIcon" />
    </Modal>
  );
}
