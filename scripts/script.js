window.addEventListener('DOMContentLoaded', function () {
  //Header and hero - offsets
  $('.nav__link').on('click', function (event) {
    event.preventDefault();

    let href = $(this).attr('href')

    let offset = $(href).offset().top;

    $('body,html').animate({
      scrollTop: offset,
    }, 1000);
  });

  $('.hero__link').on('click', function (event) {
    event.preventDefault();

    let href = $(this).attr('href')

    let offset = $(href).offset().top;

    $('body,html').animate({
      scrollTop: offset,
    }, 1000);
  });

  // Burger
  const body = document.querySelector('.body');
  const burger = document.querySelector('.burger');
  const navItem = document.querySelectorAll('.nav__item');
  const burgerClose = document.querySelector('.nav__close');
  const nav = document.querySelector('.nav');

  burger.addEventListener('click', function() {
    nav.classList.add('nav--open');
    body.classList.add('modal-open');
  });

  burgerClose.addEventListener('click', function() {
    nav.classList.remove('nav--open');
    body.classList.remove('modal-open');
  });

  navItem.forEach(el => {
    el.addEventListener('click', function() {
      nav.classList.remove('nav--open');
      body.classList.remove('modal-open');
    });
  });

   // Header-dropdowns
  const filter = document.querySelector('.header-section__filter');
  const filterBtn = document.querySelectorAll('.filter-item__button');
  const filterDropdovn = document.querySelectorAll('.filter-item__dropdown');

  if (filter) {
    filter.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-item__button')) {
        const filterPath = e.target.dataset.filterPath;
        filterHandler(filterPath);
      };
    });
  }

  const filterHandler = (path) => {
    filterBtn.forEach(el => {el.classList.remove('filter-item__button_active')});
    document.querySelector(`[data-filter-path="${path}"]`).classList.add('filter-item__button_active');

    filterDropdovn.forEach(el => {el.classList.remove('filter-item__dropdown_active')});
    document.querySelector(`[data-filter-target="${path}"]`).classList.add('filter-item__dropdown_active');
  };

  document.addEventListener('click', (e) => {

    if (!e.target.classList.contains('filter-item__button') && !e.target.classList.contains('filter-item__dropdown')) {

        filterDropdovn.forEach(el => {el.classList.remove('filter-item__dropdown_active')});
        filterBtn.forEach(el => {el.classList.remove('filter-item__button_active')});
    }
  })

   // Header-top-search
  const headerTopBtn = document.querySelector('.header-top__btn');
  const headerTopSearchWrapper = document.querySelector('.header-top__search_wrapper');
  const headerLogo = document.querySelector('.header__logo');
  const headerTopClose = document.querySelector('.header-top__close');
  const headerTop = document.querySelector('.header__top');
  const headerTopContainer = document.querySelector('.header-top__container')

  headerTopBtn.addEventListener('click', function() {
    if (window.innerWidth > 992) {
      headerTopSearchWrapper.classList.toggle('header-top__search_open');
      headerTopSearchWrapper.classList.toggle('dark');
    } else if (window.innerWidth > 576) {
      headerTopSearchWrapper.classList.toggle('header-top__search_open');
      headerLogo.classList.toggle('visually-hidden');
      burger.classList.toggle('visually-hidden');
    } else {
      headerTopSearchWrapper.classList.toggle('header-top__search_open');
      headerLogo.classList.toggle('visually-hidden');
      burger.classList.toggle('visually-hidden');
      headerTop.classList.toggle('header__top_background');
      headerTopContainer.classList.toggle('header-top__container_searching');
      headerTopSearchWrapper.classList.toggle('header-top__search_wrapper--height');
      headerTopBtn.classList.toggle('header-top__btn_end');
    }
  });

  headerTopClose.addEventListener('click', function() {
    headerTopSearchWrapper.classList.remove('header-top__search_open');
    headerLogo.classList.remove('visually-hidden');
    burger.classList.remove('visually-hidden');
    headerTop.classList.remove('header__top_background');
    headerTopContainer.classList.remove('header-top__container_searching');
    headerTopSearchWrapper.classList.remove('header-top__search_wrapper--height');
    headerTopBtn.classList.remove('header-top__btn_end');
  });

  // Header-bottom-search
  const headerBottomSearch = document.querySelector('.header-bottom__search');
  const headerBottomInput = document.querySelector('.header-bottom__input');
  const headerBottomBtn = document.querySelector('.header-bottom__btn');

  headerBottomInput.addEventListener('focus', function() {
    headerBottomSearch.classList.add('header-bottom__search_focus');
  });

  headerBottomBtn.addEventListener('focus', function() {
    headerBottomSearch.classList.add('header-bottom__search_focus');
  });

  headerBottomInput.addEventListener('blur', function() {
    headerBottomSearch.classList.remove('header-bottom__search_focus');
  });

  headerBottomBtn.addEventListener('blur', function() {
    headerBottomSearch.classList.remove('header-bottom__search_focus');
  });

  // Hero-swiper
  let heroSwiper = new Swiper('.hero__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    updateOnWindowResize: true,
    speed: 3000,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    loop: true,
  });

  // Gallery-select
  const defaultSelect1 = () => {
    const element = document.querySelector('.selectCustom1');
    const choices = new Choices(element, {
      searchEnabled: false,
    });
  };

  defaultSelect1();

  // Gallery-swiper
  let gallerySwiper = new Swiper('.gallery__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    autoHeight: true,
    watchOverflow: true,
    updateOnWindowResize: true,
    breakpoints: {
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 35,
        slidesPerColumn: 2,
      },
      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 1,
        spaceBetween: 35,
      },
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 32,
        loop: true,
      }
    },
    speed: 1500,
    pagination: {
      el: '.gallery-swiper-pagination',
      type: 'fraction',
      clicable: false,
    },
    navigation: {
      nextEl: '.gallery-swiper-button-next',
      prevEl: '.gallery-swiper-button-prev',
    },
  });

  // Gallery-modals
  const btns = document.querySelectorAll('.gallery__wrapper-image');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modals = document.querySelectorAll('.modal');
  const modalClose = document.querySelectorAll('.modal__close');

  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-modal-path');

      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });

      document.querySelector(`[data-modal-target="${path}"]`).classList.add('modal--visible');
      modalOverlay.classList.add('modal-overlay--visible');

    });
  });

  modalOverlay.addEventListener('click', (e) => {

    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
    };
  });

  modalClose.forEach((el) => {
    el.addEventListener('click', (e) => {

      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
    });
  });

  // Catalog-tabs-countries
  const tabs = document.querySelector('.catalog__list-countries');
  const tabsBtn = document.querySelectorAll('.catalog__button');
  const tabsContent = document.querySelectorAll('.catalog__description');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('catalog__button')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
      }
    })
  }

  const tabsHandler = (path) => {
    tabsBtn.forEach(el => {el.classList.remove('catalog__button_active')});
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('catalog__button_active');

    tabsContent.forEach(el => {el.classList.remove('catalog__description_active')});
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('catalog__description_active');
  };

  // Catalog-Accordion
  $(function () {
    $(".ui-accordion").accordion({
      collapsible: true,
      heightStyle: "content",
    });
  });

  $(function () {
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $("#accordion").accordion({
      icons: icons
    });
    $("#toggle").button().on("click", function () {
      if ($("#accordion").accordion("option", "icons")) {
        $("#accordion").accordion("option", "icons", null);
      } else {
        $("#accordion").accordion("option", "icons", icons);
      }
    });
  });

  $('.accordion__item-link').on('click', function (event) {
    event.preventDefault();
  });

  const author = document.querySelectorAll('.ui-accordion');
  const authorBtn = document.querySelectorAll('.accordion__item-button');
  const authorContent = document.querySelectorAll('.catalog__figure');

  if (author) {
    author.forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.classList.contains('accordion__item-button')) {
          const authorPath = e.target.dataset.authorPath;
          authorHandler(authorPath);
        }
      })
    })
  }

  const authorHandler = (path) => {
    authorBtn.forEach(el => {el.classList.remove('accordion__item-button_active')});
    document.querySelector(`[data-author-path="${path}"]`).classList.add('accordion__item-button_active');

    authorContent.forEach(el => {el.classList.remove('catalog__figure_active')});
    document.querySelector(`[data-author-target="${path}"]`).classList.add('catalog__figure_active');
  };

  // Events-card
  document.querySelector('.events__button').addEventListener('click', function () {
    document.querySelector('.events__card:nth-child(3)').classList.add('visually');
    document.querySelector('.events__card:nth-child(4)').classList.add('visually');
    document.querySelector('.events__card:nth-child(5)').classList.add('visually');
    document.querySelector('.events__button').classList.add('hidden');
  });

  // Events-mobile-swiper
  const slider = document.querySelector('.events__swiper-container');
  let eventsSwiper;

  function mobileSlider() {
    if (window.innerWidth <= 576 && slider.dataset.mobile == 'false') {
      eventsSwiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 15,
        slideClass: 'events__card',
        wrapperClass: 'events__swiper-wrapper',
        pagination: {
          el: '.events__swiper-pagination',
        }
      });

      slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 576) {
      slider.dataset.mobile = 'false';
      if (slider.classList.contains('swiper-container-initialized')) {
        eventsSwiper.destroy();
      }
    }
  }

  mobileSlider()

  window.addEventListener('resize', () => {
    mobileSlider();
  });

  // Project-swiper
  let projectsSwiper = new Swiper('.projects__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    updateOnWindowResize: true,
    breakpoints: {
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 45,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 45,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      }
    },
    speed: 1500,
    loop: true,
    navigation: {
      nextEl: '.partners-swiper-button-next',
      prevEl: '.partners-swiper-button-prev',
    },
  });

  // Edition-Spoiler
  const spoiler =  document.querySelector('.edition__categories-text');
  const editionCheckbox = document.querySelectorAll('.edition__checkbox');
  const editionLabel = document.querySelectorAll('.edition__label');
  const labelClose = document.querySelectorAll('.label__close');

  spoiler.addEventListener('click', function(ev) {

    if (window.innerWidth < 577) {
      if (!ev.currentTarget.classList.contains('is-open')) {

        ev.currentTarget.classList.add('is-open');

        editionLabel.forEach(el => {el.style.display = 'flex'});

      } else {

        ev.currentTarget.classList.remove('is-open');

        editionCheckbox.forEach((el) => {

          if (el.checked) {

            el.closest('.edition__label').style.display = 'flex';

          } else {

            el.closest('.edition__label').style.display = 'none';

          }

        });

      }
    }

  });

  labelClose.forEach((el) => {
    el.addEventListener('click', function(ev) {
    });
  });

  // Edition-Swiper
  const sliders = document.querySelector('.edition__swiper-container');
  let editionsSwiper;

  function mobileSliders() {
    if (window.innerWidth > 576 && sliders.dataset.mobiles == 'false') {
      editionsSwiper = new Swiper(sliders, {
        direction: 'horizontal',
        autoHeight: true,
        updateOnWindowResize: true,
        loop: true,
        breakpoints: {
          1400: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
          },
          992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          577: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 15,
          },
        },
        speed: 1500,
        pagination: {
          el: '.edition-swiper-pagination',
          type: 'fraction',
          clicable: false,
        },
        navigation: {
          nextEl: '.edition-swiper-button-next',
          prevEl: '.edition-swiper-button-prev',
        },
        slideClass: 'edition__swiper-slide',
        wrapperClass: 'edition__swiper-wrapper',
      });

      sliders.dataset.mobile = 'true';
    }

    if (window.innerWidth <= 576) {
      sliders.dataset.mobile = 'false';
      if (sliders.classList.contains('swiper-container-initialized')) {
        editionsSwiper.destroy();
      }
    }
  }

  mobileSliders()

  window.addEventListener('resize', () => {
    mobileSliders();
  });

  // Contacts-map
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);

  function init() {
    // Создание карты.
    let myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.76, 37.64],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 7
    });

    // Создание геообъекта с типом точка (метка).
    let myPlacemark = new ymaps.Placemark([55.755590890639745, 37.59215232985252], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'images/map-label.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    myMap.setCenter([55.755590890639745, 37.59215232985252], 13);
    myMap.geoObjects.add(myPlacemark);
  };

  // back to top button
  (function() {
    'use strict';

    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }

    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();

  // inputmask
  let selector = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(selector);

  // Form-validate
  let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: {
            name: 'Как вас зовут?',
            phone: 'Укажите ваш телефон',
      },
      tooltip: {
            fadeOutTime: 10000 // default value - 5000
      },
      colorWrong: 'rgb(110, 20, 0)',
      submitHandler: function(form) {
        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

       xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        };

        xhr.open('POST', 'mail.php', true);

        xhr.send(formData);

        form.reset();
      }
    })
  }

  validateForms('.form', {
    phone: {
      required: true,
    },
    name: {
      required: true,
      minLenght: 2,
      maxLenght: 15,
    },
  }, '.thanks-popup', '.send-goal');
});
