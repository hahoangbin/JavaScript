//  Arrow function

const logger = (log) => {
    console.log(log);
}
logger('Message...');

const sum = (a,b) => a + b;
console.log(sum(2,2));

const course = {
    name: 'Javascript basic',
    getName: function() {
        return this; // context
    }
};

console.log(course.getName());

const Course = function(name, price) {
    this.name = name;
    this.price = price;
}

const jsCourse = new Course('Javascript', 1000);

console.log(jsCourse);;