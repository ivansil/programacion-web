function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

// Agrega atributos o funcionalidades (metodos)
Person.prototype.greet = function() {
    console.log(`${this.firstname} ${this.firstname}`);
}

var john = new Person(`Jhon`, `Doe`);
var jane = new Person(`Jane`, `Doe`);

john.greet();
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);