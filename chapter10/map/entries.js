'use strict';

const u1 = {
  name: 'Cynthia'
};
const u2 = {
  name: 'Jackson'
};
const u3 = {
  name: 'Olive'
};

//const userRoles = new Map();
const userRoles = new Map([
  [u1, 'User'],
  [u2, 'User'],
  [u3, 'Admin'],
]);

for (let e of userRoles.entries()) {
  console.log(`${e[0].name} -> ${e[1]}`);
}
// output
// Cynthia -> User
// Jackson -> User
// Olive -> Admin

// note that we can use destructuring to make // this iteration even more natural:
for (let [u, r] of userRoles.entries()) {
  console.log(`${u.name}: ${r}`);
}
// output
// Cynthia: User
// Jackson: User
// Olive: Admin

// the entries() method is the default iterator for // a Map, so you can shorten the previous example to: 
for (let [u, r] of userRoles) {
  console.log(`${u.name}: ${r}`);
}
// output
// Cynthia: User
// Jackson: User
// Olive: Admin