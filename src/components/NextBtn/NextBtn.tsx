import { useStoreGame } from '@store/useStoreGame';
import './NextBtn.scss';

export function NextBtn() {
  const { currentTable, setCurrentTable, resetGame } = useStoreGame();

  const handleNext = () => {
    setCurrentTable(currentTable.tableOf + 1);
    resetGame(true);
  };

  return (
    <button className="NextBtn" onClick={handleNext}>
      Next <span className="arrow left-right"> » </span>
      <span className="next-number">x{currentTable.tableOf + 1}</span>
    </button>
  );
}
