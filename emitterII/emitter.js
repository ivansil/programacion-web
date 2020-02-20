
// Emisor de eventos, utilizado para ejecutar multiples funciones al invocar un metodo. 
function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    console.log(listener);
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
    // Se llena el array de funciones.

}

Emitter.prototype.emit = function(type) {
    // Ejecuta todas las funciones dentro de Emitter que coincidan con el 'nombre' (type) dado.
    if(this.events[type]) {
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;