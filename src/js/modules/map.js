function map () {

    let coord = document.querySelector("[data-coords]").getAttribute("data-coords");
    
    coord = JSON.parse(coord);
    let lengthCoord = Object.keys(coord).length - 6;

    ymaps.ready(init);

    function init() {
        let myMap = new ymaps.Map("map", {
            center: [coord.xCenter, coord.yCenter],
            zoom: 15,
            controls: []
        });

        let myPlacemark = new Array();
        for (let i = 1; i < lengthCoord; i++) {
            let coordX = coord['x' + i];
            let coordY = coord['y' + i];
            let icon = `icons/placeMark${i}.svg`;

            myPlacemark[i] = new ymaps.Placemark([coordX, coordY], {}, {
                iconLayout: 'default#image',
                preset: 'myMark',
                iconImageHref: icon,
                iconImageSize: [39, 52],
                active: false,
            });

            myMap.geoObjects.add(myPlacemark[i]);
        }
        
        myPlacemark[2].options.set('iconImageOffset', [0, -70]);

        function removeActiveAll () {
            for (let i = 1; i < lengthCoord; i++) {
                let icon = `icons/placeMark${i}.svg`;
                myPlacemark[i].options.set('active', false);
                myPlacemark[i].options.set('iconImageHref', icon);
            }
        };

        function placeMarkActive() {
            for (let i = 1; i < lengthCoord; i++) {
                let markIcon = `icons/placeMark${i}.svg`;
                let markIconActive = `icons/placeMark${i}-red.svg`;

                function addActive (e) {
                    e.get('target').options.set('iconImageHref', markIconActive);
                };
    
                function removeActive (e) {
                    e.get('target').options.set('iconImageHref', markIcon);
                };

                myPlacemark[i].events.add(['click', 'mouseenter', 'mouseleave'], function (e) {
                    let eType = e.get('type');
    
                    if (eType == 'mouseenter') {
                        addActive (e);
                    }
    
                    if (eType == 'click' ) {
                        if (e.get('target').options.get('active') == false) {
                            removeActiveAll ();
                            e.get('target').options.set('active', true);
                            addActive (e);
                            coord.xActive = e.get('coords')[0];
                            coord.yActive = e.get('coords')[1];
                            document.querySelector("[data-coords]").setAttribute("data-coords", JSON.stringify(coord));

                        } else {
                            e.get('target').options.set('active', false);
                            removeActive (e);
                        }  
                    } 
                    
                    if (eType == 'mouseleave' && e.get('target').options.get('active') == false) {
                        removeActive (e);
                    }
                    
                });
            }
            
        }

        placeMarkActive();
    }
};

export default map;