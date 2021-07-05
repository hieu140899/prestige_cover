import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = new Swiper('.mySwiper', {

  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

const swiper1 = new Swiper('.swp', {
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  breakpoints: {
    768: {
      slidesPerView: 1.6,
      freeMode: true,
      spaceBetween: 30,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 40,
      centeredSlides: false,
      slidesPerGroup: 3,
    },
    1140: {
      slidesPerView: 4,
      freeMode: false,
      centeredSlides: false,
      slidesPerGroup: 4,
    },
  },
});
const swiper5 = new Swiper('.swp5', {
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  breakpoints: {
    768: {
      slidesPerView: 1.6,
      freeMode: true,
      spaceBetween: 30,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 40,
      centeredSlides: false,
      slidesPerGroup: 3,
    },
    1140: {
      slidesPerView: 4,
      freeMode: false,
      centeredSlides: false,
      slidesPerGroup: 4,
    },
  },
});

const swiper2 = new Swiper('.swp2', {
  // spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
      freeMode: false,
      centeredSlides: false,
      slidesPerGroup: 3,
      loop: false,
    },
  },
});
