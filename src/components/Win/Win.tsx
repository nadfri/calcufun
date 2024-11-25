import { useAudio } from '@hooks/useAudio';
import './Win.scss';
import { Modal } from '@components/Modal/Modal';
import winURL from '@assets/sounds/win.mp3';

export function Win() {
  const winAudio = useAudio(winURL);

  winAudio.play();

  return (
    <Modal className="Win">
      <h1>
        <span className="rotate30 red">Y</span>
        <span className="rotate15 red">O</span>
        <span className="rotate15 red">U</span> <span className="rotate15 green">W</span>
        <span className="rotate30 yellow">I</span>
        <span className="rotate15 green">N</span>
        <span className="rotate15 cyan">!</span>
      </h1>
    </Modal>
  );
}
