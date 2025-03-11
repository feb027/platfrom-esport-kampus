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
        title: 'Tim TI Legends Juara Mobile Legends Campus Cup',
        excerpt: 'Tim TI Legends dari Teknik Informatika berhasil menjadi juara dalam turnamen Mobile Legends Campus Cup setelah mengalahkan TE Voltage di final dengan skor 3-1.',
        date: '2023-07-25',
        image: 'assets/news1.jpg',
        category: 'Turnamen',
        link: 'news-detail.html?id=news-1'
    },
    {
        id: 'news-2',
        title: 'Jadwal Resmi Turnamen Valorant Campus 2023',
        excerpt: 'UKM E-Sports UNSIL resmi mengumumkan jadwal turnamen Valorant Campus 2023 yang akan diselenggarakan pada bulan Oktober 2023.',
        date: '2023-09-18',
        image: 'assets/news2.jpg',
        category: 'Pengumuman',
        link: 'news-detail.html?id=news-2'
    },
    {
        id: 'news-3',
        title: 'Workshop: Menjadi Pro Player E-Sports',
        excerpt: 'Workshop tentang bagaimana menjadi pro player e-sports akan diselenggarakan pada 30 September 2023 dengan menghadirkan pro player dari tim profesional.',
        date: '2023-09-15',
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
        date: '2023-10-05',
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
        date: '2023-10-07',
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
        date: '2023-10-10',
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
        startDate: '2023-10-15',
        endDate: '2023-10-25',
        registrationEnd: '2023-10-10',
        prize: 'Rp 3.000.000',
        image: 'assets/tournament1.jpg',
        status: 'registration',
        link: 'tournament-detail.html?id=tournament-1'
    },
    {
        id: 'tournament-2',
        name: 'Valorant Campus Challenge',
        game: 'valorant',
        gameName: 'Valorant',
        startDate: '2023-10-07',
        endDate: '2023-10-21',
        registrationEnd: '2023-09-30',
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
        startDate: '2023-11-05',
        endDate: '2023-11-15',
        registrationEnd: '2023-10-30',
        prize: 'Rp 2.500.000',
        image: 'assets/tournament3.jpg',
        status: 'registration',
        link: 'tournament-detail.html?id=tournament-3'
    },
    {
        id: 'tournament-4',
        name: 'FIFA 23 Solo Tournament',
        game: 'fifa',
        gameName: 'FIFA 23',
        startDate: '2023-10-20',
        endDate: '2023-10-22',
        registrationEnd: '2023-10-15',
        prize: 'Rp 1.500.000',
        image: 'assets/tournament4.jpg',
        status: 'registration',
        link: 'tournament-detail.html?id=tournament-4'
    }
];

// Export all data
const homeData = {
    featuredNews: featuredNewsData,
    recentNews: recentNewsData,
    upcomingMatches: upcomingMatchesData,
    tournaments: tournamentsData
};
