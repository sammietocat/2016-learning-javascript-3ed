//'use strict';

const obj = {
  foo: "bar"
};

Object.defineProperty(obj, 'name', {
  value: 'Cynthia',
});
Object.defineProperty(obj, 'greet', {
  value: function () {
    return `Hello, my name is ${this.name}!`;
  }
});

console.log(obj);
console.log(obj.name);
console.log(obj.greet());