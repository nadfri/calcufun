import { useStoreGame } from '@store/useStoreGame';
import { PropsWithChildren } from 'react';
import './Modal.scss';

type Props = {
  className?: string;
};

export function Modal({ children, className }: PropsWithChildren<Props>) {
  const { resetGame } = useStoreGame();
  return (
    <div className={`Modal fade-in ${className}`} role="dialog">
      <div className="container">
        {children}

        <div className="btn-container">
          <button className="btn-retry" onClick={() => resetGame(true)}>
            <span className="red">R</span>e<span className="yellow">t</span>r
            <span className="red">y</span>
          </button>

          <button className="btn-quit" onClick={() => resetGame(false)}>
            QUIT
          </button>
        </div>
      </div>
    </div>
  );
}
