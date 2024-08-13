document.getElementById('minimizeBtn').addEventListener('click', () => {
    window.electron.minimize();
    console.log('minimize');
});

document.getElementById('closeBtn').addEventListener('click', () => {
    window.electron.close();
    console.log('close');
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Clear previous errors
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    let isValid = true;

    // Validate username
    if (username.length < 2) {
        document.getElementById('usernameError').textContent = 'Username must be at least 2 character long.';
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // If valid, proceed with form submission
    if (isValid) {
        // Here we will perform an AJAX request or similar to handle the actual login

        // Redirect to dashboard
        window.location.href = 'dashboard.html';
        
    }
});
