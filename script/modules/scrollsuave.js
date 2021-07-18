export default function initScrollSuave() {

    const menuLinkInterno = document.querySelectorAll('.header a');

    function scrollToSuave(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const to = document.querySelector(href);
        to.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    menuLinkInterno.forEach((link) => {
        link.addEventListener('click', scrollToSuave);
    });
}