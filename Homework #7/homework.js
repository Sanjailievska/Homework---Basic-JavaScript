function createTable() {
  let rows = getUserInput("Enter the number of rows:");
  let columns = getUserInput("Enter the number of columns:");

  if (!validateInput(rows, columns)) {
    alert("Please enter numbers for rows and columns.");
    return;
  }

  let table = generateTable(rows, columns);
  document.body.appendChild(table);
}

function getUserInput(message) {
  return parseInt(prompt(message));
}

function validateInput(rows, columns) {
  return !isNaN(rows) && !isNaN(columns) && rows > 0 && columns > 0;
}

function generateTable(rows, columns) {
  let table = document.createElement("table");

  for (let rowIndex = 1; rowIndex <= rows; rowIndex++) {
    let row = document.createElement("tr");

  for (let columnIndex = 1; columnIndex <= columns; columnIndex++) {
    let cell = document.createElement("td");
  
    cell.textContent = `Row-${rowIndex} Column-${columnIndex}`;
    row.appendChild(cell);
  }
    table.appendChild(row);
  }
  return table;
}
createTable();