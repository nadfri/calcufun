import './Win.scss';
import { useAudio } from '@hooks/useAudio';
import { Modal } from '@components/Modal/Modal';
import winURL from '@assets/sounds/win.mp3';
import { useStoreGame } from '@store/useStoreGame';
import { Stars } from '@components/Stars/Stars';
import { DURATION } from '@init/init';
import { useEffect, useState } from 'react';

export function Win() {
  const { currentTime, currentTable, updateTableData } = useStoreGame();
  const [stars, setStars] = useState(0);

  useAudio(winURL).play();

  useEffect(() => {
    const durationInSeconds = DURATION / 1000;
    let newStars = 1;

    if (currentTime <= durationInSeconds * (1 / 3)) {
      newStars = 3;
    } else if (currentTime <= durationInSeconds * (2 / 3)) {
      newStars = 2;
    }

    setStars(newStars);

    // Mise à jour des étoiles dans le store si meilleur score
    updateTableData(currentTable.tableOf, { stars: Math.max(newStars, stars) });

    // Débloquer le niveau suivant si pas le dernier niveau (13)
    if (currentTable.tableOf < 13) {
      const nextTable = currentTable.tableOf + 1;
      updateTableData(nextTable, { islocked: false });
    }
  }, [currentTime, currentTable, updateTableData, stars]);

  return (
    <Modal className="Win">
      <h1>
        <span className="rotate30 red">Y</span>
        <span className="rotate15 red">O</span>
        <span className="rotate15 red">U</span> <span className="rotate15 green">W</span>
        <span className="rotate30 yellow">I</span>
        <span className="rotate15 green">N</span>
        <span className="rotate15 cyan">!</span>
      </h1>

      <p className="time">In {currentTime}s</p>

      <Stars numberOfStars={stars} />
    </Modal>
  );
}
