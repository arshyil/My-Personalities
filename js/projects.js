/*
 * ========== DAFTAR PROJECT ==========
 * Mau tambah project? Copy satu blok { ... } lalu ubah isinya.
 *
 * category : 'web' | 'uiux' | 'design' | 'video'
 * image    : path gambar (boleh dikosongkan '' -> tampil kartu warna + icon)
 * icon     : icon Boxicons untuk kartu tanpa gambar (https://boxicons.com)
 * featured : true -> dapat badge "Featured" dan tampil paling depan
 * private  : true -> badge "Private", kode tidak bisa dilihat publik
 * links    : tombol di kartu. type: 'live' | 'code' | 'figma' | 'drive' | 'file'
 */
const PROJECTS = [
    {
        title: 'Sebingkai',
        category: 'web',
        featured: true,
        image: 'images/project-sebingkai.jpg',
        icon: 'bx-camera',
        summary: 'Online photobooth for long-distance couples: a silent video call, a synced countdown, and 4 shots combined into one photostrip.',
        details: [
            'Rooms are created and joined through a shareable link or code.',
            'Peer-to-peer video with WebRTC (PeerJS), so no custom backend is needed.',
            'Each phone captures its own camera for sharp photos, then sends it to the partner over a data channel.',
            'Both devices produce an identical photostrip.'
        ],
        tags: ['React', 'TypeScript', 'WebRTC', 'PeerJS'],
        links: [
            { type: 'live', url: 'https://orange-falcon-621949.hostingersite.com/' },
            { type: 'code', url: 'https://github.com/arshyil/Sebingkai' }
        ]
    },
    {
        title: 'Next Level',
        category: 'web',
        featured: true,
        image: 'images/project-nextlevel.jpg',
        icon: 'bx-joystick',
        summary: 'Bilingual (Indonesian / English) technology, gaming & community media site built around an active Discord server.',
        details: [
            'A central hub to discover, read, learn, discuss and play, then continue the conversation on Discord.',
            'Indonesian is served at "/" and English at "/en".'
        ],
        tags: ['Next.js', 'TypeScript', 'i18n'],
        links: [
            { type: 'live', url: 'https://nextlevelcommunity.site/' },
            { type: 'code', url: 'https://github.com/arshyil/nextlevel' }
        ]
    },
    {
        title: 'HypeStep',
        category: 'web',
        image: 'images/project-hype.jpg',
        icon: 'bx-shopping-bag',
        summary: 'Online store website for premium sneakers & streetwear, with home, shop, cart and contact pages.',
        details: [
            'Static front-end version is live on GitHub Pages.',
            'A separate Laravel version is also available.'
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Laravel'],
        links: [
            { type: 'live', url: 'https://arshyil.github.io/HypeStep/' },
            { type: 'code', url: 'https://github.com/arshyil/HypeStep' },
            { type: 'code', label: 'Laravel', url: 'https://github.com/arshyil/Web-Programming-HypeStep-' }
        ]
    },
    {
        title: 'Gym Planner',
        category: 'web',
        featured: true,
        image: 'images/project-gym.jpg',
        icon: 'bx-dumbbell',
        summary: 'Free workout planner (English & Bahasa Indonesia): build a weekly split, follow along set by set with an automatic rest timer, and track your progress.',
        details: [
            'Weekly routine and per-day editor with exercise categories and custom exercises.',
            'Active workout mode: mark a set done and the rest timer starts on its own, with personal record detection.',
            'Progress pages: PR board, body measurements, progress photos and charts.',
            'Friends, invites and workout reminders.',
            'Also available as an Android app (Capacitor).'
        ],
        tags: ['PHP', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'Chart.js', 'Capacitor'],
        links: [
            { type: 'live', url: 'https://gymplanner.site/' },
            { type: 'code', url: 'https://github.com/arshyil/Gym-Planner' }
        ]
    },
    {
        title: 'Kajja Photo',
        category: 'web',
        image: 'images/project-kajja.jpg',
        icon: 'bx-camera',
        summary: 'Website and order system for an instant polaroid photo service at concerts, festivals and events.',
        details: [
            'Landing pages for services, gallery, packages and FAQ.',
            'Online ordering with QRIS payment.',
            'Admin dashboard for orders, concerts, frames, photographers and day-of operations.'
        ],
        tags: ['PHP', 'SQLite', 'JavaScript'],
        links: [
            { type: 'live', url: 'https://darkturquoise-camel-565266.hostingersite.com/' },
            { type: 'code', url: 'https://github.com/arshyil/kajja-photo' }
        ]
    },
    {
        title: 'Mercy Roleplay Website',
        category: 'web',
        private: true,
        image: 'images/project-mercy.jpg',
        icon: 'bx-world',
        summary: 'Official website for Mercy Roleplay, a FiveM GTA V server: whitelist agencies, rules, staff and gallery, plus an admin panel.',
        details: [
            'Pages for home, about, rules, agencies (with details and how to apply), staff and gallery.',
            'Admin panel to manage staff and gallery content through a PHP API and MySQL.',
            'Images optimized to WebP for fast loading.'
        ],
        tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'PHP', 'MySQL'],
        links: [
            { type: 'live', url: 'https://mercyroleplay.id/' }
        ]
    },
    {
        title: 'EMS Mercy Roleplay',
        category: 'web',
        private: true,
        image: 'images/project-ems.jpg',
        icon: 'bx-plus-medical',
        summary: 'Online registration counter and internal system for the EMS (medical) division of Mercy Roleplay.',
        details: [
            'Public counter for patient cards, health certificates, surgery registration, medicine and BPJS cards.',
            'On-duty board and shift attendance with check-in / check-out.',
            'Staff ranks, handbook, and role-based access for EMS members and admins.',
            'Admin tools for user management and weekly attendance recaps.'
        ],
        tags: ['Laravel', 'Inertia.js', 'React', 'Tailwind CSS'],
        links: [
            { type: 'live', url: 'https://emsmercy.mercyroleplay.id/' }
        ]
    },
    {
        title: 'Donation Manager',
        category: 'web',
        private: true,
        image: 'images/project-donation.jpg',
        icon: 'bx-diamond',
        summary: 'Dashboard for managing donations on a GTA V roleplay server.',
        details: [
            'Track players and donations, with a donor leaderboard.',
            'Manage vehicles, houses, businesses and custom categories.',
            'Income breakdown and a donation calculator.',
            'Export, trash & restore, and superadmin / admin roles.'
        ],
        tags: ['PHP', 'MySQL', 'JavaScript'],
        links: []
    },
    {
        title: 'UI/UX Design Collection',
        category: 'uiux',
        image: 'images/FigmaProject.png',
        icon: 'bxl-figma',
        summary: 'UI/UX designs crafted in Figma during college, focusing on modern layouts and user-friendly experiences.',
        details: [],
        tags: ['Figma', 'UI Design', 'Prototype'],
        links: [
            { type: 'figma', url: 'file/Link_to_Figma_Project.pdf' }
        ]
    },
    {
        title: 'Graphic Design',
        category: 'design',
        image: 'images/graphicDesign.jpg',
        icon: 'bx-palette',
        summary: 'A collection of my graphic design works.',
        details: [],
        tags: ['Photoshop', 'Canva'],
        links: [
            { type: 'drive', url: 'https://drive.google.com/drive/folders/1OqwVhRz4tha8HmqDlUYvOtOK5KatWLru?usp=sharing' }
        ]
    },
    {
        title: 'Logo Design',
        category: 'design',
        image: 'images/Logo_Design.jpg',
        icon: 'bx-shape-circle',
        summary: 'Logos I have created, including server branding and community identity.',
        details: [],
        tags: ['Logo', 'Branding'],
        links: [
            { type: 'drive', url: 'https://drive.google.com/drive/folders/1bp2ZpnsoGtiWAazzFCUWnXN4j44FvdlY?usp=sharing' }
        ]
    },
    {
        title: 'Posters',
        category: 'design',
        image: 'images/myPoster.jpg',
        icon: 'bx-image',
        summary: 'Posters for events, announcements and promotional campaigns.',
        details: [],
        tags: ['Poster', 'Photoshop'],
        links: [
            { type: 'drive', url: 'https://drive.google.com/drive/folders/1laZK0CAHdLNiIGXooAF-T2otstHxC6vS?usp=sharing' }
        ]
    }
];
