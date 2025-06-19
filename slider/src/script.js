const projects = [
    {
        title: "Project 1",
        description: "A brief description of Project 1 and its key features.",
        image: "https://picsum.photos/seed/project1/600/400",
        count: 1,
        date: "2023-05-15",
        tags: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/user/project1",
        liveView: "https://project1.example.com",
        progress: "completed"
    },
    {
        title: "Project 2",
        description: "An overview of Project 2, highlighting its main functionalities.",
        image: "https://picsum.photos/seed/project2/600/400",
        count: 2,
        date: "2023-06-22",
        tags: ["Vue.js", "Express", "PostgreSQL"],
        github: "https://github.com/user/project2",
        liveView: "https://project2.example.com",
        progress: "pending"
    },
    {
        title: "Project 3",
        description: "Details about Project 3 and its innovative approach to solving problems.",
        image: "https://picsum.photos/seed/project3/600/400",
        count: 3,
        date: "2023-07-30",
        tags: ["Angular", "Django", "MySQL"],
        github: "https://github.com/user/project3",
        liveView: "https://project3.example.com",
        progress: "on-hold"
    }
];

const cardContainer = document.querySelector('.ps-card-container');
const prevBtn = document.querySelector('.ps-prev-btn');
const nextBtn = document.querySelector('.ps-next-btn');
let currentIndex = 0;

function createCard(project, index) {
    const card = document.createElement('div');
    card.className = 'ps-card';
    card.style.transform = `translateX(${index * 100}%)`;

    const content = document.createElement('div');
    content.className = 'ps-card-content';

    const imageOrder = index % 2 === 0 ? 0 : 1;
    const infoOrder = index % 2 === 0 ? 1 : 0;

    content.innerHTML = `
        <div class="ps-card-image" style="background-image: url(${project.image}); order: ${imageOrder};"></div>
        <div class="ps-card-info" style="order: ${infoOrder};">
            <h2 class="ps-card-title">${project.title}</h2>
            <p class="ps-card-description">${project.description}</p>
            <div class="ps-card-meta">
                <span class="ps-card-count">Project ${project.count}</span>
                <span class="ps-card-date">Created: ${project.date}</span>
            </div>
            <div class="ps-card-tags">
                ${project.tags.map(tag => `<span class="ps-card-tag">${tag}</span>`).join('')}
            </div>
            <div class="ps-card-links">
                <a href="${project.github}" target="_blank" class="ps-card-link">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="${project.liveView}" target="_blank" class="ps-card-link">
                    <i class="fas fa-external-link-alt"></i> Live View
                </a>
            </div>
            <span class="ps-card-progress ${project.progress}">
                <i class="fas fa-${project.progress === 'completed' ? 'check-circle' : project.progress === 'pending' ? 'clock' : 'pause-circle'}"></i>
                ${project.progress}
            </span>
        </div>
    `;

    card.appendChild(content);
    return card;
}

function renderCards() {
    projects.forEach((project, index) => {
        const card = createCard(project, index);
        cardContainer.appendChild(card);
    });
}

function moveToNextCard() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateCardPositions();
}

function moveToPrevCard() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateCardPositions();
}

function updateCardPositions() {
    const cards = document.querySelectorAll('.ps-card');
    cards.forEach((card, index) => {
        const offset = (index - currentIndex + projects.length) % projects.length;
        card.style.transform = `translateX(${offset * 100}%) scale(${offset === 0 ? 1 : 0.9})`;
        card.style.opacity = offset === 0 ? 1 : 0.5;
        card.style.zIndex = offset === 0 ? 1 : 0;
    });
}

renderCards();

nextBtn.addEventListener('click', moveToNextCard);
prevBtn.addEventListener('click', moveToPrevCard);

// Auto-scroll every 7 seconds
setInterval(moveToNextCard, 7000);

// Pause auto-scroll when hovering over the card container
cardContainer.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
cardContainer.addEventListener('mouseleave', () => autoScrollInterval = setInterval(moveToNextCard, 7000));

// Initial update
updateCardPositions();

