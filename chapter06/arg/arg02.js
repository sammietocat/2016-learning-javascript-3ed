function f(o) {
  o.message = `set in f (previous value: '${o.message}')`;
}
let o = {
  message: "initial value"
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);

// output:
// before calling f: o.message="initial value"
// after calling f: o.message="set in f (previous value: 'initial value')"