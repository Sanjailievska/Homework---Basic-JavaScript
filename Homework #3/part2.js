function convertAge() {
    let age = parseInt(prompt("Enter your age:"));
    let type = prompt('Do you want to convert from "human to dog" or "dog to human"?');
  
    if (isNaN(age)) {
      alert("Please enter a valid number.");
      console.log("Invalid input for age: not a number");
      return;
    }
    let result;
    if (type === 'dog to human') {
      result = age * 7;
      alert(`${age} dog years is equal to ${result} human years.`);
      console.log(`${age} dog years is equal to ${result} human years.`);
    } else if (type === 'human to dog') {
      result = age / 7;
      alert(`${age} human years is equal to ${result} dog years.`);
      console.log(`${age} human years is equal to ${result} dog years.`);
    } else {
      alert('Invalid type. Please enter "dog to human" or "human to dog".');
      console.log('Invalid type. Please enter "dog to human" or "human to dog".');
    }
  }
  convertAge();