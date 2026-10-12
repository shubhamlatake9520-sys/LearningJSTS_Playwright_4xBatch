// defination of Undefined 
// Undefined is a primitive value in JavaScript that represents the absence of a value or an uninitialized variable.
//examples of undefined in JavaScript:

// Example 1: Variable declared but not assigned a value
let x;
console.log(x); // Output: undefined

// Example 2: Function without a return statement
function myFunction() {
  // No return statement
}       

console.log(myFunction()); // Output: undefined

// Example 3: Accessing a non-existent property of an object
let obj = {};
console.log(obj.nonExistentProperty); // Output: undefined

// Example 4: Accessing an array element that is out of bounds
let arr = [1, 2, 3];
console.log(arr[5]); // Output: undefined
