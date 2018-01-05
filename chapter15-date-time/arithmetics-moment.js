const moment = require('moment-timezone')

const m = moment(); // now
m.add(3, 'days'); // m is now three days in the future
console.log(m); // moment("2018-01-08T20:56:22.857")
m.subtract(2, 'years'); // m is now two years minus three days in the past
console.log(m); // moment("2016-01-08T20:56:22.857")

const m2 = moment(); // reset
console.log(m2); // moment("2018-01-05T20:56:22.862")
m2.startOf('year'); // m is now Jan 1 of this year
console.log(m2); // moment("2018-01-01T00:00:00.000")
m2.endOf('month'); // m is now Jan 31 of this year
console.log(m2); // moment("2018-01-31T23:59:59.999") 

// chaining version
const m3 = moment().add(10, 'hours').subtract(3, 'days').endOf('month');
console.log(m3); // moment("2018-01-31T23:59:59.999")  
