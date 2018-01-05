const moment = require('moment-timezone');

console.log(moment().subtract(10, 'seconds').fromNow()); // a few seconds ago
console.log(moment().subtract(44, 'seconds').fromNow()); // a few seconds ago
console.log(moment().subtract(45, 'seconds').fromNow()); // a minute ago
console.log(moment().subtract(5, 'minutes').fromNow()); // 5 minutes ago
console.log(moment().subtract(44, 'minutes').fromNow()); // 44 minutes ago
console.log(moment().subtract(45, 'minutes').fromNow()); // an hour ago
console.log(moment().subtract(5, 'hours').fromNow()); // 4 hours ago
console.log(moment().subtract(21, 'hours').fromNow()); // 21 hours ago
console.log(moment().subtract(22, 'hours').fromNow()); // a day ago
console.log(moment().subtract(344, 'days').fromNow()); // 344 days ago
console.log(moment().subtract(345, 'days').fromNow()); // a year ago