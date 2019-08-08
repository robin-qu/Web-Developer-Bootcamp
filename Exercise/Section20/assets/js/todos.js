// Check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        this.remove();  // remove the li
    });
    event.stopPropagation();  // stop propagating the event to parent
});

// Enter new todos
$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        var newTodo = $(this).val();
        // empty the input box
        $(this).val("");
        // create a new li and append it to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
    } 
});

$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
});