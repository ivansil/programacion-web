const Greetr = require('./Greetr');

let greetr = new Greetr();

greetr.on( 'greet', data => {
    console.log(`someone greeted ${ data }`);   
});

greetr.greet('ayer');