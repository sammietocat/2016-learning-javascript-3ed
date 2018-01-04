const arr = [1, 2, 3, 4];

arr.copyWithin(1, 2); // arr is now [1, 3, 4, 4]
console.log(arr);

// 1 3 3 4
// 0->2: 1 2 1 4
// 1->3: 1 3 1 3 
arr.copyWithin(2, 0, 2); // arr is now [1, 3, 1, 3]
console.log(arr);

// 1 3 1 3
// -3->0: 3 3 1 3
// -2->1: 3 1 1 3
arr.copyWithin(0, -3, -1); // arr is now [3, 1, 1, 3]
console.log(arr);