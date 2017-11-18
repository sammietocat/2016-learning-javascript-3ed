# Learning JavaScript, 3rd Edition    

## Overview  
This repository serves to hosting source codes for examples in book [Learning JavaScript, 3rd Edition](https://www.amazon.cn/JavaScript%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97-%E7%AC%AC3%E7%89%88-%E7%BE%8E-Ethan-Brown-%E5%B8%83%E6%9C%97/dp/B073L8PGSD/ref=sr_1_1?s=books&ie=UTF8&qid=1510117364&sr=1-1&keywords=Learning+JavaScript%2C+3rd+Edition&dpID=51uMzRdcOHL&preST=_SX258_BO1,204,203,200_QL70_&dpSrc=srch)

## Contents  
+ [Foreword](#foreword)  
+ [Chapter 01: Your First Application](#chapter01)    
+ [Chapter 02: JavaScript Development Tools](#chapter02)    
+ [Chapter 03: Literals, Variables, Constants, and Data Types](#chapter03)    

<a name="foreword"></a>
## Foreword  
For convenince, I have configure an runnable nodejs container as `Dockerfile` for those faimilar with docker. **This is an optional configuration to run the codes in the book!**.

### Set up the Node container [Optional]  
1. Install `docker`   
2. Download the `Dockerfile` and `bootstrap.sh` in the repository in some directory, says `~/hello` you like   
3. Build the container by running in the `~/hello`      
```base
docker build -t node:lj .
```  
4. Add the executable permission to script `bootstrap.sh` if necessary   
5. Run   
```
./bootstrap
```  
After all above, you should get in a Node image tagged as `nodejs:9.1` installed, and as specified in `bootstrap.sh`   
+ your current working directory in the host machine will be mounted to the `/home/node/app` directory (set by flag `-v`) in the container. 
+ port 3000 in host will mapped port 3000 in container  
+ you will run as a user named `node` in the container with your working directory being `/home/node/app`  
+ the container will be removed once exit  
Go ahead and play with it~  

<a name="chapter01"></a>
## Chapter 01: Your First Application  

<a name="chapter02"></a>
## Chapter 02: JavaScript Development Tools  
Recommended tools are  
+ git: version control   
+ terminal   
+ npm: package management by means of Node   
  - 2 levels: global and local  
  - global packages are usually command-line tools   
  - local packages are project specific  
  - package installation by `npm istall`  
  - dependencies called module of the project are recorded in `package.json` in the project root  
  - 2 kinds of dependencies: regular and dev, where dev isn't necessary for running the app  
  - `npm install` with flag `--save`/`--saveDev` to add dep record to `package.json`  
+ babel: transcompilers to translate ES6 to ES5  
+ linter: static syntax checker  

<a name="chapter03"></a>
## Chapter 03: Literals, Variables, Constants, and Data Types  
### Variables and Constants  
+ variables is essentially a named value  
+ keyword `let` declares a variable and can only do it once  
+ variable uninitialized explicitly are evaluated as `undefined`  
+ `let` can declare multiple variables with the same statement  
+ a *constant* holds a value and is unchangeable after initialization  
+ *constant* are named with all uppercase letters and underscores conventionally  
+ variables vs constants  
 constant | variable 
:--------:|:--------:  
 no accidentally change | loop control
 | value needs changing over time

### Identifier Names  
#### naming rules  
+ start with letters/$/underscore(\_)  
+ consists of letters/$/underscore  
+ unicode chars is allowed  
+ non-reserved word  
#### convention  
+ camel case: e.g., `camelCase`  
+ snake case: e.g., `snake_case`  
+ addons  
  - no starting with capital letter except for classes  
  - usually, starting with 1 or 2 underscores means special or "internal" variables  
  - starting with $ means jQuery-wrapped objects if jQuery is in use  

### Literals  
#### Def  
value provided directly in program  
#### 2 types  
+ numeric literals (e.g., 22)   
+ string literal (e.g., "hello")  
#### difference between literals and identifiers  
literals (except for number) have **quotation marks**, but not for identifiers  
### Primitive Types and Objects  
values are either *primitive* or *object*  
#### 6 primitive types  
+ Number   
+ String  
+ Boolean  
+ Null  
+ Undefined  
+ Symbol  

primitive types are **immutable**, **which doesn't mean their contents cannot be changed**.
### objects  
used to construct custom data types.  
built-in object types are  
+ Array  
+ Date  
+ RegExp  
+ Map and WeakMap  
+ Set and WeakSet  
+ corresponding object types wrapper for primitive types, such as `Numbers`, `String` and `Boolean`, etc  
#### Numbers  
+ numbers are necessarily approximations  
+ only one numberic data type  
+ 4 numeric literals: decimal, binary, octal and hexadecimal  
+ special values as placeholders: `Infinity`, `Nan` (not a number)  
+ examples of useful properties of `Number` object  
  - `Number.EPSILON`: the smallest value that can be added to 1 to get a distinct number  
  - `Number.MAX_SAFE_INTEGER`: the largest representable integer  
  - `Number.MAX_VALUE`: the largest representable number    
#### Strings  
simply unicode text data.  
string literals are represented with single quotes, double quotes or backticks  
##### Escaping  
+ double/single quotes within single/double quotes  
+ escape quotation marks with a backslash (\)  
##### Special Characters  
nonprintable chars  
Code | Description 
:---:|:-----------:
\n | newline  
\t | tab 
\' | single quote 
\" | double quote 
\$ | dollar sign 
\uXXXX | arbitary unicode code point  
##### Template Strings  
###### Old way to make string: string concatenation  
###### New way: string templates   
a.k.a, string interpolation, a shorthand way of injecting values into a string, wrapped around by backticks, e.g.,  
```javascript
const msg=`hello ${who}`
```
inside a string template, the **dollar sign** becomes special character (you can escape it with a backslash): if it’s followed by **a value wrapped in curly braces**, that value is inserted into the string.
##### Multiline Strings  
way 1 as  
```javascript
const multiline = "line1\n\
line2"
```
way 2 as  
```javascript
const multiline = `line1
line2`
```
with both ways, any indentation at the beginning of the line will be included.  
Recommended way: string concatenation  
##### Numbers as Strings  
numbers in quotation marks ain't number  
#### Booleans  
JS allows any valu to considered as "truthy" or "falsy".  
#### Symbols  
represents unique tokens  
#### `null` and `undefined`  
represent something that doesn't exist  
**The general rule of thumb** is   
+ `null` for programmers  
+ `undefined` reserved for JS, to indicate that something hasn’t been given a value yet  
#### Objects  
+ a *constainer* whose contents can be changed over time  
+ a literal syntax: curly braces ({ and }), a empty object goes as     
```javascript
const obj = {};
```
+ contents of an object are called **properties** (or members)  
+ properties consist of `(name,value)` pairs  
+ property names must be strings or symbols, and values can be any type (including other objects)  
+ member access with *member access operator* `.` for valid identifier, and *computed member access operator* `[]` otherwise (e.g. property name is a string)  
+ symbol properties are handled differently and are hidden by default  
+ Inside the curly braces, properties are separated by commas, and the name and value are separated by a colon   
+ delete a property from an object with the `delete` operator  
##### Number, String, and Boolean Objects  
serve 2 purposes  
+ store special values (such as Number.INFINITY)  
+ provide functionality in the form of function  
##### Arrays  
+ contents are order naturally, and keys are numeric and sequential  
+ properties  
  - size isn't fixed  
  - elements ain't homogeneous  
  - zero-based  
+ use square brackets to create array, with the elements of the array separated by commas  
+ member access by the numeric index of elements inside square brackets  
##### Trailing Commas in Objects and Arrays is ok  
##### Dates  
##### Regular Expressions  
##### Map and Sets  
#### Type Conversion  
##### to Numbers  
+ `Number` object constructor  
+ built-in `parseInt`/`parseFloat`  
##### to String  
`toString()` method  
##### to Boolean  
"not" operator (`!`) twice  

## Progress  
+ [x] Chapter01. Your First Application  
+ [x] Chapter02. JavaScript Development Tools  
+ [x] Chapter03. Literals, Variables, Constants, and Data Types  
