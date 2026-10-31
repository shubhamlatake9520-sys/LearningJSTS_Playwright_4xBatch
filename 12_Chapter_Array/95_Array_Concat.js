let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = arr1.concat(arr2);
console.log(combined);
// [1, 2, 3, 4, 5, 6]



let combined1 = [...arr1, 100, ...arr2];
console.log(combined1);
// [1, 2, 3, 100, 4, 5, 6]