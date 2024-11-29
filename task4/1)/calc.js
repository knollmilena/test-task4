class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      return "Error: второй аргумент не должен быть равен 0";
    }
    return a / b;
  }
}

const result = new Calculator();

console.log(result.add(2, 3));
