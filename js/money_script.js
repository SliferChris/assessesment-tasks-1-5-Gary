// Christopher McKay
// 27/09/2023

// Assign values
let currencyInput = document.getElementById("currency");
let currencyButton = document.getElementById("currencybtn");
let output50p = document.getElementById("output50");
let output20p = document.getElementById("output20");
let output10p = document.getElementById("output10");
let errorContainerCurrency = document.getElementById("error-container-currency");

currencyButton.addEventListener("click", function () {
    let inputPounds = currencyInput.value.trim(); // Trim to remove leading and trailing whitespaces

    // Check if the entered value is not a valid number or is blank
    if (isNaN(inputPounds) || inputPounds === "") {
        // Display error message for currencyInput
        displayErrorMessage(currencyInput, "Please enter a valid number for pounds.");
        return;
    }

    // Convert the input to a number after trimming
    inputPounds = Number(inputPounds);

    function displayCoinCount(inputPounds) {
        // Calculate value
        let count50p = Math.floor(inputPounds / 0.5); // Number of 50p pieces
        let count20p = Math.floor(inputPounds / 0.2); // Number of 20p pieces
        let count10p = Math.floor(inputPounds / 0.1); // Number of 10p pieces
        // Displays value
        output50p.innerHTML = `£${inputPounds.toFixed(2)} is equivalent to ${count50p} 50p pieces.`;
        output20p.innerHTML = `£${inputPounds.toFixed(2)} is equivalent to ${count20p} 20p pieces.`;
        output10p.innerHTML = `£${inputPounds.toFixed(2)} is equivalent to ${count10p} 10p pieces.`;

        // Clear error message for currencyInput
        clearErrorMessages();
    }

    displayCoinCount(inputPounds);
});

// Function to display error messages for specific input elements
function displayErrorMessage(inputElement, message) {
    let errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    inputElement.parentNode.appendChild(errorElement);
}

// Function to clear all error messages
function clearErrorMessages() {
    let errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (error) {
        error.remove();
    });
}
