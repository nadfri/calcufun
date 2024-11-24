import './BalloonNumber.scss';
import Balloon0 from '@assets/icons/balloons/balloon-0.svg?react';
import Balloon1 from '@assets/icons/balloons/balloon-1.svg?react';
import Balloon2 from '@assets/icons/balloons/balloon-2.svg?react';
import Balloon3 from '@assets/icons/balloons/balloon-3.svg?react';
import Balloon4 from '@assets/icons/balloons/balloon-4.svg?react';
import Balloon5 from '@assets/icons/balloons/balloon-5.svg?react';
import Balloon6 from '@assets/icons/balloons/balloon-6.svg?react';
import Balloon7 from '@assets/icons/balloons/balloon-7.svg?react';
import Balloon8 from '@assets/icons/balloons/balloon-8.svg?react';
import Balloon9 from '@assets/icons/balloons/balloon-9.svg?react';
import Balloon10 from '@assets/icons/balloons/balloon-10.svg?react';
import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { useStoreGame } from '@store/useStoreGame';

const balloons: Record<number, JSX.Element> = {
  0: <Balloon0 className="balloon" />,
  1: <Balloon1 className="balloon" />,
  2: <Balloon2 className="balloon" />,
  3: <Balloon3 className="balloon" />,
  4: <Balloon4 className="balloon" />,
  5: <Balloon5 className="balloon" />,
  6: <Balloon6 className="balloon" />,
  7: <Balloon7 className="balloon" />,
  8: <Balloon8 className="balloon" />,
  9: <Balloon9 className="balloon" />,
  10: <Balloon10 className="balloon" />,
};

type Props = {
  calcul: number;
  index: number;
};

const configConfetti = {
  force: 0.4,
  duration: 2200,
  particleCount: 30,
  width: 400,
};

export function BalloonNumber({ calcul, index }: Props) {
  const { count, setCount, numberSelected, randomNumbers } = useStoreGame();
  const [isExplosed, setIsExplosed] = useState(false);

  const BalloonIcon = balloons[index];

  const handleClick = () => {
    if (calcul === numberSelected * randomNumbers[count]) {
      setCount(count + 1);
      setIsExplosed(true);
    }
  };

  if (isExplosed)
    return (
      <div className="BalloonNumber">
        <ConfettiExplosion {...configConfetti} />
      </div>
    );

  return (
    <button
      onClick={handleClick}
      className={index % 2 === 0 ? 'BalloonNumber zigzag' : 'BalloonNumber zigzag2'}
    >
      {BalloonIcon ? BalloonIcon : <Balloon1 className="balloon" />}

      <div className="number">{calcul}</div>
    </button>
  );
}
