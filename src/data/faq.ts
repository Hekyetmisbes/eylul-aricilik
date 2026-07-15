export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "genel" | "apiterapi" | "urunler";
}

export const faqList: FaqItem[] = [
  {
    id: "g1",
    question: "Eylül Arıcılık ürünleri hakkında nasıl bilgi alabilirim?",
    answer: "Web sitemiz e-ticaret sitesi değildir; arı ürünleri ve arıcılık ekipmanlarını tanıtan bilgilendirici bir katalogdur. Ürün grupları, kullanım ve saklama bilgileri için ürün kartlarındaki WhatsApp bağlantısından ya da 0538 862 56 31 numaralı telefondan bize ulaşabilirsiniz.",
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
    answer: "Apiterapi; bal, polen, propolis, arı sütü, arı ekmeği (perga), balmumu ve arı zehri gibi kovan ürünlerinin geleneksel kullanımı ile kontrollü hazırlanışını ele alan bilgilendirme alanıdır. Bu içerikler tıbbi tavsiye değildir ve profesyonel sağlık hizmetinin yerine geçmez.",
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
    answer: "Arı zehri, polen ve propolis başta olmak üzere arı ürünleri bazı bireylerde ciddi alerjik reaksiyonlara yol açabilir. Arı sokmasına, polene veya arı ürünlerine duyarlılığı olan kişilerin kullanımdan önce nitelikli bir sağlık uzmanına danışması gerekir. 1 yaşından küçük çocuklara bal verilmemelidir.",
    category: "apiterapi"
  },
  {
    id: "a4",
    question: "Apiterapi laboratuvarında hangi kontroller yapılır?",
    answer: "Hammadde kabulü, fiziksel hazırlık, analiz ve kontrol, kontrollü üretim, paketleme ve parti numarasıyla kayıt altına alma; Eylül Arıcılık'ın apiterapi laboratuvarı süreçlerinin temel adımlarıdır. Kontroller ürün bilgisini ve izlenebilirliği desteklemek için yürütülür.",
    category: "apiterapi"
  },
  {
    id: "u1",
    question: "Arıcılık ekipmanları arasında neler bulunur?",
    answer: "Eylül Arıcılık kataloğunda kovan ve çıtalar, arıcı körüğü, bal süzgeci, koruyucu tulum ve eldiven, temel petek, arı besleme ürünleri ile cam kavanoz ve ambalaj seçenekleri yer alır. Ürünlerin teknik özellikleri için kataloğu inceleyebilir veya doğrudan bilgi alabilirsiniz.",
    category: "urunler"
  }
];
