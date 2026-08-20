import type { Metadata } from 'next';
import TurkishTrustPage from '@/components/TurkishTrustPage';

export const metadata: Metadata = { title: { absolute: 'Gizlilik Politikası | DearPassengers.net Türkçe' }, description: 'DearPassengers.net Türkçe bölümünde gizlilik, çerez, reklam, analiz, dış bağlantı ve iletişim verilerinin kullanımı.', alternates: { canonical: '/tr/gizlilik/', languages: { en: '/privacy-policy/', ar: '/ar/privacy-policy/', de: '/de/datenschutz/', tr: '/tr/gizlilik/', 'pt-BR': '/pt-br/privacidade/', es: '/es/privacidad/', 'my-MM': '/my/privacy-policy/', 'x-default': '/privacy-policy/' } } };
export default function TurkishPrivacyPage() { return <TurkishTrustPage title="Gizlilik politikası" englishPath="/privacy-policy/" lede="Son kapsamlı güncelleme: 20 Ağustos 2026. Bu politika, DearPassengers.net Türkçe bölümünü ziyaret ederken hangi teknik verilerin işlenebileceğini, Google Analytics ve AdSense hizmetlerinin hangi koşullarda çalıştığını, onay tercihlerinin nasıl yönetildiğini ve ziyaretçilerin hangi gizlilik seçeneklerine sahip olduğunu açıklar." sections={[
  {
    heading: 'Kapsam, site amacı ve iletişim noktası',
    paragraphs: [
      'DearPassengers.net, Dear Passengers adlı oyun hakkında bağımsız editoryal rehberler yayımlayan bir bilgi sitesidir. FLEXUS, Valve veya Steam ile bağlantılı değildir; oyun satmaz, kullanıcı hesabı oluşturmaz ve oyun dosyası barındırmaz. Bu Türkçe politika, /tr/ bölümündeki sayfalara ve bu sayfalardan kullanılan ölçüm, güvenlik, reklam, dış bağlantı ve iletişim süreçlerine uygulanır. İngilizce ana gizlilik politikası dil menüsünden açılabilir ve daha geniş teknik ayrıntılar içerir.',
      'Gizlilik, düzeltme veya kişisel bilgi talebi için hello@dearpassengers.net adresine yazabilirsiniz. Mesajınızda yalnız gerekli bilgileri paylaşın. Steam parolası, ödeme kartı, kimlik belgesi, oyun anahtarı veya hesap kurtarma kodu göndermeyin. Site, FLEXUS ya da Steam adına destek veremez; oyun hesabı ve satın alma sorunları ilgili resmî hizmete iletilmelidir.',
    ],
  },
  {
    heading: 'Bir ziyaret sırasında oluşabilecek teknik veriler',
    paragraphs: [
      'Web sunucusu, güvenlik katmanı ve etkinleştirilmiş ölçüm hizmetleri bir sayfayı sunmak, kötüye kullanımı azaltmak ve teknik hataları araştırmak için IP adresi, istek zamanı, ziyaret edilen yol, yönlendiren sayfa, cihaz türü, işletim sistemi, tarayıcı sürümü, ekran kategorisi ve yaklaşık bölge gibi teknik sinyalleri işleyebilir. Yaklaşık bölge, ağ adresinden ülke veya şehir düzeyinde çıkarılabilir; site tarayıcıdan kesin GPS konumu istemez.',
      'DearPassengers.net üzerinde kayıt, profil, yorum alanı, ödeme formu veya bülten üyeliği bulunmaz. Bu nedenle ziyaretçinin gerçek adı, Steam kimliği, telefon numarası, arkadaş listesi, oyun içi etkinliği ya da ödeme bilgisi site işlevi olarak toplanmaz. Bir e-posta gönderdiğinizde adresiniz, mesaj içeriği, zaman ve eklediğiniz kaynak bağlantıları talebi yanıtlamak ve gerektiğinde düzeltmeyi belgelemek için işlenir.',
    ],
  },
  {
    heading: 'Çerezler, yerel depolama ve benzer teknolojiler',
    paragraphs: [
      'Çerez, tarayıcının bir hizmet adına sakladığı küçük bir değerdir. Yerel depolama, piksel, web işaretçisi ve cihaz veya tarayıcı tanımlayıcıları benzer amaçlarla kullanılabilir. Bu teknolojiler bir onay tercihini hatırlayabilir, tekrarlanan reklamları sınırlandırabilir, toplu performans ölçümü yapabilir, güvenlik olaylarını ayırt edebilir veya geçersiz etkinliği azaltabilir.',
      'Tarayıcı ayarlarından çerezleri engelleyebilir ya da silebilirsiniz. Depolamayı silmek daha önce verdiğiniz bir gizlilik tercihini de kaldırabilir ve onay mesajının tekrar görünmesine neden olabilir. Bazı ölçüm veya reklam özellikleri depolama olmadan sınırlı çalışabilir. Site temel makale metnini okumak için oyun hesabı, üyelik çerezi veya ödeme çerezi gerektirmez.',
    ],
  },
  {
    heading: 'Google Analytics ile site kalitesi ölçümü',
    paragraphs: [
      'Google Analytics 4, hangi rehberlerin okunduğunu, cihaz kategorilerini, yönlendiren kaynakları ve gezinme sırasında oluşabilecek sorunları toplu olarak anlamaya yardımcı olabilir. Bölge ve onay durumuna bağlı olarak Google; URL, yönlendiren sayfa, sayfa etkileşimi, tarayıcı bilgisi, yaklaşık konum ve çerez ya da benzer tanımlayıcıları işleyebilir. IP anonimleştirme ayarı kullanılır; yine de bir ağ adresi bağlantının kurulması ve yaklaşık bölgenin türetilmesi sırasında teknik olarak işlenebilir.',
      'Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre için analiz depolaması varsayılan olarak reddedilir ve geçerli bir seçim beklenir. Toplu raporlar, gerçek bir kişiyi isimle tanımak veya Steam hesabıyla eşleştirmek için kullanılmaz. Site, analiz verilerine e-posta adresi, telefon numarası ya da iletişim mesajı gönderecek özel bir veri katmanı kurmaz.',
    ],
  },
  {
    heading: 'Google AdSense, üçüncü taraf reklam ve tanımlayıcılar',
    paragraphs: [
      'Desteklenen dillerdeki normal içerik sayfaları Google AdSense kodu içerebilir. Bir reklam istendiğinde veya gösterildiğinde Google ve katılan üçüncü taraf sağlayıcılar; çerez okuyabilir ya da yerleştirebilir, yerel depolama veya web işaretçisi kullanabilir ve IP adresi, onay sinyali, cihaz ve tarayıcı bilgisi, sayfa bağlamı, reklam etkileşimi ile güvenlik veya dolandırıcılık sinyallerini işleyebilir. Bu işlemler reklam sunumu, ölçüm, sıklık sınırlama ve geçersiz trafik önleme amaçlarına hizmet edebilir.',
      'Kişiselleştirilmiş reklamlar yalnız yürürlükteki hukuk, kullanıcının geçerli tercihi ve AdSense hesap ayarları izin verdiğinde kullanılmalıdır. Kişiselleştirilmemiş reklamlar da sıklık sınırlama, toplu raporlama, güvenlik ve dolandırıcılık önleme için bazı teknolojilere ihtiyaç duyabilir. Hakkımızda, iletişim, editoryal politika ve gizlilik sayfaları reklam yükleyicisinden çıkarılmıştır. Google Publisher ürünlerinin desteklemediği ana dildeki Myanmar bölümü de reklam kodu yüklemez.',
    ],
  },
  {
    heading: 'Avrupa onayı ve gizlilik tercihlerini yeniden açma',
    paragraphs: [
      'Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre ziyaretçileri için reklam depolaması, analiz depolaması, reklam kullanıcı verisi ve reklam kişiselleştirmesi başlangıçta reddedilir. Google tarafından sertifikalandırılmış onay mesajı AdSense hesabında yayımlandığında ziyaretçi kabul, ret ve amaç veya sağlayıcı yönetimi seçeneklerini görmelidir. Consent Mode, uygun seçimi Google etiketlerine iletir; varsayılan reddetme tek başına kullanıcının tercihini toplayan bir onay platformu değildir.',
      'Bölgenizde etkin bir mesaj varsa altbilgide “Gizlilik ve çerez ayarları” düğmesi görünür ve önceki seçimi yeniden açar. Düğmenin görünmemesi, hesap tarafındaki mesajın yayımlanmadığı, bölgeye uygulanmadığı veya sağlayıcı arayüzünün henüz hazır olmadığı anlamına gelebilir. Site sahibi, AdSense “Gizlilik ve mesajlar” bölümünde sertifikalı mesajın yayımlanma ve bölgesel hedefleme durumunu ayrıca doğrulamalıdır.',
    ],
  },
  {
    heading: 'Dış bağlantılar, Steam ve gizlilik geliştirilmiş videolar',
    paragraphs: [
      'Rehberler Steam mağazasına, FLEXUS kaynaklarına, doğrudan röportajlara ve bazen başka yayınlara bağlantı verir. Bir dış bağlantıyı açtığınızda hedef site IP adresi, tarayıcı bilgisi, yönlendiren sayfa ve kendi hesabınızla ilişkili verileri kendi politikası kapsamında işleyebilir. DearPassengers.net bu sitelerin çerezlerini, satın alma işlemlerini, destek sistemlerini veya veri saklama kararlarını kontrol etmez.',
      'YouTube videoları mümkün olduğunda youtube-nocookie.com alan adıyla gizlilik geliştirilmiş biçimde gömülür. Buna rağmen oynatmayı başlatmak Google hizmetlerine bağlantı kurulmasına ve ilgili teknik verilerin işlenmesine neden olabilir. Bilinmeyen APK, crack, anahtar veya doğrudan indirme sayfalarına bağlantı verilmemesi hem ürün doğruluğunu hem kullanıcı güvenliğini korumayı amaçlar.',
    ],
  },
  {
    heading: 'İletişim mesajları, amaç ve saklama',
    paragraphs: [
      'Bir kaynak, düzeltme, telif, atıf veya gizlilik sorusu gönderdiğinizde e-posta adresiniz ve mesajınız talebi incelemek, yanıtlamak, kötüye kullanımı önlemek ve ilgili editoryal kararı belgelemek için kullanılabilir. Mesaj başka bir hak sahibini ya da geliştirici açıklamasını ilgilendiriyorsa, yalnız çözüm için gerekli bölüm ilgili tarafla paylaşılabilir. Adresiniz reklam hedefleme listesine satılmaz ve Steam profiliyle birleştirilmez.',
      'Mesajlar, güvenlik günlükleri ve toplu ölçüm verileri amaç için gerekli olduğu, bir anlaşmazlığı çözmek gerektiği veya hizmet sağlayıcının geçerli saklama ayarı sürdüğü ölçüde tutulabilir. Her veri türü için tek bir evrensel süre vaat edilmez; çünkü e-posta, barındırma, güvenlik, Analytics ve AdSense farklı sistemlerdir. Artık gerekli olmayan bilgiler makul süreç içinde silinebilir veya kimliği belirlemeyecek şekilde toplulaştırılabilir.',
    ],
  },
  {
    heading: 'Gizlilik hakları ve kullanabileceğiniz kontroller',
    paragraphs: [
      'Bulunduğunuz ülkeye göre erişim, düzeltme, silme, işlemeyi sınırlama, itiraz veya onayı geri çekme hakkınız olabilir. Daha önce gönderdiğiniz bir e-postayla ilgili talepte aynı adresten yazmak, kaydı gereksiz ek belge istemeden bulmanın en veri-minimal yolu olabilir. Bir talebi yerine getirmeden önce kimliği ve kapsamı doğrulamak için makul bilgi istenebilir; talep başka kişilerin haklarını veya yasal saklama yükümlülüğünü etkiliyorsa sınırlar açıklanır.',
      'Google reklam kişiselleştirmesini My Ad Center veya Ads Settings üzerinden yönetebilir, desteklenen tarayıcılarda Google Analytics devre dışı bırakma eklentisini kullanabilir ve tarayıcı depolamasını silebilirsiniz. Onayı geri çekmek, geri çekmeden önce hukuka uygun biçimde yapılan işlemleri geriye dönük olarak geçersiz kılmaz. Sorunuzun çözümü için gerekli olmayan hassas bilgi göndermemeniz en güvenli seçenektir.',
    ],
  },
  {
    heading: 'Çocuklar, hassas bilgiler ve reklam kitleleri',
    paragraphs: [
      'Site genel oyun bilgisi arayan geniş bir kitleye yöneliktir; çocuk hesabı açmaz, çocuklardan profil oluşturmasını istemez ve çocuklara yönelik ilgi temelli reklam kitlesi kurmaz. Bir ebeveyn veya vasi, bir çocuğun gereksiz kişisel bilgi gönderdiğini düşünüyorsa silme incelemesi için iletişime geçebilir.',
      'Sağlık, din, etnik köken, siyasi görüş, cinsel yönelim, mali sıkıntı veya benzeri hassas kategorilerden reklam hedefleme listesi oluşturulmaz. Dear Passengers hakkındaki bir sayfayı okumak, ziyaretçi hakkında hassas bir özellik çıkarımı yapmak için kullanılmamalıdır.',
    ],
  },
  {
    heading: 'Güvenlik, hizmet sağlayıcılar ve uluslararası işleme',
    paragraphs: [
      'Site HTTPS kullanır ve erişim, veri minimizasyonu ile hizmet sağlayıcı ayarlarını makul ölçüde sınırlandırmayı amaçlar. Hiçbir internet aktarımı veya depolama sistemi mutlak güvenlik garantisi vermez. Şüpheli bir sayfa, beklenmeyen indirme veya kimlik avı benzeri davranış görürseniz URL ve ekran görüntüsüyle bildirebilirsiniz; parola veya oturum anahtarı göndermeyin.',
      'Cloudflare, Google ve e-posta altyapısı gibi sağlayıcılar verileri ziyaretçinin ülkesinden farklı ülkelerde işleyebilir. Bu sağlayıcılar kendi sözleşmeleri, güvenlik tedbirleri ve geçerli aktarım mekanizmaları kapsamında hareket eder. DearPassengers.net, dış bir sağlayıcının tüm küresel altyapısını doğrudan yönetmez.',
    ],
  },
  {
    heading: 'Politika değişiklikleri ve son kontrol',
    paragraphs: [
      'Yeni bir veri toplama yöntemi, reklam sağlayıcısı, hesap özelliği veya kullanıcı aracı eklenirse bu politika ve gerektiğinde onay akışı güncellenir. Önemli değişikliklerde sayfadaki tarih yenilenir. Yalnız yazım, biçim veya bağlantı düzeltmesi yapılması sahte bir yeni gizlilik dönemi oluşturmaz.',
      'Bu sayfa uygulamadaki mevcut kodu açıklar; ancak Google sertifikalı onay mesajının gerçek yayımlanma durumu AdSense hesabında ayrıca kontrol edilmelidir. Politika hakkında soru, kişisel bilgi talebi veya yanlış açıklama bildirimi için hello@dearpassengers.net adresini kullanabilirsiniz.',
    ],
  },
]} />; }
