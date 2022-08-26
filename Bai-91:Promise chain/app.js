var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()

        reject('Co loi!')
    }
);

function sleep(ms) {
    return new Promise(function(remove) {
        setTimeout(remove, ms);
    }) 
}
sleep(1000)
    .then(function(){
        console.log(1)
        return sleep(1000)
    })
.then(function(){
    console.log(2)
    return sleep(1000)
})
.then(function(){
    console.log(3)
    return sleep(1000)
})
.then(function(){
    console.log(4)
    return sleep(1000)
})

promise
    .then(function(courses) {
        console.log(courses)
    })

    .catch(function(error) {
        console.log(error);
    })

    .finally(function() {
        console.log('Done!')
    })

    function sleep(ms){
        return new Promise(function(resolve){
        setTimeout(resolve, ms)
    })
    }