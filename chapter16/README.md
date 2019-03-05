# Chapter 16. Math

## Formatting Numbers

Conversion to

- A fixed number of decimal digits (see [`fix-digits.js`](fix-digits.js))
- Exponential notation (see [`exponential.js`](exponential.js))
- Fixed precision (see [`fix-prec.js`](fix-prec.js))
- Base 2,4,8,10,16 (see [`base-conv.js`](base-conv.js))
- Advanced Number Formatting by [`Numeral.js`](https://github.com/adamwdraper/Numeral-js)

> **Tip**: Only format numbers immediately before displaying them

## Algebraic Functions

### Exponentiation

The basic one is `Math.pow()`

|                 Function | Description                |
| -----------------------: | :------------------------- |
|         `Math.pow(x, y)` | `x^y`                      |
|           `Math.sqrt(x)` | square root of `x`         |
|           `Math.cbrt(x)` | cube root of `x`           |
|            `Math.exp(x)` | `e^y`                      |
|          `Math.expm1(x)` | `e^x−1`                    |
| `Math.hypot(x1, x2,...)` | `Math.sqrt(x1^2+x2^2+...)` |

### Logarithmic Functions

|        Function | Description                  |
| --------------: | :--------------------------- |
|   `Math.log(x)` | Natural logarithm of `x`     |
| `Math.log10(x)` | Base 10 logarithm of `x`     |
|  `Math.log2(x)` | Base 2 logarithm of `x`      |
| `Math.log1p(x)` | Natural logarithm of `1 + x` |

### Miscellaneous

|               Function | Description                                                 |
| ---------------------: | :---------------------------------------------------------- |
|          `Math.abs(x)` | absolute value of `x`                                       |
|         `Math.sign(x)` | the sign of `x`: -1 for negatives, 0 for 0, 1 for positives |
|         `Math.ceil(x)` | the smallest integer greater than or equal to `x`           |
|        `Math.floor(x)` | the largest integer less than or equal to `x`               |
|        `Math.trunc(x)` | the integral part of `x` (all fractional digits removed)    |
|        `Math.round(x)` | `x` rounded to the nearest integer                          |
| `Math.min(x1, x2,...)` | returns the minimum argument                                |
| `Math.max(x1, x2,...)` | returns the maximum argument                                |

### Pseudorandom Number Generation

- Implemented as `Math.random()` returning a pseudorandom number in `[0,1)`
- Pseudorandom number generation for different ranges

  |               Range | Example                               |
  | ------------------: | :------------------------------------ |
  |            `[0, 1)` | `Math.random()`                       |
  |            `[x, y)` | `x + (y-x)*Math.random()`             |
  | Integer in `[m, n)` | `m+Math.floor((n-m)*Math.random())`   |
  | Integer in `[m, n]` | `m+Math.floor((n-m+1)*Math.random())` |

- JS's pseudorandom number generator **can't be seeded**

## Trigonometric Functions

- All trigonometric functions in the `Math` library operate on **radians**, not degrees
- Conversion between radians and degrees

  ```javascript
  function deg2rad(d) {
    return (d / 180) * Math.PI
  }

  function rad2deg(r) {
    return (r / Math.PI) * 180
  }
  ```

  |          Function | Description                                                               |
  | ----------------: | :------------------------------------------------------------------------ |
  |     `Math.sin(x)` | Sine of `x` radians                                                       |
  |     `Math.cos(x)` | Cosine of `x` radians                                                     |
  |     `Math.tan(x)` | Tangent of `x` radians                                                    |
  |    `Math.asin(x)` | Inverse sine (arcsin) of `x` (result in radians)                          |
  |    `Math.acos(x)` | Inverse cosine (arccos) of `x` (result in radians)                        |
  |    `Math.atan(x)` | Inverse tangent (arctan) of `x` (result in radians)                       |
  | `Math.atan2(y,x)` | Counterclockwise angle (in radians) from the x-axis to the point `(x, y)` |

## Hyperbolic Functions

|        Function | Description                                 |
| --------------: | :------------------------------------------ |
|  `Math.sinh(x)` | Hyperbolic sine of `x`                      |
|  `Math.cosh(x)` | Hyperbolic cosine of `x`                    |
|  `Math.tanh(x)` | Hyperbolic tangent of `x`                   |
| `Math.asinh(x)` | Inverse hyperbolic sine (arcsinh) of `x`    |
| `Math.acosh(x)` | Inverse hyperbolic cosine (arccosh) of `x`  |
| `Math.atanh(x)` | Inverse hyperbolic tangent (arctanh) of `x` |
