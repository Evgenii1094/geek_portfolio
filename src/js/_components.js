import hamburgerMenu from "./components/hamburger";
import dropdownMenu from "./components/dropdown-menu";
import fixedHeader from "./components/fixed-header";
import calculator from "./components/calculator";
import tabs from "./components/tabs";
import faq from "./components/faq";
import goToTop from "./components/go-to-top";

document.addEventListener('DOMContentLoaded', () => {
    hamburgerMenu();
    dropdownMenu();
    fixedHeader();
    goToTop();

    if (document.body.classList.contains('is-home-page')) {
        calculator();
        tabs('.calculator__link', '.calculator__content', '.calculator__wrapper');
        tabs('.steps__link', '.steps__content', '.steps__list');
        tabs('.types__link', '.types__content', '.types__list');
        tabs('.discipline__link', '.discipline__content', '.discipline__list');
        faq('.faq__wrapper', '.faq__group', '.faq__answer');
    }

    if (document.body.classList.contains('is-seo-page')) {
        calculator();
        tabs('.calculator__link', '.calculator__content', '.calculator__wrapper');
        tabs('.steps__link', '.steps__content', '.steps__list');
        tabs('.price__tab', '.price__content', '.price__tabs');
        faq('.seo-faq__wrapper', '.seo-faq__group', '.seo-faq__answer');
    }

    if (document.body.classList.contains('is-price-page')) {
        tabs('.price__tab', '.price__content', '.price__tabs');
    }
});
