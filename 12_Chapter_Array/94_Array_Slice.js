let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.slice(1, 3);
// ["banana", "cherry"]   → index 1 up to, but not including, 3

fruits.slice(2);
// ["cherry", "date", "elderberry"]   → from index 2 to end

fruits.slice(-2);
// ["date", "elderberry"]   → last 2 elements

fruits.slice(1, -1);
// ["banana", "cherry", "date"]   → drops first and last

fruits.slice();
// full copy: ["apple", "banana", "cherry", "date", "elderberry"]