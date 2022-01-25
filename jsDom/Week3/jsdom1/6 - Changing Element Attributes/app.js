// Desk Challenge - when the user pastes a url of an image into the input element,  the submit button is clicked, image  should change to the image the user pasted in the input element
const submit = document.getElementById('submit');
const input = document.getElementById('input');
const img = document.getElementById('image');

submit.addEventListener('click', () => {
    img.setAttribute('src', input.value);
});

