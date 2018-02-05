const input = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
const match = input.match(/\d{5}.*/);

console.log(match);

const equation = "(2 + 3.5) * 7";
const match2 = equation.match(/\(\d \+ \d\.\d\) \* \d/);

console.log(match2);