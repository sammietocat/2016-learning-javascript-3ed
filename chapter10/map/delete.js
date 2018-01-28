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

console.log(userRoles);
// output
//Map {
//  { name: 'Cynthia' } => 'User',
//  { name: 'Jackson' } => 'User',
//  { name: 'Olive' } => 'Admin' }

userRoles.delete(u2);

console.log(userRoles);
// output
// Map { { name: 'Cynthia' } => 'User', { name: 'Olive' } => 'Admin' }