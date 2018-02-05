const input = "One two three";
let out = input.replace(/two/, '($`)'); // "One (One ) three" 
console.log(out);

out = input.replace(/two/, "($')"); // "One ( three) three" 
console.log(out);

out = input.replace(/\w+/g, '($&)'); // "(One) (two) (three)"
console.log(out);

out = input.replace(/two/, "($$)"); // "One ($) three"
console.log(out);