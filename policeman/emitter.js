const EventEmitter = require('events');
// const util = require('util');

// Se refactoriza la clase a ES6 
class Greetr extends EventEmitter {
    constructor() {
        // reemplaza la forma de asignar propiedades de la clase padre
        super();
        this.greeting = 'Hola mundo';
    }

    greet(data) {
        console.log(`${this.greeting} ${data}`);
        this.emit('greet', data);
    }
}

// function Greet() {
//     EventEmitter.call(this);
//     this.greeting = 'Hola mudo';
// }

// util.inherits(Greet, Ev-entEmitter);

// Greet.prototype.greet = function(data) {
//     console.log(this.greeting);
//     this.emit('greet', data);
// }

let greeter1 = new Greetr();
greeter1.on('greet', data => {
    console.log(`someone greeted ${data}`);
});

greeter1.greet('today');
// greeter1.greet('fffff');

// let obj = {
//     name: 'primero',
//     greet: function(param) {
//         console.log(this);
//         console.log(`hola ${this.name}`, param);
//     }
// }

// obj.greet(32434);
// obj.greet.call({name: 'segundo'}, 2342343);
// obj.greet(1212);
// obj.greet.apply({name: 'segundo'}, [7,4,5,] );