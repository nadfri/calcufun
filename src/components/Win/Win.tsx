import './Win.scss';
import { useAudio } from '@hooks/useAudio';
import { Modal } from '@components/Modal/Modal';
import winURL from '@assets/sounds/win.mp3';
import { useStoreGame } from '@store/useStoreGame';
import { Stars } from '@components/Stars/Stars';
import { FINAL_LEVEL } from '@init/init';
import { useEffect, useState } from 'react';
import { NextBtn } from '@components/NextBtn/NextBtn';

export function Win() {
  const { currentTime, currentTable, updateTableData, tablesData, duration } =
    useStoreGame();
  const [stars, setStars] = useState(0);

  useAudio(winURL).play();

  useEffect(() => {
    let newStars = 1;

    if (currentTime <= duration * (1 / 3)) {
      newStars = 3;
    } else if (currentTime <= duration * (2 / 3)) {
      newStars = 2;
    }

    setStars(newStars);

    const currentTableData = tablesData.find(
      (table) => table.tableOf === currentTable.tableOf,
    );
    const existingStars = currentTableData?.stars || 0;

    if (newStars > existingStars) {
      updateTableData(currentTable.tableOf, { stars: newStars });
    }

    if (currentTable.tableOf < FINAL_LEVEL) {
      const nextTable = currentTable.tableOf + 1;
      updateTableData(nextTable, { islocked: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

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

      {currentTable.tableOf < FINAL_LEVEL && <NextBtn />}
    </Modal>
  );
}
