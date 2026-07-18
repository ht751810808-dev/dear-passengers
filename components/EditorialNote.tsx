import Link from 'next/link';

type EditorialNoteProps = {
  checked?: string;
  note?: string;
  locale?: 'en' | 'zh-CN';
};

export default function EditorialNote({
  checked = 'July 18, 2026',
  note = 'Facts are checked against first-party sources and clearly separated from trailer interpretation.',
  locale = 'en',
}: EditorialNoteProps) {
  const isChinese = locale === 'zh-CN';
  return (
    <aside className="editorial-note" aria-label={isChinese ? '编辑核验说明' : 'Editorial verification note'}>
      <div>
        <span>{isChinese ? '编辑核验' : 'EDITORIAL DESK'}</span>
        <strong>{isChinese ? 'DearPassengers.net 编辑团队' : 'DearPassengers.net Editorial Team'}</strong>
      </div>
      <p>{note}</p>
      <div className="editorial-note-links">
        <small>{isChinese ? `最后核验：${checked}` : `Last verified ${checked}`}</small>
        <Link href="/editorial-policy">{isChinese ? '查看资料核验方法' : 'How we verify information'} →</Link>
      </div>
    </aside>
  );
}
