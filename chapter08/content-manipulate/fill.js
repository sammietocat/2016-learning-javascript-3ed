const arr = new Array(5).fill(1);
// arr initialized to [1, 1, 1, 1, 1]

console.log(arr.fill("a"));
// arr is now ["a", "a", "a", "a", "a"]

console.log(arr.fill("b", 1));
// arr is now ["a", "b", "b", "b", "b"]

console.log(arr.fill("c", 2, 4));
// arr is now ["a", "b", "c", "c", "b"]

console.log(arr.fill(5.5, -4));
// arr is now ["a", 5.5, 5.5, 5.5, 5.5]

console.log(arr.fill(0, -3, -1));
// arr is now ["a", 5.5, 0, 0, 5.5]