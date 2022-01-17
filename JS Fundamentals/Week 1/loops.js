// for loop
let favDrinks = ["coke", "fanta", "tonic", "gin"];

for(let drinksIndex=0; drinksIndex < favDrinks.length; drinksIndex++){
    console.log(favDrinks[drinksIndex]);
}

// For loops with if statements
let multiplesTwo = []

for (let i = 0; i < 20; i++) {
    if(i % 2 == 0) {
        multiplesTwo.push(i);
    }
}

console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}. `);


// Using for loops with functions
const sumOfNumbers = (min, max) => {
    let sums = 0;
    for(let i = min; i < max + 1; i++) {
        sums += i;
    }
    return sums;
}

console.log(` sum of all the numbers from 1 to 10 is ${sumOfNumbers(1, 10)}. `);


// While loops - continue to run until manually told to stop
let age = 15;

while(age < 18) {
    console.log("You're a child");
    age++;
}

console.log("You're an adult");


// Another while
let randomNumber = 0;

while (randomNumber < 10) {
    console.log(`Random number ${randomNumber} keep looping`);
    randomNumber = (Math.round(Math.random() * 20));
}

console.log(`No more looping, with random no. ${randomNumber}. `);

// Another While
let cards = ["Diamonds", "Spade", "Heart", "Club"];
let currentCard = "Club";

while(currentCard != "Spade") {
    // log current card if not spade. When spade loops ends
    console.log(currentCard);
    // assign current card to cards array, create random num between 1 and 4, assign that number to choose the index in the array to pay the index into the function
    currentCard = cards[Math.floor(Math.random() *4)];

}

console.log(currentCard);


// Loop Activities

// Activity 1 - push 2 films to arr, and loop through updated arr
let favFilms = ["Remember the Titans", "Blood Diamond", "Interstellar"];

favFilms.push("Baby Driver", "Fast & Furious");

for (i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
}

// Activity 2 - Generate 6 random numbers between 1-50
for (let i = 0; i < 6; i++) {
    console.log(Math.ceil(Math.random() * 50));
}

// Activity 3 - count from 9 to 0
for (let i = 9; i >= 0; i--) {
    console.log(i);
}


// Activity 4 - loop arr and find if 3rd index is ghostbusters
let moreFavFilms = ["Remember the Titans", "Blood Diamond", "ghostbusters", "Interstellar"];

const filmCheck = () => {
    for (i = 0; i < moreFavFilms.length; i++) {
        console.log(moreFavFilms[i]);
    }
    if(moreFavFilms[2] == "ghostbusters") {
        console.log("yey it’s ghostbusters");
    } else{
        console.log("boo, we want ghostbusters");
    }
}

filmCheck();


// Activity 5 - generate a random number between 1 and 30 six times, each random number generated, check if this number of divisible by 7 or not
let randomNum1 = 0;

const randNumChecker = () => {
    for (i = 0; i < 6; i++) {
        randomNum1 = Math.ceil(Math.random() * 30);
    
        // check if random num is divisible by 7
        if(randomNum1 % 7 == 0){
            console.log(`${randomNum1} is divisible by 7`);
        } else {
            console.log(`${randomNum1} is NOT divisible by 7`);
        }
    }
}

randNumChecker();

// Activity 6 - do while loop
// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. 
// The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

Example

// Activity 7 - check all numbers between 1 and 20, whether it is a prime number or not.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(numbers);


// for (let i = 0; i <= 20; i++) {
//     console.log(i);
// }

// if(i )
 
// const primeNumChecker = () => {
//     let num
// }

