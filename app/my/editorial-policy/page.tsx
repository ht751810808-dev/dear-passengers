import type { Metadata } from 'next';
import MyanmarTrustPage from '@/components/MyanmarTrustPage';

export const metadata: Metadata = {
  title: { absolute: 'Editorial Policy နှင့် Source စစ်ဆေးနည်း | Dear Passengers မြန်မာ' },
  description: 'Dear Passengers မြန်မာဘာသာလမ်းညွှန်တွင် confirmed၊ observed၊ planned နှင့် unknown အချက်အလက်များကို ဘယ်လိုခွဲသလဲ။',
  alternates: {
    canonical: '/my/editorial-policy/',
    languages: {
      en: '/editorial-policy/',
      ar: '/ar/editorial-policy/',
      de: '/de/redaktionsrichtlinien/',
      tr: '/tr/editorial-policy/',
      'pt-BR': '/pt-br/politica-editorial/',
      es: '/es/politica-editorial/',
      'my-MM': '/my/editorial-policy/',
      'x-default': '/editorial-policy/',
    },
  },
};

export default function Page() {
  return (
    <MyanmarTrustPage
      title="Editorial policy နှင့် အချက်အလက်စစ်ဆေးနည်း"
      lede="မထွက်သေးသောဂိမ်းအကြောင်း claim တစ်ခုစီတွင် ရှင်းလင်းသော status နှင့် အရေးပါမှုနှင့်ကိုက်ညီသော source လိုအပ်သည်။"
      englishPath="/editorial-policy/"
      sections={[
        {
          heading: 'အချက်အလက် status လေးမျိုး',
          paragraphs: [
            'Confirmed သည် Steam၊ FLEXUS သို့မဟုတ် primary source က တိုက်ရိုက်ပြောထားသည့်အချက်ဖြစ်သည်။ Observed သည် scene ထဲတွင် မြင်ရသည့်အရာကိုသာ ဆိုသည်။ Planned သည် ပြောင်းနိုင်သော အနာဂတ်ရည်ရွယ်ချက်ဖြစ်ပြီး Unknown သည် မကြေညာသေးသောအချက်ကို ဖွင့်ထားသည်။',
            'Popular tag၊ user comment၊ database placeholder date သို့မဟုတ် trailer character count ကို official specification အဖြစ် မပြောင်းပါ။',
          ],
        },
        {
          heading: 'Update နှင့် date',
          paragraphs: [
            'Time-sensitive data တွင် စစ်ဆေးသည့်ရက် ပါရှိသည်။ Source မပြောင်းဘဲ freshness ပြသရန်သာ page date မတိုးပါ။',
            'Developer-reported wishlist ကို attribution ထည့်ပြီး sale၊ download သို့မဟုတ် active player အဖြစ် မဖော်ပြပါ။',
          ],
        },
        {
          heading: 'တာဝန်ရှိသော localization',
          paragraphs: [
            'Title နှင့် route မသတ်မှတ်မီ မြန်မာနိုင်ငံ GSC query၊ Google suggestion နှင့် local usage ကို စစ်ဆေးသည်။ Brand နှင့် technical term များကို အတင်းဘာသာမပြန်ဘဲ မြန်မာရှင်းလင်းချက်နှင့် တွဲသုံးသည်။',
            'မြန်မာဘာသာဝဘ်စာမျက်နှာရှိခြင်းသည် Dear Passengers ဂိမ်းတွင် မြန်မာစာ menu၊ voice သို့မဟုတ် subtitle ပါသည်ဟု မဆိုလိုပါ။ Steam တွင် လက်ရှိမြန်မာဘာသာ support မရှိပါ။',
          ],
        },
      ]}
    />
  );
}
