export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "genel" | "apiterapi" | "urunler";
}

export const faqList: FaqItem[] = [
  {
    id: "g1",
    question: "Eylül Arıcılık ürünlerini nasıl satın alabilirim?",
    answer: "Web sitemiz bir e-ticaret sitesi değildir; ürünlerimizi tanıtan bilgilendirici bir katalogdur. Ürünlerimiz, stok durumları ve sipariş detayları hakkında bilgi almak için ürün kartlarındaki veya iletişim sayfamızdaki WhatsApp butonu ya da telefon numaramız (0538 862 56 31) üzerinden doğrudan bizimle iletişime geçebilirsiniz.",
    category: "genel"
  },
  {
    id: "g2",
    question: "Hanak balını diğer ballardan ayıran özellik nedir?",
    answer: "Ardahan Hanak yöresi, yüksek rakımı (ortalama 1800m+) ve sanayi tesislerinden uzak, tamamen bakir doğasıyla bilinir. Bölgedeki zengin flora, yüzlerce çeşit endemik kır çiçeği içerir. Bu çiçeklerin nektarından üretilen Hanak balı, yüksek polen çeşitliliği, kendine has aroması ve yüksek enzim değerleriyle oldukça kıymetli ve tescilli bir bal türüdür.",
    category: "urunler"
  },
  {
    id: "g3",
    question: "Karakovan balı ile fenni kovan balı arasındaki fark nedir?",
    answer: "Karakovan balında petek tamamen arının kendisi tarafından (salgıladığı balmumu ile) örülür, dışarıdan yapay petek verilmez. Süzme çiçek balında ise genellikle fenni kovanlar kullanılır ve arılara hazır balmumu petek temelleri verilerek balı gözeneklere doldurmaları sağlanır. Karakovan balında petek de tamamen yenilebilir doğallıktadır.",
    category: "urunler"
  },
  {
    id: "a1",
    question: "Apiterapi nedir ve hangi ürünleri kapsar?",
    answer: "Apiterapi, bal, polen, propolis, arı sütü, arı ekmeği (perga), balmumu ve arı zehri gibi kovan ürünlerinin sağlık ve zindeliği desteklemek amacıyla geleneksel olarak kullanılması yöntemidir. Bu uygulamalar tedavi amaçlı tıbbi müdahalelerin yerine geçmez, sadece destekleyici ve besleyici amaçlıdır.",
    category: "apiterapi"
  },
  {
    id: "a2",
    question: "Laboratuvarınızın analiz ve kontrol süreçleri nasıl çalışıyor?",
    answer: "Modern apiterapi laboratuvarımızda hammaddelerin kabulünden paketlemeye kadar tüm süreçler hijyenik kurallara uygun olarak yürütülür. Ballarımızın nem, HMF (hidroksimetilfurfural), şeker profili ve saflık dereceleri incelenir. Propolis özütlerimiz ise etken madde standardizasyonu sağlanarak, alkolsüz yöntemlerle ekstrakte edilir.",
    category: "apiterapi"
  },
  {
    id: "a3",
    question: "Arı ürünleri tüketiminde alerji riski nedir?",
    answer: "Arı zehri, polen ve propolis başta olmak üzere tüm arı ürünleri, bazı bireylerde şiddetli alerjik reaksiyonlara (anafilaksi dahil) yol açabilir. Özellikle astım, saman nezlesi veya arı sokmasına karşı duyarlılığı olan kişilerin bu ürünleri tüketmeden veya cildine uygulamadan önce mutlaka nitelikli bir sağlık uzmanına (hekim) danışması gerekmektedir. 1 yaşından küçük çocuklara kesinlikle bal ve arı ürünleri verilmemelidir.",
    category: "apiterapi"
  }
];
