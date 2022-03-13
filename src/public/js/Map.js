let mymap = L.map('mapid');
const btn = document.getElementById('btn');


btn.addEventListener('click', (e)=>{
    
    e.preventDefault();
    const ip = document.getElementById('ip').value;

    if(ip.length > 0 && ip != ''){
            
        getCords(ip)
    }


})
    
function printMap(data){
    mymap.setView([data.lat, data.lng], 7)
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; OpenStreetMap</a> contributors, mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: data.key
    }).addTo(mymap);
    L.marker([data.lat, data.lng]).addTo(mymap)
    .bindPopup(`${data.region}, ${data.city}`)
    .openPopup();
}

function getCords(ip){
    fetch('/cords',{
        method:'POST',
        body: JSON.stringify({ip : ip}),
        headers: {
            'content-type': 'application/json'
        }
    }).then((res)=> res.json()
    ).then((data)=> {
        printMap(data)
    })
}
