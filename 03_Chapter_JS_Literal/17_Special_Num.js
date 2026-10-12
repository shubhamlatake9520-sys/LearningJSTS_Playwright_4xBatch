// 5.special number literals Defination: Special number literals are specific numeric values that have unique meanings or representations in programming languages. These literals are often used to represent special cases, such as infinity, NaN (Not-a-Number), and other mathematical constants. In JavaScript, special number literals include Infinity, -Infinity, and NaN.


//Infinity: Represents positive infinity, which is a value greater than any finite number. It can be obtained by dividing a positive number by zero or by using the built-in Infinity constant.


let positiveInfinity = Infinity; // Using the built-in Infinity constant
let negativeInfinity = -Infinity; // Using the built-in -Infinity constant  
let divisionByZero = 10 / 0; // Dividing a positive number by zero results in Infinity
let negativeDivisionByZero = -10 / 0; // Dividing a negative number by zero results in -Infinity
let largeNumber = 1e309; // A number larger than the maximum representable value results in Infinity


// Printing the values of special number literals

console.log("Positive Infinity: " + positiveInfinity); 
console.log("Negative Infinity: " + negativeInfinity);
console.log("Division by Zero: " + divisionByZero); 
console.log("Negative Division by Zero: " + negativeDivisionByZero);
console.log("Large Number: " + largeNumber);