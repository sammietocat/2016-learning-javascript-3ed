const input = "It was the best of times, it was the worst of times";
const beginning = input.match(/^\w+/g); // "It"
const end = input.match(/\w+$/g); // "times"
const everything = input.match(/^.*$/g); // sames as input
const nomatch1 = input.match(/^best/ig);
const nomatch2 = input.match(/worst$/ig);

console.log(beginning);
// [ 'It' ]
console.log(end);
// [ 'times' ]
console.log(everything);
// [ 'It was the best of times, it was the worst of times' ]
console.log(nomatch1);
// null
console.log(nomatch2);
//null