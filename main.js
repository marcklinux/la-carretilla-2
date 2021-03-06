document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.menu', { delay: 500});
ScrollReveal().reveal('.ingredientes', { delay: 500});
ScrollReveal().reveal('.ingredientes-dos', { delay: 500});
ScrollReveal().reveal('.social', { delay: 500});
ScrollReveal().reveal('.footer-links', { delay: 500});
ScrollReveal().reveal('.footer', { delay: 500});