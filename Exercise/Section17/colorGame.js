var numColor = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons =  document.querySelectorAll(".mode");

init();

function init() {
    setupModeButton();
    setupSquares();
    reset();
}

// mode button event listeners
function setupModeButton() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            numColor = (this.textContent === "Easy" ? 3 : 6);
            reset();
        });
    }
}

// squares event listeners
function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function() {
            // grab color of picked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColor(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Paly Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}



function reset() {
    colors = generateRandomColors(numColor);
    pickedColor = pickColor();
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }   
    }
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function() {
    reset();
});


for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        // grab color of picked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColor(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Paly Again?"
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

// change the color of all squares to selected color
function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// pick a random color from the colors array
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// generate the colors array with n random rgb colors
function generateRandomColors(n) {
    var colors = [];
    for (var i = 0; i < n; i++) {
        colors.push(randomColor());
    }

    return colors;
}

// generate a random rgb color expression
function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue +")";
}