// Warm Up Task - working on
let space1 = "x";
let space2 = "x";
let space3 = "x";
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


if (space1 && space2 && space3 == 'x') {
    console.log("You won - top row")
} else {
    console.log("you lost")
}


// JORDANS TIC TAC TOE CHECK WINNER EXAMPLE 
// let theGrid = [["o", "x", "o"], 
//                ["o", " ", "o"], 
//                ["x", " ", "o"]];
// let toCheck;

// for (let i = 0; i < 2; i++) {
//     if (i == 0) {
//         toCheck = "x";
//     } else {
//         toCheck = "o";
//     }

//     if (theGrid[0][0] == toCheck && theGrid[0][1] == toCheck && theGrid[0][2] == toCheck) {
//         console.log("You won!");
//     }
// }

// ----------------------------------------
// Arrow Function example
// const pressGrindBeans = () => {
//     console.log("Grinding");
// }

// pressGrindBeans();


// Arrow function taking a function to set flag true/false - turn on/off toggle using boolean logic
let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        // Now set to false
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        // Now set to true
        coffeeIsGrinding = true;
    }
}
// Multiple calls to show tje changing of coffeeIsGrinding variable true/false
pressGrindBeans();
pressGrindBeans();
pressGrindBeans();
pressGrindBeans();



// Arrow function taking parameters - hard code acc numbers & amounts example 
// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449923);
// cashWithdrawal(20, 50449925);


// Arrow function example taking a dynamic acc number stored in the global variable - accnumber
// let accnumber = 50449921;

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }
// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);


// Task to update balance and take dynamic amount and reduce balance
let balance = 2000;
let amount = 30;
let accNumber = 50449921;

const cashWithdrawal = (amount, accNumber, balance) => {
    //Check sufficient funds
    if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrawing £${amount} from account ${accNumber}. Your new balance is ${balance}`);

    } else {
        console.log(`Not enough funds. Your balance is ${balance}.`);
    }
}

cashWithdrawal(amount, accNumber, balance);


// Arrow function with return instead of console log - save returned output to variable and console log that value
const addUp = (num1, num2) => {
    return num1 + num2;
}

let output = addUp(7,3);
console.log(output);



// Functions to convert fahrenheit to celsius - pass data from get getFahrenheit to multipleByNineFifths 
const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};
console.log("The temperature is " + getFahrenheit(15) + "°F");
// Output: The temperature is 59°F
 

// Expression - Example of anonymous function. Passes the annon function  without a name to the square variable (used to hide functionally of a certain function by not declarinf the function name i.e addNumbers)
const square = function(number) {
    return number * number;
};
square(5);
// Output: 25