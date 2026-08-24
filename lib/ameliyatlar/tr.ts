/* TÜRKÇE İÇERİK — ameliyat ve kategori metinleri
   ---------------------------------------------------------------
   Sayfa düzeni ve yardımcılar index.tsx'te; burada yalnızca metin var.

   Slug'lar iki dilde de AYNIDIR: en.ts içindeki karşılıkların
   slug ve category alanları buradakilerle birebir eşleşmeli.

   Yeni ameliyat eklemek için procedures dizisine kayıt eklemen
   yeterli — dosya oluşturmana gerek yok. İçeriği girilmemiş
   sayfalar "hazırlanıyor" olarak görünür, kırık bağlantı bırakmaz.

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
     ],
     faq: [{ question: "İz kalır mı?", answer: "..." }],
     image: "/ameliyatlar/meme-kucultme.jpg",
     imageAlt: "...",
   },
--------------------------------------------------------------- */

import type { Category, ContentBundle, Procedure } from "./types";

const categories: Category[] = [
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
    sections: [
      {
        heading: "Kulak estetiği nedir?",
        body: [
          "Kulak estetiği, kulağın dış kısmını oluşturan kulak sayvanının ve kulak memesinin yapısal veya geçirilmiş travma, cerrahi sonrası görülen büyüklük ve şekil bozukluklarının düzeltilmesine yönelik cerrahi girişimlerdir. Kulak anne karnındayken şekillenmesini tamamlar, boyutu ise 6 yaşlarında erişkin hâlinin %90'ına ulaşır.",
          "Yapısal deformiteleri arasında kulağın bir kısmının veya tamamının hiç olmaması, deri altına gömük olması, aşırı büyük olması, kulak önünde ikinci bir çıkıntı oluşması, kulak sayvanının düz ve öne doğru açık olması yer alır. Sonradan ise çoğunlukla tümör rezeksiyonu, travma sonrası doku kaybına bağlı kulak sayvanından eksiklik şeklinde görülür.",
          "Kulağı oluşturan kıkırdak yapıdır. Kulağın şekli kıkırdak yapıyı biçimlendirerek verilir. Eksikliğinde de karşı kulak veya kaburga kıkırdağı kullanılarak onarılır.",
        ],
      },
      {
        heading: "Kepçe kulak nedir?",
        body: [
          "Kepçe kulak kulak sayvanının kafatası ile yaptığı açının normalden geniş olup iç yüzeyindeki Y şeklinde olması gereken kıvrımın yetersiz ya da hiç gelişmemesidir. Beraberinde kulak deliğinin hemen önündeki çanak şeklindeki kıkırdak yapının büyük ve geniş olması kulağın daha da öne doğru yer almasına yol açabilir. Sonuç olarak kepçe kulak, öne doğru açık, üst 1/3 kısmı düz, normalden daha büyükmüş algılaması yaratan bir kulak görünümündedir. Kulağın en sık görülen yapısal deformitesidir.",
          "Çocukluk çağından itibaren sosyal ortamlarda alay konusu olmak kişi için psikolojik olarak yıpratıcı olur. Özellikle okul çağındaki çocuklar arkadaş çevrelerinde başa çıkması oldukça zor tepkilere maruz kalırlar. Erişkin dönemde bunun getirdiği estetik kaygıyı azaltmak için erkekler ve kadınlar kulaklarını örten saç şekillerini tercih eder. Özellikle okul çağındaki saçlarını toplamak zorunda kalan genç kızlar büyük sıkıntı çeker. Yazın deniz ve havuzdan çıkarken saçların ıslak olmasından dolayı kulakların kamufle edilememesi bile başlı başına bir sorundur.",
          "Kepçe kulak ameliyatının ideal zamanlaması kulağın gelişimini tamamladığı okul öncesi döneme denk gelen 6 yaştır. Çocukluk çağından kıkırdak yapı yumuşak olduğu için şekil verilmesi ve verilen şeklin sabit kalması daha kolaydır. Yaş büyüdükçe kıkırdak yapı sertleşir. Şekil vermek daha zorlaşırken çok sık olmasa da kıkırdağın hafızasından dolayı eski şekline dönme olasılığı artar.",
        ],
      },
      {
        heading: "Otoplasti ameliyatı nedir?",
        body: [
          "Otoplasti ameliyatı kulak sayvanını oluşturan kıkırdak yapıya şekil verilerek kulağın normal boyut ve şekle getirilmesini sağlayan cerrahi girişimdir. Bu amaçla çok farklı teknikler kullanılır. Kulağın arkasından yapılan kesiyle kıkırdak yapıya ulaşılır. Dikiş teknikleriyle kulak sayvanının üst 1/3 bölümünde olması gereken kıvrım oluşturulur.",
          "Kulağın öne doğru açılanmasına ayrıca katkıda bulunan konka olarak adlandırılan kıkırdak yapının çanak şeklindeki yapısında fazlalık varsa eksize edilir. Kıkırdak yapı tekrar şekillendirilerek kulak kafatası arasındaki açı daraltılmış olur. Kulak lobulundeki irilik ve öne doğru açılanma yine arkadan yapılan kesi ve eksizyon teknikleriyle düzeltilir. Kendi kendine eriyen dikişler ile kesi dikilir. Ertesi gün çekilmek üzere içeride kan birikmesini önlemek için küçük bir dren yerleştirilir.",
          "Otoplasti ameliyatı hastanede ameliyathane şartlarında gerçekleştirilmesi uygun olan estetik bir girişimdir. Çocuklarda genel anestezi tercih edilir. Erişkinlerde lokal anestezi ve sedasyon ile yapılabilir. Erişkin hastalar ameliyattan 5-6 saat sonra, çocuk hastalar ise tercihen ertesi gün antibiyotik ve ağrı kesici reçete edilerek taburcu edilir.",
        ],
      },
      {
        heading: "Ameliyat sonrası nasıldır?",
        body: [
          "Ameliyatın bitiminde her iki kulağı kaplayan önde alın, arkada enseyi içine alan sargı şeklinde bir pansuman yapılır. Dördüncü gün bu pansuman açılarak kamufle edilmesi özellikle kadınlar için çok daha kolay olan daha ince bir pansumana geçilir. Birinci haftadan itibaren sadece tenisçi bandı kullanılması yeterlidir. Bu bandın 4 hafta boyunca geceleri uyurken kullanılması verilen şeklin ve açının korunmasını sağlar.",
          "Kulakta özellikle ön yüzde ameliyat sonrası oluşan şişlik ve morluk 3. günden itibaren azalır. İyileşme sürecinde ilk 8 hafta travma, temas sporları, sauna, hamam ve sıcak ortamdan uzak durmak ve kulakların üzerine yatmaktan kaçınmak gerekir. Yine bu süreç içinde gözlüğün kulağın arkasına gelen kısmının direkt teması rahatsız edici olabilir. Kullanılan günlük gözlüğün ayarının geçici bir süreliğine değiştirilmesi gerekebilir.",
        ],
      },
    ],
  },
  {
    slug: "meme-estetigi",
    title: "Meme Estetiği",
    image: "/operations/background1.png",
    blurb: "Meme büyüklüğü, şekli ve onarımına yönelik ameliyatlar.",
    sections: [
      {
        heading: "Meme estetiği / mammoplasti nedir?",
        body: [
          "Meme estetiği detaylı bir analiz ve iyi bir planlamayla çeşitli etkenlere bağlı oluşan memedeki şekil bozukluğunun uygun cerrahi tekniklerle düzeltilmesidir.",
        ],
      },
      {
        heading: "Meme estetiği kimlere uygulanır?",
        body: [
          "Meme estetiği, meme gelişimini tamamlamış sağlıklı kadına uygulanır. Memenin şekli kişiden kişiye farklılıklar gösterdiği gibi aynı kişide iki meme arasında da belirgin fark olabilir. Doğumsal deformiteleri arasında memenin az gelişmesi veya hiç gelişmemesi, memede aşırı büyüklük (gigantomasti), asimetri ve memenin meme başından fıtıklaşması (tüberöz meme) yer alır.",
          "Memenin şekli kadınlarda yaşamları boyunca değişiklikler gösterir. Kilo alıp verme, gebelik, emzirme, menopoz ve yer çekimi bu değişikliklerin nedenleridir. Ayrıca travma, yanık, memeden kitle alınması gibi cerrahi müdahaleler de memede deformitelere yol açabilir.",
        ],
      },
    ],
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

const procedures: Procedure[] = [
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
    sections: [
      {
        heading: "Meme büyütme ameliyatı nedir?",
        body: [
          "Meme büyütme ameliyatı gelişimsel nedenlere, hamileliğe veya kilo kaybına bağlı olarak memelerdeki hacim yetersizliğini düzeltmeye yönelik cerrahi girişimdir. Bu amaçla meme protezleri kullanılır.",
          "Meme protezi, meme büyütme amacıyla kullanılan, silikon bir kılıf içinde farklı akışkan maddeler içeren tıbbi malzemedir. Akışkan maddeye göre silikon jel ve tuzlu su (serum fizyolojik) içeren meme protezleri olarak ikiye ayrılır. Şekil özelliklerine göre de yuvarlak ve damla şeklinde anatomik meme protezleri mevcuttur. Kullanılacak meme protezinin tipi ve şekli hastanın vücut yapısı, deri kalitesi, deri kalınlığı ve beklentilerine göre karar verilir.",
        ],
      },
      {
        heading: "Meme büyütme ameliyatı nasıl yapılır?",
        body: [
          "Meme büyütme ameliyatı hastanede ameliyathane şartlarında genel anestezi altında gerçekleştirilmesi uygun olan estetik bir girişimdir. Meme protezi kas önüne veya kas arkasına yerleştirilir. Bu iki temel teknikle ilgili kas kılıfı altı, dual plan gibi farklı uygulamalar mevcuttur. Protez koltuk altından, meme başından veya meme altı kıvrımından yerleştirilir. Hangi tekniğin tercih edileceği meme yapısı ve protez tipiyle ilişkili olarak ameliyat öncesinde planlanır.",
          "Ameliyat bitiminde hastaya hafif bir pansuman eşliğinde memenin istenilen büyüklüğüne uygun sporcu sütyeni giydirilir. Memedeki sızıntıların ameliyat alanında birikmesini önlemek için dren denilen vakumlu boru sistemi kullanılır. Gelen miktara göre üç gün içinde çıkartılır. Ertesi gün hastaneden antibiyotik ve ağrı kesici reçete edilerek taburcu edilir.",
          "Ameliyatın ilk iki günü memelerde belirgin olan şişlik 3. günden itibaren azalmaya başlar. Bu dönem içinde memelerin üst kısımlarına yapılan soğuk uygulama ve istirahat hastayı rahatlatır. Sporcu sütyeni 6 hafta kullanılır. Göğüs kaslarına yüklenen ağır spor aktiviteler 8 hafta yapılmaz.",
        ],
      },
      {
        heading: "Meme büyütme ameliyatı sonrası nasıldır?",
        body: [
          "Her cerrahi girişim sonrası istenmeyen durumlarla karşılaşılabilinir. Anestezi riski, ameliyat bölgesinde kan toplanması, enfeksiyon ve yara iyileşmesinde gecikme bütün cerrahi girişimler sonrası görülebilen ortak olası komplikasyonlardır. Sigara kullanımı dokuların kanlanmasını ve oksijenizasyonunu olumsuz etkilediği için komplikasyon oranını arttırır.",
          "Kapsül kontraktürü, meme büyütme ameliyatına özgü istenmeyen bir durumdur. Meme protezine vücudun aşırı tepkisi olarak geç dönemde %1-3 oranında gelişebilir. Kendini protezin çevresinde kalınlaşan bir zarla, memenin şeklinin bozulması şeklinde gösterir. Kapsülün gevşetilmesi, çıkarılması, protezin değiştirilmesi veya çıkarılması gerekebilir. Meme protezi kapsülünün zamanla aşınması ve içeriğinin dışına sızma olasılığı çok düşüktür. Rutin meme kanseri tarama testleri (mammografi, meme US) sırasında saptanması hâlinde protezin değiştirilmesi gerekir.",
          "Meme protezi konan hastalarda meme kanseri riski normal popülasyondan farklı değildir. Meme protezi olan kişilerin gebe kalmasında bir sakınca yoktur. Ancak dokuların iyileşme sürecinin tamamlanabilmesi için ilk 6 ay içinde planlı bir gebelik tavsiye edilmez. Kişinin süt vermesine engel bir durum yaratmaz.",
        ],
      },
    ],
  },
  {
    slug: "meme-kucultme",
    category: "meme-estetigi",
    title: "Meme Küçültme",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "Meme küçültme ameliyatı nedir?",
        body: [
          "Meme küçültme ameliyatı iri ve sarkık memelerin kişinin vücut yapısına uygun şekilde hacminin azaltılarak daha dik ve estetik meme şeklinin oluşturulmasını sağlayan cerrahi girişimlerdir.",
          "İri memeler beraberinde başka sağlık problemlerine de yol açar. Memelerin ağırlığına bağlı sırt ve bel ağrıları, kamburlaşma gibi duruş bozuklukları, omuzlarda sütyen askılarının basısı sonucunda oluk şeklinde deformasyonlar oluşur. Yazın daha da artan meme altlarında ve arasında kızarıklık, kötü koku, akıntı, kaşıntı, yaralar, mantar oluşumu kişi için çok rahatsız edicidir.",
          "Yapısal olan iri memeler puberte döneminden itibaren kişinin sosyal yaşamını olumsuz etkiler. Uygun kıyafet bulamamak, girilen her sosyal ortamda dikkat çekme stresi, spor yapmakta zorluk ve olduğundan daha kilolu görüntü kişiyi mutsuz eder.",
          "Meme küçültme ameliyatı meme gelişimini tamamlamış, yakın bir zamanda gebelik planı olmayan, yapılan radyolojik tetkiklerinde meme kanseri şüphesi saptanmayan, genel sağlık durumu iyi olan her kadına yapılabilir.",
        ],
      },
      {
        heading: "Meme küçültme ameliyatı nasıl yapılır?",
        body: [
          "Meme küçültme ameliyatı hastanede ameliyathane şartlarında genel anestezi altında gerçekleştirilmesi uygun olan estetik bir girişimdir. Bu ameliyatla meme başı yukarı kaldırılırken fazla ve sarkık meme dokusu çıkarılarak meme yeniden biçimlendirilir. Çıkarılan meme dokusu genellikle patolojik incelemeye gönderilir. Sonuçta daha küçük, dik ve estetik bir meme elde edilir.",
          "Orta boy memelerde meme başı etrafında ve meme başı alt orta noktasından meme alt kıvrımına uzanan dik bir izle ameliyat sonlanırken büyük ve genişliği fazla olan memelerde bu izlere ek olarak meme alt kıvrımında saklanacak şekilde yatay bir iz eklenir. İzlerin kalıcılığı temelde kişinin genetik yapısına bağlı değişmekle birlikte memeyle birlikte son şeklini alması 1 yılı bulur.",
          "Ameliyat bitiminde hastaya hafif bir pansuman eşliğinde memenin istenilen büyüklüğüne uygun sporcu sütyeni giydirilir. Memedeki sızıntıların ameliyat alanında birikmesini önlemek için dren denilen vakumlu boru sistemi kullanılır. Gelen miktara göre üç gün içinde çıkartılır. 1 veya 2 gün hastanede kaldıktan sonra antibiyotik ve ağrı kesici reçete edilerek taburcu edilir.",
          "Ameliyatın ilk iki günü memelerde belirgin olan şişlik 3. günden itibaren azalmaya başlar. Bu dönem içinde memelerin üst kısımlarına yapılan soğuk uygulama ve istirahat hastayı rahatlatır. Sporcu sütyeni 3 ay kullanılır. Ağır spor aktiviteleri 8 haftadan önce önerilmez.",
        ],
      },
      {
        heading: "Meme küçültme ameliyatı sonrası nasıldır?",
        body: [
          "Her cerrahi girişim sonrası istenmeyen durumlarla karşılaşılabilinir. Anestezi riski, ameliyat bölgesinde kan toplanması, enfeksiyon ve yara iyileşmesinde gecikme bütün cerrahi girişimler sonrası görülebilen ortak olası komplikasyonlardır.",
          "Ameliyat sonunda elde edilen dik ve dolgun memeler yıllar içinde yaş ve yer çekimine bağlı, araya giren gebelik, kilo alıp verme sonrasında sarkma gösterebilir. Ancak ameliyat öncesi duruma dönmez. Memelerde asimetri, meme başlarında çoğunlukla geçici olan uyuşukluk ve renk değişikliği, yara iyileşmesinde gecikme, özellikle kişinin deri yapısıyla ilişkili izlerde belirginlik görülebilir. Sigara kullanımı dokuların kanlanmasını ve oksijenizasyonunu olumsuz etkilediği için komplikasyon oranını arttırır.",
          "Meme küçültme ameliyatı süt vermeye mutlak bir engel değildir, ancak emzirmenin mümkün olup olmayacağı kesin olarak bilinemez.",
        ],
      },
    ],
  },
  {
    slug: "meme-diklestirme",
    category: "meme-estetigi",
    title: "Meme Dikleştirme",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "Meme dikleştirme / mastopeksi ameliyatı nedir?",
        body: [
          "Meme dikleştirme ameliyatı, çeşitli nedenlere bağlı sarkmış olan meme dokusunun tekrar biçimlendirilerek daha estetik bir meme şeklinin oluşturulmasını sağlayan cerrahi girişimdir. Memenin büyüklük ve hacmi yeterli değilse dikleştirme ameliyatında meme protezi kullanılması gerekir.",
          "Gebelik, emzirme, kilo almaya bağlı memeler büyür ve memeyi göğüs duvarına asan bağlar gerilir. Gebelik ve emzirme sürecinin sonlanması ve kilo verme sonucu meme dokusu küçülür ancak asıcı bağlar eski gerginliğine geri dönemez. Yaş, menopoz gibi hormonal değişiklikler ve yer çekiminin etkisiyle de meme dokusu giderek sarkar. Sonuç olarak önce meme dokusu, daha ileri durumlarda da meme ucu meme alt kıvrımının altına iner.",
        ],
      },
      {
        heading: "Meme dikleştirme ameliyatı nasıl yapılır?",
        body: [
          "Meme dikleştirme ameliyatı hastanede ameliyathane şartlarında genel anestezi altında gerçekleştirilmesi uygun olan estetik bir girişimdir. Bu ameliyatla meme başı yukarı kaldırılırken sarkık meme dokusu toparlanarak daha dolgun ve dik bir hâle getirilir. Eğer memenin hacmi yetersizse memeyi daha dolgun bir şekle getirmek için meme protezi kullanılır.",
          "Memenin boyutuna göre izler sadece meme başı çevresinde olabilir. Ancak sıklıkla daha büyük memelerde meme başı etrafında ve meme başı alt orta noktasından meme alt kıvrımına uzanan dik bir izle ameliyat sonlanır. Genişliği fazla olan memelerde bu izlere ek olarak meme alt kıvrımında saklanacak şekilde yatay bir iz eklenebilir. İzlerin kalıcılığı temelde kişinin genetik yapısına bağlı değişmekle birlikte memeyle birlikte son şeklini alması 1 yılı bulur.",
          "Ameliyat bitiminde hastaya hafif bir pansuman eşliğinde memenin istenilen büyüklüğüne uygun sporcu sütyeni giydirilir. Memedeki sızıntıların ameliyat alanında birikmesini önlemek için dren denilen vakumlu boru sistemi kullanılır. Gelen miktara göre üç gün içinde çıkartılır. Ertesi gün hastaneden antibiyotik ve ağrı kesici reçete edilerek taburcu edilir.",
          "Ameliyatın ilk iki günü memelerde belirgin olan şişlik 3. günden itibaren azalmaya başlar. Bu dönem içinde memelerin üst kısımlarına yapılan soğuk uygulama ve istirahat hastayı rahatlatır. Sporcu sütyeni 3 ay kullanılır. Ağır spor aktiviteleri 8 haftadan önce önerilmez.",
        ],
      },
      {
        heading: "Meme dikleştirme ameliyatı sonrası nasıldır?",
        body: [
          "Her cerrahi girişim sonrası istenmeyen durumlarla karşılaşılabilinir. Anestezi riski, ameliyat bölgesinde kan toplanması, enfeksiyon ve yara iyileşmesinde gecikme bütün cerrahi girişimler sonrası görülebilen ortak olası komplikasyonlardır. Sigara kullanımı dokuların kanlanmasını ve oksijenizasyonunu olumsuz etkilediği için komplikasyon oranını arttırır.",
          "Beraberinde meme protezi kullanılmışsa meme protezine özgü istenmeyen durumlar bu ameliyat için de geçerlidir. Ameliyat sonunda elde edilen dik ve dolgun memeler yıllar içinde yaş ve yer çekimine bağlı, araya giren gebelik, kilo alıp verme sonrasında sarkma gösterebilir. Ancak ameliyat öncesi duruma dönmez.",
        ],
      },
    ],
  },
  {
    slug: "meme-rekonstruksiyonu",
    category: "meme-estetigi",
    title: "Meme Rekonstrüksiyonu",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "Meme rekonstrüksiyonu / meme onarımı ameliyatı nedir?",
        body: [
          "Meme rekonstrüksiyonu, kanser nedeniyle memenin bir kısmının veya tamamının alındıktan sonra memenin yeniden oluşturulmasına yönelik cerrahi tekniklerin genel tanımıdır.",
          "Günümüzde gelişen teknoloji ve koruyucu hekimliğin yaygınlaşmasıyla meme kanserinin saptanması çok erken yaşlarda olmaktadır. Kadın için çok önemli bir organ olan memenin kaybı her yaştaki kadının psikolojisini derinden etkiler.",
          "Memenin yeniden oluşturulmasına yönelik ameliyatlar kişinin kanser tedavisini etkilemez. Bu nedenle kanser tanısı konduktan sonra hastayla memesinin yeniden oluşturulabileceği bilgisi mutlaka paylaşılmalıdır. Tümörün büyüklüğü, koltuk altındaki lenf nodlarının tutulumu, yaş, ailede meme kanseri hikâyesi, östrojen reseptör varlığı gibi birçok faktör göz önüne alınarak hastanın cerrahi ve onkolojik tedavisi planlanır.",
          "Kanser ameliyatıyla eşzamanlı veya daha sonra meme rekonstrüksiyonu yani memenin yeniden oluşturulması ameliyatı gerçekleştirilir. Kanser ameliyatının hemen devamında eşzamanlı yapılan meme rekonstrüksiyonu hastanın ameliyat masasından meme ile uyanmasını sağlar. Eşzamanlı onarımın yapılması uygun olmayan durumlarda veya hasta tercih etmemişse onkolojik tedavi tamamlandıktan sonra, hasta kararını verdiği zaman da rekonstrüksiyon gerçekleştirilebilir. Bu amaçla hangi tekniğin kullanılacağını, hastanın kanser ameliyatı sonrası ışın tedavisi alıp almayacağı, vücut yapısı, genel sağlık durumu ve hastanın beklentileri belirler.",
        ],
      },
      {
        heading: "Meme rekonstrüksiyonu ameliyatı nasıl yapılır?",
        body: [
          "Meme rekonstrüksiyonu ameliyatı, hastanede ameliyathane şartlarında genel anestezi altında gerçekleştirilir. Bu amaçla farklı teknikler mevcuttur.",
          "Silikon meme protezi kullanılarak yapılan meme rekonstrüksiyonunda meme dokusu alındıktan sonra kasın altına, eğer cilt ve cilt altı doku yeterli ise kalıcı protez, yeterli değilse doku genişletici yerleştirilir. İki hafta sonra doku genişletici serum fizyolojik ile seanslar hâlinde şişirilerek meme 1-2 ay içinde hedeflenen hacme getirilir. Hedeflenen hacimden en az altı ay sonra doku genişletici çıkarılarak kalıcı meme protezi yerleştirilir.",
          "Bir kısmı silikondan oluşan, hem doku genişletici hem de kalıcı protez olarak kullanılan meme protez tipi ilk ameliyatta tercih edilmişse, meme hedeflenen hacme getirildikten en az 6 ay sonra protezin serum fizyolojik ile şişirilmesini sağlayan ara bağlantısı lokal anesteziyle çekilerek protez yerinde bırakılır.",
          "Hastanın otolog dokularla yani kendi dokusunun kullanılarak yapılan meme rekonstrüksiyonunda en sık karın ve sırt dokusu tercih edilir. Hangisinin kullanılacağını kişinin vücut yapısı ve hastanın tercihi belirler.",
          "TRAM flep olarak adlandırılan teknikte karın dokusu kısmen karın kasıyla (rektus abdominis kası) birlikte kullanılarak yapılır. Bu teknik karın bölgesinde doku fazlalığı olan aslında karın germe ameliyatı adayı da olabilecek hastalar için uygundur. İz karın germe ameliyatındaki gibi iç çamaşırının altında saklanır.",
          "Karın bölgesinde yeterli doku olmayan hastalarda sırt dokusu tercih edilir. Bu teknikte sırt dokusu kısmen sırt kasıyla (latissimus dorsi kası) birlikte kullanılır. Sırt bölgesinde özellikle zayıf hastalarda kitle oluşturabilecek doku fazla olmadığı için bu teknikte beraberinde meme protezi kullanılabilir. İz sütyen içinde saklanacak şekilde planlanır.",
          "Otolog dokunun kullanıldığı bu tekniklerde hastanede kalış ve aktif hayata dönüş süresi meme protezi / doku genişletici kullanılarak yapılan tekniklere göre daha uzundur. Her bir tekniğin ameliyat sonrası iyileşme süreci, revizyon olasılıkları, sonuçları detaylıca görüşülmelidir.",
        ],
      },
      {
        heading: "Yeni meme başı nasıl yapılır?",
        body: [
          "Meme kanseri nedeniyle memenin tamamının alınması gereken durumlarda çoğunlukla meme başı da ameliyata dâhil edilir. Eşzamanlı veya geç dönemde yapılan meme rekonstrüksiyonu ameliyatlarında öncelikle memenin yeniden oluşturulması hedeflenir. Memenin şekli ve hacmiyle ilgili tüm cerrahi süreç sona erdikten sonra meme başının yapılması planlanır.",
          "Ancak karşı memenin yeni yapılan memeyle şekil ve hacim olarak uyumu bu aşamada çok önemlidir. Sağlam meme sarkık ve iriyse küçültme-dikleştirme, küçük ise büyütme ameliyatı yapılması tercih edilir. Böylece yeni oluşturulan memenin meme başı sağlam memeninkiyle simetrik olarak yapılarak daha estetik bir sonuç elde edilir.",
          "Meme başı, meme ucu (nipple) ve etrafındaki kahverengi dairesel ciltten (areola) oluşur. Meme ucu etraf meme dokusundan planlanan lokal fleplerle oluşturulur. Areola ise kasık bölgesinden alınan deriyle veya sıklıkla tatuaj / dövme ile yapılır.",
        ],
      },
    ],
  },
  {
    slug: "jinekomasti",
    category: "meme-estetigi",
    title: "Jinekomasti",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "Jinekomasti / erkekte meme küçültme ameliyatı nedir?",
        body: [
          "Jinekomasti ameliyatı, erkeklerdeki anormal büyümüş olan memelerin kişinin vücut yapısına uygun şekilde hacminin azaltılarak erkek tipi meme şeklinin oluşturulmasını sağlayan cerrahi girişimdir. Jinekomasti hormonal, tümöral nedenler veya çeşitli ilaçların kullanımına bağlı oluşabilir.",
          "Hormonal nedenlere bağlı meme büyüklüğü yeni doğan ve ergenlik döneminde sıklıkla görülür ve geçicidir. Ancak ergenlik döneminde görülen memelerde gerginlik ve büyüklük kişilerin %30'unda gerilemeyerek kalıcı bir durum alır. Bu durum genç insanların sosyal yaşamını olumsuz etkiler. Bol kıyafetlerle, kambur durarak gizlemeye çalışırlar, yazın denize ve havuza girmek adeta kabusa dönüşür.",
          "Vücut geliştirme sporu yapan bazı kişilerin kontrolsüz kullandığı hormonal ilaçlar erkekte anormal meme büyüklüğü nedenleri arasında yer alır. Kas gelişimini arttırmak amacıyla kullanılan hormonlar uzun vadede meme bezlerinde kalıcı büyümelere hatta meme başından süt gelmesine yol açar.",
          "Tek veya çift taraflı anormal meme büyüklüğü şikâyetiyle başvuran hastanın detaylı muayene ve görüntüleme teknikleriyle jinekomastinin tipi ve derecesi belirlenir. Ayrıca hormonal analiz gerekebilir. Jinekomastinin glanduler yani meme bezinin anormal büyüklüğü veya lipomatöz yani yağ dokusunun bölgesel fazlalığına bağlı olup olmadığı incelemeler sonucu belirlenir. Memenin büyüklüğü ve ciltte sarkmanın varlığıyla birlikte sarkıklık derecesine göre evreleme yapılır.",
        ],
      },
      {
        heading: "Jinekomasti ameliyatı nasıl yapılır?",
        body: [
          "Jinekomasti ameliyatı hastanede, ameliyathane şartlarında, uygulanacak teknik ve jinekomastinin boyutuna bağlı olarak sedasyon veya genel anestezi altında gerçekleştirilir. Meme bölgesindeki anormal büyümenin nedeni bölgesel yağ dokusunun birikmesi ise liposuction / yağ alma tekniği kullanılır.",
          "Meme başının arkasında çoğunlukla düğme şeklinde ele gelen meme dokusunun, çeşitli nedenlerle anormal büyümesi eşlik ediyorsa tek başına liposuction yetmez. Liposuction ile cilt altı dokusunun kalınlığı azaltıldıktan ve memenin istenen kontürü sağlandıktan sonra, meme başının cilt ile birleşim yerinde kalacak olan yarımay şeklinde insizyon yapılır. Meme dokusu eksize edilir. İnsizyon hattı kendi kendine eriyen dikişlerle kapatılır. Çıkarılan meme dokusu genellikle patolojik incelemeye gönderilir.",
          "İleri evredeki jinekomasti hastalarında, ciltte meme altı kıvrımından aşağı doğru sarkma mevcuttur. Beraberinde meme başı normalden daha büyük olabilir. Özellikle günümüzde bariatrik cerrahinin gelişmesi ve yaygınlaşmasıyla yüksek miktarda (20 kilonun üstü) kilo veren kişi sayısı da artmaktadır. Bu kişilerin kilo vermeleri sonucunda kaçınılmaz olarak ciltte sarkmalar olmaktadır. Erkeklerde de meme bölgesinde ciddi sarkmalar görülmektedir.",
          "Bu tip jinekomastide ciltteki fazlalığın düzeltilmesi için daha detaylı teknikler tercih edilir. Cilt fazlalığının ve büyük meme başının düzeltilmesi için meme başının ciltle birleşim yerinde kalacak dairesel ve meme başının alt orta noktasından meme altı kıvrımına uzanan insizyonlar yapılır. Bu ameliyatla meme başı yukarı kaldırılırken fazla ve sarkık meme dokusu çıkarılarak meme yeniden biçimlendirilir. İzlerin kalıcılığı temelde kişinin genetik yapısına bağlı değişmekle birlikte memeyle birlikte son şeklini alması 1 yılı bulur.",
          "Ameliyat bitiminde hastaya hafif bir pansuman eşliğinde göğüs bölgesini içine alan korse giydirilir. Meme dokusundan eksizyon yapılmışsa memedeki sızıntıların ameliyat alanında birikmesini önlemek için dren denilen vakumlu boru sistemi kullanılır. Gelen miktara göre üç gün içinde çıkartılır. Aynı gün veya ertesi gün antibiyotik ve ağrı kesici reçete edilerek taburcu edilir.",
        ],
      },
      {
        heading: "Jinekomasti ameliyatı sonrası nasıldır?",
        body: [
          "Jinekomasti ameliyatının hemen bitiminde giydirilen korsenin 4 hafta boyunca düzenli takılması istenir. İkinci haftanın sonunda çok rahatsız etmesi hâlinde geceleri çıkartılabilir. Göğüs bölgesindeki şişliğin inip şeklini alması 6 aydan önce olmaz. Ağır spor aktiviteleri, özellikle göğüs bölgesine yönelik ağırlığa dayalı egzersizler 8 haftadan önce önerilmez. İkinci haftadan itibaren yürüyüş ve yüzme sakıncalı değildir.",
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
    sections: [
      {
        heading: "Liposuction / yağ alma ameliyatı nedir?",
        body: [
          "Liposuction / yağ alma ameliyatı vücutta kontür bozukluğuna yol açan bölgesel yağ fazlalıklarının giderilmesini sağlayan cerrahi girişimdir. Bu ameliyat için uygun aday ideal kilosuna yakın, cilt elastikiyeti iyi olan genç hastalardır. Liposuction selüliti yok etmek ve kilo vermek için çözüm değildir. Ancak bölgesel fazlalıklarının giderilmesiyle ve cilt altı yağ dokusunun azaltılmasıyla kişi daha zayıf gözükür ve selülit olarak adlandırılan cilt düzensizlikleri hafifler.",
          "Yağ hücrelerinin sayısı erişkinde sabittir. Kilo alınmasıyla sayıda artma olmaz ancak yağ hücrelerinde yağ depolanması olur. Kişideki fazlalıkları belirleyen de yağ hücrelerinin sayıca fazla olarak belli bölgelerde yoğunlaşmasıdır. Bu yağ hücrelerinin dağılımı kişiden kişiye ve cinsiyete göre farklılık gösterir.",
          "Armut tip vücut şekli olanlarda yağlar karın çevresinde, elma tip vücut şeklinde ise basen bölgesinde toplanmıştır. Bu bölgeler başta olmak üzere kişinin vücut yapısına özgü başka bölgelerde de diyet ve spora cevap vermeyen inatçı fazlalıklar mevcuttur. Vücutta kontür bozukluğuna yol açan bu fazlalıkların giderilmesinin kalıcı çözümü yağların alınmasıdır. Liposuction ile aslında yağların depolandığı yağ hücreleri alınmaktadır. Bu nedenle ameliyat sonrası kilo alınması söz konusu olduğunda yağ hücrelerinin sayısının azaltıldığı bu bölgelerde eskisi gibi yağ birikimi olmamaktadır.",
          "Liposuction sıklıkla karın, bel yanları, basenler, bacaklar, kollar, çene altı, diz üstü ve dizin iç yüzüne uygulanır. Vücudun şeklini ve kontürünü düzeltirken yağ almayla birlikte bazı alanlara da yağ vermek gerekebilir. Liposuction sırasında alınan yağ gerekli işlemden geçirildikten sonra aynı seansta vücuttaki bazı alanlara enjekte edilerek daha orantılı vücut şekli elde edilir.",
        ],
      },
      {
        heading: "Liposuction / yağ alma ameliyatı nasıl yapılır?",
        body: [
          "Liposuction / yağ alma ameliyatı hastanede ameliyathane şartlarında gerçekleştirilmesi uygun olan estetik bir girişimdir. Uygulanacak bölgenin genişliğine ve beraberinde başka bir girişimin yapılmasına göre lokal anestezi-sedasyon veya genel anestezi altında gerçekleştirilir.",
          "Vücutta kontür bozukluğuna yol açan bölgesel yağ fazlalıkları ameliyat öncesi işaretlenir. Ameliyat sırasında bu bölgelere içinde kanamayı önleyici ve ameliyat sonrası ağrıyı giderici ilaçlar bulunan özel bir solüsyon enjekte edilir. Vücut kıvrımlarında saklanacak şekilde 3-4 mm'lik kesilerden girilen ince kanüller aracılığıyla vakumla yağlar alınır. Eğer aynı seansta yağ enjeksiyonu yapılacaksa yağ özel enjektör sistemi ile alınarak enjeksiyon için hazırlanır.",
          "Yağın alınma miktarında rakamsal bir hedef yoktur. Amaç bir heykeltıraş gibi istenilen kontürün oluşturulmasını sağlayacak miktarda yağın, ciltte istenmeyen deformitelere yol açmadan alınmasıdır.",
          "Ameliyat bitiminde hastaya yağ alınan bölgelere bası yapacak özel korse giydirilir. Aynı gün veya ertesi gün antibiyotik ve ağrı kesici reçete edilerek taburcu edilir.",
        ],
      },
      {
        heading: "Liposuction / yağ alma ameliyatı sonrası nasıldır?",
        body: [
          "Korsenin 4-6 hafta düzenli kullanılması istenir, çünkü korsenin basısıyla yağın boşaltıldığı alanlara cildin sağlıklı bir şekilde adaptasyonu olmakta, vücudun daha hızlı ve etkin biçimlenmesi sağlanmaktadır. İkinci haftadan sonra korse geceleri ara ara çıkarılabilir.",
          "Uyuşukluk, ciltte morluk, dokunmakla ağrı ve hassasiyet 3. haftadan itibaren hızla azalır. İlk haftalarda tartıda artış ve kıyafetlerin dar gelmesi dokuların ameliyata bağlı ödemli olmasından dolayı beklenen bir durumdur. İkinci aydan itibaren şişler oldukça azalır. Vücut kontürü 6 ay-1 yıl içinde son hâlini alır.",
        ],
      },
      {
        heading: "Laser liposuction / laser lipoliz nedir?",
        body: [
          "Laser enerjisi ile yağ hücrelerinin zarlarının parçalanıp içerdiği depo yağın sıvı hâle getirilmesi prensibine dayalı bir vücut kontür düzeltme işlemidir. Sıvı hâline gelen yağ dokusu, uygulanan laser tekniğine ve bölgeye göre vücuttan lenfatikler aracılığıyla atılması için bırakılabilir veya ince kanüllerle dışarı alınır.",
          "Bu işlemin bir özelliği de laserin termal etkisiyle kollajen sentezini uyararak cildi sıklaştırma etkisidir. Böylece tek seansta hem yağ alınması hem de cilt sıklaştırma işlemi gerçekleşir.",
        ],
      },
    ],
  },
  {
    slug: "karin-germe",
    category: "vucut-estetigi",
    title: "Karın Germe",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "Karın germe / abdominoplasti ameliyatı nedir?",
        body: [
          "Karın germe ameliyatı karın bölgesindeki cilt, cilt altı dokulardaki sarkıklığın giderilip düz ve gergin bir karın oluşumunu sağlayan cerrahi girişimdir. Bu ameliyatla göbek deliğinin altındaki tüm cilt fazlalığı atılırken özellikle gebeliklere bağlı gevşemiş karın zarı da gerginleştirilir. Atılan ciltte varsa çatlaklardan tamamen kurtulunur. Göbek deliği üzerindeki çatlaklar da gerginliğe bağlı daha az görünür hâle gelir.",
          "Sıklıkla doğum sonrası ve aşırı kilo alıp vermeye bağlı karın bölgesinde, bazı kişilerde bel yanlarına da uzanan cilt ve cilt altındaki dokularda sarkma oluşur, bel kalınlaşır. Bu sarkma aşırı olursa bel ve sırt bölgesinde ağrılara, cilt kıvrımı altında kötü koku, kaşıntı, kızarıklık gibi özellikle yaz aylarında artan şikâyetlere yol açar. Estetik açıdan ise kişinin sosyal ve özel hayatını oldukça zorlayıcı bir deformitedir. Karın bölgesini örten tipte kıyafetler tercih edilir. Yazın ise bu bölgeyi saklamak daha da zorlaşır.",
        ],
      },
      {
        heading: "Karın germe ameliyatı nasıl yapılır?",
        body: [
          "Karın germe ameliyatı hastanede ameliyathane şartlarında genel anestezi altında gerçekleştirilir. Ameliyat sezaryen iziyle aynı hatta, sarkık cildin altından kasıklar boyunca uzanan bikini içinde kalan bir izle sonlanır. İzlerin kalıcılığı temelde kişinin genetik yapısına bağlı değişmekle birlikte karınla birlikte son şeklini alması 1-2 yılı bulur.",
          "Gebelik sonrası karın kasları birbirinden ayrık durur ve kasları örten karın zarında gevşeme oluşur. Göbek deliği gebelik ve aşırı kilo almaya bağlı gerginlikten dolayı deforme olur.",
          "Karın germe ameliyatı ile göbek deliğinin altındaki sarkık ve çatlaklar içeren cilt ve cilt altındaki yağlı doku çıkarılır. Gevşemiş karın zarı uygun yön ve gerginlikte plike edilerek güçlendirilir. Yeni ve daha estetik bir göbek deliği oluşturulur. Gerekirse ameliyata liposuction / yağ alma da eklenerek cilt altı yağ dokusu inceltilir. Böylece, estetik bir göbek deliği olan gergin, düz bir karın ve daha ince bir bel oluşturulur.",
          "Ameliyat bölgesindeki sızıntıların birikmesini önlemek için dren denilen vakumlu boru sistemi kullanılır. Karnı saran bir korse giydirilir.",
        ],
      },
      {
        heading: "Karın germe ameliyatı sonrası nasıldır?",
        body: [
          "Drenler gelen miktara göre 3-4 gün içinde çıkartılır. İki veya 3 gün hastanede kaldıktan sonra antibiyotik ve ağrı kesici reçete edilerek taburcu edilir. İlk bir hafta hastanın evde de sırtının yüksekte, bacakların hafif kırık pozisyonda yatması ve ayağa kalktığında hafif öne eğilerek yürümesi istenir. Böylece dikiş hattındaki gerginlik azalır. İkinci haftadan sonra kişi yavaş yavaş normal yatış ve yürüyüş pozisyonuna geçebilir. Ameliyat bölgesindeki belirgin olan şişlik 3. günden itibaren azalmaya başlar. Korse 4 hafta boyunca düzenli kullanılmalıdır. Ameliyattan sonra sık sık ve küçük porsiyonlarla beslenilmesi önerilir.",
          "Her cerrahi girişim sonrası istenmeyen durumlarla karşılaşılabilinir. Anestezi riski, ameliyat bölgesinde kan toplanması, enfeksiyon ve yara iyileşmesinde gecikme bütün cerrahi girişimler sonrası görülebilen ortak olası komplikasyonlardır. Sigara kullanımı dokuların kanlanmasını ve oksijenizasyonunu olumsuz etkilediği için komplikasyon oranını arttırır. Sigara içen kişi ameliyattan en az 2 hafta önce sigarayı bırakmalı ve ameliyattan sonra da 2-3 hafta boyunca içmemelidir.",
          "Karın germe ameliyatı sonrası en istenmeyen komplikasyon embolidir. Embolinin önlenmesi için ameliyatın öncesi anti-embolik çoraplar giydirilir. Ameliyat sonrası yatakta bacaklara masaj yaptırılır ve hareket ettirilmesi sağlanır. Hastanede kalınan süre içinde de uygun ilaçlar kullanılır. Ameliyat öncesi emboli açısından bacaklarda derin ven trombozu hikâyesi ve varislerin varlığı sorgulanır.",
          "Karın bölgesinde uyuşukluk, hassasiyet, şişlik doğaldır. Birinci aydan itibaren karın şekle girmeye başlar, izlerle birlikte son hâlini alması 1-2 yıl sürer. Sauna, hamam ve ağır spor aktiviteleri 8 haftadan önce önerilmez.",
        ],
      },
      {
        heading: "Mini karın germe / mini abdominoplasti ameliyatı nedir?",
        body: [
          "Mini karın germe ameliyatı karındaki sarkma ve gevşeklik göbek deliği altındaki alanda sınırlıysa yapılan cerrahi işlemdir. Yapılan işlem tam karın germe ameliyatındakine oranla daha sınırlı olduğu için daha kısa izle sonlanabilir. Ameliyat sonrası iyileşme süreci de daha hızlıdır. Gerekirse göbek deliği üzerindeki alana liposuction / yağ alma ameliyatı ile kombine edilir.",
        ],
      },
    ],
  },
  {
    slug: "bacak-ici-germe",
    category: "vucut-estetigi",
    title: "Bacak İçi Germe",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "Bacak içi germe / thigh-lift ameliyatı nedir?",
        body: [
          "Bacak içi germe ameliyatı, kilo alıp vermeye ve yer çekimine bağlı veya yapısal olarak bacakların iç kısmında oluşan cilt, cilt altı dokulardaki sarkıklığın giderilip düz ve gergin bir hâle getirilmesini sağlayan cerrahi girişimdir. Bacak iç yüzündeki bölgesel yağ fazlalığı eğer ciltte gevşeklik yok ise sınırlı bir yağ alma işlemi ile düzelebilir.",
          "Anatomik olarak buradaki cilt ve cilt altı dokular bacağın diğer yerlerine göre daha gevşektir. Bundan dolayı yer çekimine ve kilo değişimlerine bağlı rahatsız edici şekilde bu bölgede sarkmalar oluşur. Yaz aylarında mayo, şort giymek kişi için çok rahatsız edici bir durumdur. İleri deformitelerde bacak iç yüzlerinin birbirine sürtünmesi sonucu pişik, kızarıklık, yaralar oluşması bu kişileri sürtünmeyi engellemek için devamlı pantolon giymek zorunda bırakır.",
          "Yağ alma teknikleriyle cilt altı yağ dokusunun boşaltılması ciltteki sarkmayı daha da belirginleştirir. Bu nedenle sarkmaya yol açan dokuların çıkarılmasını içeren bacak içi germe ameliyatı yağ alma işlemiyle kombine edilmelidir.",
        ],
      },
      {
        heading: "Bacak içi germe ameliyatı nasıl yapılır?",
        body: [
          "Bacak içi germe ameliyatı hastanede ameliyathane şartlarında lokal anestezi-sedasyon veya genel anestezi altında gerçekleştirilir. İç yüzdeki ciltte gevşeklik ile birlikte yağ dokusunda da fazlalık varsa önce yağ alma teknikleriyle cilt altı yağ dokusu boşaltılır. Yağ alma sonrası daha da belirginleşen cilt ve cilt altı dokulardaki sarkıklığa yol açan fazlalık, bacak iç yüzü yukarıya doğru gerildikten sonra çıkartılır.",
          "İzler kasık bölgesinde iç çamaşır içinde kalacak şekilde gizlenir. İzlerin kalıcılığı ve genişliği temelde kişinin genetik yapısına bağlı değişmekle birlikte son şeklini alması 1-2 yılı bulur. Ameliyat bölgesindeki sızıntıların birikmesini önlemek için dren denilen vakumlu boru sistemi kullanılır.",
        ],
      },
      {
        heading: "Bacak içi germe ameliyatı sonrası nasıldır?",
        body: [
          "Drenler gelen miktara göre 2-3 gün içinde çıkartılır. Aynı gün veya ertesi gün antibiyotik ve ağrı kesici reçete edilerek taburcu edilir. Bacak iç bölgesinde morluk ve şişlik birinci haftadan itibaren azalır. Bu süre içinde bacakları kalp seviyesinde tutmak ve genel anlamda istirahat iyileşme sürecini hızlandırır.",
          "Dikiş hattı kasık gibi vücudun nemli bir bölgesinde olduğu için yara iyileşmesinde gecikmeler yaşanabilir. Pansumanlarla sorunsuz toparlanır. Özellikle bariatrik cerrahi sonrası 20 kiloyu aşan kilo vermeye bağlı görülen ileri derecede sarkmalarda izler bacak iç yüzü boyunca devam edebilir. İzlerin yerinin netleştirilmesi için ameliyat öncesi detaylı bir muayene gerekir.",
          "On gün sonra aktif hayata dönülür. Sauna, hamam ve ağır spor aktiviteleri 8 haftadan önce önerilmez.",
        ],
      },
    ],
  },
  {
    slug: "kol-germe",
    category: "vucut-estetigi",
    title: "Kol Germe",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "Kol germe / brakioplasti ameliyatı nedir?",
        body: [
          "Kol germe ameliyatı, kilo alıp vermeye ve yer çekimine bağlı veya yapısal olarak kolların iç kısmında oluşan cilt, cilt altı dokulardaki sarkıklığın giderilmesini sağlayan cerrahi girişimdir. Kolun iç yüzündeki bölgesel yağ fazlalığı eğer ciltte gevşeklik yok ise sınırlı bir yağ alma işlemi ile düzelebilir.",
          "Anatomik olarak buradaki cilt ve cilt altı dokular kolun diğer yerlerine göre daha gevşektir. Bundan dolayı yer çekimine ve kilo değişimlerine bağlı rahatsız edici şekilde bu bölgede sarkmalar oluşur. Yaz aylarında kısa kollu kıyafet giymek, kol hareketlerini içeren aktiviteler kişi için çok rahatsız edici bir durumdur.",
          "Yağ alma teknikleriyle cilt altı yağ dokusunun boşaltılması ciltteki sarkmayı daha da belirginleştirir. Bu nedenle sarkmaya yol açan dokuların çıkarılmasını içeren kol germe ameliyatı, gerekirse yağ alma işlemiyle kombine edilmelidir.",
        ],
      },
      {
        heading: "Kol germe ameliyatı nasıl yapılır?",
        body: [
          "Kol germe ameliyatı hastanede ameliyathane şartlarında lokal anestezi-sedasyon veya genel anestezi altında gerçekleştirilir. İç yüzdeki ciltte gevşeklik ile birlikte yağ dokusunda da fazlalık varsa önce yağ alma teknikleriyle cilt altı yağ dokusu boşaltılır. Yağ alma sonrası daha da belirginleşen cilt ve cilt altı dokulardaki sarkıklığa yol açan fazlalık çıkartılır.",
          "Bu ameliyatla ilgili üzerinde durulması gereken önemli nokta izlerin yeridir. Çok hafif cilt sarkıklığında iz koltuk altında saklanabilir. Ancak kişiyi ameliyat olmaya iten kol sarkıklığı çoğunlukla izlerin koltuk altında saklanabileceği durumlardan daha ileridir. Cilt fazlalığı ancak kola paralel şekilde eksize edilince kolda istenilen gerginlik elde edilir.",
          "İz kolun iç ve arka yüzü arasında kol normalde vücutla paralel durduğunda karşıdan ve arkadan bakıldığında fark edilmeyecek şekilde konumlandırılmaya çalışılır. İzlerin kalıcılığı ve genişliği temelde kişinin genetik yapısına bağlı değişmekle birlikte son şeklini alması 1-2 yılı bulur. Ameliyat bölgesindeki sızıntıların birikmesini önlemek için dren denilen vakumlu boru sistemi kullanılır.",
        ],
      },
      {
        heading: "Kol germe ameliyatı sonrası nasıldır?",
        body: [
          "Drenler gelen miktara göre 2-3 gün içinde çıkartılır. Aynı gün veya ertesi gün antibiyotik ve ağrı kesici reçete edilerek taburcu edilir. Kol iç bölgesinde morluk ve şişlik birinci haftadan itibaren azalır. Bu süre içinde kollara yüklenilmemesi iyileşme sürecini hızlandırır. Sauna, hamam ve ağır spor aktiviteleri 8 haftadan önce önerilmez.",
        ],
      },
    ],
  },

  /* ---------------- Ameliyatsız yöntemler ---------------- */
  {
    slug: "botoks",
    category: "ameliyatsiz-yontemler",
    title: "Botoks",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "Botoks nedir?",
        body: [
          "Botoks klostridyum botulinum denen bir bakterinin ürettiği bir toksindir. Doğal bir maddedir, laboratuvarlarda da doğal yoldan üretilmekte, kapalı vakumlu steril şişeciklere toz hâlinde yerleştirilip soğuk zincire özen göstererek nakledilmektedir.",
          "Botoks toksini, sinir uçlarında uyarı iletimini sağlayan asetilkolin denilen bir maddenin salınımını bloke eder, sinirsel uyarı kaslara iletilemez, kas kasılması oluşamaz. Botoks dıştan bölgesel kullanım için hazırlanmıştır; enjeksiyon yapılan bölgedeki kaslar paraliziye uğrar, aylarca sürecek şekilde gevşek kalırlar.",
          "Terlemenin önlenmesinden, bölgesel spastisitenin tedavisine, estetik amaca kadar vücudun değişik alanlarında farklı rahatsızlıkların süreli çözümleri için kullanılmaktadır.",
        ],
      },
      {
        heading: "Yüzde botoks uygulaması nedir?",
        body: [
          "Mimik kaslarının kullanılması üzerindeki ciltte kırışıklıklar oluşturur. Bu kırışıklıkların süresi çok uzunsa, cilt de kuru ise kırışıklıklar çok daha derin ve mimik yapılmadan dahi kalıcı bir hâl alabilir. Her insanın gülerken veya stresliyken farklı mimik kasları aktiftir. Bu nedenle kırışıkların derinliği ve lokalizasyonu kişiden kişiye değişir.",
          "Botoks yüzde özellikle estetik amaçlı olarak uygulanmaktadır; en yaygın kullanım alanı, aşırı çalışan mimik kaslarını geçici olarak gevşeterek oluşturduğu cilt kırışıklıklarının belli bir süre için azaltılmasıdır. En sık alın, iki kaş arası ve göz çevresindeki kırışıkların önlenmesi için bu bölgelere uygulanır. Sonuç olarak kırışıklar derinliğine göre azalır veya tamamen yok olur. Beraberinde kişi arzu ediyorsa planlanan miktarda kaşlar kalkar.",
        ],
      },
      {
        heading: "Estetik amaçlı botoks nasıl uygulanır?",
        body: [
          "Botoks uygulaması ofis koşullarında gerçekleştirilen bir işlemdir. Enjeksiyon alanlarına lokal anestezik bir krem uygulanması yeterlidir. Hasta yarı oturur pozisyonda iken, daha önce sulandırılarak hazır hâle getirilmiş botoks, ince uçlu hassas enjektörler kullanılarak yüzün farklı alanlarına hastanın ihtiyacına göre belirlenmiş dozlarda enjekte edilir.",
        ],
      },
      {
        heading: "Botoks uygulaması sonrası nasıldır?",
        body: [
          "Botoks uygulaması sonrası enjeksiyon alanlarına soğuk tatbiki yapılır. Masaj ise kesinlikle yapılmaz. Enjeksiyon noktalarında geçici olarak hafif kızarıklık ve morarma oluşabilir. Ancak bunların makyajla kapatılmasında sakınca yoktur.",
          "Hasta, ihtiyaca göre kontrol muayenesine çağırılır. Botoksun hastadan hastaya değişmek üzere etki süresi 4-6 aydır. Bu süreyi takiben uygulamanın tekrarlanması gerekir.",
        ],
      },
    ],
  },
  {
    slug: "dolgu",
    category: "ameliyatsiz-yontemler",
    title: "Dolgu",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "Dolgu nedir? Hyaluronik asid ve yağ enjeksiyonu nedir?",
        body: [
          "Dolgu vücudun yapısal, yaşlanma, hastalık veya geçirilmiş operasyona bağlı olarak oluşan çökük bölgelerine estetik amaçla enjekte edilen tıbbi amaçla üretilmiş maddedir. Dolgu için farklı maddeler tanımlanmıştır ve tanımlanmaktadır. Ancak hekimler arasında en yaygın kabul görenleri yağ ve hyaluronik asittir.",
          "Dolgu amaçlı kullanılan yağ kişinin kendi vücudunun karın gibi bol ve dayanıklı yağ içeren bir bölgesinden alınır. Tekniğe göre değişen şekilde farklı işlemlerden geçirilerek dolgu yapılacak bölgelere enjekte edilir.",
          "Hyaluronik asit ise insan vücudunda zaten bulunan doğal bir maddedir, laboratuvarlarda da doğal yoldan üretilmekte, hyaluronik asit jeli ve lidokain gibi lokal anestezik içeren kullanıma hazır koyu kıvamlı bir akışkan madde şeklinde özel enjektör içinde nakledilmekte, 2-25 °C sıcaklıkta saklanmaktadır. Bu dolgu maddesi, ecza depolarında çeşitli markalarla, yalnız uzmanların kullanımına hazırlanmış olarak bulunmaktadır.",
          "Hyaluronik asit dıştan bölgesel kullanım için hazırlanmıştır; enjeksiyon yapılan bölgede aylarca sürecek şekilde etkinliğini gösterir. Yağ ve hyaluronik asit vücudun değişik alanlarında farklı rahatsızlıkların süreli çözümleri için kullanılmaktadır.",
        ],
      },
      {
        heading: "Yüzde dolgu uygulaması nedir?",
        body: [
          "Dolgu yüzde estetik amaçlı olarak, ciltte çökmelerin, çizgilenmelerin olduğu bölgeleri dolgunlaştırmak için uygulanmaktadır. En yaygın kullanım alanları, nazolabial sulkus denilen burun dudak oluğunun, marionette hattı denilen dudak yanı oluğunun, dudak kenarındaki yatay ve üstündeki dikey kırışıklarının doldurulmasıdır.",
          "Ayrıca dudakları belirgin ve dolgun göstermek için dudak kenarlarına ve dudak mukozasının altına da uygulanmaktadır. Bunların dışında kontür verme amacıyla yüzün ihtiyaç olan başka bölgelerine de dengeli bir şekilde uygulanabilir.",
        ],
      },
      {
        heading: "Yağ enjeksiyonu, hyaluronik asit enjeksiyonu nasıl uygulanır?",
        body: [
          "Hyaluronik asit uygulaması ofis koşullarında gerçekleştirilen bir işlemdir. Hyaluronik asit kullanıma hazır olarak ambalajlanmıştır. Yağın alınması ve ilk seferde hazırlanması ideal olarak ameliyathane şartlarında steril bir ortamda, lokal ve sedasyon anestezi altında gerçekleştirilmelidir. Küçük bir delikten girilerek sıklıkla karın bölgesinden alınır, o enjeksiyon için kullanılacak miktar işlemden geçirilir, geri kalan kısmı diğer seanslarda kullanılmak için dondurularak saklanır.",
          "Yağ veya hyaluronik asit dolgusu benzer şekilde uygulanır. Önce enjeksiyon yapılacak alanlar dezenfektanla silinir, yüzeye lokal anestezik içeren bir krem sürülür, hassasiyet azaltılır. Takiben hasta yarı oturur pozisyonda iken, hyaluronik asit ince uçlu hassas özel enjektörler, yağ ise özel kanüller kullanılarak yüzün farklı alanlarına hastanın ihtiyacına göre belirlenmiş dozlarda enjekte edilir.",
          "Hyaluronik asit enjeksiyonu uygulanacak hastalarda, tedavi altında olmayan epilepsi, hipertrofik nedbe eğilimi, hyaluronik asit veya lidokain alerjisi, hamilelik, çocukluk çağı, aktif akne, herpes ve iltihaplı dokular ve eş zamanlı lazer, dermabrazyon ile derin kimyasal peeling uygulaması, kontrendikasyon nedenidir.",
          "Diğer taraftan kan sulandırıcı ilaçlar, aspirin ve C vitamini kullanması, otoimmün hastalık, genel alerjik bünye, karaciğer hastalığı veya metabolizmasını bozan ilaç kullanımı, kardiyak blok hastalığı, streptokok enfeksiyonu varlığı ise dikkatli karar vermeyi gerektiren durumlardır.",
        ],
      },
      {
        heading: "Dolgu uygulaması sonrası nasıldır?",
        body: [
          "Yağ ve hyaluronik asit dolgu uygulaması sonrası enjeksiyon alanlarına uzman tarafından hafif masaj yapılması dengeli dağılım için önemlidir, sonrasında hafif soğuk uygulanır. Enjeksiyon noktalarında 1 hafta süreyle geçici ve hafif olmak üzere kızarıklık, morarma, kaşıntı, ağrı oluşabilir. Ancak bunların 12 saat geçtikten sonra makyajla kapatılmasında sakınca yoktur.",
          "Dolgu uygulanmış hastalar günlük yaşamlarında ilk 1 hafta krem kullanmamaya dikkat etmelidir. Hyaluronik asit dolgusunu takiben hastalar 2 hafta süreyle güneş, UV, 0 °C dereceden düşük soğuk, sauna ve hamamdan kaçınmalıdır. Yağ enjeksiyonunda bu kısıtlamalar daha gevşektir.",
          "Hastalar, ihtiyaca göre kontrol muayenesine çağırılır. Hyaluronik asit etki süresi 4-6 aydır. Yağın ise aylar içinde bir bölümü erir, bir bölümü ise varlığını sürdürür. Hastadan hastaya değişmek üzere bu süreyi takiben bu uygulamaların tekrarlanması gerekir.",
        ],
      },
    ],
  },
];

export const CONTENT_TR: ContentBundle = { categories, procedures };