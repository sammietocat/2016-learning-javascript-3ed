// wrong codes
var i;
for (i = 5; i >= 0; i--) {
  setTimeout(function () {
    console.log(i === 0 ? "go!" : i);
  }, (5 - i) * 1000);
}
// output:
// -1
// -1
// -1
// -1
// -1
// -1