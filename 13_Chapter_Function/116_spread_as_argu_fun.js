// function addition(a, b, c) {
// return a + b + c;
// }

// let num = [1, 2, 3];
// console.log(add(...num));

//--------------

function hasError(...codes) {
    return codes.some(code => code >= 400);
}

let responseCodes = [200, 201, 404, 500];
let responseCodes2 = [200, 201, 202];
console.log(hasError(...responseCodes)); // true
console.log(hasError(...responseCodes2)); // false