function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }



  // List of words to type
  const words = ["Website Developer", "WordPress Developer", "Video Editor", "Graphic Designer", "Coder"];
  let currentWordIndex = 0;
  let currentCharIndex = 0;
  let typingSpeed = 70; 

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
      setTimeout(function() {
        typeNextChar(typingElement);
      }, typingSpeed);
    } else {
      currentCharIndex = 0;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(function() {
        changeColor();
        setTimeout(startTyping, 1000); 
      }, typingSpeed * 10); 
    }
  }

  // Function to change text color
  function changeColor() {
    const typingElement = document.getElementById("typing-text");
    typingElement.style.color = "rgb(39 44 49);";
  }

  window.onload = startTyping;



  
  // Function to show the message when the "Live Demo" button is clicked
  function showDemoMessage1() {
    var message = document.getElementById("demoMessage");
    message.style.display = "block";
    // Hide the message after 4 seconds
    setTimeout(function () {
      message.style.display = "none";
    }, 3000);
  }

  //Function to show the message when the "Live Demo" button is clicked
  function showDemoMessage2() {
    var message = document.getElementById("demoMessage");
    message.style.display = "block";
    // Hide the message after 4 seconds
    setTimeout(function () {
      message.style.display = "none";
    }, 3000);
  }

  // Function to show the message when the "Live Demo" button is clicked
  function showDemoMessage3() {
    var message = document.getElementById("demoMessage");
    message.style.display = "block";
    // Hide the message after 4 seconds
    setTimeout(function () {
      message.style.display = "none";
    }, 3000);
  }

  // Function to show the message when the "Live Demo" button is clicked
  function showDemoMessage4() {
    var message = document.getElementById("demoMessage");
    message.style.display = "block";
    // Hide the message after 4 seconds
    setTimeout(function () {
      message.style.display = "none";
    }, 3000);
  }
