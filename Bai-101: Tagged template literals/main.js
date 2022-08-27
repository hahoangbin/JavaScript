// Tagged template literals

function highlight([first, ...strings], ...values) {
    console.log('first: ', first);
    console.log('strings: ', strings);
    console.log('values: ', values);
}

// Hoc lap trình <span>Js</span> tai <span>F8</span>!

var brand = 'F8'
var course = 'Js';

const html = highlight`Hoc lap trinh ${course} tai ${brand}!`;