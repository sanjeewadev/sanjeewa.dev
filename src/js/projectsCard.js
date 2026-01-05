console.log("Projects Card JavaScript loaded");

const projectcardfiles = [
  "./data/projects/cards/projectcard1.json",
  "./data/projects/cards/projectcard2.json",
  "./data/projects/cards/project1.json",
];

const container = document.getElementById("project-card-container");

for (let i = 0; i < projectcardfiles.length; i++) {
  fetch(projectcardfiles[i])
    .then((response) => response.json())
    .then((data) => {
      console.log("Project Card Data:", data);
      const projectCard = document.createElement("div");
      projectCard.className = "projects-card";

      projectCard.innerHTML = `
      <img
        class="projects-coming-soon-img"
        src="${data.image}"
        alt="Projects Coming Soon"
      />
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <a href="/project-details" class="button">View Details</a>
  `;
      console.log(container);
      container.appendChild(projectCard);
    });
}
