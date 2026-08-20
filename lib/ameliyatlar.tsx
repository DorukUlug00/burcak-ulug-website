/* AMELİYAT SAYFALARI — İÇERİK VE ŞABLON
   ---------------------------------------------------------------
   Bu dosya iki bölümden oluşuyor:

     1. İÇERİK — kategoriler, ameliyatlar ve yardımcı işlevler.
                 Düzenlemen gereken yer burası.
     2. ŞABLON — sayfayı çizen ContentArticle bileşeni. İçerik
                 eklemek için buraya dokunmana gerek yok.

   İki seviyeli adres yapısı:

     /ameliyatlar                           -> tüm başlıklar
     /ameliyatlar/meme-estetigi             -> kategori (Genel Bilgi)
     /ameliyatlar/meme-estetigi/jinekomasti -> tek ameliyat

   Kategori sayfasının kendi metni de var; menüdeki "Genel Bilgi"
   bağlantısı oraya gider. Yeni ameliyat eklemek için PROCEDURES
   dizisine kayıt eklemen yeterli — dosya oluşturmana gerek yok.

   İçeriği girilmemiş sayfalar "hazırlanıyor" olarak görünür,
   sitede kırık bağlantı bırakmaz.

   Not: Bu dosya sunucu bileşeni olarak çalışır ("use client" yok),
   bu yüzden sayfaların `metadata` çıktısı etkilenmez.
--------------------------------------------------------------- */

import Image from "next/image";
import Link from "next/link";

import styles from "../app/ameliyatlar/ameliyatlar.module.css";

/* ===============================================================
   1. İÇERİK — kategoriler ve ameliyatlar
   =============================================================== */

export type Section = {
  heading: string;
  /* Her eleman bir paragraf. */
  body: string[];
};

export type Faq = { question: string; answer: string };

/* Kategori ve ameliyat sayfaları aynı içerik şablonunu paylaşır. */
export type Content = {
  title: string;
  /* Arama sonuçlarında görünen açıklama. Boşsa `lead` kullanılır. */
  metaDescription?: string;
  /* Başlığın altındaki giriş paragrafı. */
  lead?: string;
  sections?: Section[];
  faq?: Faq[];
  /* Başlığın arkasındaki tam genişlik görsel. public/ altındaki
     yol yazılır: "/operations/background1.png". */
  image?: string;
  /* Görsel yalnızca dekoratifse boş bırak — ekran okuyucular atlar.
     Görselde bilgi taşıyan bir şey varsa mutlaka yaz. */
  imageAlt?: string;
};

export type Category = Content & {
  /* URL'de görünen ad. Türkçe karakter ve boşluk kullanma. */
  slug: string;
  /* Liste sayfasındaki tek satırlık tanım. */
  blurb?: string;
};

export type Procedure = Content & {
  slug: string;
  /* CATEGORIES içindeki bir slug olmalı. */
  category: string;
};

/* ---------------------------------------------------------------
   ŞABLON — kopyala, doldur. Boş bıraktığın alanlar sayfada hiç
   görünmez, bu yüzden yalnızca elindeki bilgiyi yaz.

   {
     slug: "meme-kucultme",
     category: "meme-estetigi",
     title: "Meme Küçültme",
     lead: "Bir iki cümlelik giriş.",
     sections: [
       { heading: "Kimler için uygun", body: ["..."] },
       { heading: "Ameliyat nasıl yapılır", body: ["...", "..."] },
       { heading: "İyileşme süreci", body: ["..."] },
     ],
     faq: [{ question: "İz kalır mı?", answer: "..." }],
     image: "/ameliyatlar/meme-kucultme.jpg",
     imageAlt: "...",
   },
--------------------------------------------------------------- */

export const CATEGORIES: Category[] = [
  {
    slug: "yuz-estetigi",
    title: "Yüz Estetiği",
    image: "/operations/background1.png",
    blurb: "Yüz ve göz çevresine yönelik cerrahi işlemler.",
    lead: "Yüz ve boyun bölgesindeki yaşlanma değişiklikleri, tek bir ameliyatla değil; alın, kaş, göz kapakları ve yüz-boyun konturunun birlikte değerlendirilmesiyle ele alınır. Aşağıdaki başlıklar, bu bölgeye yönelik ameliyatları ayrı ayrı anlatıyor.",
  },
  {
    slug: "burun-estetigi",
    title: "Burun Estetiği",
    image: "/operations/background1.png",
    blurb: "Burun şekli ve solunum işlevine yönelik işlemler.",
    lead: "Burundaki kemik ve kıkırdak yapıların şekil bozukluklarını düzeltmeye yönelik cerrahidir. Burun şekli kişiye özgüdür; ameliyat planı yüz oranlarıyla birlikte yapılır.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Burun kemerinin düzeltilmesi, burun kemiklerinin yeniden şekillendirilmesi, burun kanatlarına ve burun ucuna yönelik kıkırdak ile dikiş teknikleri farklı kombinasyonlarda kullanılabilir.",
          "Deviasyon ve burun eti büyümesi gibi solunumu etkileyen sorunlar da değerlendirmeye dâhil edilebilir.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "İlk haftalarda şişlik belirgindir ve sabahları daha fazla olabilir. Yaklaşık altı haftada şişliğin önemli bir kısmının gerilemesi beklenir; burnun nihai şeklini alması ise daha uzun sürer.",
          "İyileşme boyunca darbelerden korunmak ve kontrolleri sürdürmek önemlidir.",
        ],
      },
    ],
  },
  {
    slug: "kulak-estetigi",
    title: "Kulak Estetiği",
    image: "/operations/background1.png",
    blurb: "Kulak şekli ve konumuna yönelik işlemler.",
    lead: "Kulak sayvanı veya kulak memesindeki yapısal, travmaya ya da önceki cerrahiye bağlı büyüklük ve şekil bozukluklarını düzeltmeye yönelik ameliyatların genel adıdır. Kepçe kulak deformitesi bu grupta sık ele alınan sorunlardandır.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Ameliyat tekniği deformitenin tipine göre değişir. Erişkinlerde lokal anestezi ve sedasyonla yapılabilir; çocuklarda anestezi planı yaşa ve duruma göre farklılaşır.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "Erişkin hastaların çoğu aynı gün, çocuk hastalar ise uygun görüldüğünde ertesi gün taburcu edilebilir.",
          "Ameliyat sonrasında kulakların yeni şeklini koruyan pansuman ve bandaj kullanımı ile darbelerden korunmak önemlidir.",
        ],
      },
    ],
  },
  {
    slug: "meme-estetigi",
    title: "Meme Estetiği",
    image: "/operations/background1.png",
    blurb: "Meme büyüklüğü, şekli ve onarımına yönelik ameliyatlar.",
    lead: "Meme hacmi, şekli ve simetrisine yönelik ameliyatlar ile meme kanseri tedavisi sonrası onarım cerrahisini kapsar. Uygun yöntem; mevcut doku, deri yapısı ve hedeflenen görünüme göre kişiye özel planlanır.",
  },
  {
    slug: "vucut-estetigi",
    title: "Vücut Estetiği",
    image: "/operations/background1.png",
    blurb: "Gövde ve ekstremitelere yönelik şekillendirme ameliyatları.",
    lead: "Bölgesel yağ fazlalığı ve kilo değişimi sonrası oluşan deri sarkmalarına yönelik ameliyatları kapsar. Birden fazla yöntem çoğu zaman birlikte planlanır.",
  },
  {
    slug: "ameliyatsiz-yontemler",
    title: "Ameliyatsız Yöntemler",
    image: "/operations/background1.png",
    blurb: "Cerrahi gerektirmeyen uygulamalar.",
  },
];

export const PROCEDURES: Procedure[] = [
  /* ---------------- Yüz estetiği ---------------- */
  {
    slug: "yuz-germe",
    category: "yuz-estetigi",
    title: "Yüz Germe",
    image: "/operations/background1.png",
    lead: "Yüz ve boyunda yaşlanmaya bağlı gevşeyen, sarkan deri ile derin dokuların yeniden konumlandırılması ve fazla derinin çıkarılmasıyla daha gergin bir yüz-boyun konturu oluşturmayı amaçlayan ameliyattır.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Kesiler şakak saçlı derisinden başlayıp kulak önü ve arkasından ensedeki saçlı deriye uzanır.",
          "Amaç yalnızca fazla deriyi almak değil, gevşemiş derin dokuları da uygun yönde yeniden şekillendirmektir.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "Ameliyat sonunda yüzü destekleyen bir pansuman uygulanır ve aralıklı soğuk uygulama önerilir. Drenler genellikle erken dönemde çıkarılır.",
          "İlk hafta başın yüksekte tutulması; ilk haftalarda yoğun güneş, solaryum, sauna, hamam ve ağır spordan uzak durulması önerilir. Şişlik, uyuşukluk ve geçici asimetriler iyileşme döneminde görülebilir.",
        ],
      },
    ],
  },
  {
    slug: "alin-germe",
    category: "yuz-estetigi",
    title: "Alın Germe",
    image: "/operations/background1.png",
    lead: "Alın bölgesindeki gevşeme ve kırışıklıkların, ayrıca kaşların konumunun düzeltilmesine yönelik yüz gençleştirme ameliyatıdır.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Saçlı deride açılan küçük kesilerden girilerek alın ve şakak dokuları serbestleştirilir, gerekli gerginlik sağlanır ve kaş-alın bölgesi yeni konumuna tespit edilir.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "Alın ve kaş üzerinde dokuları destekleyen bantlı bir pansuman uygulanır. İlk günlerde şişlik ve morluk görülebilir.",
          "İyileşme sürecinde başın yüksekte tutulması ve cerrahın önerdiği süre boyunca fiziksel zorlanmadan kaçınılması gerekir.",
        ],
      },
    ],
  },
  {
    slug: "goz-estetigi",
    category: "yuz-estetigi",
    title: "Göz Estetiği",
    image: "/operations/background1.png",
    lead: "Üst ve alt göz kapaklarında yaşlanmaya bağlı gevşeme, deri fazlalığı ve torbalanma gibi değişikliklerin düzeltilmesini amaçlayan cerrahi girişimdir.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Değerlendirme yalnızca göz kapağıyla sınırlı tutulmaz: üst kapak için alın ve kaşların, alt kapak için orta yüz bölgesinin de birlikte değerlendirilmesi gerekir.",
          "Cerrahi plan, fazla deri ve yağ dokusunun dağılımına göre kişiye özel yapılır.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "Kesi yerlerine, görmeyi engellemeyen ince bantlardan oluşan bir pansuman uygulanır. İlk günlerde göz çevresinde şişlik ve morluk oluşabilir; bunlar zaman içinde geriler.",
          "İyileşme döneminde göz çevresini travmadan ve yoğun güneşten korumak önemlidir.",
        ],
      },
    ],
  },

  /* Burun ve kulak estetiğinin alt sayfası yok; içerik doğrudan
     kategori sayfasında duruyor. */

  /* ---------------- Meme estetiği ---------------- */
  {
    slug: "meme-buyutme",
    category: "meme-estetigi",
    title: "Meme Büyütme",
    image: "/operations/background1.png",
    lead: "Gelişimsel nedenler, hamilelik veya kilo kaybı sonrasında ortaya çıkan meme hacmi yetersizliğini düzeltmeyi amaçlayan cerrahi girişimdir.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Meme protezinin boyutu ve şekli; kişinin göğüs kafesi, mevcut meme dokusu, deri yapısı ve hedeflenen görünüm dikkate alınarak planlanır.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "Meme bölgesinde gerginlik, şişlik ve hassasiyet görülebilir. Destekleyici sütyen kullanımı ve üst gövdeyi zorlayan hareketlerin bir süre sınırlandırılması iyileşme sürecinin parçasıdır.",
          "Protezin ve meme dokularının doğal konumuna oturması zaman alır.",
        ],
      },
    ],
  },
  {
    slug: "meme-kucultme",
    category: "meme-estetigi",
    title: "Meme Küçültme",
    image: "/operations/background1.png",
    lead: "Büyük ve sarkık memelerde fazla meme dokusu ile derinin çıkarılması, meme başının daha uygun bir konuma taşınması ve memenin yeniden biçimlendirilmesini amaçlayan ameliyattır.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Kullanılacak kesi ve iz planı; memenin büyüklüğüne, sarkma derecesine ve çıkarılacak doku miktarına göre değişir.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "Ameliyat sonrasında şişlik ve hassasiyet beklenebilir. Yara iyileşmesi ve izlerin olgunlaşması aylar içinde devam eder.",
          "Tüm cerrahilerde olduğu gibi kanama, enfeksiyon ve yara iyileşmesi sorunları gibi genel komplikasyonlar mümkündür.",
        ],
      },
    ],
  },
  {
    slug: "meme-diklestirme",
    category: "meme-estetigi",
    title: "Meme Dikleştirme",
    image: "/operations/background1.png",
    lead: "Hamilelik, emzirme, kilo değişimi, yaşlanma veya yapısal nedenlerle sarkan memenin yeniden şekillendirilerek daha yukarı ve dengeli bir konuma getirilmesini amaçlayan ameliyattır.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Fazla deri çıkarılır, meme dokusu yeniden şekillendirilir ve meme başı uygun seviyeye taşınır.",
          "Hacim eksikliği belirginse dikleştirme, meme proteziyle birlikte planlanabilir.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "Erken dönemde şişlik, gerginlik ve hassasiyet olabilir. Destekleyici sütyen ve aktivite kısıtlamaları iyileşmeye yardımcı olur.",
          "İzlerin nihai görünümü, kişinin yara iyileşme özelliklerine bağlı olarak zaman içinde oturur.",
        ],
      },
    ],
  },
  {
    slug: "meme-rekonstruksiyonu",
    category: "meme-estetigi",
    title: "Meme Rekonstrüksiyonu",
    image: "/operations/background1.png",
    lead: "Meme kanseri nedeniyle memenin bir kısmı veya tamamı alındıktan sonra memenin yeniden oluşturulmasına yönelik cerrahi yöntemlerin genel adıdır.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "İki ana yaklaşım vardır: protez ile doku genişletici kullanımı, ve kişinin kendi dokusunun kullanıldığı rekonstrüksiyonlar.",
          "Kendi dokusuyla onarımda karın bölgesinden TRAM flep veya sırt bölgesinden latissimus dorsi flebi seçenekleri değerlendirilir. Uygun yöntem; vücut yapısı, mevcut doku, kanser tedavi planı ve hasta tercihlerine göre belirlenir.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "Kendi dokusunun kullanıldığı ameliyatlarda hastanede kalış ve aktif yaşama dönüş süresi, yalnızca protez veya doku genişletici kullanılan yöntemlere göre daha uzun olabilir.",
          "Meme şekli ve hacmi oturduktan sonra, gerekiyorsa meme başı rekonstrüksiyonu daha sonraki bir aşamada planlanabilir.",
        ],
      },
    ],
  },
  {
    slug: "jinekomasti",
    category: "meme-estetigi",
    title: "Jinekomasti",
    image: "/operations/background1.png",
    lead: "Erkekte meme dokusunun belirginleşmesi veya büyümesi durumunun cerrahi olarak düzeltilmesine yönelik işlemdir.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Tedavi planı; meme büyümesinin yağ dokusu, bez dokusu ve deri fazlalığı içeriğine göre değişir.",
          "Uygun hastalarda liposuction kullanılabilir. Belirgin bez dokusu veya ileri sarkma varlığında fazla meme dokusunun çıkarılması ve gerekirse deri ile meme başının yeniden şekillendirilmesi gerekebilir.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "İyileşme döneminde şişlik ve morluk görülebilir; göğüs bölgesini destekleyen giysiler kullanılabilir.",
          "İz miktarı, uygulanan tekniğin kapsamına göre değişir.",
        ],
      },
    ],
  },

  /* ---------------- Vücut estetiği ---------------- */
  {
    slug: "liposuction",
    category: "vucut-estetigi",
    title: "Liposuction",
    image: "/operations/background1.png",
    lead: "Vücutta kontur bozukluğuna yol açan bölgesel yağ fazlalıklarının azaltılmasını amaçlayan vücut şekillendirme ameliyatıdır. İdeal kilosuna yakın ve cilt elastikiyeti iyi olan kişiler daha uygun adaylardır.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Karın, bel yanları, basen, bacak, kol, çene altı ve diz çevresi gibi farklı bölgelere uygulanabilir.",
          "İşlem, uygulanacak alanın genişliğine göre uygun anestezi altında yapılır ve ince kanüllerle yağ dokusunun uzaklaştırılmasına dayanır.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "Ameliyat sonrasında korse kullanılır. Morluk, uyuşukluk, dokunmakla ağrı ve hassasiyet ilk haftalarda görülebilir ve giderek azalır.",
          "Son konturun ortaya çıkması, ödemin gerilemesiyle kademeli olur.",
        ],
      },
    ],
  },
  {
    slug: "karin-germe",
    category: "vucut-estetigi",
    title: "Karın Germe",
    image: "/operations/background1.png",
    lead: "Karın bölgesindeki cilt ve cilt altı dokularda oluşan sarkmayı gidermek, gevşemiş karın duvarını toparlamak ve daha düz, gergin bir karın oluşturmak amacıyla yapılan ameliyattır. Özellikle doğumlar veya belirgin kilo değişimleri sonrasında tercih edilir.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Alt karındaki fazla deri ve yağ dokusu çıkarılır; gebelik sonrası gevşeyen karın zarı gerekiyorsa sıkılaştırılır, yeni bir göbek deliği oluşturulur ve ihtiyaç hâlinde liposuction eklenir.",
          "Kesi, bikini hattında kalacak şekilde planlanır. Dren ve korse kullanılır.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "Drenler, gelen sıvı miktarına göre birkaç gün içinde çıkarılır. İlk hafta dikiş hattındaki gerginliği azaltmak için sırtın yüksekte ve bacakların hafif bükülü tutulması, yürürken hafif öne eğilme önerilebilir.",
          "Emboli riskini azaltmak amacıyla erken hareket, anti-embolik önlemler ve hastane takibi önemlidir.",
        ],
      },
    ],
  },
  {
    slug: "bacak-ici-germe",
    category: "vucut-estetigi",
    title: "Bacak İçi Germe",
    image: "/operations/background1.png",
    lead: "Kilo alıp verme, yer çekimi veya yapısal nedenlerle bacakların iç yüzünde oluşan cilt ve cilt altı doku sarkmasını azaltarak daha gergin bir kontur oluşturmayı amaçlayan ameliyattır.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Cilt gevşekliğiyle birlikte yağ fazlalığı varsa önce liposuction yapılabilir; ardından sarkan fazla deri ve cilt altı doku çıkarılır.",
          "İzler, mümkün olduğunca kasık bölgesinde iç çamaşırı içinde kalacak şekilde planlanır. İleri sarkmalarda kesi bacağın iç yüzünde daha aşağı uzayabilir. Dren kullanılabilir.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "Drenler genellikle birkaç gün içinde çıkarılır. İlk haftalarda bacaklarda şişlik ve morluk olabilir; bacakları yüksekte tutmak ve istirahat iyileşmeye yardımcı olur.",
          "Kasık hattındaki nem nedeniyle yara iyileşmesi daha yavaş olabilir. Aktif yaşama yaklaşık on gün sonra dönülür; ağır spor, sauna ve hamam için daha uzun süre beklemek gerekir.",
        ],
      },
    ],
  },
  {
    slug: "kol-germe",
    category: "vucut-estetigi",
    title: "Kol Germe",
    image: "/operations/background1.png",
    lead: "Kilo değişimi, yer çekimi veya yapısal nedenlerle kolun iç kısmında oluşan deri ve cilt altı doku sarkmasını gidermeye yönelik ameliyattır.",
    sections: [
      {
        heading: "Nasıl uygulanır",
        body: [
          "Yağ fazlalığı varsa önce liposuction ile cilt altı yağ dokusu azaltılabilir. Ardından fazla deri, kol boyunca planlanan kesiyle çıkarılır ve kol daha gergin hâle getirilir.",
          "İz, kolun iç-arka bölümünde mümkün olduğunca karşıdan görünmeyecek şekilde konumlandırılır. Dren kullanılabilir.",
        ],
      },
      {
        heading: "Ameliyat sonrası ve iyileşme",
        body: [
          "Drenler çoğunlukla birkaç gün içinde çıkarılır. İlk dönemde morluk, şişlik ve gerginlik görülebilir.",
          "Dikiş hattını korumak ve dokuların uyumunu desteklemek için korse veya elastik destek kullanılabilir; ağır kol egzersizlerine dönüş kademeli olmalıdır.",
        ],
      },
    ],
  },

  /* ---------------- Ameliyatsız yöntemler ----------------
     DOLDURULACAK: Belgede botoks ve dolgu bölümleri yok. */
  { slug: "botoks", category: "ameliyatsiz-yontemler", title: "Botoks" },
  { slug: "dolgu", category: "ameliyatsiz-yontemler", title: "Dolgu" },
];

/* ---------------- Yardımcılar ---------------- */

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((item) => item.slug === slug);
}

export function proceduresOf(categorySlug: string): Procedure[] {
  return PROCEDURES.filter((item) => item.category === categorySlug);
}

/* Kategori de doğrulanır: /kulak-estetigi/liposuction 404 verir. */
export function getProcedure(
  categorySlug: string,
  slug: string,
): Procedure | undefined {
  return PROCEDURES.find(
    (item) => item.slug === slug && item.category === categorySlug,
  );
}

export function groupedProcedures(): {
  category: Category;
  items: Procedure[];
}[] {
  return CATEGORIES.map((category) => ({
    category,
    items: proceduresOf(category.slug),
  }));
}

/* Sayfada gösterilecek bir içerik var mı? */
export function hasContent(content: Content): boolean {
  return Boolean(
    content.lead || content.sections?.length || content.faq?.length,
  );
}

/* ===============================================================
   2. ŞABLON — kategori ve ameliyat sayfalarını çizen bileşen
   =============================================================== */

/* Kategori sayfası da ameliyat sayfası da aynı şablonu kullanıyor.
   Tek fark, aşağıda gösterilen bağlantı listesi: kategori sayfasında
   alt ameliyatlar, ameliyat sayfasında aynı kategorideki diğerleri. */

export type Crumb = { label: string; href?: string };
export type RelatedLink = { label: string; href: string };

type Props = {
  content: Content;
  crumbs: Crumb[];
  related?: { title: string; items: RelatedLink[] };
};

export function ContentArticle({ content, crumbs, related }: Props) {
  /* Görseli olan sayfalarda başlık, fotoğrafın üzerine biner;
     olmayanlarda sade başlık kullanılır. */
  const hasHero = Boolean(content.image);

  const crumbTrail = crumbs.map((crumb, index) => (
    <span key={crumb.label} className={styles.crumb}>
      {index > 0 ? (
        <span className={styles.crumbSep} aria-hidden="true">
          /
        </span>
      ) : null}

      {crumb.href ? (
        <Link href={crumb.href} className={styles.crumbLink}>
          {crumb.label}
        </Link>
      ) : (
        /* Bulunulan sayfa — bağlantı değil, beyaz. */
        <span className={styles.crumbCurrent} aria-current="page">
          {crumb.label}
        </span>
      )}
    </span>
  ));

  return (
    <article className={styles.detail}>
      {hasHero ? (
        <header className={styles.hero}>
          <Image
            className={styles.heroImage}
            src={content.image as string}
            alt={content.imageAlt ?? ""}
            fill
            sizes="100vw"
            priority
          />

          {/* Yazının okunması için alttan yukarı koyulaşan perde. */}
          <span className={styles.heroScrim} aria-hidden="true" />

          <nav
            className={`${styles.crumbs} ${styles.crumbsHero}`}
            aria-label="Konum"
          >
            {crumbTrail}
          </nav>

          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{content.title}</h1>

            {content.lead ? (
              <p className={styles.heroLead}>{content.lead}</p>
            ) : null}
          </div>
        </header>
      ) : (
        <header className={styles.plainHead}>
          <nav className={styles.crumbs} aria-label="Konum">
            {crumbTrail}
          </nav>

          <h1 className={styles.detailTitle}>{content.title}</h1>

          {content.lead ? <p className={styles.lead}>{content.lead}</p> : null}
        </header>
      )}

      <div className={styles.body}>
        {content.sections?.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>

            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        {content.faq?.length ? (
          <section className={styles.section}>
            <h2 className={styles.heading}>Sık sorulan sorular</h2>

            <dl className={styles.faq}>
              {content.faq.map((entry) => (
                <div key={entry.question} className={styles.faqItem}>
                  <dt className={styles.question}>{entry.question}</dt>
                  <dd className={styles.answer}>{entry.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {/* İçerik henüz girilmemişse sayfa boş kalmasın. */}
        {!hasContent(content) ? (
          <p className={styles.pending}>
            Bu sayfanın içeriği hazırlanıyor. Bilgi almak için{" "}
            <Link href="/iletisim" className={styles.inlineLink}>
              klinikle iletişime geçebilirsiniz
            </Link>
            .
          </p>
        ) : null}

        <footer className={styles.detailFoot}>
          {/* Her sayfaya otomatik ekleniyor; unutulma ihtimali kalmıyor. */}
          <p className={styles.note}>
            Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır; hekim
            muayenesi, tanı veya tedavinin yerine geçmez. Uygulanacak yöntem ve
            sonuçlar kişiden kişiye değişir.
          </p>

          {related && related.items.length > 0 ? (
            <div className={styles.siblings}>
              <p className={styles.siblingsTitle}>{related.title}</p>

              <ul className={styles.siblingList}>
                {related.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.siblingLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </footer>
      </div>
    </article>
  );
}