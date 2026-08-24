/* KVKK AYDINLATMA METNİ
   ---------------------------------------------------------------
   DİKKAT: Bu metin çalışan bir taslaktır, hukuki görüş değildir.
   Yayına almadan önce bir hukuk danışmanına inceletilmesi gerekir.
   Özellikle aktarım, saklama süresi ve yurt dışı aktarım bölümleri
   kliniğin fiili işleyişine göre düzenlenmelidir.

   İKİ DİL: Bağlayıcı metin TÜRKÇE olandır. İngilizce sürüm yalnızca
   yabancı hastaların bilgilenmesi içindir ve hukuki bir sonuç
   doğurmaz; bu, en.disclaimer alanında sayfada da belirtilir.
   Türkçe metin her güncellendiğinde İngilizcesi de güncellenmelidir.

   Metin akıcı paragraflar hâlinde yazıldı; madde listesi yerine
   noktalı virgülle ayrılmış sayımlar kullanıldı. Sayfa yalnızca
   bu dosyayı okur. ------------------------------------------- */

import type { Locale } from "@/lib/i18n";

export type KvkkSection = {
  heading: string;
  paragraphs: string[];
};

export type KvkkMeta = {
  /* Metni her güncellediğinde bu tarihi de güncelle. */
  updatedAt: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  /* "Son güncelleme" etiketi. */
  updatedLabel: string;
  /* Yalnızca İngilizcede dolu: çevirinin bağlayıcı olmadığı notu. */
  disclaimer?: string;
};

export type KvkkBundle = {
  meta: KvkkMeta;
  sections: KvkkSection[];
};

/* ---------------- Türkçe (bağlayıcı metin) ---------------- */

const tr: KvkkBundle = {
  meta: {
    updatedAt: "2026-08-19",
    title: "Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni",
    intro:
      "6698 sayılı Kişisel Verilerin Korunması Kanunu (\u201CKanun\u201D) kapsamında, veri sorumlusu sıfatıyla kişisel verilerinizin hangi amaçlarla işlendiği, kimlere aktarılabileceği ve bu konudaki haklarınız aşağıda açıklanmıştır.",
    metaTitle: "KVKK Aydınlatma Metni | Prof. Dr. Z. Burçak Tümerdem Uluğ",
    metaDescription:
      "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanan aydınlatma metni.",
    updatedLabel: "Son güncelleme",
  },

  sections: [
    {
      heading: "Veri sorumlusu",
      paragraphs: [
        "Kişisel verileriniz, veri sorumlusu sıfatıyla Prof. Dr. Z. Burçak Tümerdem Uluğ tarafından, aşağıda açıklanan kapsam ve koşullarda işlenmektedir. Muayenehane adresi Osmanağa Mahallesi, Mürver Çiçeği Sokak No:10/3 K:1, Kadıköy — İstanbul'dur; iletişim için +90 531 297 31 72 numaralı telefon ile info@burcaktumerdemulug.com adresi kullanılabilir.",
        "DOLDURULACAK: VERBİS sicil bilgisi, KEP adresi ve vergi kimlik numarası bu paragrafa eklenecek.",
      ],
    },
    {
      heading: "İşlenen kişisel verileriniz",
      paragraphs: [
        "Sağlık hizmetinin niteliği gereği; ad, soyad, T.C. kimlik numarası ve doğum tarihi gibi kimlik verileriniz, telefon numarası, e-posta adresi ve adres gibi iletişim verileriniz, şikâyet ve öykü bilgileriniz, muayene ve tanı bulgularınız, tetkik ve tahlil sonuçlarınız, uygulanan tedavi ve ameliyat kayıtlarınız, kullandığınız ilaçlar ve alerji bilgileriniz gibi özel nitelikli sağlık verileriniz, tıbbi değerlendirme ve tedavi takibi amacıyla açık rızanız alınarak çekilen klinik fotoğraflarınız, fatura bilgileri, ödeme kayıtları ve varsa sigorta bilgileriniz gibi finansal verileriniz ile internet sitesinin kullanımına ilişkin log kayıtları ve çerez verileriniz işlenebilmektedir.",
      ],
    },
    {
      heading: "İşleme amaçları",
      paragraphs: [
        "Kişisel verileriniz; kamu sağlığının korunması, koruyucu hekimlik, tıbbi teşhis, tedavi ve bakım hizmetlerinin yürütülmesi, randevunuzun oluşturulması ve hatırlatılması, hasta kayıtlarının tutulması, ameliyat öncesi hazırlık ile ameliyat sonrası takip süreçlerinin yönetilmesi, sağlık hizmetinin finansmanının planlanması ile faturalandırma ve muhasebe işlemlerinin yürütülmesi, ilgili mevzuattan doğan kayıt, bildirim ve saklama yükümlülüklerinin yerine getirilmesi, tarafınızdan iletilen talep ve şikâyetlerin karşılanması ve hukuki uyuşmazlıklarda ispat yükümlülüğünün yerine getirilerek hakların korunması amaçlarıyla işlenmektedir.",
      ],
    },
    {
      heading: "Hukuki sebepler",
      paragraphs: [
        "Kimlik, iletişim ve finansal verileriniz; Kanun'un 5. maddesinin ikinci fıkrasında yer alan kanunlarda açıkça öngörülme, sözleşmenin kurulması veya ifası için gerekli olma, veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi, bir hakkın tesisi ve kullanılması ile temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaat hukuki sebeplerine dayanılarak işlenmektedir.",
        "Sağlık verileriniz ve klinik görsel kayıtlarınız ise Kanun'un 6. maddesinin üçüncü fıkrası uyarınca, sır saklama yükümlülüğü altında bulunan sağlık personeli tarafından, tıbbi teşhis ile tedavi ve bakım hizmetlerinin yürütülmesi amacıyla işlenmektedir. Bu kapsamın dışında kalan her türlü işleme faaliyeti yalnızca açık rızanıza dayanılarak gerçekleştirilir ve açık rızanızı dilediğiniz zaman geri alabilirsiniz.",
      ],
    },
    {
      heading: "Kişisel verilerin aktarılması",
      paragraphs: [
        "Kişisel verileriniz, Kanun'un 8. ve 9. maddelerinde öngörülen şartlara uygun olarak ve yalnızca gerekli olduğu ölçüde; ameliyatın gerçekleştirildiği hastane ve sağlık kuruluşları ile ameliyat ekibinde yer alan sağlık personeline, tahlil, patoloji ve görüntüleme hizmeti alınan laboratuvar ve merkezlere, Sağlık Bakanlığı, Sosyal Güvenlik Kurumu ve adli makamlar başta olmak üzere yetkili kamu kurum ve kuruluşlarına, mali müşavirlik, hukuk danışmanlığı ve bilişim altyapısı hizmeti alınan iş ortakları ile tedarikçilere ve talebiniz hâlinde belirteceğiniz üçüncü kişiler ile yakınlarınıza aktarılabilmektedir.",
        "DOLDURULACAK: İnternet sitesi ve elektronik posta altyapısının yurt dışında barındırılması hâlinde, yurt dışına aktarıma ilişkin açıklama ve hukuki dayanak bu bölüme eklenecek.",
      ],
    },
    {
      heading: "Toplama yöntemi",
      paragraphs: [
        "Kişisel verileriniz; muayene ve konsültasyon sırasında sözlü ve yazılı olarak, doldurduğunuz hasta kayıt ve onam formları aracılığıyla, telefon, WhatsApp ve elektronik posta üzerinden kurduğunuz iletişim yoluyla, internet sitesi üzerinden ilettiğiniz talepler ve çerezler aracılığıyla, kısmen otomatik ve otomatik olmayan yöntemlerle toplanmaktadır.",
      ],
    },
    {
      heading: "Saklama süresi",
      paragraphs: [
        "Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen asgari saklama süreleri kadar muhafaza edilir. Sürenin sona ermesi hâlinde verileriniz silinir, yok edilir veya anonim hâle getirilir.",
        "DOLDURULACAK: Hasta dosyaları, mali kayıtlar ve klinik görsel kayıtlar için uygulanacak saklama süreleri, ilgili mevzuat esas alınarak hukuk danışmanıyla birlikte belirlenecek.",
      ],
    },
    {
      heading: "İlgili kişi olarak haklarınız",
      paragraphs: [
        "Kanun'un 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme, Kanun'un 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme, düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemler aracılığıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.",
      ],
    },
    {
      heading: "Başvuru yöntemi",
      paragraphs: [
        "Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ'de belirtilen şartlara uygun olarak yazılı biçimde muayenehane adresine iletebilir veya sistemimizde kayıtlı elektronik posta adresinizi kullanarak info@burcaktumerdemulug.com adresine gönderebilirsiniz. Başvurunuzda ad, soyad, imza, T.C. kimlik numarası, tebligata esas adres ve talep konusunun açıkça yer alması gerekir.",
        "Talebiniz, niteliğine göre en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılır; işlemin ayrıca bir maliyet gerektirmesi hâlinde Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret talep edilebilir.",
      ],
    },
    {
      heading: "Çerezler",
      paragraphs: [
        "İnternet sitemizde, sitenin çalışabilmesi için zorunlu olan çerezler kullanılmaktadır. Tarayıcı ayarlarınızı değiştirerek çerezleri engelleyebilir veya silebilirsiniz; bu durumda sitenin bazı bölümleri beklendiği gibi çalışmayabilir.",
        "DOLDURULACAK: Analitik veya pazarlama çerezi kullanılacaksa ayrı bir çerez politikası hazırlanacak ve onay mekanizması eklenecek.",
      ],
    },
    {
      heading: "Metnin güncellenmesi",
      paragraphs: [
        "Bu aydınlatma metni, mevzuattaki değişiklikler ve klinik uygulamalarındaki gelişmeler doğrultusunda güncellenebilir. Güncel metin her zaman bu sayfada yayımlanır.",
      ],
    },
  ],
};

/* ---------------- İngilizce (bilgilendirme amaçlı çeviri) ---------------- */

const en: KvkkBundle = {
  meta: {
    updatedAt: "2026-08-19",
    title: "Personal Data Protection and Processing Notice",
    intro:
      "This notice explains, under Turkish Personal Data Protection Law No. 6698 (the \u201CLaw\u201D), the purposes for which your personal data are processed in our capacity as data controller, to whom they may be transferred, and your rights in this regard.",
    metaTitle: "Data Protection Notice | Prof. Dr. Z. Burçak Tümerdem Uluğ",
    metaDescription:
      "Privacy notice prepared under Turkish Personal Data Protection Law No. 6698.",
    updatedLabel: "Last updated",
    disclaimer:
      "This English text is provided for information only. The binding version of this notice is the Turkish one; in the event of any discrepancy, the Turkish text prevails.",
  },

  sections: [
    {
      heading: "Data controller",
      paragraphs: [
        "Your personal data are processed by Prof. Dr. Z. Burçak Tümerdem Uluğ, acting as data controller, within the scope and under the conditions set out below. The practice address is Osmanağa Mahallesi, Mürver Çiçeği Sokak No:10/3 K:1, Kadıköy — Istanbul; you may make contact by telephone on +90 531 297 31 72 or by email at info@burcaktumerdemulug.com.",
        "TO BE COMPLETED: VERBİS registry details, the registered electronic mail (KEP) address and the tax identification number are to be added to this paragraph.",
      ],
    },
    {
      heading: "Personal data processed",
      paragraphs: [
        "Given the nature of healthcare services, the following may be processed: identity data such as your name, surname, Turkish identity number and date of birth; contact data such as your telephone number, email address and postal address; special categories of health data such as your symptoms and medical history, examination and diagnostic findings, test and laboratory results, records of the treatment and surgery performed, the medication you take and your allergies; clinical photographs taken with your explicit consent for the purposes of medical assessment and follow-up; financial data such as invoice details, payment records and insurance information where applicable; and log records and cookie data relating to your use of the website.",
      ],
    },
    {
      heading: "Purposes of processing",
      paragraphs: [
        "Your personal data are processed for the following purposes: the protection of public health, preventive medicine, and the provision of medical diagnosis, treatment and care services; creating and reminding you of your appointment; maintaining patient records; managing preoperative preparation and postoperative follow-up; planning the financing of healthcare services and carrying out invoicing and accounting operations; fulfilling the record-keeping, notification and retention obligations arising from applicable legislation; responding to the requests and complaints you submit; and protecting rights by meeting the burden of proof in the event of a legal dispute.",
      ],
    },
    {
      heading: "Legal grounds",
      paragraphs: [
        "Your identity, contact and financial data are processed on the legal grounds set out in the second paragraph of Article 5 of the Law: express provision in law; necessity for the establishment or performance of a contract; compliance with a legal obligation of the data controller; the establishment and exercise of a right; and legitimate interest, provided that this does not harm your fundamental rights and freedoms.",
        "Your health data and clinical images are processed under the third paragraph of Article 6 of the Law by healthcare personnel under a duty of confidentiality, for the purposes of medical diagnosis and the provision of treatment and care services. Any processing falling outside this scope is carried out solely on the basis of your explicit consent, which you may withdraw at any time.",
      ],
    },
    {
      heading: "Transfer of personal data",
      paragraphs: [
        "In accordance with the conditions set out in Articles 8 and 9 of the Law, and only to the extent necessary, your personal data may be transferred to: the hospitals and healthcare institutions where surgery is performed and the healthcare personnel forming part of the surgical team; the laboratories and centres providing testing, pathology and imaging services; authorised public institutions and bodies, principally the Ministry of Health, the Social Security Institution and the judicial authorities; business partners and suppliers providing accountancy, legal advisory and IT infrastructure services; and, at your request, third parties and relatives you nominate.",
        "TO BE COMPLETED: Where the website and email infrastructure are hosted abroad, an explanation of the international transfer and its legal basis is to be added to this section.",
      ],
    },
    {
      heading: "Method of collection",
      paragraphs: [
        "Your personal data are collected by partly automated and non-automated means: verbally and in writing during examination and consultation; through the patient registration and consent forms you complete; through contact made by telephone, WhatsApp and email; and through requests submitted via the website and through cookies.",
      ],
    },
    {
      heading: "Retention period",
      paragraphs: [
        "Your personal data are retained for as long as the purpose of processing requires and for the minimum retention periods prescribed by applicable legislation. Once that period expires, your data are erased, destroyed or anonymised.",
        "TO BE COMPLETED: The retention periods to be applied to patient files, financial records and clinical images are to be determined together with legal counsel, on the basis of the applicable legislation.",
      ],
    },
    {
      heading: "Your rights as a data subject",
      paragraphs: [
        "Under Article 11 of the Law you have the right to: learn whether your personal data are being processed; request information if they have been processed; learn the purpose of processing and whether they are used in accordance with that purpose; know the third parties within Türkiye or abroad to whom they have been transferred; request rectification where they have been processed incompletely or inaccurately; request erasure or destruction within the conditions set out in Article 7 of the Law; request that rectification, erasure and destruction be notified to the third parties to whom the data have been transferred; object to an outcome adverse to you arising from analysis carried out exclusively by automated systems; and claim compensation where you suffer loss as a result of the unlawful processing of your personal data.",
      ],
    },
    {
      heading: "How to submit a request",
      paragraphs: [
        "You may submit requests concerning your rights in writing to the practice address, in accordance with the conditions set out in the Communiqué on the Procedures and Principles of Application to the Data Controller, or send them to info@burcaktumerdemulug.com using the email address registered in our system. Your application must clearly state your name, surname, signature, Turkish identity number, an address for service and the subject of your request.",
        "Depending on its nature, your request will be concluded free of charge as soon as possible and within thirty days at the latest; where the process entails an additional cost, the fee set out in the tariff determined by the Personal Data Protection Board may be charged.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "Our website uses cookies that are strictly necessary for the site to function. You may block or delete cookies by changing your browser settings; in that case some parts of the site may not work as expected.",
        "TO BE COMPLETED: If analytics or marketing cookies are to be used, a separate cookie policy is to be prepared and a consent mechanism added.",
      ],
    },
    {
      heading: "Updates to this notice",
      paragraphs: [
        "This notice may be updated in line with changes in legislation and developments in the practice's procedures. The current version is always published on this page.",
      ],
    },
  ],
};

const BUNDLES: Record<Locale, KvkkBundle> = { tr, en };

export function getKvkk(locale: Locale): KvkkBundle {
  return BUNDLES[locale];
}