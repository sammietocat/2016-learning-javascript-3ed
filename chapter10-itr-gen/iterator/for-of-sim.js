// should run this script by command:
// node --harmony_array_prototype_values basics.js
const book = [
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!",
  "Up above the world you fly,",
  "Like a tea tray in the sky.",
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!",
];
// console.log(book instanceof Array);
const it = book.values();

let current = it.next();
while (!current.done) {
  console.log(current.value);
  current = it.next();
}

// original for..of
/*
for (const i of book) {
  console.log(i); 
}
*/