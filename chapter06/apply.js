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

update.apply(bruce, [1955, "actor"]);
// bruce is now { name: "Bruce", birthYear: 1955, // occupation: "actor" }
update.apply(madeline, [1918, "writer"]);
// madeline is now { name: "Madeline", birthYear: 1918, // occupation: "writer" }

console.log(bruce);
console.log(madeline);

const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr); // -5 
Math.max.apply(null, arr); // 15