function f(x) {
  console.log(`inside f: x=${x}`);
  x = 5;
  console.log(`inside f: x=${x} (after assignment)`);
}
let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`);

// output:
// before calling f: x=3
// inside f: x=3
// inside f: x=5 (after assignment)
// after calling f: x=3
