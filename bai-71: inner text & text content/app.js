// 1. Event listener --> ok
// 2. JSON 
// 3. Fetch 
// 4. DOM location 
// 5. Local storage 
// 6. Session storage 
// 7. Coding convention 
// 8. Best Practices 
// 9. Mistakes 
// 10. Performance

// 1. Là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation 
// 3. JSON: Number, String, Boolean, Null, Array, Object 

// Stringify: Từ Javascript types -> JSON 
// Parse: Từ JSON -> Javasctipt types 

var json = '["Javascript","PHP"]';


console.log(JSON.stringify({
    name: 'Thanh minh',
    age: 16,
    test: function () {}
}))


