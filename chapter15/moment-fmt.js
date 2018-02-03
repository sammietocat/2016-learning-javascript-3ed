const moment = require('moment');

const d = new Date(Date.UTC(1930, 4, 10));
// these show output for someone in Asia/Shanghai 
console.log(d.toLocaleDateString()); // "1930-5-10"

console.log(d.toLocaleTimeString()); // 08:00:00
console.log(d.toTimeString()); // 08:00:00 GMT+0800 (CST)
console.log(d.toUTCString()); // Sat, 10 May 1930 00:00:00 GMT

console.log(moment(d).format("YYYY-MM-DD")); // 1930-05-10
console.log(moment(d).format("YYYY-MM-DD HH:mm")); // 1930-05-10 08:00
console.log(moment(d).format("YYYY-MM-DD HH:mm Z")); // 1930-05-10 08:00 +08:00
console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z")); // 1930-05-10 08:00 UTC+08:00

console.log(moment(d).format("dddd, MMMM [the] Do, YYYY")); // Saturday, May the 10th, 1930

console.log(moment(d).format("h:mm a")); // 8:00 am