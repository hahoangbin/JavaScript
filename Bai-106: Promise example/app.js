// Promise example

var users = [
    {
        id: 1,
        name: 'Thanh Minh',
    },
    {
        id: 2,
        name: 'Minh Quan',
    },
    {
        id: 3,
        name: 'Minh Hong',
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Minh dep trai vd :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Dep trai binh thuong em oi!'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Ok anh ^^'
    },
];

// 1. Lấy comments 
// 2. Từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng 

// Fake API

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id)
        });
        setTimeout(function() {
            resolve(result);
        }, 1000);
    }, 1000);
}

// Callback hell
// Promise hell
// Async / Await

getComments () 
    .then(function(comments) {
        var userIds = comments.map(function(comments) {
            return comments.user_id;
        });

        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments,
                };
            });
    })
    .then(function(data) {
        
        var commentBlock = document.getElementById('comment-block');

        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.user.find(function(user) { 
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.comment}</li>`;
        });

        commentBlock.innerHTML = html;
    });