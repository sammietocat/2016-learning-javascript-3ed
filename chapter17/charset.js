const beer99 = "99 bottles of beer on the wall " + "take 1 down and pass it around -- " +
"98 bottles of beer on the wall.";

// v1
const matches1 = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
// v2
const matches2 = beer99.match(/[0123456789]/g);
// v3
const matches3 = beer99.match(/[0-9]/g);

// v4
const matches4 = beer99.match(/[\-0-9a-z.]/ig);

console.log(matches1);
console.log(matches2);
console.log(matches3);
console.log(matches4);