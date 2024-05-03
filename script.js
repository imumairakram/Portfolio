function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text");
    const originalText = typingText.textContent;

    function type() {
      typingText.textContent = "";
      let i = 0;
      function typeCharacter() {
        typingText.textContent += originalText.charAt(i);
        i++;
        if (i < originalText.length) {
          setTimeout(typeCharacter, 100);
        }
      }
      typeCharacter();
    }

    type(); // Trigger the typing animation when the page loads
  });



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