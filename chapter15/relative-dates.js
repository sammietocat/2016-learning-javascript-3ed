const dayjs = require("dayjs")
const relativeTime = require("dayjs/plugin/relativeTime")

dayjs.extend(relativeTime)

console.log(
  dayjs()
    .subtract(10, "second")
    .fromNow()
) // a few seconds ago

console.log(
  dayjs()
    .subtract(44, "second")
    .fromNow()
) // a few seconds ago

console.log(
  dayjs()
    .subtract(45, "second")
    .fromNow()
) // a minute ago

console.log(
  dayjs()
    .subtract(5, "minute")
    .fromNow()
) // 5 minute ago

console.log(
  dayjs()
    .subtract(44, "minute")
    .fromNow()
) // 44 minute ago

console.log(
  dayjs()
    .subtract(45, "minute")
    .fromNow()
) // an hour ago

console.log(
  dayjs()
    .subtract(5, "hour")
    .fromNow()
) // 4 hour ago

console.log(
  dayjs()
    .subtract(21, "hour")
    .fromNow()
) // 21 hour ago

console.log(
  dayjs()
    .subtract(22, "hour")
    .fromNow()
) // a day ago

console.log(
  dayjs()
    .subtract(344, "day")
    .fromNow()
) // 344 day ago

console.log(
  dayjs()
    .subtract(345, "day")
    .fromNow()
) // a year ago
