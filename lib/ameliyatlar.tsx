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
    sections: [
      {
        heading: "Yüz estetiği nedir?",
        body: [
          "Yüz estetiği yüzde estetik amaçla gerçekleştirilen işlemlerin genel tanımlamasıdır. Yaşlanma her birey için kaçınılmazdır. Etkilerini hafifleterek kişinin kendini dinç, genç ve sağlıklı hissetmesini sağlamak estetik cerrahinin amaçlarından biridir. Yüz yaşlanmaya bağlı değişikliklerin saklanamayacağı bir bölgedir. Aynaya baktığında kişinin karşılaştığı yorgun, gergin ve mutsuz bir yüz ifadesi kendini hem kötü hissettirir hem de sosyal ilişkilerinde problemler yaşamasına yol açar.",
          "Yaşla beraber tüm vücut cildinde bir elastikiyet kaybı ve sarkma oluşur; yüz cildinde ise bu problem yer çekiminin etkisi ile daha da öne çıkar. Yüz insanlararası iletişimde ilk bakışta dikkatin odağı olan yapıdır. Bu nedenle deformiteleri bir hastalık olmasa da estetik kaygıya yol açar. Yüz estetiği için hekimlerin tanımladığı ölçüler vardır, ancak kararlarda asıl olan, kişinin hekim süzgecinden geçmiş kendi beklentileridir.",
        ],
      },
      {
        heading: "Yüz hangi bölgelerde değerlendirilir?",
        body: [
          "Yüzü üç bölümde incelemek gerekir; alın, kaşlar, üst göz kapaklarını içeren üst yüz bölgesi, alt göz kapakları, yanak bölgesini içeren orta yüz bölgesi, çene ve boyun bölgesini içeren alt yüz bölgesi. Bütün bu alanlara tek tek cerrahi olarak müdahale etmek mümkündür. Ancak gerekli durumlarda kombine girişimler ( yüz germe ve göz kapağı estetiği, alın germe ve göz kapağı estetiği) yüzdeki estetik deformiteler için daha etkili sonuç verir.",
        ],
      },
    ],
  },
  {
    slug: "burun-estetigi",
    title: "Burun Estetiği",
    image: "/operations/background1.png",
    blurb: "Burun şekli ve solunum işlevine yönelik işlemler.",
    sections: [
      {
        heading: "Burun estetiği nedir?",
        body: [
          "Burun estetiği yapısal nedenle, geçirilmiş travma veya ameliyat neticesinde burunda oluşan şekil bozukluğunu düzeltmek için gerçekleştirilen işlemlerin genel tanımlamasıdır. Burun insan yüzünün tam ortasında yer alan, yüze ilk bakışta, farkında olmaksızın dikkatin odağı olan yapıdır. Bu nedenle deformiteleri bir hastalık olmasa da estetik kaygıya yol açar. Burun estetiği için hekimlerin tanımladığı ideale yakın ölçüler vardır, ancak kararlarda asıl olan, kişinin hekim süzgecinden geçmiş kendi beklentileridir.",
        ],
      },
      {
        heading: "Nazal deformite nedir?",
        body: [
          "Nazal deformite, burnun dış şekil bozukluklarını tanımlamak için hekimlerin kullandığı kavramdır. Burnun şekil bozukluğu, kemik ve kıkırdak yapılarının farklı bölümlerinden kaynaklanır. Burun sırtında kemer varlığı, burnun uzun olması, burun ucunun düşük veya alçak olması, burun kanatlarının geniş olması en sık karşılaşılan estetik problemlerdir.",
        ],
      },
      {
        heading: "Deviasyon nedir?",
        body: [
          "Nazal deformiteli hastaların önemli bir bölümünde burundan nefes almada da sıkıntı vardır. Normal sağlıklı nefes alış burun üzerinden olur. Burun, deviasyon denilen iç eğrilik ve konka hipertrofisi denilen burun etleri büyümesi nedeniyle hakkıyla görev yapamadığı takdirde, kalıcı burun tıkanıklığı oluşur, nefes alış ağız yoluyla olur.",
          "Deviasyon, burnun içinde önden genize kadar uzanan, burun içini iki bölüme ayıran ve septum olarak adlandırılan dokunun eğriliğidir. Septum dokusu, kıkırdak ve kemik parçalardan oluşmakta, üzerini mukoza adı verilen iç cilt kaplamaktadır. Deviasyon, yapısal olarak veya travma sonucu oluşmuş olabilir. Her hastada eğriliğin olduğu kısımlar ile bunların sayısı ve ciddiyeti farklılık gösterir.",
          "Et büyümesi, konka denilen burun etlerinin büyümesidir; konka hipertrofisi olarak adlandırılır. Bu yapıların en büyükleri alt konkalardır, hacimleri artıp azalarak burundan geçen hava miktarını ayarlar ve havayı ısıtırlar, deviasyon varlığında burun tıkanıklığını artırırlar.",
        ],
      },
      {
        heading: "Rinoplasti nedir?",
        body: [
          "Rinoplasti ameliyatı burunda şekil bozukluğuna yol açan kıkırdak ve kemik yapıdaki deformitelerin düzeltilmesine yönelik cerrahi işlemdir. Her insanın burun şekli birbirinden farklıdır; aynı şekilde ameliyatla erişilmesi planlanan son durum farklıdır. Bu nedenle burun estetiğine yönelik tek bir teknik yoktur.",
          "Burun deformitesi değerlendirilmesinde cild, kemik ve kıkırdak yapı tek tek ele alınır. Ameliyat planı yapılırken, hastanın burnuna yönelik beklentilerinin yanısıra, yüzünün şekli ve oranları mutlaka göz önüne alınır. Aksi taktirde kişinin yüz şekline uyumlu olmayan bir burun elde edilir.",
          "Rinoplasti ameliyatlarında, hump rezeksiyonu, yani burun kemeri alınması, osteotomi, yani burun kemiği kırılması, alar sefalik rezeksiyon, yani burun kanatları küçültülmesi, dikiş teknikleri uygulanması ve kıkırdak destek konulması, yani burun ucu daraltılması ve yükseltilmesi gibi farklı teknikler çeşitli kombinasyonlarda uygulanır.",
        ],
      },
      {
        heading: "Deviasyon ameliyatı nedir?",
        body: [
          "Nazal deformitesi olan vakalarda, burun içi eğriliği de varsa, burun estetiği girişimine, yani rinoplasti ameliyatına, deviasyon düzeltme girişimi, yani septoplasti ameliyatı ilave edilir. Bu kombine ameliyatı tanımlamak için hekimler septorinoplasti sözcüğünü kullanırlar.",
          "Konka hipertrofisinin eşlik ettiği, burun tıkanıklığına katkıda bulunduğu vakalarda alt konkalara da müdahale edilir. Alt konkaları küçültmek için konkaplasti, radyofrekans, koterizasyon gibi teknikler uygulanır. Konkaplasti ameliyatı, konkalardaki aşırı dokuların, özellikle iç tarafa bakan yüzlerinin korunması kaydıyla, klasik cerrahi tekniklerle alınmasıdır. Radyofrekans tekniği, genel bir cerrahi yöntemidir, radyo dalgalarının iğne şeklinde bir çubukla dokuya iletilmesidir; bu enerjinin yarattığı değişiklikle dokular iyileşme sürecinde büzülür, küçülür ve gerginleşirler.",
        ],
      },
      {
        heading: "Ameliyat sonrası nasıldır?",
        body: [
          "Rinoplasti veya septorinoplasti ameliyatının sonunda burun sırtına ince bandlar ve atel yerleştirilir. Ameliyatın bitiminde gözlerin etrafına soğuk uygulanmasına başlanır. Klasik yöntemlerle, saatte 10-15 dakika şeklinde aralıklı soğuk uygulanması gözlerin etrafında morluk ve şişlik oluşumunu azaltır. Hasta ertesi gün taburcu edilir. Birinci haftanın sonunda burun ateli alınır. Gerekli görülürse ince bandlar bir hafta daha tutulur.",
          "Rinoplasti ile beraber yapılan deviasyon ve konka ameliyatlarının ameliyat sonrası süreçleri fazla zahmetli değildir. Septum bölmesine karşılıklı devamlı dikiş tekniği uygulandığında burun içine hiçbir şey konulmaması mümkündür. Ancak ihtiyaç halinde, bir gün kalmak üzere, düz tipte veya içinde nefes almaya yarayan küçük birer boru bulunan tipte burun tamponları yerleştirilir.",
          "Rinoplasti ameliyatlarında göz etrafına soğuk uygulanmasına, taburcu olunduktan sonra da, giderek azalan şekilde 1-2 gün daha devam edilmesi faydalıdır. Ameliyatın üçüncü gününden sonra göz çevresindeki hafif morluk ve şişlikler azalmaya başlar. İlk haftalarda sabahları burun daha şiş olabilir, şişlik gün içinde azalır. 6 hafta sonra burun şişliğinin önemli bir kısmı düzelir. Ancak burnun son şeklini alması 1 yıl sürer.",
          "Ameliyattan sonra erken dönemde buruna gelecek travmalar burun şeklinde kalıcı bozukluklara yol açabilir. Bu nedenle vücud teması gereken sporlar ilk 8 hafta içinde sakıncalıdır. Üçüncü haftadan itibaren tempolu yürüyüş, yüzme gibi egzersizler yapılabilir. Burun sırtındaki kemere müdahale edilmişse gözlük kullanımı ilk 8 hafta uygun değildir. Yine yoğun güneş ışığı, solaryumdan, sauna ve hamamdan 8 hafta uzak durmak gerekir. Özellikle morluk olduğu dönemde güneşe maruz kalmamak için şapka ve yüksek faktörlü güneş koruyucu bir krem kullanmak, kalıcı göz çevresi renk değişikliklerinin önlenmesi açısından önemlidir.",
          "Ameliyat sonrası erken süreç geçtikten sonra, 3,6 ve 12. aylarda kontroller yapılır. Vakaların büyük bölümü bu şekilde son burun şekillerine kavuşurken, bazı vakalarda ideal sonuca ulaşmak için ikinci sınırlı bir müdahale gerekebilir.",
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
    lead: "Yüz germe, kişinin yüzündeki ve boyundaki sarkmış, bollaşmış derinin ve gevşemiş olan derin dokuları saran yapının uygun yönde ve tansiyonda gerginlik sağlayarak yeni yerine tespiti ve fazla derinin çıkarılmasını içeren estetik ameliyattır.",
    sections: [
      {
        heading: "Yüz germe (ritidektomi) nedir?",
        body: [
          "Derinin yaşlanmasıyla birlikte kişinin genetik yapısına bağlı olarak kiminde kırışıklar ön plandayken bazı kişilerde kırışıklarla birlikte deride gevşeme ve sarkma daha dikkat çekicidir. Bu kişilerde hem yüz hem de boyundaki deri fazlalığının giderilmesine imkân veren klasik yüz germe ameliyatı tercih edilir.",
        ],
      },
      {
        heading: "Yüz germe ameliyatı nasıl yapılır?",
        body: [
          "Yüz germe ameliyatı hastanede ameliyathane şartlarında tercihen genel anestezi altında gerçekleştirilir. İzler şakak bölgesindeki saçlı deriden başlar, kulak önü ve arkasında devam ederek ensede saçlı deriye uzanır.",
          "Bu izlerden sadece kulak önündeki olanı gözükür. Kişinin genetik yapısına bağlı olarak izlerin olgunlaşması bir yıl sürer. Ancak bu süre içinde özellikle kadınlarda bu alanı kamufle edecek saç şekliyle hiçbir sorun oluşturmaz. Kulak önündeki izler kulak kıvrımının içinde saklıdır, bu nedenle erkekler için de çok rahatsız edici bir durum yaratmaz. Diğer izler ise gizlenmiş olarak kalır.",
          "Bu ameliyatta amaç sadece fazla derinin atılması değildir. Gevşemiş, sarkmış derin dokuların da uygun yönde ve gerginlikte biçimlendirilmesini içerir.",
        ],
      },
      {
        heading: "Yüz germe ameliyatı sonrası nasıldır?",
        body: [
          "Yüz germe ameliyatı sonunda gözler, burun ve ağzı açık bırakacak şekilde yüzün tamamını kaplayan yumuşak bir pansuman yapılır. Yüz bölgesine soğuk uygulama saatte 10-15 dakika şeklinde aralıklı olarak yapılır. Hasta ertesi gün antibiyotik ve ağrı kesici reçete edilerek taburcu edilir.",
          "Bir hafta boyunca sırtın yükseltilerek yatılması ve aralıklı soğuk uygulamaya devam edilmesi istenir. Sıklıkla 2. gün drenler çekilir. Pansuman çıkarılarak banyo yapılmasına izin verilir. Yüz bölgesindeki dikişler kendi kendine eridiği için dikiş alımı gerekmez. Saçlı deridekiler 1. haftada alınır.",
          "Bu ameliyatla ilgili en sık karşılaşılan komplikasyon özellikle erkeklerde ameliyat alanında kan toplanmasıdır. Bu nedenle mutlaka dren kullanılır ve kişinin tansiyonu ameliyat öncesi ve sonrasında takip edilir. Yüzde ameliyata bağlı geçici uyuşukluk ve asimetriler olabilir. İlk 8 hafta yoğun güneş, solaryum, sauna ve hamamdan uzak durmak ve ağır spor aktivitelerinden kaçınmak gerekir. Erkeklerde tıraşa 2. haftanın sonunda izin verilir.",
          "Her cerrahi girişim sonrası istenmeyen durumlarla karşılaşılabilir. Anestezi riski, ameliyat bölgesinde kan toplanması, enfeksiyon ve yara iyileşmesinde gecikme bütün cerrahi girişimler sonrası görülebilen ortak olası komplikasyonlardır. Sigara kullanımı dokuların kanlanmasını ve oksijenizasyonunu olumsuz etkilediği için komplikasyon oranını arttırır. Özellikle yüz germe ameliyatı, sigara kullanımı fazla olan ve ameliyattan önce sigarayı bırakmaya istekli olmayan kişilerde tercih edilmez.",
        ],
      },
    ],
  },
  {
    slug: "alin-germe",
    category: "yuz-estetigi",
    title: "Alın Germe",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "Alın germe (brow-lift) nedir?",
        body: [
          "Alın bölgesinde gevşeme, sarkma ve kaşların bütünüyle aşağıya doğru yer değiştirmesine bağlı oluşan deformitenin düzeltilmesine yönelik estetik ameliyattır. Temelde üst yüz germe ameliyatıdır. Yaşlanma belirtileri öncelikle üst yüz bölgesinde ve göz etrafında başlar. Kaşlarda düşüklük ve aşağıya doğru yer değiştirmesi üst göz kapağında yığılmaya da yol açar. Deri fazlalığını gidermeye yönelik göz kapağı estetiği (blefaroplasti) kaş düşüklüğü ön planda olan kişilerde tek başına yeterli olmaz.",
        ],
      },
      {
        heading: "Alın germe ameliyatı nasıl yapılır?",
        body: [
          "Alın germe ameliyatı hastanede ameliyathane şartlarında tercihen genel anestezi altında gerçekleştirilir. Alın germe ameliyatında alın ve şakak bölgesindeki saçlı deride yapılan 2 cmlik kesilerden endoskopik cerrahi için özel tasarlanmış cerrahi aletlerle girilerek alın bölgesi ve kaşlar serbestleştirilir ve farklı tekniklerle saçlı derideki kesi yerlerinden yeni yerine tespit edilir. Böylece saçlı deride kolayca gizlenebilen izlerle hem alın bölgesi gerilir hem de kaşlardaki sarkıklık düzelir.",
        ],
      },
      {
        heading: "Alın germe ameliyatı sonrası nasıldır?",
        body: [
          "Alın germe ameliyatı sonrasında alın bölgesinde ve kaş üstünde cildi gergin tutan bantlardan oluşan pansuman yapılır. Dren ertesi gün çekilir. Kombine bir cerrahi işlem yapılmamışsa aynı gün taburcu edilir. Ameliyat bölgesinde uyuşukluk, asimetri geçicidir. İlk 8 hafta yoğun güneş, solarium, sauna ve hamamdan uzak durmak ve ağır spor aktivitelerinden kaçınmak gerekir.",
          "Her cerrahi girişim sonrası istenmeyen durumlarla karşılaşılabilinir. Anestezi riski, ameliyat bölgesinde kan toplanması, enfeksiyon ve yara iyileşmesinde gecikme bütün cerrahi girişimler sonrası görülebilen ortak olası komplikasyonlardır. Sigara kullanımı dokuların kanlanmasını ve oksijenizasyonunu olumsuz etkilediği için komplikasyon oranını arttırır.",
        ],
      },
    ],
  },
  {
    slug: "goz-kapagi-estetigi",
    category: "yuz-estetigi",
    title: "Göz Kapağı Estetiği",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "Göz kapağı estetiği (blefaroplasti) nedir?",
        body: [
          "Göz kapağı estetiği (blefaroplasti), üst ve/veya alt göz kapaklarında zamanla oluşan deri fazlalığı, gevşeme ve yağ dokusu belirginliğinin düzeltilmesini amaçlayan cerrahi bir işlemdir. Amaç, göz çevresinde daha dinlenmiş, canlı ve doğal bir görünüm elde ederken kişinin yüz ifadesini ve kendine özgü özelliklerini korumaktır.",
        ],
      },
      {
        heading: "Göz kapağı estetiği nasıl yapılır?",
        body: [
          "Üst göz kapağı ameliyatında fazla deri ve gerektiğinde yağ dokusu düzenlenir. Alt göz kapağında ise göz altı torbalanmaları, deri fazlalığı ve kontur düzensizlikleri kişinin anatomik özelliklerine göre değerlendirilir. Kesiler mümkün olduğunca doğal göz kapağı kıvrımları ve anatomik sınırlar içinde planlanır.",
        ],
      },
      {
        heading: "Ameliyat nasıl planlanır?",
        body: [
          "Ameliyat planlaması; göz kapağının yapısı, kaş pozisyonu, göz çevresindeki yağ dokuları, cilt kalitesi ve kişinin beklentileri birlikte değerlendirilerek kişiye özel olarak yapılır.",
          "Göz kapağı estetiğinde temel amaç yalnızca fazla dokuyu çıkarmak değil; göz çevresinde doğal, dengeli ve yüzün bütünüyle uyumlu bir görünüm oluşturmaktır.",
        ],
      },
    ],
  },
  {
    slug: "yag-enjeksiyonu",
    category: "yuz-estetigi",
    title: "Yağ Enjeksiyonu",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "Yağ enjeksiyonu nedir?",
        body: [
          "Yağ enjeksiyonu, kişinin kendi vücudundan alınan yağ dokusunun özel işlemlerden geçirilerek yüz veya vücudun ihtiyaç duyulan bölgelerine aktarılması işlemidir. Amaç, hacim kayıplarını gidermek, konturları şekillendirmek ve kişinin anatomisiyle uyumlu, doğal bir görünüm elde etmektir.",
        ],
      },
      {
        heading: "Hangi bölgelere uygulanır?",
        body: [
          "Yüz, meme ve çeşitli vücut bölgelerine uygulanabilen bu yöntemde, transfer edilen yağın bir bölümü kalıcı olurken bir kısmı zaman içinde vücut tarafından emilebilir.",
        ],
      },
      {
        heading: "Sonuçlar nasıldır?",
        body: [
          "Sonuçlar kişiden kişiye değişebileceğinden işlem, kişinin anatomik özellikleri ve beklentileri doğrultusunda kişiye özel olarak planlanmalıdır.",
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