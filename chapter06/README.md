# Chapter 06. Functions  

> **Def**: A function is a self-contained collection of statements that run as a single unit  

+ declaration won't execute the function body  
+ call the function by using its name followed by parentheses (see `func-demo.js`)  

## Return Values  
+ Function calling is an expression  
+ the `return` keyword will immediately terminate the function and return the specified value (see `func-ret-val.js`)  

## Calling vs Referencing  
+ calling a function by following its identifier with parentheses   
+ referencing a function by following its identifier without parentheses, which enables functionalities such as    
  - alias  
  - assign a function to an object property  
  - add a function to an array  

## Function Arguments  
The primary mechanism to pass information to a function call is function arguments (sometimes called parameters)

+ **formal arguments**: placeholder in function identifiers  
+ **actual arguments**: formal arguments receive values and become actual arguments  
+ function calling **passes arguments by values** but not variables themselves, which means updating arguments locally within a function won't affect any variables outside of the function (see `arg/arg01.js`)  
+ Primitives can't be modified. Objects, on the other hand, can be modified (see `arg/arg0{2,3}.js`)  

### Function Signature include no Arguments  
arguments not provided by callers will receive value `undefined` implicitly (see `arg/sig.js`)   

### Destructuring Arguments  
+ **destructuring an object into individual variables**, where variables matching no property in the incoming object will receive the value `undefined` (see `arg/destructure-obj.js`)    
+ **destructure arrays** (see `arg/destructure-arr.js`)  
+ use the **spread operator (...)** to collect any additional arguments  
  - The spread operator must be the last argument  

### Default Arguments  
New in ES6 is the ability to specify default values for arguments 

## Functions as Properties of Objects  
+ functions as properties of objects is called **method**  
+ ES6 introduces a new shorthand syntax for methods (say `method.js`)
```javascript
{
  ...
  func() {}
  ...
}
```

## The `this` Keyword  
+ When methods are called, the `this` keyword takes on the value of the specific object it was called on (see `this/basic.js`) 
+ `this` is bound according to how the function is called, not where the function is declared (see `this/basic.js`)    
+ `this` will be shadowed from the inner functions, solved by assigning a second variable to `this` (see `this/nested-this-{bad,ok}.js`)   

## Function Expressions and Anonymous Functions  
+ Function expressions are syntactically identical to function declarations except that you can omit the function name  
```javascript
const f = function() { 
  // ...
};
```
+ When a function is named and assigned to a variable  
  - variable name takes priority  
  - access by func name will trigger undefined variable err  
  - useful to **recursive** function  

> If the function declaration is used as an expression, it's a function expression. Otherwise, it's a function declaration  

## Arrow Notation  
+ Arrow functions introduces 3 simplication (see `arr-func/basic.js`) 
  - no keyword `function`  
  - **parentheses** are optional in case of single argument  
  - **curly braces** and the `return` statement are optional in case of single-expression body  
+ Arrow functions are always **anonymous**    
+ differences w.r.t regular functions  
  - `this` is bound lexically in arrow functions  (see `arr-func/lexical-this.js`)  
  - cannot be used as object constructors  

## call, apply, and bind  
+ `call()` is a method available on all functions that allows you to call the function with a specific value of `this` (see `call.js`)  
  - 1st argument is the value bound to `this`  
  - others are arguments passed to the calling function  
+ `apply()` is identical to call except taking its arguments as an array (see `apply.js`, example usage are `Math.max()` and `Math.min()`)    
+ `bind()` allows you to *permanently* associate a value for `this` with a function  
  - You can also provide parameters to `bind`, which has the effect of creating a new function that's always invoked with specific parameters