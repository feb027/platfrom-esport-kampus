/**
 * Home Page Data
 * 
 * This file contains all the data for the home page.
 * In a real application, this data would come from a database or API.
 */

// Featured News Data
const featuredNewsData = [
    {
        id: 'news-1',
        title: 'Tim T1 Legends Juara Mobile Legends Campus Cup',
        excerpt: 'Tim T1 Legends dari Teknik Informatika berhasil menjadi juara dalam turnamen Mobile Legends Campus Cup setelah mengalahkan TE Voltage di final dengan skor 3-1.',
        content: [
            'Tim T1 Legends dari Teknik Informatika berhasil mengukir sejarah dengan menjadi juara dalam turnamen Mobile Legends Campus Cup 2024. Kemenangan ini diraih setelah mengalahkan tim TE Voltage dari Teknik Elektro dalam pertandingan final yang berlangsung sengit dengan skor akhir 3-1.',
            'Pertandingan final yang digelar di Aula Fakultas Teknik pada Sabtu (25/7) berlangsung sangat menegangkan. T1 Legends menunjukkan performa yang luar biasa sejak awal pertandingan dengan strategi yang matang dan koordinasi tim yang solid.',
            'Kapten tim T1 Legends, Ahmad Rizky, mengungkapkan bahwa kemenangan ini adalah hasil dari latihan intensif selama tiga bulan terakhir. "Kami berlatih hampir setiap hari, menganalisis meta game terkini, dan mempersiapkan berbagai strategi untuk menghadapi setiap lawan," ujarnya setelah pertandingan.',
            'Turnamen Mobile Legends Campus Cup 2024 ini diikuti oleh 32 tim dari berbagai fakultas di Universitas Siliwangi. Total hadiah yang diperebutkan mencapai Rp 10 juta, dengan T1 Legends membawa pulang hadiah utama sebesar Rp 5 juta.',
            'Ketua UKM E-Sports UNSIL, Budi Santoso, menyatakan bahwa turnamen ini merupakan bukti berkembangnya ekosistem e-sports di lingkungan kampus. "Kami berharap prestasi ini dapat memotivasi mahasiswa lain untuk terlibat dalam e-sports dan mengharumkan nama kampus di level yang lebih tinggi," tambahnya.'
        ],
        date: '2024-07-25',
        image: 'assets/news1.jpg',
        category: 'Turnamen',
        link: 'news-detail.html?id=news-1'
    },
    {
        id: 'news-2',
        title: 'Jadwal Resmi Turnamen Valorant Campus 2023',
        excerpt: 'UKM E-Sports UNSIL resmi mengumumkan jadwal turnamen Valorant Campus 2023 yang akan diselenggarakan pada bulan Oktober 2023.',
        content: [
            'UKM E-Sports Universitas Siliwangi (UNSIL) resmi mengumumkan jadwal pelaksanaan turnamen Valorant Campus 2023. Turnamen yang ditunggu-tunggu ini akan diselenggarakan mulai tanggal 15 hingga 30 Oktober 2023.',
            'Turnamen ini akan mengusung format yang berbeda dari tahun sebelumnya, dengan sistem grup di babak awal dilanjutkan dengan sistem single elimination di babak playoff. Total 16 tim akan bertanding memperebutkan total hadiah senilai Rp 7,5 juta.',
            'Koordinator turnamen, Deni Hermawan, menjelaskan beberapa perubahan penting dalam turnamen tahun ini. "Kami menerapkan sistem veto map yang lebih adil dan menghadirkan observer khusus untuk meningkatkan kualitas streaming pertandingan," jelasnya dalam konferensi pers virtual.',
            'Jadwal lengkap turnamen:',
            '- Pendaftaran: 1-30 September 2023',
            '- Technical Meeting: 10 Oktober 2023',
            '- Babak Grup: 15-22 Oktober 2023',
            '- Babak Playoff: 23-29 Oktober 2023',
            '- Grand Final: 30 Oktober 2023',
            'Pendaftaran dapat dilakukan secara online melalui website resmi UKM E-Sports UNSIL dengan biaya pendaftaran Rp 200.000 per tim. Setiap tim wajib terdiri dari 5 pemain inti dan 1 pemain cadangan.'
        ],
        date: '2024-09-18',
        image: 'assets/news2.jpg',
        category: 'Pengumuman',
        link: 'news-detail.html?id=news-2'
    },
    {
        id: 'news-3',
        title: 'Workshop: Menjadi Pro Player E-Sports',
        excerpt: 'Workshop tentang bagaimana menjadi pro player e-sports akan diselenggarakan pada 30 September 2023 dengan menghadirkan pro player dari tim profesional.',
        content: [
            'UKM E-Sports UNSIL bekerja sama dengan EVOS Esports akan menyelenggarakan workshop bertema "Pathway to Become a Pro Player" pada tanggal 30 September 2023. Workshop ini akan menghadirkan beberapa pro player dan pelatih dari tim profesional EVOS Esports.',
            'Workshop ini akan membahas berbagai aspek penting dalam karir sebagai pro player, termasuk:',
            '- Mental preparation dan manajemen stress',
            '- Latihan efektif dan pengembangan skill',
            '- Membangun personal branding',
            '- Manajemen waktu antara gaming dan pendidikan',
            '- Tips dan trik menjadi pro player',
            'Pembicara utama dalam workshop ini adalah Gustian "REKT" Hidayat, pro player Valorant EVOS, dan Cahya "Cahyogen" Nugraha, pelatih tim Mobile Legends EVOS Legends. Keduanya akan berbagi pengalaman dan memberikan insight berharga bagi para peserta.',
            'Workshop akan dilaksanakan di Aula Fakultas Teknik UNSIL mulai pukul 09.00 WIB. Pendaftaran dapat dilakukan secara online dengan biaya Rp 50.000 per orang, termasuk sertifikat dan merchandise eksklusif.',
            'Ketua panitia workshop, Siti Nurhaliza, mengatakan bahwa acara ini merupakan kesempatan emas bagi mahasiswa yang bermimpi menjadi pro player. "Kami berharap workshop ini dapat memberikan gambaran jelas tentang dunia e-sports profesional dan membantu peserta memahami langkah-langkah yang diperlukan untuk mencapai mimpi mereka," ujarnya.'
        ],
        date: '2024-09-15',
        image: 'assets/news3.jpg',
        category: 'Event',
        link: 'news-detail.html?id=news-3'
    }
];

// Recent News Data
const recentNewsData = [
    {
        id: 'news-4',
        title: 'Pendaftaran Turnamen PUBG Mobile UNSIL Championship 2023',
        excerpt: 'Pendaftaran untuk turnamen PUBG Mobile UNSIL Championship 2023 telah dibuka. Turnamen akan dilaksanakan pada November 2023.',
        date: '2023-09-12',
        image: 'assets/news4.jpg',
        category: 'Pengumuman',
        link: 'news-detail.html?id=news-4'
    },
    {
        id: 'news-5',
        title: 'Hasil Pertandingan PUBG Mobile Battle Juni 2023',
        excerpt: 'FM Squad berhasil menjadi juara turnamen PUBG Mobile Battle Juni 2023 setelah mengalahkan TI Hunters dengan perbedaan poin tipis.',
        date: '2023-06-20',
        image: 'assets/news5.jpg',
        category: 'Hasil',
        link: 'news-detail.html?id=news-5'
    },
    {
        id: 'news-6',
        title: 'Peresmian Ruang Gaming UKM E-Sports UNSIL',
        excerpt: 'UKM E-Sports UNSIL meresmikan ruang gaming baru yang dilengkapi dengan perangkat gaming berkualitas tinggi untuk latihan tim e-sports kampus.',
        date: '2023-08-05',
        image: 'assets/news6.jpg',
        category: 'Fasilitas',
        link: 'news-detail.html?id=news-6'
    }
];

// Upcoming Matches Data
const upcomingMatchesData = [
    {
        id: 'match-1',
        game: 'mobile-legends',
        gameName: 'Mobile Legends',
        tournament: 'UNSIL Mobile Legends Series',
        teams: {
            team1: {
                name: 'TI Legends',
                logo: 'https://place-hold.it/60x60/3498db/ffffff&text=TI&fontsize=20',
                faculty: 'Teknik Informatika'
            },
            team2: {
                name: 'FE Warriors',
                logo: 'https://place-hold.it/60x60/f39c12/ffffff&text=FE&fontsize=20',
                faculty: 'Fakultas Ekonomi'
            }
        },
        date: '2025-03-25',
        time: '15:00',
        location: 'Ruang Gaming UKM',
        streaming: 'https://www.youtube.com/live'
    },
    {
        id: 'match-2',
        game: 'valorant',
        gameName: 'Valorant',
        tournament: 'Valorant Campus Cup',
        teams: {
            team1: {
                name: 'TI Enforcers',
                logo: 'https://place-hold.it/60x60/3498db/ffffff&text=TI&fontsize=20',
                faculty: 'Teknik Informatika'
            },
            team2: {
                name: 'FM Tacticals',
                logo: 'https://place-hold.it/60x60/2ecc71/ffffff&text=FM&fontsize=20',
                faculty: 'FMIPA'
            }
        },
        date: '2025-04-01',
        time: '13:00',
        location: 'Aula Fakultas Teknik',
        streaming: 'https://www.twitch.tv/live'
    },
    {
        id: 'match-3',
        game: 'pubg-mobile',
        gameName: 'PUBG Mobile',
        tournament: 'UNSIL PUBG Championship',
        teams: {
            team1: {
                name: 'TI Hunters',
                logo: 'https://place-hold.it/60x60/3498db/ffffff&text=TI&fontsize=20',
                faculty: 'Teknik Informatika'
            },
            team2: {
                name: 'TE Voltage',
                logo: 'https://place-hold.it/60x60/e74c3c/ffffff&text=TE&fontsize=20',
                faculty: 'Teknik Elektro'
            }
        },
        date: '2025-04-02',
        time: '14:30',
        location: 'Ruang Gaming UKM',
        streaming: 'https://www.youtube.com/live'
    }
];

// Tournaments Data
const tournamentsData = [
    {
        id: 'tournament-1',
        name: 'Mobile Legends Campus Cup',
        game: 'mobile-legends',
        gameName: 'Mobile Legends',
        startDate: '2025-04-01',
        endDate: '2025-04-10',
        registrationEnd: '2025-03-25',
        prize: 'Rp 3.000.000',
        image: 'assets/tournament1.jpg',
        status: 'registration',
        link: 'tournament-detail.html?id=tournament-1'
    },
    {
        id: 'tournament-2',
        name: 'Valorant Campus Challenge',
        game: 'valorant',
        gameName: 'Valorant CUP',
        startDate: '2025-04-01',
        endDate: '2025-04-10',
        registrationEnd: '2025-03-25',
        prize: 'Rp 3.500.000',
        image: 'assets/tournament2.jpg',
        status: 'registration',
        link: 'tournament-detail.html?id=tournament-2'
    },
    {
        id: 'tournament-3',
        name: 'PUBG Mobile Championship',
        game: 'pubg-mobile',
        gameName: 'PUBG Mobile',
        startDate: '2025-04-05',
        endDate: '2025-04-15',
        registrationEnd: '2025-03-30',
        prize: 'Rp 2.500.000',
        image: 'assets/tournament3.jpg',
        status: 'registration',
        link: 'tournament-detail.html?id=tournament-3'
    },
    {
        id: 'tournament-4',
        name: 'FIFA 23 Solo Tournament',
        game: 'fifa',
        gameName: 'FIFA 23 Console',
        startDate: '2025-04-20',
        endDate: '2025-04-22',
        registrationEnd: '2025-03-15',
        prize: 'Rp 1.500.000',
        image: 'assets/tournament4.jpg',
        status: 'registration',
        link: 'tournament-detail.html?id=tournament-4'
    },
    {
        id: 'tournament-5',
        name: 'CS2 Solo Tournament',
        game: 'cs2',
        gameName: 'Counter Strike 2',
        startDate: '2025-04-03',
        endDate: '2025-04-05',
        registrationEnd: '2025-03-30',
        prize: 'Rp 1.500.000',
        image: 'assets/tournament5.jpg',
        status: 'registration',
        link: 'tournament-detail.html?id=tournament-5'
    },
    {
        id: 'tournament-6',
        name: 'Honor Of Kings Tournament',
        game: 'honor-of-kings',
        gameName: 'Honor Of Kings',
        startDate: '2025-04-03',
        endDate: '2025-04-05',
        registrationEnd: '2025-03-30',
        prize: 'Rp 1.500.000',
        image: 'assets/tournament6.jpg',
        status: 'registration',
        link: 'tournament-detail.html?id=tournament-6'
    }
];

// Export all data
const homeData = {
    featuredNews: featuredNewsData,
    recentNews: recentNewsData,
    upcomingMatches: upcomingMatchesData,
    tournaments: tournamentsData
};
