const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];

console.log(arr.join());
// "1,,hello,,true,"

console.log(arr.join(''));
// "1hellotrue"

console.log(arr.join(' -- '));
// "1 -- -- hello -- -- true --"

const attributes = ["Nimble", "Perceptive", "Generous"];
const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
console.log(html);
// html: "<ul><li>Nimble</li><li>Perceptive</li><li>Generous</li></ul>";