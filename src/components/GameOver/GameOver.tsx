import { Modal } from '@components/Modal/Modal';
import './GameOver.scss';

export function GameOver() {
  return (
    <Modal className="GameOver">
      <h1>
        <span className="rotate30 red">G</span>am
        <span className="rotate15 yellow">e</span>{' '}
        <span className="rotate15 cyan">O</span>ve
        <span className="rotate15 green">r</span>
      </h1>
    </Modal>
  );
}
