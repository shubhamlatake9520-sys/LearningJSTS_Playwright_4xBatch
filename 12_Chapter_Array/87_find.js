let nums = [10,20,30,40];
let result = nums.find(temp => temp > 20);
console.log(result);


//find index

let index = nums.findIndex(n => n > 20);
// console.log(index);

nums.findLast(n => n > 20);
// console.log(index);

nums.findLastIndex(n => n > 20);
// console.log(index);