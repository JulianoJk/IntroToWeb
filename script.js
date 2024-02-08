// Example: Basic script for a mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menu-button");
  const navMenu = document.querySelector("nav ul");

  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("visible");
  });
});
