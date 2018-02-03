const before = {
  d: new Date().valueOf()
};
console.log(typeof before.d);
// "number" 

const json = JSON.stringify(before);

const after = JSON.parse(json);

console.log(typeof after.d);
// "number" 

const d = new Date(after.d);
console.log(d);
// 2018-02-03T13:27:51.122Z