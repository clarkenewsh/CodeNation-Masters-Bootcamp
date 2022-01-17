const grade = 86;

// Switch statement
switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}

console.log(grade);

// If statement of same logic
if (grade >= 70) {
    console.log("Distinction");
} else if (grade >= 60) {
    console.log("Merit");
} else if (grade >= 50) {
    console.log("Pass");
} else {
    console.log("Failed");
}

console.log(grade);

// Activity

let age = 17;

if (age > 17) {
    console.log("Yes I can serve you");
} 
else if (age <= 17) {
    console.log("You aren't old enough");
} 
else {
    console.log("Cant verify your age");
}
console.log(age);


// Switch 
switch (true) {
    case age > 17:
        console.log("Yes I can serve you");
        break;
    case age <= 17:
        console.log("You aren't old enough");
        break;
    default:
        console.log("Can't verify your age");
}



// Challenges 

// Challenge 1 
let password = "pass";

if (password.length < 8) {
    console.log("Password is to short");
} else {
    console.log(password);
}

// Challenge 2
let num = 4;

if (num % 3 == 0 || num % 5 == 0) {
    console.log("This number is divisible by 3 or 5");
} else {
    console.log("This number is not divisible by 3 or 5");
}

// switch option
switch (true) {
    case num % 3 == 0:
        console.log("This number is divisible by 3 or 5");
        break;
    case num % 5 == 0:
        console.log("This number is divisible by 3 or 5");
        break;
    default:
        console.log("This number is not divisible by 3 or 5");
}

// Challenge 3
let fizNum = 5;

if (num % 3 == 0) {
    console.log("fizz");
} else if (fizNum % 5 == 0) {
    console.log("buzz");
} else if (fizNum % 3 == 0 && fizNum % 5 == 0) {
    console.log("fizz buzz");
} else {
    console.log(fizNum);
}


// Challenge 4
let num7 = 1002;
let num7str = num7.toString();
let numRev = num7str.split('').reverse().join('');

switch (true){
    case num7str == numRev:
        console.log(`${num7str} is palindrome`);
        break;
    default:
        console.log("Number Is not palindrome");
}


// Challenge 5
let time = 6;
let placeOfWork = "work";
let townOfHome = "home";

if(time == 7) {
    console.log(`I am at ${townOfHome} at ${time}`);
} else if (time == 8) {
    console.log(`I am commuting at ${time}`);
} else if (time == 9){
    console.log(`I am at ${placeOfWork} at ${time}`);
} else {
    console.log(`I am not commuting, at home or at work at ${time}`);
}


// // Challenge 6 - To continue
let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

let vowels = ["a", "e", "i", "o", "u"];
let highVowel = 0;
let vowelCount = 0

let splitString = string.split("");
console.log(splitString);

splitString.forEach((letter) => {
    if(letter = string.lastIndexOf(vowels[letter])) {
        // highVowel = letter;
        console.log(highVowel);
    }
    // console.log(highVowel);
})

// for (let ; i < string.length; i++){
    // if(string)
//     console.log(lastIndexOf(string[i]));
// }

// example solution
// let selectVowel = 0
// let vowelCount = 0
// let highVowel = 0


// for (selectVowel; selectVowel < 5; selectVowel++)
// {
//     vowelIndex = longStr.lastIndexOf(vowels[selectVowel])

//     if (vowelIndex > highIndex)
//     {
//         highIndex = vowelIndex
//     }
// }
// console.log(highIndex)


// Challenge 7 
let word = "example";
// Get charter at 0 index and get word length -1 to grab last character and check
if (word.charAt(0) == word.charAt(word.length -1)) {
    return console.log("true");
} else {
    return console.log("false")
}


// // // Challenge 8
let num1 = 4;
let num2 = 4;

if (num1 + num2 % 2 == 0) {
    console.log(num1 + num2);
} else {
    console.log(num1 * num2);
}