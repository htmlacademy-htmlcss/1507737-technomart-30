// Map

ymaps.ready(init);

function init() {
  const map = new ymaps.Map('map', {
    center: [59.940163930035936,30.314802652053764],
    zoom: 16,
    controls: ['zoomControl']
  });

  const placemark = new ymaps.Placemark([59.93863506417266,30.323117499999945],{
      iconLayout: 'default#image'
    });

  map.geoObjects.add(placemark);
}
