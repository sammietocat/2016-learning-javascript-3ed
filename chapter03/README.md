# Chapter 03. Literals, Variables, Constants, and Data Types

## Variables and Constants

### Variables

- variables is essentially a named value changeable at any time
- keyword `let` declares a variable and can only do it once
- uninitialized variable (i.e., not provide a value during declaration) explicitly are evaluated as `undefined`
- `let` can declare multiple variables within the same statement

### Constants

- a _constant_ holds a value and is unchangeable after initialization
- _constant_ are named with all uppercase letters and underscores conventionally

### variables vs constants

| constant             | variable                       |
| -------------------- | ------------------------------ |
| no accidental change | loop control                   |
|                      | value needs changing over time |

> constants are preferred and if you find you have a legitimate need to change the value of the constant, you can always change it to a variable

## Identifier Names

### naming rules

- start with letters/`$`/underscore(`_`)
- consists of letters/`$`/underscore/numbers
- unicode chars is allowed
- non-reserved word

### convention

- camel case: e.g., `camelCase`
- snake case: e.g., `snake_case`
- addons
  - no starting with capital letter except for classes
  - usually, starting with 1 or 2 underscores means special or "internal" variables
  - starting with `$` means jQuery-wrapped objects if jQuery is in use

## Literals

> **DEF**: Literals are values provided directly in program

### 2 types

- numeric literals (e.g., 22)
- string literal (e.g., "hello")
  > literals (except for number) have **quotation marks**, but not for identifiers

## Primitive Types and Objects

values are either _primitives_ or _objects_

### 6 primitive types

- Number
- String
- Boolean
- Null
- Undefined
- Symbol

primitive types are **immutable**, **which doesn't mean their contents cannot be changed**.

### objects

- used to construct custom data types.
- built-in object types are
  - Array
  - Date
  - RegExp
  - Map and WeakMap
  - Set and WeakSet
  - object types wrapper for primitive types, such as `Numbers`, `String` and `Boolean`, etc, which serve to provide extended functionality to the corresponding primitive

## Numbers

- numbers are necessarily approximations
- JavaScript approximates real numbers through a format called IEEE-764 double-precision floating-point
- only one numberic data type: `double`
- 4 types of numeric literals

  |          type | example       |
  | ------------: | :------------ |
  |     `decimal` | `10`          |
  |      `binary` | `0b11`        |
  |       `octal` | `0o123456780` |
  | `hexadecimal` | `0x0000ff`    |

- special values as placeholders: `Infinity`, `NaN` (not a number)
- examples of useful properties of `Number` object
  - `Number.EPSILON`: the smallest value that can be added to 1 to get a distinct number larger than 1
  - `Number.MAX_SAFE_INTEGER`: the largest representable integer
  - `Number.MAX_VALUE`: the largest representable number

## Strings

- simply unicode text data.
- string literals are represented with _single quotes_ (e.g. 'hello world'), _double quotes_ (e.g. "hello world") or _backticks_ (e.g. \`hello world\`)

### Escaping

- escaping characters so they are not taken as string termination
- anti-use case: double/single quotes within single/double quotes
- escape quotation marks with a backslash (\\)

## Special Characters

nonprintable chars

| Code     | Description                             | Example                            |
| -------- | --------------------------------------- | ---------------------------------- |
| `\n`     | newline                                 | "Line1\nLine2"                     |
| `\t`     | tab                                     | "Windows line 1\r\nWindows line 2" |
| `\'`     | single quote                            | "Speed:\t60kph"                    |
| `\"`     | double quote                            | "Don\'t"                           |
| `` \` `` | backtick(or "accent grace", new in ES6) | `` New in ES6: \\` strings. ``     |
| `\$`     | dollar sign (new in ES6)                | `New in ES6: ${interpolation}`     |
| `\uXXXX` | arbitary unicode code point             | "Use \\\\ to represent \\!"        |

### Template Strings

- motivation: express value in string
- Old way to make string: string concatenation
- New way: string templates (a.k.a, string interpolation), a shorthand way of injecting values into a string, wrapped around by backticks, e.g.,

```javascript
const msg = `hello ${who}`
```

inside a string template, the **dollar sign** becomes special character (you can escape it with a backslash): if it's followed by **a value** (here, value of variable `who`) **wrapped in curly braces**, that value is inserted into the string.

### Multiline Strings

way 1 as

```javascript
const multiline =
  "line1\n\
line2"
```

way 2 as

```javascript
const multiline = `line1
line2`
```

with both ways, **any indentation at the beginning of the line will be included**.

> Recommended way: string concatenation

### Numbers as Strings

numbers in quotation marks ain't numbers

## Booleans

JS allows any value to considered as "truthy" or "falsy", detailed in chapter05

## Symbols

- represents **unique** tokens
- created with `Symbol([description])`

## `null` and `undefined`

represent something that doesn't exist  
**The general rule of thumb** is

- `null` for programmers
- `undefined` reserved for JS, to indicate that something hasn't been given a value yet

## Objects

- a _constainer_ whose contents can be changed over time
- a literal syntax: curly braces (`{` and `}`), a empty object goes as

  ```javascript
  const obj = {}
  ```

- contents of an object are called **properties** (or members)
- properties consist of `(name,value)` pairs, where
  - name must be strings or symbols
  - values can be any type (including other objects)
- member access with
  - _member access operator_ "`.`" for valid identifier
  - _computed member access operator_ `[]` otherwise (e.g. property name is a string)
- **symbol properties are handled differently and are hidden by default in the console output**
- inside the curly braces, properties are separated by commas, and the name and value are separated by a colon
- delete a property from an object with the `delete` operator

## Number, String, and Boolean Objects

serve 2 purposes

- store special values (such as `Number.INFINITY`)
- provide functionality in the form of function (e.g., `toUpperCase()` for String)
- calling related functions with primitive types will implicitly convert the caller into their corresponding object form which will be discarded once the calling is done

## Arrays

- contents are order naturally, and keys are zero-based sequential numbers
- properties
  - size isn't fixed
  - elements ain't homogeneous
  - zero-based
- use square brackets to create array, with elements of the array separated by commas
- member access by the numeric index of elements inside square brackets
- Trailing Commas in Objects properties and Arrays is ok

```
const arr = [
  "One",
  "Two",
  "Three",
]

const o = {
  one: 1,
  two: 2,
  three: 3,
}
```

> If you assign an index that is equal to or larger than the length of the array, the size of the array will increase to accommodate the new element.

## Dates

detail in chapter15

## Regular Expressions

detailed in chapter17

## Map and Sets

detailed in chapter10

## Data Type Conversion

- String to Numbers
  - `Number` object constructor, where failure will return `NaN`
  - built-in `parseInt`/`parseFloat` with an optional radix (default as 10)
- to String: `toString()` method
- to Boolean: "not" operator (`!`) twice or `Boolean()` constructor
