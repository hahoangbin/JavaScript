// 1. Front-end: Xây dựng giao diện 
// người dùng 

// 2. Back-end: Xây dựng logic xử lý 
// + Cơ sở dữ liệu 

// API (URL) -> Application programing interface

// Cổng giao tiếp giữa các PM

// Backend -> API (URL) -> Fetch -> JSON/XML
// JSON.parse -> Javascript types
// -> Render ra giao diện với HTML

var postApi =
    'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </li>`;
        });

        var htmls = htmls.join('');
        document.getElementById('post-block').innerHTML = html; 
    })
    .catch(function(err) {
        alert('Có lỗi!');
    })


