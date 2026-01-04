console.log("Projects Card JavaScript loaded");

fetch("./data/projects/cards/projectcard1.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("Project Card Data:", data);
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

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

    const container = document.getElementById("project-card-container");
    console.log(container);
    container.appendChild(projectCard);
  });
