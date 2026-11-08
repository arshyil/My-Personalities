/*========== menu icon navbar ==========*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


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


/*========== swiper ==========*/
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode (saved across reloads) ==========*/
const darkModeIcon = document.querySelector('#darkMode-icon');

function setDarkMode(on) {
    document.body.classList.toggle('dark-mode', on);
    darkModeIcon.classList.toggle('bx-sun', on);
}

try {
    setDarkMode(localStorage.getItem('dark-mode') === 'true');
} catch (e) { /* storage unavailable */ }

darkModeIcon.onclick = () => {
    const on = !document.body.classList.contains('dark-mode');
    setDarkMode(on);
    try {
        localStorage.setItem('dark-mode', on);
    } catch (e) { /* storage unavailable */ }
};


/*========== footer year ==========*/
const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .kontakku', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
