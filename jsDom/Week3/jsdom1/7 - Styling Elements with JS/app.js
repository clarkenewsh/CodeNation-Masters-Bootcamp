// Styling elements - Toggle show/hide
const button= document.getElementById("submit");
const image = document.getElementById("cat");
button.addEventListener("click", () => {
    if(image.style.display == "none") {
        image.style.display = "block";
        button.textContent = "hide";

    } else {
        image.style.display = "none";
        button.textContent = "show";
    }
});