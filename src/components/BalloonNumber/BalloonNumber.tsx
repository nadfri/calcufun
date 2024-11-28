import './BalloonNumber.scss';
import { useEffect, useState } from 'react';
import { useAudio } from '@hooks/useAudio';
import { useStoreGame } from '@store/useStoreGame';

import explosionURL from '@assets/sounds/explosion.mp3';
import ConfettiExplosion from 'react-confetti-explosion';
import { balloonIcons } from './balloonIcons';
import { FINAL_LEVEL } from '@init/init';

const configConfetti = {
  force: 0.4,
  duration: 2200,
  particleCount: 30,
  width: 400,
};

export function BalloonNumber({ index }: { index: number }) {
  const { count, setCount, currentTable, setIsGameOver } = useStoreGame();
  const [isExplosed, setIsExplosed] = useState(false);
  const [toRemove, setToRemove] = useState(false);

  const explosionAudio = useAudio(explosionURL);

  const balloonIndex = index % balloonIcons.length; /*Number of icons/zigzag*/
  const BalloonIcon = balloonIcons[balloonIndex];

  const tableOf =
    currentTable.tableOf !== FINAL_LEVEL
      ? currentTable.tableOf
      : currentTable.randomNumbers2[count];

  const currentSolution = currentTable.solutions[index];
  const solutionCalculed = currentTable.randomNumbers[count] * tableOf;

  const handleClick = () => {
    if (solutionCalculed === currentSolution) {
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
    <button onClick={handleClick} className={`BalloonNumber zigzag${balloonIndex}`}>
      <BalloonIcon className="balloonIcon" />

      <div className="solution">{currentSolution}</div>
    </button>
  );
}
