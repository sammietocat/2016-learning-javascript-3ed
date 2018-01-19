# Control Flow  

## A Control Flow Primer  
### Block  
a.k.a, *compound statements*: a series of statements enclosed in **curly braces** that is treated by JavaScript as a single unit  
Note: **a block statement is a statement** too  
### Whitespace  
should **never** mix blocks and single statements in the same `if` statement  
### Loop control flow  
+ `while`: repeats code as long as its *condition* is met  
  ```javascript 
  while(condition) 
    statement
  ```
+ `do...while` statement  
  ```javascript 
  do 
    statement
  while(condition)
  ```
+ `for` loop: 3 parts as *initializer*, *condition*, and *final expression*    
  ```javascript 
  for([initializer]; [condition]; [final-expression])
    statement
  ```
+ `for...in` loop  
loop over the *porperty key* of an object  
```javascript
for(variable in object)
  statement
```
+ `for...of` loop  
loop over the elements in a collection  
```
for(variable of object)
  statement
```
### Conditional control flow  
+ `if[...else if][...else]`  
```javascript 
if(condition)
  statement
[else if(condition)
  statement2]
[else
  statement3]
```
+ `switch`  
```javascript
switch(expression) { 
  case value1: 
    // executed when the result of expression matches value1
    [break;] 
  case value2:
    // executed when the result of expression matches value2
    [break;]
      ... 
  case valueN:
    // executed when the result of expression matches valueN
    [break;] 
  default:
    // executed when none of the above values match the value of expression
    [break;] 
}
```
### Control flow exceptions  

statements | meaning  
-----------|---------
break      | Breaks out of loop early.  
continue   | Skip to the next step in the loop.
return     | Exits the current function (regardless of control flow).
throw      | Indicates an exception that must be caught by an exception handler (even if it’s outside of the current control flow statement).

## Useful control flow patterns  
+ `continue` to reduce conditional nesting  
+ `break` or `return` to avoid unnecessary computation  
+ using value of index after loop completion  
+ using descending indexes when modifying lists  