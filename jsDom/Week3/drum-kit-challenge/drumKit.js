// TASK LIST
//     1 - Create html placeholders divs with drum keys
//     2 - Get element by id for each drum 
//     3 - Create event listener function with switch statement to play a certain sound when a key code is pressed that relates to the div with that assigned key code data
//     4 - html audio tags - research how to use these 
//     5 - Drum animations, get elements and then animate 
//     6 - Drum sounds event listener based on keycode and the the resulting key value


// get audio elements
const boom = document.querySelector('#boom');
const clap = document.querySelector('#clap');
const hihat = document.querySelector('#hihat');
const kick = document.querySelector('#kick');
const openhat = document.querySelector('#openhat');
const ride = document.querySelector('#ride');
const snare = document.querySelector('#snare');
const tink = document.querySelector('#tink');
const tom = document.querySelector('#tom');


// animate keys
const animateKey = document.querySelector('.drum-key');


// Listen for key press events and call play sounds
document.addEventListener('keypress', (e) => {
    let keyCode = e.code;
    // console.log(keyCode);

    if (keyCode == 'KeyA') {
        // play sound by getting the html audio element 
        console.log(keyCode);
        // Play audio
        boom.currentTime = 0;
        boom.play();
        animateKey.style.backgroundColor = 'red';

    } else if (keyCode == 'KeyS') {
        console.log(keyCode);
        clap.currentTime = 0;
        clap.play();
        animateKey.style.backgroundColor = 'blue';

    } else if (keyCode == 'KeyD') {
        console.log(keyCode);
        hihat.currentTime = 0;
        hihat.play();
        animateKey.style.backgroundColor = 'red';

    } else if (keyCode == 'KeyF') {
        // console.log(keyCode);
        kick.currentTime = 0;
        kick.play();
        animateKey.style.backgroundColor = 'red';

    } else if (keyCode == 'KeyG') {
        // console.log(keyCode);
        openhat.currentTime = 0;
        openhat.play();
        animateKey.style.backgroundColor = 'red';   

    } else if (keyCode == 'KeyH') {
        // console.log(keyCode);
        ride.currentTime = 0;
        ride.play();
        animateKey.style.backgroundColor = 'red';

    } else if (keyCode == 'KeyJ') {
        // console.log(keyCode);
        snare.currentTime = 0;
        snare.play();

    } else if (keyCode == 'KeyK') {
        // console.log(keyCode);
        tink.currentTime = 0;
        tink.play();

    } else if (keyCode == 'KeyL') {
        // console.log(keyCode);
        tom.currentTime = 0;
        tom.play();

    }
})
