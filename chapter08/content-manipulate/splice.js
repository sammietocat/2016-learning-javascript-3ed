const arr = [1, 5, 7];

console.log(arr.splice(1, 0, 2, 3, 4));
// returns []; 
console.log(arr);
// arr is now [1, 2, 3, 4, 5, 7]

console.log(arr.splice(5, 0, 6));
// returns []; 
console.log(arr);
// arr is now [1, 2, 3, 4, 5, 6, 7]

console.log(arr.splice(1, 2));
// returns [2, 3]; 
console.log(arr);
// arr is now [1, 4, 5, 6, 7]

console.log(arr.splice(2, 1, 'a', 'b'));
// returns [5]; 
console.log(arr);
// arr is now [1, 4, 'a', 'b', 6, 7]