let tests = ["login","Checkout","Search"];
for (let i = 0; i < tests.length; i++) {
     console.log(i, tests[i]);
}

console.log("_________________");

for (let test of tests){
      console.log(test);//value
}
console.log("_________________");

console.log("_____for_Each_below___________");

tests.forEach((test, index) => {
    console.log(`${index}:${test}`);
});


console.log("____________");

for (let[i, test]of tests.entries()) {
  console.log(i, test);
  
}

let students = ["methis, shubham, yug , komal"];
for (let student in students) {

    console.log(student, " => ", students[student]);
}