var num = 4;

var guess = Number(prompt("Guess a number:"));

if (guess === num) {
    alert("YOU GOT IT RIGHT!");
} else if (guess > num) {
    alert("TOO HIGH, GUESS AGAIN!");
} else {
    alert("TOO LOW, GUESS AGAIN!");
}