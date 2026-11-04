function greet(name) {
    return `Hello, ${name}!`;        // ${} embeds a value
}

const greet1 = function(name){
    return `Hello, ${name}!`;  

}

//arrow function

const greet2 = (name2) => `Hello, ${name2}`;

console.log(greet("Shubham"));
console.log(greet1("Shubham"));
console.log(greet2("Shubham"));


