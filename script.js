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

skillsButton.addEventListener("click", showSkills);
navbarOpenButton.addEventListener("click", showNavbar);
navbarCloseButton.addEventListener("click", closeNavbar);

aboutMeElement.addEventListener("click", closeNavbar);
projectsElement.addEventListener("click", closeNavbar);
skillsElement.addEventListener("click", closeNavbar);
contactElement.addEventListener("click", closeNavbar);

skillsElement.addEventListener("click", showSkills);
