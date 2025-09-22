// Initialize and declare variables

// Create a variable for the minimum number input
const min = document.getElementById('min');

// Create a variable for the maximum number input
const max = document.getElementById('max');

// Create a variable for generate button
const genBtn = document.getElementById('generate');

// Create a variable for the minimum number input
const resetBtn = document.getElementById('reset');

// Create a variable for the minimum number input
const randNumDisplay = document.getElementById('randomNumber');

function genRandNum() {
    const minVal = parseInt(min.value);
    const maxVal = parseInt(max.value);

    if (isNaN(minVal) || isNaN(maxVal) || minVal >= maxVal) {
        alert("Please enter a valid minimum and maximum value.");
        return;
    }

    const randNum = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    randNumDisplay.textContent = randNum;
}

function reset () {
    min.value = 1;
    max.value = 100;
    randNumDisplay.textContent = "Click the button to generate";
}

genBtn.addEventListener('click', genRandNum);
resetBtn.addEventListener('click', reset);