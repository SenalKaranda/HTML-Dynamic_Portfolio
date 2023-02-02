function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateExp(data, parent) {
    const eventsContainer = parent;
        data.forEach(project => {
          const event = document.createElement('div');
          event.classList.add('event');
          event.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.excerpt}</p>
            <a href="#" onclick="selectExp('${project.title}')">Learn More</a>
          `;
          eventsContainer.appendChild(event);
        });
}

function selectExp(query) {
    fetch('json/data_projects.json')
      .then(response => response.json())
      .then(data => {
        const eventsContainer = document.querySelector('.selected-skill-inner');
        removeAllChildNodes(eventsContainer);
        data.forEach(project => {
            if(project.title == query) {
                const event = document.createElement('div');
                event.classList.add('event');
                event.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                `;
                eventsContainer.appendChild(event);
            }
      })
    });
};

fetch("json/data_projects.json")
  .then((response) => response.json())
  .then((data) => generateExp(data, document.querySelector('.timeline')));

