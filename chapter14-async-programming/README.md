# Chapter 14. Asynchronous Programming  

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
> **Def**: A callback is simply a function that you write that will be invoked at some point in the future  

### setTimeout, setInterval and clearInterval

method | description
------:|:-----------
`setTimeout`  | delays execution some number of milliseconds (see `setTimeout.js`)
`setInterval` | runs the callback at the specified interval forever, or until you call clearInterval (see `setInterval.js`)
`clearInterval` | cancel events triggered by `setInterval` 

### Scope and Asynchronous Execution  
Be mindful of the scope your callbacks are declared in: **they will have access to everything in that scope (closure)** (see `countdown.js`)  

### Error-First Callbacks  
+ The convention is to use the first argument to a callback to receive an error object. If that error is `null` or `undefined`, there was no error  
+ Whenever dealing with an error-first callback, the first thing you should do is check the error argument and take appropriate action (**don't forget to return if wanted**) (see `err-first-cb.js`)  

### Callback Hell  
+ deep nesting of code blocks  
+ error handling  
+ nothing to prevent your callback from accidentally getting called twice  

## Promises  
+ basic idea: when you call a promise-based asynchronous function, it returns a `Promise` instance  
+ A promise can either **fullfilled** or **rejected** only once, and then **settled**  

### Creation  
+ A new `Promise` instance is created with a function that has `resolve` (fulfill) and `reject` callbacks (see `promise/countdown.js`)   
+ only the first calling of `resolve`/`reject` counts  

### Using  
+ `then()` handler of a promise takes (see `promise/countdown2.js`) 
  - a fullfilled callback comes first  
  - an optional error callback follows
+ promise support `catch()` handler (see `promise/countdown3.js`) 
+ **Calling `reject` (or `resolve`) doesn't stop your function**; it just manages the state of the promise  

### Events  
+ an event emitter broadcasts events to any interested listeners  
+ evnets are subscribed by means of callbacks  
+ implemented as Node's `EventEmitter` to be used with a class (see `promise/countdown4.js`)  

### Chaining  
One of the advantages of promise chains is that you don't have to catch errors at every step; if there's an error anywhere in the chain, the chain will stop and fall through to the catch handler  (see `promise/countdown5.js`)  

### Preventing Unsettled Promises  
+ **cause**: forget to call either resolve or reject  
+ **solution**: specify a timeout for promises (see `promise/countdown6.js`)   

## Generators  


