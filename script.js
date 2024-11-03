// Toggle between forms
function toggleForms(isForgot = false) {
    document.getElementById('loginForm').style.display = isForgot ? 'none' : 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = isForgot ? 'block' : 'none';
}

// Login function
async function login() {
    const username = document.getElementById('usernameLogin').value;
    const password = document.getElementById('passwordLogin').value;
    const errorMessage = document.getElementById('errorMessageLogin');

    try {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (res.ok) {
            // Redirect to home page
            window.location.href = 'home.html';
        } else {
            errorMessage.textContent = data;
        }
    } catch (error) {
        errorMessage.textContent = "Error logging in.";
    }
}

// Register function
async function register() {
    const username = document.getElementById('usernameRegister').value;
    const password = document.getElementById('passwordRegister').value;
    const errorMessage = document.getElementById('errorMessageRegister');

    try {
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (res.ok) {
            alert("Registration successful! Please log in.");
            toggleForms();
        } else {
            errorMessage.textContent = data;
        }
    } catch (error) {
        errorMessage.textContent = "Error during registration.";
    }
}

// Reset Password function
async function resetPassword() {
    const username = document.getElementById('usernameForgot').value;
    const newPassword = document.getElementById('newPassword').value;
    const errorMessage = document.getElementById('errorMessageForgot');

    try {
        const res = await fetch('/api/auth/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, newPassword }),
        });
        const data = await res.json();
        if (res.ok) {
            alert("Password has been reset! Please log in.");
            toggleForms();
        } else {
            errorMessage.textContent = data;
        }
    } catch (error) {
        errorMessage.textContent = "Error resetting password.";
    }
}
