export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content: string;
  category: 'gundem' | 'siyaset' | 'spor';
  imageUrl: string;
  date: string;
  author: string;
  isBreaking?: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Yeni Ekonomi Paketi Açıklandı',
    description: 'Hükümet yeni istihdam ve yatırım paketini duyurdu',
    content: 'Hükümet, ekonomiye can suyu olacak yeni bir destek paketini bugün açıkladı. Paket kapsamında KOBİ\'lere yönelik düşük faizli kredi imkanları genişletilirken, istihdam teşvikleri de artırıldı. Ekonomi Bakanı yaptığı açıklamada, "Bu paketle birlikte yatırımların önünü açmayı ve istihdamı artırmayı hedefliyoruz" dedi.',
    category: 'gundem',
    imageUrl: 'https://picsum.photos/800/500?random=1',
    date: '22 Kasım 2025',
    author: 'Ayşe Yılmaz',
    isBreaking: true
  },
  {
    id: '2',
    title: 'Dışişleri Bakanı BM Genel Kurulu\'nda Konuştu',
    description: 'Bakan, bölgesel sorunlara dair önemli açıklamalarda bulundu',
    content: 'Dışişleri Bakanı, Birleşmiş Milletler Genel Kurulu\'nda yaptığı konuşmada bölgedeki gelişmelere değindi. Bakan, "Bölgemizde istikrar ve barış için diyaloğun önemine vurgu yaparak, uluslararası toplumu işbirliğine çağırdı. Ayrıca Suriye krizine kalıcı çözüm arayışlarını da gündeme getirdi." dedi.',
    category: 'siyaset',
    imageUrl: 'https://picsum.photos/800/500?random=2',
    date: '21 Kasım 2025',
    author: 'Mehmet Demir',
    isBreaking: true
  },
  {
    id: '3',
    title: 'Süper Lig\'de Heyecan Dorukta',
    description: 'Liderlik yarışı kızışıyor, son haftanın maçları',
    content: 'Süper Lig\'de şampiyonluk yarışı son haftalarda iyice kızıştı. Lider takımımız, bu hafta oynadığı zorlu deplasman maçını 2-1 kazanarak üstünlüğünü sürdürdü. Teknik direktör, "Takım olarak çok iyi bir performans sergiledik. Taraftarlarımızın desteği de bize güç verdi" dedi. Önümüzdeki hafta oynanacak derbi maçı ise şampiyonluk yarışında dönüm noktası olacak gibi görünüyor.',
    category: 'spor',
    imageUrl: 'https://picsum.photos/800/500?random=3',
    date: '20 Kasım 2025',
    author: 'Ali Kaya',
    isBreaking: true
  },
  {
    id: '4',
    title: 'Yerli Otomobilde İlk Teslimatlar Başlıyor',
    description: 'Yerli otomobilin ilk alıcıları araçlarına kavuşuyor',
    content: 'Yerli otomobilin ilk teslimatları önümüzdeki haftaya başlıyor. 1 yıl önce ön siparişe açılan araçlar için heyecanlı bekleyiş sona eriyor. Şirket yetkilileri, ilk etapta 5 bin aracın teslimatının yapılacağını belirtti. Elektrikli araç, tek şarjla 500 kilometre menzil sunuyor ve hızlı şarj özelliğiyle 30 dakikada %80 şarj imkanı sağlıyor.',
    category: 'gundem',
    imageUrl: 'https://picsum.photos/800/500?random=4',
    date: '19 Kasım 2025',
    author: 'Zeynep Korkmaz'
  },
  {
    id: '5',
    title: 'Bilim İnsanlarından Önemli Keşif',
    description: 'Yapay zeka destekli çalışma tıp dünyasında çığır açabilir',
    content: 'Bilim insanları, yapay zeka destekli yeni bir yöntemle kanser teşhisinde önemli bir başarıya imza attı. Geliştirilen yeni algoritma, mevcut yöntemlere göre %30 daha yüksek doğruluk oranına ulaştı. Araştırma ekibinin başındaki Prof. Dr. Ahmet Şahin, "Bu yöntemle erken teşhis oranlarını önemli ölçüde artırmayı hedefliyoruz" açıklamasını yaptı.',
    category: 'gundem',
    imageUrl: 'https://picsum.photos/800/500?random=5',
    date: '18 Kasım 2025',
    author: 'Deniz Aydın'
  },
  {
    id: '6',
    title: 'Ünlü Şefin Yeni Restoranı Açıldı',
    description: 'Michelin yıldızlı şef İstanbul\'da yeni mekanını açtı',
    content: 'Dünyaca ünlü şef Mehmet Yılmaz, İstanbul\'un gözde semtlerinden birinde yeni restoranını hizmete açtı. Yerel lezzetleri modern tekniklerle buluşturan şef, "Amacımız Türk mutfağını dünyaya en iyi şekilde tanıtmak" dedi. Restoranın açılışına ünlü isimler ve gastronomi dünyasından önemli isimler katıldı.',
    category: 'gundem',
    imageUrl: 'https://picsum.photos/800/500?random=6',
    date: '17 Kasım 2025',
    author: 'Selin Arslan'
  },
  {
    id: '7',
    title: 'Yeni Ulaşım Projesi İçin İmzalar Atıldı',
    description: 'Şehirler arası hızlı tren hattı projesi hayata geçiyor',
    content: 'İstanbul-Ankara-İzmir hızlı tren hattı projesi için resmi sözleşme bugün imzalandı. Proje kapsamında 3 büyük şehir arasında seyahat süreleri önemli ölçüde kısalacak. Ulaştırma ve Altyapı Bakanı, "Bu proje ile hem ulaşımda konforu artırmayı hem de karbon salınımını azaltmayı hedefliyoruz" ifadelerini kullandı.',
    category: 'gundem',
    imageUrl: 'https://picsum.photos/800/500?random=7',
    date: '16 Kasım 2025',
    author: 'Can Demir'
  },
  {
    id: '8',
    title: 'Yerel Seçimler İçin Geri Sayım Başladı',
    description: 'Siyasi partiler seçim çalışmalarına hız verdi',
    content: 'Önümüzdeki yıl yapılacak yerel seçimler için siyasi partiler çalışmalarına hız verdi. Parti temsilcileri, vatandaşlarla buluşarak projelerini anlatmaya başladı. Siyasi analistler, bu seçimlerin ülke siyaseti açısından kritik öneme sahip olduğunu belirtiyor. Anketler, seçmenlerin en çok ekonomi ve istihdam konularına odaklandığını gösteriyor.',
    category: 'siyaset',
    imageUrl: 'https://picsum.photos/800/500?random=8',
    date: '15 Kasım 2025',
    author: 'Emre Kaya'
  },
  {
    id: '9',
    title: 'Dış Politika Gündemi Yoğun',
    description: 'Cumhurbaşkanı komşu ülke ziyaretlerine başlıyor',
    content: 'Cumhurbaşkanı, önümüzdeki haftaki bölge turu kapsamında bir dizi ülkeyi ziyaret edecek. Ziyaretlerde ikili ilişkilerin yanı sıra bölgesel ve uluslararası konular ele alınacak. Dışişleri Bakanlığı yetkilileri, bu ziyaretlerin bölge barışı ve istikrarı için önemli olduğunu vurguladı.',
    category: 'siyaset',
    imageUrl: 'https://picsum.photos/800/500?random=9',
    date: '14 Kasım 2025',
    author: 'Seda Yıldız'
  },
  {
    id: '10',
    title: 'Milletvekillerinden Yeni Yasama Dönemi Açıklaması',
    description: 'TBMM Başkanı, yeni yasama yılına ilişkin açıklamalarda bulundu',
    content: 'TBMM Başkanı, yeni yasama yılına ilişkin değerlendirmelerde bulundu. Ekonomiden eğitime, sağlıktan adalet reformuna kadar birçok konuda yeni düzenlemelerin gündeme geleceğini belirten Başkan, "Halkımızın beklentilerini karşılamak için yoğun bir çalışma dönemine giriyoruz" dedi. Muhalefet partileri ise hükümetin icraatlarını yakından takip edeceklerini açıkladı.',
    category: 'siyaset',
    imageUrl: 'https://picsum.photos/800/500?random=10',
    date: '13 Kasım 2025',
    author: 'Ahmet Can'
  },
  {
    id: '11',
    title: 'Şampiyonlar Ligi\'nde Büyük Mücadele',
    description: 'Türk takımı tarihi galibiyete ulaştı',
    content: 'Şampiyonlar Ligi\'nde mücadele eden Türk temsilcimiz, İspanya\'nın güçlü ekibini sahasında 3-2 mağlup etmeyi başardı. Maçın yıldızı 2 gol 1 asistle oynayan genç yıldızımız oldu. Teknik direktör, "Bu galibiyet takımımızın özgüvenini artıracak. Taraftarlarımıza teşekkür ediyoruz" dedi. Bu sonuçla takımımız gruplarda liderliğe yükseldi.',
    category: 'spor',
    imageUrl: 'https://picsum.photos/800/500?random=11',
    date: '12 Kasım 2025',
    author: 'Burak Yılmaz',
    isBreaking: true
  },
  {
    id: '12',
    title: 'Olimpiyat Hazırlıkları Sürüyor',
    description: 'Milli sporcular kampa girdi',
    content: 'Önümüzdeki yıl düzenlenecek Olimpiyat Oyunları için milli takım kampı başladı. Farklı branşlardan sporcular, olimpiyatlara en iyi şekilde hazırlanmak için antrenmanlara yoğunlaştı. Milli Takımlar Genel Koordinatörü, "Hedefimiz en az 10 madalya ile dönmek. Sporcularımız bu hedef için gece gündüz çalışıyor" açıklamasını yaptı.',
    category: 'spor',
    imageUrl: 'https://picsum.photos/800/500?random=12',
    date: '11 Kasım 2025',
    author: 'Cemil Şahin'
  },
  {
    id: '13',
    title: 'Genç Yetenek Keşfedildi',
    description: '16 yaşındaki tenisçi büyük turnuvada finalde',
    content: 'Genç tenisçimiz, katıldığı uluslararası turnuvada finale yükselerek büyük bir başarıya imza attı. Henüz 16 yaşında olan sporcumuz, sırasıyla dünya sıralamasında üst sıralarda yer alan rakiplerini eleyerek finale adını yazdırdı. Tenis Federasyonu Başkanı, "Bu başarı ülke tenisi adına çok önemli. Genç yeteneğimizi desteklemeye devam edeceğiz" dedi.',
    category: 'spor',
    imageUrl: 'https://picsum.photos/800/500?random=13',
    date: '10 Kasım 2025',
    author: 'Zehra Korkmaz'
  }
];

export const getNewsById = (id: string) => {
  return newsData.find(news => news.id === id);
};

export const getNewsByCategory = (category: string) => {
  return newsData.filter(news => news.category === category);
};
