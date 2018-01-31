const EventEmitter = require('events').EventEmitter;
class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }
  go() {
    const countdown = this; // this prevents changing of this in callbacks 
    const timeoutIds = [];
    return new Promise((resolve, reject) => {
      for (let i = countdown.seconds; i >= 0; i--) {
        timeoutIds.push(setTimeout(function () {
          if (countdown.superstitious && i === 13) {
            // clear all pending timeouts 
            timeoutIds.forEach(clearTimeout);
            return reject(new Error("DEFINITELY NOT COUNTING THAT"));
          }
          countdown.emit('tick', i);
          if (i === 0) resolve();
        }, (countdown.seconds - i) * 1000));
      }
    });
  }
}

function launch() {
  return new Promise((resolve, reject) => {
    console.log("Lift off!");
    setTimeout(() => resolve("In orbit!"), 2 * 1000); // a very fast rocket indeed
  });
}

const c = new Countdown(5).on('tick', i => console.log(i + '...'));
//const c = new Countdown(15, true).on('tick', i => console.log(i + '...'));

c.go().then(launch).then(msg => console.log(msg))
  .catch(err => console.error("Houston, we have a problem...."));