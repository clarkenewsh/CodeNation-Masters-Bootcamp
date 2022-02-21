// console.log(process.argv[2]);

// const app = (args) => {
//     switch (args[2]) {
//         case "clarke":
//             console.log("you types clarke");
//             break;
//         case "gary":
//             console.log("you types gary");
//             break;
//         default:
//             console.log("thats not clarke or gary");
//             break;
//     }
// }

// app(process.argv)

// import the index.js file with the class declaration - dont need to specify as index.js is what javascript looks for first
const Movie = require("./utils");

// take user inputted movie, add to array and console.log that array
const app = (args) => {
    switch (args[2]) {
        case "add":
            const movie = new Movie(args[3], args[4]);
            console.log(movie.add());
            // take user inputted movie, add to array and console.log that array
            break;

        case "add multi":
            const movie1 = new Movie(args[5], args[6]);
            const movie2 = new Movie(args[7], args[8]);
            console.log(movie1.add());
            console.log(movie2.add());
            break;
        default:
            console.log("Incorrect input");
            break;
    }
};

// call the function with args - process.arg returns an array containing the command-line arguments passed 
app(process.argv);