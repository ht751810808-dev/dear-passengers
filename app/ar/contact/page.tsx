import type { Metadata } from 'next';
import ArabicTrustPage from '@/components/ArabicTrustPage';

export const metadata: Metadata = { title: { absolute: 'تواصل مع DearPassengers.net وأرسل تصحيحاً' }, description: 'أرسل تصحيحاً أو مصدراً أو ملاحظة عن النسخة العربية المستقلة من دليل Dear Passengers.', alternates: { canonical: '/ar/contact/', languages: { en: '/contact/', ar: '/ar/contact/', de: '/de/kontakt/', tr: '/tr/iletisim/', 'x-default': '/contact/' } } };
export default function ArabicContactPage() { return <ArabicTrustPage title="التواصل والتصحيحات" englishPath="/contact/" lede="نرحب بالمصادر الأولية والتصحيحات المتعلقة باللعبة أو التوطين العربي. DearPassengers.net ليس قناة دعم تابعة إلى FLEXUS ولا يستطيع منح مفاتيح أو وصول إلى الديمو." sections={[
  { heading: 'البريد الإلكتروني', paragraphs: ['أرسل رسالتك إلى hello@dearpassengers.net مع رابط الصفحة وعنوان مختصر. للتصحيح، أرفق رابط Steam أو منشور FLEXUS أو المقابلة الأصلية والسياق الذي يوضح التغيير.', 'لا ترسل ملفات تنفيذية أو APK أو بيانات تسجيل دخول. لن نطلب كلمة مرور Steam أو دفعاً مقابل مفتاح.'] },
  { heading: 'ما الذي يساعد المراجعة؟', paragraphs: ['اذكر العبارة الحالية، ولماذا تعتقد أنها غير دقيقة، وتاريخ المصدر. إذا كان الاقتراح لغوياً فاذكر البلد أو السياق الذي تستخدم فيه الصيغة.', 'لا يكفي رابط إلى صفحة تنسخ خبراً بلا مصدر. سنبحث عن الأصل قبل تحديث الموعد أو السعر أو الميزة.'] },
  { heading: 'طلبات الصحافة والحقوق', paragraphs: ['يمكن لأصحاب الحقوق طلب تحديث نسبة صورة أو مراجعة استخدام مادة مع تحديد الملف والصفحة. نتعامل مع الطلبات الموثقة بسرعة.', 'للحصول على معلومات رسمية أو مفاتيح مراجعة أو دعم تقني، تواصل مع FLEXUS عبر قنواتها الرسمية؛ هذا الموقع مستقل.'] },
]} />; }
