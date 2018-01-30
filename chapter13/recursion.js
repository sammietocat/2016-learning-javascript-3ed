function findNeedle(haystack) {
  if (haystack.length === 0) return "no haystack here!";
  if (haystack.shift() === 'needle') return "found it!"
  return findNeedle(haystack); // haystack has one fewer element
}
console.log(findNeedle(['hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'hay']));