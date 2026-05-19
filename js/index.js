/* Creating the Footer */
const footer = document.createElement("footer");
document.body.appendChild(footer);

/* Creates the Year */
const today = new Date();
const thisYear = today.getFullYear();

const footerElement = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `\u00A9 ${thisYear} Hector Barahona`;

footerElement.appendChild(copyright);

/* Creating the Skills Section */
const skills = ["Javascript", "HTML", "CSS", "Python", "Github", "Git"]

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

