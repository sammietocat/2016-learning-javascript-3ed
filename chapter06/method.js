const o = {
  name: 'Wallace', // primitive property
  /* es5 way:
  bark: function () {
    //return 'Woof!';
    console.log('Woof!');
  }, // function property (method)
  */
  // es6 way:
  bark() {
    console.log('Woof!');
  }
}

o.bark();