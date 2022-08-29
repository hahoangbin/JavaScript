//JSON server 

var courseApi = " /Users/thanhminh/.npm/_logs/2022-08-29T07_46_04_428Z-debug.log"

fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        console.log(courses);
    });