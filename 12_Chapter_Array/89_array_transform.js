let scores =[45,82,71,96];

let grades = scores.map(i => i >= 70 ? "Pass" : "Fail");
console.log(grades);

//filter

let passing = scores.filter( s => s >= 70);
console.log(passing);
