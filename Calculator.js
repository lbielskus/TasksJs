class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  validate() {
    if (typeof this.num1 !== "number") {
      return `ERROR: pirmasis skaicius turi buti skaiciaus tipo`;
    }

    if (isFinite(this.num1) === false) {
      return `ERROR: pirmasis skaicius negali buti ${this.num1}.`;
    }

    if (typeof this.num2 !== "number") {
      return `ERROR: antrasis skaicius turi buti skaiciaus tipo`;
    }

    if (!isFinite(this.num2)) {
      return `ERROR: antrasis skaicius negali buti ${this.num2}.`;
    }
  }
  sum() {
    if (!this.validate()) {
      const sum = this.num1 + this.num2;
      console.log("Sum: ", sum);
    } else {
      console.log(this.validate());
    }
  }

  subtraction() {
    if (!this.validate()) {
      const subtraction = this.num1 - this.num2;
      console.log("Subtraction: ", subtraction);
    } else {
      console.log(this.validate());
    }
  }

  multiplication() {
    if (!this.validate()) {
      const multiplication = this.num1 * this.num2;
      console.log("Multiplication: ", multiplication);
    } else {
      console.log(this.validate());
    }
  }

  division() {
    if (!this.validate()) {
      if (this.num2 !== 0) {
        const division = this.num1 / this.num2;
        console.log("Division: ", division);
      } else {
        console.log("Division from 0 unavaiable");
      }
    } else {
      console.log(this.validate());
    }
  }
}

let test = new Calculator(25, 5);
test.sum();
test.subtraction();
test.multiplication();
test.division();
