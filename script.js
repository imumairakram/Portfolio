// Function to toggle menu visibility
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// List of words to type
const words = ["Website Developer", "WordPress Developer", "Python Developer", "Coder"];
let currentWordIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 70;

// Function to start typing
function startTyping() {
  const typingElement = document.getElementById("typing-text");
  typingElement.innerHTML = "";
  typeNextChar(typingElement);
}

// Function to type next character
function typeNextChar(typingElement) {
  if (currentCharIndex < words[currentWordIndex].length) {
    typingElement.innerHTML += words[currentWordIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(() => {
      typeNextChar(typingElement);
    }, typingSpeed);
  } else {
    currentCharIndex = 0;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(() => {
      changeColor();
      setTimeout(startTyping, 1000);
    }, typingSpeed * 10);
  }
}

// Function to change text color
function changeColor() {
  const typingElement = document.getElementById("typing-text");
  typingElement.style.color = "rgb(39, 44, 49)";
}

// Function to show a demo message when a button is clicked
function showDemoMessage() {
  const message = document.getElementById("demoMessage");
  message.style.display = "block";
  // Hide the message after 3 seconds
  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
}

// Initialize typing animation on page load
window.onload = startTyping;
