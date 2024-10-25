// Data for featured speakers
const speakers = [
    {
        name: "Yochai Benkler",
        title: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        image: "https://via.placeholder.com/100x100", // Replace with actual image URL
        description: "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006."
    },
    {
        name: "SohYeong Noh",
        title: "Director of Art Centre Nabi and a board member of CC Korea",
        image: "https://via.placeholder.com/100x100", // Replace with actual image URL
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
