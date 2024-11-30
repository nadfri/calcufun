import './GameOver.scss';
import { Modal } from '@components/Modal/Modal';
import game_overURL from '@assets/sounds/game_over.mp3';
import { useAudio } from '@hooks/useAudio';
import AngryIcon from '@assets/icons/angry.svg?react';
import { useStoreGame } from '@store/useStoreGame';

export function GameOver() {
  const { currentTime } = useStoreGame();
  const gameOverAudio = useAudio(game_overURL);

  console.log('currenTime', currentTime);

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

      {currentTime === 0 ? (
        <p className="error">
          Time's <span className="cyan rotate15">up!</span>
        </p>
      ) : (
        <p className="error">
          <span className="rotate30">W</span>RON<span className="rotate15">G!</span>
        </p>
      )}
    </Modal>
  );
}
