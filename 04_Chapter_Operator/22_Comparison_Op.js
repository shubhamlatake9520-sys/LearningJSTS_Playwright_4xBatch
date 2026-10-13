//Comparison operators
//Comparison operators are used to compare two values and return a boolean value (true or false).

//Mostly used comparison operators:
//  ==   -> loose equality (compares value only, after type coercion)
//  ===  -> strict equality (compares value AND data type)  <-- preferred
//  !=   -> loose inequality
//  !==  -> strict inequality                              <-- preferred
//  >    -> greater than
//  <    -> less than
//  >=   -> greater than or equal to
//  <=   -> less than or equal to

//Example of comparison operators in JavaScript:
let a = 10;
let b = 5;

console.log(a > b);    // true
console.log(a < b);    // false
console.log(a >= 10);  // true
console.log(b <= 5);   // true

//Loose vs strict equality
console.log(5 == "5");   // true  -> value matches, type is ignored
console.log(5 === "5");  // false -> number vs string
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
