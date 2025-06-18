let a = parseFloat(prompt("enter first number :"));
let b = parseFloat(prompt("enter second number :"));
let operator = prompt("enter operator");

let rand = Math.random();
let result;

if (rand < 0.1) {
  // 10  chance for wrong result
  console.log("FAULTY MODE ACTIVATED :");

  if (operator === "+ ") {
    result = a - b;
  } else if (operator === "-") {
    result = a * b;
  } else if (operator === "/") {
    result = a * b + 2;
  } else {
    result = "Invalid operation ";
  }
} else {
  // 90% chance for coreect answer
  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "/") {
    result = a / b;
  } else if (operator === "*") {
    result = a * b;
  } else {
    result = " Invalid Operator ";
  }
}
console.log("Result :", result);