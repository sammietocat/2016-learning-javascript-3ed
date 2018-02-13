# Chapter 20. Node  

## Node Fundamentals  
+ browser-based JS uses APIs that are specific to the browser  
+ node-based JS has extra specific APIs and no DOM  

## Modules  
> **DEF**: Modules are a mechanism for **packaging** and **namespacing** code. Namespacing is a way to prevent name collisions

+ `module` is a special object that Node makes available to implement modules  
+ Whatever you assign to `module.exports` will be what is exported from the module (demo as `modules/amanda.js` and `modules/tyler.js`)  
+ Modules can export a value of any type  
+ **common use case**: export an object with function properties (demo as `modules2/amanda.js`), an equivalent shorthand syntax is using a special variable simply called `exports`   
> The `exports` shorthand **only** works for exporting objects; if you want to export a function or some other value, you must use `module.exports`. Furthermore, you can't meaningfully mix the two: use one or the other   

## Core Modules, File Modules, and npm Modules  

module  | description | string passed to `require`  | examples  
--------|-------------|-----------------------------|---------
Core    | reserved module names that are provided by Node itself, such as `fs` and `os` | doesn't start with `/`, `./`, or `../`  | `require('fs')`, `require('os')`, `require('http')`, `require('child_process')` 
File  | modules created by users and assigned to `module.exports` in files  | start with `/`, `./`, or `../`  | `require('./debug.js')`, `require('/full/path/to/module.js')`, `require('../a.js')`, `require('../../a.js')` 
npm | file modules that are located in a special directory called `node_modules` | Not a core module and doesn't start with `/`, `./`, or `../` | `require('debug')`, `require('express')`, `require('chalk')`, `require('koa')`, `require('q')`  

> Some core modules, such as `process` and `buffer`, are **global**, are always available, and do not require an explicit `require` statement  

### npm modules  
+ If you require some module `x` (where x is not a core module), Node will
look in the current directory for a subdirectory called `node_modules`. If it finds it, it will look for `x` in that directory. Otherwise, it will go up level by level until finding the module or reaching the root  
+ For most projects, you'll have a single `node_modules` directory in the application root  
+ things should be added or removed by `npm` only   
+ don't put user-defined modules in `node_modules` directory    

## Customizing Modules with Function Modules  
+ **a common pattern**: a module that exports a function that's intended to be invoked immediately  
+ Node **only ever** imports any given module **once** (every time a Node app is run)  

## Filesystem Access  

method | description  
------:|:-----------
`fs.writeFile`  | create a file in current working directory (see `fs-access/app.js`). The default string encoding is **UTF-8** (a Unicode encoding)
`path.join`     | join directory elements using whatever directory separator is appropriate for the operating system (demo as `fs-access/dirname-demo/app2.js`)  
`fs.readFile`   | read the content of a file (demo as `fs-access/read{1,2}.js`). If the encoding is unspecified, it will return a buffer containing raw binary data
`fs.readdir`    | list the files in a directory (demo as `readdir.js`) 
`fs.unlink`     | delete files
`fs.rename`     | rename files
`fs.stat`       | get information about files 

> + variable `__dirname` is always set to the directory in which the source file resides (demo as `fs-access/dirname-demo/app2.js`)  
> + All of the functions in `fs` have synchronous equivalents (that end in "Sync"), and error handling is accomplished with exceptions for these synchronous versions

## Process 
+ Every running Node program has access to a variable called `process` that allows it to get information about and control its own execution  
+ calling `process.exit([exitCode])` in case of fatal errors, where `exitCode` as 0 means **no error**, and indicates an error otherwise   
+ The command-line arguments passed to the running programm are contained in the `process.argv` array (demo as `proc/linecount{1,2}.js`), where  
  - the 1st element is the interpreter  
  - the 2nd element is the full path to the script being executed  
  - the remainings are parameters 
+ `process.env` helps to access to environment variables (demo `debug.js`)    

> Environment variables are named system variables that are primarily used
for command-line programs. Environment variables are often used to configure the behavior of some aspect of your program (without your having to provide the values on the command line every time you execute the program).

+ `process.cwd` tells you what the current working directory is, and `process.chdir` allows you to change it (demo as `proc/dir/app.js`)  

## Operating System  
The `os` module provides some platform-specific information about the computer on which the app is running (demo as `os.js`)

## Child Processes  
+ The `child_process` module allows your app to run other programs  
+ 3 primary functions  

function    | description 
-----------:|:-----------
`exec`      | invokes a *shell* => can run any commands available in shells (demo as `exec.js`)
`execFile`  |  runs an executable  
`fork`      | execute other Node scripts 

## Streams   
> **DEF**: A stream is an object that deals with data, as the name implies, in a stream

+ 3 types of streams  
  - read streams (demo as `rs.js`)  
  - write streams (demo as `ws.js`) 
  - duplex streams  
+ examples are  
  - user-typing at keyboard  
  - a web service keeping back-and-forth communication with a client  
  - file access  
+ APIs  

function  | description 
---------:|:-----------
`fs.createWriteStream`  | creates a stream for writing  
`WriteStream.write`     | send data to stream  
`WriteStream.end`       | close the write stream, can take an optinal data argument to send data to stream. Once closed, further writing to the stream will trigger errors 
`fs.createReadStream`   | create a stream to read data 
`rs.on('data',dataCB())`  | read data 
`rs.on('end',dataCB())`   | callback for done reading 

+ **piping** takes the data coming out of a read stream and immediately write it to a write stream (demo as `streams/piping.js`)    

## Web Servers  
+ The `http` module (and its secure counterpart, the `https` module) exposes a `createServer` method that creates a basic web server. All you have to do is provide a callback function that will handle incoming requests  
+ At the heart of Node's web server is the callback function that you provide, that will respond to all incoming requests. It takes two arguments,  
  - `IncomingMessage` object (often abbreviated req): contains all information about the HTTP request  
  - `ServerRequest` object (often abbreviated res): contains properties and methods to control the response that will be sent back to the client (usually a browser)

(demo as `web/app{1,2}.js`)  




