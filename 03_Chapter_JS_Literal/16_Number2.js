//3.Numeric separator example

let a = 1_000_000;
let b = 1_000_000.123_456;

console.log(a); // Output: 1000000
console.log(b); // Output: 1000000.123456


let million = 1_000_000; // Using numeric separator for better readability
let billion = 1_000_000_000; // Using numeric separator for better readability  
let binarysep = 0b1010_1010; // Using numeric separator in binary literal
let hexsep = 0xFF_FF_FF; // Using numeric separator in hexadecimal literal

//Printing the values of different number literals with numeric separators

console.log("Million: " + million);
console.log("Billion: " + billion);
console.log("Binary with separator: " + binarysep);
console.log("Hexadecimal with separator: " + hexsep);


//4.BIGint literals defination
// BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive. 
//BigInt literals are created by appending 'n' to the end of an integer value.


let big = 1234567890123456789012345678901234567890n;
let big2 = 9876543210987654321098765432109876543210n;

console.log("Big Integer1: " + big);
console.log("Big Integer2: " + big2);


