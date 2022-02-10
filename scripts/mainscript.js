console.log('MAIN SCRIPT IS RUNNING');

var buttonElement = document.querySelector("button");
var letterSection = document.querySelector("section");

buttonElement.addEventListener("click", event => {
    if (letterSection.classList.contains("startAnimation")) {
        console.log("animation done");
        letterSection.classList.remove("startAnimation");
        letterSection.classList.add("closeAnimation");
    } else {
        console.log('start first animation');
        letterSection.classList.add("startAnimation");
        letterSection.classList.remove("closeAnimation");
    }
})