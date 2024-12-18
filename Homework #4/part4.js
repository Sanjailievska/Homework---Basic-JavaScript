function filterOddEven(array, type) {
    let result = [];
    if (type === "even") {
        for (let num of array) {
            if (num % 2 === 0) {
                result.push(num);
            }
        }
        return result;
    } else if (type === "odd") {
        for (let num of array) {
            if (num % 2 !== 0) {
                result.push(num);
            }
        }
        return result;
    }
}

function printNumbers() {
    const numbers = Array.from({ length: 20 }, (value, i) => i + 1);
    const oddNumbers = filterOddEven(numbers, "odd").join(" ");
    const evenNumbers = filterOddEven(numbers, "even");

    console.log(oddNumbers);

    for (let even of evenNumbers) {
        console.log(even);
    }
}
printNumbers();