// Part 1: Variables + Conditionals
let discount = 0.1; // 10% discount
let isWeekend = true;

if (isWeekend) {
  console.log("🎉 Weekend discount active!");
} else {
  console.log("Weekday shopping – no discount.");
}

// Part 2: Custom Functions
function calculateTotal(prices) {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  if (isWeekend) sum = sum - sum * discount; // apply discount conditionally
  return sum;
}

function formatGreeting(name, age) {
  return `Hello ${name}, you are ${age} years old!`;
}

// Part 3: Loops
let cartItems = ["Milk", "Bread", "Eggs", "Coffee"];
let cartPrices = [3, 2, 5, 4];

// Add items to DOM with a loop
const cartList = document.getElementById("cart");
for (let i = 0; i < cartItems.length; i++) {
  let li = document.createElement("li");
  li.textContent = `${cartItems[i]} - $${cartPrices[i]}`;
  cartList.appendChild(li);
}

// Another loop example: countdown with while
function startCountdown() {
  let num = 5;
  let countdownText = "";
  while (num > 0) {
    countdownText += num + "... ";
    num--;
  }
  countdownText += "🚀 Lift off!";
  document.getElementById("countdown").textContent = countdownText;
}

// Part 4: DOM Interactions
// 1. Greet user
document.getElementById("greetBtn").addEventListener("click", () => {
  let name = document.getElementById("nameInput").value;
  let age = Number(document.getElementById("ageInput").value);
  if (!name || !age) {
    document.getElementById("greeting").textContent = "⚠️ Please enter both fields.";
    return;
  }
  document.getElementById("greeting").textContent = formatGreeting(name, age);
});

// 2. Calculate total
document.getElementById("calcBtn").addEventListener("click", () => {
  let total = calculateTotal(cartPrices);
  document.getElementById("total").textContent = `Total: $${total}`;
});

// 3. Start countdown
document.getElementById("startCountdown").addEventListener("click", startCountdown);

// 4. Toggle theme
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
