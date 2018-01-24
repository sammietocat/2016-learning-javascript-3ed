const arr = [{
  id: 5,
  name: "Judith"
}, {
  id: 7,
  name: "Francis"
}];

console.log(arr.findIndex(o => o.id === 5));
// 0

console.log(arr.findIndex(o => o.name === "Francis"));
// 1

console.log(arr.findIndex(o => o === 3));
// -1

console.log(arr.findIndex(o => o.id === 17));
// -1