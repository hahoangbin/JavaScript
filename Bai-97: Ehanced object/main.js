// Định nghĩa key; value  cho object
// Định nghĩa metthod cho object 
// Định nghĩa key cho object đươi dạng biến

var name = 'Javascript';
var price = 1000;

var course = {
    language,
    price,
    getName() {
        return price
    }
}

console.log(course)

var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    name: 'Javascript',
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
};

console.log(course);