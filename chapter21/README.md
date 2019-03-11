# Chapter 21. Object Property Configuration and Proxies

## Accessor Properties: Getters and Setters

- 2 types of object properties
  - _Data properties_
  - _Accessor properties_
- Accessor properties are similar except
  - They have two functions -- a _getter_ and a _setter_ --
  - When accessed, they act more like a data property than a function (demo as `accessor-props.js`)
- For accessor properties, _getter_/_setter_ can go without _setter_/_getter_

## Object Property Attributes

- 3 ways to create properties in the object literal notation
  - Regular properties with keys being identifiers
  - Computed property names allowing nonidentifiers and symbols
  - Method shorthand
- Properties have **attributes** that control how the properties behave in the context of the object they belong to
  - `Object.getOwnPropertyDescriptor` exposes the three attributes of a property (demo as `prop-desc.js`)
    - **Writable**: Controls whether the value of the property can be changed
    - **Enumerable**: Controls whether the property will be included when the properties of the object are enumerated (with `for...in`, `Object.keys`, or the spread operator) (demo as `nonenumerable-arr.js`)
    - **Configurable**: Controls whether the property can be deleted from the object or have its attributes modified
- Property attributes can be controlled with `Object.defineProperty`
  - Which allows you to create new properties or modify existing ones (as long as the property is _configurable_) (demo as `def-props1.js`)
  - It's the only way to add an accessor property to a created object
    > Attempting to set a read-only property will **only result in an error in strict mode**
- `Object.defineProperty` can be used to add a new property to an object. This is especially useful for attribute properties, liking adding an accessor property after an object has been created (demo as `def-props2.js`)
- To create a data property, you provide the `value` property to `Object.defineProperty` (demo as `def-props3.js`)
- One common use of `Object.defineProperty` is making properties not enumerable in an array

## Protecting Objects: Freezing, Sealing, and Preventing Extension

Object protection options go as

| Action               | Normal  | Frozen              | Sealed              | Nonextensible           |
| :------------------- | :------ | :------------------ | :------------------ | :---------------------- |
| Add property         | Allowed | Prevented           | Prevented           | Prevented               |
| Read property        | Allowed | Allowed             | Allowed             | Allowed                 |
| Set property value   | Allowed | Prevented           | Allowed             | Allowed                 |
| Reconfigure property | Allowed | Prevented           | Prevented           | Allowed                 |
| Delete property      | Allowed | Prevented           | Prevented           | Allowed                 |
| Check                | N/A     | `Object.isFrozen()` | `Object.isSealed()` | `Object.isExtensible()` |

(demo as `freeze.js`,`seal.js` and `extend.js`)

## Proxies

- **DEFINITION**: An object proxy essentially has the ability to intercept and (optionally) modify actions on an object

- Implemented by `Proxy(target,handler)`
  - `target` is the object to proxy
  - `handler` is the action to intercept (e.g. `get` for property access as `proxy-get.js`, `set` for property setting as `proxy-set.js`)
