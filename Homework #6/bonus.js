let recipeName = prompt("What is the name of the recipe?");
document.getElementById("recipeName").textContent = recipeName;
let numIngredients;
do {
    let input = prompt("How many ingredients does the recipe need?");
    numIngredients = parseInt(input, 10);
    if (isNaN(numIngredients)) {
        alert("Please enter a number for the number of ingredients the recipe needs.");
    }
} while (isNaN(numIngredients)); 

let ingredientList = document.getElementById("ingredientContainer");
let ingredientTable = document.getElementById("ingredientTable");
for (let i = 1; i <= numIngredients; i++) {
    let ingredient = prompt(`Enter the name of ingredient number ${i}:`);
    let listItem = document.createElement("li");
    listItem.textContent = ingredient;
    ingredientList.appendChild(listItem);

    let tableRow = document.createElement("tr");
    let numberCell = document.createElement("td");
    numberCell.textContent = i;
    tableRow.appendChild(numberCell);

    let ingredientCell = document.createElement("td");
    ingredientCell.textContent = ingredient;
    tableRow.appendChild(ingredientCell);
    ingredientTable.appendChild(tableRow);
};