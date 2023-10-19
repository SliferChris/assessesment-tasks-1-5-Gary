// Function to validate email format
function validateEmail(email) {
    let emailValue = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValue.test(email);
}

// Function to validate username format
function validateUsername(username) {
    let usernameValue = /^[a-zA-Z0-9]+$/;
    return usernameValue.test(username);
}

// Function to display error messages
function displayErrorMessage(inputElement, message) {
    let errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    inputElement.parentNode.appendChild(errorElement);
}

// Function to clear error messages
function clearErrorMessages() {
    let errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (error) {
        error.remove();
    });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get email and username input elements
    let emailInput = document.getElementById("email");
    let usernameInput = document.getElementById("username");

    // Clear previous error messages 
    clearErrorMessages();

    // Get values from input fields
    let email = emailInput.value;
    let username = usernameInput.value;

    // Check if either email or username is empty
    if (email === "" || username === "") {
        displayErrorMessage(emailInput, "All fields are Mandatory");
        return;
    }

    // Validate email
    if (!validateEmail(email)) {
        displayErrorMessage(emailInput, "Invalid email format");
    }

    // Validate username
    if (!validateUsername(username)) {
        displayErrorMessage(usernameInput, "Username can only contain letters and numbers");
    }

    // If any validation fails, don't proceed to redirection
    if (!validateEmail(email) || !validateUsername(username)) {
        return;
    }

    // If form is valid, redirect
    window.location.href = "subbed.html";
}

 
// Function to reset the form
function resetForm() {
    // Get all text elements
    let inputElements = document.querySelectorAll("input[type=text]");
    
    // Clear values in text areas
    for (let i = 0; i < inputElements.length; i++) {
        inputElements[i].value = "";
    }

    // Clear previous error messages
    clearErrorMessages();
}

// Event listeners for form submission and reset
document.getElementById("sub").addEventListener("click", handleSubmit);
document.getElementById("btn").addEventListener("click", resetForm);
