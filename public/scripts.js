const searchElement = document.querySelector('[data-city-search]');
const searchBox = new google.maps.places.SearchBox(searchElement);

searchBox.addListener('places_changed', ()=>{
    const place = searchBox.getPlaces()[0]
    if(place == null) return;
    const latitude = place.geometry.lat();
    const longitude = place.geometry.lng();

    fetch('/weather', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        accept: "application/json"
    }, 
    body: JSON.stringify({
        latitude, latitude,
        longitude, longitude
    })
    })
})