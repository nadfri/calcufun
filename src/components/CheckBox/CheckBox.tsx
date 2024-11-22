import './CheckBox.scss';
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
import { useStoreGame } from '@store/useStoreGame';

type Props = {
  label: number;
};

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

export default function CheckBox({ label }: Props) {
  const SweetIcon = sweets[label];
  const { numbers, setNumbers, enabledTables } = useStoreGame();

  const isEnabled = enabledTables.includes(label);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setNumbers([...numbers, label]);
    } else {
      setNumbers(numbers.filter(num => num !== label));
    }
  };

  return (
    <button className="CheckBox" disabled={!isEnabled}>
      <input 
        type="checkbox" 
        id={label.toString()} 
        checked={numbers.includes(label)}
        onChange={handleChange}
        disabled={!isEnabled}
      />

      <label htmlFor={label.toString()}>
        {SweetIcon ? SweetIcon : <Sweet2 className="sweet" />}
        <span className="number">
          <CheckIcon className="checkIcon" />
          <span>x{label}</span>
        </span>
      </label>
    </button>
  );
}
