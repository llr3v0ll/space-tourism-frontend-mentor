const hamburger = document.querySelector(".header-hamburger");
const close = document.querySelector(".header-close");
const navi = document.querySelector(".navigation");

function togglef() {
  navi.classList.toggle("hamburger");
  navi.classList.toggle("active");
}
hamburger.addEventListener("click", togglef);
close.addEventListener("click", togglef);
