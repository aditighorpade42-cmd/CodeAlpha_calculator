const display = document.getElementById("display");
const toggleBtn = document.getElementById("toggleBtn");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  if (display.value === "") return;
  const lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) return; 
  display.value += op;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", (event) => {
  if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
    display.value += event.key;
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    deleteChar();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});

// 🌙 Dark / Light Mode Toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});