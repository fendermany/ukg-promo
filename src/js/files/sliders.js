/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from "swiper";
import {EffectFade, Navigation, Pagination, Thumbs} from "swiper/modules";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/
// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector(".home__products-thumbnails")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    var homeProductsThumbs = new Swiper(".home__products-thumbnails", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      resistance: true,
      resistanceRatio: 0,
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 5,
      spaceBetween: 27,
      speed: 800,
      pagination: {
        el: ".home__products-slider--pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".home__products-slider--prev",
        nextEl: ".home__products-slider--next",
      },
      breakpoints: {
        0: {
          slidesPerView: "auto",
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 5,
          spaceBetween: 27,
        },
      },
    });
  }

  if (document.querySelector(".home__products-inner")) {
    // Указываем скласс нужного слайдера
    var homeProducts = new Swiper(".home__products-inner", {
      resistance: true,
      resistanceRatio: 0,
      observer: true,
      observeParents: true,
      modules: [EffectFade, Thumbs],
      slidesPerView: 1,
      direction: "horizontal",
      slideToClickedSlide: true,
      effect: "fade",
      thumbs: {
        swiper: homeProductsThumbs,
      },
    });
  }

  if (document.querySelector(".cabInvest__slider")) {
    // Указываем скласс нужного слайдера
    new Swiper(".cabInvest__slider", {
      // Указываем скласс нужного слайдера
      grabCursor: true,
      mousewheel: true,
      keyboard: true,
      resistance: true,
      resistanceRatio: 0,
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      spaceBetween: 22,
      speed: 800,
    });
  }

  if (document.querySelector(".home__roadmap-slider")) {
    // Указываем скласс нужного слайдера
    new Swiper(".home__roadmap-slider", {
      // Указываем скласс нужного слайдера
      resistance: true,
      resistanceRatio: 0,
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 800,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 85,
        },
      },
    });
  }

  if (document.querySelector(".home__news-slider")) {
    // Указываем скласс нужного слайдера
    new Swiper(".home__news-slider", {
      resistance: true,
      resistanceRatio: 0,
      modules: [Navigation], // Указываем скласс нужного слайдера
      observer: true,
      observeParents: true,
      slidesPerView: 2,
      spaceBetween: 22,
      speed: 800,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 158,
        },
      },
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".home__news-slider--prev",
        nextEl: ".home__news-slider--next",
      },
    });
  }

  if (document.querySelector(".referral__prizes-thumbs")) {
    // Указываем скласс нужного слайдера
    var referralprizesThumbs = new Swiper(".referral__prizes-thumbs", {
      resistance: true,
      resistanceRatio: 0,
      slidesPerView: 5,
      direction: "horizontal",
      spaceBetween: 26,
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1170: {
          slidesPerView: 5,
          spaceBetween: 27,
        },
      },
    });
  }

  if (document.querySelector(".referral__prizes-main")) {
    // Указываем скласс нужного слайдера
    var referralprizes = new Swiper(".referral__prizes-main", {
      resistance: true,
      resistanceRatio: 0,
      modules: [Navigation, Thumbs, EffectFade], // Указываем скласс нужного слайдера
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 22,
      speed: 800,
      effect: "fade",
      watchSlidesProgress: true,
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".referral__prizes-main--prev",
        nextEl: ".referral__prizes-main--next",
      },
      slideToClickedSlide: true,
      thumbs: {
        swiper: referralprizesThumbs,
      },
    });
  }

  if (document.querySelector(".production__gallery-slider")) {
    // Указываем скласс нужного слайдера
    new Swiper(".production__gallery-slider", {
      resistance: true,
      resistanceRatio: 0,
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 800,
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".production__gallery-slider--prev",
        nextEl: ".production__gallery-slider--next",
      },

      // Брейкпоинты

      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  if (document.querySelector(".documents__news-slider")) {
    // Указываем скласс нужного слайдера
    new Swiper(".documents__news-slider", {
      resistance: true,
      resistanceRatio: 0,
      modules: [Navigation], // Указываем скласс нужного слайдера
      observer: true,
      observeParents: true,
      slidesPerView: 2,
      spaceBetween: 22,
      speed: 800,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 158,
        },
      },
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".documents__news-slider--prev",
        nextEl: ".documents__news-slider--next",
      },
    });
  }

  if (document.querySelector(".partners__news-slider")) {
    // Указываем скласс нужного слайдера
    new Swiper(".partners__news-slider", {
      resistance: true,
      resistanceRatio: 0,
      modules: [Navigation], // Указываем скласс нужного слайдера
      observer: true,
      observeParents: true,
      slidesPerView: 2,
      spaceBetween: 22,
      speed: 800,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 158,
        },
      },
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".partners__news-slider--prev",
        nextEl: ".partners__news-slider--next",
      },
    });
  }

  if (document.querySelector(".about__leaders-thumbs")) {
    // Указываем скласс нужного слайдера
    var aboutLeadersThumbs = new Swiper(".about__leaders-thumbs", {
      resistance: true,
      resistanceRatio: 0,
      slidesPerView: 5,
      direction: "horizontal",
      spaceBetween: 76,
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1170: {
          slidesPerView: 5,
          spaceBetween: 76,
        },
      },
    });
  }

  if (document.querySelector(".about__leaders-show")) {
    // Указываем скласс нужного слайдера
    var aboutLeaders = new Swiper(".about__leaders-show", {
      resistance: true,
      resistanceRatio: 0,
      modules: [Navigation, Thumbs, EffectFade], // Указываем скласс нужного слайдера
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 22,
      speed: 800,
      effect: "fade",
      watchSlidesProgress: true,
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".about__leaders-show--prev",
        nextEl: ".about__leaders-show--next",
      },
      slideToClickedSlide: true,
      thumbs: {
        swiper: aboutLeadersThumbs,
      },
    });
  }

  if (document.querySelector(".about__news-slider")) {
    // Указываем скласс нужного слайдера
    new Swiper(".about__news-slider", {
      resistance: true,
      resistanceRatio: 0,
      modules: [Navigation], // Указываем скласс нужного слайдера
      observer: true,
      observeParents: true,
      slidesPerView: 2,
      spaceBetween: 22,
      speed: 800,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 158,
        },
      },
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".about__news-slider--prev",
        nextEl: ".about__news-slider--next",
      },
    });
  }

  if (referralprizes) {
    referralprizes.on("slideChangeTransitionStart", function () {
      referralprizesThumbs.slideTo(referralprizes.activeIndex);
    });

    referralprizesThumbs.on("transitionStart", function () {
      referralprizes.slideTo(referralprizesThumbs.activeIndex);
    });
  }

  if (aboutLeaders) {
    aboutLeaders.on("slideChangeTransitionStart", function () {
      aboutLeadersThumbs.slideTo(aboutLeaders.activeIndex);
    });

    aboutLeadersThumbs.on("transitionStart", function () {
      aboutLeaders.slideTo(aboutLeadersThumbs.activeIndex);
    });
  }

  if (homeProducts) {
    homeProducts.on("slideChangeTransitionStart", function () {
      homeProductsThumbs.slideTo(homeProducts.activeIndex);
    });

    homeProductsThumbs.on("transitionStart", function () {
      homeProducts.slideTo(homeProductsThumbs.activeIndex);
    });
  }
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("DOMContentLoaded", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
