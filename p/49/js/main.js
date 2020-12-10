$(document).ready(function() {



    $('.section8-price__all').on('click', function() {
        $(this).prev('.section8-price__hide').slideToggle();
        $(this).find('a').toggleClass('open');
        return false;
    });



    // var myMap = $('#map');
    // myMap.behaviors.disable('drag');

    var myMap;
    ymaps.ready(init);

    function init () {
        myMap = new ymaps.Map('map', {
            // Санкт-Петербург
            center: [54.62600719769915,39.748972944851936],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        });

        myMap.behaviors.disable('drag');
            //  - drag - перемещение карты при нажатой левой кнопки мыши;
            //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
            // .disable(['drag', 'rightMouseButtonMagnifier'])
            // Включаем линейку.
            // .disable('ruler');

        myMap.options.set('scrollZoomSpeed', 2);

        geoLocation1 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [54.63076357002342,39.739329999999995]
            },
            properties: {
                iconContent: '',
                hintContent: '',
                balloonContent: '\
                    +7 (4912) 52-13-13 <br>\
                    Рязань, ул. Соборная, дом 13 <br>\
                    Работаем с 10:00 до 23:00'
            }
        }, {
            preset: 'islands#blackStretchyIcon'
            // draggable: true
        });

        geoLocation2 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [54.619781570054,39.75570649999995]
            },
            properties: {
                iconContent: '',
                hintContent: '',
                balloonContent: '\
                    +7 (4912) 52-13-13 <br>\
                    Рязань, ул. Есенина, дом 45 к1 <br>\
                    Работаем с 10:00 до 23:00'
            }
        }, {
            preset: 'islands#blackStretchyIcon'
        });

        myMap.geoObjects.add(geoLocation1);
        myMap.geoObjects.add(geoLocation2);

    };


});