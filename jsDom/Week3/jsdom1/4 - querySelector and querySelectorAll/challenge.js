// Activity 2 - get elements with querySelector 
const listItems = document.querySelectorAll('li:nth-child(even)');
const listItems1 = document.querySelectorAll('li');

console.log(listItems);
console.log(listItems.length);


// Activity 3 - Use a for loop to display all even items to have text colour “lightgreen”.
for( i = 0; i < listItems.length; i++){
    listItems[i].style.color = 'lightgreen';
}


// Challenge - Cycle over the list items and apply colours from the array called colours.
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

for( i = 0; i < listItems1.length; i++){
    listItems1[i].style.color  =  colours[i];
}

// Challenge - 
let x = 0;
for( i = 0; i < listItems1.length; i++){
    listItems1[i].style.color  =  colours[x];
    x++;
    if (x === colours.length) {
        x = 0;
    }
}

console.log(listItems1);

