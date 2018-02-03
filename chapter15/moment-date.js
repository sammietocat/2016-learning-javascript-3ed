const moment = require('moment-timezone');

const d = new Date(Date.UTC(2018, 0, 5));
console.log(d);
// 2018-01-05T00:00:00.000Z

// passing an array to Moment.js uses the same parameters as JavaScript's Date 
// constructor, including zero-based months (0=Jan, 1=Feb, etc.). 
// toDate() converts back to a JavaScript Date object.
const d2 = moment.tz([2018, 0, 5, 20, 12], 'Asia/Shanghai').toDate();
console.log(d2);
// 2018-01-05T12:12:00.000Z