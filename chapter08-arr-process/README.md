# Chapter 08. Arrays and Array Processing  

## A Review of Arrays  
+ Arrays in JS  
  - are inherently ordered, with zero-based numeric indices  
  - can be nonhomogeneous  
  - are constructed with square brackets  
  - have a `length` property telling its number of elements   
  - **Assigning** (but not accessing) to an index that's larger than the array will automatically make the array larger  

demo as `basic.js`  

## Array Content Manipulation  
+ 2 types: in place or returning a copy  

### Array function arguments  

method | description
------:|:-----------
reduce only all | Accumulator (initial value, or return value of last invocation) Element (value of current element)
all   |  Index of current element
all   |  Array itself (rarely useful)

All `Array.prototype` methods that take a function also take an (optional) value of this to be used when the functions are invoked, allowing you to invoke the function as if it were a method.

### Methods Overview   

method  | description | in-place or copy
--------|-------------|-----------------
`push`(returns new length), `pop` | Create a stack (LIFO) | in-place
`unshift`(returns new length), `shift` | Create a queue (FIFO) | in-place
`concat`  | Add multiple elements at end |  copy 
`slice`   | Get subarray | copy
`splice`  | Add or remove elements at any position | in-place
`copyWithin` | Cut and replace within an array | in-place
`fill`    | Fill an array | in-place 
`reverse` | Reverse an array  | in-place
`sort(criteria-func)`   | Sort an array     | in-place

## Array Searching 

method | description
-------|------------
`indexOf(simple-value)`,`findIndex(complex-value)`    | The index of an item
 `lastIndexOf` | The last index of an item
`find`  | The item itself
`some`  | Whether the array has an item that matches some criteria 
`every` | Whether all elements in the array matches some criteria

## Array Transformation  
all of them return a copy  

method | description 
-------|------------
`map` | Transform every element in an array
`filter`  | Eliminate elements from an array based on some criteria
`reduce`  | Transform an entire array into another data type
`join`    | Convert elements to strings and join together