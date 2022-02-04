// Jest Unit Testing

// import - add funtion fron nodeTest2.js
const { expect } = require("@jest/globals");
const { add, subtract, multiply, copyArr } = require("./nodeTest2");



// use the jest keyword 'test' to test the add numbers func
test("two numbers correctly add together", () => {
    expect(add(1, 2)).toBe(3);
});

test("two numbers correctly subtract", () => {
    expect(subtract(10, 5)).toBe(5);
});

test("two numbers correctly multiply", () => {
    expect(multiply(3, 5)).toBe(15);
});


// test the spread operator worked by testing not to be the same array as the array was essentially copied 
let array = ["1", "2", "3"];

test("return is a copy", () => {
    expect(copyArr(array)).not.toBe(array);
})



