"use strict";

const header = document.querySelector(".header");
const hamburger = document.querySelector(".header-list");
const hamburgerBtn = document.querySelector(".header-nav-btn");

hamburgerBtn.addEventListener("click", () => {
  if (
    hamburger.classList.contains("show") &&
    hamburger.classList.contains("active")
  ) {
    hamburger.classList.remove("show");
    hamburgerBtn.classList.remove("active");

    setTimeout(() => {
      header.classList.remove("active");
    }, 100);

    setTimeout(() => {
      hamburger.classList.remove("active");
    }, 300);

    setTimeout(() => {
      hamburger.lastChild.remove();
    }, 400);
  }
  if (
    !hamburger.classList.contains("show") &&
    !hamburger.classList.contains("active")
  ) {
    hamburger.innerHTML += `<li class="header-list-item"><a href="#contact">Contact us</a></li>`;

    hamburger.classList.add("active");
    hamburgerBtn.classList.add("active");
    setTimeout(() => {
      header.classList.add("active");
    }, 100);
    setTimeout(() => {
      hamburger.classList.add("show");
    }, 5);
  }
});
