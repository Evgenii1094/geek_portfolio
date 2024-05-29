const hamburgerMenu = () => {
    const hamburgerBtn = document.querySelector('.header__hamburger'),
          header = document.querySelector('.header'),
          headerClose = document.querySelector('.header__close'),
          overlay = document.querySelector('.overlay');

    hamburgerBtn.addEventListener('click', () => {
        header.classList.add('is-opened');
        document.body.style.overflow = 'hidden';
        overlay.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.header__close')) {
            header.classList.remove('is-opened');
            document.body.style.overflow = '';
            overlay.style.display = 'none';
        }
    });
}

export default hamburgerMenu;
