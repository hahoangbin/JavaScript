
// Đối tượng `Validator` 
function Validator() { 
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate 
    function validate(inputElement, rule) {
        // var errorElement = getParent(inputElement, '.form-group')
        var errorElement = getParent (inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        var errorMessage = rule.test(inputElement.value);
        // Lấy ra các rules của slector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule & kiểm tra 
        // Nếu có lỗi dừng việc kiểm tra 
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checkked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }

        return !errorMessage;
    }

// Lấy element của form cần validate
    var formElement = document.querySelector(Options.form);
    if (formElement) { 
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormVlad = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormVlid = false;
                }
            });

            var enableInputs = formElement.querySelectorAll('[name]:not');

            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var formVakues = Array.form(enableInputs).reduce(function (values, input) {
                        value[input.name] = input.value;
                        return values;
                    }, {});
                    options.onSubmit(formValues);
                    }
                    // Trường hợp submit với hành vi mặc định 
                    else {
                        formElement.submit()

                }
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector)
                    inputElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove
                }
            }
        });

    }
}

// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra messae lỗi 
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, messae) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : messae || "Vui lòng nhập trường này"

        }
    };
}

Validator.isEmail = function (selector, messae) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : messae || 'Trường này phải làm email';
        }
    };
}


Validator.minLength = function (selector, min, messae) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : messae || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.isConfirmed = function (selector, getCofirmValue, messae) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : messae || 'Giá trị nhập vào không chính xác';
        }
    }
}