/* KVKK AYDINLATMA METNİ
   ---------------------------------------------------------------
   DİKKAT: Bu metin çalışan bir taslaktır, hukuki görüş değildir.
   Yayına almadan önce bir hukuk danışmanına inceletilmesi gerekir.
   Özellikle aktarım, saklama süresi ve yurt dışı aktarım bölümleri
   kliniğin fiili işleyişine göre düzenlenmelidir.

   Metin akıcı paragraflar hâlinde yazıldı; madde listesi yerine
   noktalı virgülle ayrılmış sayımlar kullanıldı. Sayfa yalnızca
   bu dosyayı okur. ------------------------------------------- */

export const KVKK_META = {
  /* Metni her güncellediğinde bu tarihi de güncelle. */
  updatedAt: "2026-08-19",
  title: "Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni",
  intro:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu (\u201CKanun\u201D) kapsamında, veri sorumlusu sıfatıyla kişisel verilerinizin hangi amaçlarla işlendiği, kimlere aktarılabileceği ve bu konudaki haklarınız aşağıda açıklanmıştır.",
};

export type KvkkSection = {
  heading: string;
  paragraphs: string[];
};

export const KVKK_SECTIONS: KvkkSection[] = [
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
];