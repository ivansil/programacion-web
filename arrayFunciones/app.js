let obj = {
    greet: 'hello',
    // greet3: () => {
    //     console.log(`hola funcion`);
    // }
}

// Formas de acceder a un atributo o metodo
console.log(obj.greet);     
console.log(obj['greet']);  
let prop = 'greet';
obj[prop];


// invocar funciones dentro de un array
let arr = [];
arr.push(()=>{
    console.log('HW 1');    
});

arr.push(()=>{
    console.log('HW 2');    
});

arr.push(function hola(){
    console.log('HW 3');    
});

arr.forEach( item => {
    console.log(item)
    item();
    
} );