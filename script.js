const form = document.querySelector('#registerForm')

form.addEventListener('input', function() {
    const password = document.querySelector('.password');
    const confirmPassword = document.querySelector('.c_password');
    const message = document.querySelector('#message');

    if (password.value === confirmPassword.value) {
        message.textContent = '';
    } else {
        message.textContent = '*Passwords do not match'
    }
})