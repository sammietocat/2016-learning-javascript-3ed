const input = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input.match(/^\w+/mg); // ["One", "Two", "Three", "Four"] 
const endings = input.match(/\w+$/mg); // ["line", "lines", "lines", "Four"]

console.log(beginnings);
console.log(endings);