/*=============== SHOW MENU NAV MENU ===============*/
const navMenu = document.querySelector('.nav__menu'),
    navToggle = document.querySelector('.nav__toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// =============== globos ===============

const globus = document.querySelector('.globus'),
    globMenu = document.querySelector('.footer__leng-links')
    // globlink = document.querySelectorAll('.footer__leng-link')

// if (globus) {
//     globus.addEventListener('click', () => {
//         globMenu.classList.toggle('glob-menu')
//     })
// }

