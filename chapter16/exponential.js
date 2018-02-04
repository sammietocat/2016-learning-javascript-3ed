const x = 3800.5;

for (let d = 4; d >= 0; --d) {
  console.log(x.toExponential(d));
}
// output:
// 3.8005e+3
// 3.801e+3
// 3.80e+3
// 3.8e+3
// 4e+3