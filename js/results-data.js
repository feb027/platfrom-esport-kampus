/**
 * Results Data
 * 
 * This file contains all the dummy data for the results page.
 * In a real application, this data would come from a database or API.
 * The data is structured to be easily maintainable and loaded into the page dynamically.
 */

// Tournament Results Data
const tournamentsData = [
    {
        id: 'fifa-2023',
        name: 'UNSIL FIFA 2023 Championship',
        game: 'fifa',
        gameName: 'FIFA 2023',
        date: {
            start: '2023-08-05',
            end: '2023-08-10'
        },
        format: 'Single Elimination',
        participants: 32,
        banner: 'https://images.unsplash.com/photo-1560253023-fa94f6e46f2b',
        status: 'completed',
        winner: {
            name: 'Budi Setiawan',
            team: 'Solo Player',
            faculty: 'Teknik Informatika',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        runner_up: {
            name: 'Ahmad Fauzi',
            team: 'Solo Player',
            faculty: 'Teknik Elektro',
            image: 'https://randomuser.me/api/portraits/men/44.jpg'
        },
        semifinalists: [
            {
                name: 'Rudi Hartono',
                team: 'Solo Player',
                faculty: 'Fakultas Ekonomi',
                image: 'https://randomuser.me/api/portraits/men/55.jpg'
            },
            {
                name: 'Deni Sumargo',
                team: 'Solo Player',
                faculty: 'FKIP',
                image: 'https://randomuser.me/api/portraits/men/67.jpg'
            }
        ],
        description: 'Turnamen FIFA 2023 pertama yang diselenggarakan oleh UKM E-Sports Universitas Siliwangi. Turnamen ini diikuti oleh 32 peserta dari berbagai fakultas.',
        prize: 'Rp 1.500.000'
    },
    {
        id: 'ml-championship-july',
        name: 'Mobile Legends Campus Cup',
        game: 'mobile-legends',
        gameName: 'Mobile Legends',
        date: {
            start: '2023-07-15',
            end: '2023-07-25'
        },
        format: 'Double Elimination',
        participants: 16,
        banner: 'https://images.unsplash.com/photo-1542751110-97427bbecf20',
        status: 'completed',
        winner: {
            name: 'TI Legends',
            faculty: 'Teknik Informatika',
            image: 'https://place-hold.it/100x100/3498db/ffffff&text=TI&fontsize=28'
        },
        runner_up: {
            name: 'TE Voltage',
            faculty: 'Teknik Elektro',
            image: 'https://place-hold.it/100x100/e74c3c/ffffff&text=TE&fontsize=28'
        },
        semifinalists: [
            {
                name: 'FE Warriors',
                faculty: 'Fakultas Ekonomi',
                image: 'https://place-hold.it/100x100/f39c12/ffffff&text=FE&fontsize=28'
            },
            {
                name: 'FKIP Educators',
                faculty: 'FKIP',
                image: 'https://place-hold.it/100x100/9b59b6/ffffff&text=FKIP&fontsize=28'
            }
        ],
        description: 'Turnamen Mobile Legends antar jurusan di Universitas Siliwangi dengan total hadiah jutaan rupiah. Turnamen ini menggunakan format Double Elimination.',
        prize: 'Rp 3.000.000'
    },
    {
        id: 'pubg-battle-june',
        name: 'UNSIL PUBG Mobile Battle',
        game: 'pubg-mobile',
        gameName: 'PUBG Mobile',
        date: {
            start: '2023-06-10',
            end: '2023-06-20'
        },
        format: 'Points System',
        participants: 20,
        banner: 'https://images.unsplash.com/photo-1518131945814-df06f707ae9f',
        status: 'completed',
        winner: {
            name: 'FM Squad',
            faculty: 'Fakultas MIPA',
            image: 'https://place-hold.it/100x100/2ecc71/ffffff&text=FM&fontsize=28'
        },
        runner_up: {
            name: 'TI Hunters',
            faculty: 'Teknik Informatika',
            image: 'https://place-hold.it/100x100/3498db/ffffff&text=TI&fontsize=28'
        },
        semifinalists: [
            {
                name: 'TS Builders',
                faculty: 'Teknik Sipil',
                image: 'https://place-hold.it/100x100/e67e22/ffffff&text=TS&fontsize=28'
            },
            {
                name: 'FK Medics',
                faculty: 'Fakultas Kedokteran',
                image: 'https://place-hold.it/100x100/8e44ad/ffffff&text=FK&fontsize=28'
            }
        ],
        description: 'Turnamen PUBG Mobile antar fakultas dengan format Points System. Tim dengan total poin tertinggi setelah 4 pertandingan adalah pemenangnya.',
        prize: 'Rp. 2.500.000'
    },
    {
        id: 'valorant-challenge-may',
        name: 'UNSIL Valorant Challenge',
        game: 'valorant',
        gameName: 'Valorant',
        date: {
            start: '2023-05-08',
            end: '2023-05-18'
        },
        format: 'Single Elimination',
        participants: 12,
        banner: 'https://images.unsplash.com/photo-1542332213-31f87348057f',
        status: 'completed',
        winner: {
            name: 'TI Enforcers',
            faculty: 'Teknik Informatika',
            image: 'https://place-hold.it/100x100/3498db/ffffff&text=TI&fontsize=28'
        },
        runner_up: {
            name: 'FM Tacticals',
            faculty: 'Fakultas MIPA',
            image: 'https://place-hold.it/100x100/2ecc71/ffffff&text=FM&fontsize=28'
        },
        semifinalists: [
            {
                name: 'FE Traders',
                faculty: 'Fakultas Ekonomi',
                image: 'https://place-hold.it/100x100/f39c12/ffffff&text=FE&fontsize=28'
            },
            {
                name: 'FH Justice',
                faculty: 'Fakultas Hukum',
                image: 'https://place-hold.it/100x100/27ae60/ffffff&text=FH&fontsize=28'
            }
        ],
        description: 'Turnamen Valorant pertama yang diselenggarakan oleh UKM E-Sports Universitas Siliwangi. Format turnamen adalah Single Elimination dengan sistem BO3.',
        prize: 'Rp 3.500.000'
    }
];

// Match Results Data
const matchesData = [
    // FIFA Championship Finals
    {
        id: 'match-fifa-final',
        tournament_id: 'fifa-2023',
        tournament_name: 'UNSIL FIFA 2023 Championship',
        round: 'Final',
        date: '2023-08-10',
        game: 'fifa',
        gameName: 'FIFA 2023',
        team_a: {
            name: 'Budi Setiawan',
            faculty: 'Teknik Informatika',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            score: 3
        },
        team_b: {
            name: 'Ahmad Fauzi',
            faculty: 'Teknik Elektro',
            image: 'https://randomuser.me/api/portraits/men/44.jpg',
            score: 2
        },
        format: 'BO5',
        winner: 'team_a',
        highlights: 'https://www.youtube.com/watch?v=example',
        mvp: 'Budi Setiawan'
    },
    // Mobile Legends Championship Finals
    {
        id: 'match-ml-final',
        tournament_id: 'ml-championship-july',
        tournament_name: 'Mobile Legends Campus Cup',
        round: 'Final',
        date: '2023-07-25',
        game: 'mobile-legends',
        gameName: 'Mobile Legends',
        team_a: {
            name: 'TI Legends',
            faculty: 'Teknik Informatika',
            image: 'https://place-hold.it/100x100/3498db/ffffff&text=TI&fontsize=28',
            score: 3
        },
        team_b: {
            name: 'TE Voltage',
            faculty: 'Teknik Elektro',
            image: 'https://place-hold.it/100x100/e74c3c/ffffff&text=TE&fontsize=28',
            score: 1
        },
        format: 'BO5',
        winner: 'team_a',
        highlights: 'https://www.youtube.com/watch?v=example',
        mvp: 'Rizky Fauzan (TI Legends)'
    },
    // PUBG Mobile Finals
    {
        id: 'match-pubg-final',
        tournament_id: 'pubg-battle-june',
        tournament_name: 'UNSIL PUBG Mobile Battle',
        round: 'Final',
        date: '2023-06-20',
        game: 'pubg-mobile',
        gameName: 'PUBG Mobile',
        team_a: {
            name: 'FM Squad',
            faculty: 'Fakultas MIPA',
            image: 'https://place-hold.it/100x100/2ecc71/ffffff&text=FM&fontsize=28',
            score: 'Poin: 87'
        },
        team_b: {
            name: 'TI Hunters',
            faculty: 'Teknik Informatika',
            image: 'https://place-hold.it/100x100/3498db/ffffff&text=TI&fontsize=28',
            score: 'Poin: 82'
        },
        format: '4 Maps',
        winner: 'team_a',
        highlights: 'https://www.youtube.com/watch?v=example',
        mvp: 'Deni Wijaya (FM Squad)'
    },
    // More match results can be added here
    {
        id: 'match-valorant-semifinal1',
        tournament_id: 'valorant-challenge-may',
        tournament_name: 'UNSIL Valorant Challenge',
        round: 'Semi Final',
        date: '2023-05-16',
        game: 'valorant',
        gameName: 'Valorant',
        team_a: {
            name: 'TI Enforcers',
            faculty: 'Teknik Informatika',
            image: 'https://place-hold.it/100x100/3498db/ffffff&text=TI&fontsize=28',
            score: 2
        },
        team_b: {
            name: 'FE Traders',
            faculty: 'Fakultas Ekonomi',
            image: 'https://place-hold.it/100x100/f39c12/ffffff&text=FE&fontsize=28',
            score: 0
        },
        format: 'BO3',
        winner: 'team_a',
        highlights: 'https://www.youtube.com/watch?v=example',
        mvp: 'Arif Budiman (TI Enforcers)'
    },
    // Add more matches as needed...
];

// Champions Data
const championsData = [
    {
        tournament_id: 'ml-championship-july',
        tournament_name: 'Mobile Legends Campus Cup',
        game: 'mobile-legends',
        date: '2023-07-25',
        team: {
            name: 'TI Legends',
            faculty: 'Teknik Informatika',
            image: 'https://place-hold.it/100x100/3498db/ffffff&text=TI&fontsize=28',
            members: [
                'Rizky Fauzan (Captain)',
                'Budi Setiawan',
                'Ahmad Dani',
                'Faisal Rahman',
                'Ridwan Kamil'
            ]
        },
        prize: 'Rp 3.000.000',
        banner: 'https://images.unsplash.com/photo-1542751110-97427bbecf20'
    },
    {
        tournament_id: 'pubg-battle-june',
        tournament_name: 'UNSIL PUBG Mobile Battle',
        game: 'pubg-mobile',
        date: '2023-06-20',
        team: {
            name: 'FM Squad',
            faculty: 'Fakultas MIPA',
            image: 'https://place-hold.it/100x100/2ecc71/ffffff&text=FM&fontsize=28',
            members: [
                'Deni Wijaya (Captain)',
                'Bayu Segara',
                'Gunawan Prasetyo',
                'Hendra Kusuma'
            ]
        },
        prize: 'Rp 2.500.000',
        banner: 'https://images.unsplash.com/photo-1518131945814-df06f707ae9f'
    },
    {
        tournament_id: 'valorant-challenge-may',
        tournament_name: 'UNSIL Valorant Challenge',
        game: 'valorant',
        date: '2023-05-18',
        team: {
            name: 'TI Enforcers',
            faculty: 'Teknik Informatika',
            image: 'https://place-hold.it/100x100/3498db/ffffff&text=TI&fontsize=28',
            members: [
                'Arif Budiman (Captain)',
                'Dedi Supriadi',
                'Galih Pratama',
                'Irfan Maulana',
                'Joko Widodo'
            ]
        },
        prize: 'Rp 3.500.000',
        banner: 'https://images.unsplash.com/photo-1542332213-31f87348057f'
    }
];

// Statistics Data - Teams
const teamsStatsData = [
    {
        rank: 1,
        team: 'TI Legends',
        faculty: 'Teknik Informatika',
        image: 'https://place-hold.it/50x50/3498db/ffffff&text=TI&fontsize=18',
        tournaments: 7,
        championships: 3,
        runner_ups: 1,
        points: 256
    },
    {
        rank: 2,
        team: 'FM Squad',
        faculty: 'Fakultas MIPA',
        image: 'https://place-hold.it/50x50/2ecc71/ffffff&text=FM&fontsize=18',
        tournaments: 5,
        championships: 2,
        runner_ups: 2,
        points: 230
    },
    {
        rank: 3,
        team: 'FE Warriors',
        faculty: 'Fakultas Ekonomi',
        image: 'https://place-hold.it/50x50/f39c12/ffffff&text=FE&fontsize=18',
        tournaments: 6,
        championships: 1,
        runner_ups: 3,
        points: 204
    },
    {
        rank: 4,
        team: 'TE Voltage',
        faculty: 'Teknik Elektro',
        image: 'https://place-hold.it/50x50/e74c3c/ffffff&text=TE&fontsize=18',
        tournaments: 5,
        championships: 1,
        runner_ups: 2,
        points: 180
    },
    {
        rank: 5,
        team: 'FK Medics',
        faculty: 'Fakultas Kedokteran',
        image: 'https://place-hold.it/50x50/8e44ad/ffffff&text=FK&fontsize=18',
        tournaments: 4,
        championships: 1,
        runner_ups: 0,
        points: 140
    }
    // More teams can be added here
];

// Statistics Data - Players
const playersStatsData = [
    {
        rank: 1,
        player: 'Rizky Fauzan',
        team: 'TI Legends',
        game: 'Mobile Legends',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        mvp: 5,
        matches: 15,
        win_rate: '87%',
        points: 175
    },
    {
        rank: 2,
        player: 'Deni Wijaya',
        team: 'FM Squad',
        game: 'PUBG Mobile',
        image: 'https://randomuser.me/api/portraits/men/44.jpg',
        mvp: 4,
        matches: 12,
        win_rate: '83%',
        points: 160
    },
    {
        rank: 3,
        player: 'Arif Budiman',
        team: 'TI Enforcers',
        game: 'Valorant',
        image: 'https://randomuser.me/api/portraits/men/55.jpg',
        mvp: 3,
        matches: 10,
        win_rate: '80%',
        points: 145
    },
    {
        rank: 4,
        player: 'Budi Setiawan',
        team: 'Solo Player',
        game: 'FIFA 2023',
        image: 'https://randomuser.me/api/portraits/men/67.jpg',
        mvp: 3,
        matches: 8,
        win_rate: '75%',
        points: 130
    },
    {
        rank: 5,
        player: 'Faisal Rahman',
        team: 'TI Legends',
        game: 'Mobile Legends',
        image: 'https://randomuser.me/api/portraits/men/77.jpg',
        mvp: 2,
        matches: 15,
        win_rate: '73%',
        points: 128
    }
    // More players can be added here
];

// Statistics Data - Games
const gamesStatsData = [
    {
        game: 'mobile-legends',
        name: 'Mobile Legends',
        image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
        tournaments: 7,
        total_matches: 56,
        total_teams: 28,
        top_team: 'TI Legends',
        most_mvp: 'Rizky Fauzan'
    },
    {
        game: 'pubg-mobile',
        name: 'PUBG Mobile',
        image: 'https://images.unsplash.com/photo-1518131945814-df06f707ae9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
        tournaments: 5,
        total_matches: 40,
        total_teams: 25,
        top_team: 'FM Squad',
        most_mvp: 'Deni Wijaya'
    },
    {
        game: 'valorant',
        name: 'Valorant',
        image: 'https://images.unsplash.com/photo-1542332213-31f87348057f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
        tournaments: 4,
        total_matches: 32,
        total_teams: 18,
        top_team: 'TI Enforcers',
        most_mvp: 'Arif Budiman'
    },
    {
        game: 'fifa',
        name: 'FIFA 2023',
        image: 'https://images.unsplash.com/photo-1560253023-fa94f6e46f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
        tournaments: 3,
        total_matches: 64,
        total_teams: 'N/A (Solo)',
        top_team: 'N/A (Solo)',
        most_mvp: 'Budi Setiawan'
    },
    {
        game: 'free-fire',
        name: 'Free Fire',
        image: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
        tournaments: 2,
        total_matches: 24,
        total_teams: 16,
        top_team: 'TS Builders',
        most_mvp: 'Gunawan Hartono'
    }
];

// Archive Data
const archiveData = {
    '2023': {
        tournaments: [
            {
                id: 'fifa-2023',
                name: 'UNSIL FIFA 2023 Championship',
                date: '2023-08-05',
                winner: 'Budi Setiawan (Teknik Informatika)'
            },
            {
                id: 'ml-championship-july',
                name: 'Mobile Legends Campus Cup',
                date: '2023-07-15',
                winner: 'TI Legends (Teknik Informatika)'
            },
            {
                id: 'pubg-battle-june',
                name: 'UNSIL PUBG Mobile Battle',
                date: '2023-06-10',
                winner: 'FM Squad (Fakultas MIPA)'
            },
            {
                id: 'valorant-challenge-may',
                name: 'UNSIL Valorant Challenge',
                date: '2023-05-08',
                winner: 'TI Enforcers (Teknik Informatika)'
            }
        ]
    },
    '2022': {
        tournaments: [
            {
                id: 'ml-championship-2022',
                name: 'Mobile Legends Championship 2022',
                date: '2022-11-15',
                winner: 'FE Warriors (Fakultas Ekonomi)'
            },
            {
                id: 'pubg-tournament-2022',
                name: 'PUBG Mobile Tournament 2022',
                date: '2022-09-10',
                winner: 'TE Voltage (Teknik Elektro)'
            },
            {
                id: 'fifa-cup-2022',
                name: 'FIFA Cup 2022',
                date: '2022-07-05',
                winner: 'Ahmad Fauzi (Teknik Elektro)'
            }
        ]
    },
    '2021': {
        tournaments: [
            {
                id: 'ml-tournament-2021',
                name: 'Mobile Legends Tournament 2021',
                date: '2021-10-20',
                winner: 'TI Legends (Teknik Informatika)'
            },
            {
                id: 'free-fire-cup-2021',
                name: 'Free Fire Cup 2021',
                date: '2021-08-12',
                winner: 'FK Medics (Fakultas Kedokteran)'
            }
        ]
    }
};

// Consolidated data object to export all data
const resultsData = {
    tournaments: tournamentsData,
    matches: matchesData,
    champions: championsData,
    stats: {
        teams: teamsStatsData,
        players: playersStatsData,
        games: gamesStatsData
    },
    archive: archiveData
};

// Now we'll need to populate this data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Results data loaded successfully');
    // The actual data population will be handled by results-functions.js
});
