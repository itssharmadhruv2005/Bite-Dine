// signup.js

// Function to handle form submission
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the input fields
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate inputs
    if (username === '' || email === '' || password === '') {
        displayMessage('All fields are required!', 'red');
        return; // Stop execution if validation fails
    }

    // Simulate successful sign-up (you can replace this with actual API call)
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);

    // Clear the form fields
    document.getElementById('signup-form').reset();

    // Display success message
    displayMessage('Sign up successful!', 'green');
});

// Function to display messages
function displayMessage(message, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;

    // Clear message after 3 seconds
    setTimeout(() => {
        messageDiv.textContent = '';
    }, 3000);
}