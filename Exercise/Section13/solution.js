function printReverse(arr){
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse([1, 2, 3, 4, 5]);


function isUniform(arr) {
    var first = arr[0];
    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }

    return true; 
}


function sumArray(arr) {
    var sum = 0;

    arr.forEach(function(num) {
        sum += num;
    });

    return sum;
}


function max(arr) {
    var max = 0;

    arr.forEach(function(num){
        if (num > max) {
            max = num;
        }
    });

    return max;
}