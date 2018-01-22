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

const updateBruce = update.bind(bruce);
updateBruce(1904, "actor");
// bruce is now { name: "Bruce", birthYear: 1904, occupation: "actor" }
console.log(bruce);

updateBruce.call(madeline, 1274, "king");
// bruce is now { name: "Bruce", birthYear: 1274, occupation: "king" }; // madeline is unchanged

console.log(bruce);
console.log(madeline);

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
// bruce is now { name: "Bruce", birthYear: 1949,
//    occupation: "singer, songwriter" }
console.log(bruce);