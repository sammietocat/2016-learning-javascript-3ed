# Chapter 13. Functions and the Power of Abstract Thinking  

## Functions as Subroutines  
+ Subroutines simply  
  1. package some bit of repetitive functionality  
  2. give it a name  
  3. allow you to execute that bit of functionality at any time simply by referring to that name  
+ a subroutine is used to package an **algorithm**

## Functions as Subroutines That Return a Value  
> It's very common to name functions that return a boolean (or are designed to be used in a boolean con‐ text) with an initial **is**   

## Functions as...Functions  
### Pure functions  
+ always return the same output for the same set of inputs  
+ have side effects (console output isn't taken as side effects) 

2 examples in `functions.js`   
+ a positive example as `isLeafYear()` 
+ a negative example as `getNextRainbowColor()`   
+ a negative example as `getNextRainbowColorNoSideEffect()`, where the side effect is eliminated by putting external variables in a closure    

## Notes  
+ Subroutines give you a way to package commonly used functionality    
+ DRY (don’t repeat yourself)  
+ pure functions make your code easier to test, easier to understand, and more portable  
+ Functions that return a different value under different circumstances, or have side effects, are **tied to their context**   
+ pure functions should take priority  

### Functions are Objects  
+ functions are instances of the `Function` object  
+ use `typeof` oeprator to identify functions  

## IIFEs and Asynchronous Code  
> IIFEs stands for **immediately invoked function expressions** 
+ One of the first uses of IIFEs was to create new variables in new scopes so that asynchronous code would run correctly  

3 examples:
+ negative examples as `iife/iife-bad.js`   
+ positive examples as  
  - `iife/iife-ok1.js` by wrapping around another functions  
  - `iife/iife-ok2.js` by using block-scoped variables  

## Function Variables
### Functions as Variables  
+ aliasing to shorten functio name (demo in `func-var/alias.js`) 
+ as elements in array, to pipeline a series of functions in a specified order (demo as `func-var/pipeline.js`)    
+ as properties of objects  
+ as arguments for other functions  
  - achieve asynchronous execution (usually called a callback, and often abbreviated `cb`)  
  - inject functionality  
+ as return value of functions  
  - *currying*: takes a function with multiple arguments and converted it to a function with a single argument

## Recursion  
> **Def**: Recursion refers to a function that calls itself  

+ A recursive function should has a reachable stopping condition. Otherwise, it will run forever until crashing  