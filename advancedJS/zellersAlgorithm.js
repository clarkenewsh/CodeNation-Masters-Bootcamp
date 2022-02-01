let day = 29;
let month = 3;
let year = 1992;

let f;
let l;
let s;
let x;

if(month < 3 ) {
    month = month + 12;
    year = year - 1;
} 

f = Math.floor(year / 100);
l = year - 100 * f;

s = Math.floor(2.6 * month - 5.39) + Math.floor(l / 4) + Math.floor(f / 4) + day + l - (2 * f);

x = s - (7 * Math.floor(s / 7));

// return x;

console.log(x);