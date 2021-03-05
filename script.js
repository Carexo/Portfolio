"use strict";

const skillsButton = document.querySelector(".skills");
const icons = skillsButton.querySelectorAll("i");

const navbarOpenButton = document.querySelector(".nav-button");
const navbarCloseButton = document.querySelector(".nav-button-close");
const navbar = document.querySelector("nav");

const aboutMeElement = document.querySelector(".nav-about");
const projectsElement = document.querySelector(".nav-projects");
const skillsElement = document.querySelector(".nav-skills");
const contactElement = document.querySelector(".nav-contact");

const contactField = document.querySelector(".contact");
const contactButton = document.querySelector(".contact-button");
const overlay = document.querySelector(".overlay");

function showSkills() {
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.remove("hidden");
  }
  skillsButton.addEventListener("click", closeSkills);
  skillsButton.removeEventListener("click", showSkills);
}

function closeSkills() {
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add("hidden");
  }
  skillsButton.removeEventListener("click", closeSkills);
  skillsButton.addEventListener("click", showSkills);
}

function showNavbar() {
  navbar.classList.add("mobile-navbar");
  navbarCloseButton.style.display = "block";
}

function closeNavbar() {
  navbar.classList.remove("mobile-navbar");
  navbarCloseButton.style.display = "none";
}

function showContactField() {
  overlay.classList.remove("hidden");
  contactField.classList.remove("hidden");
}

function closeContactField(element) {
  if (element.key === "Escape" || element.constructor.name === "MouseEvent") {
    overlay.classList.add("hidden");
    contactField.classList.add("hidden");
  }
}

//event listnener with show navbar function
navbarOpenButton.addEventListener("click", showNavbar);

//event listener with closed navbar function
navbarCloseButton.addEventListener("click", closeNavbar);
aboutMeElement.addEventListener("click", closeNavbar);
projectsElement.addEventListener("click", closeNavbar);
skillsElement.addEventListener("click", closeNavbar);
contactElement.addEventListener("click", closeNavbar);

//event listener with show skills function
skillsButton.addEventListener("click", showSkills);
skillsElement.addEventListener("click", showSkills);

//event listener with showed contact field funciton
contactElement.addEventListener("click", showContactField);

//Adding event listener to closing Contact field
contactButton.addEventListener("click", closeContactField);
overlay.addEventListener("click", closeContactField);
document.addEventListener("keydown", closeContactField);
