let Emitter = require('./emitter');
let emiter = new Emitter();

const configEmitter = require('./config').events;

// Se crean y se cargan las funciones en el emisor de eventos
emiter.on(configEmitter.GREET, () => {
    console.log('asdasdasdasd v1');
});
emiter.on(configEmitter.GREET, () => {
    console.log('asdasdas das3');
});
emiter.on(configEmitter.GREET, () => {
    console.log('123123123123123');
});

// Llamada a todos los que coincidan
emiter.emit('greet');