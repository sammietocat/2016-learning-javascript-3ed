const bruce = {
  name: "Bruce"
};
const madeline = {
  name: "Madeline"
};
// this function isn't associated with any object, yet // it's using 'this'!
function greet() {
  //return `Hello, I'm ${this.name}!`;
  console.log(`Hello, I'm ${this.name}!`);
}
greet(); // "Hello, I'm undefined!" - 'this' not bound
greet.call(bruce); // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
greet.call(madeline); // "Hello, I'm Madeline!" - 'this' bound to 'madeline'

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
update.call(bruce, 1949, 'singer');
// bruce is now { name: "Bruce", birthYear: 1949, // occupation: "singer" }
update.call(madeline, 1942, 'actress');
// madeline is now { name: "Madeline", birthYear: 1942, // occupation: "actress" }

console.log(bruce);
console.log(madeline);