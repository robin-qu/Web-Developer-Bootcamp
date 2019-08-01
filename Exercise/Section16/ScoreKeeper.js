var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var resetButton = document.getElementById("reset");
var numinput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");


p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener("click", reset);

function reset() {
    p1Score = 0;
    p1Display.textContent = p1Score;
    p1Display.classList.remove("winner");
    p2Score = 0;
    p2Display.textContent = p2Score;
    p2Display.classList.remove("winner");
    gameOver = false;
}

numinput.addEventListener("change", function() {
    winningScore = Number(this.value);
    winningScoreDisplay.textContent = this.value;
    reset();
});