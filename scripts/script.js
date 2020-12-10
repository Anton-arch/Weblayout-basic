window.addEventListener('DOMContentLoaded', function() {
  let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    updateOnWindowResize: true,
    grabCursor: true,
    speed: 2000,
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  const defaultSelect1 = () => {
    const element = document.querySelector('#selectCustom1');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
  };

  const defaultSelect2 = () => {
    const element = document.querySelector('#selectCustom2');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
  };

  const defaultSelect3 = () => {
    const element = document.querySelector('#selectCustom3');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
  };

  const defaultSelect4 = () => {
    const element = document.querySelector('#selectCustom4');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
  };

  const defaultSelect5 = () => {
    const element = document.querySelector('#selectCustom5');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
  };

  const defaultSelect6 = () => {
    const element = document.querySelector('#selectCustom6');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
  };

  defaultSelect1();
  defaultSelect2();
  defaultSelect3();
  defaultSelect4();
  defaultSelect5();
  defaultSelect6();

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
