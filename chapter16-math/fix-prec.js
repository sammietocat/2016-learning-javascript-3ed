let x = 1000;
for (let d = 5; d >= 1; --d) {
  console.log(x.toPrecision(d));
}
// output:
// 1000.0
// 1000
// 1.00e+3
// 1.0e+3
// 1e+3

x = 15.335;
for (let d = 6; d >= 1; --d) {
  console.log(x.toPrecision(d));
}
// output:
// 15.3350
// 15.335
// 15.34
// 15.3
// 15
// 2e+1