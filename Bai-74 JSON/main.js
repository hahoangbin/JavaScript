
//stringify: từ javascript types -> JSON

//parse: từ JSON -> javascript

var json1 = '{"name":"Minh Bvi","age":18}'
var object1 = JSON.parse(json1)
console.log(object1)

var json2 = '["javascript","PHP"]'
var object2 = JSON.parse(json2)
console.log(object2)

var json3 = 'true'
var object3 = JSON.parse(json3)
console.log(object3)

console.log(JSON.stringify(true))

console.log(JSON.stringify([
    'javascript'
]))

console.log(JSON.stringify({
    name: 'Minh bvi',
    age: 6
}))