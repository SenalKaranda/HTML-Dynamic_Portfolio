function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateExp(data, parent) {
    const eventsContainer = parent;
        data.forEach(education => {
          const event = document.createElement('div');
          event.classList.add('event');
          event.innerHTML = `
            <h3>${education.degree} in ${education.fieldOfStudy} at ${education.school}</h3>
            <p>${education.startDate} to ${education.endDate}</p>
            <a href="#" onclick="selectExp('${education.school}')">Learn More</a>
          `;
          eventsContainer.appendChild(event);
        });
}

function selectExp(query) {
    fetch('json/data_education.json')
      .then(response => response.json())
      .then(data => {
        const eventsContainer = document.querySelector('.selected-skill-inner');
        removeAllChildNodes(eventsContainer);
        data.forEach(education => {
            if(education.school == query) {
                const event = document.createElement('div');
                event.classList.add('event');
                if(education.description1 != null)
                {
                  event.innerHTML = `
                    <h3>${education.degree} in ${education.fieldOfStudy} at ${education.school}</h3>
                    <p>${education.startDate} to ${education.endDate}</p>
                    <ul class="descript-list">
                      <li>${education.description1}</li>
                      <br>
                      <li>${education.description2}</li>
                      <br>
                      <li>${education.description3}</li>
                    </ul>
                  `;
                }
                if(education.description1 == null)
                {
                  event.innerHTML = `
                    <h3>${education.degree} in ${education.fieldOfStudy} at ${education.school}</h3>
                    <p>${education.startDate} to ${education.endDate}</p>
                  `;
                }
                eventsContainer.appendChild(event);
            }
      })
    });
};

fetch("json/data_education.json")
  .then((response) => response.json())
  .then((data) => generateExp(data, document.querySelector('.timeline')));

