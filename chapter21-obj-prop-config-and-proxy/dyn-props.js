const USER_EMAIL = Symbol();

class User {
  setEmail(value) {
    if (!/@/.test(value)) throw new Error(`invalid email: ${value}`);
    this[USER_EMAIL] = value;
  }
  getEmail() {
    return this[USER_EMAIL];
  }
}

// through set 
const u = new User();
u.setEmail("john@doe.com");
console.log(`User email: ${u.getEmail()}`);

// raw 
const u2 = new User();
u2.email = "john@doe.com";
console.log(`User2 email: ${u2.email}`);