import type { Metadata } from 'next';
import MyanmarTrustPage from '@/components/MyanmarTrustPage';

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | DearPassengers.net မြန်မာဘာသာ' },
  description: 'DearPassengers.net မြန်မာဘာသာကဏ္ဍ၏ technical data၊ cookie၊ advertising၊ analytics၊ external link နှင့် contact data အကြောင်း privacy policy။',
  alternates: {
    canonical: '/my/privacy-policy/',
    languages: {
      en: '/privacy-policy/',
      ar: '/ar/privacy-policy/',
      de: '/de/datenschutz/',
      tr: '/tr/gizlilik/',
      'pt-BR': '/pt-br/privacidade/',
      es: '/es/privacidad/',
      'my-MM': '/my/privacy-policy/',
      'x-default': '/privacy-policy/',
    },
  },
};

export default function Page() {
  return (
    <MyanmarTrustPage
      title="Privacy policy"
      lede="DearPassengers.net က technical data၊ consent preference၊ advertising၊ analytics နှင့် contact message ကို ဘယ်လိုကိုင်တွယ်နိုင်သလဲဆိုတာ အကျဉ်းချုပ်ထားသည်။"
      englishPath="/privacy-policy/"
      sections={[
        {
          heading: 'Technical data နှင့် cookie',
          paragraphs: [
            'Hosting နှင့် security service များသည် site ကို လည်ပတ်ကာကွယ်ရန် IP address၊ user agent၊ request time နှင့် URL ကို log လုပ်နိုင်သည်။ Cookie preference ကို သင်၏ရွေးချယ်မှုမှတ်ထားရန် သိမ်းနိုင်သည်။',
            'Analytics နှင့် advertising service များကို သက်ဆိုင်ရာ consent setting နှင့်အညီသာ ဖွင့်သင့်သည်။ Footer မှ privacy preference ကို ပြန်စစ်နိုင်သည်။',
          ],
        },
        {
          heading: 'Advertising နှင့် external link',
          paragraphs: [
            'Advertising provider များသည် consent နှင့် သူတို့၏ policy အရ identifier သို့မဟုတ် cookie ကို အသုံးပြုနိုင်သည်။ Steam၊ FLEXUS နှင့် အခြား external site များတွင် သူတို့၏ privacy policy ရှိသည်။',
            'ဤဆိုက်သည် Dear Passengers ကို မရောင်း၊ payment မလုပ်ဆောင်၊ Steam credential မတောင်းပါ။',
          ],
        },
        {
          heading: 'Contact နှင့် data retention',
          paragraphs: [
            'Correction email တွင် သင်ရွေးချယ်ပေးပို့သည့်အချက်အလက် ပါဝင်ပြီး အဖြေပြန်ရန်နှင့် ပြင်ဆင်မှုမှတ်တမ်းထားရန် လိုအပ်သလောက်သာ သိမ်းထားသည်။ သက်ဆိုင်ရာအခွင့်အရေးရှိပါက contact@dearpassengers.net မှ access သို့မဟုတ် deletion တောင်းနိုင်သည်။',
          ],
        },
      ]}
    />
  );
}
