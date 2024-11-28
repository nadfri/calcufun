import './InstallPWA.scss';
import IosShareIcon from '@assets/icons/ios-share.svg?react';
import { useEffect, useRef, useState } from 'react';

const DURATION = 3000;

export default function InstallPWA() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  const promptRef = useRef<BeforeInstallPromptEvent | null>(null);
  const timeoutId = useRef<number>();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    /*iOS*/
    if (isIOS) {
      setIsVisible(true);
      timeoutId.current = setTimeout(() => setIsVisible(false), DURATION);

      return () => clearTimeout(timeoutId.current);
    }

    /*Android*/
    const handleBeforeInstallPrompt = (event: Event) => {
      const beforeInstallPromptEvent = event as BeforeInstallPromptEvent;
      beforeInstallPromptEvent.preventDefault();
      promptRef.current = beforeInstallPromptEvent;

      setIsVisible(true);
      timeoutId.current = setTimeout(() => setIsVisible(false), DURATION);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, [isIOS]);

  const handleInstall = () => {
    promptRef.current?.prompt();
  };

  return isIOS ? (
    <div className={`InstallPWA ios ${isVisible ? 'show' : ''}`}>
      To install click <IosShareIcon className="icon" /> and Add to Home Screen
    </div>
  ) : (
    <button
      className={`InstallPWA ${isVisible ? 'show' : ''}`}
      onClick={handleInstall}
      aria-label="Install CalcuFun"
    >
      Click here to install CalculFun 👍
    </button>
  );
}
