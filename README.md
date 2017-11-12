# Learning JavaScript, 3rd Edition    

## Overview  
This repository serves to hosting source codes for examples in book [Learning JavaScript, 3rd Edition](https://www.amazon.cn/JavaScript%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97-%E7%AC%AC3%E7%89%88-%E7%BE%8E-Ethan-Brown-%E5%B8%83%E6%9C%97/dp/B073L8PGSD/ref=sr_1_1?s=books&ie=UTF8&qid=1510117364&sr=1-1&keywords=Learning+JavaScript%2C+3rd+Edition&dpID=51uMzRdcOHL&preST=_SX258_BO1,204,203,200_QL70_&dpSrc=srch)

## Contents  
+ [Foreword](#foreword)  
+ [Chapter 01: Your First Application](#chapter01)    
+ [Chapter 02: JavaScript Development Tools](#chapter02)    

<a name="foreword"></a>
## Foreword  
For convenince, I have configure an runnable nodejs container as `Dockerfile` for those faimilar with docker. **This is an optional configuration to run the codes in the book!**.

### Set up the nodejs container [Optional]  
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
After all above, you should get in a nodejs container with `nodejs` installed, and your current working directory in the host machine will be mounted to the `~/Workspaces` directory (set by the value of flag `-v` in `bootstrap.sh`) in the container. Go ahead and play with it~  

<a name="chapter01"></a>
## Chapter 01: Your First Application  

<a name="chapter02"></a>
## Chapter 02: JavaScript Development Tools  
In this chapter, we're learning about Git and other develop tools.  

## Work in Progress  
+ `Drawing Graphics Primitive` in chapter01  
