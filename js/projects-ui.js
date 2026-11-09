/*
 * Project cards + popup, shared by:
 *  - index.html    -> highlights (featured first, max N cards)
 *  - projects.html -> all projects with search, filters, sort and "load more"
 * Data comes from js/projects.js (PROJECTS), text from js/i18n.js (t()).
 */

const CATEGORY_ICONS = {
    web: 'bx-code-alt',
    uiux: 'bxl-figma',
    design: 'bx-palette',
    video: 'bx-video-recording'
};

const LINK_ICONS = {
    live: 'bx-link-external',
    code: 'bxl-github',
    figma: 'bxl-figma',
    drive: 'bxl-google',
    video: 'bxl-youtube',
    file: 'bx-file'
};

/* ---------- helpers ---------- */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text == null ? '' : String(text);
    return div.innerHTML;
}

// only allow http(s), mailto and relative links (blocks "javascript:" etc.)
function safeUrl(url) {
    const u = String(url || '').trim();
    if (/^(https?:|mailto:)/i.test(u) || !/^[a-z][a-z0-9+.-]*:/i.test(u)) return escapeHtml(u);
    return '#';
}

function catInfo(key) {
    if (!CATEGORY_ICONS[key]) return { label: key, icon: 'bx-folder' };
    return { label: t('cat.' + key), icon: CATEGORY_ICONS[key] };
}

// project text in the current language (falls back to English)
function loc(p, field) {
    const tr = getLang() === 'id' && p.id && p.id[field];
    return tr && tr.length ? tr : p[field];
}

// featured first, then the order in projects.js
const ALL_PROJECTS = PROJECTS
    .map((p, i) => ({ ...p, _i: i }))
    .sort((a, b) => (b.featured === true) - (a.featured === true) || a._i - b._i);

function thumbHtml(p) {
    const badges = `<div class="project-badges">
            <span>${escapeHtml(catInfo(p.category).label)}</span>
            <span class="badge-right">
                ${p.private ? `<span class="private"><i class="bx bxs-lock-alt"></i> ${t('badge.private')}</span>` : ''}
                ${p.featured ? `<span class="featured"><i class="bx bxs-star"></i> ${t('badge.featured')}</span>` : ''}
            </span>
        </div>`;

    if (p.image) {
        return `<div class="project-thumb">${badges}
            <img src="${safeUrl(p.image)}" alt="${escapeHtml(loc(p, 'title'))}" loading="lazy"></div>`;
    }
    return `<div class="project-thumb no-img">${badges}
        <i class="bx ${escapeHtml(p.icon || 'bx-code-alt')}"></i><strong>${escapeHtml(loc(p, 'title'))}</strong></div>`;
}

function linksHtml(p) {
    const privateNote = p.private
        ? `<span class="private-note"><i class="bx bxs-lock-alt"></i> ${t('badge.privateCode')}</span>`
        : '';
    return privateNote + (p.links || []).map((l, i) => {
        const type = LINK_ICONS[l.type] ? l.type : 'file';
        return `<a href="${safeUrl(l.url)}" target="_blank" rel="noopener noreferrer" class="${i === 0 ? 'primary' : ''}">
            <i class="bx ${LINK_ICONS[type]}"></i>${escapeHtml(l.label || t('link.' + type))}</a>`;
    }).join('');
}

function tagsHtml(p) {
    return (p.tags || []).map(t => `<span>${escapeHtml(t)}</span>`).join('');
}

function cardHtml(p, i) {
    return `
        <article class="project-card" tabindex="0" data-index="${p._i}" style="animation-delay:${(i % 9) * 60}ms">
            ${thumbHtml(p)}
            <div class="project-body">
                <h3>${escapeHtml(loc(p, 'title'))}</h3>
                <p>${escapeHtml(loc(p, 'summary'))}</p>
                <div class="exp-tags">${tagsHtml(p)}</div>
                <div class="project-links">${linksHtml(p)}</div>
            </div>
        </article>`;
}

/* ---------- popup ---------- */
const projectModal = document.querySelector('#project-modal');
let openedProject = null;

function openProject(p) {
    openedProject = p;
    projectModal.querySelector('#pm-media').innerHTML = thumbHtml(p);
    projectModal.querySelector('#pm-category').textContent = catInfo(p.category).label;
    projectModal.querySelector('#pm-title').textContent = loc(p, 'title');
    projectModal.querySelector('#pm-summary').textContent = loc(p, 'summary');
    projectModal.querySelector('#pm-details').innerHTML =
        (loc(p, 'details') || []).map(d => `<li>${escapeHtml(d)}</li>`).join('');
    projectModal.querySelector('#pm-tags').innerHTML = tagsHtml(p);
    projectModal.querySelector('#pm-links').innerHTML = linksHtml(p);

    if (projectModal.classList.contains('open')) return; // only re-rendered (language change)
    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    projectModal.querySelector('#pm-close').focus();
}

function closeProject() {
    openedProject = null;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

function bindCards(grid) {
    // open popup when the card is clicked (but not when a link button is clicked)
    grid.addEventListener('click', e => {
        if (e.target.closest('a')) return;
        const card = e.target.closest('.project-card');
        if (card) openProject(PROJECTS[card.dataset.index]);
    });
    grid.addEventListener('keydown', e => {
        const card = e.target.closest('.project-card');
        if (card && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            openProject(PROJECTS[card.dataset.index]);
        }
    });
}

if (projectModal) {
    projectModal.querySelector('#pm-close').addEventListener('click', closeProject);
    projectModal.addEventListener('click', e => {
        if (e.target === projectModal) closeProject();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && projectModal.classList.contains('open')) closeProject();
    });
    // language switched while the popup is open
    document.addEventListener('langchange', () => {
        if (openedProject) openProject(openedProject);
    });
}

/* ---------- index.html: highlights ---------- */
const highlightGrid = document.querySelector('#project-grid');

if (highlightGrid) {
    const limit = parseInt(highlightGrid.dataset.limit, 10) || 6;
    const renderHighlights = () => {
        highlightGrid.innerHTML = ALL_PROJECTS.slice(0, limit).map(cardHtml).join('');
    };
    renderHighlights();
    document.addEventListener('langchange', renderHighlights);
    bindCards(highlightGrid);

    const countEl = document.querySelector('#see-all-count');
    if (countEl) countEl.textContent = PROJECTS.length;
}

/* ---------- projects.html: browse everything ---------- */
const browseGrid = document.querySelector('#pp-grid');

if (browseGrid) {
    const PAGE_SIZE = 9;
    const els = {
        search: document.querySelector('#pp-search'),
        clear: document.querySelector('#pp-clear'),
        cats: document.querySelector('#pp-categories'),
        techs: document.querySelector('#pp-techs'),
        techMore: document.querySelector('#pp-tech-more'),
        sort: document.querySelector('#pp-sort'),
        count: document.querySelector('#pp-count'),
        more: document.querySelector('#pp-more'),
        empty: document.querySelector('#pp-empty'),
        reset: document.querySelectorAll('.pp-reset')
    };

    // read initial state from the URL, e.g. projects.html?tech=React&category=web
    const params = new URLSearchParams(location.search);
    const state = {
        q: params.get('q') || '',
        category: params.get('category') || 'all',
        tech: params.get('tech') || '',
        sort: params.get('sort') || 'featured',
        shown: PAGE_SIZE,
        allTechs: false
    };

    // technology list, most used first
    const techCount = {};
    PROJECTS.forEach(p => (p.tags || []).forEach(t => { techCount[t] = (techCount[t] || 0) + 1; }));
    const techList = Object.keys(techCount).sort((a, b) => techCount[b] - techCount[a] || a.localeCompare(b));
    const TECH_PREVIEW = 10;

    // search in both languages, so "poster" and "desain" both work
    function searchText(p) {
        const id = p.id || {};
        return [p.title, p.summary, ...(p.tags || []), ...(p.details || []),
            id.title, id.summary, ...(id.details || []), catInfo(p.category).label]
            .filter(Boolean).join(' ').toLowerCase();
    }

    function filtered() {
        const q = state.q.trim().toLowerCase();
        let list = ALL_PROJECTS.filter(p =>
            (state.category === 'all' || p.category === state.category) &&
            (!state.tech || (p.tags || []).includes(state.tech)) &&
            (!q || searchText(p).includes(q))
        );
        const byTitle = (a, b) => loc(a, 'title').localeCompare(loc(b, 'title'));
        if (state.sort === 'az') list = [...list].sort(byTitle);
        if (state.sort === 'za') list = [...list].sort((a, b) => byTitle(b, a));
        return list;
    }

    function syncUrl() {
        const p = new URLSearchParams();
        if (state.q) p.set('q', state.q);
        if (state.category !== 'all') p.set('category', state.category);
        if (state.tech) p.set('tech', state.tech);
        if (state.sort !== 'featured') p.set('sort', state.sort);
        const qs = p.toString();
        history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
    }

    function renderCats() {
        const used = [...new Set(PROJECTS.map(p => p.category))];
        const buttons = [{ key: 'all', label: t('pp.all'), icon: 'bx-grid-alt', count: PROJECTS.length }]
            .concat(used.map(key => ({
                key, label: catInfo(key).label, icon: catInfo(key).icon,
                count: PROJECTS.filter(p => p.category === key).length
            })));
        els.cats.innerHTML = buttons.map(b => `
            <button class="exp-tab ${state.category === b.key ? 'active' : ''}" data-cat="${b.key}">
                <i class="bx ${b.icon}"></i> ${escapeHtml(b.label)} <span class="count">${b.count}</span>
            </button>`).join('');
    }

    function renderTechs() {
        const list = state.allTechs ? techList : techList.slice(0, TECH_PREVIEW);
        // always show the selected tech, even if it is not in the preview
        if (state.tech && !list.includes(state.tech)) list.push(state.tech);
        els.techs.innerHTML = list.map(t => `
            <button class="tech-chip ${state.tech === t ? 'active' : ''}" data-tech="${escapeHtml(t)}">
                ${escapeHtml(t)} <small>${techCount[t] || 0}</small>
            </button>`).join('');
        els.techMore.hidden = techList.length <= TECH_PREVIEW;
        els.techMore.textContent = state.allTechs ? t('pp.showLess') : t('pp.more', { n: techList.length - TECH_PREVIEW });
    }

    function render() {
        const list = filtered();
        browseGrid.innerHTML = list.slice(0, state.shown).map(cardHtml).join('');
        els.count.textContent = t(list.length === 1 ? 'pp.count1' : 'pp.countN', { n: list.length });
        els.more.hidden = list.length <= state.shown;
        els.more.textContent = t('pp.loadMore', { n: list.length - state.shown });
        els.empty.hidden = list.length > 0;
        els.clear.hidden = !state.q;
        syncUrl();
    }

    function update(changes) {
        Object.assign(state, changes, { shown: PAGE_SIZE });
        renderCats();
        renderTechs();
        render();
    }

    // events
    let typing;
    els.search.value = state.q;
    els.search.addEventListener('input', () => {
        clearTimeout(typing);
        typing = setTimeout(() => update({ q: els.search.value }), 150);
    });
    els.clear.addEventListener('click', () => {
        els.search.value = '';
        update({ q: '' });
        els.search.focus();
    });
    els.cats.addEventListener('click', e => {
        const b = e.target.closest('button');
        if (b) update({ category: b.dataset.cat });
    });
    els.techs.addEventListener('click', e => {
        const b = e.target.closest('button');
        if (b) update({ tech: state.tech === b.dataset.tech ? '' : b.dataset.tech });
    });
    els.techMore.addEventListener('click', () => {
        state.allTechs = !state.allTechs;
        renderTechs();
    });
    els.sort.value = state.sort;
    els.sort.addEventListener('change', () => update({ sort: els.sort.value }));
    els.more.addEventListener('click', () => {
        state.shown += PAGE_SIZE;
        render();
    });
    els.reset.forEach(btn => btn.addEventListener('click', () => {
        els.search.value = '';
        els.sort.value = 'featured';
        update({ q: '', category: 'all', tech: '', sort: 'featured' });
    }));

    document.addEventListener('langchange', () => {
        renderCats();
        renderTechs();
        render();
    });

    bindCards(browseGrid);
    update({});
}
