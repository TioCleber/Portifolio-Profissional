function initScrollSuav() {

    const menuLinkInterno = document.querySelectorAll('.header a');

    function scrollToSuav(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const to = document.querySelector(href);
        to.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    menuLinkInterno.forEach((link) => {
        link.addEventListener('click', scrollToSuav);
    });
}

initScrollSuav();