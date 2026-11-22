// var is actually traitor  
var a = 10; 
console.log(a); // 10

// function is hoisted to the top of the scope, so it can be called before it is defined
function printHello() {
    console.log("Hello");

    // constant is block scoped, so it cannot be accessed before it is defined
var a = 20;
console.log(a); // 20   
if (true) {
    const a = 30;
    console.log(a); // 30
}
console.log(a); // ReferenceError: a is not defined

}

printHello();