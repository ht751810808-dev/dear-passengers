import Link from 'next/link';

type EditorialNoteProps = {
  checked?: string;
  note?: string;
  locale?: 'en' | 'zh-CN' | 'de';
};

export default function EditorialNote({
  checked = 'July 19, 2026',
  note = 'Facts are checked against first-party sources and clearly separated from trailer interpretation.',
  locale = 'en',
}: EditorialNoteProps) {
  const isChinese = locale === 'zh-CN';
  const isGerman = locale === 'de';
  return (
    <aside className="editorial-note" aria-label={isChinese ? '编辑核验说明' : isGerman ? 'Redaktioneller Prüfhinweis' : 'Editorial verification note'}>
      <div>
        <span>{isChinese ? '编辑核验' : isGerman ? 'REDAKTIONSPRÜFUNG' : 'EDITORIAL DESK'}</span>
        <strong>{isChinese ? 'DearPassengers.net 编辑团队' : isGerman ? 'DearPassengers.net Redaktion' : 'DearPassengers.net Editorial Team'}</strong>
      </div>
      <p>{note}</p>
      <div className="editorial-note-links">
        <small>{isChinese ? `最后核验：${checked}` : isGerman ? `Zuletzt geprüft: ${checked}` : `Last verified ${checked}`}</small>
        <Link href="/editorial-policy" hrefLang="en">
          {isChinese ? '查看资料核验方法' : isGerman ? 'So prüfen wir Quellen' : 'How we verify information'} →
        </Link>
      </div>
    </aside>
  );
}
