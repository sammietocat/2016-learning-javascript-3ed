const input = "As I was going to Saint Ives";
const re = /\w{3,}/ig;

// starting with the string (input)
console.log(input.match(re)); // ["was", "going", "Saint", "Ives"] 
console.log(input.search(re)); // 5 (the first three-letter word starts at index 5)

// starting with the regex (re)
console.log(re.test(input));
// true (input contains at least one three-letter word)
console.log(re.exec(input));
// ["going"] (exec "remembers" where it is)
console.log(re.exec(input));
// ["Saint"]
console.log(re.exec(input));
// ["Ives"]
console.log(re.exec(input));
// null 
console.log(re.exec(input));
// [ 'was', index: 5, input: 'As I was going to Saint Ives' ]

// note that any of these methods can be used directly with a regex literal
console.log(input.match(/\w{3,}/ig));
// [ 'was', 'going', 'Saint', 'Ives' ]
console.log(input.search(/\w{3,}/ig));
// 5
console.log(/\w{3,}/ig.test(input));
// true
console.log(/\w{3,}/ig.exec(input));
// [ 'was', index: 5, input: 'As I was going to Saint Ives' ]