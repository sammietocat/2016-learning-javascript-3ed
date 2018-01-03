const o = {
  name: 'Wallace',
  speak() {
    //return `My name is ${this.name}!`;
    console.log(`My name is ${this.name}!`);
  },
}

o.speak(); // "My name is Wallace!

const speak = o.speak;
speak === o.speak; // true; both variables refer to the same function 
speak(); // "My name is undefined!"