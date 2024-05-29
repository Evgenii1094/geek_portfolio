const fixedHeader = () => {
    const header = document.querySelector('.header'),
        headerHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight + 1200) {
            header.classList.add('is-fixed');
        } else {
            header.classList.remove('is-fixed');
        }
    });
}

export default fixedHeader;
