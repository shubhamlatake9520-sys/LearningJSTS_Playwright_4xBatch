let age = "shubham"; // string literal
let age2 = 10; // single number literal 

let isstudent = true; // boolean literal

let pi = 3.14; // decimal number literal

let nullValue = null; // null literal

let undefinedValue = undefined; // undefined literal  is not zero or null but it is a variable that has not been assigned a value

// Printing the values of different literals

console.log("String literal: " + age);
console.log("Number literal: " + age2);
console.log("Boolean literal: " + isstudent);
console.log("Decimal number literal: " + pi);
console.log("Null literal: " + nullValue);
console.log("Undefined literal: " + undefinedValue);

//Printing with typeof operator to check the data type of each literal

console.log(typeof age); // string
console.log(typeof age2); // number
console.log(typeof isstudent);  // boolean
console.log(typeof pi); // number
console.log(typeof nullValue);  // null is a special value in JavaScript that represents the intentional absence of any object value. It is considered an object type, but it is not an object itself.
console.log(typeof undefinedValue); // undefined is a primitive value that represents the absence of a value or an uninitialized variable. It is considered a type itself, and it is not an object. 