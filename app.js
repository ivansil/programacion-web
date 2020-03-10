const random = require('random');
const request = require('request');
const addresses = require('./address');
const f2c = require('f2c-thiagogaspar');

let id = random.int(min=0, max=9);
let address = addresses[id].Country;
const geocodeurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaXZhbnNpbHZhcyIsImEiOiJjazdldWttenIwY2c5M2xteGl5Zm5hemVzIn0.RAF_IO5dVwPW2snU7CBWBw`;

// let url = `https://swapi.co/api/planets/${ id }/`;
// request( {url, json: true},(error, response)=>{
//     console.log(response.body); 
// });

request({url: geocodeurl, json: true}, (error, response) => {
    let feature = response.body.features[random.int(min=0, max=response.body.features.length)];
    console.log(response.body.features);
    
    let lat = feature.center[0];
    let lon = feature.center[1];
    console.log('coor: ', lat, lon);
    
    let urlTemperature = `https://api.darksky.net/forecast/59d5d6b812c69b5c98690720a7370631/${lat},${lon}?lang=es`;
    request({url: urlTemperature, json: true}, (error, response)=>{
        console.log(f2c(response.body.currently.temperature), '°C');
    });
});