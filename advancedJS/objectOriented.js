// Object Oriented JS & Classes

// Morning warm up

const num = 10;
const str = "string";
const bool = true;

let array = ["blue" ,"red", "green", "yellow"];

array.push("red");
console.log(array);

for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

const cashMachine = (balance, amount) => {
    if(amount <= balance) {
        balance -= amount;
        return `Your withdrawal was £${amount}. Your new balance is £${balance}`;
    } else {
        return `You have insufficient funds`;
    }
}

console.log(cashMachine(100, num));


// Object JS

let rosie = {
    _name: "Rosie",
    _thirst: 50,
    _isWiggling: false,
    _isHopping: false,

    // getter method - 'Get' keyword - name is key and property is the return value. Used to protect initial data so the name is not changed from within the function 
    get name () {
        return this._name;
    },

    get drink() {
        this._thirst -= 10;
        return this._thirst;
    }

}

console.log(rosie.name);
console.log(rosie.drink);




// JS Classes

// Class to create a bunny - can be reused to create more bunnys using this Class
class Bunny {
    // Constructor used to set the new values of a new object when created 
    constructor (name){
        this._name = name;
        this._hops = 0;
    }
    get name(){
        return this._name;
    }
    get hops(){
            return this._hops;
     }
    increaseHops(){
        this._hops++;
    } 
}


// Create new bunny objects - passing in new param of rosie to be set within the constructor. Could also pass in hops etc
const rosie1 = new Bunny("Rosie");
const jim = new Bunny("Jim");

console.log(rosie1);
console.log(jim);


// Classes Activity
class Cars {

    // Constructor
    constructor (reg, hours) {
        this._registration = reg;
        this._hoursParked = hours;
        this._hoursCharge = 1.50;
    }
    get registration() {
        return this._registration;
    }
    get hours() {
        return this._hoursParked;
    }
    get charge() {
        // return this._hoursParked * this._hoursCharge;
        return this.calcCharge();   
    }

    // solution 2 - create method to calc and call within the get charge function 
    calcCharge() {
        let finalCharge = this._hoursParked * this._hoursCharge; 
        return `${this._registration}. You need to pay £${finalCharge}`;
    }

}
// create new objects 
const car1 = new Cars ("VW62 VDF", 2);
const car2 = new Cars ("AC71 DSA", 10);

console.log(car1.charge);
console.log(car2.calcCharge());




// Code along activity 

class Enemy {
    constructor (name, health) {
        this._name = name;
        this._health = health;
        this._weapons = ["sword", "bow"];
    }
    get name() {
        return this._name;
    }
    get health() {
        return this._health;
    }

    get weapons() {
        return this._weapons;
    }
    // takes param from calling the reduce health function,gets the current health from the health getter and reduces and assign the health depending on what is passe din from the reduceHealth function
    reduceHealth (amount) {
        return this._health -= amount;
    }

}

const enemy1 = new Enemy("Clarke", 1000);
console.log(enemy1.health);

console.log(enemy1.reduceHealth(100));
console.log(enemy1.reduceHealth(100));
console.log(enemy1.reduceHealth(100));



// Inheritance 

class Animal{
    constructor(name){
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
    }
    get name(){
        return this._name;
    }
    get hunger(){
        return this._hunger;
    }
    get thirst(){
        return this._thirst;
    }
    eat(){
        this._hunger--;
    } 
    drink(){
        this._thirst--;
    }
}

// bunny extends animal class - takes it name as inherited data enabling us to then change the name and then contains its own data (lovesCarrot)
class Bunny1 extends Animal {
    constructor(name, lovesCarrot){
        super(name);
        this._lovesCarrot = lovesCarrot;
    }
    get lovesCarrots(){
        return this._lovesCarrot;
    }
}
const rosie2 = new Bunny1("Rosie", true);
console.log(rosie2.lovesCarrots);
console.log(rosie2.eat());






// Activity 1 - Car park

class CarPark {

    // Constructor
    constructor (reg, hours) {
        this._registration = reg;
        this._hoursParked = hours;
        this._hoursCharge = 1.50;
    }
    get registration() {
        return this._registration;
    }
    get hours() {
        return this._hoursParked;
    }
    get charge() {
        return this._hoursParked * this._hoursCharge;
        // return this.calcCharge();   
    }

    // solution 2 - create method to calc and call within the get charge function 
    // calcCharge() {
    //     let finalCharge = this._hoursParked * this._hoursCharge; 
    //     return `${this._registration}. You need to pay £${finalCharge}`;
    // }

}

// create new objects 
const car3 = new CarPark ("VW62 VDF", 2);
const car4 = new CarPark ("AC71 DSA", 10);

console.log(car3.charge);
// console.log(car4.calcCharge());

// Sub class for staff members
class Staff extends CarPark {
    constructor(reg, hours, staffNum, credits) {
        super(reg, hours);
        this._staffNum = staffNum;
        this._credits = credits;
        this._hoursCharge = 1.50;

    }

    get staffNumber() {
        return this._staffNum;
    }

    get credits() {
        return this._credits;
    }

    reduceCredits() {
        return ` You have ${this.credits - this.charge} credits remaining`;
    }

}

const staff1 = new Staff ("VW62 VDF", 5, "122222", 25);
const staff2 = new Staff ("AC71 SAF", 5, "134567", 50);

console.log(staff1);
console.log(staff2.charge);
console.log(staff1.credits);
console.log(staff1.reduceCredits());

console.log(staff2);
console.log(staff2.charge);
console.log(staff2.credits);
console.log(staff2.reduceCredits());


// Activity 2 - Cyber Pet 






