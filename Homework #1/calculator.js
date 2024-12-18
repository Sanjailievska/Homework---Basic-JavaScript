let numberOfPhones = 30;
let phonePrice = 119.95;
let taxRate = 5;
let taxPerPhone = (phonePrice * taxRate) / 100;
let pricePerPhoneWithTax = phonePrice + taxPerPhone;
let totalPrice = pricePerPhoneWithTax * numberOfPhones;
console.log("Tax per phone: $" + taxPerPhone);
console.log("Price per phone with tax: $" + pricePerPhoneWithTax);
console.log("Total price for 30 phones including tax is: $" + totalPrice);