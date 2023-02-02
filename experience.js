function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateExp(data, parent) {
    const eventsContainer = parent;
        data.forEach(experience => {
          const event = document.createElement('div');
          event.classList.add('event');
          event.innerHTML = `
            <h3>${experience.title} at ${experience.company}</h3>
            <p>${experience.excerpt}</p>
            <a href="#" onclick="selectExp('${experience.title}')">Learn More</a>
          `;
          eventsContainer.appendChild(event);
        });
}

function selectExp(query) {
    fetch('json/data_experience.json')
      .then(response => response.json())
      .then(data => {
        const eventsContainer = document.querySelector('.selected-skill-inner');
        removeAllChildNodes(eventsContainer);
        data.forEach(experience => {
            if(experience.title == query) {
                const event = document.createElement('div');
                event.classList.add('event');
                event.innerHTML = `
                    <h3>${experience.title} at ${experience.company}</h3>
                    <p>${experience.description}</p>
                `;
                eventsContainer.appendChild(event);
            }
      })
    });
};

fetch("json/data_experience.json")
  .then((response) => response.json())
  .then((data) => generateExp(data, document.querySelector('.timeline')));

