function getGreeting() {
  console.log("Hello World!");
}

// alias 
const f = getGreeting;
f();

// as object property 
const o = {};
o.f = getGreeting;
o.f();

// as array elements  
const arr = [1, 2, 3];
arr[1] = getGreeting; 
// arr is now [1, function getGreeting(), 2] 
arr[1]();