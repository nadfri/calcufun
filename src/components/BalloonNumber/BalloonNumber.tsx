import './BalloonNumber.scss';
import { useEffect, useState } from 'react';
import { useAudio } from '@hooks/useAudio';
import { useStoreGame } from '@store/useStoreGame';

import explosionURL from '@assets/sounds/explosion.mp3';
import ConfettiExplosion from 'react-confetti-explosion';
import { balloonIcons } from './balloonIcons';

type Props = {
  solution: number;
  index: number;
};

const configConfetti = {
  force: 0.4,
  duration: 2200,
  particleCount: 30,
  width: 400,
};

export function BalloonNumber({ solution, index }: Props) {
  const { count, setCount, currentTable, setIsGameOver } = useStoreGame();
  const [isExplosed, setIsExplosed] = useState(false);
  const [toRemove, setToRemove] = useState(false);

  const explosionAudio = useAudio(explosionURL);

  const BalloonIcon = balloonIcons[index];

  const handleClick = () => {
    const currentSolution = currentTable.tableOf * currentTable.randomNumbers[count];

    if (solution === currentSolution) {
      setCount(count + 1);
      setIsExplosed(true);
      explosionAudio.play();
    } else setIsGameOver(true);
  };

  useEffect(() => {
    if (isExplosed) {
      const timer = setTimeout(() => {
        setToRemove(true);
      }, configConfetti.duration);

      return () => clearTimeout(timer);
    }
  }, [isExplosed]);

  if (isExplosed)
    return (
      <div className="BalloonNumber">
        {!toRemove && <ConfettiExplosion {...configConfetti} />}
      </div>
    );

  return (
    <button onClick={handleClick} className={`BalloonNumber zigzag${index}`}>
      <BalloonIcon className="balloonIcon" />

      <div className="solution">{solution}</div>
    </button>
  );
}
