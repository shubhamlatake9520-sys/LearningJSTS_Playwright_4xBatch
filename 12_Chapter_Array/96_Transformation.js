//Map and filters 
let scores = [45, 82, 71, 96];

let grades = scores.map(s => (s >= 70 ? "Pass" : "Fail"));
console.log(grades);
// ["Fail", "Pass", "Pass", "Pass"]

// console.log(scores);
// // [45, 82, 71, 96]   → original untouched