let myHeading = document.getElementById('heading');
let myInput = document.getElementById('input');
let myButton = document.getElementById('button');

// Get value from input and chnage heading to that value(colour)
myButton.addEventListener('click', () => {
    myHeading.style.color = myInput.value;
})