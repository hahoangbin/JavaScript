//JSON server: API server (Fake) / Mock API
// -CRUD 
//    - Create: tạo mới -> POST
//    - Read: Lấy dữ liệu -> Get
//    - Update: Chỉnh sửa -> PUT / PATCH
//    - Delete: Xoá -> DELETE
// - Postman

function start() {
    getCourses(renderCourses);

    handleCreateForm();
}

start();

// Functions
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function renderCourses(courss) {
    var listCoursesBlock = 
        document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').nodeValue;
        var description = document.querySelector('input[name="description"]').nodeValue;

        var formData = {
            name: name,
            description: description
        };

        createCourse(formData);
    }
}
