function generateBars(data, parent) {
  for (const skill of data) {
    const section = document.createElement("section");
    const skillName = document.createElement("h3");
    skillName.classList.add("skill-name");
    skillName.textContent = skill.name;
    section.appendChild(skillName);
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    const progressBarFill = document.createElement("div");
    progressBarFill.classList.add("progress-bar-fill");
    progressBarFill.style.width = skill.level + "%";
    progressBar.appendChild(progressBarFill);
    section.appendChild(progressBar);
    const skillLevel = document.createElement("div");
    skillLevel.classList.add("skill-progress-text");
    skillLevel.textContent = skill.level + "%";
    progressBarFill.appendChild(skillLevel);
    parent.appendChild(section);
  }
}

fetch("/json/skills_markup.json")
  .then((response) => response.json())
  .then((data) => generateBars(data, document.querySelector("#section1")));

fetch("/json/skills_programming.json")
  .then((response) => response.json())
  .then((data) => generateBars(data, document.querySelector("#section2")));

fetch("/json/skills_db.json")
  .then((response) => response.json())
  .then((data) => generateBars(data, document.querySelector("#section3")));

fetch("/json/skills_os.json")
  .then((response) => response.json())
  .then((data) => generateBars(data, document.querySelector("#section4")));

fetch("/json/skills_ge.json")
  .then((response) => response.json())
  .then((data) => generateBars(data, document.querySelector("#section5")));

fetch("/json/skills_ws.json")
  .then((response) => response.json())
  .then((data) => generateBars(data, document.querySelector("#section6")));
