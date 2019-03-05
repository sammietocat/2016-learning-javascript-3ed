const dayjs = require("dayjs")
const advancedFormat = require("dayjs/plugin/advancedFormat")

dayjs.extend(advancedFormat) // enable the 10th numbering day

const d = new Date(Date.UTC(1930, 4, 10))
// these show output for someone in Asia/Shanghai
console.log(d.toLocaleDateString()) // "1930-5-10"

console.log(d.toLocaleTimeString()) // 08:00:00
console.log(d.toTimeString()) // 08:00:00 GMT+0800 (CST)
console.log(d.toUTCString()) // Sat, 10 May 1930 00:00:00 GMT

console.log(dayjs(d).format("YYYY-MM-DD")) // 1930-05-10
console.log(dayjs(d).format("YYYY-MM-DD HH:mm")) // 1930-05-10 08:00
console.log(dayjs(d).format("YYYY-MM-DD HH:mm Z")) // 1930-05-10 08:00 +08:00
console.log(dayjs(d).format("YYYY-MM-DD HH:mm [UTC]Z")) // 1930-05-10 08:00 UTC+08:00

console.log(dayjs(d).format("dddd, MMMM [the] Do, YYYY")) // Saturday, May the 10th, 1930

console.log(dayjs(d).format("h:mm a")) // 8:00 am
