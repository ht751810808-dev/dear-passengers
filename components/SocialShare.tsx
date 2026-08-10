'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';

type CopyState = 'idle' | 'copied' | 'failed';
type Locale = 'en' | 'zh' | 'de' | 'ar' | 'tr' | 'it';

const labels = {
  en: { share: 'Share', title: 'Share this guide', copy: 'Copy link', copied: 'Link copied', failed: 'Could not copy', close: 'Close share menu' },
  zh: { share: '分享', title: '分享这篇指南', copy: '复制链接', copied: '链接已复制', failed: '复制失败', close: '关闭分享菜单' },
  de: { share: 'Teilen', title: 'Diesen Guide teilen', copy: 'Link kopieren', copied: 'Link kopiert', failed: 'Kopieren fehlgeschlagen', close: 'Teilen-Menü schließen' },
  ar: { share: 'مشاركة', title: 'شارك هذا الدليل', copy: 'نسخ الرابط', copied: 'تم نسخ الرابط', failed: 'تعذر النسخ', close: 'إغلاق قائمة المشاركة' },
  tr: { share: 'Paylaş', title: 'Bu rehberi paylaş', copy: 'Bağlantıyı kopyala', copied: 'Bağlantı kopyalandı', failed: 'Kopyalanamadı', close: 'Paylaşım menüsünü kapat' },
  it: { share: 'Condividi', title: 'Condividi questa guida', copy: 'Copia link', copied: 'Link copiato', failed: 'Copia non riuscita', close: 'Chiudi il menu di condivisione' },
} satisfies Record<Locale, Record<string, string>>;

function localeFromPath(pathname: string): Locale {
  if (pathname.startsWith('/zh-cn')) return 'zh';
  if (pathname.startsWith('/de')) return 'de';
  if (pathname.startsWith('/ar')) return 'ar';
  if (pathname.startsWith('/tr')) return 'tr';
  if (pathname.startsWith('/it')) return 'it';
  return 'en';
}

function defaultShareTitle(locale: Locale) {
  if (locale === 'zh') return 'Dear Passengers 游戏指南';
  if (locale === 'de') return 'Dear Passengers Spiele-Guide';
  if (locale === 'ar') return 'دليل لعبة Dear Passengers';
  if (locale === 'tr') return 'Dear Passengers oyun rehberi';
  if (locale === 'it') return 'Guida italiana a Dear Passengers';
  return 'Dear Passengers game guide';
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.7 3.3 3.9 9.8c-.8.3-.8 1.4 0 1.7l6.7 2.3 2.3 6.7c.3.8 1.4.8 1.7 0l6.5-16.8c.2-.6-.4-1.2-1-1Z" />
      <path d="m10.6 13.8 4.5-4.5M10.6 13.8l3.8 2.7" />
    </svg>
  );
}

function PlatformIcon({ platform }: { platform: 'x' | 'facebook' | 'whatsapp' | 'telegram' }) {
  if (platform === 'x') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.7 3h2.9l-6.4 7.3L22.7 21h-5.9l-4.6-6-5.3 6H4l6.8-7.8L3.6 3h6l4.2 5.5L18.7 3Zm-1 16.1h1.6L8.7 4.8H7L17.7 19.1Z" />
      </svg>
    );
  }

  if (platform === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.7 21v-8h2.8l.4-3.1h-3.2V8c0-.9.3-1.5 1.6-1.5H17V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.5V13h2.8v8h3.4Z" />
      </svg>
    );
  }

  if (platform === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.1a8.8 8.8 0 0 0-7.5 13.4L3.2 21l4.6-1.2A8.9 8.9 0 1 0 12 3.1Zm0 16a7.2 7.2 0 0 1-3.7-1l-.3-.2-2.7.7.7-2.7-.2-.3A7.2 7.2 0 1 1 12 19.1Zm4-5.4c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.6.1-.1.2-.6.7-.7.9-.1.1-.3.2-.5.1-1.4-.7-2.4-1.3-3.4-2.9-.3-.5.3-.5.7-1.1.1-.1.1-.3 0-.4l-.7-1.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1 0 1.3.9 2.5 1 2.6.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1 0-.2-.2-.2-.6-.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m21.4 4.2-3 14.2c-.2 1-1.1 1.3-2 .8l-4.6-3.4-2.2 2.1c-.2.3-.5.5-.9.5l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.4 12.4 1.8 11c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.6.2 1.4 1.6Z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

export default function SocialShare() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const text = labels[locale];
  const [open, setOpen] = useState(false);
  const [copyState, setCopyState] = useState<CopyState>('idle');
  const [pageTitle, setPageTitle] = useState(() => defaultShareTitle(locale));
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const shareUrl = () => `https://dearpassengers.net${pathname}`;
  const shareTitle = () => pageTitle;

  useEffect(() => {
    setOpen(false);
    setCopyState('idle');
    setPageTitle(document.title.replace(/\s*\|\s*DearPassengers\.net$/, '') || defaultShareTitle(locale));
  }, [locale, pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const openShareMenu = async () => {
    if (typeof navigator.share === 'function' && window.matchMedia('(max-width: 800px)').matches) {
      try {
        await navigator.share({ title: shareTitle(), url: shareUrl() });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
      }
    }
    setOpen((value) => !value);
    setCopyState('idle');
  };

  const copyLink = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl());
      } else {
        const input = document.createElement('textarea');
        input.value = shareUrl();
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        const copied = document.execCommand('copy');
        input.remove();
        if (!copied) throw new Error('Copy command failed');
      }
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
  };

  const url = encodeURIComponent(shareUrl());
  const title = encodeURIComponent(pageTitle);
  const shareTargets = [
    { name: 'X', platform: 'x', className: 'share-x', href: `https://twitter.com/intent/tweet?url=${url}&text=${title}` },
    { name: 'Facebook', platform: 'facebook', className: 'share-facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { name: 'WhatsApp', platform: 'whatsapp', className: 'share-whatsapp', href: `https://wa.me/?text=${title}%20${url}` },
    { name: 'Telegram', platform: 'telegram', className: 'share-telegram', href: `https://t.me/share/url?url=${url}&text=${title}` },
  ] satisfies Array<{ name: string; platform: 'x' | 'facebook' | 'whatsapp' | 'telegram'; className: string; href: string }>;

  return (
    <div className={`social-share ${open ? 'is-open' : ''}`} ref={rootRef} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {open && (
        <div className="social-share-menu" id={menuId} role="dialog" aria-label={text.title}>
          <div className="social-share-heading">
            <span>{text.title}</span>
            <button type="button" onClick={() => setOpen(false)} aria-label={text.close}>
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5.5 5.5 9 9m0-9-9 9" /></svg>
            </button>
          </div>
          <div className="social-share-platforms">
            {shareTargets.map((target) => (
              <a
                href={target.href}
                className={target.className}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${text.share}: ${target.name}`}
                key={target.name}
              >
                <span className="social-share-platform-icon" aria-hidden="true">
                  <PlatformIcon platform={target.platform} />
                </span>
                <span className="social-share-platform-label">{target.name}</span>
              </a>
            ))}
          </div>
          <button className={`social-share-copy is-${copyState}`} type="button" onClick={copyLink}>
            <CopyIcon />
            <span>{copyState === 'copied' ? text.copied : copyState === 'failed' ? text.failed : text.copy}</span>
            <i aria-hidden="true">{copyState === 'copied' ? '✓' : '↗'}</i>
          </button>
          <span className="sr-only" aria-live="polite">
            {copyState === 'copied' ? text.copied : copyState === 'failed' ? text.failed : ''}
          </span>
        </div>
      )}
      <button
        className="social-share-trigger"
        type="button"
        aria-label={text.title}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={openShareMenu}
      >
        <span className="social-share-trigger-icon" aria-hidden="true"><ShareIcon /></span>
        <span>{text.share}</span>
      </button>
    </div>
  );
}
