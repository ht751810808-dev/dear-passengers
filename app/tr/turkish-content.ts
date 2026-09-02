export type TurkishFaq = { question: string; answer: string };
export type TurkishSection = { id: string; kicker: string; heading: string; paragraphs: string[]; bullets?: string[] };
export type TurkishGuide = {
  slug: string; englishPath: string; germanPath: string; arabicPath: string; chinesePath?: string;
  modifiedDate?: string; verifiedDate?: string;
  keyword: string; title: string; description: string; eyebrow: string; h1: string; intro: string; answer: string; note: string;
  heroImage: string; heroAlt: string; confirmed: string[]; unknown: string[]; sections: TurkishSection[];
  localContext: string[]; faqs: TurkishFaq[]; related: string[];
};

export const turkishGuides: TurkishGuide[] = [
  {
    slug: 'dear-passengers-oynanis', englishPath: '/dear-passengers-gameplay/', germanPath: '/de/dear-passengers-gameplay/', arabicPath: '/ar/dear-passengers-gameplay/',
    keyword: 'Dear Passengers oynanış', title: 'Dear Passengers Oynanış Rehberi: Uçuş, Kabin ve Kaos',
    description: 'Dear Passengers oynanış rehberi: pilotluk, kabin görevleri, yolcu ve kargo seçimi, fizik, hava koşulları ve henüz açıklanmayan sistemler.',
    eyebrow: 'TÜRKÇE OYNANIŞ REHBERİ · 27 TEMMUZ 2026', h1: 'Dear Passengers oynanış: uçuş ekibi nasıl çalışıyor?',
    intro: 'Dear Passengers oynanış yapısı, uçağı kullanan pilot ile kabinde yolcu ve kargoyla ilgilenen ekibin birbirini etkileyen görevlerine dayanıyor. Bu rehber resmî Steam açıklamasını, iki FLEXUS videosunda görülen sahneleri ve henüz açıklanmayan ayrıntıları birbirinden ayırır.',
    answer: 'Dear Passengers oynanış döngüsünde ekip kalkıştan önce yolcu ve kargo seçiyor, uçuş sırasında pilotluk ile kabin işlerini paylaşıyor ve türbülans, hava boşlukları, zor yolcular ve fizik tabanlı nesnelerle baş etmeye çalışıyor. Tek oyunculu ve çevrimiçi eşli oyun onaylandı; görev süresi, ilerleme sistemi ve kesin kontrol şeması bilinmiyor.',
    note: 'Steam metni onaylanan sistemi, resmî videolar ise yalnızca görülen durumu kanıtlar. Bir fragman karesi; kalıcı kariyer, yükseltme ağacı, sınıf sistemi veya nihai denge için yeterli değildir.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Dear Passengers oynanış rehberi için uçak kabinini gösteren resmî görsel',
    confirmed: ['Pilotluk ve kabin içinde çalışma', 'Yolcu ve kargo seçimi', 'Fizik tabanlı kabin kaosu', 'Tek oyunculu ve çevrimiçi eşli oyun'],
    unknown: ['Görev ve harita sayısı', 'Kalıcı ilerleme ve yükseltmeler', 'Kontrolcü desteği', 'En fazla oyuncu sayısı'],
    sections: [
      { id: 'dongu', kicker: 'TEMEL DÖNGÜ', heading: 'Dear Passengers oynanış döngüsü nasıl ilerliyor?', paragraphs: [
        'Resmî açıklamaya göre Dear Passengers yalnızca havadayken başlayan bir oyun değil. Ekip kalkış öncesinde hangi yolcuları ve hangi kargoyu taşıyacağını seçiyor. Daha yüksek kazanç vadeden seçimler daha fazla sorun çıkarabiliyor. Böylece kararın riski, uçuş başladıktan sonra pilotu ve kabin ekibini birlikte etkiliyor. Seçim ekranının değerleri, sözleşme çeşitleri ve para biriminin nasıl kullanılacağı henüz gösterilmedi.',
        'Uçuş sırasında bir oyuncu kokpitte uçağı yönetirken diğerleri kabinde servis, yolcu kontrolü ve kargo güvenliğiyle ilgilenebiliyor. Dear Passengers oynanış fikrinin ayırt edici yanı bu görevlerin bağımsız olmaması: sert bir manevra ya da hava boşluğu, sabitlenmemiş eşyaları ve yolcuları hareket ettirerek kabin işini zorlaştırıyor. Bu bağlantı Steam metninde açıkça bulunuyor.'
      ]},
      { id: 'pilot', kicker: 'KOKPİT', heading: 'Pilot Dear Passengers oyununda ne yapıyor?', paragraphs: [
        'Uçağı kullanmak onaylanmış bir ana görev. Resmî videolar birinci şahıs kokpit görüntüleri ve tehlikeli hava koşulları gösteriyor. Bununla birlikte Dear Passengers için gerçekçi uçuş modeli, ayrıntılı kontrol listeleri, yakıt planlaması, kule konuşmaları veya lisanslı kokpit sistemleri açıklanmadı. Oyunu şimdiden tam bir uçuş simülasyonu diye tanımlamak eldeki kanıtın ötesine geçer.',
        'Pilotun hareketleri kabindeki fizik ortamını etkilediği için ekip iletişimi önemli görünüyor. Ancak oyun içi sesli sohbet, telsiz kanalı, işaret sistemi ve kontrol özelleştirme seçenekleri bilinmiyor. [[/tr/dear-passengers-rolleri/|Türkçe rol rehberi]], pilot ile kabin sorumluluklarını ayrı ayrı inceler ve fragmandan sınıf sistemi üretmez.'
      ]},
      { id: 'kabin', kicker: 'KABİN EKİBİ', heading: 'Yolcular, servis ve kargo nasıl yönetiliyor?', paragraphs: [
        'Yolcular yiyecek, içecek ve sakin bir uçuş bekliyor. Kabin ekibi servis yaparken sorunlu yolcuları kontrol etmeli, kargoyu korumalı ve küçük bir olayın felakete dönüşmesini engellemeli. Dear Passengers, yolcuları, bagajı ve gevşek nesneleri fizik tabanlı olarak tanımlıyor. Fakat memnuniyet ölçeri, envanter kapasitesi, özel yolcu sınıfları ve kargo kategorileri henüz açıklanmış değil.',
        'Kalkış öncesi risk-kazanç seçimi bir ekonomi bulunduğunu düşündürüyor; ama ödülün nerede harcanacağı bilinmiyor. Yeni uçak, şirket geliştirmesi, kozmetik, onarım veya kalıcı yetenek ağacı onaylanmadı. Dear Passengers oynanış rehberi bu yüzden resmî “daha fazla sorun, daha fazla para” fikrini aktarır, bundan tamamlanmış bir kariyer sistemi çıkarmaz.'
      ]},
      { id: 'solo-koop', kicker: 'OYUN MODLARI', heading: 'Dear Passengers tek başına ve arkadaşlarla oynanabilir mi?', paragraphs: [
        'Steam, Dear Passengers için hem Tek Oyunculu hem Çevrimiçi Eşli özelliklerini işaretliyor. Bu, yalnız oynamanın ve internet üzerinden arkadaşlarla ekip kurmanın ürün düzeyinde onaylandığı anlamına gelir. Tek oyuncuda bir kişinin kokpit ile kabin arasındaki görevleri nasıl yöneteceği, yapay zekâ yardımcıları bulunup bulunmayacağı ve oyunun duraklatılıp duraklatılamayacağı açıklanmadı.',
        'Çevrimiçi eşli oyun onaylansa da lobi sınırı, herkese açık eşleştirme, devam eden oyuna katılma, host aktarımı ve çapraz oyun bilinmiyor. Yerel eşli oyun veya bölünmüş ekran da Steam özelliklerinde görünmüyor. Güncel sınırlar için [[/tr/dear-passengers-kac-kisilik/|Dear Passengers kaç kişilik rehberine]] bakılabilir.'
      ]},
    ],
    localContext: [
      'Türkiye’de kullanıcılar “gameplay” kelimesini kullansa da “oynanış”, “nasıl oynanır” ve “oyun nasıl” ifadeleri açıklayıcı içerikte daha doğal. Bu sayfa Dear Passengers oynanış ifadesini ana konu yapar; İngilizce marka adını Türkçeye çevirmediği gibi, yerel soruyu da İngilizce başlığa zorlamaz.',
      'Türkçe Steam arayüzü oyunun desteklenen dilleri arasında bulunuyor. Bu, menü arayüzü desteğini gösterir; seslendirme veya altyazı sütununda onay yoktur. Dear Passengers rehberinin Türkçe olmasıyla oyunun dil tablosu aynı şey değildir ve her ikisi ayrı kaynakla açıklanır.',
      'Arama sonuçlarında bazı sayfalar yüzlerce fizik nesnesi, özel motor, timsah güreşi veya ayrıntılı sınıflar uyduruyor. Dear Passengers hakkında böyle ayrıntılar birincil kaynakta yok. Yerel dil kullanmak, kanıt standardını düşürmez.'
    ],
    faqs: [
      { question: 'Dear Passengers nasıl oynanır?', answer: 'Ekip yolcu ve kargo seçer; bir kişi pilotluk yaparken diğerleri kabin, servis ve sorunlarla ilgilenir.' },
      { question: 'Dear Passengers tek oyunculu mu?', answer: 'Evet. Steam tek oyunculu modu işaretliyor, ancak solo görev paylaşımının nasıl çalışacağı açıklanmadı.' },
      { question: 'Dear Passengers online mı?', answer: 'Evet, çevrimiçi eşli oyun onaylandı. Lobi ve eşleştirme ayrıntıları bilinmiyor.' },
      { question: 'Dear Passengers uçuş simülasyonu mu?', answer: 'Pilotluk ve hava koşulları var; fakat gerçekçilik seviyesi veya ayrıntılı simülasyon sistemleri açıklanmadı.' },
      { question: 'Oyunda Türkçe var mı?', answer: 'Steam Türkçe arayüz desteğini gösteriyor; Türkçe seslendirme ve altyazı onaylanmış değil.' },
      { question: 'Dear Passengers ne zaman oynanabilir?', answer: 'Steam 2026 penceresini gösteriyor. Kesin tarih ve açık demo erişimi henüz açıklanmadı.' },
    ], related: ['dear-passengers-oyunu', 'dear-passengers-ps5', 'dear-passengers-rolleri', 'dear-passengers-kac-kisilik', 'dear-passengers-ozellikleri', 'dear-passengers-benzeri-oyunlar'],
  },
  {
    slug: 'dear-passengers-kac-kisilik', englishPath: '/dear-passengers-player-count/', germanPath: '/de/dear-passengers-spielerzahl/', arabicPath: '/ar/dear-passengers-player-count/', chinesePath: '/zh-cn/dear-passengers-player-count/',
    keyword: 'Dear Passengers kaç kişilik', title: 'Dear Passengers Kaç Kişilik? Oyuncu Sayısı ve Co-op Durumu',
    description: 'Dear Passengers kaç kişilik? Onaylanan tek oyunculu ve online co-op modları, bilinmeyen maksimum oyuncu sayısı, split-screen ve crossplay durumu.',
    eyebrow: 'OYUNCU SAYISI · KAYNAK KONTROLLÜ', h1: 'Dear Passengers kaç kişilik? Oyuncu sayısı açıklandı mı?',
    intro: '“Dear Passengers kaç kişilik?” Türkiye’den gelen doğrudan bir arama sorusu. Steam, tek oyunculu ve çevrimiçi eşli oyunu doğruluyor; ancak sayısal bir lobi sınırı vermiyor. Bu sayfa fragmandaki karakterleri saymak yerine, ürün özellikleri ile bilinmeyen teknik ayrıntıları ayırır.',
    answer: 'Dear Passengers maksimum oyuncu sayısı henüz açıklanmadı. Resmî olarak tek oyunculu ve çevrimiçi eşli oyun bulunuyor. İki, dört, altı veya başka bir kesin sınır; yerel co-op, split-screen, crossplay, herkese açık lobi ve oyun içi sesli sohbet şu anda doğrulanmış değil.',
    note: 'Oyuncu sayısı yalnızca açık bir Steam alanı, FLEXUS açıklaması veya sürümü belirtilmiş resmî demo belgesiyle onaylanır. Fragmanda görülen kişi sayısı teknik lobi sınırı değildir.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Dear Passengers kaç kişilik rehberi için kabindeki ekip görseli',
    confirmed: ['Tek oyunculu mod', 'Çevrimiçi eşli oyun', 'Pilot ve kabin görevleri'], unknown: ['Maksimum oyuncu sayısı', 'Split-screen ve yerel co-op', 'Crossplay', 'Matchmaking ve sesli sohbet'],
    sections: [
      { id: 'resmi-sayi', kicker: 'RESMÎ DURUM', heading: 'Dear Passengers oyuncu sayısı neden bilinmiyor?', paragraphs: [
        'Steam özelliklerinde Tek Oyunculu ve Çevrimiçi Eşli işaretleri var; “2–4 oyuncu” gibi sayısal bir ifade yok. Bu nedenle Dear Passengers kaç kişilik sorusunun güvenilir cevabı şimdilik “üst sınır açıklanmadı” olmalıdır. Kesin sayı veren bir fan sitesi, kaynak göstermedikçe ürüne ait teknik veri sunmuş sayılmaz.',
        'Resmî videolarda kokpit ve kabinde birden fazla karakter görülebilir. Pazarlama videosu farklı çekimleri birleştirebilir, geliştirme yapısında ek karakter kullanabilir veya kamera için hazırlanmış olabilir. Görünen ekibi saymak, aynı anda bağlanabilen hesap sayısını kanıtlamaz.'
      ]},
      { id: 'online', kicker: 'ONLINE CO-OP', heading: 'Çevrimiçi eşli oyun hakkında ne biliyoruz?', paragraphs: [
        'Dear Passengers, arkadaşlarla çevrimiçi ekip olmayı ana özellik olarak listeliyor. Bir kişi uçağı yönetirken diğerleri kabinle ilgilenebiliyor. Bu görev dağılımı co-op tasarımını doğrular, fakat partinin Steam daveti, oda kodu, sunucu tarayıcısı veya otomatik eşleştirme ile kurulacağını açıklamaz.',
        'Devam eden oturuma katılma, bağlantı kopunca ilerlemenin korunması ve host aktarımı gibi ağ ayrıntıları da bilinmiyor. Dear Passengers kaç kişilik sayfası daha sonra yalnızca kapasiteyi değil, hangi mod ve platform için geçerli olduğunu da kaydetmelidir.'
      ]},
      { id: 'solo', kicker: 'TEK OYUNCULU', heading: 'Dear Passengers tek başına oynanabilir mi?', paragraphs: [
        'Evet, tek oyunculu özellik Steam’de açıkça işaretli. Fakat solo oynayan kişinin kokpit ve kabin işlerini nasıl birleştireceği gösterilmedi. Yapay zekâ kabin ekibi, hızlı rol değiştirme, daha az yolcu veya farklı görev dengesi mümkün olabilir; bunların hiçbiri şu anda onaylanmış sistem değildir.',
        'Tek oyunculu desteğin bulunması, bütün co-op görevlerinin aynı biçimde çalışacağı anlamına gelmez. Oynanabilir demo çıktığında solo yapı ayrıca test edilmelidir. [[/tr/dear-passengers-demo/|Demo durumu rehberi]] gerçek erişim ile planlanan test arasındaki farkı izler.'
      ]},
      { id: 'yerel-crossplay', kicker: 'PLATFORM ÖZELLİKLERİ', heading: 'Split-screen, yerel co-op ve crossplay var mı?', paragraphs: [
        'Steam yalnızca Çevrimiçi Eşli özelliğini gösteriyor; Shared/Split Screen işareti yok. Bu, yerel oyunun imkânsız olduğunu değil, duyurulmadığını ifade eder. Dear Passengers kaç kişilik cevabı ileride online ve aynı ekran kapasitesini ayrı ayrı belirtmelidir.',
        'Crossplay de onaylanmadı. Windows PC, şu anda açıklanmış tek platform. PlayStation, Xbox veya Switch sürümü olmadan platformlar arası bağlantı hakkında güvenilir sonuç çıkarılamaz. Konsol duyurusu gelse bile crossplay ayrıca doğrulanmalıdır.'
      ]},
    ],
    localContext: [
      'Türkçe kullanıcı “player count” yerine çoğunlukla “kaç kişilik”, “kaç kişi oynanır” veya “oyuncu sayısı” diye soruyor. GSC’de “dear passengers kaç kişilik” sorgusunun görünmesi, bu başlığın çevrilmiş değil gözlenmiş bir yerel arama kalıbı olduğunu gösteriyor.',
      '“Kaç kişilik” gündelik ve doğrudan; “maksimum oyuncu kapasitesi” ise teknik açıklamada kullanılabilir. Sayfa her iki dili birleştirir ama herhangi bir rakamı anahtar kelime uğruna uydurmaz.',
      'Türkiye’de arkadaş grupları için fiyat ve lobi boyutu birlikte önem taşıyabilir. Yine de açıklanmamış fiyat veya dolar karşılığı, oyuncu sayısı sayfasına tahmin olarak eklenmez.'
    ],
    faqs: [
      { question: 'Dear Passengers kaç kişilik?', answer: 'Maksimum sayı açıklanmadı. Steam tek oyunculu ve çevrimiçi eşli oyunu doğruluyor.' },
      { question: 'Dear Passengers iki kişi oynanır mı?', answer: 'Eşli oyun onaylandı, fakat minimum ve maksimum sayıyı belirten resmî bir aralık yok.' },
      { question: 'Dear Passengers split-screen var mı?', answer: 'Duyurulmadı; Steam yalnızca çevrimiçi eşli özelliğini işaretliyor.' },
      { question: 'Dear Passengers crossplay destekliyor mu?', answer: 'Hayır şeklinde bir açıklama yok; fakat ikinci bir platform ve crossplay desteği henüz duyurulmadı.' },
      { question: 'Dear Passengers tek başına oynanır mı?', answer: 'Evet, tek oyunculu mod resmî Steam sayfasında listeleniyor.' },
      { question: 'Oyunda sesli sohbet var mı?', answer: 'Oyun içi voice chat henüz açıklanmadı.' },
    ], related: ['dear-passengers-oynanis', 'dear-passengers-rolleri', 'dear-passengers-demo', 'dear-passengers-cikis-tarihi'],
  },
  {
    slug: 'dear-passengers-cikis-tarihi', englishPath: '/dear-passengers-release-date/', germanPath: '/de/dear-passengers-release/', arabicPath: '/ar/dear-passengers-release/', chinesePath: '/zh-cn/dear-passengers-release-date/',
    keyword: 'Dear Passengers çıkış tarihi', title: 'Dear Passengers Çıkış Tarihi: Ne Zaman Çıkacak?',
    description: 'Dear Passengers çıkış tarihi için güncel resmî durum: 2026 Steam penceresi, Windows platformu, Türkiye saati, fiyat ve konsol sorularındaki bilinmeyenler.',
    eyebrow: 'ÇIKIŞ TAKİBİ · 27 TEMMUZ 2026', h1: 'Dear Passengers çıkış tarihi: oyun ne zaman çıkacak?',
    intro: 'Türkiye’de “Dear Passengers ne zaman çıkacak?” ve “çıkış tarihi” aynı arama niyetini taşıyor. Steam yalnızca 2026 yılını veriyor. Bu rehber 31 Aralık gibi veri tabanı yer tutucularını gerçek tarih kabul etmez; kesin gün, Türkiye saati, fiyat ve konsol planlarını ayrı statülerle gösterir.',
    answer: 'Dear Passengers çıkış tarihi için doğrulanmış tek zaman bilgisi 2026’dır. Kesin ay ve gün açıklanmadı. Oyun Windows PC için Steam’de listeleniyor; PlayStation, Xbox, Nintendo Switch, macOS veya mobil sürüm duyurulmadı. Türkiye fiyatı ve çıkış saati de bilinmiyor.',
    note: 'Tarih yalnızca resmî Steam alanı veya açık FLEXUS duyurusuyla güncellenir. Mağaza dışı veri tabanlarının 31 Aralık gibi yıl sonu değerleri genellikle yer tutucudur.',
    heroImage: '/images/release-date.webp', heroAlt: 'Dear Passengers çıkış tarihi rehberi için 2026 uçuş panosu temalı görsel',
    confirmed: ['2026 çıkış penceresi', 'Windows PC ve Steam', 'FLEXUS geliştirici ve yayıncı', 'Türkçe arayüz desteği'], unknown: ['Kesin ay, gün ve saat', 'Türkiye fiyatı', 'Konsol ve mobil sürümler', 'Early Access olup olmayacağı'],
    sections: [
      { id: 'tarih', kicker: 'GÜNCEL TARİH', heading: 'Dear Passengers ne zaman çıkacak?', paragraphs: [
        'Resmî Steam sayfasında planlanan çıkış “2026” olarak görünüyor. Ay, gün veya saat yok. Dear Passengers çıkış tarihi için bundan daha kesin bir ifade paylaşmak şu anda tahmin olur. FLEXUS yeni bir duyuru yaptığında Steam alanı, resmî video açıklaması ve stüdyo kanalları birlikte kontrol edilmelidir.',
        'Bazı oyun veri tabanları 31 Aralık 2026 yazabilir. Yıl sonu, yalnızca yıl bilindiğinde kullanılan yaygın bir yer tutucu olabilir ve geliştiricinin o günü seçtiğini göstermez. Arama motorundaki zengin sonuç da kaynak sayfasından daha güçlü kanıt değildir.'
      ]},
      { id: 'platformlar', kicker: 'PLATFORMLAR', heading: 'Dear Passengers hangi platformlara çıkacak?', paragraphs: [
        'Windows PC üzerinden Steam şu anda onaylanan tek platform. Sistem gereksinimleri de Windows 10 64-bit ile başlıyor. Dear Passengers için PS5, Xbox Series, Nintendo Switch, macOS, Linux, Android veya iOS mağaza kaydı bulunmuyor. Başka platforma ilgi duyulması, resmî port duyurusu değildir.',
        'Bir konsol sürümü açıklanırsa çıkış tarihi, çapraz oyun, kontrolcü desteği ve fiyatı ayrı ayrı doğrulanmalıdır. PC ile aynı gün çıkacağı varsayılamaz. [[/tr/dear-passengers-sistem-gereksinimleri/|Sistem gereksinimleri rehberi]] mevcut Windows tablosunu tam değerlerle aktarır.'
      ]},
      { id: 'fiyat', kicker: 'TÜRKİYE FİYATI', heading: 'Dear Passengers kaç TL olacak?', paragraphs: [
        'FLEXUS fiyat açıklamadı ve Steam’de satın alma düğmesi yok. Dear Passengers kaç TL sorusuna güvenilir bir rakam verilemiyor. Oyunun popüler etiketlerinde görülen “Oynaması Ücretsiz” kullanıcı etiketi, yayıncının free-to-play modelini onayladığı anlamına gelmez.',
        'Steam Türkiye’de fiyatlandırmayı dolar üzerinden gösterebilir; ancak kesin bölgesel tutar ürün satışa açılmadan bilinmez. Kur dönüşümü yapıp “beklenen TL fiyatı” yayımlamak resmî fiyat değildir. Standart, Deluxe veya başka sürümler de açıklanmadı.'
      ]},
      { id: 'demo', kicker: 'ÇIKIŞ ÖNCESİ ERİŞİM', heading: 'Demo veya erken erişim ne zaman gelecek?', paragraphs: [
        'FLEXUS ile yapılan doğrudan röportaj, Gamescom için oynanabilir bir yapı ve sonrasında halka açık demo hedefinden söz ediyor. Bu önemli bir plan, fakat Steam’de şu anda demo indirme veya Playtest kayıt düğmesi yok. Dear Passengers çıkış tarihi ile demo tarihi aynı kabul edilemez.',
        'Early Access ayrıca duyurulmadı. Demo, beta, Steam Playtest ve ücretli erken erişim farklı erişim biçimleridir. [[/tr/dear-passengers-demo/|Türkçe demo rehberi]], erişilebilir dosya ortaya çıkana kadar plan ile yayınlanmış sürümü ayırır.'
      ]},
    ],
    localContext: [
      'GSC verilerinde “dear passengers ne zaman çıkacak” ve “dear passengers çıkış tarihi” sorguları doğrudan görünüyor. Türkiye’de “release date” araması da kullanılıyor, ancak doğal cevap Türkçe tarih sorusuyla verilmelidir.',
      'Tarih Türkiye için duyurulduğunda gün/ay/yıl ve saat dilimi açık yazılmalıdır. Yalnız gün verilirse UTC’den keyfî dönüşüm yapılmamalı; Steam’in gerçek açılış saati izlenmelidir.',
      'Fiyat konusunda “kaç TL”, “ne kadar” ve “paralı mı” farklı kelimelerle aynı ticari niyeti taşıyor. Şimdilik hepsinin cevabı bilinmiyor; kullanıcı etiketi fiyat kanıtı değildir.'
    ],
    faqs: [
      { question: 'Dear Passengers ne zaman çıkacak?', answer: 'Steam 2026 yılını gösteriyor. Kesin ay ve gün henüz açıklanmadı.' },
      { question: 'Dear Passengers kaç TL?', answer: 'Türkiye fiyatı açıklanmadı ve oyun henüz satışta değil.' },
      { question: 'Dear Passengers PS5 için çıkacak mı?', answer: 'PS5 sürümü duyurulmadı. Şu anda yalnız Windows PC onaylı.' },
      { question: 'Dear Passengers ücretsiz mi?', answer: 'Fiyat ve iş modeli açıklanmadı. Kullanıcı etiketi resmî free-to-play onayı değildir.' },
      { question: 'Dear Passengers erken erişime çıkacak mı?', answer: 'Early Access planı açıklanmadı.' },
      { question: 'Dear Passengers Türkçe olacak mı?', answer: 'Steam, Türkçe arayüz desteğini onaylıyor; seslendirme ve altyazı sütunlarında onay yok.' },
    ], related: ['dear-passengers-steam', 'dear-passengers-haberleri', 'dear-passengers-demo', 'dear-passengers-indir', 'dear-passengers-sistem-gereksinimleri'],
  },
  {
    slug: 'dear-passengers-demo', englishPath: '/dear-passengers-demo/', germanPath: '/de/dear-passengers-demo/', arabicPath: '/ar/dear-passengers-demo/',
    modifiedDate: '2026-08-29', verifiedDate: '29 Ağustos 2026',
    keyword: 'Dear Passengers demo', title: 'Dear Passengers Demo: İndirme ve Playtest Durumu',
    description: 'Dear Passengers demo henüz açık değil. Gamescom planı, halka açık demo hedefi, Steam Playtest, beta, güvenli indirme ve Türkiye erişimi.',
    eyebrow: 'DEMO VE TEST DURUMU · 29 AĞUSTOS 2026', h1: 'Dear Passengers demo: indirilebilir bir sürüm var mı?',
    intro: 'Dear Passengers demo hâlâ herkese açık değil. FLEXUS’un Gamescom 2026’ya katıldığı doğrulandı; ancak Dear Passengers derlemesinin etkinlikte gösterildiği veya ziyaretçilerin oyunu deneyebildiği doğrulanmadı. Steam’de indirilebilir demo ya da Playtest kayıt düğmesi de bulunmuyor.',
    answer: 'Dear Passengers demo 29 Ağustos 2026 itibarıyla herkese açık değil. FLEXUS’un Gamescom katılımı doğrulandı, fakat Dear Passengers derlemesinin sunulduğu veya ziyaretçilerin deneyebildiği halka açık erişim bulunduğu doğrulanmadı. Kamuya açık demo tarihi, içerik, süre, oyuncu limiti ve Türkiye erişimi açıklanmadı; Steam’de demo veya Playtest düğmesi yok.',
    note: 'Bir geliştirici hedefi demo planını doğrular, indirme erişimini değil. “Yayınlandı” statüsü yalnızca resmî FLEXUS kanalından doğrulanabilen çalışan mağaza veya kayıt bağlantısıyla kullanılır.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Dear Passengers demo ve Playtest rehberi için uçak kabini görseli',
    confirmed: ['FLEXUS’un Gamescom 2026 katılımı', 'Daha sonra halka açık demo için önceki geliştirici planı', 'Steam’de ana oyun sayfası'], unknown: ['Dear Passengers derlemesinin fuarda gösterilip gösterilmediği', 'Ziyaretçilerin deneyebildiği halka açık erişim', 'Demo yayın tarihi ve içeriği', 'Playtest veya beta yöntemi'],
    sections: [
      { id: 'durum', kicker: 'MEVCUT DURUM', heading: 'Dear Passengers demo şu anda var mı?', paragraphs: [
        'Hayır, resmî ve herkese açık bir indirme henüz görünmüyor. Steam sayfasında “Demo indir” düğmesi ya da Steam Playtest için “Erişim iste” alanı bulunmuyor. Dear Passengers demo planı konuşulmuş olsa da kullanılabilir dosya, başlangıç saati, bitiş tarihi veya katılımcı sınırı yayımlanmadı.',
        'FLEXUS kurucu ortağı Semen Kozyura, doğrudan röportajda Gamescom için bir sürüm hazırlamak ve sonrasında halka açık demo sunmak istediklerini anlattı. Stüdyonun Gamescom 2026 katılımı artık doğrulanmış durumda; fakat bu katılım, Dear Passengers derlemesinin gösterildiğini veya ziyaretçilere açıldığını tek başına kanıtlamaz.'
      ]},
      { id: 'gamescom', kicker: 'GAMESCOM', heading: 'Gamescom demosu ne anlama geliyor?', paragraphs: [
        'Doğrulanan bilgi, FLEXUS’un Gamescom 2026’ya katılmasıdır. Dear Passengers için belirli bir sunum, oynanabilir istasyon, halka açık sıra, randevu sistemi veya ziyaretçilerin deneyebildiği açık erişim doğrulanmış değildir. Stüdyo katılımı ile belirli bir oyunun halka açık gösterimi aynı şey değildir.',
        'Bir Dear Passengers fuar derlemesi daha sonra resmî olarak gösterilirse sürüm, tarih, erişim türü ve koşullar ayrıca kaydedilmelidir. Böyle bir derleme ile evden indirilecek demo aynı içerikte olmak zorunda değildir. Şu anda gösterilmiş bir derleme varmış gibi özellik veya oynanış sonucu çıkarılamaz.'
      ]},
      { id: 'erisim', kicker: 'GÜVENLİ ERİŞİM', heading: 'Dear Passengers demo nereden indirilir?', paragraphs: [
        'En güvenilir başlangıç resmî Steam sayfasıdır. Gerçek bir demo doğru oyun adını ve FLEXUS yayıncı bağlantısını gösterir, yüklemeyi Steam istemcisi üzerinden yapar. Bilinmeyen bir siteden ZIP, şifreli arşiv, tarayıcı eklentisi veya APK indirmek gerekmez. Şu anda böyle bir üçüncü taraf dosya resmî demo olarak doğrulanamaz.',
        'FLEXUS resmî sosyal hesabı başka bir kayıt formuna bağlantı verirse alan adı ve karşılıklı bağlantı kontrol edilmelidir. Logo ve ekran görüntüsü kopyalamak ortaklık kanıtı değildir. [[/tr/dear-passengers-indir/|Güvenli indirme rehberi]], sahte tam sürüm ve APK iddiaları için daha ayrıntılı kontrol listesi sunar.'
      ]},
      { id: 'terimler', kicker: 'DEMO, BETA, PLAYTEST', heading: 'Demo, beta ve Steam Playtest aynı şey mi?', paragraphs: [
        'Demo genellikle oyunun sınırlı bir örneğidir. Steam Playtest geliştiricinin katılımcı kabul ettiği ayrı bir dağıtım sistemidir. Beta geliştirme aşamasını veya testi anlatır; Early Access ise satın alınabilen erken sürüm olabilir. Dear Passengers için açıkça konuşulan şey planlanan demodur, diğer erişim biçimleri değil.',
        'Bir “beta key” sayfası, FLEXUS bağlantısı olmadan güvenilir değildir. Kullanıcının Steam şifresini üçüncü taraf formuna yazması veya “doğrulama” için ödeme yapması gerekmez. Dear Passengers demo yayımlanırsa sayfa resmî terimi, erişim yöntemini, bölgeyi ve sona erme tarihini ayrı ayrı güncelleyecektir.'
      ]},
    ],
    localContext: [
      'Brezilya ve Türkiye verileri karşılaştırıldığında demo sorgusu iki ülkede de güçlüydü. Türkiye’de “dear passengers demo” sorgusu mevcut İngilizce sayfaya 17 gösterim ve 4 tıklama getirdi; bu, Türkçe durum sayfası için gerçek ve bağımsız bir niyet oluşturuyor.',
      'Türkiye’de kullanıcılar “demo indir”, “beta ne zaman” ve “playtest” kelimelerini birlikte kullanabilir. İçerik bu kelimeleri tek bir hayalî ürün gibi birleştirmez; her erişim biçimini kendi resmî durumuyla açıklar.',
      'FLEXUS’un Gamescom’a katılması, Dear Passengers’ın fuarda halka açık oynanabildiği ya da Türk oyuncuların evden erişebileceği anlamına gelmez. Yerel açıklama özellikle bu iki yanlış çıkarımı önler.'
    ],
    faqs: [
      { question: 'Dear Passengers demo çıktı mı?', answer: 'Hayır. Steam’de şu anda herkese açık demo veya Playtest düğmesi yok.' },
      { question: 'Dear Passengers demo ne zaman çıkacak?', answer: 'Halka açık demo planlanıyor, ancak tarih açıklanmadı.' },
      { question: 'Dear Passengers Gamescom’da oynanabiliyor mu?', answer: 'FLEXUS’un katılımı doğrulandı; Dear Passengers derlemesinin gösterildiği veya ziyaretçilerin deneyebildiği halka açık erişim bulunduğu doğrulanmadı.' },
      { question: 'Dear Passengers beta kaydı var mı?', answer: 'Resmî beta veya Steam Playtest kaydı şu anda görünmüyor.' },
      { question: 'Demo Türkiye’den indirilebilir mi?', answer: 'Demo yayımlanmadığı için bölge erişimi açıklanmadı.' },
      { question: 'Dear Passengers demo APK var mı?', answer: 'Hayır. Android sürümü ve resmî APK duyurulmadı.' },
    ], related: ['dear-passengers-indir', 'dear-passengers-cikis-tarihi', 'dear-passengers-oynanis', 'dear-passengers-haberleri'],
  },
  {
    slug: 'dear-passengers-indir', englishPath: '/dear-passengers-download/', germanPath: '/de/dear-passengers-download/', arabicPath: '/ar/dear-passengers-download/', chinesePath: '/zh-cn/dear-passengers-download/',
    keyword: 'Dear Passengers indir', title: 'Dear Passengers İndir: Resmî ve Güvenli İndirme Durumu',
    description: 'Dear Passengers indir araması için güvenli cevap: oyun henüz çıkmadı; resmî Steam yolu, sahte APK, crack, torrent ve ücretsiz indirme iddiaları.',
    eyebrow: 'GÜVENLİ İNDİRME · SAHTE DOSYA UYARISI', h1: 'Dear Passengers indir: resmî dosya nerede?',
    intro: '“Dear Passengers indir” son 30 günde Türkiye’den 92 gösterim ve 6 tıklama üreten belirgin bir arama niyeti. Oyun henüz çıkmadığı için bu sayfanın amacı olmayan bir indirme düğmesi üretmek değil; resmî Steam yolunu göstermek ve APK, crack, torrent ya da sahte kurulum dosyalarını ayırt etmektir.',
    answer: 'Dear Passengers şu anda resmî olarak indirilemiyor. Steam sayfasında yalnızca istek listesine ekleme seçeneği var. Windows sürümü planlanıyor; Android APK, iOS, ücretsiz tam sürüm, crack, torrent veya doğrudan kurulum dosyası FLEXUS tarafından yayımlanmadı.',
    note: 'Bu sayfa dosya barındırmaz ve yanıltıcı indirme düğmesi kullanmaz. Bir dosya ancak FLEXUS ile doğrulanabilen resmî mağaza ya da kanal üzerinden sunulduğunda güvenilir erişim olarak işaretlenir.',
    heroImage: '/images/dear-passengers-download-safety.webp', heroAlt: 'Dear Passengers indir rehberi için güvenli oyun indirme temalı editoryal görsel',
    confirmed: ['Oyun henüz satışta değil', 'Windows PC ve Steam resmî yol', 'İstek listesine eklenebilir'], unknown: ['Ön yükleme tarihi', 'Nihai indirme boyutu', 'Fiyat ve sürümler', 'Demo dağıtım yöntemi'],
    sections: [
      { id: 'resmi-indirme', kicker: 'RESMÎ DURUM', heading: 'Dear Passengers şimdi indirilebilir mi?', paragraphs: [
        'Hayır. Steam sayfası 2026 çıkış penceresini gösteriyor, satın alma veya yükleme sunmuyor. İstek listesine eklemek dosya indirmez ve erken erişim sağlamaz. Dear Passengers indir sorgusu şu anda ancak doğru mağazayı ve yayın durumunu bulmak için kullanılabilir.',
        'Oyun satışa çıktığında doğrulanan Windows yüklemesi Steam istemcisi içinden yapılacaktır. FLEXUS bağımsız launcher, Epic Games Store veya başka PC mağazası duyurmadı. Başka bir site resmî logoyu kullansa bile karşılıklı FLEXUS bağlantısı olmadan ürün kaynağı sayılmaz.'
      ]},
      { id: 'apk', kicker: 'ANDROID VE APK', heading: 'Dear Passengers APK var mı?', paragraphs: [
        'Hayır. Resmî Steam sayfasında Android veya iOS platformu yok. Dear Passengers APK indir başlığı kullanan bir sayfa; sürüm numarası, ücretsiz fiyat ya da Android gereksinimi yazsa bile FLEXUS kaynağı göstermiyorsa resmî uygulamayı kanıtlamaz. Mobil dosya iddiası mevcut Windows ürün durumuyla çelişir.',
        'Bilinmeyen APK dosyasına depolama, erişilebilirlik veya hesap izni verilmemelidir. Google Play bağlantısı bile geliştirici kimliği eşleşmeden yeterli olmaz. Resmî mobil sürüm duyurulursa mağaza kaydı ve FLEXUS kanalı birbirini doğrulamalıdır.'
      ]},
      { id: 'crack', kicker: 'CRACK VE TORRENT', heading: 'Dear Passengers crack veya torrent güvenilir mi?', paragraphs: [
        'Oyun yayımlanmadığı için “tam sürüm crack” iddiası açık bir uyarı işaretidir. Dosya başka bir program, veri toplayıcı veya zararlı yazılım olabilir. Dear Passengers adı, ekran görüntüsü ve parola korumalı arşiv gerçek oyun içeriğini kanıtlamaz.',
        'Bu site korsan erişim veya koruma aşma yöntemi sunmaz. Çevrimiçi eşli yapı daha sonra platform hizmetlerine bağlı olabilir; teknik ayrıntı henüz açıklanmadı. Resmî indirme güncellemeleri ve ağ uyumluluğu için güvenilir yol mağaza istemcisidir.'
      ]},
      { id: 'kontrol-listesi', kicker: 'KONTROL LİSTESİ', heading: 'Bir Dear Passengers indirme bağlantısı nasıl kontrol edilir?', paragraphs: [
        'Alan adını, yayıncı adını, Steam çıkış durumunu ve bağlantının resmî FLEXUS kanalından gelip gelmediğini kontrol edin. Steam şifresini Steam alanı dışında girmeyin. Antivirüsü kapatma, anket tamamlama, ücretli “insan doğrulama” veya çoklu sahte Download düğmeleri güven işareti değildir.',
        'Dosya boyutunun 4 GB yazması da kanıt olmaz. Steam’deki 4 GB değeri minimum boş depolama alanıdır; nihai indirme boyutu değildir. Dear Passengers demo yayımlanırsa [[/tr/dear-passengers-demo/|demo sayfası]] resmî bağlantıyı ve kontrol tarihini kaydedecektir.'
      ]},
    ],
    localContext: [
      '“İndir” Türkiye’de “download”dan daha güçlü bir eylem kelimesi ve bu siteye gelen gerçek sorguların en belirgin yerel örneği. Sayfa kelimeyi dosya vaadi için değil, kullanıcının sahte sonuçlardan önce doğru durumu görmesi için hedefler.',
      '“Full indir”, “torrent”, “crack” ve “APK” aramaları güvenlik riski taşıyabilir. Dear Passengers henüz çıkmadığından bu ifadelerle hazırlanan erken dosyaların güvenilirliği özellikle düşüktür.',
      'Steam Türkiye fiyatı henüz olmadığı için “ücretsiz” iddiası da doğrulanamaz. Demo ücretsiz olabilir; bu, tam oyunun free-to-play olacağını göstermez.'
    ],
    faqs: [
      { question: 'Dear Passengers nereden indirilir?', answer: 'Şu anda indirilemez. Yayınlandığında onaylanan yol Windows için Steam olacaktır.' },
      { question: 'Dear Passengers APK var mı?', answer: 'Hayır. Android sürümü ve resmî APK duyurulmadı.' },
      { question: 'Dear Passengers ücretsiz mi?', answer: 'Fiyat ve iş modeli açıklanmadı.' },
      { question: 'Dear Passengers crack çıktı mı?', answer: 'Oyun henüz yayımlanmadı; tam sürüm crack iddiaları güvenilir değildir.' },
      { question: 'Dear Passengers torrent güvenli mi?', answer: 'Resmî torrent yok. Üçüncü taraf dosyalar doğrulanamaz ve risk taşıyabilir.' },
      { question: 'Dear Passengers kaç GB?', answer: 'Steam minimum 4 GB boş alan yazıyor; bu nihai indirme boyutu değildir.' },
    ], related: ['dear-passengers-demo', 'dear-passengers-cikis-tarihi', 'dear-passengers-sistem-gereksinimleri', 'dear-passengers-haberleri'],
  },
  {
    slug: 'dear-passengers-sistem-gereksinimleri', englishPath: '/dear-passengers-system-requirements/', germanPath: '/de/dear-passengers-systemanforderungen/', arabicPath: '/ar/dear-passengers-system-requirements/', chinesePath: '/zh-cn/dear-passengers-system-requirements/',
    keyword: 'Dear Passengers sistem gereksinimleri', title: 'Dear Passengers Sistem Gereksinimleri: Minimum PC Özellikleri',
    description: 'Dear Passengers sistem gereksinimleri: Windows 10 64-bit, i5 2.5 GHz, 8 GB RAM, GTX 1060 veya RX 6600 XT, DirectX 12 ve 4 GB alan.',
    eyebrow: 'PC DONANIM REHBERİ · RESMÎ MİNİMUM', h1: 'Dear Passengers sistem gereksinimleri: bilgisayarınız kaldırır mı?',
    intro: '“Dear Passengers sistem gereksinimleri” Türkiye’de 38 gösterim alan doğal bir teknik sorgu. Steam minimum değerleri yayımladı; önerilen sistem, çözünürlük, FPS hedefi ve gerçek performans testleri yok. Bu rehber tabloyu olduğu gibi aktarır ve minimum etiketi bir performans garantisine dönüştürmez.',
    answer: 'Dear Passengers minimum sistem gereksinimleri: Windows 10 64-bit, Intel Core i5 2.5 GHz veya eşdeğeri, 8 GB RAM, NVIDIA GTX 1060 veya AMD RX 6600 XT, DirectX 12 ve 4 GB boş alan. Önerilen gereksinimler, SSD zorunluluğu, çözünürlük ve kare hızı açıklanmadı.',
    note: 'Steam’deki değerleri model ve birimleriyle aynen aktarıyoruz. Minimum gereksinim, belirli ayar veya FPS garantisi değildir; özellikle GTX 1060 ile RX 6600 XT arasındaki güç farkı tablonun erken geliştirme verisi olabileceğini gösterir.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Dear Passengers sistem gereksinimleri rehberi için resmî kabin görseli',
    confirmed: ['Windows 10 64-bit', 'Intel Core i5 2.5 GHz veya eşdeğeri', '8 GB RAM', 'GTX 1060 veya RX 6600 XT', 'DirectX 12 ve 4 GB boş alan'], unknown: ['Önerilen sistem', '1080p veya 60 FPS hedefi', 'Nihai indirme boyutu', 'Steam Deck ve dizüstü testleri'],
    sections: [
      { id: 'minimum', kicker: 'RESMÎ MİNİMUM', heading: 'Dear Passengers minimum sistem gereksinimleri', paragraphs: [
        'Steam tablosu işletim sistemi olarak Windows 10 64-bit gösteriyor. İşlemci satırında belirli nesil veya çekirdek sayısı vermeden Intel Core i5 2.5 GHz ya da eşdeğeri yazıyor. Sadece saat hızına bakarak işlemci eşitliği kurulamaz; mimari, çekirdek sayısı ve güç sınırı Dear Passengers performansını etkileyebilir.',
        'Ekran kartı satırında NVIDIA GTX 1060 veya AMD RX 6600 XT bulunuyor. Bu iki kart aynı performans düzeyinde değil; yine de resmî satırı editoryal tahminle değiştirmiyoruz. Dear Passengers sistem gereksinimleri güncellenirse eski değer ve kontrol tarihi kaydedilmelidir.'
      ]},
      { id: 'performans', kicker: 'FPS VE AYARLAR', heading: 'Bu sistem 60 FPS çalıştırır mı?', paragraphs: [
        'Bilinmiyor. Minimum tablonun yanında 1080p, düşük ayar, 30 FPS veya 60 FPS gibi hedef yok. “Minimum” genellikle oyunu çalıştırmak için alt sınırı anlatır; kabul edilebilir performans kişiden kişiye ve sahneye göre değişebilir. Dear Passengers için yayımlanmış karşılaştırmalı benchmark bulunmuyor.',
        'Bir video performans kanıtı olarak kullanılacaksa işlemci, ekran kartı, RAM, sürücü, çözünürlük, grafik ayarı ve oyun yapısı belirtilmelidir. Demo çıkmadan rastgele bir sistem videosu nihai optimizasyonu göstermez. Fizik yoğun sahneler ile sakin kabin sahneleri aynı sonucu vermeyebilir.'
      ]},
      { id: 'ram-depolama', kicker: 'RAM VE DEPOLAMA', heading: '8 GB RAM ve 4 GB alan yeterli mi?', paragraphs: [
        '8 GB RAM resmî minimumdur. Arka plandaki tarayıcı, kayıt yazılımı ve sohbet uygulamaları aynı belleği kullanabilir. Bu yüzden 8 GB bulunan her bilgisayarda aynı deneyim garanti edilemez. FLEXUS önerilen RAM veya çok oyunculu mod için farklı değer yayımlamadı.',
        'Steam 4 GB kullanılabilir alan istiyor. Bu değer nihai indirme boyutu olmak zorunda değildir; kurulum ve güncelleme sırasında ek boşluk gerekebilir. SSD şartı yazmıyor. Dear Passengers indir rehberi, depolama satırının sahte “4 GB tam sürüm” dosyalarını doğrulamadığını ayrıca açıklar.'
      ]},
      { id: 'laptop-deck', kicker: 'LAPTOP VE STEAM DECK', heading: 'Dear Passengers laptop veya Steam Deck’te çalışır mı?', paragraphs: [
        'Dizüstü ekran kartları aynı model adını taşısa bile güç ve soğutma sınırları nedeniyle masaüstünden farklı performans gösterebilir. FLEXUS test edilmiş laptop listesi yayımlamadı. İşlemci adının yalnız “i5” olması da yeterli karşılaştırma sağlamaz; tam model gereklidir.',
        'Steam Deck için Verified veya Playable işareti görünmüyor. Linux ve macOS desteği de açıklanmadı. Uyumluluk katmanıyla daha sonra çalışması resmî destek anlamına gelmez. Kontrolcü desteği ve arayüz okunabilirliği de Deck değerlendirmesinin ayrı parçalarıdır.'
      ]},
    ],
    localContext: [
      'Türkiye’de “sistem gereksinimleri”, “minimum sistem”, “PC kaldırır mı” ve “kaç GB” aynı teknik kararın farklı aşamalarıdır. Resmî Steam Türkçe arayüzü de “İşletim Sistemi”, “Bellek”, “Ekran Kartı” ve “Depolama” terimlerini kullanıyor.',
      '2,5 GHz Türkçe sayı yazımına uygundur; ürün adları GTX, RX, DirectX ve RAM olarak değişmeden bırakılır. Dear Passengers sistem gereksinimleri yerelleştirilirken donanım değerleri çevrilmez veya yuvarlanmaz.',
      'Türkiye’de donanım maliyeti yüksek olduğu için yayımlanmamış önerilen sisteme dayanarak yükseltme önermek sorumsuz olur. Demo ve gerçek testler çıkana kadar mevcut minimum tablo yalnızca başlangıç referansıdır.'
    ],
    faqs: [
      { question: 'Dear Passengers sistem gereksinimleri neler?', answer: 'Windows 10 64-bit, i5 2.5 GHz, 8 GB RAM, GTX 1060 veya RX 6600 XT, DirectX 12 ve 4 GB alan.' },
      { question: 'Dear Passengers 8 GB RAM ile çalışır mı?', answer: '8 GB resmî minimumdur; gerçek FPS ve ayarlar açıklanmadı.' },
      { question: 'Dear Passengers kaç GB?', answer: 'Steam 4 GB boş alan istiyor; nihai indirme boyutu bilinmiyor.' },
      { question: 'Dear Passengers SSD istiyor mu?', answer: 'Steam tablosunda SSD zorunluluğu yok.' },
      { question: 'Dear Passengers Steam Deck uyumlu mu?', answer: 'Resmî Deck uyumluluk değerlendirmesi yayımlanmadı.' },
      { question: 'Dear Passengers önerilen sistem nedir?', answer: 'Önerilen sistem gereksinimleri henüz açıklanmadı.' },
    ], related: ['dear-passengers-cikis-tarihi', 'dear-passengers-demo', 'dear-passengers-indir', 'dear-passengers-oynanis'],
  },
  {
    slug: 'dear-passengers-fragman', englishPath: '/dear-passengers-trailer/', germanPath: '/de/dear-passengers-trailer/', arabicPath: '/ar/dear-passengers-trailer/',
    keyword: 'Dear Passengers fragman', title: 'Dear Passengers Fragman: İki Resmî Video ve Sahne Analizi',
    description: 'Dear Passengers fragman analizi: 14 Temmuz duyuru videosu, 22 Temmuz kısa teaser, görülen oynanış, doğrulanan özellikler ve açık sorular.',
    eyebrow: 'İKİ RESMÎ FLEXUS VİDEOSU', h1: 'Dear Passengers fragman: resmî videolar ne gösteriyor?',
    intro: 'FLEXUS, Dear Passengers için 14 Temmuz’da duyuru fragmanını ve 22 Temmuz’da 37 saniyelik “Another Friendslop Game” teaserını yayımladı. Bu Türkçe analiz videoda gerçekten görülen kokpit, kabin, servis, kargo ve fizik sahnelerini Steam’in yazılı özelliklerinden ayırır.',
    answer: 'Dear Passengers fragmanları birinci şahıs kokpit ve kabin görevlerini, yolcu servisini, riskli kargoyu, hareket eden nesneleri ve kaotik uçuşları gösteriyor. İkinci video yayımlandığında oyun iki milyon Steam istek listesine “yakındı”; iki milyona ulaştığı söylenmedi. Videolar kesin tarih, fiyat veya oyuncu limiti açıklamıyor.',
    note: '“Videoda görüldü” ile “Steam tarafından özellik olarak onaylandı” aynı kanıt düzeyi değildir. Kurgu sırası, tek bir görevin yapısı veya nihai sürüm kapsamı olarak yorumlanmaz.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Dear Passengers fragman analizi için resmî kokpit ve kabin görseli',
    confirmed: ['14 Temmuz duyuru fragmanı', '22 Temmuz 37 saniyelik resmî teaser', 'Kokpit ve kabin görüntüleri', 'Fizik ve hava koşulları'], unknown: ['Sahnelerin görev sırası', 'Nihai arayüz', 'Harita ve uçak sayısı', 'Kesin çıkış ayrıntıları'],
    sections: [
      { id: 'iki-video', kicker: 'RESMÎ VİDEOLAR', heading: 'Dear Passengers için kaç resmî fragman var?', paragraphs: [
        '27 Temmuz 2026 itibarıyla FLEXUS YouTube kanalında iki ilgili resmî video bulunuyor. 14 Temmuz duyuru fragmanı oyunun temel fikrini ve daha geniş sahne seçimini gösteriyor. 22 Temmuz’daki kısa teaser ise co-op kaos tonunu yeniden sunuyor. Aynı görüntünün medya kanallarındaki yeniden yüklemeleri yeni bir resmî Dear Passengers fragmanı sayılmaz.',
        'İkinci videonun açıklamasındaki “close to 2,000,000 wishlists” ifadesi tarihe bağlı bir geliştirici iddiasıdır. Türkçede “iki milyon istek listesine yaklaştı” diye aktarılmalıdır; “iki milyonu geçti” veya “iki milyon oyuncu” değildir. İstek listesi satış ve aktif oyuncu sayısı anlamına gelmez.'
      ]},
      { id: 'sahneler', kicker: 'GÖRÜLEN SAHNELER', heading: 'Dear Passengers fragmanında neler görülüyor?', paragraphs: [
        'Videolar kokpitten uçuş, kabinde yiyecek ve içecek servisi, yolcu kontrolü, sıra dışı kargo ve uçağın hareketiyle savrulan nesneler gösteriyor. Bunlar görsel gözlemdir. Steam ayrıca pilotluk, kabin işi, fizik tabanlı yolcu ve kargo ile dinamik hava koşullarını yazılı özellik olarak onaylıyor.',
        'Kurgu farklı görevlerden kareleri yan yana getirebilir. Bir olayın diğerine sebep olduğunu veya bütün sahnelerin tek uçuşta yaşandığını söylemek mümkün değildir. Dear Passengers fragman analizi, görülen aracı tamir sistemi ya da görülen karakteri seçilebilir sınıf olarak adlandırmaz.'
      ]},
      { id: 'kanitlamaz', kicker: 'KANIT SINIRI', heading: 'Fragman hangi özellikleri kanıtlamaz?', paragraphs: [
        'Video en fazla oyuncu sayısını, eşleştirmeyi, voice chat’i, crossplay’i, ilerleme ağacını, görev süresini veya fiyatı açıklamıyor. Birden fazla ekip üyesinin görünmesi lobi sınırı değildir. PS5 veya Xbox kontrolcüsüne benzeyen hareket de konsol portunu kanıtlamaz.',
        'Görüntü geliştirme aşamasından olabilir; arayüz, denge ve içerik değişebilir. Yeni Dear Passengers videosu çıkarsa önce gerçekten yeni sahne ve açıklama bulunup bulunmadığı kontrol edilir. Yalnız thumbnail değişikliği sayfayı ve görselleri değiştirmek için yeterli değildir.'
      ]},
      { id: 'izleme', kicker: 'GÜVENLİ İZLEME', heading: 'Dear Passengers fragmanı nereden izlenir?', paragraphs: [
        'En güvenilir kaynak resmî FLEXUS YouTube kanalı ve Steam medya panelidir. Gizlilik geliştirilmiş YouTube yerleştirmesi de orijinal video kimliğine işaret edebilir. Yeniden yükleme, Türkçe anlatım veya Shorts içeriği keşfe yardımcı olsa bile geliştirici kaynağının yerine geçmez.',
        'Türkçe altyazı bulunan bir topluluk videosu oyunun Türkçe dil desteğini kanıtlamaz. Steam ayrı olarak Türkçe arayüzü onaylıyor. Dear Passengers fragman sayfası video dili, oyun arayüzü ve bu sitenin Türkçe açıklamasını birbirinden ayırır.'
      ]},
    ],
    localContext: [
      'Türkiye’de “trailer” kullanılsa da “fragman”, oyun ve film videoları için daha doğal genel kelimedir. Arama verisinde İngilizce marka korunurken, açıklama ve başlıklarda “resmî fragman” tercih edilir.',
      '“Oynanış videosu” daha güçlü bir iddiadır. Dear Passengers videoları oyun içi görünen sahneler içerir, ancak kesintisiz oynanış oturumu veya kontrol gösterimi değildir. Bu nedenle her video otomatik olarak gameplay videosu diye etiketlenmez.',
      'Türkiye’de popüler co-op içerik üreticilerinin yorumları kullanıcı ilgisini gösterebilir; ürün gerçeği için yine FLEXUS ve Steam esas alınır.'
    ],
    faqs: [
      { question: 'Dear Passengers resmî fragmanı var mı?', answer: 'Evet. FLEXUS 14 Temmuz duyuru fragmanı ve 22 Temmuz kısa teaser yayımladı.' },
      { question: 'Fragman gerçek oynanış gösteriyor mu?', answer: 'Oyun içi görünen sahneler var; ancak kesintisiz kontrol gösterimi veya nihai ürün kapsamı değil.' },
      { question: 'Dear Passengers iki milyon oyuncuya ulaştı mı?', answer: 'Hayır. Video açıklaması iki milyon Steam istek listesine yakın olduğunu söyledi; oyuncu sayısı değildir.' },
      { question: 'Fragman oyuncu sayısını gösteriyor mu?', answer: 'Hayır. Görünen karakter sayısı teknik lobi sınırı değildir.' },
      { question: 'Türkçe Dear Passengers fragmanı var mı?', answer: 'Resmî Türkçe dublajlı video doğrulanmadı; oyun için Türkçe arayüz desteği var.' },
      { question: 'Fragmanda çıkış tarihi açıklandı mı?', answer: 'Yalnızca 2026 penceresi biliniyor; kesin tarih videolarda açıklanmadı.' },
    ], related: ['dear-passengers-oynanis', 'dear-passengers-ozellikleri', 'dear-passengers-haberleri', 'dear-passengers-rolleri'],
  },
  {
    slug: 'dear-passengers-haberleri', englishPath: '/dear-passengers-news/', germanPath: '/de/dear-passengers-news/', arabicPath: '/ar/dear-passengers-news/',
    modifiedDate: '2026-09-02', verifiedDate: '2 Eylül 2026',
    keyword: 'Dear Passengers haberleri', title: 'Dear Passengers Haberleri: Resmî Güncellemeler ve Durum',
    description: 'Dear Passengers haberleri için kaynak kontrollü Türkçe takip: FLEXUS videoları, Steam güncellemeleri, istek listesi açıklamaları, demo ve çıkış durumu.',
    eyebrow: 'HABER DOSYASI · 2 EYLÜL 2026', h1: 'Dear Passengers haberleri: en son ne açıklandı?',
    intro: 'Dear Passengers haberleri için en yeni oyuna özel Steam gönderisi 31 Temmuz 2026 tarihli FLEXUS duyurusudur: stüdyo iki milyon Steam istek listesi bildirdi. 2 Eylül’de kişisel tercih filtrelerinden bağımsız kontrol edilen Steam “Top Wishlists” anlık görüntüsünde oyun 4. sıradaydı. Bunlar satış veya aktif oyuncu değildir.',
    answer: 'En son Dear Passengers’a özel Steam haberi, FLEXUS’un 31 Temmuz 2026’da iki milyon istek listesi bildirdiği gönderidir. 2 Eylül 2026 tarihli kişiselleştirilmemiş Steam Top Wishlists anlık görüntüsünde oyun 4. sıradaydı. Gamescom 30 Ağustos’ta sona erdi; organizatörün 31 Ağustos tarihli resmî değerlendirmesinde FLEXUS B2B katılımcısı olarak yer aldı. Ancak Dear Passengers derlemesinin gösterildiği veya ziyaretçilere açık hands-on yapıldığı doğrulanmadı.',
    note: 'Haberler yayın tarihi ve kaynakla kaydedilir. İstek listesi sayıları FLEXUS’a atfedilir; bağımsız olarak denetlenebilen canlı Steam hesap verisi veya oyuncu sayısı gibi sunulmaz.',
    heroImage: '/images/dear-passengers-1-5-million-wishlists.webp', heroAlt: 'Dear Passengers haberlerinde tarihsel bağlam için kullanılan resmî 1,5 milyon istek listesi kilometre taşı görseli',
    confirmed: ['31 Temmuz’da FLEXUS’un bildirdiği iki milyon istek listesi', '2 Eylül tarihli Top Wishlists anlık görüntüsünde 4. sıra', 'FLEXUS’un 31 Ağustos tarihli resmî Gamescom değerlendirmesinde B2B katılımcısı olarak yer alması', '2026 Windows çıkış penceresi'], unknown: ['Steam tarafından denetlenebilir canlı istek listesi toplamı', 'Dear Passengers derlemesinin Gamescom’da gösterilip gösterilmediği', 'Fuar ziyaretçilerine açık hands-on yapılıp yapılmadığı', 'Halka açık demonun tarihi ve erişim yöntemi', 'Kesin çıkış tarihi ve fiyat'],
    sections: [
      { id: 'son-guncelleme', kicker: '2 EYLÜL 2026 KONTROLÜ', heading: 'En yeni Dear Passengers haberi nedir?', paragraphs: [
        'FLEXUS, 31 Temmuz’da Dear Passengers’ın iki milyon Steam istek listesine ulaştığını bildirdi. Bu, stüdyonun tarihli açıklamasıdır; Valve tarafından herkese açık biçimde denetlenen canlı hesap toplamı değildir. İstek listesi ayrıca satış, gelir, indirme veya oyuncu sayısı anlamına gelmez.',
        '2 Eylül’de kişisel tercih filtreleri olmadan kontrol edilen Steam “Top Wishlists” anlık görüntüsü Dear Passengers’ı 4. sırada gösterdi. Sıra değişebilir ve satış listesi değildir. 31 Temmuz gönderisi, kontrol tarihinde Steam haber akışındaki en yeni Dear Passengers’a özel haberdir; duyurulan oynanış videosu henüz yeni bir Steam gönderisi olarak yayımlanmadı.'
      ]},
      { id: 'istek-listesi', kicker: 'İSTEK LİSTESİ BAĞLAMI', heading: 'Dear Passengers kaç istek listesine ulaştı?', paragraphs: [
        'FLEXUS daha önce 700 bin, bir milyon ve 1,5 milyon kilometre taşlarını, 31 Temmuz’da ise iki milyon istek listesini bildirdi. Eski “iki milyona yakın” ifadesi artık en güncel toplam değildir. Her rakam yine de stüdyo açıklamasıdır ve Steam’in herkese açık canlı sayacı olarak sunulamaz.',
        'İstek listesi; satış, gelir, inceleme, indirme veya eş zamanlı oyuncu değildir. Top Wishlists sırası da zamanla değişir. Dear Passengers haberleri 4. sırayı 2 Eylül tarihli ve kişiselleştirilmemiş bir anlık görüntü olarak kaydeder; kalıcı etiket veya satış tahmini yapmaz.'
      ]},
      { id: 'urun-durumu', kicker: 'ÜRÜN DURUMU', heading: 'Steam sayfasında ne değişti?', paragraphs: [
        '2 Eylül kontrolünde Steam hâlâ 2026 çıkışı, Windows 10 minimum sistemi, tek oyunculu ve çevrimiçi eşli oyunu listeliyor. Türkçe destek arayüz sütununda işaretli. Kesin tarih, satın alma fiyatı, maksimum oyuncu sayısı, demo ve Playtest düğmesi yok.',
        'Gamescom 30 Ağustos’ta sona erdi ve organizatörün 31 Ağustos tarihli resmî değerlendirmesinde FLEXUS B2B katılımcısı olarak yer aldı. Buna karşın, Dear Passengers derlemesinin gösterildiği veya halka açık hands-on yapıldığı doğrulanmadı. [[/tr/dear-passengers-demo/|Demo rehberi]], stüdyo katılımını oyun gösterimi ya da halka açık ev demosu gibi sunmaz.'
      ]},
      { id: 'soylenti', kicker: 'SÖYLENTİ KONTROLÜ', heading: 'Topluluk iddiaları nasıl ele alınıyor?', paragraphs: [
        'Forumlarda yapay zekâ kullanımı, konsol sürümü, ücretsiz model veya belirli co-op sayısı tartışılabilir. Bir tartışmanın çok paylaşılması ürün özelliğini doğrulamaz. Geliştiricinin doğrudan yanıtı varsa kaynak ve bağlamla aktarılır; yanıt yoksa iddia “tartışılıyor” seviyesinde kalır.',
        'Bazı rakip sayfalar uydurma Deluxe sürümleri, 31 Aralık tarihi, önerilen RTX 3070 sistemi veya resmî olmayan sınıflar yayımlıyor. Dear Passengers haberleri bu iddiaları tekrar ederek görünürlük kazandırmaz; yalnız kullanıcı güvenliği veya ciddi yanlış anlaşılma açısından gerekiyorsa kaynak karşılaştırması yapar.'
      ]},
    ],
    localContext: [
      'Türkiye’de “haberleri”, “son dakika”, “güncelleme” ve “ne zaman çıkacak” sorguları birbirine yaklaşabilir. Bu sayfa tarihli değişiklikleri toplar; çıkış tarihinin kalıcı cevabı ayrı rehberde tutulur.',
      '31 Temmuz tarihli “2,000,000 wishlists” stüdyo açıklaması Türkçede “iki milyon istek listesi” olarak aktarılır ve FLEXUS’a atfedilir. Bu ifade iki milyon oyuncu veya satış anlamına gelmez.',
      'Yalnız başlık veya küçük görsel değişikliği haber sayılmaz. Dear Passengers haberleri yeni birincil bilgi olduğunda güncellenir ve görünürde sahte tazelik üretmez.'
    ],
    faqs: [
      { question: 'En son Dear Passengers haberi ne?', answer: 'En yeni oyuna özel Steam gönderisi, FLEXUS’un 31 Temmuz 2026’da iki milyon istek listesi bildirdiği duyurudur.' },
      { question: 'Dear Passengers iki milyon istek listesine ulaştı mı?', answer: 'FLEXUS 31 Temmuz’da bunu bildirdi. Bu geliştirici açıklamasıdır; satış veya oyuncu sayısı değildir.' },
      { question: 'Dear Passengers çıkış tarihi açıklandı mı?', answer: 'Yalnızca 2026 penceresi açıklandı.' },
      { question: 'Dear Passengers fiyatı belli mi?', answer: 'Hayır. Steam’de satın alma fiyatı yok.' },
      { question: 'Dear Passengers demo çıktı mı?', answer: 'Hayır, halka açık demo henüz yayımlanmadı.' },
      { question: 'Dear Passengers Türkçe mi?', answer: 'Steam Türkçe arayüz desteğini işaretliyor.' },
    ], related: ['dear-passengers-fragman', 'dear-passengers-cikis-tarihi', 'dear-passengers-demo', 'dear-passengers-ozellikleri', 'dear-passengers-gelistiricisi'],
  },
  {
    slug: 'dear-passengers-ozellikleri', englishPath: '/dear-passengers-confirmed-features/', germanPath: '/de/dear-passengers-bestaetigte-features/', arabicPath: '/ar/dear-passengers-confirmed-features/',
    keyword: 'Dear Passengers özellikleri', title: 'Dear Passengers Özellikleri: Onaylananlar ve Bilinmeyenler',
    description: 'Dear Passengers özellikleri için kanıt tablosu: co-op, tek oyunculu, pilot ve kabin rolleri, fizik, hava, Türkçe arayüz ile açıklanmayan sistemler.',
    eyebrow: 'ÖZELLİK KAYDI · ONAYLANDI / GÖZLENDİ / BİLİNMİYOR', h1: 'Dear Passengers özellikleri: gerçekten neler onaylandı?',
    intro: 'Dear Passengers özellikleri hakkında fan sayfaları hızla geniş listeler oluşturuyor. Bu Türkçe kayıt yalnızca Steam’de yazılı olan, FLEXUS’un doğrudan söylediği veya resmî videoda açıkça görülen bilgileri sınıflandırır. Tahmini sınıflar, önerilen donanım, konsol ve ilerleme sistemleri doğrulanmış gibi sunulmaz.',
    answer: 'Onaylanan Dear Passengers özellikleri: tek oyunculu ve çevrimiçi eşli oyun, pilotluk veya kabinde çalışma, kalkış öncesi yolcu ve kargo seçimi, fizik tabanlı yolcu/kargo/nesneler, dinamik hava, türbülans ve hava boşluklarıdır. Türkçe arayüz onaylıdır; oyuncu sınırı, crossplay, voice chat ve kariyer sistemi bilinmiyor.',
    note: 'Her özellik bir kaynak düzeyi ve kontrol tarihi taşır. “Duyurulmadı” ifadesi “asla olmayacak” anlamına gelmez; yalnız mevcut kanıtı sınırlar.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Dear Passengers özellikleri rehberi için resmî kabin kaosu görseli',
    confirmed: ['Tek oyunculu ve çevrimiçi eşli', 'Pilot veya kabin ekibi olarak çalışma', 'Yolcu ve kargo seçimi', 'Fizik tabanlı kabin', 'Dinamik hava ve türbülans', 'Türkçe arayüz'], unknown: ['Maksimum oyuncu sayısı', 'Kariyer ve yükseltmeler', 'Crossplay ve voice chat', 'Konsol sürümleri'],
    sections: [
      { id: 'oyun-modlari', kicker: 'OYUN MODLARI', heading: 'Dear Passengers tek oyunculu ve co-op özellikleri', paragraphs: [
        'Steam iki ürün özelliğini açıkça işaretliyor: Tek Oyunculu ve Çevrimiçi Eşli. Dear Passengers arkadaşlarla oynanabilir ve yalnız oynama seçeneğine sahiptir. Ancak sayısal lobi sınırı, public matchmaking, özel oda, devam eden oyuna katılma ve yerel bölünmüş ekran açıklanmadı.',
        'Çevrimiçi etkileşim ve oyun içi sohbet içerik bildirimi, sesli sohbet özelliğiyle aynı değildir. Dear Passengers özellikleri arasında voice chat ancak ürün alanı veya geliştirici açıklaması bunu açıkça söylediğinde yer alabilir.'
      ]},
      { id: 'gorevler', kicker: 'EKİP GÖREVLERİ', heading: 'Pilotluk, kabin servisi ve kargo onaylandı mı?', paragraphs: [
        'Evet. Resmî açıklama bir kişinin uçağı yönetebileceğini, diğerlerinin kabini ayakta tutup yolculara servis yapacağını ve sorunlarla ilgileneceğini söylüyor. Kalkış öncesi yolcu ve kargo seçimi de yazılı olarak açıklanıyor. Daha riskli seçimler daha yüksek ödeme ve daha fazla sorunla ilişkilendiriliyor.',
        'Bununla birlikte sabit meslek sınıfları, yetenek puanları, kargo envanteri, şirket itibarı veya yükseltme ağacı açıklanmadı. Dear Passengers özellikleri, “görev var” bilgisini “tam RPG sınıf sistemi var” sonucuna dönüştürmez.'
      ]},
      { id: 'fizik-hava', kicker: 'FİZİK VE HAVA', heading: 'Kabin fiziği ve dinamik hava nasıl tanımlanıyor?', paragraphs: [
        'Steam yolcuların, bagajın ve gevşek nesnelerin kabinde hareket ettiğini; türbülans ve hava boşluklarının normal uçuşu kaosa çevirebildiğini yazıyor. Dear Passengers özellikleri arasında fizik ve hava yalnız görsel gözlem değil, resmî metinle de doğrulanan çekirdek sistemlerdir.',
        'Fakat fizik motorunun adı, aynı anda işlenen nesne sayısı, yıkım seviyesi ve olayların rastgeleliği açıklanmadı. Rakip bir Türkçe sayfanın “yüzlerce nesne” veya özel ayar menüsü yazması, kaynaksızsa kanıt değildir.'
      ]},
      { id: 'dil-platform', kicker: 'DİL VE PLATFORM', heading: 'Türkçe dil desteği ve platformlar', paragraphs: [
        'Steam, Türkçe için arayüz sütununu işaretliyor; seslendirme ve altyazı sütunlarını işaretlemiyor. Dear Passengers özellikleri listesinde “Türkçe arayüz” denebilir, “tam Türkçe” veya “Türkçe dublaj” denemez. Dil tablosu çıkışa kadar değişebileceği için tarihli kontrol gerekir.',
        'Windows PC resmî platformdur. PS5, Xbox, Switch, Android, iOS, macOS ve Linux duyurulmadı. Kontrolcü ve Steam Deck durumu da bilinmiyor. Platform isteği veya mağaza dışı kategori, ürün desteğini onaylamaz.'
      ]},
    ],
    localContext: [
      'Türkiye’de oyun medyası “özellikler” ve İngilizce “features” kelimelerini birlikte kullanır. Başlıkta Türkçe “özellikleri” daha doğal ve açıklayıcıdır; marka adı çevrilmeden korunur.',
      'Türkçe dil desteği bu pazar için önemli bir farklılaştırıcıdır. Yine de yalnız arayüz onayını ses ve altyazıya genişletmek, yerelleştirme fırsatını yanlış bilgiye dönüştürür.',
      'Yerel rakip sonuçlarda uydurma önerilen sistem ve sınıf tabloları görülüyor. Dear Passengers özellikleri sayfası bu bilgi boşluğunu daha uzun bir hayalî listeyle değil, açık durum sınıflarıyla karşılar.'
    ],
    faqs: [
      { question: 'Dear Passengers özellikleri neler?', answer: 'Solo ve online co-op, pilot/kabin görevleri, yolcu-kargo seçimi, fizik ve dinamik hava onaylandı.' },
      { question: 'Dear Passengers Türkçe mi?', answer: 'Türkçe arayüz onaylı; seslendirme ve altyazı onaylı değil.' },
      { question: 'Dear Passengers kariyer modu var mı?', answer: 'Kariyer veya kalıcı ilerleme sistemi açıklanmadı.' },
      { question: 'Dear Passengers crossplay var mı?', answer: 'Crossplay duyurulmadı.' },
      { question: 'Dear Passengers konsolda var mı?', answer: 'Hayır; şu anda yalnız Windows PC duyuruldu.' },
      { question: 'Dear Passengers fizik tabanlı mı?', answer: 'Evet. Yolcu, kargo ve kabin nesnelerinin fizik tabanlı davranışı resmî özellik.' },
    ], related: ['dear-passengers-oyunu', 'dear-passengers-oynanis', 'dear-passengers-rolleri', 'dear-passengers-kac-kisilik', 'dear-passengers-fragman', 'dear-passengers-gelistiricisi'],
  },
  {
    slug: 'dear-passengers-rolleri', englishPath: '/dear-passengers-roles/', germanPath: '/de/dear-passengers-rollen/', arabicPath: '/ar/dear-passengers-roles/',
    keyword: 'Dear Passengers rolleri', title: 'Dear Passengers Rolleri: Pilot ve Kabin Ekibi Görevleri',
    description: 'Dear Passengers rolleri: pilot, kabin ekibi, yolcu servisi ve kargo sorumlulukları; sınıf sistemi, rol değiştirme ve solo görevlerde bilinmeyenler.',
    eyebrow: 'EKİP GÖREVLERİ · SINIF UYDURMADAN', h1: 'Dear Passengers rolleri: pilot ve kabin ekibi ne yapıyor?',
    intro: 'Dear Passengers rolleri, şu anda sabit karakter sınıfları olarak değil, uçuş sırasında üstlenilen sorumluluklar olarak doğrulanıyor. Pilot uçağı yönetirken kabin ekibi servis, yolcu, kargo ve olaylarla ilgileniyor. Bu sayfa resmî görevleri, fragmandan uydurulan “hava polisi” veya “levazım subayı” gibi sınıflardan ayırır.',
    answer: 'Onaylanan Dear Passengers rolleri iki ana çalışma alanıdır: uçağı kullanan pilot ve kabini yöneten ekip. Kabin işi yiyecek/içecek servisi, yolcu kontrolü, kargo koruması ve sorunların büyümesini önlemeyi içerir. Sabit sınıflar, özel yetenekler, rol kilidi, rol değiştirme ve en iyi ekip dizilimi açıklanmadı.',
    note: 'Resmî kaynak “crew duties” ve görevleri açıklar; sınıf seçim ekranı veya özel meslek ağacı göstermez. Bu nedenle rol, görev ve karakter görünümü ayrı kavramlar olarak tutulur.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Dear Passengers rolleri için pilot ve kabin ekibini gösteren resmî görsel',
    confirmed: ['Pilotluk', 'Kabin içinde çalışma', 'Yolcu servisi ve kontrolü', 'Kargo koruması', 'Ekip görevlerinin birbirini etkilemesi'], unknown: ['Sabit sınıf sistemi', 'Özel yetenekler', 'Rol değiştirme kuralları', 'Solo yapay zekâ ekibi'],
    sections: [
      { id: 'pilot', kicker: 'PİLOT', heading: 'Dear Passengers pilot rolü ne yapıyor?', paragraphs: [
        'Pilot uçağı yönetir ve hareketleri kabin koşullarını etkiler. Dinamik hava, türbülans ve hava boşlukları resmî özelliklerdir. Dear Passengers rolleri arasındaki pilotluk, güvenli uçuş ile kabindeki fizik kaosu arasında doğrudan bağ kurar. Buna rağmen ayrıntılı uçuş prosedürü, navigasyon veya gerçekçilik seviyesi açıklanmadı.',
        'Pilotun ayrı bir karakter sınıfı mı yoksa herkesin üstlenebileceği görev mi olduğu bilinmiyor. Rolün görev ortasında devredilmesi, iki kişinin kokpit paylaşması veya otomatik pilot desteği gösterilmedi. Fragmanda kokpite giren bir karakter, seçim ve kilit kurallarını kanıtlamaz.'
      ]},
      { id: 'kabin', kicker: 'KABİN EKİBİ', heading: 'Kabin ekibi hangi görevleri üstleniyor?', paragraphs: [
        'Steam metni kabin ekibinin yolculara yiyecek ve içecek sağlamasını, sorunlu yolcuları kontrol etmesini, kargoyu korumasını ve küçük olayların büyümesini engellemesini açıklıyor. Dear Passengers rolleri kabinde tek bir basit servis işi değil, aynı anda öncelik belirlemeyi gerektiren bağlantılı sorumluluklar sunuyor.',
        'Bununla birlikte hostes, güvenlik, tamirci, kargo sorumlusu gibi ayrı seçilebilir sınıflar duyurulmadı. Farklı görevlerin farklı oyunculara dağıtılması mümkün olabilir; ancak bunu kalıcı meslek olarak adlandırmak için arayüz veya geliştirici açıklaması gerekir.'
      ]},
      { id: 'ekip-iletisimi', kicker: 'EKİP ÇALIŞMASI', heading: 'Dear Passengers rolleri neden birbirine bağlı?', paragraphs: [
        'Pilotun sert dönüşü, sabitlenmemiş eşya ve yolcuları hareket ettirebilir; kabindeki sorun da uçağın güvenliğini etkileyebilir. Bu tasarım Dear Passengers’ın co-op kimliğini oluşturuyor. Ekip hangi riskli yolcu ve kargoyu taşıyacağını daha yerde seçtiği için görev yükü kalkıştan önce şekilleniyor.',
        'İletişim önemli görünse de oyun içi sesli sohbet onaylanmadı. Discord veya Steam konuşması kullanılabilir, fakat ürün özelliği olarak yazılamaz. Ping sistemi, görev işaretleri ve erişilebilirlik seçenekleri de açıklanmadı.'
      ]},
      { id: 'solo', kicker: 'SOLO VE GRUP', heading: 'Tek oyuncuda Dear Passengers rolleri nasıl çalışır?', paragraphs: [
        'Tek oyunculu mod onaylandı; uygulama biçimi bilinmiyor. Bir oyuncu kokpit ile kabin arasında fiziksel olarak hareket edebilir, yapay zekâ yardımcısı kullanabilir veya azaltılmış görevlerle oynayabilir. Bunlar olası tasarımlardır, açıklanmış Dear Passengers özellikleri değildir.',
        'Maksimum oyuncu sayısı bilinmediği için “en iyi takım dizilimi” önerilemez. Demo gerçek görev paylaşımını gösterdiğinde sürüm, grup büyüklüğü ve rol esnekliği kaydedilmelidir. [[/tr/dear-passengers-kac-kisilik/|Oyuncu sayısı rehberi]] kapasite hakkında güncel resmî sınırı izler.'
      ]},
    ],
    localContext: [
      'Türkiye’de oyuncular “roller”, “karakterler”, “sınıflar” ve “kim ne yapıyor” ifadelerini kullanabilir. Mevcut kanıt yalnız görev alanlarını gösterdiği için “roller” en doğru ana terimdir; “class” karşılığı olan “sınıf” daha güçlü bir sistem iddiasıdır.',
      'Türkçe Steam metni henüz oyun açıklamasını İngilizce gösterse bile arayüz dili Türkçe olarak işaretli. Çıkışta resmî Türkçe rol adları görünürse bu rehber kendi çevirisini dayatmak yerine oyun içi terimleri kontrol edecektir.',
      'Yerel rakip sonuçta “hava polisi”, “levazım subayı” ve timsah güreşi gibi kaynaksız tablolar görüldü. Dear Passengers rolleri sayfası bu sınıfları yeniden üretmez.'
    ],
    faqs: [
      { question: 'Dear Passengers rolleri neler?', answer: 'Onaylanan ana görev alanları pilotluk ve kabin ekibidir; yolcu, servis, kargo ve olay yönetimi kabin işine dahildir.' },
      { question: 'Dear Passengers sınıfları var mı?', answer: 'Sabit veya seçilebilir sınıf sistemi açıklanmadı.' },
      { question: 'Dear Passengers’ta pilot olunur mu?', answer: 'Evet. Uçağı kullanmak resmî ana görevlerden biridir.' },
      { question: 'Kabin ekibi ne yapar?', answer: 'Servis, yolcu kontrolü, kargo koruması ve sorunların büyümesini önlemeyle ilgilenir.' },
      { question: 'Rol değiştirilebilir mi?', answer: 'Rol değiştirme kuralları henüz açıklanmadı.' },
      { question: 'Tek oyuncuda yapay zekâ ekip var mı?', answer: 'Tek oyunculu mod var; AI ekip kullanıp kullanmadığı bilinmiyor.' },
    ], related: ['dear-passengers-oynanis', 'dear-passengers-kac-kisilik', 'dear-passengers-ozellikleri', 'dear-passengers-demo', 'dear-passengers-benzeri-oyunlar'],
  },
  {
    slug: 'dear-passengers-gelistiricisi', englishPath: '/dear-passengers-developer-flexus/', germanPath: '/de/dear-passengers-entwickler-flexus/', arabicPath: '/ar/dear-passengers-developer/',
    keyword: 'Dear Passengers geliştiricisi', title: 'Dear Passengers Geliştiricisi FLEXUS Kimdir?',
    description: 'Dear Passengers geliştiricisi ve yayıncısı FLEXUS hakkında kaynaklı profil: Steam kimliği, stüdyo açıklamaları, demo hedefi ve doğrulanmayan iddialar.',
    eyebrow: 'STÜDYO PROFİLİ · KAYNAKLI', h1: 'Dear Passengers geliştiricisi: FLEXUS hakkında bilinenler',
    intro: 'Dear Passengers geliştiricisi ve yayıncısı Steam’de FLEXUS olarak listeleniyor. Bu Türkçe profil stüdyonun ürüne bağlı resmî kimliğini, doğrudan röportajlarını ve tarihli istek listesi açıklamalarını toplar; benzer isimli fan alan adlarını veya anonim şirket verilerini stüdyo kanıtı saymaz.',
    answer: 'Dear Passengers geliştiricisi FLEXUS’tur ve aynı şirket Steam’de yayıncı olarak da görünür. FLEXUS oyunu 2026 Windows sürümü olarak listeliyor, Gamescom yapısı ve daha sonra açık demo hedefinden söz ediyor. Takım büyüklüğü, bütçe, motor, kesin çıkış tarihi ve dağıtım ortakları hakkında doğrulanmış ayrıntı sınırlıdır.',
    note: 'Stüdyo bilgileri Steam ve adı belirtilmiş doğrudan röportajlarla doğrulanır. Geliştiriciye atfedilen istek listesi verileri bağımsız satış veya oyuncu denetimi değildir.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Dear Passengers geliştiricisi FLEXUS profili için resmî oyun görseli',
    confirmed: ['FLEXUS geliştirici', 'FLEXUS yayıncı', '2026 Windows planı', 'Demo ve Gamescom hedefi hakkında doğrudan açıklama'], unknown: ['Nihai ekip büyüklüğü', 'Oyun motoru', 'Bütçe ve finansman', 'Konsol yayın ortakları'],
    sections: [
      { id: 'kimlik', kicker: 'RESMÎ KİMLİK', heading: 'Dear Passengers geliştiricisi hangi stüdyo?', paragraphs: [
        'Steam ürün sayfası, geliştirici ve yayıncı alanlarında FLEXUS adını gösteriyor. Bu, oyunla şirket arasındaki en doğrudan ürün bağlantısıdır. Valve Steam platformunu işletir; Dear Passengers geliştiricisi değildir. Benzer alan adına sahip bağımsız bilgi siteleri de FLEXUS’un resmî sitesi sayılmaz.',
        'Bir sosyal hesabın resmî kabul edilmesi için Steam, stüdyo sitesi veya doğrulanabilir karşılıklı bağlantı aranır. Logo ve ekran görüntüsü tek başına kimlik doğrulamaz. Dear Passengers hakkında alıntı aktarılırken kişinin adı, tarih, yayın ve bağlam korunmalıdır.'
      ]},
      { id: 'gelistirme', kicker: 'GELİŞTİRME BAĞLAMI', heading: 'FLEXUS oyun hakkında ne açıkladı?', paragraphs: [
        'Resmî Steam metni, dünyanın en kötü havayolu ekibi olarak pilotluk ve kabin işlerini paylaştıran co-op fikrini sunuyor. Doğrudan röportaj, stüdyonun Gamescom için oynanabilir yapı hazırlama ve daha sonra halka açık demo çıkarma hedefini anlatıyor. Bunlar geliştirme planıdır; yayımlanmış demo bağlantısı değildir.',
        'FLEXUS’un daha önce mobil projeler üzerinde çalışmış olması, Dear Passengers Android sürümünü kanıtlamaz. Her ürünün platform ve iş modeli ayrı incelenmelidir. Steam mevcut oyun için yalnız Windows PC gösteriyor.'
      ]},
      { id: 'basari', kicker: 'İSTEK LİSTESİ AÇIKLAMALARI', heading: 'FLEXUS hangi ilgi rakamlarını paylaştı?', paragraphs: [
        'Stüdyo farklı tarihlerde yüz binlerce ve daha sonra 1,5 milyon Steam istek listesi gibi kilometre taşları duyurdu. 22 Temmuz videosunun açıklaması Dear Passengers’ın iki milyona yakın olduğunu söyledi. Bu rakamlar geliştirici tarafından bildirilen pazarlama ilgisidir.',
        'İstek listesi satış, gelir veya aktif kullanıcı değildir. Her hesap daha sonra satın alma yapmayabilir. Dear Passengers geliştiricisi profili sayıları kaynağı ve tarihiyle gösterir, anlık bağımsız denetim yapılmış gibi sunmaz.'
      ]},
      { id: 'bilinmeyen', kicker: 'AÇIK SORULAR', heading: 'Stüdyo ve üretim hakkında ne bilinmiyor?', paragraphs: [
        'Güncel tam zamanlı ekip sayısı, bütçe, kullanılan oyun motoru, dış kaynak ortakları ve konsol planı kamuya açık birincil belgelerde net değil. Otomatik şirket dizinleri farklı tarihlerden kişileri toplayabilir; Dear Passengers üretim ekibinin gerçek kapsamını göstermeyebilir.',
        'Bir iş ilanı veya eski mobil proje, mevcut oyunun belirli teknoloji ya da içerik yöntemini kullandığını tek başına kanıtlamaz. Ciddi bir teknik iddia için FLEXUS’un oyuna özel açıklaması gerekir. Topluluk tartışmaları haber değeri taşısa da kanıt düzeyi açık tutulmalıdır.'
      ]},
    ],
    localContext: [
      'Türkiye’de kullanıcılar “geliştirici”, “yapımcı firma”, “kim yapıyor” ve “hangi şirket” diye arayabilir. Steam alanındaki doğru Türkçe ürün terimi “Geliştirici” ve “Yayıncı”dır; ikisi FLEXUS olsa bile işlevleri ayrı açıklanır.',
      'Yabancı bir stüdyo adını Türkçeleştirmek yerine FLEXUS markası korunur. Kişi ve şirket adları, unvanı belirsiz şekilde çoğaltılmaz.',
      'Yerel haber özeti, İngilizce veya Ukraynaca röportajdaki “istiyoruz” kipini “kesin yapacağız” biçimine çevirmemelidir. Dil yerelleşirken şart ve belirsizlik korunur.'
    ],
    faqs: [
      { question: 'Dear Passengers geliştiricisi kim?', answer: 'Steam’e göre geliştirici ve yayıncı FLEXUS’tur.' },
      { question: 'FLEXUS hangi ülkeden?', answer: 'Bu sayfa yalnız ürünle ilgili açık kaynaklı bilgiyi kullanır; merkez ve ekip ayrıntıları güncel birincil kaynak olmadan kesinleştirilmez.' },
      { question: 'Dear Passengers hangi motorla yapılıyor?', answer: 'Oyun motoru resmî olarak açıklanmadı.' },
      { question: 'FLEXUS demo çıkaracak mı?', answer: 'Stüdyo Gamescom yapısı ve daha sonra açık demo hedefinden söz etti; tarih yok.' },
      { question: 'FLEXUS aynı zamanda yayıncı mı?', answer: 'Evet, Steam’de yayıncı alanında da FLEXUS yazıyor.' },
      { question: 'Dear Passengers mobil oyun mu?', answer: 'Hayır. Mevcut resmî platform Windows PC; mobil sürüm duyurulmadı.' },
    ], related: ['dear-passengers-haberleri', 'dear-passengers-demo', 'dear-passengers-cikis-tarihi', 'dear-passengers-ozellikleri'],
  },
  {
    slug: 'dear-passengers-benzeri-oyunlar', englishPath: '/games-like-dear-passengers/', germanPath: '/de/spiele-wie-dear-passengers/', arabicPath: '/ar/games-like-dear-passengers/',
    keyword: 'Dear Passengers benzeri oyunlar', title: 'Dear Passengers Benzeri Oyunlar: Co-op Kaos Alternatifleri',
    description: 'Dear Passengers benzeri oyunlar: co-op koordinasyon, fizik, görev baskısı, uçuş veya servis yönlerine göre R.E.P.O., Lethal Company, Overcooked ve Sky Team karşılaştırması.',
    eyebrow: 'YEREL ARAMA NİYETİ · KAYNAKLI KARŞILAŞTIRMA', h1: 'Dear Passengers benzeri oyunlar: beklerken ne oynanır?',
    intro: 'Dear Passengers benzeri oyunlar arayan kişi yalnız uçak teması değil; arkadaşlarla görev paylaşımı, fizik tabanlı hatalar ve baskı altında koordinasyon arıyor olabilir. Bu rehber her önerinin benzer yönünü ve önemli farkını açıklar. Henüz çıkmamış Dear Passengers için “aynısı” iddiası kurmaz.',
    answer: 'Dear Passengers benzeri oyunlar arasında fizik ve ekip koordinasyonu için R.E.P.O., riskli co-op görevleri için Lethal Company, yoğun servis paylaşımı için Overcooked! 2 ve iki kişilik kokpit iletişimi için Sky Team öne çıkar. Hiçbiri pilotluk, kabin servisi, yolcu ve kargo karışımını birebir sunmaz.',
    note: 'Karşılaştırma, yalnız Dear Passengers’ın doğrulanmış özelliklerine dayanır. Diğer oyunların fiyatı, platformu ve oyuncu sayısı resmî mağazalarından kontrol edilmelidir; popülerlik benzerlik kanıtı değildir.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Dear Passengers benzeri oyunlar rehberi için co-op kabin görseli',
    confirmed: ['Dear Passengers online co-op', 'Fizik tabanlı kabin', 'Pilot ve servis görevleri', 'Riskli yolcu ve kargo seçimi'], unknown: ['Nihai görev çeşitliliği', 'En yakın gerçek karşılaştırma', 'Tam ilerleme sistemi', 'Fiyat ve grup sınırı'],
    sections: [
      { id: 'olcutler', kicker: 'KARŞILAŞTIRMA ÖLÇÜTLERİ', heading: 'Dear Passengers benzeri oyun nasıl seçilir?', paragraphs: [
        'Benzerlik için dört doğrulanmış eksen kullanıyoruz: çevrimiçi ekip koordinasyonu, fizik tabanlı nesneler, aynı anda yürütülen roller ve daha yüksek ödül için alınan risk. Bir oyunun yalnız uçak içermesi Dear Passengers benzeri olması için yeterli değildir; yalnız co-op olması da görev yapısını açıklamaz.',
        'Dear Passengers henüz yayımlanmadığı için gerçek tempo, tekrar oynanabilirlik ve ilerleme ölçülemez. Bu liste fragman ve Steam metniyle görülebilen tasarım yakınlığını anlatır. Demo çıktığında karşılaştırma ağırlıkları değişebilir.'
      ]},
      { id: 'fizik-koop', kicker: 'FİZİK VE CO-OP', heading: 'R.E.P.O. ve Lethal Company neden karşılaştırılıyor?', paragraphs: [
        'R.E.P.O., fizik tabanlı nesne taşıma ve ekip hatalarının komik sonuçları nedeniyle yaklaşır. Lethal Company ise grup içi rol paylaşımı, riskli hedefler ve iletişim baskısı yönünden benzer bir beklenti oluşturur. Ancak ikisi de yolcu uçağında servis ve pilotluk oyunu değildir.',
        'Korku tonu önemli farktır. Dear Passengers resmî sunumunda komedi ve kaotik havayolu işi öne çıkıyor; R.E.P.O. ile Lethal Company korku unsurlarına dayanır. Dear Passengers benzeri oyunlar listesi ortak mekaniği belirtirken yaş tonu ve atmosfer farkını gizlemez.'
      ]},
      { id: 'servis-iletisim', kicker: 'SERVİS VE İLETİŞİM', heading: 'Overcooked! 2 ve Sky Team hangi yönlerden benzer?', paragraphs: [
        'Overcooked! 2, dar alanda zaman baskısı altında görev paylaşımı ve bir oyuncunun hatasının herkesi etkilemesi bakımından güçlü bir servis karşılaştırmasıdır. Uçuş fiziği veya yolcu seçimi yoktur. Dear Passengers’ın kabin hizmeti yönünü bekleyen gruplar için mekanik ritim açısından anlamlıdır.',
        'Sky Team iki kişilik bir masa oyunudur ve pilot-kopilot iletişimini merkeze alır. Gerçek zamanlı fizik tabanlı video oyunu değildir. Kokpit kararları ve ortak uçuş amacı benzer, fakat Dear Passengers’ın kabin kaosu ve çevrimiçi yapısını sunmaz.'
      ]},
      { id: 'secim', kicker: 'HANGİSİNİ SEÇMELİ?', heading: 'Grubunuza uygun Dear Passengers alternatifi', paragraphs: [
        'Fizik ve spontane hata arayan grup R.E.P.O.’ya, riskli görev ve iletişim isteyen grup Lethal Company’ye, servis koordinasyonu isteyen grup Overcooked! 2’ye, sakin ama yoğun kokpit iletişimi isteyen iki kişi Sky Team’e bakabilir. Bu sıralama objektif en iyi oyun listesi değildir.',
        'Platform, yaş derecelendirmesi, Türkçe dil, oyuncu sayısı ve fiyat satın almadan önce her ürünün resmî mağazasından doğrulanmalıdır. Dear Passengers benzeri oyunlar zaman içinde güncellenebilir. Gelecekte yalnız popüler olduğu için alakasız bir co-op oyunu eklemeyeceğiz.'
      ]},
    ],
    localContext: [
      'Türkiye’de “benzeri oyunlar”, “gibi oyunlar” ve “alternatif” aynı keşif niyetinin doğal biçimleridir. “Alternatif” satın alma seçeneği çağrıştırırken “benzeri oyunlar” mekanik karşılaştırma için daha geniş ve doğaldır.',
      'Türkiye’de fiyat ve Türkçe destek karar için önemli olabilir; ancak bu değerler hızla değişir. Kalıcı rehber, değişken indirim rakamlarını kopyalamak yerine resmî mağazaya yönlendirir.',
      'Dear Passengers benzeri oyunlar sayfası, çıkmamış ürün için sahte deneyim iddiası taşımaz. Karşılaştırma yalnız doğrulanmış oyun sütunlarına ve açık farklara dayanır.'
    ],
    faqs: [
      { question: 'Dear Passengers benzeri oyunlar hangileri?', answer: 'R.E.P.O., Lethal Company, Overcooked! 2 ve Sky Team farklı doğrulanmış yönlere benzer.' },
      { question: 'Dear Passengers Lethal Company gibi mi?', answer: 'Co-op risk ve iletişim benzerliği var; uçuş, servis ve ton bakımından farklı.' },
      { question: 'Dear Passengers korku oyunu mu?', answer: 'Steam oyunu aksiyon, macera, indie ve komedi/coop etiketleriyle sunuyor; resmî korku sınıflandırması yok.' },
      { question: 'Dear Passengers gibi uçak co-op oyunu var mı?', answer: 'Birebir aynı doğrulanmış karışım bulunmuyor; Sky Team kokpit iletişimine, Overcooked servis koordinasyonuna yaklaşır.' },
      { question: 'Dear Passengers çıkana kadar ne oynanır?', answer: 'Tercihinize göre fizik için R.E.P.O., görev riski için Lethal Company veya servis için Overcooked! 2 düşünülebilir.' },
      { question: 'Bu oyunların Türkçe desteği var mı?', answer: 'Dil desteği değişebilir; her oyunun resmî mağaza tablosu satın almadan önce kontrol edilmelidir.' },
    ], related: ['dear-passengers-oynanis', 'dear-passengers-ozellikleri', 'dear-passengers-kac-kisilik', 'dear-passengers-cikis-tarihi'],
  },
];

export const turkishHomeGuide: TurkishGuide = {
  slug: '', englishPath: '/', germanPath: '/de/', arabicPath: '/ar/', chinesePath: '/zh-cn/',
  keyword: 'Dear Passengers oyunu', title: 'Dear Passengers Oyunu Türkçe Rehber: Çıkış, Oynanış ve Demo',
  description: 'Dear Passengers oyunu için araştırılmış Türkçe rehber: oynanış, çıkış tarihi, kaç kişilik olduğu, demo, indirme, sistem gereksinimleri ve resmî haberler.',
  eyebrow: 'TÜRKÇE DEAR PASSENGERS REHBERİ · 29 TEMMUZ 2026', h1: 'Dear Passengers oyunu: doğrulanmış Türkçe bilgi merkezi',
  intro: 'Dear Passengers oyunu, dünyanın en kötü havayolunun ekibi olarak uçağı ve kabini birlikte yönetmeye dayanan birinci şahıs co-op yapımıdır. Türkçe bölüm İngilizce sayfaların düz çevirisi değildir; Türkiye’de görülen “indir”, “sistem gereksinimleri”, “ne zaman çıkacak” ve “kaç kişilik” aramalarına göre ayrı bilgi mimarisi kullanır.',
  answer: 'Dear Passengers oyunu 2026’da Windows PC için Steam’e planlanıyor. Tek oyunculu ve çevrimiçi eşli oyun, pilotluk, kabin görevleri, riskli yolcu/kargo seçimi, fizik ve dinamik hava onaylandı. Türkçe arayüz destekleniyor; kesin tarih, fiyat, maksimum oyuncu sayısı, konsol sürümü ve açık demo tarihi bilinmiyor.',
  note: 'Bu Türkçe merkez Steam, FLEXUS’un resmî videoları ve doğrudan geliştirici açıklamalarını önceliklendirir. Arama sonucundaki tekrar veya fan sayfasındaki tablo birincil kaynak yerine geçmez.',
  heroImage: '/images/hero-bg.webp', heroAlt: 'Dear Passengers oyunu Türkçe rehberi için resmî uçak kabini görseli',
  confirmed: ['2026 Windows PC çıkışı', 'Tek oyunculu ve çevrimiçi eşli', 'Pilot ve kabin ekip görevleri', 'Türkçe arayüz', 'Minimum PC gereksinimleri'], unknown: ['Kesin çıkış tarihi', 'Türkiye fiyatı', 'Maksimum oyuncu sayısı', 'Konsol ve mobil sürümler', 'Açık demo tarihi'],
  sections: [
    { id: 'oyun-nedir', kicker: 'OYUN NEDİR?', heading: 'Dear Passengers oyunu nasıl bir yapım?', paragraphs: [
      'Dear Passengers oyunu, FLEXUS tarafından geliştirilip yayımlanan aksiyon, macera ve indie bir co-op havayolu oyunudur. Ekip yolcu ve kargoyu hedefe ulaştırmaya çalışır; bir kişi pilotluk yaparken diğerleri kabin servisi ve çıkan sorunlarla ilgilenir. Daha yüksek ödeme getiren seçimler daha fazla risk oluşturabilir.',
      'Steam tek oyunculu ve çevrimiçi eşli özelliklerini listeliyor. Yolcular, bagaj ve gevşek nesneler fizik tabanlı hareket ediyor; dinamik hava, türbülans ve hava boşlukları kabini etkiliyor. Tam görev yapısı, ilerleme ve lobi sınırı henüz açıklanmadı.'
    ]},
    { id: 'turkiye-niyetleri', kicker: 'TÜRKİYE ARAMALARI', heading: 'Türk oyuncular Dear Passengers hakkında ne arıyor?', paragraphs: [
      'Son 30 günlük GSC verisinde Türkiye’den ana sayfaya yaklaşık 904 gösterim geldi. Yerel sorgularda “Dear Passengers indir” 92, “Dear Passengers sistem gereksinimleri” 38 ve “Dear Passengers ne zaman çıkacak” 16 gösterim üretti. “Kaç kişilik”, “kaç TL”, “oyna” ve “paralı mı” gibi sorular da görüldü.',
      'Bu nedenle Dear Passengers oyunu Türkçe merkezi tek bir uzun çeviri sayfası değildir. Her bağımsız arama niyeti kendi kanıtlı rehberine bağlanır; fiyat ve konsol gibi yeterli verisi olmayan sorular çıkış sayfasında kalır. Böylece aynı anahtar kelime için birbirini yiyen ince sayfalar oluşturulmaz.'
    ]},
    { id: 'durum', kicker: 'GÜNCEL DURUM', heading: 'Dear Passengers çıkış, demo ve indirme durumu', paragraphs: [
      'Steam çıkış için yalnız 2026 yılını veriyor. Windows onaylı tek platform; fiyat ve kesin gün yok. FLEXUS Gamescom yapısı ile daha sonra halka açık demo hedefinden söz etti, fakat resmî Steam demo düğmesi henüz bulunmuyor.',
      'Dear Passengers oyunu şu anda indirilemez. APK, crack, torrent veya ücretsiz tam sürüm iddiaları FLEXUS tarafından doğrulanmadı. [[/tr/dear-passengers-indir/|Türkçe güvenli indirme rehberi]], “indir” aramasını sahte dosya tuzağına dönüştürmeden doğru mağaza durumunu açıklar.'
    ]},
    { id: 'dil-kaynak', kicker: 'TÜRKÇE VE KAYNAKLAR', heading: 'Oyunda Türkçe var mı ve bilgi nereden geliyor?', paragraphs: [
      'Steam dil tablosu Türkçe arayüzü onaylıyor; seslendirme ve altyazı sütunları işaretli değil. “Türkçe destek var” derken bu sınır korunur. Dear Passengers oyunu Türkçe rehberi, ürün dilini olduğundan geniş göstermez.',
      'Platform, mod, dil ve donanım için Steam; video sahneleri için resmî FLEXUS kanalı; demo planı için doğrudan röportaj kullanılır. İkincil Türkçe medya yerel terim ve soru keşfine yardımcı olur, ancak resmî tarih veya özellik üretmez.'
    ]},
  ],
  localContext: [
    'Ana ifade olarak “Dear Passengers oyunu” seçildi. Türkiye’de marka adı çevrilmeden kullanılır; “game” yerine “oyunu” eklemek ürünün film, şarkı veya genel yolcu hitabı ile karışmasını azaltır.',
    'Türkçe resmî Steam arayüzü “Çıkış Tarihi”, “Sistem Gereksinimleri”, “Tek Oyunculu” ve “Çevrimiçi Eşli” terimlerini kullanıyor. Rehber bu yerleşik oyun mağazası dilini izler, makine çevirisi kokan kalıplar üretmez.',
    'Türkiye için özel fiyat bilinmediğinden TL tahmini yapılmaz. Tarih açıklanırsa yerel gün/ay/yıl biçimi ve Türkiye saati yalnız kaynakta saat bilgisi varsa gösterilir.'
  ],
  faqs: [
    { question: 'Dear Passengers oyunu ne zaman çıkacak?', answer: 'Steam 2026 yılını gösteriyor; kesin ay ve gün açıklanmadı.' },
    { question: 'Dear Passengers Türkçe olacak mı?', answer: 'Evet, Steam Türkçe arayüzü onaylıyor. Türkçe seslendirme ve altyazı onaylı değil.' },
    { question: 'Dear Passengers kaç kişilik?', answer: 'Maksimum sayı bilinmiyor; tek oyunculu ve çevrimiçi eşli oyun onaylandı.' },
    { question: 'Dear Passengers indirilebilir mi?', answer: 'Henüz hayır. Şu anda yalnız Steam istek listesine eklenebilir.' },
    { question: 'Dear Passengers demo var mı?', answer: 'Halka açık demo henüz yok; FLEXUS demo planından söz etti.' },
    { question: 'Dear Passengers sistem gereksinimleri neler?', answer: 'Minimum Windows 10 64-bit, i5 2.5 GHz, 8 GB RAM, GTX 1060 veya RX 6600 XT, DirectX 12 ve 4 GB alan.' },
  ], related: ['dear-passengers-oyunu', 'dear-passengers-steam', 'dear-passengers-oynanis', 'dear-passengers-cikis-tarihi', 'dear-passengers-kac-kisilik'],
};

export const turkishGuideBySlug = new Map(turkishGuides.map((guide) => [guide.slug, guide]));
export const turkishGuideByEnglishPath = new Map(turkishGuides.map((guide) => [guide.englishPath, guide]));
