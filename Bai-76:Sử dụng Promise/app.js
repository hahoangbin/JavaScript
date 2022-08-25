var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
    }
);

promise
    .then(function() {
        console.log('Successully!')
    })

    .catch(function() {
        console.log('Failure!')
    })

    .finally(function() {
        console.log('Done!')
    })