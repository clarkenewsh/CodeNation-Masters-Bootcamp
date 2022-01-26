// Challenge keycode generator 

// TASK LIST:
//     get keydown events
//     hide the instructions element
//     show keydown event code in html placeholders
//     stretch goal - mobile version


// get elements 
const instruction = document.getElementById('instructions');
const eventKey = document.getElementById('event-key');
const eventCode = document.getElementById('event-code');
const eventWhich = document.getElementById('event-which');
const eventCodeCards = document.getElementById('event-codes');

eventCodeCards.style.display = 'none';

// test keycode.event objects in console
// document.addEventListener('keydown', (event) =>{
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
//     console.log(event.which);
// });


document.addEventListener('keydown', (event) => {
    eventCodeCards.style.display = '';
    let key = event.key;
    let code = event.code;
    let which = event.which;
    instruction.textContent = which;
    eventKey.textContent = key;
    // console.log(key);
    eventCode.textContent = code;
    eventWhich.textContent = which;
});


// const keyCodeGenerator = (event) => {
//     let key = event.key;
//     let code = event.code;
//     let which = event.which;
//     eventKey.innerHTML = key;

// }