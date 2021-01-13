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

  // Header-search
  const headerBottomInput = document.querySelector('.header-bottom__input');
  const headerBottomBtn = document.querySelector('.header-bottom__btn');

  window.onload = function() {
    headerBottomInput.addEventListener('focus', function () {
      document.querySelector('.header-bottom__search').classList.add('header-bottom__search_focus');
    });

    headerBottomBtn.addEventListener('focus', function () {
      document.querySelector('.header-bottom__search').classList.add('header-bottom__search_focus');
    });

    headerBottomInput.addEventListener('blur', function () {
        document.querySelector('.header-bottom__search').classList.remove('header-bottom__search_focus');
    });

    headerBottomBtn.addEventListener('blur', function () {
      document.querySelector('.header-bottom__search').classList.remove('header-bottom__search_focus');
    });
  };

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
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerGroup: 3,
    autoHeight: true,
    updateOnWindowResize: true,
    spaceBetween: 47,
    breakpoints: {
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 33,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
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
    document.querySelector('.events__item:nth-child(3)').classList.add('visually');
    document.querySelector('.events__item:nth-child(4)').classList.add('visually');
    document.querySelector('.events__item:nth-child(5)').classList.add('visually');
    document.querySelector('.events__button').classList.add('hidden');
  });

  // const eventSwiper = document.querySelector('.events__swiper-container');

  // let evSwiper;

  // function mobileSlider() {
  //   if(window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
  //     evSwiper = new Swiper(slider, {
  //       slidesPerView: 1,
  //       spaceBetween: 10,
  //       loop: true,
  //       slideClass: 'events__item',
  //     });

  //     slider.dataset.mobile = 'true';
  //   };

  //   if (window.innerWidth > 600 ) {
  //     slider.dataset.mobile = 'false';

  //     evSwiper.destroy();
  //   }
  // };

  // mobileSlider();

  // window.addEventListener('resize', () => {
  //   mobileSlider();
  // });

  // Edition-swiper
  let editionSwiper = new Swiper('.edition__swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerGroup: 3,
    updateOnWindowResize: true,
    spaceBetween: 45,
    breakpoints: {
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      }
    },
    speed: 1500,
    loop: true,
    pagination: {
      el: '.edition-swiper-pagination',
      type: 'fraction',
      clicable: false,
    },
    navigation: {
      nextEl: '.edition-swiper-button-next',
      prevEl: '.edition-swiper-button-prev',
    },
  });

  // Project-swiper
  let projectsSwiper = new Swiper('.projects__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerGroup: 3,
    updateOnWindowResize: true,
    spaceBetween: 50,
    breakpoints: {
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
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
      }
    },
    speed: 1500,
    loop: true,
    navigation: {
      nextEl: '.partners-swiper-button-next',
      prevEl: '.partners-swiper-button-prev',
    },
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
