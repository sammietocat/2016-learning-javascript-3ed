# Chapter 07. Scope  

> Scope determines when and where variables, constants, and arguments are considered to be defined  

## Scope Versus Existence  
+ non-existence implies out of scope, but not the way around  
+ Scope (or visibility) refers to the identifiers that are currently visible and accessible by the currently executing part of the program (called the **execution context**)   
+ Existence, on the other hand, refers to identifiers that hold something for which **memory has been allocated** (reserved)  

## Lexical Versus Dynamic Scoping  
+ Scoping in JavaScript is lexical, meaning we can determine what variables are in scope simply by looking at the source code 
+ Lexical scoping means whatever variables are in scope where you de ne a function from (as opposed to when you call it) are in scope in the function  
+ 3 lexical scopes  
  - global scope  
  - block scope  
  - function scope  

## Global Scope  
> **Def**: the scope that you’re implicitly in when you start a program  

+ Scope is hierarchical  
+ Anything declared in global scope is called a *global*   
+ Should try to avoid is things that rely on global scope  
+ Improve functions by placing dependencies as arguments but not internal variables  

## Block Scope  
> **Def**: `let` and `const` declare identifiers in what's known as block scope  

+ Block scope, then, refers to identifiers that are only in scope within the block  

## Variable Masking  
> **Def**: A variable **with the same name** will mask the variable in the outer scope

+ When execution enters the inner block, and a new variable `x` is defined, **both variables are in scope**; we simply have no way of accessing the variable in the outer scope (because it has the same name)  

## Functions, Closures, and Lexical Scope  
> **Def**: A closure is a block to scope a function intentionally defined so that it explicitly has access to that scope

+ Defining a function within a closure can affect the closure's lifetime; it also allows us to access things we wouldn't normally have access to

## Immediately Invoked Function Expressions  
> **Def**: IIFE stands for immediately invoked function expression  

+ An IIFE declares a function and then runs it immediately, with format like  
```javascript
(function() {
  // this is the IIFE body
})();
``` 
+ The **advantage** of the IIFE is that anything inside it has its own scope, and because it is a function, it can pass something out of the scope

## Function Scope and Hoisting  
+ Variables with `let` don't spring into existence until its declaration  
+ Variables with `var` are available everywhere in the current scope...even before it's declared  
+ Undeclared variables will result in an error, whereas variables that exist but have the value undefined will not  
+ JS scans the entire scope (either a function or the global scope), and any variables declared with `var` are hoisted to the top  
+ Hoisting applies to declaration but not assignment  
+ Masking doesn't apply to variables declared with `var`  

## Function Hoisting  
+ function declarations are hoisted to the top of their scope  
+ function expressions that are assigned to variables are not hoisted; rather, they are subject to the scoping rules of variables  

## The Temporal Dead Zone  
> **Def**: Within a scope, the TDZ for a variable is the code before the variable is declared  

## Strict Mode  
+ **implicit globals**: if you forgot to declare a variable with var, JavaScript would merrily assume you were referring to a global variable. If no such global variable existed, it would create one  
+ **strict mode** prevents implicit globals and is enabled with the string "use strict"   