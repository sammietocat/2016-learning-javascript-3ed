exports.validateEmail = function (email) {
  return email.match(/@/) ? email : new Error(`invalid email: ${email}`);
}