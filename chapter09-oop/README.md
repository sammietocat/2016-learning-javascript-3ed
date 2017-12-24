# Objects and Object-Oriented Programming  

## Comparison with arrays  

object                                 | array 
---------------------------------------|----------------------------
properties indexed by string or symbol | values indexed numerically
non-ordered                            | ordered

A property consists of `(key,value)` pairs, and accessed by its key.  

## Property Enumeration  

> order isn't guaranteed  

### for...in  
```javascript
const SYM = Symbol();

const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

for(let prop in o) {
  if(!o.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${o[prop]}`);
}

// output:
// a: 1
// b: 2
// c: 3
```

> **doesn't** include properties with symbol keys

### Object.keys  
> iterate all of the enumerable **string** properties  
```
const SYM = Symbol();

const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

// output:
// a: 1
// b: 2
// c: 3
```

## Object-Oriented Programming  
**an object is a logically related collection of data and functionality**.  

### terminology  

term          | meaning
--------------|-------------------------------------------
class         | a generic thing (e.g., a car)
instance      | a specific thing (e.g., "My Car")
method        | a piece of functionality 
class method  | bound to class rather than instance
constructor   | first function called at instance creation

categorize classes hierarchically by `superclass` (e.g., vehicle) and `subclass` (e.g., car)

### Class and Instance Creation  
+ syntax for creating classes  
```javascript
class Car {
  constructor() {}
}
```
+ `A instanceof B` checks if object `A` is an instance of the given class `B`  
+ add data (`make` and `model`) and som functionality (`shift`) to class `Car`  
```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.userGears = ['P', 'N', 'R', 'D'];
    this.userGear = this.userGears[0];
  }

  shift(gear) {
    if(this.userGears.indexOf(gear)<0) {
      throw new Error(`invalid gear: ${gear}`);
    }

    this.userGear = gear
  }
}
```
> `this` refers to the instance invoking the method

### Dynamic Properties  
Dynamic properties have the **semantics of a property** with the **functionality of a method**    

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }

  get userGear() { return this._userGear; }
  set userGear(value) {
    if(this._userGears.indexOf(value)<0) {
      throw new Error(`invalid gear: ${value}`);
    }

    this._userGear = value;
  } 

  shift(gear) {
    this.userGear = gear;
  }
}

const car1 = new Car("Telsa", "Model S");
car1.shift('D');

// note the no need of ()
console.log(car1.userGear);

// output: 
// D
```

> **poor man's access restriction**: prefixing properties considered as private with an underscore  

To enforce privacy, use `WeakMap`.    

### Classess Are Functions  
```javascript
class Es6Car {}

console.log(typeof Es6Car)

// output
// function
```

### The Prototype  
+ **Def**: methods available on instances of a class  
+ JS performs *dynamic dispatch* using the *prototype chain*   
+ Every function has a special property called **prototype**.  
+ object created with `new` has access to its constructor's **prototype** object  
+ When you attempt to access a property or method on an object, if it doesn’t exist, JS *checks the object's prototype* to see if it exists there.  
+ Defining a method or property on an instance will override the version in the prototype (demo as `chapter09-oop/oop/prototype-override.js`  

### Static Methods  
+ do not apply to a specific instance  
+ `this` is bound to the class
+ use the name of the class is preferred over `this`   

demo as `oop/static-methods.js`
