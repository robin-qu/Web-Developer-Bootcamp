// isEven
function isEven(num) {
    return num % 2 == 0;
}

// factorial
function factorial(num) {
    var res = 1;
    for (var i = 2; i <= num; i++) {
        res *= i;
    }

    return res;
}

// kebabToSnake
function kebabToSnake(str) {
    var s = str.replace(/-/g, "_");
    return s;
}