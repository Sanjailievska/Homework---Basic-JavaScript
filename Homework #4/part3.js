function combineStrings(array) {
    let result = ""; 
    
    for (let i = 0; i < array.length; i++) {
        result += array[i] + " ";
    }
    return result
}

let inputArray = ["Hello", "there", "students", "of", "SEDC", "!"];
let output = combineStrings(inputArray);
console.log(output);