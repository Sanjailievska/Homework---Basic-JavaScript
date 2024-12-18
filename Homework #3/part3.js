function atmWithdrawal() {
    let accountBalance = 2000;
    let withdrawalAmount = parseFloat(prompt("Enter the amount you want to withdraw:"));

  if (withdrawalAmount > accountBalance) {
    alert("Not enough money")
    console.log("Attempted to withdraw: " + withdrawalAmount + ". Account balance is: " + accountBalance);
  } else {
    accountBalance -= withdrawalAmount;
    alert(`You have withdrawn $${withdrawalAmount}. Your remaining balance is $${accountBalance}.`);
    console.log("Withdrawal successful: $" + withdrawalAmount);
    console.log("Remaining balance: $" + accountBalance);
  }
} 
atmWithdrawal();