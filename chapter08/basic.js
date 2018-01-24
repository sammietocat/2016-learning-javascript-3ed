const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [
  [1, 2, 3],
  ["one", 2, "three"]
];

const arr4 = [{
    name: "Fred",
    type: "object",
    //    luckyNumbers = [5, 7, 13]
  },
  [{
      name: "Susan",
      type: "object"
    },
    {
      name: "Anthony",
      type: "object"
    },
  ],
  1,
  function () {
    return "arrays can contain functions too";
  },
  "three",
];

// accessing elements
console.log(arr1[0]); // 1 
console.log(arr1[2]); // 3
console.log(arr3[1]); //[ 'one', 2, 'three' ] 
console.log(arr4[1][0]); // { name: 'Susan', type: 'object' }

// array length
console.log(arr1.length); // 3
console.log(arr4.length); // 5
console.log(arr4[1].length); // 2

// increasing array size
arr1[4] = 5;
console.log(arr1); // [ 1, 2, 3, <1 empty item>, 5 ]
console.log(arr1.length); // 5

// accessing (not assigning) an index larger than the array does *not* change the size of the array
arr2[10]; // undefined
console.log(arr2.length); // 3

// Array constructor (rarely used)
const arr5 = new Array();
const arr6 = new Array(1, 2, 3);
const arr7 = new Array(2);
const arr8 = new Array("2");

console.log(arr5); // []
console.log(arr6); // [ 1, 2, 3 ]
console.log(arr7); // [ <2 empty items> ]
console.log(arr8); // [ '2' ]