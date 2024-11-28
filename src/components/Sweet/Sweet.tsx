import './Sweet.scss';
import { sweetIcons } from './sweetIcons';
import { useStoreGame } from '@store/useStoreGame';
import CheckIcon from '@assets/icons/check.svg?react';
import DiamondIcon from '@assets/icons/diamond.svg?react';
import { Stars } from '@components/Stars/Stars';
import { FINAL_LEVEL } from '@init/init';

export function Sweet({ tableOf }: { tableOf: number }) {
  const { setCurrentTable, setOpenGame, tablesData, currentTable } = useStoreGame();
  const tableData = tablesData.find((table) => table.tableOf === tableOf)!;

  const SweetIcon = sweetIcons[tableOf];

  const handleClick = () => {
    setCurrentTable(tableOf);
    setOpenGame(true);
  };

  return (
    <button className="Sweet" disabled={tableData.islocked} onClick={handleClick}>
      <SweetIcon className="SweetIcon" />

      <CheckIcon
        className="checkIcon"
        style={{ display: currentTable.tableOf === tableOf ? 'block' : 'none' }}
      />

      {tableOf === FINAL_LEVEL ? (
        <DiamondIcon className="DiamondIcon" />
      ) : (
        <span className="number">x{tableOf}</span>
      )}

      <Stars numberOfStars={tableData.stars} />
    </button>
  );
}
