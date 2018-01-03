const bruce = {
  name: "Bruce"
};
const madeline = {
  name: "Madeline"
};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

const newBruce = [1955, "actor"];
const newMadeline = [1918, "writer"];
update.call(bruce, ...newBruce);
// bruce is now { name: "Bruce", birthYear: 1955, // occupation: "actor" }
update.call(madeline, ...newMadeline);
// madeline is now { name: "Madeline", birthYear: 1918, // occupation: "writer" }

console.log(bruce);
console.log(madeline);

const arr = [2, 3, -5, 15, 7];
console.log(Math.min(...arr)); // -5 
console.log(Math.max(...arr)); // 15