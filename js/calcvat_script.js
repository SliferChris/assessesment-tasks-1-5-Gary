//Christopher McKay
//27/09/2023

// Function to calculate the VAT 
function calculateVAT() {
  // Get the input values
  let amountInput = document.getElementById("amount");
  let vatInput = document.getElementById("vat");
  let totalInput = document.getElementById("total");

  // Clear any existing error messages
  clearErrorMessages();

  let amount = Number(amountInput.value);

  // Check if the entered amount is not a valid number
  if (isNaN(amount) || amount == "") {
    // Display error message next to the amount input field
    displayErrorMessage(amountInput, "Please enter a valid number for the amount.");
    return;
  }

  let vatRate = 0.22; // assign the VAT

  // Calculate prices
  let vat = amount * vatRate;
  let total = amount + vat;

  // Update the values
  vatInput.value = vat.toFixed(2);
  totalInput.value = total.toFixed(2);
}

// Function that resets value with text in it
function clearFields() {
  // Select all input elements of type text
  let inputElements = document.querySelectorAll("input[type=text]");
  // Loop every input element and clear its value
  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].value = "";
  }

  // Clear error message
  clearErrorMessages();
}

// Function to display an error message next to the input field
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

// Add a reset and calculate button using an EventListener
document.getElementById("calcbtn").addEventListener("click", calculateVAT);
document.getElementById("reset").addEventListener("click", clearFields);
