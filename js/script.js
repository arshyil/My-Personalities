/* index.html only. Menu, dark mode & footer year live in common.js */

/*========== scroll sections active link ==========*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            const activeLink = document.querySelector('header nav a[href="#' + id + '"]');
            if (activeLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                activeLink.classList.add('active');
            }
        }
    });

    /*========== sticky navbar ==========*/
    header.classList.toggle('sticky', top > 100);

    /*========== close mobile menu on scroll ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*========== copy email ==========*/
const copyBtn = document.querySelector('#copy-email');

if (copyBtn) {
    const label = copyBtn.querySelector('span');
    copyBtn.addEventListener('click', async () => {
        const email = copyBtn.dataset.email;
        try {
            await navigator.clipboard.writeText(email);
        } catch (e) {
            // older browsers: fall back to a hidden text field
            const tmp = document.createElement('textarea');
            tmp.value = email;
            document.body.appendChild(tmp);
            tmp.select();
            document.execCommand('copy');
            tmp.remove();
        }
        label.textContent = t('contact.copied');
        copyBtn.classList.add('copied');
        setTimeout(() => {
            label.textContent = t('contact.copy');
            copyBtn.classList.remove('copied');
        }, 2000);
    });
}


/*========== experience tabs ==========*/
const expTabs = document.querySelectorAll('.experience .exp-tab');

expTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        expTabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        document.querySelectorAll('.timeline').forEach(tl => tl.classList.remove('active'));

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        document.getElementById(tab.dataset.target).classList.add('active');
    });
});


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .project-grid, .motto-card, .principle-grid, .contact-wrap', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
