let numbers = [1, 5, 10];
let numberList = document.getElementById('numbers');
let sum = 0;
let equation = '';
  
numbers.forEach((number, index) => {
let listItem = document.createElement('li');
listItem.textContent = number;
numberList.appendChild(listItem);

  sum += number;
  equation += number;
  if (index < numbers.length - 1) {
  equation += ' + ';
  }
});

document.getElementById('sum').textContent = `Sum: ${sum}`;
console.log(`Sum: ${sum}`);

document.getElementById('equation').textContent = `Equation: ${equation} = ${sum}`;
console.log(`Equation: ${equation} = ${sum}`); 