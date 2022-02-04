// Node JS - Modules export/import

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

// export functions to be imported in nodeTest.js file
module.exports = {
    add,
    subtract,
    multiply
}



