const goToTop = () => {
    const scrollTopButton = document.querySelector('.go-to-top');

    function toggleScrollTopButton() {
        if (window.scrollY > 1200) {
            scrollTopButton.style.display = 'flex';
        } else {
            scrollTopButton.style.display = 'none';
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleScrollTopButton);

    scrollTopButton.addEventListener('click', scrollToTop);
}

export default goToTop;
