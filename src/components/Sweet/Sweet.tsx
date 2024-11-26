import './Sweet.scss';
import { sweetIcons } from './sweetIcons';
import { useStoreGame } from '@store/useStoreGame';
import CheckIcon from '@assets/icons/check.svg?react';
import DiamondIcon from '@assets/icons/diamond.svg?react';

export function Sweet({ tableOf }: { tableOf: number }) {
  const { availableTables, currentTable, setCurrentTable, setOpenGame } = useStoreGame();

  const SweetIcon = sweetIcons[tableOf];
  const isChecked = currentTable.tableOf === tableOf;
  const isEnabled = availableTables.includes(tableOf);

  const handleClick = () => {
    setCurrentTable(tableOf);
    setOpenGame(true);
  };

  return (
    <button className="Sweet" disabled={!isEnabled} onClick={handleClick}>
      <SweetIcon className="SweetIcon" />

      <CheckIcon
        className="checkIcon"
        style={{ display: isChecked ? 'block' : 'none' }}
      />

      {tableOf === 13 ? (
        <DiamondIcon className="DiamondIcon" />
      ) : (
        <span className="number">x{tableOf}</span>
      )}
    </button>
  );
}
