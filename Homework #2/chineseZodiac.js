let animal1 = "Rat";
let animal2 = "Ox";
let animal3 = "Tiger";
let animal4 = "Rabbit";
let animal5 = "Dragon";
let animal6 = "Snake";
let animal7 = "Horse";
let animal8 = "Goat";
let animal9 = "Monkey";
let animal10 = "Rooster";
let animal11 = "Dog";
let animal12 = "Pig";

let inputYear = parseInt(prompt("Enter a year to find its Chinese Zodiac:"), 10);

if (inputYear) {
  let zodiacIndex = (inputYear - 4) % 12;
  let zodiac;

  if (zodiacIndex === 0) zodiac = animal1;
  else if (zodiacIndex === 1) zodiac = animal2;
  else if (zodiacIndex === 2) zodiac = animal3;
  else if (zodiacIndex === 3) zodiac = animal4;
  else if (zodiacIndex === 4) zodiac = animal5;
  else if (zodiacIndex === 5) zodiac = animal6;
  else if (zodiacIndex === 6) zodiac = animal7;
  else if (zodiacIndex === 7) zodiac = animal8;
  else if (zodiacIndex === 8) zodiac = animal9;
  else if (zodiacIndex === 9) zodiac = animal10;
  else if (zodiacIndex === 10) zodiac = animal11;
  else if (zodiacIndex === 11) zodiac = animal12;

  console.log(" If you were born in " + inputYear + " your Chinese Zodiac sign is " + zodiac);
  alert(" If you were born in " + inputYear + " your Chinese Zodiac sign is " + zodiac);
} else {
  console.log(" Please enter a valid year ");
  alert(" Please enter a valid year ");
}