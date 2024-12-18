function sumArray(numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
      let currentNumber = numbers[i];
      if (!validateNumber(currentNumber)) {
      alert("Error: Invalid numbers.");
      return;
      }
    sum += currentNumber;
  }
  alert("The sum of the numbers is: " + sum);
  console.log("The sum of the numbers is:", sum);
}

let numbers = [23, 50, 71, 19, 3];
sumArray(numbers);

function validateNumber(number) {
  let isValid = typeof number === "number" && isFinite(number);
  return isValid;
}

let invalidNumbers = [23, "sanja", 71, 19, 3];
sumArray(invalidNumbers);