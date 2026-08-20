/* ÖZGEÇMİŞ METNİ
   Sayfa yalnızca bu dosyayı okur. Metni düzenlemek veya
   paragraf sırasını değiştirmek için burası yeterli.

   Ara başlık YOK: BIOGRAPHY düz bir paragraf dizisidir,
   sırayla tek bir metin bloğu olarak dizilir. */

export const PROFILE = {
  fullName: "Prof. Dr. Zehra Burçak Tümerdem Uluğ",
  displayFirst: "Prof. Dr. Z. Burçak",
  displayLast: "Tümerdem Uluğ",
  specialty: "Plastik, Rekonstrüktif ve Estetik Cerrahi",

  /* Fotoğrafı public/doctor/ klasörüne koy. Dikey kadraj (3:4) uygun. */
  portrait: "/doctor/white-shirt.png",
  portraitAlt: "Prof. Dr. Burçak Tümerdem Uluğ portre fotoğrafı",

  /* Giriş cümlesi — gövdeden daha iri dizilir. */
  intro:
    "Prof. Dr. Z. Burçak Tümerdem Uluğ, Plastik Rekonstrüktif ve Estetik Cerrahi uzmanıdır.",
};

/* Her eleman bir paragraf. */
export const BIOGRAPHY: string[] = [
  "Prof. Dr. Tümerdem Uluğ, 1989 yılında Kadıköy Anadolu Lisesi'ni bitirdikten sonra 1995 yılında İstanbul Üniversitesi İstanbul Tıp Fakültesi'nden dönem birincisi olarak mezun olmuştur. 1997-2003 yılları arasında aynı fakültede Plastik Rekonstrüktif ve Estetik Cerrahi uzmanlık eğitimini tamamlamıştır. Uzmanlık tezi, İstanbul Tabip Odası tarafından 2003 yılında düzenlenen \u201DDr. Cengiz Çetin-Asistan Tez Yarışması\u201Dnda üçüncülük ödülüne layık görülmüştür.",

  "Prof. Dr. Tümerdem Uluğ; 1999 yılında Londra'da \u201CHarley Clinic\u201Dde Dr. Basim A. Matti, 2001 yılında Boston'da \u201CHarvard Medical School/Massachusetts General Hospital\u201Dda Dr. James W. May, yine aynı yıl Detroit'te \u201CInstitute for Craniofacial and Reconstructive Surgery affiliated with Providence Hospital\u201Dda Dr. Ian T. Jackson, ve 2003 yılında Paris'te \u201CL'Hopital Necker\u201Dde Dr. Daniel Marchac gözetiminde farklı sürelerle \u201CObservership\u201D yapmıştır.",

  "Prof. Dr. Tümerdem Uluğ, 2004-2012 yılları arasında Maltepe Üniversitesi Tıp Fakültesi Plastik Rekonstrüktif ve Estetik Cerrahi Anabilim Dalı’nda öğretim üyesi olarak görev yapmış ve 2010 yılında doçentlik ünvanı almıştır. 2020 yılında profesörlük unvanını aldığı Üsküdar Üniversitesi’nde hâlâ Tıp Fakültesi Plastik Rekonstrüktif ve Estetik Cerrahi Anabilim Dalı’nda anabilim dalı başkanlığını sürdürmektedir.",

  "Prof. Dr. Tümerdem Uluğ'un 28'i uluslararası ve 17'si ulusal olmak üzere 45 adet bilimsel makalesi mevcuttur. Ayrıca Dr. Melvin Shiffman editörlüğünde 2009 yılında basılan \u201CMastopexy and Breast Reduction\u201D isimli uluslararası kitapta bölüm yazarlığı bulunmaktadır.",

  "Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği, Türk Rekonstrüktif Mikrocerrahi Derneği ve Estetik Plastik Cerrahi Derneği üyesidir.",

  "Prof. Dr. Tuncay Uluğ ile evli olan Prof. Dr. Tümerdem Uluğ iki çocuk annesidir ve mesleğini serbest olarak devam ettirmektedir.",
];

/* Yalnızca arama motoru için; sayfada liste olarak gösterilmiyor. */
export const MEMBERSHIPS: string[] = [
  "Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği",
  "Türk Rekonstrüktif Mikrocerrahi Derneği",
  "Estetik Plastik Cerrahi Derneği",
];