/*
 * Two languages: English + Bahasa Indonesia.
 *
 * - English text is written directly in the HTML.
 * - Elements with data-i18n="key" get the Indonesian text from I18N.id below.
 * - data-i18n-attr="placeholder:key;aria-label:key" translates attributes.
 * - JavaScript text (project cards etc.) uses t('key').
 * - Project descriptions in Indonesian live in js/projects.js (field "id").
 *
 * Mau ubah terjemahan? Cari key-nya di bawah lalu ganti teksnya.
 */

const I18N = {
    en: {
        'cat.web': 'Web Dev',
        'cat.uiux': 'UI/UX',
        'cat.design': 'Graphic Design',
        'cat.video': 'Video',
        'link.live': 'Live Demo',
        'link.code': 'Code',
        'link.figma': 'Figma',
        'link.drive': 'View Collection',
        'link.video': 'Watch Demo',
        'link.file': 'Open',
        'badge.private': 'Private',
        'badge.featured': 'Featured',
        'badge.privateCode': 'Private code',
        'pp.all': 'All',
        'pp.showLess': 'Show less',
        'pp.more': '+{n} more',
        'pp.count1': '{n} project',
        'pp.countN': '{n} projects',
        'pp.loadMore': 'Load more ({n} left)',
        'contact.copy': 'Copy email',
        'contact.copied': 'Copied!'
    },

    id: {
        /* ----- JavaScript text ----- */
        'cat.web': 'Web Dev',
        'cat.uiux': 'UI/UX',
        'cat.design': 'Desain Grafis',
        'cat.video': 'Video',
        'link.live': 'Lihat Demo',
        'link.code': 'Kode',
        'link.figma': 'Figma',
        'link.drive': 'Lihat Koleksi',
        'link.video': 'Tonton Demo',
        'link.file': 'Buka',
        'badge.private': 'Privat',
        'badge.featured': 'Unggulan',
        'badge.privateCode': 'Kode privat',
        'pp.all': 'Semua',
        'pp.showLess': 'Tampilkan lebih sedikit',
        'pp.more': '+{n} lainnya',
        'pp.count1': '{n} proyek',
        'pp.countN': '{n} proyek',
        'pp.loadMore': 'Muat lagi (sisa {n})',
        'contact.copy': 'Salin email',
        'contact.copied': 'Tersalin!',

        /* ----- page titles ----- */
        'meta.title': 'Muhammad Arshyil Azzim | Portofolio',
        'meta.ppTitle': 'Semua Proyek | Arshyil',

        /* ----- navbar ----- */
        'nav.home': 'Beranda',
        'nav.about': 'Tentang',
        'nav.skills': 'Keahlian',
        'nav.exp': 'Pengalaman',
        'nav.projects': 'Proyek',
        'nav.contact': 'Kontak',

        /* ----- home ----- */
        'home.hello': 'Halo, saya',
        'home.p1': 'Saya mahasiswa Ilmu Komputer di BINUS University yang punya minat besar pada teknologi. Saya senang mempelajari berbagai bahasa pemrograman seperti HTML, CSS, Java, dan lainnya, sambil terus mengasah kemampuan membuat solusi kreatif lewat kode.',
        'home.p2': 'Selain itu, saya juga sangat tertarik dengan desain grafis, karena menurut saya teknologi dan seni visual saling melengkapi untuk menciptakan karya yang bermakna.',
        'home.cv': 'Unduh CV',
        'home.design': 'Desain Grafis',
        'home.video': 'Editing Video',
        'home.tools': 'Tools Saya',
        'home.scroll': 'Geser',

        /* ----- about ----- */
        'about.title': 'Tentang <span>Saya</span>',
        'about.h3': 'Hai, saya Arshyil, mahasiswa Ilmu Komputer di BINUS University yang senang mengubah ide menjadi website yang benar-benar dipakai orang.',
        'about.p1': 'Saat ini saya magang sebagai ERP Software Developer di PT HashMicro Solusi Indonesia. Di luar pekerjaan, saya membuat aplikasi web seperti workout planner, sistem pemesanan untuk bisnis foto polaroid, dan website untuk komunitas roleplay GTA V.',
        'about.p2': 'Sebelum ngoding, saya memulai dari desain grafis: logo, poster, livery kendaraan, dan editing video. Karena itu saya peduli pada cara kerja sesuatu sekaligus tampilannya. Motto saya: <strong>Be Better Than Before!</strong>',
        'about.cta': 'Yuk Terhubung',

        /* ----- skills ----- */
        'skills.title': 'Keahlian <span>Saya</span>',
        'skills.web': 'Saya senang membangun website dengan tata letak yang rapi dan fungsi yang optimal, memadukan kreativitas dengan logika pemrograman.',
        'skills.design': 'Saya menyukai desain, terutama membuat visual yang estetis, menarik, dan komunikatif.',
        'skills.uiux': 'Saya suka merancang tampilan website yang sederhana, interaktif, dan mudah digunakan untuk memberikan pengalaman pengguna terbaik.',
        'skills.see': 'Lihat Proyek',

        /* ----- experience ----- */
        'exp.title': 'Pengalaman <span>Saya</span>',
        'exp.work': "<i class='bx bx-briefcase-alt-2'></i> Kerja",
        'exp.org': "<i class='bx bx-group'></i> Organisasi",
        'exp.edu': "<i class='bx bxs-graduation'></i> Pendidikan",
        'exp.active': 'Aktif',
        'exp.hm.place': "<i class='bx bx-buildings'></i> PT HashMicro Solusi Indonesia · Magang",
        'exp.hm.1': 'Magang selama satu tahun sebagai ERP Software Developer.',
        'exp.date.mod': 'Jun 2024 – Agu 2025',
        'exp.mod.1': 'Mendesain logo untuk branding server dan identitas komunitas.',
        'exp.mod.2': 'Membuat poster untuk pengumuman, event, dan kampanye promosi.',
        'exp.mod.3': 'Mengembangkan desain pakaian in-game khusus untuk karakter pemain.',
        'exp.mod.4': 'Membuat desain livery kendaraan untuk mobil milik pemain.',
        'exp.mod.5': 'Mengedit dan memproduksi video promosi dan konten komunitas.',
        'exp.date.gd': 'Mei 2022 – Mar 2023',
        'exp.gd.title': 'Desainer Grafis',
        'exp.gd.place': "<i class='bx bx-buildings'></i> Pondok Pesantren · Palembang",
        'exp.gd.1': 'Mendesain poster untuk kegiatan sekolah, acara internal, dan promosi publik.',
        'exp.gd.2': 'Mengedit foto di Adobe Photoshop untuk dokumentasi, publikasi, dan media sosial.',
        'exp.gd.3': 'Menjaga konsistensi identitas visual di seluruh materi desain sekolah.',
        'exp.date.himti': 'Okt 2023 – Sekarang',
        'exp.himti.title': 'Anggota',
        'exp.himti.1': 'Aktif berpartisipasi dalam acara ilmu komputer dan teknologi.',
        'exp.himti.2': 'Membantu tugas kreatif seperti desain poster dan visual untuk acara mahasiswa.',
        'exp.himti.3': 'Membangun kemampuan kerja sama tim, komunikasi, dan kolaborasi.',
        'exp.date.cc': 'Agu 2021 – Feb 2022',
        'exp.cc.title': 'Ketua',
        'exp.cc.place': "<i class='bx bx-buildings'></i> Organisasi Computer Center · Ponorogo",
        'exp.cc.1': 'Memimpin desain dan arahan kreatif untuk poster dan visual acara sekolah.',
        'exp.cc.2': 'Mengawasi tim yang mengelola komputer sekolah, perawatan, dan instalasi software.',
        'exp.cc.3': 'Mengoordinasikan tugas teknis dan kreatif untuk kebutuhan sistem dan branding.',
        'exp.date.binus': 'Agu 2023 – Sekarang',
        'exp.binus.title': 'Sarjana Ilmu Komputer',
        'exp.grad': 'Lulus',
        'exp.school': 'Pondok Pesantren',
        'exp.school.1': 'Menyelesaikan pendidikan dengan nilai yang memuaskan.',

        /* ----- projects ----- */
        'proj.title': 'Proyek <span>Saya</span>',
        'proj.sub': 'Beberapa sorotan dari apa yang sudah saya bangun dan desain. Ketuk kartu untuk melihat detail.',
        'proj.seeAll': 'Lihat Semua Proyek',
        'common.close': 'Tutup',
        'common.top': 'Kembali ke atas',

        /* ----- principles ----- */
        'pr.title': 'Prinsip <span>Saya</span>',
        'pr.sub': 'Nilai-nilai yang saya pegang, di hari baik maupun hari sulit.',
        'pr.label': "<i class='bx bxs-star'></i> Motto hidup saya",
        'pr.motto': 'Terus belajar, terus berkembang. Satu-satunya saingan saya adalah diri saya yang kemarin.',
        'pr.1.t': '“Pikiran tenang, keputusan tepat.”',
        'pr.1.p': 'Jangan pernah mengambil keputusan saat emosi sedang tinggi. Setiap keputusan penting hanya diambil saat saya benar-benar tenang.',
        'pr.2.p': 'Tidak ada yang abadi di dunia ini, jadi hari ini bukanlah akhir. Apa yang terjadi selanjutnya masih ada di tangan kita.',
        'pr.3.t': '“Perlakukan orang lain sebagaimana kamu ingin diperlakukan.”',
        'pr.3.p': 'Rasa hormat, kejujuran, dan kebaikan akan kembali. Saya memberi apa yang ingin saya terima.',
        'pr.4.t': '“Konsisten, jangan berhenti di tengah jalan.”',
        'pr.4.p': 'Tetap semangat dan pantang menyerah. Langkah kecil setiap hari akan menyelesaikan apa yang sudah dimulai.',

        /* ----- contact ----- */
        'ct.title': 'Kontak <span>Saya</span>',
        'ct.sub': 'Punya proyek, peluang, atau sekadar ingin menyapa? Inbox saya selalu terbuka.',
        'ct.status': '<span class="dot"></span> Terbuka untuk kolaborasi',
        'ct.h3': 'Ayo bangun sesuatu yang hebat bersama.',
        'ct.mail': 'Kirim email',
        'ct.copy': 'Salin email',
        'ct.cv': 'Unduh CV',
        'ct.discord': 'Gabung komunitas saya',
        'ct.fb': 'Sapa saya di Facebook',
        'footer.rights': 'Hak Cipta Dilindungi.',

        /* ----- projects.html ----- */
        'pp.back': "<i class='bx bx-left-arrow-alt'></i> Kembali ke beranda",
        'pp.title': 'Semua <span>Proyek</span>',
        'pp.sub': 'Cari berdasarkan nama atau teknologi, atau filter berdasarkan kategori.',
        'pp.search': 'Cari proyek, misalnya Laravel, React, poster...',
        'pp.searchLabel': 'Cari proyek',
        'pp.clear': 'Hapus pencarian',
        'pp.sort': 'Urutkan',
        'pp.sortLabel': 'Urutkan proyek',
        'pp.optFeatured': 'Unggulan',
        'pp.optAz': 'Nama A–Z',
        'pp.optZa': 'Nama Z–A',
        'pp.tech': "<i class='bx bx-chip'></i> Teknologi",
        'pp.reset': 'Reset filter',
        'pp.empty': 'Proyek tidak ditemukan',
        'pp.emptySub': 'Coba kata kunci lain atau hapus beberapa filter.'
    }
};

const LANG_KEY = 'lang';
let currentLang = 'en';

// original English content, saved the first time an element is translated
const i18nOriginalHtml = new WeakMap();
const i18nOriginalAttr = new WeakMap();

function getLang() {
    return currentLang;
}

// text for JavaScript, e.g. t('pp.loadMore', { n: 3 })
function t(key, vars) {
    let text = (I18N[currentLang] && I18N[currentLang][key]) ?? I18N.en[key] ?? key;
    if (vars) Object.keys(vars).forEach(k => { text = text.replaceAll(`{${k}}`, vars[k]); });
    return text;
}

function applyLang(lang) {
    currentLang = lang === 'id' ? 'id' : 'en';
    document.documentElement.lang = currentLang;
    const dict = I18N.id;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        if (!i18nOriginalHtml.has(el)) i18nOriginalHtml.set(el, el.innerHTML);
        const key = el.dataset.i18n;
        el.innerHTML = currentLang === 'id' && dict[key] != null ? dict[key] : i18nOriginalHtml.get(el);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        if (!i18nOriginalAttr.has(el)) i18nOriginalAttr.set(el, {});
        const saved = i18nOriginalAttr.get(el);
        el.dataset.i18nAttr.split(';').forEach(pair => {
            const [attr, key] = pair.split(':').map(s => s.trim());
            if (!(attr in saved)) saved[attr] = el.getAttribute(attr);
            el.setAttribute(attr, currentLang === 'id' && dict[key] != null ? dict[key] : saved[attr]);
        });
    });

    document.querySelectorAll('.lang-code').forEach(el => {
        el.textContent = currentLang.toUpperCase();
    });
}

function setLang(lang) {
    applyLang(lang);
    try {
        localStorage.setItem(LANG_KEY, currentLang);
    } catch (e) { /* storage unavailable */ }
    document.dispatchEvent(new CustomEvent('langchange', { detail: currentLang }));
}

// first visit: follow the browser language; after that: remember the choice
(function initLang() {
    let saved = null;
    try {
        saved = localStorage.getItem(LANG_KEY);
    } catch (e) { /* storage unavailable */ }
    const browser = (navigator.language || '').toLowerCase().startsWith('id') ? 'id' : 'en';
    applyLang(saved || browser);

    const toggle = document.querySelector('#lang-toggle');
    if (toggle) toggle.addEventListener('click', () => setLang(currentLang === 'id' ? 'en' : 'id'));
})();
