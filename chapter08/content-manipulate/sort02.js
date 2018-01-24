const arr = [{
  name: "Suzanne"
}, {
  name: "Jim"
}, {
  name: "Trevor"
}, {
  name: "Amanda"
}];

arr.sort(); // arr unchanged 
console.log(arr);

arr.sort((a, b) => a.name > b.name);
// arr sorted alphabetically by name property
console.log(arr);

arr.sort((a, b) => a.name[1] < b.name[1]);
// arr sorted reverse alphabetically 
// by second letter of name property
console.log(arr);