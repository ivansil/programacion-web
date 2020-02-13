// Exporta una instancia de objeto

function Greet3() {
    this.greeting = `Hello world 3`,
    this.greet = () => {
        console.log(this.greeting);
    }
}


module.exports = new Greet3();