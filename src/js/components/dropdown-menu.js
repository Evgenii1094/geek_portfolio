const dropdownMenu = () => {
    const header = document.querySelector('.header-nav'),
          dropdownBtn = document.querySelector('.js-dropdown-menu'),
          overlay = document.querySelector('.overlay');

    const checkScreenSize = () => {
        if (window.innerWidth < 1280) {
            dropdownBtn.addEventListener('click', (e) => {
                if (!e.target.closest('.header-nav__dropdown-link')) {
                    e.preventDefault();
                }

                header.classList.toggle('is-open');
                document.body.style.overflow = 'hidden';
                overlay.style.display = 'block';
            });
        } else {
            dropdownBtn.addEventListener('click', (e) => {
                if (!e.target.closest('.header-nav__dropdown-link')) {
                    e.preventDefault();
                }

                header.classList.add('is-open');
                document.body.style.overflow = 'hidden';
                overlay.style.display = 'block';
            });
        }
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('.header-nav__dropdown-button')) {
            header.classList.remove('is-open');
            document.body.style.overflow = '';
            overlay.style.display = 'none';
        }
    });
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
}

export default dropdownMenu;
