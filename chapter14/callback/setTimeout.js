console.log("Before timeout: " + new Date());

function f() {
  console.log("After timeout: " + new Date());
}
setTimeout(f, 3000); // one minute 
// setTimeout using anonymous function
setTimeout(() => {
  console.log("After timeout: " + new Date());
}, 6 * 1000);
console.log("I happen after setTimeout!");
console.log("Me too!");