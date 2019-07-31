var todos = ["Buy New Turtle"];
window.setTimeout(function() {
    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        if (input === "list") {
            console.log("*********************");
            todos.forEach(function(todo, idx) {
                console.log(idx + ": " + todo);
            })
            console.log("*********************");
        } else if (input === "new") {
            var newTodo = prompt("Enter New Todo");
            todos.push(newTodo);
            console.log("Added Todo");
        } else if (input === "delete") {
            var index = prompt("Enter the index of todo to delete");
            todos.splice(index, 1);
            console.log("Deleted Todo");
        }

        input = prompt("What would you like to do?");
    }

    console.log("OK, you quit the app.");
}, 500);