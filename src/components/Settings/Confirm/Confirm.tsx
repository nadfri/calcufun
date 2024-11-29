import { useStoreGame } from '@store/useStoreGame';
import './Confirm.scss';

type Props = {
  closeSettings: () => void;
  closeConfirm: () => void;
};

export function Confirm({ closeSettings, closeConfirm }: Props) {
  const { resetAll } = useStoreGame();

  const handleClearStorage = () => {
    localStorage.clear();
    resetAll();
    closeSettings();
  };

  return (
    <div className="Confirm fade-in" role="alertdialog">
      <h1>Are you Sure?</h1>

      <button onClick={closeConfirm} className='cyan'>NO</button>
      <button onClick={handleClearStorage} className='btn-yes'>YES</button>
    </div>
  );
}
