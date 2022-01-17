// Function recap refresher activity
const power = (num1, num2) => {
    return Math.pow(num1, num2);
}

console.log(power(2, 4))
// or
// let output = power(2, 4);
// console.log(output);

// Function Expression version - anonymous  func
const power2 = function (num1, num2) {
    return Math.pow(num1, num2);
}

console.log(power2(2, 4));

// Arrays

let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatevers's new"
];

console.log(coffeeOrder);
//access array index 2
console.log(coffeeOrder[2]);

// Change array index 1
coffeeOrder[1] = "Ann - Vanilla Latte";
console.log(coffeeOrder);

// check arr length
console.log(coffeeOrder.length);

// Push on to array
coffeeOrder.push("Clarke - espresso");
console.log(coffeeOrder);

// Pop last item of the array
coffeeOrder.pop();
console.log(coffeeOrder);




// Array Activities

// Activity 1 - push/pop
let favWebsites = ["Twitch", "Netflix", "YouTube"];

favWebsites.push("Space X", "Discord");
favWebsites.pop();
console.log(favWebsites);

// Activity 2

// map - callback function once for each element in an array of objects to create new array 
const cars = [
    {
        make: "Ford",
        model: "Mustang",
        engine: "v6"
    },
    {
        make: "Mercedes",
        model: "C Class",
        engine: "2 litre"
    },
    {
        make: "BMW",
        model: "X4",
        engine: "4 litre"
    },
    {
        make: "Tesla",
        model: "Model 3",
        engine: "Electric"
    }
];

const carMap = cars.map(function(car) {
    return console.log(car.make);
});
    

// shift - remove 1st array item
const nflTeams1 = ["Buccaneers", "bengals", "patriots", "raiders", "broncos", "titans", "saints", "vikings", "chargers"];

let first = nflTeams1.shift();
console.log(nflTeams1);

// unShift - Add item to beginning of array
const nflTeams2 = ["bengals", "patriots", "raiders", "broncos", "titans", "saints", "vikings", "chargers"];
let addFirst = nflTeams2.unshift("Buccaneers");
console.log(nflTeams2);

// slice  


// splice - remove arr item by index
const nflTeams4 = ["bengals", "patriots", "raiders", "broncos", "titans", "saints", "vikings", "chargers"];
console.log(nflTeams4.slice(3));

// foreach - callback func
nflTeams4.forEach(function(team) {
    return console.log(team.toUpperCase());
});
// for each callback arrow func
nflTeams4.forEach((team) => {
    return console.log(team.toUpperCase());
});

// filter - new filtered array
const nflTeams5 = ["Buccaneers", "bengals", "patriots", "raiders", "broncos", "titans", "saints", "vikings", "chargers"];
const result = nflTeams5.filter(word => word.length > 7);
console.log(result);


// Extra Function & array activity activity

// function
let topping1 = "falafel";
let topping2 = "Lettuce";
let topping3 = "Mayo";

const buildSandwich = (topping1, topping2, topping3) => {
    return console.log(`My sandwich order: ${topping1}, ${topping2}, ${topping3}`);
}

buildSandwich(topping1, topping2, topping3);


// array
let arr = ["10, 20, 30"];

console.log(arr.unshift("100"));