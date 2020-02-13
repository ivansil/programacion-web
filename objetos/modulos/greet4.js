// Exporta un constructor de objeto

function Greet4() {
    this.greeting = `Hello world 4`,
    this.greet = () => {
        console.log(this.greeting);
    }
}


module.exports = Greet4;