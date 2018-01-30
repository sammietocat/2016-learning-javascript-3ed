function sum(arr, f) {
  // if no function is supplied, use a "null function" that 
  // simply returns its argument unmodified
  if (typeof f != 'function') {
    f = x => x;
  }
  return arr.reduce((a, x) => a += f(x), 0);
}
console.log(sum([1, 2, 3])); // returns 6
console.log(sum([1, 2, 3], x => x * x)); // returns 14
console.log(sum([1, 2, 3], x => Math.pow(x, 3))); // returns 36