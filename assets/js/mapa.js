const tilesProvider='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let mymap=L.map('map').setView([4.6208004,-74.0637269],22)

L.tileLayer(tilesProvider,{
    maxZoom:18,
}).addTo(mymap)


 