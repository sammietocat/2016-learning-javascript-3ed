
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

const car1 = new Car("Telsa", "Model S");
car1.shift('D');

// note the no need of ()
console.log(car1.userGear);

