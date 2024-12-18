function createFullNames(firstNames, lastNames) {
  let fullNames = []; 
  
  for (let i = 0; i < firstNames.length; i++) {
    fullNames.push((i + 1) + ". " + firstNames[i] + " " + lastNames[i]);
  }
  return fullNames;  
}

let firstNames = ["Bob", "Jill"];
let lastNames = ["Gregory", "Wurtz"];
let fullNames = createFullNames(firstNames, lastNames);

for (let i = 0; i < fullNames.length; i++) {
  console.log(fullNames[i]);
}