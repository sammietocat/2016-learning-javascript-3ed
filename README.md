# Learning JavaScript, 3rd Edition    

## Overview  
This repository serves to hosting source codes for examples in book [Learning JavaScript, 3rd Edition](https://www.amazon.cn/JavaScript%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97-%E7%AC%AC3%E7%89%88-%E7%BE%8E-Ethan-Brown-%E5%B8%83%E6%9C%97/dp/B073L8PGSD/ref=sr_1_1?s=books&ie=UTF8&qid=1510117364&sr=1-1&keywords=Learning+JavaScript%2C+3rd+Edition&dpID=51uMzRdcOHL&preST=_SX258_BO1,204,203,200_QL70_&dpSrc=srch)

## Contents  
+ [Foreword](#foreword)  
+ [Chapter 01: Your First Application](chapter01/README.md)    
+ [Chapter 02: JavaScript Development Tools](chapter02/README.md)    
+ [Chapter 03: Literals, Variables, Constants, and Data Types](chapter03/README.md)    
+ [Chapter04. Control Flow](chapter04/README.md)    
+ [Chapter05. Expressions and Operators](chapter05/README.md)  
+ [Chapter09. Objects and Object-Oriented Programming](chapter09/README.md)  

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


## Progress  
+ [x] Chapter01. Your First Application  
+ [x] Chapter02. JavaScript Development Tools  
+ [x] Chapter03. Literals, Variables, Constants, and Data Types  
+ [ ] Chapter04. Control Flow  
+ [ ] Chapter05. Expressions and Operators  
+ [ ] Chapter09. Objects and Object-Oriented Programming  
