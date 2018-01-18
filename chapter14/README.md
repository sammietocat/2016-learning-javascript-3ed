# Chapter 14. Asynchronous Programming  

+ JavaScript application runs **single-threaded**, which only ever does one thing at a time  
+ 3 distinct eras of asynchronous support  
  + the callback  
  + the promise  
  + the generator  
+ 3 use cases  
  - Network requests (Ajax calls, for instance)  
  - Filesystem operations (reading/writing files, etc.)  
  - Intentionally time-delayed functionality (an alarm, for example)  
+ Analogy as getting a table at a busy restaurant when you don't have a reservation -> just waiting to be notified  

## Callbacks  
> **Def**: A callback is simply a function that will be invoked at some point in the future  

The whole point of asynchronous execution is that **it doesn't block anything**    
### setTimeout, setInterval and clearInterval

method | description
------:|:-----------
`setTimeout`  | delays execution some number of milliseconds (see `callback/setTimeout.js`)
`setInterval` | runs the callback at the specified interval forever, or until you call clearInterval (see `callback/setInterval.js`)
`clearInterval` | cancel events triggered by `setInterval` 

### Scope and Asynchronous Execution  
+ Be mindful of the scope your callbacks are declared in: **they will have access to everything in that scope (closure)** (see `callback/countdown.js`)   
+ solve the potential problem by scoping using `let` (demo as `callback/countdown2.js`)

### Error-First Callbacks  
+ The convention is to use the first argument to a callback to receive an error object. If that error is `null` or `undefined`, there was no error  
+ Whenever dealing with an error-first callback, the first thing you should do is check the error argument and take appropriate action (**don't forget to return if wanted**) (see `callback/err-first-cb.js`)  
+ **don't forget to return after checking/logging the error if wanted**   

### Callback Hell  
+ deep nesting of code blocks (demo as `callback/cb-hell.js`)  
+ error handling is problematic: `try...catch` blocks only checks for error in the same function, but not the nested ones (demo as `callback/cb-hello1.js`)  
+ nothing to prevent your callback from accidentally getting called twice or not at all    

## Promises  
+ basic idea: when you call a promise-based asynchronous function, it returns a `Promise` instance  
+ A promise can either **fullfilled**(success) or **rejected**(failure) only once, and then **settled**  
+ Another convenient advantage of promises over callbacks is that, because they're just objects, they can be passed around   

### Creation  
+ A new `Promise` instance is created with a function (as argument) that has `resolve` (fulfill) and `reject` callbacks (see `promise/countdown.js`)   
+ only the first calling of `resolve`/`reject` counts  

### Using  
+ `then()` handler of a promise takes (see `promise/countdown2.js`) 
  - a fullfilled callback comes first  
  - an optional error callback follows
+ promise also supports `catch()` handler (see `promise/countdown3.js`) 
+ **Calling `reject` (or `resolve`) doesn't stop your function**; it just manages the state of the promise  

### Events  
+ an event emitter broadcasts events to any interested listeners  
+ evnets are subscribed by means of callbacks  
+ implemented as Node's `EventEmitter` to be used with a class (see `promise/countdown4.js`)  

### Chaining  
+ when one promise is fulfilled, you can have it immediately invoke another function that returns a promise...and so on  
+ One of the advantages of promise chains is that **you don't have to catch errors at every step**; if there's an error anywhere in the chain, the chain will stop and fall through to the catch handler  (see `promise/countdown5.js`)  

### Preventing Unsettled Promises  
+ **cause**: forget to call either `resolve` or `reject`    
+ **solution**: specify a timeout for promises (see `promise/countdown6.js`), so that if the promise hasn't settled in some reasonable amount of time, automatically reject it  

## Generators  
+ combined with promise to manage async code  
+ steps to make up utilities to manage async code (demo as `generator/theFutureIsNow.js`)  
  1. turn Node's error-first callbacks into promises (as `nfcall()`)  
  2. construct a generator runner (as `grun()`)   
  3. finally make up the generator (as `theFutureIsNow()`)   

### One Step Forward and Two Steps Back?   
+ `Promise.all()` resolves when all the promises in an array `resolve...` and will execute the asynchronous code in parallel if possible (demo as `generator/theFutureIsNow.js`)   
+ lesson: consider what parts of your program can be run in parallel, and what parts can't  

### Don't Write Your Own Generator Runner  
[the co genertor runner](https://github.com/tj/co)  

### Exception Handling in Generator Runners  
Another important benefit of generator runners is that they enable exception han‐ dling with `try/catch` (demo as `generator/theFutureIsNow3.js`)  

