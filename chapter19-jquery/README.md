# Chapter 19. jQuery  

3 main advantages w.r.t DOM API  
+ jQuery protects you from idiosyncrasies in the way different browsers implement the DOM API (especially older browsers).
+ jQuery provides a simpler Ajax API  
+ jQuery provides many powerful and compact enhancements on the built-in DOM API 


## The Almighty Dollar (Sign)  
When you include jQuery in your project, you can either use the variable `jQuery` or the much shorter `$`  

## Waiting for the DOM to Load  
codes reside in  
```javascript
$(document).ready(function() {
  // code here is run after all HTML has been
  // loaded and the DOM is constructed
});
```

or equivalently  
```javascript
$(function() {
  // code here is run after all HTML has been
  // loaded and the DOM is constructed
});
```
will only be invoked once the browser has fully loaded the page and the DOM has been constructed

## jQuery-Wrapped DOM Elements  
The jQuery function is primarily called in one of two ways  
+ Calling jQuery with a **CSS selector** returns a jQuery object matching that selector  
+ Calling jQuery with HTML creates new DOM elements based on the HTML you provide  

(demo as `jquery-func.html`)  

>  a good convention to prefix a jQuery object variable with a dollar sign  

## Manipulating Elements  
+ jQuery provides `text` and `html` methods that are rough equivalents of assigning to a DOM element's `textContent` and `innerHTML` properties  
+ in case of multiple elements, jQuery handles all the iteration for you, and by default assumes that you want to **perform actions on every element in the jQuery object**  
+ jQuery provides a method `eq` that returns a new jQuery object containing a single element
+ To remove elements, simply call `remove` on a jQuery object  
+ All jQuery methods return a jQuery object to support *chaining*  
+ add elements (see `man-ele3.html`)   
  - `append` appends the provided content to every element in the jQuery object  
  - insert siblings with `before`/`after`  
+ manipulate classes with `addClass()`, `removeClass()` and `toggleClass()`  
+ manipulate style with `css()`   
+ `filter()` reduces the set to elements that match the specified selector (demo as `filter.html`)   
+ `not()` is essentially the inverse of `filter()` (demo as `not.html`)   
+ `find()` returns the set of **descendant elements** that match the given query (demo as `find.html`)  

## Unwrapping jQuery Objects  
using the `get([idx])` method, where `idx` is zero-based    

## Ajax
+ `ajax()`  
+ `get()` and `post()` perform the most common types of Ajax calls  