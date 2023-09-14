// hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

function copyToClipboard() {
  // Create a temporary input element
  var tempInput = document.createElement("input");

  // Set the input value to the text you want to copy
  tempInput.value = "testingthesitegood1@gmail.com";

  // Append the input element to the document
  document.body.appendChild(tempInput);

  // Select the input field
  tempInput.select();

  // Execute the copy command
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Alert the user that the text has been copied (you can also use other feedback mechanisms)
  alert(" Email Copied Successfully ✔");
}

// Add a click event listener to the button
document
  .getElementById("copyButton")
  .addEventListener("click", copyToClipboard);
