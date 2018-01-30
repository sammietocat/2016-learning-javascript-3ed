const utils = require('./utils');

const email = null; // whoops
try {
  const validatedEmail = utils.validateEmail(email);
  if (validatedEmail instanceof Error) {
    console.error(`Error: ${validatedEmail.message}`);
  } else {
    console.log(`Valid email: ${validatedEmail}`);
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
}