import './CalculDisplay.scss';
import { useRef, useEffect } from 'react';
import { CurrentTableType } from '@store/useStoreGame';
import { FINAL_LEVEL } from '@init/init';

type Props = {
  currentTable: CurrentTableType;
  count: number;
};

export function CalculDisplay({ currentTable, count }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const tableOf =
    currentTable.tableOf !== FINAL_LEVEL
      ? currentTable.tableOf
      : currentTable.randomNumbers2[count];

  useEffect(() => {
    /*CSS Animation*/
    const current = ref.current;

    if (current) {
      current.classList.add('scale-pulse');

      const timer = setTimeout(() => {
        ref.current?.classList.remove('scale-pulse');
      }, 500);

      return () => {
        clearTimeout(timer);
        current.classList.remove('scale-pulse');
      };
    }
  }, [count]);

  return (
    <div className="CalculDisplay">
      <span className="selected">{tableOf}</span>
      <span className="random-number" ref={ref}>
        x{currentTable.randomNumbers[count] || '⭐'}
      </span>
    </div>
  );
}
