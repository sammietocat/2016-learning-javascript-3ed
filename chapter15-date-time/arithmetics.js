const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);

const msDiff = d2 - d1; // 417740400000 ms 
const daysDiff = msDiff / 1000 / 60 / 60 / 24;

console.log(msDiff); // 417744000000
console.log(daysDiff); // 4835

// date sorting thanks to arithmetics  
const dates = [];
// create some random dates
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for (let i = 0; i < 10; i++)
  dates.push(new Date(min + delta * Math.random())); // dates are random and (probably) jumbled
// we can sort them (descending):
console.log(dates.sort((a, b) => b - a));
// or ascending:
console.log(dates.sort((a, b) => a - b));