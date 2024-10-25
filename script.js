// Data for featured speakers
const speakers = [
    {
        name: "Sylvia Plath",
        title: "Robotics Professor of Arduino Studies at Harvard Robotics School",
        image: "./images/girl.jpg", // Replace with actual image URL
        
        description: "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006."
    },
    {
        name: "Zinkter John",
        title: "Director of Robo Centre and a board member of IEEE",
        image: "./images/uncle.jpg", // Replace with actual image URL
        description: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science, technology, humanities, and the arts."
    },
    {
        name: "Sim Tonny",
        title: "Director of Robotistics and vice president at RAS",
        image: "./images/uncle.jpg", // Replace with actual image URL
        description: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science, technology, humanities, and the arts."
    },
    // Add more speakers as needed
];

// Function to generate the HTML for the speakers
function loadSpeakers() {
    const speakersSection = document.getElementById('featured-speakers');
    
    // Dynamically create the speaker cards
    speakers.forEach((speaker) => {
        const speakerCard = document.createElement('div');
        speakerCard.classList.add('speaker-card');

        // Add speaker image
        const speakerImg = document.createElement('img');
        speakerImg.src = speaker.image;
        speakerImg.alt = `${speaker.name}'s picture`;

        // Create speaker info container
        const speakerInfo = document.createElement('div');
        speakerInfo.classList.add('speaker-info');

        // Add speaker name
        const speakerName = document.createElement('h2');
        speakerName.textContent = speaker.name;

        // Add speaker title
        const speakerTitle = document.createElement('h3');
        speakerTitle.textContent = speaker.title;

        // Add speaker description
        const speakerDescription = document.createElement('p');
        speakerDescription.textContent = speaker.description;

        // Append name, title, and description to speaker info
        speakerInfo.appendChild(speakerName);
        speakerInfo.appendChild(speakerTitle);
        speakerInfo.appendChild(speakerDescription);

        // Append the image and info container to the speaker card
        speakerCard.appendChild(speakerImg);
        speakerCard.appendChild(speakerInfo);

        // Append the speaker card to the section
        speakersSection.appendChild(speakerCard);
    });
}

// Call the function when the window loads
window.onload = loadSpeakers;

function loadMoreSpeakers() {
    const speakersSection = document.getElementById('featured-speakers');

    speakers.forEach(speaker => {
        const speakerCard = `
            <div class="speaker-card">
                <img src="${speaker.image}" alt="${speaker.name}'s picture">
                <div class="speaker-info">
                    <h2>${speaker.name}</h2>
                    <h3>${speaker.title}</h3>
                    <p>${speaker.description}</p>
                </div>
            </div>
        `;
        speakersSection.innerHTML += speakerCard;
    });

    // Hide the "Load More" button after displaying additional speakers
    document.getElementById('more-btn').style.display = 'none';
}