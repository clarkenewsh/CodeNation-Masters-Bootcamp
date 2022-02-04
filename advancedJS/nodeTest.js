// Node Js  - importing from nodeTest.js

// import file
// const someFunctions = require("./nodeTest2.js");

// object destructured version - get functions from file
const {add, multiply} = require("./nodeTest2.js");
const {subtract} = require("./nodeTest2.js");

// logging imported functions
// console.log(someFunctions);
// console.log(someFunctions.add(1, 2));

// using destructed add function
console.log(add(1,2));
console.log(subtract(3,2));
console.log(multiply(3,2));

// array for spread operator example
let array = ["mon", "tues", "wed", "thurs"];

// initialise variables for array index [0], [1], [2]
let first, second, everythingElse;

// spread operator - spread over and copy the array and select items you want in the new array
[first, second, ...everythingElse] = array;

console.log(first);
console.log(second);

//all other items in the array
console.log(everythingElse);




// node fs module enable us to access data on ours comouters os file system - usefull for accessing file system on server etc
const fs = require('fs');
// console.log(fs);



// node os module provides many functions that you can use to retrieve information from the underlying operating system on server etc
const os = require('os');
// console.log(os);



// get os username 
let userDetails = os.userInfo().username;

// Creates a txt file with os username
fs.appendFile('oh-hi.txt', `Hello ${userDetails}`, (err) => {
    if(err) {
        console.log('oops');
    }
})
