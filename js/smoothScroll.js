"use strict";

const contactLink = document.querySelector(".header-contact-btn");

hamburger.addEventListener("click", (e) => {
  let target = e.target;
  e.preventDefault();

  const ID = target.getAttribute("href").slice(1);

  document.getElementById(ID).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

contactLink.addEventListener("click", (e) => {
  e.preventDefault();

  let ID = e.target.getAttribute("href").slice(1);

  document.getElementById(ID).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
