const arr = [{
  id: 5,
  name: "Judith"
}, {
  id: 7,
  name: "Francis"
}];

console.log(arr.find(o => o.id === 5)); // returns object { id: 5, name: "Judith" } 
console.log(arr.find(o => o.id === 2)); // returns null