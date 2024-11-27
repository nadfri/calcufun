import './CalculDisplay.scss';
import { useRef, useEffect } from 'react';
import { CurrentTableType } from '@store/useStoreGame';

type Props = {
  currentTable: CurrentTableType;
  count: number;
};

export function CalculDisplay({ currentTable, count }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

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
      <span className="selected">{currentTable.tableOf}</span>
      <span className="random-number" ref={ref}>
        x{currentTable.randomNumbers[count] || '⭐'}
      </span>
    </div>
  );
}
