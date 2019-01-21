# Chapter 05. Expressions and Operators

- An expression is a special kind of statement that evaluates to a value
- An assignment is itself an expression
- 3 kinds of expressions:
  - operator expressions: operator+operands
  - identifier expressions: a variable or constant
  - literal expressions

## Operators

an expression results in a value; an operator produces a value

## Arithmetic Operators

| operator | description                          | example                                                                      |
| -------- | ------------------------------------ | ---------------------------------------------------------------------------- |
| \+       | Addition (also string concatenation) | 3+2 //5                                                                      |
| \-       | Subtraction                          | 3-2 // 1                                                                     |
| /        | Division                             | 3/2 //1                                                                      |
| \*       | Multiplication                       | 3\*2 //6                                                                     |
| %        | Remainder                            | 3%2 // 1, remainder takes the signals of the dividend                        |
| \-       | Unary negation                       | -x // negative x; if x is 5, -x will be -5                                   |
| \+       | Unary plus                           | // request conversion to number, or ease alignment                           |
| \++      | Pre-increment                        | ++x // increments x by one, and evaluates to the new value                   |
| \++      | Post-increment                       | x++ // increments x by one, and evaluates to value of x before the increment |
| \--      | Pre-decrement                        | --x // decrements x by one, and evaluates to the new value                   |
| \--      | Post-decrement                       | x-- // decrements x by one, and evaluates to value of x before the decrement |

## Operator precedence

- 56 operators grouped into 19 **precedence levels**
- Operators with a higher precedence are performed before operators with a lower precedence.
- Operators at the same precedence level are either evaluated right to left (e.g. multiplication and divison) or left to right (e.g. assignment).

## Comparison operators

3 kinds: strict equality, abstract (or loose) equality, and relational

| type                 | definition                                                                                                      | symbols                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| strictly equal       | 2 values refer to the same object, or if they are the same type and have the same value (for primitive types).  | `===`/`!==` for equality/inequality |
| abstract equal       | 2 values refer to the same object or if they can be _coerced into having the same value_.                       | `==`/`!=` for equality/inequality   |
| relational operators | compare values in relation to one another, and they only make sense for data types that have a natural ordering | `<`, `<=`, `>`, `>=`                |

## Comparing numbers

- `NaN` is not equal to anything, and `NaN === NaN` and `NaN == NaN` are both false
- `isNaN(x)` will return true if `x` is `NaN` and `false` otherwise
- for fractional numbers, check for "closeness" (absolute difference within `Number.EPSILON`) by relational operators

## String concatenation

- both addition and concatenation are evaluated from left to right.
- JS examines each pair of operands from left to right, and if either operand is a string, it assumes string concatenation

```
 3  + 5 + "8" => "88"
"3" + 5 + 8   => "358"
```

## Logical oeprators

subject to boolean values (`true`/`false`)

### truthy and falsy values

falsy values: `undefined`, `null`, `false`, `0`, `NaN` and `''` (empty string)

otherwise, are truthy values

### AND, OR and NOT

- AND as conjunction: `true` iff both operands are `true`
- OR as disjunction: `true` if either operand is `true`
- NOT as negation
- XOR (exclusive OR): `false` if both operands are `true`/`false`, equvilent to expression `(x || y) && (x !== y)`

### Short-circuit evaluation

- `x && y`: y won't be evaluated if `x` is false
- `x || y`: y won't be evaluated if `x` is true

### Logical Operators with Nonboolean Operands

If you are using boolean operands, the logical operators always return booleans. If you’re not, however, the value that determined the outcome gets returned

### Conditional Operator

`x ? y:z`: return `y` if `x` is true, and `z` otherwise

### Comma Operator

evaluates two expressions and returns the result of the second one, e.g.,  
`x = (1,2)` will assign `x` as 2

## Grouping operator

### Bitwise operators

- Bitwise operators treat their operands as **32-bit signed integers in two's complement format**
- perform logical operations (AND, OR, NOT, XOR) on every individual bit in an integer

### `typeof` operator

- def: returns a `string` representing the type of its operand

> one quirk: `typeof null` returns `object`

- cannot distinguish `arrays` and `nonarray`: `typeof [] => "object"`

### `void` operator

evaluate its operand and then return undefined

### assignment operators

- plain assignment operator: `=`
- compound operator: perform an operation and assignment in one step, e.g., `*=` (`x*=2` is equal to `x = x*2`)

## Destructing assignment

- enable us to take an object or an array, and "destructure" it into individual variables
- When destructuring an object, the variable names must match property names in the object
- Object destructuring can be done on assignment alone, but it must be surrounded by parentheses; otherwise, JavaScript interprets the lefthand side as a block
- take all the remaining elements and put those in a new array with the **spread operator (...)**

```javascript
constarr = [1, 2, 3, 4, 5]
let [x, y, ...rest] = arr
x // 1
y // 2
rest // [3, 4, 5]
```

- Array destructuring makes it easy to swap the values of variables: `[a, b] = [b, a]`

## Object and Array Operators

| operator   | description                   |
| ---------- | ----------------------------- |
| .          | Member access                 |
| []         | Computed member access        |
| in         | Property existence operator   |
| new        | Object instantiation operator |
| instanceof | Prototype chain test operator |
| ...        | Spread operator               |
| delete     | Delete operator               |

## Expressions in Template Strings

used to inject the value of any expression into a string

`` let hello = `${x - y}` ``

## Expressions and Control Flow Patterns

- `if...else` Statements to Conditional Expressions

```javascript
if (condition) statement1
else statement2
```

to

```javascript
condition ? statement1 : statement2
```

- `if` Statements to Short-Circuited Logical `OR` Expressions

```javascript
if (!option) options = {}
```

to

```
options = options || {};
```
