window.addEventListener('DOMContentLoaded', function() {
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
      el: '.swiper-pagination',
      type: 'fraction',
      clicable: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  document.querySelectorAll('.filter__item').forEach(function(el) {
    el.addEventListener('click', function(event) {
      event.target.classList.toggle('open')
    });
  });


  const defaultSelect1 = () => {
    const element = document.querySelector('.selectCustom1');
    const choices = new Choices(element, {
      searchEnabled: false,
    });  
  };

  defaultSelect1();





  
  $( function() {
    $( "#accordion" ).accordion();
  });

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
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
});
