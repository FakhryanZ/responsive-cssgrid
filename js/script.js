const menuToggle = document.getElementById("toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("on");
  nav.classList.toggle("slide");
});
