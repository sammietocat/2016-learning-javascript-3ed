'use strict';

const obj = {
  foo: "bar"
};

Object.defineProperty(obj, 'foo', {
  writable: false
});

obj.foo = 3;
// TypeError: Cannot assign to read only property 'foo' of object '#<Object>'