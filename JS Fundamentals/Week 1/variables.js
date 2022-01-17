let randomNum = Math.random();

console.log("All around the world".charAt(7).toUpperCase());

randomNum = randomNum + 10
// takes random num and assign the value in more elegant way
randomNum += 10;

console.log(randomNum);


let favDrink = "coffee";
console.log(favDrink);

console.log("My favourite drink is " + favDrink + " because its nice");

// Template literals - can enhance the use of injecting a variable to a string
console.log(`My favourite drink is ${favDrink} because its nice!`);

favDrink = "tea";
console.log(`My favourite drink is ${favDrink} because its nice!`);




// --------------------------------

// Activity 1

let myName = "Clarke";
let age = 29;
let favColour = "teal";

console.log(`My name is ${myName}, I'm ${age} and my favourite colour is ${favColour}.`);
console.log(`My name is ${myName}, I'm ${age} and my favourite colour is ${favColour}.`.toUpperCase());

// reverse
let sentence = `My name is ${myName}, I'm ${age} and my favourite colour is ${favColour}`;
sentence = sentence.split("");
sentence.reverse();
sentence.join("");
console.log(sentence);

// --------------------------------

// Activity 2
let breakfast = "toast";
let lunch = "falafel";
let dinner = "pizza";

console.log(`For breakfast I had ${breakfast}, for lunch I will have ${lunch} and for dinner I will have ${dinner}, because ${dinner} rules!`);
console.log(`For breakfast I had ${breakfast}, for lunch I will have ${lunch} and for dinner I will have ${dinner}, because ${dinner} rules!`.toUpperCase());

// --------------------------------

// Activity 3
let dateToday = new Date();
console.log(dateToday);

let birthDay = new Date('March 29, 22');
console.log(birthDay);

let daysToBirthday = Math.floor(Math.abs((birthDay - dateToday) / (1000 * 60 * 60 * 24)));

console.log(daysToBirthday);


// --------------------------------

//Activity 4
let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";

let gridGame = `
                |   |
              ${space1} | ${space2} | ${space3}
                |   |
            ------------- 
                |   |
              ${space4} | ${space5} | ${space6}
                |   |
            -------------
                |   |
              ${space7} | ${space8} | ${space9}
                |   | 
                        `;


console.log(gridGame);