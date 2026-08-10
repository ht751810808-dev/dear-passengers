import Link from 'next/link';

type EditorialNoteProps = {
  checked?: string;
  note?: string;
  locale?: 'en' | 'zh-CN' | 'de' | 'ar' | 'tr' | 'pt-BR' | 'es' | 'my-MM' | 'it';
};

export default function EditorialNote({
  checked = 'July 19, 2026',
  note = 'Facts are checked against first-party sources and clearly separated from trailer interpretation.',
  locale = 'en',
}: EditorialNoteProps) {
  const isChinese = locale === 'zh-CN';
  const isGerman = locale === 'de';
  const isArabic = locale === 'ar';
  const isTurkish = locale === 'tr';
  const isPortuguese = locale === 'pt-BR';
  const isSpanish = locale === 'es';
  const isMyanmar = locale === 'my-MM';
  const isItalian = locale === 'it';
  return (
    <aside className="editorial-note" aria-label={isChinese ? '编辑核验说明' : isGerman ? 'Redaktioneller Prüfhinweis' : isArabic ? 'ملاحظة التحقق التحريري' : isTurkish ? 'Editoryal doğrulama notu' : isPortuguese ? 'Nota de verificação editorial' : isSpanish ? 'Nota de verificación editorial' : isMyanmar ? 'အယ်ဒီတာအဖွဲ့ အတည်ပြုချက်' : isItalian ? 'Nota di verifica editoriale' : 'Editorial verification note'}>
      <div>
        <span>{isChinese ? '编辑核验' : isGerman ? 'REDAKTIONSPRÜFUNG' : isArabic ? 'التحقق التحريري' : isTurkish ? 'EDİTORYAL DOĞRULAMA' : isPortuguese ? 'VERIFICAÇÃO EDITORIAL' : isSpanish ? 'VERIFICACIÓN EDITORIAL' : isMyanmar ? 'အယ်ဒီတာအတည်ပြုချက်' : isItalian ? 'VERIFICA EDITORIALE' : 'EDITORIAL DESK'}</span>
        <strong>{isChinese ? 'DearPassengers.net 编辑团队' : isGerman ? 'DearPassengers.net Redaktion' : isArabic ? 'فريق تحرير DearPassengers.net' : isTurkish ? 'DearPassengers.net Türkçe Editör Ekibi' : isPortuguese ? 'Equipe editorial brasileira do DearPassengers.net' : isSpanish ? 'Equipo editorial en español de DearPassengers.net' : isMyanmar ? 'DearPassengers.net မြန်မာအယ်ဒီတာအဖွဲ့' : isItalian ? 'Redazione italiana di DearPassengers.net' : 'DearPassengers.net Editorial Team'}</strong>
      </div>
      <p>{note}</p>
      <div className="editorial-note-links">
        <small>{isChinese ? `最后核验：${checked}` : isGerman ? `Zuletzt geprüft: ${checked}` : isArabic ? `آخر تحقق: ${checked}` : isTurkish ? `Son kontrol: ${checked}` : isPortuguese ? `Última verificação: ${checked}` : isSpanish ? `Última verificación: ${checked}` : isMyanmar ? `နောက်ဆုံးစစ်ဆေးသည့်ရက် — ${checked}` : isItalian ? `Ultima verifica: ${checked}` : `Last verified ${checked}`}</small>
        <Link href={isGerman ? '/de/redaktionsrichtlinien/' : isArabic ? '/ar/editorial-policy/' : isTurkish ? '/tr/editorial-policy/' : isPortuguese ? '/pt-br/politica-editorial/' : isSpanish ? '/es/politica-editorial/' : isMyanmar ? '/my/editorial-policy/' : '/editorial-policy'} hrefLang={isGerman ? 'de' : isArabic ? 'ar' : isTurkish ? 'tr' : isPortuguese ? 'pt-BR' : isSpanish ? 'es' : isMyanmar ? 'my-MM' : 'en'}>
          {isChinese ? '查看资料核验方法' : isGerman ? 'So prüfen wir Quellen' : isArabic ? 'كيف نتحقق من المعلومات' : isTurkish ? 'Bilgiyi nasıl doğruluyoruz' : isPortuguese ? 'Como verificamos as informações' : isSpanish ? 'Cómo verificamos la información' : isMyanmar ? 'အချက်အလက်စစ်ဆေးပုံကို ဖတ်ရန်' : isItalian ? 'Come verifichiamo le informazioni' : 'How we verify information'} →
        </Link>
      </div>
    </aside>
  );
}
