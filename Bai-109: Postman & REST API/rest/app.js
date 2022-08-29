//JSON server: API server (Fake) / Mock API
// -CRUD 
//    - Create: tạo mới -> POST
//    - Read: Lấy dữ liệu -> Get
//    - Update: Chỉnh sửa -> PUT / PATCH
//    - Delete: Xoá -> DELETE
// - Postman

var courseApi = " /Users/thanhminh/.npm/_logs/2022-08-29T07_46_04_428Z-debug.log"

fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        console.log(courses);
    });