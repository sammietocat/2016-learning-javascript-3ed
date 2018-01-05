# Chapter 15. Date and Time  

> A date without a time is implicitly 12:00 A.M. on that day.  

## Dates, Time Zones, Timestamps, and the Unix Epoch  
+ Dates and times—as represented by seconds since **January 1, 1970, 00:00:00 UTC**  
+ All time zones are defined as offsets from Coordinated Universal Time (abbreviated UTC, a.k.a. Greenwich Mean Time (GMT))  
+ All `Date` instances are stored as a single number: the number of **milliseconds** (not seconds) since the Unix Epoch  

## Constructing Date Objects  
4 ways as  

arguments | description  
---------:|:-----------
none      | current date 
millisecond | w.r.t Unix Epoch
string    | formatted string to parse  
negative date | to get date before Unix Epoch 

all parameters fed into the constructor are taken as local time

## Moment.js  
+ install with `npm`  
```bash
npm install --save moment-timezone
```
+ reference it by  
```javascript
const moment = require('moment-timezone')
```

## Constructing Dates  
A date constructed without an explicit time zone depends on where the date is being constructed

### On the Server  
+ always either using UTC  
+ explicitly specifying the time zone  
demo as `moment-date.js`  

### In the Browser
JS's default behavior is appropriate

## Transmitting Dates  
+ JavaScript Date instances store the date as a numeric offset from the UTC, Unix Epoch, it's generally safe to pass Date objects back and forth  
+ 2 ways  
  - using JSON (see `transmission.js`) 
  - use the numeric value of the date (see `transmission2.js`)  

## Displaying Dates  
using the `format()` by `Moment.js` (see `moment-fmt.js`)  

## Date Components  
year, month, day, .... (see `components.js`)  

## Comparing Dates  
use JavaScript's built-in comparison operators  

## Date Arithmetic  
substraction, addition, etc. (see `arithmetics.js` and `arithmetics-moment.js`)  

## User-Friendly Relative Dates by `Moment.js`  
see `rel-dates.js`  
