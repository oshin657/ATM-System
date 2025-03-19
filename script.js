let balance = 100;
const correctPin = "1234";

function login() {
  const pin = document.getElementById("pin").value;
  if (pin === correctPin) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("Incorrect PIN!");
  }
}

function withdraw() {
  let amount = prompt("Enter the amount: ");
  amount = parseFloat(amount);
  if (amount > 0 && amount <= balance) {
    balance = balance - amount;
    document.getElementById("balance").innerText = balance;
    alert("Withdraw successful!");
  } else {
    alert("Invalid amount or insufficient balance.");
  }
}

function deposit() {
  let amount = prompt("Enter amount to deposit:");
  amount = parseFloat(amount);
  if (amount > 0) {
    balance = balance + amount;
    document.getElementById("balance").innerText = balance;
    alert("Deposit successful!");
  } else {
    alert("Invalid amount.");
  }
}

function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("login-screen").style.display = "block";
}
