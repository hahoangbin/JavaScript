// Spread 

function logger({ name, price, ...rest}) {
    console.log(obj.name);
    console.log(obj.price);
    console.log(rest);
}

logger({
    name: 'Javascript',
    price: 1000,
    description: 'Description content'
});

function logger ([a, b]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

logger([2, 6, 12, 3, 4, 4]);

var array1 = ['Javascript', 'Ruby', 'PHP'];

var array2 = ['ReactJs', 'Dart'];

var array3 = ['ReactJs', 'Dart', ...array1];

console,log(array3);


var object1 = {
    name: 'Javascript'
};

var object2 = {
    price: 1000
};

var object3 = {
    ...object1
    ...object2
}

console.log(object3)


var array = ['Javascript', 'PHP', 'Ruby'];

function logger(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}