//variables

var a;//declarando
var b = 'b';// declaramos / asignamos
b = 'bb';//reasignacion
var a = 'aa' //redeclaracion


//Glonal Scope
var fruit = 'Apple';//global

function bestFruit(){
    console.log(fruit);
}

bestFruit();



function countries(){
    country = 'Colombia';// global por error  ❌
    console.log(country);
}

countries();
console.log(country);
