

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
// let htmlcssArrow = document.querySelector(".htmlcss-arrow");
let htmlcssArrow = document.querySelector(".wadafa");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
}

let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
}

let jsArrow = document.querySelector(".wadafa2");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
}
