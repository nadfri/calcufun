import './RadioSweet.scss';
import Sweet2 from '@assets/icons/sweets/sweet-2.svg?react';
import Sweet3 from '@assets/icons/sweets/sweet-3.svg?react';
import Sweet4 from '@assets/icons/sweets/sweet-4.svg?react';
import Sweet5 from '@assets/icons/sweets/sweet-5.svg?react';
import Sweet6 from '@assets/icons/sweets/sweet-6.svg?react';
import Sweet7 from '@assets/icons/sweets/sweet-7.svg?react';
import Sweet8 from '@assets/icons/sweets/sweet-8.svg?react';
import Sweet9 from '@assets/icons/sweets/sweet-9.svg?react';
import Sweet10 from '@assets/icons/sweets/sweet-10.svg?react';
import Sweet11 from '@assets/icons/sweets/sweet-11.svg?react';
import Sweet12 from '@assets/icons/sweets/sweet-12.svg?react';
import Sweet13 from '@assets/icons/sweets/sweet-13.svg?react';
import CheckIcon from '@assets/icons/check.svg?react';
import Diamond from '@assets/icons/diamond.svg?react';
import { useStoreGame } from '@store/useStoreGame';

const sweets: Record<number, JSX.Element> = {
  2: <Sweet2 className="sweet" />,
  3: <Sweet3 className="sweet" />,
  4: <Sweet4 className="sweet" />,
  5: <Sweet5 className="sweet" />,
  6: <Sweet6 className="sweet" />,
  7: <Sweet7 className="sweet" />,
  8: <Sweet8 className="sweet" />,
  9: <Sweet9 className="sweet" />,
  10: <Sweet10 className="sweet" />,
  11: <Sweet11 className="sweet" />,
  12: <Sweet12 className="sweet" />,
  13: <Sweet13 className="sweet" />,
};

export function RadioSweet({ tableOf }: { tableOf: number }) {
  const { availableTables, currentTable, setCurrentTable } = useStoreGame();

  const SweetIcon = sweets[tableOf];
  const isChecked = currentTable.tableOf === tableOf;
  const isEnabled = availableTables.includes(tableOf);

  return (
    <button className="RadioSweet" disabled={!isEnabled}>
      <input
        id={tableOf.toString()}
        type="radio"
        name="radio"
        onChange={() => setCurrentTable(tableOf)}
        checked={isChecked}
        disabled={!isEnabled}
      />

      <label htmlFor={tableOf.toString()}>
        {SweetIcon ? SweetIcon : <Sweet2 className="sweet" />}
        <span className="number">
          <CheckIcon className="checkIcon" />

          {tableOf === 13 ? (
            <span className="diamond-container">
              <Diamond className="diamond" />
            </span>
          ) : (
            <span>x{tableOf}</span>
          )}
        </span>
      </label>
    </button>
  );
}
