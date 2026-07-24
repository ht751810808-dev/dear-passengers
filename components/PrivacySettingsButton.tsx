'use client';

import { useEffect, useState } from 'react';

type TcfData = {
  gdprApplies?: boolean;
};

type GoogleFc = {
  callbackQueue: Array<Record<string, () => void>>;
  showRevocationMessage?: () => void;
};

declare global {
  interface Window {
    googlefc?: GoogleFc;
    __tcfapi?: (
      command: string,
      version: number,
      callback: (data: TcfData | undefined, success: boolean) => void,
    ) => void;
  }
}

export default function PrivacySettingsButton({
  locale = 'en',
  className = '',
}: {
  locale?: 'en' | 'zh-CN' | 'de';
  className?: string;
}) {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const googlefc = window.googlefc || { callbackQueue: [] };
    window.googlefc = googlefc;
    googlefc.callbackQueue = googlefc.callbackQueue || [];
    googlefc.callbackQueue.push({
      CONSENT_API_READY: () => {
        if (!window.__tcfapi) {
          setAvailable(Boolean(window.googlefc?.showRevocationMessage));
          return;
        }

        window.__tcfapi('addEventListener', 0, (data, success) => {
          setAvailable(Boolean(success && data?.gdprApplies && window.googlefc?.showRevocationMessage));
        });
      },
    });
  }, []);

  if (!available) return null;

  return (
    <button
      className={className}
      type="button"
      onClick={() => window.googlefc?.showRevocationMessage?.()}
    >
      {locale === 'zh-CN' ? '隐私与 Cookie 设置' : locale === 'de' ? 'Datenschutz- und Cookie-Einstellungen' : 'Privacy and cookie settings'}
    </button>
  );
}
