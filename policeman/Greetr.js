'use strinct';
const EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hola mundo';
    }

    greet(data) {
        console.log(`${this.greeting} ${data}`);
        this.emit('greet', data);
    }
}