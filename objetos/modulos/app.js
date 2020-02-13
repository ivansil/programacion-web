// Exporta una instancia de objeto

let greet1 = require('./greet1');
greet1();

let greet2 = require('./greet2').greet;
greet2();

let greet3 = require('./greet3');
greet3.greet();
greet3.greeting = `changed hello world`;

// Al exportar una instancia de objeto sus valores en memoria siguen siendo
// los mismos cada vez que se cambia un dato

let greet3b = require('./greet3');
greet3b.greet();

let Greet4 = require('./greet4');
let grtr = new Greet4();
grtr.greet()