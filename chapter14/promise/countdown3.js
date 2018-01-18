function countdown(seconds) {
  return new Promise((resolve, reject) => {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(() => {
        if (i === 5) return reject(new Error("DEFINITELY NOT COUNTING THAT"));
        if (i > 0) console.log(i + '...');
        else resolve(console.log("GO!"));
      }, (seconds - i) * 1000);
    }
  });
}

const p = countdown(5);
p.then(() => console.log("countdown completed successfully"))
  .catch(err => console.log(`countdown experienced an error: ${err.message}`));

// UnhandledPromiseRejectionWarning: Unhandled promise rejection will be triggered by 
// p.then(() => console.log("countdown completed successfully"))
// p.catch(err => console.log(`countdown experienced an error: ${err.message}`));