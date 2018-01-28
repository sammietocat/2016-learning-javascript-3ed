const roles = new Set();
roles.add("User"); // Set [ "User" ]
roles.add("Admin"); // Set [ "User", "Admin" ]
console.log(roles.size); // 2

// add with no effect
roles.add("User"); // Set [ "User", "Admin" ] 
console.log(roles.size); // 2

console.log(roles.delete("Admin")); // true
console.log(roles); // Set [ "User" ] 
console.log(roles.delete("Admin")); // false