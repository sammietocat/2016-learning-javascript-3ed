const arr = [3, 1.5, 9, 2, 5.2];

/*
arr.sum = function () {
  return this.reduce((a, x) => a + x);
}
arr.avg = function () {
  return this.sum() / this.length;
}
Object.defineProperty(arr, 'sum', {
  enumerable: false
});
Object.defineProperty(arr, 'avg', {
  enumerable: false
});
*/

// equivalently 
Object.defineProperty(arr, 'sum', {
  value: function () {
    return this.reduce((a, x) => a + x);
  },
  enumerable: false
});
Object.defineProperty(arr, 'avg', {
  value: function () {
    return this.sum() / this.length;
  },
  enumerable: false
});

// equivalently [DNW]   
/*
Object.defineProperties(arr,
    sum: {
      value: function () {
        return this.reduce((a, x) => a + x);
      },
      enumerable: false
    }),
  avg: {
    value: function () {
      return this.sum() / this.length;
    },
    enumerable: false
  })
);
*/

console.log(arr);
for (const key in arr) {
  if (arr.hasOwnProperty(key)) {
    console.log(arr[key]);
  }
}