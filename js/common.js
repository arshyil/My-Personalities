/* Shared by index.html and projects.html */

/*========== menu icon navbar ==========*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


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
