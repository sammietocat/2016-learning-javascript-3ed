{
  // outer block
  let x = {
    color: "blue"
  };
  let y = x; // y and x refer to the same object
  let z = 3; {
    // inner block
    let x = 5;
    console.log(x); // outer x now masked

    // logs "blue"; object pointed to by
    // y (and x in the outer scope) is
    // still in scope
    console.log(y.color);
    y.color = "red";

    console.log(z); // logs 3; z has not been masked
  }
  // logs "red"; object modified in
  // inner scope
  console.log(x.color);
  // logs "red"; x and y point to the
  // same object
  console.log(y.color);

  console.log(z); // logs 3; z has not been masked
}