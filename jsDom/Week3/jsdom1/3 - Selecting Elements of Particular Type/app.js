const myHeading = document.getElementById('myHeading');
const list = document.getElementsByTagName('li');
const colorClass = document.getElementsByClassName('not-orange');
// get first letter 
// let first = letters;

// for loop to change color of each listen item 
for(let i = 0; i < list.length; i++) {
    list[i].style.color = "orange";
}

// for loop to change class name
for(let i =0; i < colorClass.length; i++){
    colorClass[i].style.color = 'red';
}


// change color to opposite of class name 
for(let i =0; i < list.length; i++){
    if(list[i].className == 'not-orange') {
        list[i].style.color = 'blue'
    } else {
        list[i].style.color = 'orange'
    }
}

// change class name 
// for(let i =0; i < list.length; i++){
//     if(list[i].className != 'not-orange') {
//         list[i].style.color = 'blue'
//     }
// }
