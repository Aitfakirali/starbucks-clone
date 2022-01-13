const button = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const navToggel = (e) => {
  button.classList.toggle("open");
  menu.classList.toggle("hidden");
};

button.addEventListener("click", navToggel);
