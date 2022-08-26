// Prommise.resolve
var promise = new Promise(
    function (remolve, reject) {
        //resolve('Success!);
        reject('Error')
    }
);

promise
    .then(function (result) {
        console.log('result: ', result);
    })
    .catch(function(err) {
        console.log('err: ', err);
    });

// Promise.all
var promise1 = new Promise (
    function(remolve) {
        setTimeout(function() {
            remolve ([1]);
        }, 2000);
    }
);

var promise1 = new Promise (
    function(remolve) {
        setTimeout(function() {
            remolve ([2, 3]);
        }, 5000);
    }
);

Promise.all([promise1, promise2])
    .then(function(result) {
        console.log(result)
    });