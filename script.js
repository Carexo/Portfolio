"use strict";

const skillsButton = document.querySelector(".skills");
const icons = skillsButton.querySelectorAll("i");

const navbarOpenButton = document.querySelector(".nav-button");
const navbarCloseButton = document.querySelector(".nav-button-close");
const navbar = document.querySelector("nav");

const navAboutMeElement = document.querySelector(".nav-about");
const navProjectsElement = document.querySelector(".nav-projects");
const navSkillsElement = document.querySelector(".nav-skills");
const navContactElement = document.querySelector(".nav-contact");

const contactField = document.querySelector(".contact");
const contactButton = document.querySelector(".contact-button");
const overlay = document.querySelector(".overlay");

const projectsField = document.querySelector(".projects-container");
const projectButton = document.querySelector(".projects-button-close");
const projectElement = document.querySelector(".projects");

const emailIcons = document.querySelectorAll(".fa-envelope");

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

function showProjectsField() {
  overlay.classList.remove("hidden");
  projectsField.classList.remove("hidden");
}

function closeProjectsField(element) {
  if (element.key === "Escape" || element.constructor.name === "MouseEvent") {
    overlay.classList.add("hidden");
    projectsField.classList.add("hidden");
  }
}

function copyEmailToClipboard() {
  const email = document.createElement("textarea");
  email.value = "marcel.mietla3@gmail.com";
  email.style.position = "absolute";
  email.style.left = "-99999px";

  document.body.appendChild(email);

  email.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
  alert("Email copied");
}

//event listnener with show navbar function
navbarOpenButton.addEventListener("click", showNavbar);

//event listener with closed navbar function
navbarCloseButton.addEventListener("click", closeNavbar);
navAboutMeElement.addEventListener("click", closeNavbar);
navProjectsElement.addEventListener("click", closeNavbar);
navSkillsElement.addEventListener("click", closeNavbar);
navContactElement.addEventListener("click", closeNavbar);

//event listener with show skills function
skillsButton.addEventListener("click", showSkills);
navSkillsElement.addEventListener("click", showSkills);

//event listener with showed contact field funciton
navContactElement.addEventListener("click", showContactField);

//Adding event listener to closing Contact field
contactButton.addEventListener("click", closeContactField);
overlay.addEventListener("click", closeContactField);
document.addEventListener("keydown", closeContactField);

//event listener with showing proejcts field
navProjectsElement.addEventListener("click", showProjectsField);
projectElement.addEventListener("click", showProjectsField);

//event listener with closing projects field
projectButton.addEventListener("click", closeProjectsField);
overlay.addEventListener("click", closeProjectsField);
document.addEventListener("keydown", closeProjectsField);

emailIcons[0].addEventListener("click", copyEmailToClipboard);
emailIcons[1].addEventListener("click", copyEmailToClipboard);
