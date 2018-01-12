'use strict';

const coefficients = {
  a: 1,
  b: 2,
  c: 5,
};

function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}

// good coefficients 
console.log(evaluate(5, coefficients));
// 136

const coeff_bad = {
  a: 1,
  c: 3,
}

// bad coefficients 
console.log(evaluate(5, coeff_bad));
// NaN

const betterCoefficients = new Proxy(coeff_bad, {
  get(target, key) {
    return target[key] || 0;
  },
});

console.log(betterCoefficients.a);
// 1
console.log(betterCoefficients.b);
// 0
console.log(betterCoefficients.c);
// 3
console.log(betterCoefficients.d);
// 0
console.log(betterCoefficients.anything);
// 0