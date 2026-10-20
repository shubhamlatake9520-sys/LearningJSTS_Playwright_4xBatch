let arr = [1,2,3];
console.log(arr);

//Add to END

arr.push(4);
console.log(arr);


//Remove from END

arr.pop();
console.log(arr);


arr.push(5,6);
console.log(arr)

//Add to Begining

arr.unshift(0);
console.log(arr);

//Remove from beginning
arr.shift();
console.log(arr);

arr.splice(2,0);
console.log(arr);



arr.splice(1,2,10,50);
console.log(arr);