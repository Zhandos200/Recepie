document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript file is loaded and DOM is ready"); 

    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('Form is being submitted'); 

        let isValid = true;
        clearErrors();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        if (name === "") {
            showError('nameError', 'Имя пользователя обязательно.');
            isValid = false;
        }

        if (email === "") {
            showError('emailError', 'Электронная почта обязательна.');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('emailError', 'Введите корректный email.');
            isValid = false;
        }

        if (password === "") {
            showError('passwordError', 'Пароль обязателен.');
            isValid = false;
        } else if (password.length < 8) {
            showError('passwordError', 'Пароль должен содержать минимум 8 символов.');
            isValid = false;
        }
        if (confirmPassword === "") {
            showError('confirmPasswordError', 'Подтверждение пароля обязательно.');
            isValid = false;
        } else if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Пароли не совпадают.');
            isValid = false;
        }

        if (isValid) {
            alert('Форма успешно отправлена!');
            form.reset();
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function showError(elementId, errorMessage) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = errorMessage;
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(error => {
            error.textContent = '';
        });
    }
});
