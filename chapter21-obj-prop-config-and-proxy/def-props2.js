'use strict';

const obj = {
  foo: "bar"
};

Object.defineProperty(obj, 'color', {
  get: function () {
    return this.color;
  },
  set: function (value) {
    this.color = value;
  },
});