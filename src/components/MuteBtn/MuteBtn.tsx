import './MuteBtn.scss';
import { useStoreGame } from '@store/useStoreGame';
import MuteIcon from '@assets/icons/mute.svg?react';
import UnMuteIcon from '@assets/icons/unmute.svg?react';

export function MuteBtn() {
  const { isMute, setIsMute } = useStoreGame();

  const toggleMute = () => {
    setIsMute(!isMute);
  };

  return (
    <button className="MuteBtn" onClick={toggleMute}>
      {isMute ? <MuteIcon className="icon" /> : <UnMuteIcon />}
    </button>
  );
}
