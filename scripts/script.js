window.addEventListener('DOMContentLoaded', function () {
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

  let gallerySwiper = new Swiper('.gallery__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    updateOnWindowResize: true,
    spaceBetween: 50,
    speed: 1500,
    loop: true,
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


  document.querySelectorAll('.filter-item__text-1').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.target.classList.toggle('open')
      document.querySelector('#dropdown-1').classList.toggle('is-open')
    });
  });

  document.querySelectorAll('.filter-item__text-2').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.target.classList.toggle('open')
      document.querySelector('#dropdown-2').classList.toggle('is-open')
    });
  });

  document.querySelectorAll('.filter-item__text-3').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.target.classList.toggle('open')
      document.querySelector('#dropdown-3').classList.toggle('is-open')
    });
  });

  document.querySelectorAll('.filter-item__text-4').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.target.classList.toggle('open')
      document.querySelector('#dropdown-4').classList.toggle('is-open')
    });
  });

  document.querySelectorAll('.filter-item__text-5').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.target.classList.toggle('open')
      document.querySelector('#dropdown-5').classList.toggle('is-open')
    });
  });

  document

  const defaultSelect1 = () => {
    const element = document.querySelector('.selectCustom1');
    const choices = new Choices(element, {
      searchEnabled: false,
    });
  };

  defaultSelect1();

  document.querySelectorAll('.catalog__link--France').forEach(function (countrie) {
    countrie.addEventListener('click', function () {
      document.querySelector('.catalog__item-countries--France').classList.toggle('active')
    });
  });

  document.querySelectorAll('.catalog__link--Germany').forEach(function (countrie) {
    countrie.addEventListener('click', function () {
      document.querySelector('.catalog__item-countries--Germany').classList.toggle('active')
    });
  });

  document.querySelectorAll('.catalog__link--Italy').forEach(function (countrie) {
    countrie.addEventListener('click', function () {
      document.querySelector('.catalog__item-countries--Italy').classList.toggle('active')
    });
  });

  document.querySelectorAll('.catalog__link--Russia').forEach(function (countrie) {
    countrie.addEventListener('click', function () {
      document.querySelector('.catalog__item-countries--Russia').classList.toggle('active')
    });
  });

  document.querySelectorAll('.catalog__link--Belgium').forEach(function (countrie) {
    countrie.addEventListener('click', function () {
      document.querySelector('.catalog__item-countries--Belgium').classList.toggle('active')
    });
  });

  $('.catalog__link').on('click', function (event) {
    event.preventDefault();
  });

  // Accordion
  $(function () {
    $("#accordion").accordion({
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

  document.querySelectorAll('.catalog-accordion__title').forEach(function (accordion) {
    accordion.addEventListener('click', function (event) {
      event.target.classList.toggle('open')
    });
  });

  document.querySelectorAll('.accordion__item-link').forEach(function (select) {
    select.addEventListener('click', function (event) {
      event.target.classList.toggle('select')
    });
  });

  $('.accordion__item-link').on('click', function (event) {
    event.preventDefault();
  });

  document.querySelector('.events__button').addEventListener('click', function () {
    document.querySelector('.events__item:nth-child(4)').classList.toggle('visually')
    document.querySelector('.events__item:nth-child(5)').classList.toggle('visually')
    document.querySelector('.events__button').classList.toggle('hidden')
  });

  let editionSwiper = new Swiper('.edition__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    updateOnWindowResize: true,
    spaceBetween: 50,
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

  let projectsSwiper = new Swiper('.projects__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    updateOnWindowResize: true,
    spaceBetween: 50,
    speed: 1500,
    loop: true,
    navigation: {
      nextEl: '.partners-swiper-button-next',
      prevEl: '.partners-swiper-button-prev',
    },
  });

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
    let myPlacemark = new ymaps.Placemark([48.87219657376512, 2.354223999999991], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/Subtract.svg',
      iconImageSize: [28, 40],
      iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    myMap.setCenter([48.87219657376512, 2.354223999999991], 13);
    myMap.geoObjects.add(myPlacemark);
  };

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

  $('.contacts__address-button').on('click', function (event) {
    event.preventDefault();
  });

});
