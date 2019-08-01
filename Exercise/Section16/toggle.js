// document.querySelector("button").addEventListener("click", function() {
//     document.querySelector("body").setAttribute("style", "background-color: purple");
// })

var isPurple = false;
document.querySelector("button").addEventListener("click", function() {
    document.body.classList.toggle("purple");
})