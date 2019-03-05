const dayjs = require("dayjs")
require("dayjs/locale/es")

const d = new Date(Date.UTC(2018, 0, 5))
console.log(d)
// 2018-01-05T00:00:00.000Z

const d2 = dayjs("2018-01-05 20:12")
  .toDate()
  .toLocaleString("en-us", { timeZone: "Asia/Shanghai" })
console.log(d2)
// 1/5/2018, 8:12:00 PM
