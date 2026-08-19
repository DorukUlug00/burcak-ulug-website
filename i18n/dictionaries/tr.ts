/* TÜRKÇE SÖZLÜK — kaynak dosya
   ---------------------------------------------------------------
   Burası arayüz metinlerinin tek kaynağı. Uzun içerikler (özgeçmiş
   yazısı, ameliyat açıklamaları, KVKK metni) buraya girmez; onlar
   lib/ altındaki *.tr.ts / *.en.ts dosyalarında durur.

   Bu dosyaya bir anahtar eklediğinde en.ts derlenmez — eksik
   çeviriyi TypeScript sana söyler. Kasıtlı olarak böyle.
--------------------------------------------------------------- */

export const tr = {
  nav: {
    ariaLabel: "Sabit menü",
    home: "Ana Sayfa",
    cv: "Özgeçmiş",
    procedures: "Ameliyatlar",
    media: "Medya",
    patientInfo: "Hasta Bilgilendirme",
    kvkk: "KVKK",
    contact: "İletişim",
    generalInfo: "Genel Bilgi",
    openSubmenu: "alt menüsünü aç",
    closeSubmenu: "alt menüsünü kapat",
    openMenu: "Menüyü aç",
  },

  common: {
    readMore: "Devamını oku",
    backToTop: "Yukarı dön",
    loading: "Yükleniyor",
    breadcrumbLabel: "Konum",
    languageLabel: "Dil",
  },

  home: {
    heroEyebrow: "Plastik ve Estetik Cerrahi · İstanbul",
    whatsapp: "WhatsApp'tan yazın",
    contactDetails: "İletişim bilgileri",
  },

  contact: {
    eyebrow: "İletişim",
    title: "Randevu ve",
    titleAccent: "iletişim",
    intro:
      "Estetik, Plastik ve Rekonstrüktif Cerrahi alanına giren her konuda danışma, muayene, girişim ve ameliyatlarla ilgili bilgi için aşağıdaki kanallardan ulaşabilirsiniz.",
    phone: "Telefon",
    phoneNote: "Randevu ve bilgi için arayın",
    whatsapp: "WhatsApp",
    whatsappNote: "Yazılı görüşmeyi tercih edenler için",
    email: "E-posta",
    emailNote: "Ayrıntılı sorular ve belgeler",
    address: "Adres",
    directions: "Yol tarifi al",
    hours: "Çalışma saatleri",
    sunday: "Pazar",
    closedLabel: "Kapalı",
    openNow: "Şu anda açık",
    closedNow: "Şu anda kapalı",
    mapTitle: "Klinik konumu — Google Haritalar",
    privacyNote:
      "İlettiğiniz kişisel veriler yalnızca randevu ve bilgilendirme amacıyla işlenir. Ayrıntı için",
    kvkkLink: "KVKK Aydınlatma Metni",
  },

  form: {
    name: "Ad soyad",
    phone: "Telefon",
    optional: "(isteğe bağlı)",
    topic: "Konu",
    message: "Mesajınız",
    topicAppointment: "Randevu talebi",
    topicProcedure: "Ameliyat hakkında bilgi",
    topicFollowUp: "Ameliyat sonrası takip",
    topicOther: "Diğer",
    healthDataNote:
      "Sağlık geçmişinize dair ayrıntıları lütfen buraya yazmayın; bunları muayenede paylaşabilirsiniz.",
    consent:
      "'ni okudum; mesajımın iletişim amacıyla işlenmesini kabul ediyorum.",
    sendWhatsApp: "WhatsApp ile gönder",
    sendEmail: "E-posta ile gönder",
    deliveryNote:
      "Seçtiğiniz uygulama, mesajınız hazır olarak açılır. Gönderimi siz onaylarsınız; bu sayfa hiçbir bilgiyi kaydetmez.",
    errorName: "Lütfen adınızı yazın.",
    errorMessage: "Lütfen mesajınızı biraz daha ayrıntılı yazın.",
    errorConsent: "Devam etmek için onay vermeniz gerekir.",
  },

  media: {
    eyebrow: "Medya",
    title: "Söyleşiler ve",
    titleAccent: "kareler",
    intro:
      "Televizyon ve gazete söyleşileri, bilimsel kongre sunumları ve klinikten kareler.",
    filterAll: "Tümü",
    filterVideo: "Video",
    filterPress: "Basında",
    groupVideo: "Televizyon programları",
    groupPress: "Basında",
    play: "oynat",
    zoom: "büyüt",
    close: "Kapat",
    previous: "Önceki",
    next: "Sonraki",
    empty: "Bu bölümde henüz içerik yok.",
  },

  procedures: {
    eyebrow: "Ameliyatlar",
    title: "Uygulanan",
    titleAccent: "işlemler",
    intro:
      "Aşağıdaki başlıklar genel bilgilendirme içindir. Hangi yöntemin size uygun olduğu, muayene sonrasında birlikte kararlaştırılır.",
    generalInfo: "Genel bilgi",
    faqHeading: "Sık sorulan sorular",
    inCategory: "Bu başlık altındaki ameliyatlar",
    pending:
      "Bu sayfanın içeriği hazırlanıyor. Bilgi almak için klinikle iletişime geçebilirsiniz.",
    disclaimer:
      "Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır; hekim muayenesi, tanı veya tedavinin yerine geçmez. Uygulanacak yöntem ve sonuçlar kişiden kişiye değişir.",
  },

  footer: {
    pages: "Sayfalar",
    contact: "İletişim",
    legalTitle: "Yasal uyarı",
    legalOne:
      "Bu sitede yer alan içerikler yalnızca genel bilgilendirme amaçlıdır; hekim muayenesi, tanı veya tedavinin yerine geçmez. Cerrahi sonuçlar kişiden kişiye değişir ve hiçbir sonuç taahhüt edilmez.",
    legalTwo:
      "1219 sayılı Kanun ve Sağlık Bakanlığı'nın tanıtım mevzuatı uyarınca bu sitede tedavi edici sağlık hizmetlerine yönelik reklam ve yönlendirici içerik bulunmamaktadır.",
    rights: "Tüm hakları saklıdır.",
    ip: "Sitedeki metin, görsel ve tasarımlar izinsiz kullanılamaz, kopyalanamaz ve çoğaltılamaz.",
  },

  notFound: {
    title: "Sayfa bulunamadı",
    body: "Aradığınız sayfa taşınmış veya kaldırılmış olabilir.",
    back: "Ana sayfaya dön",
  },
};

/* en.ts bu tipe uymak zorunda. */
export type Dictionary = typeof tr;