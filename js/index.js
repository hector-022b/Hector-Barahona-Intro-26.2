/* Creating the Footer */
const footer = document.createElement("footer");
document.body.appendChild(footer);

/* Get Current Year For Dynamic Copyright Footer */
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

/* Loop Through Skills Array and Display Each Skill */
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.querySelector('form[name="leave_message"]'); 

/* Handle Message Form Submission */
messageForm.addEventListener("submit", function (event) {
    event.preventDefault(); /* Prevent Page Refresh on Form Submit */

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> ${usersMessage} </span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    /* Delete Message When Remove Button Is Clicked */
    removeButton.addEventListener("click", function () {
        const entry = removeButton.parentNode;
        entry.remove();
        if (messageList.children.length === 0) {
            messageSection.style.display = "none";
        }
    });

    /* Edit Existing Message */
    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.type = "button";
    editButton.addEventListener("click", function () {
        const newText = prompt("Edit your message:");
        const messageSpan = newMessage.querySelector("span");
        messageSpan.innerText = newText;
});

    messageList.appendChild(newMessage);

    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);

    messageSection.style.display = "block";

    messageForm.reset();
});

/* Fetch GitHub Repositories Using GitHub API */
fetch("https://api.github.com/users/hector-022b/repos")
    .then(function (response) {
        return response.json();
    })

    .then(function (repositories) {
        console.log(repositories);
        const projectSection = document.getElementById("projects");
        const projectList = projectSection.querySelector("ul");

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
        }
    })

    /* Handle API Errors */
    .catch(function (error) {
        console.log(error);

        const projectList = document.querySelector("#projects ul");
        const errorMessage = document.createElement("li");

        errorMessage.innerHTML = "Unable to load projects right now.";
        errorMessage.style.color = "white";
        errorMessage.style.backgroundColor = "red";

        projectList.appendChild(errorMessage);
    })
