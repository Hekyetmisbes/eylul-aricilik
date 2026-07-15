export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}

export const categories: Category[] = [
  {
    id: "bal",
    name: "Bal Çeşitleri",
    slug: "bal-cesitleri",
    description: "Doğu Anadolu ovalarının ve Hanak yaylalarının kır çiçeklerinden süzülen doğal, katkısız ballar.",
    icon: "honey-jar"
  },
  {
    id: "propolis",
    name: "Propolis",
    slug: "propolis",
    description: "Arıların bitki reçinelerinden ürettiği, laboratuvarımızda kontrollü koşullarda hazırlanan doğal propolis özütleri.",
    icon: "shield"
  },
  {
    id: "polen",
    name: "Polen",
    slug: "polen",
    description: "Hanak'ın zengin bitki florasından arıların topladığı, besin değeri yüksek taze çiçek polenleri.",
    icon: "leaf"
  },
  {
    id: "ari-sutu",
    name: "Arı Sütü",
    slug: "ari-sutu",
    description: "Kraliçe arının besini olan, yüksek protein ve vitamin içeren özel arı sütü.",
    icon: "crown"
  },
  {
    id: "ari-ekmegi",
    name: "Arı Ekmeği",
    slug: "ari-ekmegi",
    description: "Polenin arı tarafından fermente edilmiş en emilebilir ve sindirilebilir hali (Perga).",
    icon: "cookie"
  },
  {
    id: "ari-zehri",
    name: "Arı Zehri Ürünleri",
    slug: "ari-zehri-urunleri",
    description: "Apiterapi uygulamaları için laboratuvar ortamında kontrollü tekniklerle toplanmış arı zehri içerikli ürünler.",
    icon: "flask"
  },
  {
    id: "balmumu",
    name: "Balmumu Ürünleri",
    slug: "balmumu-urunleri",
    description: "Doğal balmumu, mumlar ve kozmetik formüller için saf arı mumları.",
    icon: "honeycomb"
  },
  {
    id: "ekipman",
    name: "Arıcılık Ekipmanları",
    slug: "aricilik-ekipmanlari",
    description: "Modern arıcılık işletmeleri için kaliteli alet, körük, maske ve el aletleri.",
    icon: "beehive"
  },
  {
    id: "kiyafetler",
    name: "Koruyucu Kıyafetler",
    slug: "koruyucu-kiyafetler",
    description: "Arıcılık faaliyetlerinde güvenliğinizi sağlayan maske, tulum ve eldiven çeşitleri.",
    icon: "shield-alert"
  },
  {
    id: "ambalaj",
    name: "Cam Kavanoz ve Ambalaj",
    slug: "cam-kavanoz-ve-ambalaj",
    description: "Bal ve arı ürünleri için hijyenik cam kavanozlar, damlalıklı şişeler ve ambalaj malzemeleri.",
    icon: "box"
  },
  {
    id: "kovan-cita",
    name: "Kovan ve Çıtalar",
    slug: "kovan-ve-citalar",
    description: "Birinci sınıf ahşaptan üretilmiş, standartlara uygun fenni kovanlar ve çıtalar.",
    icon: "grid"
  },
  {
    id: "besleme-bakim",
    name: "Arı Besleme ve Bakım",
    slug: "ari-besleme-ve-bakim",
    description: "Arı yemleri, protein kekleri, mineral şurupları ve koloni sağlığı destek ürünleri.",
    icon: "heart"
  }
];
