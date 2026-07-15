export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  features?: string[];
  storage?: string;
  warning?: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "karakovan-bali",
    name: "Hanak Karakovan Balı",
    slug: "hanak-karakovan-bali",
    category: "bal",
    shortDescription: "Ardahan Hanak yaylalarındaki karakovanlarda tamamen arıların kendi ördüğü peteklerle üretilen hakiki, katkısız bal.",
    description: "Hanak Karakovan Balı, Ardahan'ın yüksek rakımlı yaylalarında yetişen yüzlerce çeşit endemik kır çiçeğinin nektarından üretilir. İnsan müdahalesi olmadan, karanlık karakovan kovanlarında arının kendi mum salgısıyla ördüğü peteklerde olgunlaştırılır. Hiçbir katkı maddesi, şeker şurubu veya yapay petek içermez.",
    features: [
      "Ardahan Hanak yöresine ait tescilli floradan elde edilmiştir",
      "Tamamen doğal ve el değmeden üretilen kasnak petek yapısı",
      "Yüksek nektar kalitesi ve yoğun aromatik lezzet",
      "Analiz edilmiş ve saflığı onaylanmış ürün güvencesi"
    ],
    storage: "Serin, kuru ve ışık almayan oda sıcaklığında (18-24°C) saklayınız. Balın kristalleşmesi doğal bir durumdur ve saflığının göstergesidir.",
    warning: "1 yaşından küçük bebeklere bal yedirilmemelidir. Arı ürünlerine karşı alerjisi veya hassasiyeti olan kişilerin dikkatli tüketmesi önerilir.",
    image: "/assets/products-webp/hanak-karakovan-bali.webp",
    imageAlt: "Hanak Karakovan Balı ahşap kasnakta doğal petek görünümü",
    featured: true
  },
  {
    id: "suzme-cicek-bali",
    name: "Süzme Çiçek Balı (Hanak Yayla)",
    slug: "suzme-cicek-bali-hanak",
    category: "bal",
    shortDescription: "Yüksek rakımlı Hanak yaylalarının kır çiçeklerinden elde edilen, soğuk süzüm tekniğiyle şişelenmiş saf çiçek balı.",
    description: "Hanak Yayla Süzme Çiçek Balı, bölgenin eşsiz kır çiçeklerinden elde edilir. Modern ve hijyenik laboratuvarımızda, balın besin değerlerini ve enzim kalitesini korumak amacıyla soğuk süzüm tekniği kullanılarak peteklerden ayrıştırılır ve ambalajlanır. Kahvaltılarınız ve sağlıklı tarifleriniz için en temiz enerji kaynağıdır.",
    features: [
      "Katkısız ve şeker ilavesiz saf süzme çiçek balı",
      "Isıl işlem görmeden soğuk sağım yöntemiyle şişelenmiştir",
      "Hafif ve çiçeksi aromatik profil",
      "Hanak yöresinin zengin polen yapısını barındırır"
    ],
    storage: "Oda sıcaklığında, nemden uzak ve doğrudan güneş ışığı almayan alanlarda muhafaza ediniz.",
    warning: "1 yaşından küçük çocukların tüketimine uygun değildir.",
    image: "/assets/products-webp/suzme-cicek-bali-hanak.webp",
    imageAlt: "Hanak Yayla Süzme Çiçek Balı kavanozu",
    featured: true
  },
  {
    id: "sivi-propolis-ozutu",
    name: "Su Bazlı Sıvı Propolis Özütü",
    slug: "su-bazli-sivi-propolis-ozutu",
    category: "propolis",
    shortDescription: "Eylül Arıcılık laboratuvarında yüksek saflıkta ekstrakte edilen, alkol içermeyen su bazlı propolis damlası.",
    description: "Laboratuvarımızda controlled süreçlerle hazırlanan bu propolis özütü, yüksek biyoaktif bileşen oranına sahiptir. Alkol veya yapay çözücüler içermez. Arıların kovanı korumak için ürettiği bu doğal reçinemsi madde, saflığı bozulmadan su bazlı olarak standardize edilmiştir. Günlük kullanım için son derece uygundur.",
    features: [
      "Alkol, gluten ve renklendirici içermez",
      "Standardize edilmiş etken madde oranı",
      "Eylül Arıcılık laboratuvarında kontrollü ekstraksiyon süreci",
      "Pratik damlalıklı emniyet kilitli cam şişede sunum"
    ],
    storage: "Oda sıcaklığında, kuru yerde muhafaza ediniz. Güneş ışığından koruyunuz.",
    warning: "Arı ürünlerine alerjisi olanlarda alerjik reaksiyon riski taşıyabilir. Astım ve ağır alerji geçmişi olan kişilerin kullanım öncesinde doktora danışması önerilir. İlaç değildir.",
    image: "/assets/products-webp/su-bazli-sivi-propolis-ozutu.webp",
    imageAlt: "Damlalıklı cam şişede su bazlı sıvı propolis özütü",
    featured: true
  },
  {
    id: "taze-ari-ekmegi",
    name: "Taze Arı Ekmeği (Perga)",
    slug: "taze-ari-ekmegi-perga",
    category: "ari-ekmegi",
    shortDescription: "Arıların poleni bal ve kendi enzimleri ile kovan petek gözlerinde fermente ederek ürettiği doğal besin (Perga).",
    description: "Arı ekmeği (Perga), çiçek polenlerinin arıların salgıları ve bal ile petek gözlerinde mayalanmasıyla oluşur. Bu fermantasyon süreci, polenin sert dış kabuğunu kırarak besin değerlerinin insan sindirim sistemi tarafından maksimum düzeyde emilmesini sağlar. Doğal vitamin, mineral ve laktik asit bakterileri yönünden son derece zengindir.",
    features: [
      "Kolay sindirilebilir doğal fermente arı ürünü",
      "Zengin amino asit, mineral ve B grubu vitaminleri",
      "Hanak kır çiçeklerinin özünü barındırır",
      "Hiçbir ısıl veya kimyasal işlem uygulanmamıştır"
    ],
    storage: "Serin ve kuru yerde saklayınız. Paketi açıldıktan sonra buzdolabında muhafaza edilmesi ve 6 ay içinde tüketilmesi önerilir.",
    warning: "Arı ürünleri alerjisi olanlar için uygun değildir. Kronik rahatsızlığı olanların ve hamilelerin uzman bir hekime danışarak tüketmesi tavsiye edilir.",
    image: "/assets/products-webp/taze-ari-ekmegi-perga.webp",
    imageAlt: "Doğal taneli arı ekmeği perga",
    featured: true
  },
  {
    id: "saf-yayla-poleni",
    name: "Kurutulmuş Saf Yayla Poleni",
    slug: "kurutulmus-saf-yayla-poleni",
    category: "polen",
    shortDescription: "Hanak yaylalarındaki çiçeklerden arıların topladığı, düşük sıcaklıkta kurutularak besin değeri korunmuş saf polen.",
    description: "Yayla çiçek polenlerimiz, aktif arıcılık sezonunda kovan girişlerindeki polen tuzakları vasıtasıyla günlük olarak toplanır. Laboratuvarımızda polenin vitamin ve enzimlerine zarar vermeyecek şekilde, kontrollü düşük sıcaklıklarda kurutulur. Proteinler, serbest amino asitler ve vitaminler bakımından zengin doğal bir besin takviyesidir.",
    features: [
      "Hanak'ın zengin bitki çeşitliliğinden gelen doğal renkler",
      "Düşük ısıda koruyucu kurutma teknolojisi",
      "Yüksek protein ve besinsel lif oranı",
      "Katkısız, boyasız ve koruyucusuz"
    ],
    storage: "Kuru, serin ve karanlık bir yerde ağzı sıkıca kapalı olarak saklayınız. Uzun süreli muhafaza için buzdolabında saklanması önerilir.",
    warning: "Polen alerjisi olan veya saman nezlesi gibi kronik alerjisi bulunan kişilerin tüketmesi önerilmez. 1 yaşından küçük çocuklara verilmemelidir.",
    image: "/assets/products-webp/kurutulmus-saf-yayla-poleni.webp",
    imageAlt: "Renkli tanelerden oluşan doğal yayla poleni",
    featured: false
  },
  {
    id: "saf-ari-sutu",
    name: "Taze Saf Arı Sütü",
    slug: "taze-saf-ari-sutu",
    category: "ari-sutu",
    shortDescription: "Sadece kraliçe arının beslenmesinde kullanılan, kovan içi genç işçi arıların salgıladığı çok özel saf arı sütü.",
    description: "Arı sütü, kovan içindeki 5-15 günlük işçi arıların yutak üstü bezlerinden salgıladıkları, jel kıvamında beyazımsı bir maddedir. Kraliçe arının hayat boyu tek besin kaynağıdır. Eylül Arıcılık olarak, kovanlarımızdan titizlikle ve steril araçlarla topladığımız arı sütünü hiçbir katkı yapmadan, soğuk zincirini bozmadan laboratuvarımızda depolarız.",
    features: [
      "%100 saf ve taze kovan ürünü",
      "Yüksek Royalaktin ve 10-HDA (10-hidroksi-2-dekenoik asit) içeriği",
      "Soğuk zincir muhafazalı teslimat süreci",
      "Laboratuvar kontrollü ambalajlama"
    ],
    storage: "Mutlaka buzdolabında (2-4°C) saklanmalı, dondurularak saklanacaksa (-18°C) derin dondurucuda tutulmalıdır. Metal kaşıkla temas ettirilmemeli, tahta veya plastik kaşık kullanılmalıdır.",
    warning: "Çok güçlü bir biyoaktif miktar barındırdığından arı ürünlerine aşırı hassasiyeti olanlar, astım hastaları ve kanser hastalarının doktor kontrolünde kullanması gerekir. 2 yaş altı çocuklara önerilmez.",
    image: "/assets/products-webp/taze-saf-ari-sutu.webp",
    imageAlt: "Küçük şişede saf arı sütü ve tahta kaşık",
    featured: false
  },
  {
    id: "ari-zehri-krem",
    name: "Arı Zehri Katkılı Masaj Kremi (Bilgilendirme)",
    slug: "ari-zehri-katkili-masaj-kremi",
    category: "ari-zehri",
    shortDescription: "Laboratuvarımızda kontrollü toplanan saf arı zehri ile formüle edilmiş masaj kremi.",
    description: "Bu masaj kremi, kovanlarımıza zarar vermeyen özel elektrikli toplama levhaları kullanılarak elde edilen saf arı zehri (Apisin) içerir. Cilt bakımı ve masaj uygulamaları için uygun bitkisel yağlar ve laboratuvarımızda standardize edilen arı zehri bileşenleri ile harmanlanmıştır. Rahatlatıcı lokal masajlar için tercih edilir.",
    features: [
      "Arılara zarar vermeden (elektro-stimülasyon) toplanan arı zehri",
      "Lokal cilt masajı için geliştirilmiş dermatolojik emilim",
      "Doğal mentol ve okaliptüs destekli formül",
      "Laboratuvarımızda kontrollü hijyenik üretim"
    ],
    storage: "Çocukların ulaşamayacağı, güneş görmeyen serin bir yerde muhafaza ediniz. Kapağını açık bırakmayınız.",
    warning: "Arı sokmasına karşı aşırı duyarlılığı (alerjisi) olan kişilerin kesinlikle kullanmaması gerekir. Açık yaralara, göz çevresine ve hassas mukoza bölgelerine uygulamayınız. Kullanmadan önce cildin küçük bir bölümünde test ediniz.",
    image: "/assets/products-webp/ari-zehri-katkili-masaj-kremi.webp",
    imageAlt: "Arı zehri katkılı krem kutusu",
    featured: false
  },
  {
    id: "saf-balmumu",
    name: "Doğal Saf Balmumu",
    slug: "dogal-saf-balmumu",
    category: "balmumu",
    shortDescription: "Eritilerek yabancı maddelerden arındırılmış, katkısız saf sarı arı mumu (balmumu).",
    description: "Arıların petek yapımında kullandığı doğal salgılardan elde edilen peteklerin eritilmesiyle üretilir. Laboratuvarımızda hiçbir kimyasal ağartıcı veya parafin gibi petrol türevi eklenmeden, süzülerek kalıplar halinde dökülmüştür. Mum yapımı, ahşap koruma ve doğal kozmetik kremlerin formülasyonu için uygundur.",
    features: [
      "%100 saf ve katkısız arı balmumu kalıpları",
      "Doğal tatlı bal ve polen kokusu",
      "Kimyasal beyazlatma veya katkı içermez",
      "Kozmetik ve el işleri üretimi için ideal saflık"
    ],
    storage: "Kuru ve aşırı sıcaktan uzak alanlarda saklayınız. Erime sıcaklığı yaklaşık 62-65°C'dir.",
    warning: "Tüketim amacıyla değil, haricen kullanım veya hammadde amacıyla üretilmiştir.",
    image: "/assets/products-webp/dogal-saf-balmumu.webp",
    imageAlt: "Doğal kalıplar halinde saf sarı balmumu",
    featured: false
  },
  {
    id: "aricilik-korugu",
    name: "Profesyonel Paslanmaz Arıcı Körüğü",
    slug: "profesyonel-paslanmaz-arici-korugu",
    category: "ekipman",
    shortDescription: "Isı kalkanlı korumaya sahip, paslanmaz çelik gövdeli ve deri körük derili kaliteli arıcı körüğü.",
    description: "Kovan kontrolleri ve bal sağımı esnasında arıları sakinleştirmek amacıyla kullanılan duman üretecidir. Gövdesi birinci sınıf paslanmaz çelikten imal edilmiş olup, dış kısmında el yanmalarını önleyen koruyucu tel kafes mevcuttur. Körük kısmı ise dayanıklı hakiki deriden üretilmiştir.",
    features: [
      "Paslanmaz çelik gövde yapısı ile uzun ömürlü kullanım",
      "El yanmalarını engelleyen koruyucu ısı kalkanı kafesi",
      "Dayanıklı deriden mamul uzun ömürlü körük mekanizması",
      "Alt kısmında kovan asma kancası mevcuttur"
    ],
    storage: "Kullanım sonrasında içindeki kül ve kömür kalıntılarını temizleyerek kuru bir yerde asarak saklayınız.",
    warning: "Körük yakılırken yangın tehlikeine karşı dikkatli olunmalı, kovan kontrolleri bittiğinde körüğün tamamen söndüğünden emin olunmalıdır.",
    image: "/assets/products-webp/profesyonel-paslanmaz-arici-korugu.webp",
    imageAlt: "Paslanmaz çelik arıcı körüğü duman çıkışı",
    featured: false
  },
  {
    id: "arici-tulumu",
    name: "Maskeli Gabardin Arıcı Tulumu",
    slug: "maskeli-gabardin-arici-tulumu",
    category: "kiyafetler",
    shortDescription: "Hava alabilen kalın gabardin kumaştan üretilmiş, astronot şapkalı arıcı tulumu.",
    description: "Arılıkta çalışırken arı sokmalarından korunmanız için tasarlanmış tulumdur. Kalın ve dayanıklı gabardin pamuklu kumaşı sayesinde arı iğnelerinin geçişini engellerken, hava sirkülasyonu sağlayarak sıcak havalarda terlemeyi azaltır. Fermuarlı astronot maskesi çıkarılabilir ve yıkanabilir özelliktedir.",
    features: [
      "Kalın ve sık dokuma dayanıklı gabardin kumaş",
      "Görüş açısını kapatmayan metal telli astronot tipi maske",
      "Bilek ve ayak paçalarında arı girişini önleyen lastikli korumalar",
      "Kullanışlı alet cepleri"
    ],
    storage: "Kuru ortamda asarak saklayınız. Maske kısmını elde, tulum gövdesini ise çamaşır makinesinde düşük ısıda yıkayabilirsiniz.",
    image: "/assets/products-webp/maskeli-gabardin-arici-tulumu.webp",
    imageAlt: "Astronot maskeli beyaz gabardin arıcı tulumu",
    featured: false
  },
  {
    id: "cam-kavanoz-500",
    name: "Metal Kapaklı Bal Kavanozu (500cc)",
    slug: "metal-kapakli-bal-kavanozu-500cc",
    category: "ambalaj",
    shortDescription: "Gıda ile temasa uygun, sızdırmaz metal kapaklı şeffaf cam kavanoz.",
    description: "Ürettiğiniz balları hijyenik bir şekilde saklamanız ve sunmanız için tasarlanmış birinci sınıf şeffaf cam kavanozdur. 500cc hacme sahip olup yaklaşık 660g bal alır. Sızdırmazlık contalı sarı/altın renkli metal kapağıyla birlikte gönderilir. Gıda güvenliği standartlarına tamamen uygundur.",
    features: [
      "Gıda ile temasa uygun hijyenik cam hammadde",
      "Sızdırmaz contalı, hava almayan metal kapak",
      "Düz pürüzsüz yüzeyi ile kolay etiketlenebilme",
      "Bulaşık makinesinde yıkanabilir ve sterilize edilebilir"
    ],
    storage: "Kullanım öncesinde yıkayıp tamamen kuruttuğunuzdan emin olunuz. Nemli kavanozlara bal doldurmayınız.",
    image: "/assets/products-webp/metal-kapakli-bal-kavanozu-500cc.webp",
    imageAlt: "Sarı kapaklı 500cc şeffaf cam kavanoz",
    featured: false
  },
  {
    id: "fenni-kovan-langstroth",
    name: "Langstroth Tipi Ahşap Kovan",
    slug: "langstroth-tipi-ahsap-kovan",
    category: "kovan-cita",
    shortDescription: "Kurutulmuş çam ağacından üretilmiş, taban havalandırmalı standart Langstroth kovan seti.",
    description: "Türkiye arıcılık standartlarına tam uyumlu, 10 çıtalı kovan gövdesi, kuluçkalık ve ballık bölümlerinden oluşan ahşap kovan setidir. Fırınlanmış çam ağacından üretilmiş olup dış hava koşullarına dayanıklıdır. Tabanında varroa tuzaklı paslanmaz tel havalandırma sistemi bulunur, bu da arı sağlığını olumlu yönde destekler.",
    features: [
      "Birinci sınıf fırınlanmış çam kerestesinden imalat",
      "Varroa tuzaklı ve polen çekmeceli tel alt taban havalandırması",
      "Sac kaplı ahşap kovan kapağı ile su sızdırmazlık",
      "Uçuş tahtası ve kovan kilitleme aparatları dahil"
    ],
    storage: "Kovanların dış yüzeylerinin arılara zarar vermeyecek su bazlı dış cephe boyaları ile boyanarak kullanılması kovan ömrünü uzatır.",
    image: "/assets/products-webp/langstroth-tipi-ahsap-kovan.webp",
    imageAlt: "Taban havalandırmalı ahşap Langstroth tipi arı kovanı",
    featured: false
  },
  {
    id: "citali-ahsap-ari-cercevesi",
    name: "Çıtalı Ahşap Arı Çerçevesi (Montajlı)",
    slug: "citali-ahsap-ari-cercevesi",
    category: "kovan-cita",
    shortDescription: "Fırınlanmış birinci sınıf çam kerestesinden imal edilmiş, listli ve çıtalı standart arı çerçevesi.",
    description: "Montajı tamamlanmış, telleri çekilmiş ve kullanıma hazır boş kovan çerçevesidir. Arıcılık standartlarına tam uyumlu olarak fırınlanmış çam ağacından üretilmiştir. Dayanıklı tel germe kanalları sayesinde temel petek levhasının kolayca monte edilmesini sağlar.",
    features: [
      "Fırınlanmış çam ağacından üretilmiş dayanıklı gövde",
      "Standart kovan ölçüleri ile tam uyum",
      "Montajı tamamlanmış, telleri hazır gerilmiş ünite",
      "Çatlama ve esnemeye karşı kanallı tasarım"
    ],
    storage: "Kuru ve nemsiz ortamlarda, kovan zararlılarından uzak alanlarda muhafaza ediniz.",
    image: "/assets/products-webp/citali-ahsap-ari-cercevesi.webp",
    imageAlt: "Boş arı kovanı çerçevesi",
    featured: false
  },
  {
    id: "demonte-kovan-cerceve-citasi",
    name: "Demonte Kovan Çerçeve Çıtaları (Paket)",
    slug: "demonte-kovan-cerceve-citasi",
    category: "kovan-cita",
    shortDescription: "Kendi çerçevesini hazırlamak isteyen arıcılar için demonte kesilmiş çam üst, yan ve alt çıtalar.",
    description: "Kendi işçiliğiyle çerçeve üretmek isteyen arıcılarımız için özel boylarda milimetrik olarak kesilmiş demonte çıta setidir. Birinci sınıf budaksız çam ağacından üretilmiştir. Yan çıtalarda tel geçiş delikleri hazır delinmiş durumdadır.",
    features: [
      "Milimetrik kesilmiş pürüzsüz ahşap yüzeyler",
      "Üst, alt ve delikli yan çıta parçaları dahil",
      "Budaksız ve reçinesi alınmış fırınlanmış çam kerestesi",
      "Kolay montaj için geçmeli zıvana yapısı"
    ],
    storage: "Nem almayan, rutubetsiz kapalı depo alanlarında saklayınız.",
    image: "/assets/products-webp/demonte-kovan-cerceve-citasi.webp",
    imageAlt: "Demonte arıcılık çıtaları",
    featured: false
  },
  {
    id: "ahsap-kovan-govdesi-katı",
    name: "Ahşap Kovan Gövdesi (Ballık / Kat)",
    slug: "ahsap-kovan-govdesi-katı",
    category: "kovan-cita",
    shortDescription: "Standart 10 çıtalı Langstroth kovanlar için fırınlanmış çamdan imal edilmiş ek kovan katı (ballık).",
    description: "Mevcut kovanlarınızı genişletmek ve bal sağım döneminde kovanların üzerine eklemek amacıyla tasarlanmış standart Langstroth kovan katıdır. 2.5 cm kalınlığında fırınlanmış çam tahtalarından, zıvanalı birleştirme tekniğiyle üretilmiştir.",
    features: [
      "Zıvanalı köşe birleşimleri ile üstün mukavemet",
      "Dış hava şartlarına dayanıklı çam ağacı",
      "Standart kovan gövdeleriyle tam uyumlu kilit sistemi",
      "Taşıma kulpları hazır açılmıştır"
    ],
    storage: "Kullanım ömrünü uzatmak için dış yüzeyinin su bazlı arı dostu boya ile boyanması tavsiye edilir.",
    image: "/assets/products-webp/ahsap-kovan-govdesi-kati.webp",
    imageAlt: "Ahşap kovan katı ve ballık",
    featured: false
  },
  {
    id: "strafor-ruset-kovan",
    name: "Strafor Ruşet Kovan (Ana Arı Çiftleştirme)",
    slug: "strafor-ruset-kovan",
    category: "ekipman",
    shortDescription: "Isı yalıtımlı, hafif ve dayanıklı strafor malzemeden üretilmiş ana arı çiftleştirme ruşet kovanı.",
    description: "Ana arı üretimi, çiftleştirme ve küçük bölme kolonileri için ideal olan yüksek yoğunluklu (dansite) strafor ruşet kovandır. Üstün ısı yalıtımı sayesinde koloniyi kışın soğuktan, yazın ise aşırı sıcaktan korur. Hafif yapısıyla arılıkta kolayca taşınabilir.",
    features: [
      "Yüksek yoğunluklu sert strafor gövde",
      "Uçuş tahtası ve ayarlanabilir havalandırma kapakları",
      "Çıkarılabilir iç bölme panelleri",
      "Maksimum ısı izolasyonu ile hızlı koloni gelişimi"
    ],
    storage: "Doğrudan güneş ışığına uzun süre maruz bırakılmamalı, kullanılmadığında gölgede saklanmalıdır.",
    image: "/assets/products-webp/strafor-ruset-kovan.webp",
    imageAlt: "Strafor ruşet arı kovanı",
    featured: false
  },
  {
    id: "plastik-polen-tuzakli-kovan-tabani",
    name: "Plastik Polen Tuzaklı Kovan Tabanı",
    slug: "plastik-polen-tuzakli-kovan-tabani",
    category: "ekipman",
    shortDescription: "Kovan altı havalandırması sağlayan, çekmeceli ve polen tuzaklı hijyenik plastik kovan tabanı.",
    description: "Kovanların altına monte edilen, varroa parazitleriyle mücadeleye yardımcı tel havalandırmalı ve polen toplama çekmecesine sahip plastik tabandır. Arıların getirdiği polenleri toplamak için polen tuzak mekanizması aktifleştirilebilir.",
    features: [
      "Gıda ile temasa uygun hijyenik sert plastik malzeme",
      "Varroa döküntülerini izlemek için polen çekmecesi",
      "Kovan içi nemi önleyen alt havalandırma ızgarası",
      "Uçuş tahtası ve giriş engelleyici aparat dahil"
    ],
    storage: "Kullanım dışı dönemlerde tazyikli suyla yıkanıp dezenfekte edilerek kuru depoda saklanmalıdır.",
    image: "/assets/products-webp/plastik-polen-tuzakli-kovan-tabani.webp",
    imageAlt: "Polen tuzaklı plastik kovan tabanı",
    featured: false
  },
  {
    id: "kovan-ustu-plastik-surupluk",
    name: "Kovan Üstü Plastik Şurupluk (Arı Yemliği)",
    slug: "kovan-ustu-plastik-surupluk",
    category: "ekipman",
    shortDescription: "Kovan kapağının altına yerleştirilen, arıların boğulmadan şurup tüketmesini sağlayan plastik yemlik.",
    description: "Koloni beslemesinde şurup vermek amacıyla tasarlanmış, kovan örtü tahtası veya kapağının altına konulan plastik yemliktir. Arıların şuruba kolayca erişmesini sağlayan merdivenli tırmanma kanalları, arıların şurup içinde boğulmasını engeller.",
    features: [
      "2 Litre şurup kapasiteli geniş hazne",
      "Arıların boğulmasını önleyen tırtıklı tırmanma merdivenleri",
      "Şeffaf plastik kapak ile şurup miktarını kolayca izleme",
      "Kolay temizlenebilir ve hijyenik plastik yapı"
    ],
    storage: "Yıkandıktan sonra üst üste istiflenerek serin ve güneş görmeyen depolarda saklanmalıdır.",
    image: "/assets/products-webp/kovan-ustu-plastik-surupluk.webp",
    imageAlt: "Kovan üstü arı şurupluğu",
    featured: false
  },
  {
    id: "steril-temel-petek-levhasi",
    name: "Steril Temel Petek Levhası (Balmumu)",
    slug: "steril-temel-petek-levhasi",
    category: "kovan-cita",
    shortDescription: "Saf balmumundan üretilmiş, çerçeve teline monte edilmeye hazır hijyenik temel petek levhası.",
    description: "Arıların petek örme sürecini hızlandırmak amacıyla kovanlara verilen saf balmumu levhadır. Eylül Arıcılık laboratuvarında yüksek ısı altında sterilize edilerek kovan hastalıklarından arındırılmış, ardından standart Langstroth ölçülerinde preslenmiştir.",
    features: [
      "%100 saf and katkısız doğal balmumu hammaddesi",
      "Yüksek sıcaklıkta sterilizasyon ile hastalık riski sıfırlanmıştır",
      "Arıların peteği hızlı kabartmasını sağlayan net altıgen kabartmalar",
      "Kırılmayı önleyen ideal esneklik ve kalınlık"
    ],
    storage: "Oda sıcaklığında (18-22°C), yatay olarak düz bir zeminde, doğrudan güneş ışığı almayan ve fare gibi kemirgenlerin ulaşamayacağı yerlerde saklayınız.",
    image: "/assets/products-webp/steril-temel-petek-levhasi.webp",
    imageAlt: "Balmumu temel petek levhası",
    featured: false
  },
  {
    id: "makarali-galvaniz-cerceve-teli",
    name: "Makaralı Galvaniz Çerçeve Teli",
    slug: "makarali-galvaniz-cerceve-teli",
    category: "kovan-cita",
    shortDescription: "Çerçeve montajında peteği sabitlemek amacıyla kullanılan paslanmaya dayanıklı ince arıcı teli.",
    description: "Çerçevelerin içine gerilerek temel peteğin monte edilmesini sağlayan, paslanmaya karşı galvaniz kaplı kaliteli arıcı telidir. Makaraya sarılı olması sayesinde kullanım sırasında dolaşma yapmaz ve kolayca gerdirilebilir.",
    features: [
      "Paslanma ve kararmaya karşı galvaniz kaplama",
      "0.45 mm ideal tel kalınlığı ile yüksek mukavemet",
      "Kolay kullanım sağlayan plastik makara ambalajı",
      "Temel peteği ısıtarak tele yapıştırma işlemlerine uygun elektrik iletkenliği"
    ],
    storage: "Rutubetsiz ve kuru yerlerde, orijinal ambalajı içinde muhafaza ediniz.",
    image: "/assets/products-webp/makarali-galvaniz-cerceve-teli.webp",
    imageAlt: "Makaralı arıcı çerçeve teli",
    featured: false
  },
  {
    id: "kovan-el-demiri-spatula",
    name: "Kovan El Demiri (Spatula)",
    slug: "kovan-el-demiri-spatula",
    category: "ekipman",
    shortDescription: "Çerçeveleri gevşetmek, petekleri kazımak ve kovanı temizlemek için paslanmaz çelik arıcı el demiri.",
    description: "Arıcının en temel el aletidir. Kovan kontrolleri sırasında propolis ile yapışmış çerçeveleri birbirinden ayırmak, kovan tabanındaki döküntüleri kazımak ve kovan gövdesini temizlemek için tasarlanmış çok amaçlı paslanmaz çelik el demiridir.",
    features: [
      "Bükülme ve kırılmaya dayanıklı kalın paslanmaz çelik",
      "Çerçeve çivisi sökme ve kazıma işlevli özel uç yapısı",
      "Rahat kavrama sağlayan ergonomik gövde",
      "Kolay görünür kırmızı veya sarı boyalı sap kısmı"
    ],
    storage: "Kullanım sonrasında üzerindeki propolis ve balmumu kalıntıları temizlenerek alet çantasında saklanmalıdır.",
    image: "/assets/products-webp/kovan-el-demiri-spatula.webp",
    imageAlt: "Paslanmaz çelik kovan el demiri",
    featured: false
  },
  {
    id: "ahsap-sapli-yumusak-ari-fircasi",
    name: "Ahşap Saplı Yumuşak Arı Fırçası",
    slug: "ahsap-sapli-yumusak-ari-fircasi",
    category: "ekipman",
    shortDescription: "Bal sağımı esnasında çerçeve üzerindeki arıları incitmeden uzaklaştırmak için doğal yumuşak kıllı fırça.",
    description: "Bal hasadı ve kovan muayeneleri sırasında petek yüzeyindeki işçi arıları süpürmek için kullanılan arıcı fırçasıdır. Doğal ve yumuşak kılları sayesinde arıların ezilmesini veya öfkelenmesini önler.",
    features: [
      "Arı dostu, yumuşak dokulu doğal kıl yapısı",
      "Cilalı ergonomik ahşap sap tasarımı",
      "Kolay temizlenebilir ve yıkanabilir kıl demetleri",
      "Çift sıra kıl dizilimi ile etkin süpürme"
    ],
    storage: "Kullanım sonrasında ballı kılları ılık suyla yıkayıp kurutarak asarak saklayınız.",
    image: "/assets/products-webp/ahsap-sapli-yumusak-ari-fircasi.webp",
    imageAlt: "Ahşap saplı yumuşak arı fırçası",
    featured: false
  },
  {
    id: "maskeli-gabardin-arici-ceketi",
    name: "Maskeli Gabardin Arıcı Ceketi",
    slug: "maskeli-gabardin-arici-ceketi",
    category: "kiyafetler",
    shortDescription: "Fermuarlı astronot maskesine sahip, kalın gabardin pamuklu kumaştan pratik arıcı ceketi.",
    description: "Hızlı kovan kontrolleri için tasarlanmış, giyilip çıkarılması son derece kolay olan astronot başlığı entegreli arıcı ceketidir. Kalın gabardin kumaşı arı iğnelerine karşı tam koruma sağlarken, hava geçişi sayesinde terlemeyi azaltır.",
    features: [
      "Hava alabilen kalın gabardin pamuklu kumaş",
      "Çıkarılabilir ve görüşü engellemeyen astronot maskesi",
      "Bileklerde arı girişini önleyen esnek lastikler",
      "Ön kısımda kovan el demiri ve alet cepleri"
    ],
    storage: "Kuru ortamda askıda muhafaza ediniz. Maske kısmını çıkarıp elde yıkayabilirsiniz.",
    image: "/assets/products-webp/maskeli-gabardin-arici-ceketi.webp",
    imageAlt: "Astronot maskeli arıcı ceketi",
    featured: false
  },
  {
    id: "hakiki-deri-aricilik-eldiveni",
    name: "Hakiki Deri Arıcılık Eldiveni (Kollu)",
    slug: "hakiki-deri-aricilik-eldiveni",
    category: "kiyafetler",
    shortDescription: "Bilek kısmı kalın kumaş kolluklu, el kısmı yumuşak koyun/keçi derisinden koruyucu arıcı eldiveni.",
    description: "Arılıkta güvenle çalışabilmeniz için tasarlanmış koruyucu eldivendir. El kısmı arıyı hissetmenizi zorlaştırmayan ancak iğnenin geçmesini engelleyen yumuşak hakiki deriden, kol kısmı ise dirseğe kadar uzanan lastikli gabardin kumaştan imal edilmiştir.",
    features: [
      "Yumuşak ve dayanıklı hakiki koyun/keçi derisi avuç içi",
      "Dirseğe kadar uzanan lastikli kalın kumaş kolluk koruması",
      "Kovan el demirini rahatça kavrayabilen ergonomik kesim",
      "Arıların içeri girmesini önleyen sıkı bilek lastiği"
    ],
    storage: "Kullanımdan sonra kuru bir bezle silip pudralayarak nemden uzak serin yerde saklayınız. Makinede yıkanmamalıdır.",
    image: "/assets/products-webp/hakiki-deri-aricilik-eldiveni.webp",
    imageAlt: "Deri koruyucu arıcılık eldiveni",
    featured: false
  },
  {
    id: "paslanmaz-celik-bal-suzgeci",
    name: "Paslanmaz Çelik Bal Süzgeci (Çift Katlı)",
    slug: "paslanmaz-celik-bal-suzgeci",
    category: "ambalaj",
    shortDescription: "Bal sağımında petek kırıntılarını ve mum parçalarını filtrelemek için iç içe geçen çift katmanlı çelik süzgeç.",
    description: "Süzme bal eldesi sırasında balın içindeki ince mum parçacıklarını, arı döküntülerini ve polen topaklarını filtrelemek için kullanılan paslanmaz çelik süzgeçtir. Üst üste geçen kaba ve ince gözenekli iki katmandan oluşur.",
    features: [
      "Gıda standartlarına uygun paslanmaz çelik tel kafes",
      "Kaba süzüm için üst katman, ince süzüm için alt katman",
      "Farklı boyuttaki dinlendirme kazanlarına uyum sağlayan uzatılabilir kollar",
      "Kolay temizlenebilir paslanmaz metal gövde"
    ],
    storage: "Bal kalıntılarının kurumaması için kullanımdan hemen sonra sıcak suyla yıkayıp kurutarak saklayınız.",
    image: "/assets/products-webp/paslanmaz-celik-bal-suzgeci.webp",
    imageAlt: "Paslanmaz çift katlı bal süzgeci",
    featured: false
  },
  {
    id: "celik-bal-dinlendirme-kazani",
    name: "Çelik Bal Dinlendirme Kazanı (Musluklu)",
    slug: "celik-bal-dinlendirme-kazani",
    category: "ambalaj",
    shortDescription: "Süzülen balları dinlendirmek ve kavanozlara doldurmak için paslanmaz çelikten üretilmiş musluklu kazan.",
    description: "Sağımı yapılan balların ambalajlanmadan önce dinlendirilerek içindeki hava kabarcıklarının ve kalan küçük parçacıkların üste çıkmasını sağlayan paslanmaz çelik kazandır. Alt kısmında yer alan özel bal musluğu sayesinde kavanozlara sızdırmadan dolum yapılabilir.",
    features: [
      "Gıda tüzüğüne uygun AISI 304 kalite paslanmaz çelik gövde",
      "Hızlı ve hassas dolum sağlayan sızdırmaz plastik/metal bal musluğu",
      "Toz ve nem girişini önleyen contalı çelik kapak",
      "Sağlam taşıma kulpları"
    ],
    storage: "Temizlendikten sonra kuru bir alanda, üzeri örtülü olarak saklanmalıdır.",
    image: "/assets/products-webp/celik-bal-dinlendirme-kazani.webp",
    imageAlt: "Paslanmaz çelik bal dinlendirme kazanı",
    featured: false
  },
  {
    id: "vitamin-mineral-katkili-ari-keki",
    name: "Vitamin ve Mineral Katkılı Arı Keki (1 Kg)",
    slug: "vitamin-mineral-katkili-ari-keki",
    category: "besleme-bakim",
    shortDescription: "İlkbahar ve sonbahar beslemesinde arı kolonisinin gelişimini ve yavru atımını destekleyen vitaminli arı keki.",
    description: "Eylül Arıcılık olarak, kıştan çıkan kolonilerin ilkbahar gelişimini hızlandırmak veya sonbahar beslemesini tamamlamak amacıyla formüle ettiğimiz özel arı kekidir. Pudra şekeri, bal, polen ve arıların gelişimine uygun vitamin-mineral kompleksleri içerir.",
    features: [
      "Koloni mevcudunu ve ana arının yumurtlamasını hızlandırıcı formül",
      "Doğal polen ve vitaminlerle zenginleştirilmiş besin yapısı",
      "Hava almayan hijyenik vakumlu 1 kg ambalajda sunum",
      "Arıların kolayca tüketebileceği ideal kıvam"
    ],
    storage: "Doğrudan güneş görmeyen, serin ve kuru bir yerde muhafaza ediniz. Açılan paketleri kısa sürede tüketiniz.",
    image: "/assets/products-webp/vitamin-mineral-katkili-ari-keki.webp",
    imageAlt: "Paketli arı keki ve besleme ürünü",
    featured: false
  },
  {
    id: "koloni-destekleyici-sivi-ari-yemi",
    name: "Koloni Destekleyici Sıvı Arı Yemi (Şurup)",
    slug: "koloni-destekleyici-sivi-ari-yemi",
    category: "besleme-bakim",
    shortDescription: "Koloni popülasyonunu artırmak ve kışa hazırlık dönemlerinde beslemeyi tamamlamak için hazır sıvı yem.",
    description: "Kovan besleme dönemlerinde arıların sıvı gıda ihtiyacını karşılayan, pancar şekerinden arıların sindirim sistemine uygun olarak invert edilerek üretilmiş sıvı yem şurubudur. HMF oranı arı sağlığı sınırları içinde tutulmuştur.",
    features: [
      "İnvert edilmiş hazır sıvı formülü ile kolay sindirim",
      "Arıların kışa güçlü girmesini destekleyici içerik",
      "Hastalık yayma riski taşımayan steril üretim süreci",
      "Pratik bidon ambalajlarda kolay taşıma ve kullanım"
    ],
    storage: "Serin bir ortamda saklanmalı, donmaya veya aşırı sıcağa maruz bırakılmamalıdır.",
    image: "/assets/products-webp/koloni-destekleyici-sivi-ari-yemi.webp",
    imageAlt: "Arı şurubu sıvı besleme ürünü",
    featured: false
  }
];
