function addNumbers(a, b) {
  return a + b;
}

let globalMessage = "I am global!"; 

function showScope() {
  let localMessage = "I am local!";
  console.log(globalMessage); 
  console.log(localMessage); 
}

showScope();

// --- Part 3: Combining JS + CSS Animations ---

const box = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBtn");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("calcResult");
const customCalcBtn = document.getElementById("customCalcBtn");
const customCalcResult = document.getElementById("customCalcResult");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

// New button for toggling color pulse animation
const toggleColorBtn = document.createElement("button");
toggleColorBtn.textContent = "Toggle Color Pulse";
toggleColorBtn.style.margin = "10px";
toggleColorBtn.style.padding = "12px 24px";
toggleColorBtn.style.fontSize = "1rem";
toggleColorBtn.style.borderRadius = "12px";
toggleColorBtn.style.border = "none";
toggleColorBtn.style.cursor = "pointer";
toggleColorBtn.style.background = "linear-gradient(45deg, #2196F3, #21CBF3)";
toggleColorBtn.style.color = "white";
toggleColorBtn.style.boxShadow = "0 4px 8px rgba(33, 203, 243, 0.6)";
toggleColorBtn.style.fontWeight = "600";
toggleColorBtn.style.transition = "background 0.3s ease, transform 0.3s ease";

toggleColorBtn.addEventListener("mouseover", () => {
  toggleColorBtn.style.background = "linear-gradient(45deg, #1976D2, #1E88E5)";
  toggleColorBtn.style.transform = "scale(1.1)";
});

toggleColorBtn.addEventListener("mouseout", () => {
  toggleColorBtn.style.background = "linear-gradient(45deg, #2196F3, #21CBF3)";
  toggleColorBtn.style.transform = "scale(1)";
});

const calcResultElement = document.getElementById("calcResult");
document.body.insertBefore(toggleColorBtn, calcResultElement);

function animateBox() {
  box.classList.add("bounce");

  box.addEventListener("animationend", () => {
    box.classList.remove("bounce");
  }, { once: true });
}

// Function to show calculation result
function showCalculation() {
  let sum = addNumbers(5, 10); // Use our function
  result.textContent = "5 + 10 = " + sum;
}

// Function to show custom calculation result
function showCustomCalculation() {
  let a = parseFloat(num1.value) || 0;
  let b = parseFloat(num2.value) || 0;
  let sum = addNumbers(a, b);
  customCalcResult.textContent = a + " + " + b + " = " + sum;
}

// Toggle color pulse animation on the box
function toggleColorPulse() {
  if (box.style.animationName === "colorPulse") {
    box.style.animation = "";
  } else {
    box.style.animation = "colorPulse 2s infinite";
  }
}

(() => {
  "use strict";

  // --- Part 3: Combining JS + CSS Animations ---

  const box = document.getElementById("animatedBox");
  const animateBtn = document.getElementById("animateBtn");
  const calcBtn = document.getElementById("calcBtn");
  const result = document.getElementById("calcResult");
  const customCalcBtn = document.getElementById("customCalcBtn");
  const customCalcResult = document.getElementById("customCalcResult");
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");

  // New button for toggling color pulse animation
  const toggleColorBtn = document.createElement("button");
  toggleColorBtn.textContent = "Toggle Color Pulse";
  toggleColorBtn.style.margin = "10px";
  toggleColorBtn.style.padding = "12px 24px";
  toggleColorBtn.style.fontSize = "1rem";
  toggleColorBtn.style.borderRadius = "12px";
  toggleColorBtn.style.border = "none";
  toggleColorBtn.style.cursor = "pointer";
  toggleColorBtn.style.background = "linear-gradient(45deg, #2196F3, #21CBF3)";
  toggleColorBtn.style.color = "white";
  toggleColorBtn.style.boxShadow = "0 4px 8px rgba(33, 203, 243, 0.6)";
  toggleColorBtn.style.fontWeight = "600";
  toggleColorBtn.style.transition = "background 0.3s ease, transform 0.3s ease";

  toggleColorBtn.addEventListener("mouseover", () => {
    toggleColorBtn.style.background = "linear-gradient(45deg, #1976D2, #1E88E5)";
    toggleColorBtn.style.transform = "scale(1.1)";
  });

  toggleColorBtn.addEventListener("mouseout", () => {
    toggleColorBtn.style.background = "linear-gradient(45deg, #2196F3, #21CBF3)";
    toggleColorBtn.style.transform = "scale(1)";
  });

  const calcResultElement = document.getElementById("calcResult");
  document.body.insertBefore(toggleColorBtn, calcResultElement);

  function animateBox() {
    box.classList.add("bounce");

    box.addEventListener("animationend", () => {
      box.classList.remove("bounce");
    }, { once: true });
  }

  function showCalculation() {
    let sum = addNumbers(5, 10);
    result.textContent = "5 + 10 = " + sum;
  }

  function showCustomCalculation() {
    let a = parseFloat(num1.value) || 0;
    let b = parseFloat(num2.value) || 0;
    let sum = addNumbers(a, b);
    customCalcResult.textContent = a + " + " + b + " = " + sum;
  }

  // Toggle color pulse animation on the box
  function toggleColorPulse() {
    if (box.style.animationName === "colorPulse") {
      box.style.animation = "";
    } else {
      box.style.animation = "colorPulse 2s infinite";
    }
  }

  // Helper function for addition
  function addNumbers(a, b) {
    return a + b; // returns sum
  }

  //event listeners
  animateBtn.addEventListener("click", animateBox);
  calcBtn.addEventListener("click", showCalculation);
  customCalcBtn.addEventListener("click", showCustomCalculation);
  toggleColorBtn.addEventListener("click", toggleColorPulse);
})();
