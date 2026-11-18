// Number One: Greet User based on Time
window.addEventListener("load", function () {
  const hour = new Date().getHours();
  let greeting = "Good evening";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  document.getElementById("greeting").textContent = greeting + ", traveler!";
});

// Number Two: Hide the hamburger menu icon with a click
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

// Number Three: Light and Dark mode 
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("night");
  const isNight = document.body.classList.contains("night");
  themeBtn.textContent = isNight ? "Light Mode" : "Dark Mode";
});

// Number 4: Hovering over cards displays info about each character.
const cards = document.querySelectorAll(".card");
const infoPanel = document.getElementById("info-panel");
cards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    infoPanel.textContent = card.dataset.info;
    card.classList.add("active");
  });
  card.addEventListener("mouseleave", function () {
    infoPanel.textContent = "Hover over a character!";
    card.classList.remove("active");
  });
});

// Number 5: Adding spells, clicking on text box focuses, submitting adds a spell, and you can grey out a spell.
const form = document.getElementById("spell-form");
const input = document.getElementById("spell-input");
const msg = document.getElementById("spell-msg");
const list = document.getElementById("spell-list");

input.addEventListener("focus", function () {
  input.classList.add("focused");
  msg.textContent = "";
});
input.addEventListener("blur", function () {
  input.classList.remove("focused");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") {
    msg.textContent = "Even Frieren needs a spell name!";
    return;
  }
  const li = document.createElement("li");
  li.textContent = text;
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });
  list.appendChild(li);
  input.value = "";
});