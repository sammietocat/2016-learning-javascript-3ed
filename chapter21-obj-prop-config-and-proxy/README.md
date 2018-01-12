# Chapter 21. Object Property Configuration and Proxies  

## Accessor Properties: Getters and Setters  
+ 2 types of object properties: *data properties* and *accessor properties*  
+ accessor properties are similar except they have two functions -- a *getter* and a *setter* -- and when accessed, they act more like a data property than a function (demo as `accessor-props.js`)   
+ for accessor properties, *getter*/*setter* can go without *setter*/*getter*  

## Object Property Attributes  
+ 3 ways to create properties in the object literal notation  
  - regular properties with keys being identifiers  
  - computed property names allowing nonidentifiers and symbols  
  - method shorthand  
+ properties have **attributes** that control how the properties behave in the context of the object they belong to  
  - `Object.getOwnPropertyDescriptor` exposes the three attributes of a property  
    + **Writable**: Controls whether the value of the property can be changed  
    + **Enumerable**: Controls whether the property will be included when the properties of the object are enumerated (with `for...in`, `Object.keys`, or the spread operator)  
    + **Configurable**: Controls whether the property can be deleted from the object or have its attributes modified  
+ property attributes can be controlled with `Object.defineProperty`, which allows you to create new properties or modify existing ones (as long as the property is *configurable*) (demo as `def-props.js`) 
>  Attempting to set a read-only property will **only result in an error in strict mode**  
+ `Object.defineProperty` can be used to add a new property to an object. This is especially useful for attribute properties, liking adding an accessor property after an object has been created (demo as `def-props2.js`)   
+ To create a data property, you provide the `value` property to `Object.defineProperty` (demo as `def-props3.js`)  
+ One common use of Object.defineProperty is making properties not enumerable in an array  

## Protecting Objects: Freezing, Sealing, and Preventing Extension  

Object protection options go as  

action | normal object | frozen object | sealed object | nonextensible object 
-------|---------------|---------------|---------------|---------------------
Add property  | Allowed   | Prevented  | Prevented     | Prevented 
Read property | Allowed   | Allowed    | Allowed       | Allowed
Set property value  | Allowed | Prevented | Allowed    | Allowed
Reconfigure property| Allowed | Prevented | Prevented| Allowed 
Delete property     | Allowed   | Prevented | Prevented| Allowed 
check | N/A   | `Object.isFrozen()`   | `Object.isSealed()` | `Object.isExtensible()`

## Proxies  
> **DEF**: An object proxy essentially has the ability to intercept and (optionally) modify actions on an object  

+ implemented by `Proxy(target,handler)`  
  - `target` is the object to proxy  
  - `handler` is the action to intercept (e.g. `get` for property access, `set` for property setting)  