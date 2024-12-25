let allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach(function(paragraph) {
paragraph.textContent = "I changed this paragraph";
console.log(paragraph);
});

let allHeaders = document.querySelectorAll("h1, h3");
allHeaders.forEach(function(header) {
header.textContent = "I changed this header";
console.log(header);
});