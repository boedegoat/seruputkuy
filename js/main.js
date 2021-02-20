// Hamburger Menu
const hamburgerMenu = document.querySelector(".hamburger");
const nav = document.querySelector("header .nav-links");
hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Jumbo Slideshow
// const jumbo = document.querySelector(".featured .jumbo");
// const jumboDots = document.querySelectorAll(".featured .jumbo .dot");
// let i = 0;
// setInterval(() => {
//   jumboDots.forEach((el) => el.classList.remove("active"));
//   jumbo.style.backgroundImage = `url(../img/jumbo/${i}.jpg)`;
//   jumboDots[i].classList.add("active");
//   i++;
//   if (i > 2) i = 0;
// }, 5000);
