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

console.log(userRoles.keys());
// MapIterator { { name: 'Cynthia' }, { name: 'Jackson' }, { name: 'Olive' } }

console.log(userRoles.values());
// MapIterator { 'User', 'User', 'Admin' }