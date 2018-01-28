const u1 = {
  name: 'Cynthia'
};
const u2 = {
  name: 'Jackson'
};
const u3 = {
  name: 'Olive'
};

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

console.log(userRoles);