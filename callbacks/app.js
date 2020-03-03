function greet(callback) {
    console.log('hello');
    let data = {
        name: 'john doad'
    }
    callback(data);
}


greet(function (data) {
    console.log('the callback was invoked');
    console.log(data);
});

greet(data=>{
    console.log('A different callback was invoked');
    console.log(data.name);
});

