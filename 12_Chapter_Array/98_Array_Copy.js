let original = [1,2,3];
let copy1 = [...original]
console.log(original);
console.log(copy1);

let copy2 = original.slice();
copy2.push(92);
copy1.push(93);
console.log(original);
console.log(copy1);

//Deep copy aaray

let original1 = [1, 2, [3, 4]];
let deep = structuredClone(original1);

deep[2].push(99);
console.log(original1); // [1, 2, [3, 4]] — unchanged
console.log(deep);     // [1, 2, [3, 4, 99]]
