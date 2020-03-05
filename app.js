const request = require('request');
const f2c = require('f2c-thiagogaspar');

const url = 'https://api.darksky.net/forecast/59d5d6b812c69b5c98690720a7370631/19.24,-103.72?lang=es';

// request({url}, (error, response) => {
//     const data = JSON.parse(response.body);
//     console.log( f2c(data.currently.temperature) );
    
// });

// request({url, json: true}, (error, response) => {
//     console.log( response.body.daily.data[0].summary );
// });

const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Colima.json?access_token=pk.eyJ1IjoiaXZhbnNpbHZhcyIsImEiOiJjazdldWttenIwY2c5M2xteGl5Zm5hemVzIn0.RAF_IO5dVwPW2snU7CBWBw";

request({url: geocodeurl, json: true}, (error, response) => {
    console.log(response.body.features[0].bbox);
});