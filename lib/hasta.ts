/* HASTA BİLGİLENDİRME İÇERİĞİ
   Sayfa yalnızca bu dosyayı okur. Yeni bölüm eklemek için diziye
   yeni bir kayıt eklemen yeterli.

   `when` alanı bölümün başındaki zaman etiketidir; boş bırakılırsa
   etiket gösterilmez. Bölümler zaman sırasına göre dizildi.

   Metin hekimin verdiği hâliyle korunmuştur; yalnızca zaman
   etiketleri ve başlıklar sayfa düzeni için eklenmiştir. */

export const HASTA_META = {
  eyebrow: "Hasta bilgilendirme",
  title: "Ameliyat öncesi",
  titleAccent: "yapılması gerekenler",
  /* Giriş paragrafı yok: sayfa doğrudan bölümlerle başlar. */
  intro: "",

  /* Görseli public/hasta-bilgilendirme/ klasörüne koy.
     Dikey ya da kareye yakın kadraj uygun. */
  image: "/hasta-bilgilendirme/hazirlik.jpg",
  /* Görsel yalnızca süs değilse açıklamayı buna göre yaz;
     tamamen dekoratifse boş bırak (alt=""). */
  imageAlt: "Muayenehanede hasta görüşmesi",
};

export type InfoSection = {
  when?: string;
  heading: string;
  paragraphs?: string[];
  items?: string[];
  after?: string[];
};

export const HASTA_SECTIONS: InfoSection[] = [
  {
    when: "İlk görüşmede",
    heading: "Sağlık geçmişinizi paylaşın",
    paragraphs: [
      "Yüksek tansiyon, şeker hastalığı, mide rahatsızlıkları (gastrit, reflü, ülser), tiroid fonksiyon bozuklukları (geçirilmiş tiroid ameliyatı, hipo/hipertiroidi), kullanılan düzenli ilaçlar, alerji, geçirilmiş ameliyatlar, Hepatit B, C veya HIV taşıyıcılığı gibi bütün sağlık problemleri mutlaka paylaşılmalıdır.",
    ],
  },
  {
    when: "En az 2 hafta önce",
    heading: "Sigarayı bırakın",
    paragraphs: [
      "Sigara kullanımı dokuların kanlanmasını ve oksijenizasyonunu olumsuz etkilediği için komplikasyon oranını arttırır. Sigara içen kişi ameliyattan en az 2 hafta önce sigarayı bırakmalı ve ameliyattan sonra da 2-3 hafta boyunca içmemelidir.",
    ],
  },
  {
    when: "1 hafta önce",
    heading: "Bazı ilaç ve takviyeler kesilir",
    paragraphs: [
      "Bir hafta öncesinde kanı sulandıran aspirin ve benzeri ilaçlar, antienflamatuarlar, gingko biloba, ginseng gibi beslenme desteği olarak kullanılan maddeler, vitamin E ve yeşil çay kullanımı kesilmelidir.",
    ],
  },
  {
    when: "1 gün önce ya da aynı gün",
    heading: "Tetkikler ve anestezi değerlendirmesi",
    paragraphs: [
      "Herhangi bir sağlık problemi yoksa ameliyattan bir gün önce veya aynı gün rutin kan tetkikleri ve gerekirse radyolojik tetkikler yapılır. Anestezi uzmanlarının kontrolüyle ameliyata hazırlanılır.",
    ],
  },
  {
    when: "Ameliyat günü",
    heading: "Aç kalma süresi",
    paragraphs: [
      "Genel anestezi ve sedasyon anestezisi alacak olan kişiler ameliyat saatinden en az 6-8 saat öncesinde yemek ve içmeyi keserler. Düzenli olarak kullanılan ilaçlar hekimin bilgisi dâhilinde çok az bir su ile alınabilir.",
      "Lokal anestezi alacak olanlar ise işlemden 3-4 saat önce hafif bir kahvaltı edebilirler.",
    ],
  },
];

export const HASTA_NOTE =
  "Bu sayfadaki bilgiler genel hazırlık sürecini anlatır ve hekim muayenesinin yerine geçmez. Size özel talimatlar farklılık gösterebilir; her durumda hekiminizin verdiği talimatlar geçerlidir.";