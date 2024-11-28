/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface Window {
  onbeforeinstallprompt?: (event: BeforeInstallPromptEvent) => void;
}
