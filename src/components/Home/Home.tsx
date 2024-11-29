import { Settings } from '@components/Settings/Settings';
import './Home.scss';
import { SweetList } from '@components/SweetList/SweetList';
import Title from '@components/Title/Title';
import { useState } from 'react';
import SettingsIcon from '@assets/icons/settings.svg?react';

export default function Home() {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  return (
    <div className="Home">
      <Title />
      <SweetList />

      <SettingsIcon className="SettingsIcon" onClick={() => setIsOpenSettings(true)} />
      {isOpenSettings && <Settings closeSettings={() => setIsOpenSettings(false)} />}
    </div>
  );
}
