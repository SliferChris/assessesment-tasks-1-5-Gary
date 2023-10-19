//Christopher McKay
//27/09/2023
//The function receives the value as an argument and displays a message based on the selected day

function displayMenuValue(value) {
    let output = document.getElementById("msgout"); 
    let weekday = "";

    switch (value) {
        case "Monday":
            weekday = "child is fair of face";
            break;
        case "Tuesday":
            weekday = "child is full of grace";
            break;
        case "Wednesday":
            weekday = "child is full of woe";
            break;
        case "Thursday":
            weekday = "child has far to go";
            break;
        case "Friday":
            weekday = "child is loving and giving";
            break;
    }

    output.textContent = weekday; 
}

// Get the dropdown menu
let menuSelect = document.getElementById("menuselect");

//"Create a dropdown menu that uses displayMenuValue when an option is picked"
menuSelect.addEventListener("change", function () {
    let selectedValue = menuSelect.value;
    displayMenuValue(selectedValue);
});

// Get the reset button
let resetButton = document.getElementById("rst");

// Add a reset button using a EventListener
resetButton.addEventListener("click", function () {
    menuSelect.value = ""; // Clear the selected day
    displayMenuValue(""); // Clear the message
});
