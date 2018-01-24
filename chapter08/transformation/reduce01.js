const arr = [5, 7, 2, 4];

console.log(arr.reduce((a, x) => a += x, 0));
// 18
// equivently 
console.log(arr.reduce((a, x) => a += x));