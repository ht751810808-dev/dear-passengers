import type { Metadata } from 'next';
import MyanmarTrustPage from '@/components/MyanmarTrustPage';

export const metadata: Metadata = {
  title: { absolute: 'ဆက်သွယ်ရန်နှင့် ပြင်ဆင်ချက်ပေးပို့ရန် | DearPassengers.net မြန်မာ' },
  description: 'Dear Passengers မြန်မာဘာသာလမ်းညွှန်အတွက် source၊ factual correction၊ copyright၊ privacy နှင့် attribution အကြောင်း ဆက်သွယ်ရန်။',
  alternates: {
    canonical: '/my/contact/',
    languages: {
      en: '/contact/',
      ar: '/ar/contact/',
      de: '/de/kontakt/',
      tr: '/tr/iletisim/',
      'pt-BR': '/pt-br/contato/',
      es: '/es/contacto/',
      'my-MM': '/my/contact/',
      'x-default': '/contact/',
    },
  },
};

export default function Page() {
  return (
    <MyanmarTrustPage
      title="ဆက်သွယ်ရန်နှင့် ပြင်ဆင်ချက်ပေးပို့ရန်"
      lede="Primary source၊ factual error၊ attribution ပြဿနာ၊ privacy request သို့မဟုတ် rights notice ကို ပေးပို့နိုင်သည်။"
      englishPath="/contact/"
      sections={[
        {
          heading: 'အသုံးဝင်သောပြင်ဆင်ချက် ဘယ်လိုပို့မလဲ',
          paragraphs: [
            'ဤဝဘ်ဆိုက် URL၊ စစ်ဆေးရမည့်စာကြောင်း၊ source link နှင့် date ကို ထည့်ပါ။ Screenshot က context ပေးနိုင်သော်လည်း public၊ verifiable page ကို ပိုမိုဦးစားပေးသည်။',
            'Editorial အတွက် contact@dearpassengers.net သို့ ပို့နိုင်သည်။ Game key၊ support၊ refund သို့မဟုတ် demo access မတောင်းပါနှင့်။ ဤဆိုက်သည် FLEXUS ကို ကိုယ်စားမပြုပါ။',
          ],
        },
        {
          heading: 'Rights နှင့် privacy',
          paragraphs: [
            'အနုပညာ၊ ပိုင်ရှင်၊ အသုံးပြုထားသည့်နေရာနှင့် တောင်းဆိုသည့် action ကို တိကျစွာ ဖော်ပြပါ။ Third-party material ကို ကိုယ်ပိုင်အဖြစ် မပြဘဲ attribution နှင့် editorial use ကို စစ်ဆေးသည်။',
            'Privacy request တွင် ဘယ် personal data က ဘယ် URL တွင် ရှိသည်ကို ရှင်းပြပါ။ Password၊ identity document သို့မဟုတ် Steam credential မပို့ပါနှင့်။',
          ],
        },
        {
          heading: 'နောက်ဆက်တွဲလုပ်ငန်းစဉ်',
          paragraphs: [
            'Source ကို စစ်ပြီး လိုအပ်ပါက သက်ဆိုင်ရာ page၊ date နှင့် language alternate များကို ပြင်ဆင်မည်။ Source မရှိသော community claim ကို မေးခွန်းအဖြစ် မှတ်တမ်းတင်နိုင်သော်လည်း fact အဖြစ် မပြပါ။',
          ],
        },
      ]}
    />
  );
}
