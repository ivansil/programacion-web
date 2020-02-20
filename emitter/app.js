let Emitter = require('./emitter');
let emiter = new Emitter();

emiter.on('greet', () => {
    console.log('asdasdasdasd v1');
});

emiter.on('greet', () => {
    console.log('asdasdas das3');
});

emiter.on('greet', () => {
    console.log('123123123123123');
});


emiter.emit('greet');