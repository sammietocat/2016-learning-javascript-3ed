const arr = ["b", "c", "d"];

console.log(arr.push("e"));
// returns 4; i.e., the length of the updated array 
console.log(arr);
// arr is now ["b", "c", "d", "e"]

console.log(arr.pop());
// returns "e"; 
console.log(arr);
// arr is now ["b", "c", "d"]

console.log(arr.unshift("a"));
// returns 4; 
console.log(arr);
// arr is now ["a", "b", "c", "d"]

console.log(arr.shift());
// returns "a"; 
console.log(arr);
// arr is now ["b", "c", "d"]