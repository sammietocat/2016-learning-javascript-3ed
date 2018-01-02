class InsurancePolicy {}
class Car {}

function makeInsurable(o) {
  o.addInsurancePolicy = function (p) {
    this.insurancePolicy = p;
  }
  o.getInsurancePolicy = function () {
    return this.insurancePolicy;
  }
  o.isInsured = function () {
    return !!this.insurancePolicy;
  }
}

// the wrong way: 
// makeInsurable(Car);
// const car1 = new Car();
// car1.addInsurancePolicy(new InsurancePolicy()); // error

// the right way:
const car1 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());

// make every car insurable:
makeInsurable(Car.prototype);
const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy());