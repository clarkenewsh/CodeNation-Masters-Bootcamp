// Function Warm Up Task 
let drinks = ["coke", "coffee", "green tea", "water"];

// output drinks list
const drinksAvailable = (drinks) => {
    for(let i = 0; i < drinks.length; i++){
        console.log(drinks[i]);
    } 
}

drinksAvailable(drinks);

let balance = 10;

let drinksList = [
    {
        drink: 'cola',
        price: 2,
    },
    {
        drink: 'coffee',
        price: 2,
    }
]

// cost of balance should call the drinks order if true
const checkBalance = () => {
    console.log(`Your balance is £${balance}`);
    for(i = 0; i < drinksList.length; i++){
        console.log(drinksList[i]);
    }
}
checkBalance();

// const drinksOrder = (choice) = {
//     if(balance >= drinksList.price)
// }

// drinksOrder(drinksList);


// Objects 

// Object Literals 
const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    specialOffer: true,
    drinks: [
        "cola",
        "Latte",
        "Water"
    ]
};

console.log(cafe.seatingCapacity);


// Object Activity

const person = {
    firstName: "Clarke",
    lastName: "Newsham",
    age: 29,
    looks: {
        eyeColour: "Blue",
        hairColour: "Brown",
        array: ["1", "2", "3"]
    }
}
// Access object key value pairs
console.log(person.looks.array[1]);
console.log(`Hey, Im ${person.firstName}, and I am ${person.age}.`);
// Another method to access object key vale
console.log(person["firstName"]);
//adding new values ones 
person.addKey = "new key";
console.log(person.addKey);




// Object with logic to do something 
let offer = "none";
let time = 1200;
const cafe1 = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot chocolate"
],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no offer"
};

// decide if offer is available or not
if(time < 1100) {
    offer = cafe1.breakfastOffer;
    console.log(cafe1.breakfastOffer);
} else if(time < 1500) {
    offer = cafe1.lunchOffer;
    console.log(cafe1.lunchOffer);
}


// Activity - Alarm clock
let day = "saturday";
let alarm = "";

const alarmClock = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
};

const activateAlarm = () => {
    if(day == "saturday" || day == "sunday") {
        alarm = alarmClock.weekendAlarm;
    } else {
        alarm = alarmClock.weekdayAlarm;
    }
};

activateAlarm(day);
console.log(alarm);

// Functions with objects also called methods - _firstName naming convention so the method can be named 'firstName' to get the first name 
const person1 = {
    _firstName: "Clarke1",
    lastName: "Newsham",
    age: 29,
    looks: {
        eyeColour: "Blue",
        hairColour: "Brown",
        array: ["1", "2", "3"]
    },
    //using 'this' keyword to get the first name from this object. cant use arrow function on this keyword as it doesnt pass the this keyword to the object. It only reaches the window object
    firstName: function() {
        return this._firstName;
    }
};

console.log(person1.firstName());

// Object with method 'myFunc' & activity to add songs arrays to obeject
const person2 = {
    firstName: "Clarke",
    lastName: "Newsham",
    age: 29,
    looks: {
        eyeColour: "Blue",
        hairColour: "Brown",
        array: ["1", "2", "3"]
    },
    //using 'this' keyword to get the first name from this object
    myFunc: (num1, num2) => {
        return num1 + num2;
    }
};
// pass in numbers as params 
console.log(person2.myFunc(9,5));

person2.addSongs = ["xx - I dont blame you", "Ben Howard - Patience", "Bon Iver - Circles"];
console.log(person2.addSongs);


// ES6 Object function declaration
const cafe2 = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot chocolate"
],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no offer",
    // ES6 method to declare object method
    openCafe(){
        if(this.hasSpecialOffers) {
            return "Time for  a special offer"
        }
    },
    closeCafe() {
        return "We are closed, come back tomorrow"
    }
};

console.log(cafe2.openCafe());


const pet =  {
    name: "Gwen",
    typeOfPet: "Border Collie",
    age: 3,
    colour: "black & white",
    isEating: true,
    isDrinking: true,
    eat() {
        if(this.isEating) {
            return `${this.name} is eating`;
        }
    },
    drink() {
        if(this.isDrinking) {
            return `${this.name} is drinking`;
        }
    }
};

console.log(pet.eat());
console.log(pet.drink());


