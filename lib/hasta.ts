/* HASTA BİLGİLENDİRME İÇERİĞİ
   Sayfa yalnızca bu dosyayı okur. Yeni bölüm eklemek için diziye
   yeni bir kayıt eklemen yeterli.

   `when` alanı bölümün başındaki zaman etiketidir; boş bırakılırsa
   etiket gösterilmez. Bölümler zaman sırasına göre dizildi. */

export const HASTA_META = {
  eyebrow: "Hasta bilgilendirme",
  title: "Ameliyat öncesi",
  titleAccent: "yapılması gerekenler",
  intro:
    "Ameliyata iyi hazırlanmak, iyileşme sürecinin en az ameliyatın kendisi kadar belirleyici bir parçasıdır. Aşağıdaki başlıklar, hazırlık döneminde en sık sorulan konuları toparlıyor.",

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
      "Bütün sağlık problemleriniz mutlaka paylaşılmalıdır. Küçük görünen bir ayrıntı bile anestezi ve ameliyat planını değiştirebilir:",
    ],
    items: [
      "Yüksek tansiyon ve şeker hastalığı",
      "Mide rahatsızlıkları — gastrit, reflü, ülser",
      "Tiroid fonksiyon bozuklukları; geçirilmiş tiroid ameliyatı, hipotiroidi veya hipertiroidi",
      "Düzenli olarak kullandığınız ilaçlar",
      "Alerjileriniz",
      "Geçirdiğiniz ameliyatlar",
      "Hepatit B, Hepatit C veya HIV taşıyıcılığı",
    ],
  },
  {
    when: "En az 2 hafta önce",
    heading: "Sigarayı bırakın",
    paragraphs: [
      "Sigara kullanımı dokuların kanlanmasını ve oksijenlenmesini olumsuz etkilediği için komplikasyon oranını artırır. Sigara içen kişi ameliyattan en az iki hafta önce sigarayı bırakmalı, ameliyattan sonra da iki-üç hafta boyunca içmemelidir.",
    ],
  },
  {
    when: "1 hafta önce",
    heading: "Bazı ilaç ve takviyeler kesilir",
    paragraphs: [
      "Ameliyattan bir hafta önce, kanı sulandıran ilaçların ve benzer etki gösteren takviyelerin kullanımı kesilmelidir:",
    ],
    items: [
      "Aspirin ve benzeri kan sulandırıcı ilaçlar",
      "Antiinflamatuar ilaçlar",
      "Gingko biloba ve ginseng gibi beslenme desteği olarak kullanılan maddeler",
      "E vitamini",
      "Yeşil çay",
    ],
  },
  {
    when: "1 gün önce ya da aynı gün",
    heading: "Tetkikler ve anestezi değerlendirmesi",
    paragraphs: [
      "Herhangi bir sağlık probleminiz yoksa ameliyattan bir gün önce veya aynı gün rutin kan tetkikleri, gerekirse radyolojik tetkikler yapılır. Ardından anestezi uzmanlarının kontrolüyle ameliyata hazırlanılır.",
    ],
  },
  {
    when: "Ameliyat günü",
    heading: "Aç kalma süresi",
    paragraphs: [
      "Genel anestezi ve sedasyon anestezisi alacak kişiler, ameliyat saatinden en az 6-8 saat öncesinde yemeyi ve içmeyi keser. Düzenli olarak kullanılan ilaçlar, hekimin bilgisi dâhilinde çok az bir su ile alınabilir.",
      "Lokal anestezi alacak kişiler ise işlemden 3-4 saat önce hafif bir kahvaltı edebilir.",
    ],
  },
];

export const HASTA_NOTE =
  "Bu sayfadaki bilgiler genel hazırlık sürecini anlatır ve hekim muayenesinin yerine geçmez. Size özel talimatlar farklılık gösterebilir; her durumda hekiminizin verdiği talimatlar geçerlidir.";