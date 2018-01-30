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
+ 2 types: **in place** or **returning a copy**  

### Array function arguments  

method | description
------:|:-----------
reduce only | Accumulator (initial value, or return value of last invocation) 
all   | Element (value of current element) 
all   |  Index of current element
all   |  Array itself (rarely useful)

All `Array.prototype` methods that take a function also take an (optional) value of `this` to be used when the functions are invoked, allowing you to invoke the function as if it were a method.

### Methods Overview   

method  | description | in-place or copy | examples
--------|-------------|------------------|---------
`push`(returns new length), `pop` | append/remove the tailing element | in-place | `content-manipulate/ppus.js` 
`unshift`(returns new length), `shift` | add/remove the 1st element | in-place | `content-manipulate/ppus.js`
`concat(value1[, value2[, ...[, valueN]]])`  | Add multiple elements at end |  copy  | `content-manipulate/concat.js` 
`slice([begin[, end]])`   | Get subarray | copy | `slice.js`
`splice(start[, deleteCount[, item1[, item2[, ...]]]])`  | Add or remove elements at any position | in-place | `content-manipulate/splice.js`
`copyWithin(target[, start[, end]])` | Cut and replace within an array | in-place | `content-manipulate/copyWithin.js`
`fill(value[, start[, end]])`    | Fill an array | in-place  | `content-manipulate/fill.js`
`reverse` | Reverse an array  | in-place  | `content-manipulate/reverse.js`
`sort([compareFunction])`   | Sort an array | in-place | `content-manipulate/sort{01,02}.js`  

## Array Searching 

method | description | examples
-------|-------------|---------
`indexOf/lastIndexOf(searchElement[, fromIndex])` | index of the first/last strictly equal item | `search/indexOf.js`
`findIndex(callback[, thisArg])` | The index of an item, whose equality is determined by `callback` | `search/findIndex.js`
`find(callback[, thisArg])`  | The item satisfying the test specified by `callback` | `search/find.js`
`some(callback[, thisArg])`  | Whether the array has an item that passes the test specified by `callback` | `search/some.js`
`every(callback[, thisArg])` | Whether all elements in the array passes the test specified by `callback` | `search/every.js`

## Array Transformation  
all of them return a copy  

method | description | examples
-------|-------------|---------
`map(callback(currentValue[, index[, array]]) {...}[, thisArg])` | Transform every element in an array | `transformation/map{01,02}.js`
`filter(callback[, thisArg])`  | Eliminate elements from an array based on some criteria | `transformation/filter.js`
`reduce(callback[, initialValue])`  | Transform an entire array into another data type | `transformation/reduce{01,02,03,04}.js`
`join([separator])`    | Convert elements to strings and join together | `transformation/join.js`

## Array Methods and Deleted or Never-De ned Elements  
`map`, `filter`, and `reduce` do not invoke the function for elements that have never been assigned or have been deleted (demo as `exception.js`)  
