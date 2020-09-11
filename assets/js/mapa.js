//constante que me controla la imagen del mapa
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let mapaTiendas;
// funcion que me captura la geolocalicacion donde se ejecuta la pagina
getLocation();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
//funcion que me establece la latitud y longitud capturado
function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    mapaTiendas = L.map('map').setView([position.coords.latitude, position.coords.longitude], 18)
    // metodo que me pinta la imagen en un componente div.html
    L.tileLayer(tilesProvider, {
        maxZoom: 25,
    }).addTo(mapaTiendas)
    let market1 = L.marker([4.717896, -74.089881]).addTo(mapaTiendas);
    let market2 = L.marker([4.717983, -74.090444]).addTo(mapaTiendas);
    let market3 = L.marker([4.718080, -74.090872]).addTo(mapaTiendas);
    let market4 = L.marker([4.718154, -74.091177]).addTo(mapaTiendas);

    market1.bindPopup("<a href=../pages/product.html>Asadero brasas del rincon</a> <br>").openPopup();
    market2.bindPopup("<a href=../pages/product.html>El Carbonazo</a> <br>").openPopup();
    market3.bindPopup("<a href=../pages/product.html>Delirious Burger</a> <br>").openPopup();
    market4.bindPopup("<a href=../pages/product.html>Ta colombia comida rapida</a> <br>").openPopup();
}