// prototype: new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
// **all of the below are interpreted with respect to local time**
// I'm in UTC/GMT+08:00

console.log(new Date()); // current date

// note that months are zero-based in JavaScript: 0=Jan, 1=Feb, etc.
console.log(new Date(2015, 0)); // 2014-12-31T16:00:00.000Z
console.log(new Date(2015, 1)); // 2015-01-31T16:00:00.000Z
console.log(new Date(2015, 1, 14)); // 2015-02-13T16:00:00.000Z
console.log(new Date(2015, 1, 14, 13)); // 2015-02-14T05:00:00.000Z
console.log(new Date(2015, 1, 14, 13, 30)); // 2015-02-14T05:30:00.000Z 
console.log(new Date(2015, 1, 14, 13, 30, 5)); // 2015-02-14T05:30:05.000Z
console.log(new Date(2015, 1, 14, 13, 30, 5, 500)); //2015-02-14T05:30:05.500Z 

console.log(new Date(0)); // 1970-01-01T00:00:00.000Z
console.log(new Date(1000)); // 1970-01-01T00:00:01.000Z
console.log(new Date(1463443200000)); // 2016-05-17T00:00:00.000Z

// use negative dates to get dates prior to the Unix Epoch
console.log(new Date(-365 * 24 * 60 * 60 * 1000)); // 1969-01-01T00:00:00.000Z
// parsing date strings (defaults to local time) 
console.log(new Date('June 14, 1903')); // 1903-06-13T16:00:00.000Z
console.log(new Date('June 14, 1903 GMT-0000')); //1903-06-14T00:00:00.000Z