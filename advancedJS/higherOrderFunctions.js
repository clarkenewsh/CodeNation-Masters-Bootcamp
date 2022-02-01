// Higher Order Functions

// *Higher Order Function is when you call a function and you pass another
// function as a parameter.

// Example 1 - whichGreeting is passe din to greet stored in fn and then called using fn which then call the whichGreeting function. 
// Morning, afternoon & evening is then passed in to whichMeeting to the time of day parameter to complete the operation.
const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}
const greet = (time, fn) => {
    if(time < 1200){
        fn("Morning");
    }else if (time >= 1200 && time < 1800){
        fn("Afternoon");
    }else{
        fn("Evening");
    }
}
greet(1400, whichGreeting);


// Example 2 
const add = () => {
    return 2 + 3;
}
add(); //logs 5 - calls the array

add; // logs the whole function
console.log(add);




// Example 3 - *Higher Order Function is when you create a function that returns another function - this one declares it internally passes it back to the first return and then returns the entire function
const add1 = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}
console.log(add1(2)); //returns the function in the main function




// Example 4 - 1 was passed to the function that sits inside the main function
const add2 = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}
console.log(add2(2)(1)); //output: 3


// Activities

// Activity 1 
// Write a simple function which logs “Hello Code
// Nation” to the console.
// Then write a higher order function which will run
// our simple function five times, even though you
// only call it one time.

const myFunc = () => {
    console.log("Hellooooo Code Nation");
}

const higherOrderFunc = (fun) => {
    for(i = 0; i < 5; i++){
        // call myFunc each time in the loop
        fun();
    }
}
higherOrderFunc(myFunc);


// Activity 2 
// Declare a variable with five numbers, then
// use .map to iterate through the array and multiply
// each array item by 3.


let numbers = ["1", "2", "3", "4"];

// Simple func
// const map = numbers.map(function(number) {
//     return number * 3;
// });

// console.log(map);

// Arrow func
const map = numbers.map(number => {
    return number * 3;
});

console.log(map);


// Acitivty 3 
// Test this function to make sure it works by passing a number to the doMaths function, then passing number and one of the fourmaths functions, to thereturned function.

const add3 = (a, b) => {
    return a + b;
}
const subtract = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
}
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}

console.log(doMaths(2)(2, add3));
console.log(doMaths(25)(1, subtract));
console.log(doMaths(5)(10, multiply));
console.log(doMaths(8)(1, divide));



