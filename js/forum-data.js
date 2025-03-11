/**
 * Forum Data
 * 
 * This file contains all the dummy data for the forum page.
 * In a real application, this data would come from a database or API.
 */

// Forum Categories
const forumCategories = [
    {
        id: 'mobile-legends',
        name: 'Mobile Legends',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.043 1.271a7 7 0 1 1 7.913 10.62.998.998 0 0 0-.111.025 7 7 0 1 1-7.8-10.646l-.002.001zm.957 13.672v-3.073h1v3.073h-1zm3.957-3.073v3.073h-1v-3.073h1zM7.5 11.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m2-1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"/></svg>',
        topics: 42,
        description: 'Diskusi tentang game Mobile Legends: Bang Bang'
    },
    {
        id: 'valorant',
        name: 'Valorant',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/></svg>',
        topics: 36,
        description: 'Diskusi tentang game Valorant dari Riot Games'
    },
    {
        id: 'pubg-mobile',
        name: 'PUBG Mobile',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.6 2.5a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H9.75a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5zm-8.25 2a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1-.5-.5zm-3.75 3a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5z"/></svg>',
        topics: 29,
        description: 'Diskusi tentang game PUBG Mobile'
    },
    {
        id: 'free-fire',
        name: 'Free Fire',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/></svg>',
        topics: 24,
        description: 'Diskusi tentang game Garena Free Fire'
    },
    {
        id: 'fifa',
        name: 'FIFA',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866zM8 5.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1z"/></svg>',
        topics: 18,
        description: 'Diskusi tentang game FIFA'
    },
    {
        id: 'tournaments',
        name: 'Turnamen',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/></svg>',
        topics: 31,
        description: 'Diskusi tentang turnamen e-sport kampus'
    },
    {
        id: 'general',
        name: 'Umum',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>',
        topics: 54,
        description: 'Diskusi umum tentang e-sports'
    }
];

// Forum Threads (Topics)
const forumThreads = [
    {
        id: 1,
        title: 'Tips bermain Mobile Legends untuk pemula',
        category_id: 'mobile-legends',
        author: {
            name: 'Rizky Fauzan',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            role: 'Member'
        },
        created_at: '2023-09-20T14:30:00',
        content: 'Halo semua, saya ingin berbagi beberapa tips bagi pemula yang baru memulai bermain Mobile Legends. Berikut beberapa tips yang mungkin bermanfaat:\n\n1. Pelajari minimal 2-3 hero dari setiap role\n2. Selalu perhatikan mini map\n3. Jangan lupa farming\n4. Koordinasi dengan tim sangat penting\n\nBagaimana menurut kalian? Ada tips lain yang ingin ditambahkan?',
        tags: ['tips', 'pemula', 'mobile-legends'],
        replies: 15,
        views: 342,
        last_reply: {
            author: {
                name: 'Ahmad Dani',
                image: 'https://randomuser.me/api/portraits/men/44.jpg'
            },
            created_at: '2023-09-22T10:15:00'
        }
    },
    {
        id: 2,
        title: 'Jadwal turnamen Valorant kampus bulan Oktober',
        category_id: 'tournaments',
        author: {
            name: 'Arif Budiman',
            image: 'https://randomuser.me/api/portraits/men/55.jpg',
            role: 'Moderator'
        },
        created_at: '2023-09-18T09:45:00',
        content: 'Halo teman-teman, berikut jadwal turnamen Valorant kampus di bulan Oktober:\n\n- 7-8 Oktober: Kualifikasi Awal\n- 14-15 Oktober: Semifinal\n- 21 Oktober: Final\n\nPendaftaran tim sudah dibuka mulai hari ini sampai tanggal 30 September. Setiap tim harus berisi 5 pemain utama dan 1 pemain cadangan. Pendaftaran bisa dilakukan di website resmi turnamen atau menghubungi panitia melalui Discord.\n\nSiapkan tim kalian dan semoga beruntung!',
        tags: ['valorant', 'turnamen', 'jadwal'],
        replies: 28,
        views: 567,
        last_reply: {
            author: {
                name: 'Deni Wijaya',
                image: 'https://randomuser.me/api/portraits/men/67.jpg'
            },
            created_at: '2023-09-23T16:40:00'
        }
    },
    {
        id: 3,
        title: 'Pengumuman: Server maintenance PUBG Mobile',
        category_id: 'pubg-mobile',
        author: {
            name: 'Bayu Segara',
            image: 'https://randomuser.me/api/portraits/men/77.jpg',
            role: 'Admin'
        },
        created_at: '2023-09-21T18:20:00',
        content: 'PUBG Mobile akan melakukan maintenance server pada:\n\nTanggal: 25 September 2023\nWaktu: 00:00 - 08:00 WIB\n\nSelama maintenance, server akan offline dan game tidak dapat dimainkan. Setelah maintenance selesai, kalian akan mendapatkan kompensasi berupa:\n\n- 3000 BP\n- 100 AG\n- Item Parachute sementara (7 hari)\n\nMohon maaf atas ketidaknyamanannya. Terima kasih atas pengertian kalian.',
        tags: ['pengumuman', 'maintenance', 'pubg-mobile'],
        replies: 5,
        views: 198,
        last_reply: {
            author: {
                name: 'Gunawan Prasetyo',
                image: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            created_at: '2023-09-22T20:05:00'
        }
    },
    {
        id: 4,
        title: 'Strategi terbaik untuk Tim Squad di Free Fire',
        category_id: 'free-fire',
        author: {
            name: 'Dedi Supriadi',
            image: 'https://randomuser.me/api/portraits/men/35.jpg',
            role: 'Member'
        },
        created_at: '2023-09-17T12:10:00',
        content: 'Hai squad Free Fire! Saya ingin sharing strategi yang cukup efektif untuk tim squad di Free Fire berdasarkan pengalaman saya dan tim bermain selama ini.\n\nBeberapa hal yang perlu diperhatikan:\n\n1. Pilih kombinasi karakter yang saling melengkapi\n2. Drop location yang tepat (hindari tempat yang terlalu ramai di awal game)\n3. Komunikasi yang jelas dan singkat\n4. Formasi ketika bergerak (jangan terlalu menyebar atau terlalu mengumpul)\n\nApa strategi khusus yang kalian terapkan dalam tim?',
        tags: ['strategi', 'squad', 'free-fire'],
        replies: 19,
        views: 278,
        last_reply: {
            author: {
                name: 'Irfan Maulana',
                image: 'https://randomuser.me/api/portraits/men/62.jpg'
            },
            created_at: '2023-09-23T11:30:00'
        }
    },
    {
        id: 5,
        title: 'Update terbaru FIFA 23: Apa yang berubah?',
        category_id: 'fifa',
        author: {
            name: 'Budi Setiawan',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            role: 'Member'
        },
        created_at: '2023-09-16T15:45:00',
        content: 'EA baru saja merilis update besar untuk FIFA 23. Update ini membawa banyak perubahan dalam gameplay, termasuk:\n\n- Balance pemain dan skill moves\n- Perbaikan AI pada kiper\n- Penambahan fitur baru di mode karier\n- Perbaikan bugs di FUT\n\nMenurut saya pribadi, update ini cukup bagus terutama di bagian balance skill moves yang sebelumnya terlalu OP. Bagaimana menurut kalian yang sudah mencoba?',
        tags: ['update', 'fifa-23', 'gameplay'],
        replies: 8,
        views: 156,
        last_reply: {
            author: {
                name: 'Ahmad Fauzi',
                image: 'https://randomuser.me/api/portraits/men/44.jpg'
            },
            created_at: '2023-09-19T19:25:00'
        }
    },
    {
        id: 6,
        title: 'Perkenalan tim baru: TI Legends',
        category_id: 'general',
        author: {
            name: 'Rizky Fauzan',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            role: 'Member'
        },
        created_at: '2023-09-15T10:30:00',
        content: 'Halo teman-teman Unsil E-Sports!\n\nKami dengan bangga memperkenalkan tim baru dari jurusan Teknik Informatika: TI Legends! Kami akan fokus pada game Mobile Legends dan Valorant.\n\nAnggota Tim:\n- Rizky Fauzan (Captain, ML)\n- Budi Setiawan (ML)\n- Ahmad Dani (ML)\n- Faisal Rahman (ML)\n- Ridwan Kamil (ML)\n- Arif Budiman (Captain, Valorant)\n- Dedi Supriadi (Valorant)\n- Galih Pratama (Valorant)\n- Irfan Maulana (Valorant)\n- Joko Widodo (Valorant)\n\nKami berharap dapat berpartisipasi dalam turnamen kampus yang akan datang dan membawa nama baik jurusan TI. Mohon dukungannya!',
        tags: ['tim-baru', 'perkenalan', 'teknik-informatika'],
        replies: 24,
        views: 412,
        last_reply: {
            author: {
                name: 'Deni Wijaya',
                image: 'https://randomuser.me/api/portraits/men/67.jpg'
            },
            created_at: '2023-09-22T08:15:00'
        }
    }
];

// Popular Discussions
const popularDiscussions = [
    {
        id: 2,
        title: 'Jadwal turnamen Valorant kampus bulan Oktober',
        excerpt: 'Halo teman-teman, berikut jadwal turnamen Valorant kampus di bulan Oktober: 7-8 Oktober: Kualifikasi Awal, 14-15 Oktober: Semifinal, 21 Oktober: Final. Pendaftaran tim sudah dibuka mulai hari ini sampai tanggal 30 September...',
        category: 'Turnamen',
        author: {
            name: 'Arif Budiman',
            image: 'https://randomuser.me/api/portraits/men/55.jpg'
        },
        date: '2023-09-18T09:45:00',
        replies: 28,
        views: 567
    },
    {
        id: 6,
        title: 'Perkenalan tim baru: TI Legends',
        excerpt: 'Halo teman-teman Unsil E-Sports! Kami dengan bangga memperkenalkan tim baru dari jurusan Teknik Informatika: TI Legends! Kami akan fokus pada game Mobile Legends dan Valorant...',
        category: 'Umum',
        author: {
            name: 'Rizky Fauzan',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        date: '2023-09-15T10:30:00',
        replies: 24,
        views: 412
    },
    {
        id: 1,
        title: 'Tips bermain Mobile Legends untuk pemula',
        excerpt: 'Halo semua, saya ingin berbagi beberapa tips bagi pemula yang baru memulai bermain Mobile Legends. Berikut beberapa tips yang mungkin bermanfaat: 1. Pelajari minimal 2-3 hero dari setiap role, 2. Selalu perhatikan mini map...',
        category: 'Mobile Legends',
        author: {
            name: 'Rizky Fauzan',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        date: '2023-09-20T14:30:00',
        replies: 15,
        views: 342
    }
];

// Forum Statistics
const forumStats = {
    total_topics: 234,
    total_posts: 3567,
    registered_users: 528,
    newest_member: 'Galih Pratama',
    online_users: 42,
    online_members: [
        {
            name: 'Rizky Fauzan',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            name: 'Arif Budiman',
            image: 'https://randomuser.me/api/portraits/men/55.jpg'
        },
        {
            name: 'Deni Wijaya',
            image: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
            name: 'Budi Setiawan',
            image: 'https://randomuser.me/api/portraits/men/33.jpg'
        }
    ]
};

// User Data (for demonstration purposes)
const userData = {
    is_logged_in: false,
    user: null
};

// Consolidated forum data
const forumData = {
    categories: forumCategories,
    threads: forumThreads,
    popular: popularDiscussions,
    stats: forumStats,
    user: userData
};
