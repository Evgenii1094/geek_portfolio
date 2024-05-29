import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const expertsSlide = new Swiper('.experts__slider-container', {
    navigation: {
        nextEl: '.experts__button-next',
        prevEl: '.experts__button-prev',
    },
    pagination: {
        el: '.experts__swiper-pagination',
        clickable: true,
    },
    loop: true,
    slidesPerView: 1,
});

const testimonialsSlide = new Swiper('.testimonials__slider-container', {
    navigation: {
        nextEl: '.testimonials__button-next',
        prevEl: '.testimonials__button-prev',
    },
    pagination: {
        el: '.testimonials__swiper-pagination',
        clickable: true,
    },
    loop: true,
    slidesPerView: 1,
});

const seoReviewSlide = new Swiper('.seo-review__slider-container', {
    navigation: false,
    pagination: {
        el: '.seo-review__swiper-pagination',
        clickable: true,
    },
    loop: true,
    slidesPerView: 1,
});

const industrySlide = new Swiper('.industry__slider-container', {
    spaceBetween: 30,
    navigation: {
        nextEl: '.industry__button-next',
        prevEl: '.industry__button-prev',
    },
    pagination: {
        el: '.industry__swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    loop: true,
    breakpoints: {
        1280: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
        },
    },
});

const reviewSlide = new Swiper('.review__slider-container', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.review__button-next',
        prevEl: '.review__button-prev',
    },
    pagination: false,
    slidesPerView: 1,
    loop: true,
});

if (document.body.classList.contains('is-seo-page')) {
    const seoDisciplineSlide = new Swiper('.seo-discipline__slider-container', {
        navigation: {
            nextEl: '.seo-discipline__button-next',
            prevEl: '.seo-discipline__button-prev',
        },
        pagination: {
            el: '.seo-discipline__swiper-pagination',
            type: 'custom',
            clickable: true,
            renderCustom(swiper, current, total) {
                const images = ['../img/pagination-1.svg', '../img/pagination-2.svg', '../img/pagination-3.svg', '../img/pagination-4.svg', '../img/pagination-5.svg'];
                return images.map((src, index) => `
                <img src="${src}" class="swiper-pagination-custom-bullet ${index === (current - 1) ? 'swiper-pagination-custom-bullet-active' : ''}" data-index="${index + 1}">
            `).join('');
            }
        },
        loop: true,
        slidesPerView: 1
    });

    const paginationContainer = document.querySelector('.seo-discipline__swiper-pagination');
    paginationContainer.addEventListener('click', event => {
        if (event.target.matches('img')) {
            const { index } = event.target.dataset;
            seoDisciplineSlide.slideTo(parseInt(index));
        }
    });
}
