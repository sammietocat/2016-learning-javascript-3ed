const dayjs = require("dayjs")

const m = dayjs() // now

// m is now three days in the future
console.log(m.add(3, "day").toDate())

// m is now two years minus three days in the past
console.log(m.subtract(2, "year").toDate())

const m2 = dayjs() // reset
console.log(m2.toDate())

// m is now Jan 1 of this year
console.log(m2.startOf("year").toDate())

// m is now Jan 31 of this year
console.log(m2.endOf("month").toDate())

// chaining version
const m3 = dayjs()
  .add(10, "hours")
  .subtract(3, "days")
  .endOf("month")
console.log(m3.toDate())
