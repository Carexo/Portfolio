"use strict";

const skillsButton = document.querySelector(".skills");
const icons = skillsButton.querySelectorAll("i");

function showSkills() {
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.remove("hidden");
  }
  skillsButton.addEventListener("click", disapearSkills);
  skillsButton.removeEventListener("click", showSkills);
}

function disapearSkills() {
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add("hidden");
  }
  skillsButton.removeEventListener("click", disapearSkills);
  skillsButton.addEventListener("click", showSkills);
}

skillsButton.addEventListener("click", showSkills);
