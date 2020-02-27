let util = require('util');

function Person(){
    this.firstname = 'johm';
    this.lastname = 'asdas';
}

Person.prototype.greet = function() {
    console.log(` hello ${ this.firstname } ${this.lastname}`);
}

function Policeman() {
    Person.call(this);
    this.badgenumber = '123123';
}

util.inherits(Policeman, Person);
let officer = new Policeman();

officer.greet();