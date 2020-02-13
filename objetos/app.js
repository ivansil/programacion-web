var person = {
    firstname: `Ivan`,
    lastname: `Silva`,
    greet: function()  {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    },
    extra: () => {
        'use-strict';
        return this;
    }
}

// Object literals, acceder a valores de objeto por .valor y ['valor']

// person.greet()
// console.log(person[`lastname`]);
console.log(person.extra());