var ans = prompt("Are we there yet?");

while (ans.indexOf("yes") === -1 && ans.indexOf("yeah") === -1) {
    ans = prompt("Are we there yet?");
}

alert("WE MADE THIS!");