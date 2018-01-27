class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }

  get userGear() { return this._userGear; }
  set userGear(value) {
    if(this._userGears.indexOf(value)<0) {
      throw new Error(`invalid gear: ${value}`);
    }

    this._userGear = value;
  } 

  shift(gear) {
    this.userGear = gear;
  }
}

const car1 = new Car();
const car2 = new Car();

car1.shift === Car.prototype.shift; // true
car1.shift('D');
//car1.shift('d'); // error
console.log(car1.userGear); // 'D'
console.log(car1.shift === car2.shift) // true

car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
console.log(car1.shift === Car.prototype.shift); // false
console.log(car1.shift === car2.shift); // false
car1.shift('d');
console.log(car1.userGear); // 'D'
