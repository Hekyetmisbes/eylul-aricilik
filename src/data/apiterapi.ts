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
      content: "Bu web sitesindeki hiçbir bilgi tıbbi tavsiye, teşhis veya tedavi önerisi niteliği taşımaz. Apiterapi ve arı ürünleriyle ilgili içerikler bilgilendirme amaçlıdır; profesyonel tıbbi bakımın yerine geçmez."
    },
    {
      title: "Şiddetli Alerji Riski",
      content: "Arı zehri, polen, propolis ve diğer arı ürünleri alerjik kişilerde ciddi reaksiyonlara neden olabilir. Arı ürünlerine veya arı sokmasına karşı duyarlılığı bulunan kişilerin kullanımdan önce nitelikli bir sağlık uzmanına danışması gerekir."
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
    description: "Arıların bitki tomurcukları ve gövdelerinden topladığı reçinemsi yapıda bir arı ürünüdür.",
    labProcess: "Laboratuvarımızda alkol, glikol veya ağır solventler kullanılmadan su bazlı ekstraksiyon yöntemiyle sıvı forma dönüştürülür. Kullanım öncesinde ürün etiketi ve alerji uyarıları dikkate alınmalıdır.",
    attributes: ["Alkolsüz Su Ekstraksiyonu", "Fenolik Bileşen Takibi", "Kontrollü Üretim Süreci"]
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
    description: "Genç işçi arıların salgı bezlerinden üretilen, kremsi yapıda bir kovan ürünüdür; kraliçe arının beslenmesinde kullanılır.",
    labProcess: "Kovanlardan çok küçük miktarlarda mikro-kaşıklarla hasat edilir, 10-HDA (10-hidroksi-2-dekenoik asit) ve royalaktin protein değeri ölçüldükten sonra soğuk zincir bozulmadan özel muhafazalı kaplarda saklanır.",
    attributes: ["10-HDA Değeri Takibi", "Soğuk Zincirle Saklama", "Kontrollü Hasat"]
  },
  {
    id: "ari-ekmegi",
    name: "Arı Ekmeği (Perga)",
    latinName: "Perga",
    description: "Polenin arı enzimleri ve balla petek gözlerinde doğal olarak fermente olmasıyla oluşan kovan ürünüdür.",
    labProcess: "Petek gözlerinden kontrollü biçimde toplanır ve ürünün saklama koşulları kayıt altına alınır. Tüketim tercihleri kişisel hassasiyetler dikkate alınarak değerlendirilmelidir.",
    attributes: ["Doğal Fermantasyon", "Kontrollü Toplama", "Saklama Bilgisi"]
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
    attributes: ["Parafin İçermeyen Balmumu", "Kozmetik Hammaddesi", "Saflaştırma Süreci"]
  }
];
