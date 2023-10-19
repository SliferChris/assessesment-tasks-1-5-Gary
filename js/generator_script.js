// Christopher McKay
// 27/09/2023

{
  // assign values
  let genButton = document.getElementById("genbtn");
  let counterOutput = document.getElementById("counter_output");
  let randNumOutput = document.getElementById("rand_num");
  let greaterLessOutput = document.getElementById("greater_less");
  let imageOutput = document.getElementById("image");
  let resetButton = document.getElementById("reset");

  let clickCount = 0;

  // Array of image file names (assuming PNG format)
  let imageArray = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f.png', 'g.png', 'h.png', 'i.png', 'j.png', 'k.png', 'l.png', 'm.png', 'n.png', 'o.png', 'p.png', 'q.png', 'r.png', 's.png', 't.png', 'u.png', 'v.png', 'w.png', 'x.png', 'y.png', 'z.png'];

  // generates a random number between 1 and 26
  function generateRandomNumber() {
    return Math.floor(Math.random() * 26) + 1;
  }

  // resets all inputs
  function resetValues() {
    clickCount = 0;
    counterOutput.innerHTML = clickCount;
    randNumOutput.innerHTML = "";
    greaterLessOutput.innerHTML = "";
    imageOutput.innerHTML = ""; 
  }

  genButton.addEventListener("click", function () {
    clickCount++;

    // click count goes up every press
    counterOutput.innerHTML = clickCount;

    // Displays a random number
    let randomNum = generateRandomNumber();

    // Display a random number
    randNumOutput.innerHTML = randomNum;

    // Check if the number is greater or less than 13 which is half of the alphabet
    if (randomNum > 13 || randomNum < 13) {
      if (randomNum > 13) {
        greaterLessOutput.innerHTML = "Greater than 13";
      } else {
        greaterLessOutput.innerHTML = "Less than 13";
      }
    } else {
      greaterLessOutput.innerHTML = "Equal to 13";
    }
    

    // Convert the number to the corresponding letter in the alphabet
    let alphabetLetter = String.fromCharCode(96 + randomNum); 

// Display the image
let imagePath = `images/${imageArray[randomNum - 1]}`;
imageOutput.innerHTML = `<img src="${imagePath}" alt="${alphabetLetter}">`;
  });

  // use a reset button using an EventListener
  resetButton.addEventListener("click", resetValues);
}
