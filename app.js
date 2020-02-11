// function greet() {
//     console.log(`hello`);
// }

let greet = () => console.log(`Hello`);

function logGreeting(fn) {
    fn();
}

// logGreeting(greet);


logGreeting( () => {
    console.log(`Hola función anónima`);
});