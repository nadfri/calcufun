import './Settings.scss';
import { useStoreGame } from '@store/useStoreGame';
import CloseIcon from '@assets/icons/close.svg?react';
import GithubIcon from '@assets/icons/github.svg?react';
import { useRef, useState } from 'react';
import { Confirm } from './Confirm/Confirm';

export function Settings({ closeSettings }: { closeSettings: () => void }) {
  const { duration, setDuration } = useStoreGame();
  const [isConfirm, setIsConfirm] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDuration(Number(e.target.value));
  };

  const handleClose = () => {
    if (refContainer.current) refContainer.current.classList.add('scale-0');
    setTimeout(closeSettings, 200);
  };

  return (
    <div className="Modal blur Settings" role="dialog">
      <div className="container fade-in" ref={refContainer}>
        <h1>
          <span className="rotate30 red">S</span>
          <span className="cyan">E</span>
          <span>T</span>
          <span className="rotate15 green">T</span>
          <span className="rotate15 yellow">I</span>
          <span>N</span>
          <span className="cyan">G</span>
          <span className="rotate15 red">S</span>
        </h1>

        <label className="label">
          TIMER
          <select className="select" defaultValue={duration} onChange={handleChange}>
            <option value={60}>60s</option>
            <option value={90}>90s</option>
            <option value={120}>120s</option>
            <option value={150}>150s</option>
          </select>
        </label>
        <button className="clear-btn" onClick={() => setIsConfirm(true)}>
          CLEAR ALL DATAS
        </button>

        <button className="btn-close" onClick={handleClose}>
          <CloseIcon className="CloseIcon" />
        </button>

        <a
          href="https://github.com/nadfri/calcufun"
          target="_blank"
          className="github-link"
        >
          <span className="green">@</span>Nadfri<span className="red rotate15">JS</span>
          <GithubIcon className="GithubIcon" />
        </a>

        {isConfirm && (
          <Confirm closeSettings={handleClose} closeConfirm={() => setIsConfirm(false)} />
        )}
      </div>
    </div>
  );
}
