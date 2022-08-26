// 3. Promise 
//    -Sync --> ok
//    -Async --> ok
//    -Nỗi đau
//    -Lý thuyết, cách hoạt động
//    -Thực hành,ví dụa

setTimeout(function() {
    console.log(1); //viec1
    setTimeout(function() {
        console.log(1); //viec2
        setTimeout(function() {
            console.log(1); //viec3
            setTimeout(function() {
                console.log(1); //viec4
                setTimeout(function() {
                    console.log(1); //viec5
                    setTimeout(function() {
                        console.log(1); //viec6
                        setTimeout(function() {
                            console.log(1); //viec7
                            setTimeout(function() {
                                console.log(1); //viec8
                                setTimeout(function() {
                                    console.log(1); //viec9
                                    
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);