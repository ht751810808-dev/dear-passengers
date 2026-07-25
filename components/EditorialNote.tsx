import Link from 'next/link';

type EditorialNoteProps = {
  checked?: string;
  note?: string;
  locale?: 'en' | 'zh-CN' | 'de' | 'ar';
};

export default function EditorialNote({
  checked = 'July 19, 2026',
  note = 'Facts are checked against first-party sources and clearly separated from trailer interpretation.',
  locale = 'en',
}: EditorialNoteProps) {
  const isChinese = locale === 'zh-CN';
  const isGerman = locale === 'de';
  const isArabic = locale === 'ar';
  return (
    <aside className="editorial-note" aria-label={isChinese ? '编辑核验说明' : isGerman ? 'Redaktioneller Prüfhinweis' : isArabic ? 'ملاحظة التحقق التحريري' : 'Editorial verification note'}>
      <div>
        <span>{isChinese ? '编辑核验' : isGerman ? 'REDAKTIONSPRÜFUNG' : isArabic ? 'التحقق التحريري' : 'EDITORIAL DESK'}</span>
        <strong>{isChinese ? 'DearPassengers.net 编辑团队' : isGerman ? 'DearPassengers.net Redaktion' : isArabic ? 'فريق تحرير DearPassengers.net' : 'DearPassengers.net Editorial Team'}</strong>
      </div>
      <p>{note}</p>
      <div className="editorial-note-links">
        <small>{isChinese ? `最后核验：${checked}` : isGerman ? `Zuletzt geprüft: ${checked}` : isArabic ? `آخر تحقق: ${checked}` : `Last verified ${checked}`}</small>
        <Link href={isGerman ? '/de/redaktionsrichtlinien/' : isArabic ? '/ar/editorial-policy/' : '/editorial-policy'} hrefLang={isGerman ? 'de' : isArabic ? 'ar' : 'en'}>
          {isChinese ? '查看资料核验方法' : isGerman ? 'So prüfen wir Quellen' : isArabic ? 'كيف نتحقق من المعلومات' : 'How we verify information'} →
        </Link>
      </div>
    </aside>
  );
}
