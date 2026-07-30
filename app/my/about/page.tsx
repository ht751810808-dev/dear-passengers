import type { Metadata } from 'next';
import MyanmarTrustPage from '@/components/MyanmarTrustPage';

export const metadata: Metadata = {
  title: { absolute: 'DearPassengers.net အကြောင်း: မြန်မာဘာသာ Independent Guide' },
  description: 'Dear Passengers မြန်မာဘာသာလမ်းညွှန်၏ ရည်ရွယ်ချက်၊ လွတ်လပ်မှု၊ local search research၊ source နှင့် ပြင်ဆင်မှုလုပ်ငန်းစဉ်။',
  alternates: {
    canonical: '/my/about/',
    languages: {
      en: '/about/',
      ar: '/ar/about/',
      de: '/de/ueber-uns/',
      tr: '/tr/hakkimizda/',
      'pt-BR': '/pt-br/sobre/',
      es: '/es/sobre/',
      'my-MM': '/my/about/',
      'x-default': '/about/',
    },
  },
};

export default function Page() {
  return (
    <MyanmarTrustPage
      title="DearPassengers.net မြန်မာဘာသာလမ်းညွှန်အကြောင်း"
      lede="DearPassengers.net သည် Dear Passengers ကို စစ်ဆေးနိုင်သော source များနှင့် မြန်မာနိုင်ငံ၏ တကယ့် search query များအပေါ် အခြေခံ၍ ရှင်းပြသည့် independent၊ unofficial guide ဖြစ်သည်။"
      englishPath="/about/"
      sections={[
        {
          heading: 'ဘာလုပ်ပေးသလဲ',
          paragraphs: [
            'ကစားနည်း၊ ထွက်မည့်ရက်၊ PC requirements၊ ကစားသမားအရေအတွက်၊ demo၊ download လုံခြုံရေး၊ trailer နှင့် သတင်းကို သီးခြားဆုံးဖြတ်ချက်အလိုက် စာမျက်နှာခွဲထားသည်။ `Dear Passengers ဒေါင်းနည်း` ကဲ့သို့ မြန်မာနိုင်ငံမှ query ကို စစ်ပြီးမှ title နှင့် အဖြေဖွဲ့သည်။',
            'Dear Passengers သည် product brand ဖြစ်သည်။ ဤဝဘ်ဆိုက်သည် developer၊ publisher သို့မဟုတ် store မဟုတ်ဘဲ game key၊ installer၊ APK သို့မဟုတ် demo access မပေးပါ။',
          ],
        },
        {
          heading: 'Source နှင့် လွတ်လပ်မှု',
          paragraphs: [
            'Platform၊ play mode၊ language နှင့် PC specs အတွက် Steam ကို ဦးစားပေးပြီး FLEXUS official announcement နှင့် direct interview ကို context အဖြစ် သုံးသည်။ Forum မေးခွန်းက demand ကို ပြနိုင်သော်လည်း feature ကို မအတည်ပြုနိုင်ပါ။',
            'ဝဘ်ဆိုက်တွင် ကြော်ငြာ သို့မဟုတ် external link ရှိနိုင်သော်လည်း source မရှိသော claim ကို အချက်အလက်အဖြစ် ပြောင်းမပေးပါ။',
          ],
        },
        {
          heading: 'ပြင်ဆင်မှု',
          paragraphs: [
            'Primary source အသစ်က စာမျက်နှာတစ်ခုကို ဆန့်ကျင်ပါက fact၊ verified date၊ schema၊ sitemap နှင့် ဆက်စပ်ဘာသာဗားရှင်းများကို update မည်။ Contact စာမျက်နှာမှ exact URL နှင့် source ပေးပို့နိုင်သည်။',
          ],
        },
      ]}
    />
  );
}
