'use strict';

const userRoles = new Map();
/*
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');
*/

// chainable version of set
userRoles
  .set(u1, 'User')
  .set(u2, 'User')
  .set(u3, 'Admin');

// array version of map construction
/*
const userRoles = new Map([
  [u1, 'User'],
  [u2, 'User'],
  [u3, 'Admin'],
]);
*/

console.log(userRoles.get(u2)); // "User"

console.log(userRoles.has(u1)); // true
console.log(userRoles.get(u1)); // "User"
console.log(userRoles.has(u4)); // false
console.log(userRoles.get(u4)); // undefined

console.log(userRoles.get(u1)); // 'User' 

userRoles.set(u1, 'Admin');
console.log(userRoles.get(u1)); // 'Admin'

console.log(userRoles.size); // 3

for (let u of userRoles.keys()) {
  console.log(u.name);
}
for (let r of userRoles.values()) {
  console.log(r);
}
for (let ur of userRoles.entries()) {
  console.log(`${ur[0].name}: ${ur[1]}`);
}

// note that we can use destructuring to make // this iteration even more natural:
for (let [u, r] of userRoles.entries())
  console.log(`${u.name}: ${r}`);
// the entries() method is the default iterator for // a Map, so you can shorten the previous example to: 
for (let [u, r] of userRoles) {
  console.log(`${u.name}: ${r}`);
}

// delete entries
console.log(userRoles.size); // 3
userRoles.delete(u2);
console.log(userRoles.size); // 2

userRoles.clear();
console.log(userRoles.size); // 0