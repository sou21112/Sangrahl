document.getElementById('switchToRegister').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
});

document.getElementById('switchToLogin').addEventListener('click', function() {
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
});

document.getElementById('switchToForgotPassword').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('forgotPasswordContainer').style.display = 'block';
});

document.getElementById('switchToLoginFromForgot').addEventListener('click', function() {
    document.getElementById('forgotPasswordContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
});

// Add form submission handlers here to handle login, register, and password reset.
