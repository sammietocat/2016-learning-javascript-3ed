# Chapter 13. Functions and the Power of Abstract Thinking

## Functions as Subroutines

- Subroutines simply
  1. Package some bit of repetitive functionality
  2. Give it a name
  3. Allow you to execute that bit of functionality at any time simply by referring to that name
- A subroutine is used to package an **algorithm**

## Functions as Subroutines That Return a Value

> It's very common to name functions that return a boolean (or are designed to be used in a boolean context) with an initial **is** (demo as `subroutine-ret.js`)

## Functions as...Functions

### Pure functions

- 2 requirements
  - Always return the same output for the same set of inputs
  - Have no side effects (console output isn't taken as side effects)
- 2 examples in `pure-func.js`
  - a positive example as `isLeafYear()`
  - a negative example as `getNextRainbowColor()`
  - a negative example as `getNextRainbowColorNoSideEffect()`, where the side effect is eliminated by putting external variables in a closure

## So What?

- Subroutines give you a way to package commonly used functionality
- DRY (don’t repeat yourself)
- Pure functions make your code
  - easier to test
  - easier to understand
  - more portable
- Functions are **tied to their context** if under different circumstances, they
  - return a different value
  - have side effects
- Pure functions should be preferred

### Functions are Objects

- Functions are instances of the `Function` object
- Use `typeof` oeprator to identify functions

## IIFEs and Asynchronous Code

> IIFEs stands for **immediately invoked function expressions**

- One of the first uses of IIFEs was to create new variables in new scopes so that asynchronous code would run correctly
- 3 examples as warning about scoping in async programming:
  - negative examples as `iife/bad.js`
  - positive examples as
    - `iife/ok1.js` by wrapping around another functions
    - `iife/ok2.js` by using block-scoped variables declared by `let`

## Function Variables

### Functions as Variables

- Aliasing to shorten function name (demo in `func-var/alias.js`)
- As elements in array to pipeline a series of functions in a specified order (demo as `func-var/pipeline.js`)
- As properties of objects
- As arguments for other functions
  - Achieve asynchronous execution (usually called a **callback**, and often abbreviated as `cb`)
  - Inject functionality
- As return values of functions
  - _currying_: takes a function with multiple arguments and converted it to a function with a single argument

## Recursion

- **DEFINITION**: Recursion refers to a function that calls itself
- A recursive function should has **a reachable stopping condition**. Otherwise, it will run forever until crashing

  (demo as `recursion.js`)
