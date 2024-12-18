function sumMaxMin(arr) {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (typeof current === 'number') {
      if (current > max) {
        max = current;
      }
      if (current < min) {
        min = current;
      }
    }
  }

  if (max === -Infinity || min === Infinity) {
    return 'No valid numbers in the array';
  }

  let sum = max + min;
  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

console.log(sumMaxMin([3, 5, 6, 8, 11]));
console.log(sumMaxMin([6, 'sanja', false, 10, 2, null]));
console.log(sumMaxMin([null,'sanja', true]));