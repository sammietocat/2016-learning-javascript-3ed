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
]);

console.log(userRoles.has(u1));
// true

console.log(userRoles.has(u3));
// false