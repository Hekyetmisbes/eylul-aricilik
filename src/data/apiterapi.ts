export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const labSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Hammadde Kabulü",
    description: "Kovanlarımızdan steril koşullarda toplanan ham propolis, polen, arı sütü ve ballar laboratuvarımıza alınarak ön kalite testinden geçirilir.",
    icon: "beehive"
  },
  {
    step: 2,
    title: "Hazırlık Süreci",
    description: "Kabul edilen hammaddeler yabancı maddelerden fiziksel olarak arındırılır ve ekstraksiyon/formülasyon hazırlık aşamasına tabi tutulur.",
    icon: "microscope"
  },
  {
    step: 3,
    title: "Analiz ve Kontrol",
    description: "Hammaddelerin nem oranları, saflıkları, polen yoğunlukları ve varsa yabancı katkı maddesi içerikleri kimyasal analizlerle denetlenir.",
    icon: "flask"
  },
  {
    step: 4,
    title: "Kontrollü Üretim",
    description: "Özellikle propolisin alkolsüz su ekstraksiyonu gibi hassas işlemler laboratuvarımızda standardize ısıl ve fiziksel değerlerle yürütülür.",
    icon: "settings"
  },
  {
    step: 5,
    title: "Steril Paketleme",
    description: "Ürünler hava almayan damlalıklı emniyet kilitli cam şişelere ve hijyenik gıda kavanozlarına el değmeden doldurulup kapatılır.",
    icon: "box"
  },
  {
    step: 6,
    title: "Belgelendirme",
    description: "Paketlenen her parti ürüne izlenebilirlik amacıyla lot numarası verilir, üretim parametreleri ve analiz raporları arşivlenir.",
    icon: "file-text"
  }
];

export const safetyWarnings = {
  title: "Önemli Sağlık ve Alerji Uyarısı",
  sections: [
    {
      title: "Tıbbi Tavsiye Değildir",
      content: "Bu web sitesindeki hiçbir bilgi tıbbi tavsiye, teşhis veya tedavi önerisi niteliği taşımaz. Arı ürünleri ve apiterapi geleneksel olarak vücut direncini destekleyici gıda takviyeleridir ve profesyonel tıbbi bakımın yerini alamaz."
    },
    {
      title: "Şiddetli Alerji Riski",
      content: "Arı zehri, polen, propolis ve diğer arı salgıları alerjik kişilerde anafilaktik şok gibi hayati tehlike arz eden alerjik reaksiyonlara neden olabilir. Herhangi bir ürünü kullanmadan önce mutlaka alerji testi yaptırınız veya hekiminize danışınız."
    },
    {
      title: "Çocuk ve Bebek Tüketimi",
      content: "Botulizm riski sebebiyle 1 yaşından küçük bebeklere bal kesinlikle yedirilmemelidir. Diğer güçlü arı ürünleri (arı sütü, arı ekmeği) için çocuklarda kullanım öncesi uzman çocuk hekiminin görüşü alınmalıdır."
    }
  ]
};

export interface SubstanceInfo {
  id: string;
  name: string;
  latinName?: string;
  description: string;
  labProcess: string;
  attributes: string[];
}

export const substancesList: SubstanceInfo[] = [
  {
    id: "bal",
    name: "Ham Bal",
    latinName: "Mel",
    description: "Hanak yaylasının yüksek rakımlı kır çiçeklerinden (geven, kekik, yabani yonca) elde edilen, ısıl işlem ve yüksek filtrasyon görmemiş saf baldır.",
    labProcess: "Isıl işlem uygulanmaz (pastörize edilmez), böylece balın içindeki doğal enzimler, amino asitler ve vitaminler korunur. Her sağımdan sonra nem ve HMF değerleri test edilerek etiketlenir.",
    attributes: ["Korunmuş Enzim Yapısı", "Yüksek Prolin Değeri", "Endemik Yayla Florası"]
  },
  {
    id: "propolis",
    name: "Propolis",
    latinName: "Propolis",
    description: "Arıların ağaçların tomurcuk ve gövdelerinden topladığı, kovanın sterilizasyonunu sağlayan reçinemsi ve güçlü antioksidan özellikli arı salgısıdır.",
    labProcess: "Laboratuvarımızda alkol, glikol veya ağır solventler kullanılmadan, patentli sulu ekstraksiyon yöntemiyle sıvı forma dönüştürülür. Su bazlı propolisimiz çocuklar ve hassas kullanıcılar için uygundur.",
    attributes: ["Alkolsüz Su Ekstraksiyonu", "Yüksek Polifenol Oranı", "Gıda Standartlarına Uygun Saflık"]
  },
  {
    id: "polen",
    name: "Arı Poleni",
    latinName: "Pollen",
    description: "Arıların çiçekleri gezerken topladıkları, protein, mineral, serbest amino asitler ve vitaminler bakımından zengin bitki üreme hücreleridir.",
    labProcess: "Hanak yaylasının temiz havasında polen tuzaklarıyla günlük toplanır, nem kontrolü sağlanan özel fırınlarımızda 35°C'yi aşmayan sıcaklıklarda kurutulur. Bu sayede protein ve vitamin değerleri kaybolmaz.",
    attributes: ["Doğal Protein Kaynağı", "Amino Asit Zenginliği", "Düşük Isıda Hassas Kurutma"]
  },
  {
    id: "ari-sutu",
    name: "Arı Sütü",
    latinName: "Royal Jelly",
    description: "Genç işçi arıların salgı bezlerinden ürettiği, kraliçe arının yaşam boyu tek besin kaynağı olan ve kraliçeye uzun ömür kazandıran kremsi yapıda bir süper gıdadır.",
    labProcess: "Kovanlardan çok küçük miktarlarda mikro-kaşıklarla hasat edilir, 10-HDA (10-hidroksi-2-dekenoik asit) ve royalaktin protein değeri ölçüldükten sonra soğuk zincir bozulmadan özel muhafazalı kaplarda saklanır.",
    attributes: ["10-HDA Standartlaşması", "Dondurularak Korunan Saflık", "Hücresel Yenilenme Desteği"]
  },
  {
    id: "ari-ekmegi",
    name: "Arı Ekmeği (Perga)",
    latinName: "Perga",
    description: "Polenin arının kendi enzimleri ve balla karışarak petek gözlerinde 3 hafta boyunca doğal fermantasyona uğramasıyla oluşan biyoyararlanımı yüksek arı gıdasıdır.",
    labProcess: "Petek gözlerinden tek tek el işçiliğiyle toplanır. Fermantasyon süreci polenin sert dış kabuğunu erittiği için insan sindirim sistemi tarafından polene göre 3-4 kat daha hızlı ve yüksek oranda emilir.",
    attributes: ["Doğal Fermente Probiyotik", "Kolay Sindirim ve Yüksek Emilim", "Zenginleştirilmiş Enzimler"]
  },
  {
    id: "ari-zehri",
    name: "Arı Zehri (Apitoksin)",
    latinName: "Apis Venenum",
    description: "Arıların savunma amaçlı salgıladığı, içinde peptid kompleksleri (melittin, apamin) barındıran güçlü bir biyolojik sıvıdır.",
    labProcess: "Kovan uçuş deliklerine yerleştirilen özel cam plakalar üzerinde hafif ve zararsız elektrik akımı yardımıyla toplanır. Arılar iğnelerini kaybetmedikleri için ölmezler. Elde edilen saf apitoksin toz haline getirilerek analiz edilir.",
    attributes: ["Arılara Zarar Vermeyen Yöntem", "Melittin Peptidi Analizi", "Lokal Masaj Karışımları Temeli"]
  },
  {
    id: "balmumu",
    name: "Balmumu",
    latinName: "Cera Alba",
    description: "Genç işçi arıların mum bezlerinden salgıladığı, kovan peteklerini oluşturmak için kullandıkları doğal, organik yapışkan mumdur.",
    labProcess: "Laboratuvarda süzülen ballardan geriye kalan temiz peteklerin eritilip yabancı tortulardan süzülmesiyle elde edilir. Hiçbir parafin veya kimyasal mum içermeyen saf kalıplar halinde cilt bakım merhemleri hammaddesi olarak ayrılır.",
    attributes: ["%100 Organik Parafinsiz Mum", "Cilt Koruyucu Bariyer Etkisi", "Saf Doğal Kozmetik Tabanı"]
  }
];

