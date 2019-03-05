# Chapter 15. Date and Time

> A date without a time is implicitly 12:00 A.M. on that day.

## Dates, Time Zones, Timestamps, and the Unix Epoch

- Dates and times — as represented by seconds since **January 1, 1970, 00:00:00 UTC**
- All time zones are defined as offsets from Coordinated Universal Time (abbreviated UTC, a.k.a. Greenwich Mean Time (GMT))
- All `Date` instances are stored as a single number: the number of **milliseconds** (not seconds) since the Unix Epoch

## Constructing Date Objects

4 ways by invoking

```js
new Date([arg])
```

|     Arguments | Description                   |
| ------------: | :---------------------------- |
|          none | current date                  |
|   millisecond | w.r.t Unix Epoch              |
|        string | formatted string to parse     |
| negative date | to get date before Unix Epoch |

**all parameters fed into the constructor are taken as local time**

## dayjs

- A date library
- Install with `yarn`

  ```bash
  yarn add dayjs --dev
  ```

- Reference it by

  ```javascript
  const dayjs = require("dayjs")
  ```

## Constructing Dates

A date constructed without an explicit time zone depends on where the date is being constructed

### On the Server

- Always either using UTC, or
- Explicitly specifying the time zone (demo as `dayjs-timezone.js`)

### In the Browser

JS's default behavior is appropriate

## Transmitting Dates

- JavaScript `Date` instances store the date as a numeric offset from the UTC, Unix Epoch, it's generally safe to pass `Date` objects back and forth
- 2 ways
  - using JSON (see `transmission1.js`)
  - use the numeric value of the date (see `transmission2.js`)

## Displaying Dates

using the `format()` by `dayjs` (see `dayjs-fmt.js`)

## Date Components

year, month, day, .... (see `components.js`)

## Comparing Dates

use JavaScript's built-in comparison operators (demo as `cmp.js`)

## Date Arithmetic

substraction, addition, etc. (see `arithmetics.js` and `arithmetics-dayjs.js`)

## User-Friendly Relative Dates by `dayjs`

see [`relative-dates.js`](relative-dates.js)
