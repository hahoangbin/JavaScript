//Destructuring
var array = ['Javascript', 'PHP', 'Ruby'];

var a = array[0];
var b = array[1];
var c = array[2];

console.log(a, b, c,);

var course = {
    name: 'Javascript',
    price: 1000
};

var { name, ...newObject } = course;

console.log(newObject);
console.log(name);


function logger(...params) {
    console.log(params);
}

console.log(looger(1,2,3,4,5,6,7));