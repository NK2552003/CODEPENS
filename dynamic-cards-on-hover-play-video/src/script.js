const projects = [
  {
    id: '1',
    title: 'BlissCamp',
    category: 'Web Development',
    image: "https://picsum.photos/seed/project1/600/400",
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'A website for Tourists and Travellers',
    links: {
      live: 'https://nk2552003.github.io/BlissCampIndia/',
      github: 'https://github.com/NK2552003/BlissCampIndia',
      codepen: 'https://github.com/NK2552003/BlissCampIndia'
    },
    progress: 'Completed'
  },
  {
    id: '2',
    title: "lil' me",
    category: 'Web Development',
    image: 'https://picsum.photos/seed/project2/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'An animated moving boy using pure CSS, HTML & JS',
    links: {
      live: 'https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe',
      github: 'https://github.com/NK2552003/lil-me-male-version-',
      codepen: 'https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe'
    },
    progress: 'Completed'
  },
  {
    id: '3',
    title: 'Cursor',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/project3/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'The custom modified cursor for better interactivity with users',
    links: {
      live: 'https://codepen.io/rlaqxvbr-the-bashful/details/ExqvZey',
      github: 'https://codepen.io/rlaqxvbr-the-bashful/details/ExqvZey',
      codepen: 'https://codepen.io/rlaqxvbr-the-bashful/details/ExqvZey'
    },
    progress: 'Completed'
  },
  {
    id: '4',
    title: 'Background',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/project4/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'A randomized background generator for any content creator',
    links: {
      live: 'https://codepen.io/rlaqxvbr-the-bashful/pen/VwoLgrj',
      github: 'https://github.com/NK2552003/Random_Character_Background',
      codepen: 'https://codepen.io/rlaqxvbr-the-bashful/pen/VwoLgrj'
    },
    progress: 'Completed'
  },
  {
    id: '5',
    title: 'CSS Filters',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/project5/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'A CSS filter section displaying images on hover with animation',
    links: {
      live: 'https://codepen.io/rlaqxvbr-the-bashful/pen/KKLVxza',
      github: 'https://codepen.io/rlaqxvbr-the-bashful/pen/KKLVxza',
      codepen: 'https://codepen.io/rlaqxvbr-the-bashful/pen/KKLVxza'
    },
    progress: 'Completed'
  },
  {
    id: '6',
    title: 'HostelEase',
    category: 'App Development',
    image: 'https://picsum.photos/seed/project6/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'The management app for hostelers, warden, for seamless interaction.',
    links: {
      live: 'https://github.com/NK2552003/Hostel_Management_App',
      github: 'https://github.com/NK2552003/Hostel_Management_App',
      codepen: 'https://github.com/NK2552003/Hostel_Management_App'
    },
    progress: 'Working on it'
  },
  {
    id: '7',
    title: 'Portfolio',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/project7/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'Created the portfolio for my colleague for resume purposes.',
    links: {
      live: 'https://rohit-s-portfolio.netlify.app/',
      github: 'https://github.com/NK2552003/Rohit-s_Portfolio',
      codepen: 'https://github.com/NK2552003/Rohit-s_Portfolio'
    },
    progress: 'Completed'
  },
  {
    id: '8',
    title: 'LandingPage',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/project8/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'The webpage features images and text content with stunning visuals.',
    links: {
      live: 'https://codepen.io/rlaqxvbr-the-bashful/pen/MWdKBpa',
      github: 'https://github.com/NK2552003/Dynamic_Landing_WebPage',
      codepen: 'https://codepen.io/rlaqxvbr-the-bashful/pen/MWdKBpa'
    },
    progress: 'Completed'
  },
  {
    id: '9',
    title: 'Satranj',
    category: 'App Development',
    image: 'https://picsum.photos/seed/project9/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'A Simple and Easy-to-Play Ancient Chess Game in Flutter',
    links: {
      live: 'https://github.com/NK2552003/Satranj-Chess-_Game',
      github: 'https://github.com/NK2552003/Satranj-Chess-_Game',
      codepen: 'https://github.com/NK2552003/Satranj-Chess-_Game'
    },
    progress: 'Completed'
  },
  {
    id: '10',
    title: 'Civic Link',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/project10/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'A collaborative platform dedicated to society or community to report or for services in the society means a community handler.',
    links: {
      live: 'https://nk2552003.github.io/Civic_Link/',
      github: 'https://github.com/NK2552003/Civic_Link',
      codepen: 'https://nk2552003.github.io/Civic_Link/'
    },
    progress: 'Completed'
  }
];


const categories = ['All', 'App Development', 'Web Development'];

let selectedCategory = 'All';

const filterButtons = document.getElementById('portfolio-filter-buttons');
const projectsGrid = document.getElementById('portfolio-projects-grid');

// Create filter buttons
categories.forEach(category => {
  const button = document.createElement('button');
  button.innerText = category;
  button.className = selectedCategory === category 
    ? 'portfolio-bg-white portfolio-text-black filterBtn' 
    : 'portfolio-text-white portfolio-text-white-80 filterBtn2';
  button.onclick = () => {
    selectedCategory = category;
    updateUI();
  };
  filterButtons.appendChild(button);
});

function updateUI() {
  // Update button styles
  [...filterButtons.children].forEach(button => {
    button.className = button.innerText === selectedCategory
      ? 'portfolio-bg-white portfolio-text-black filterBtn'
      : 'portfolio-text-white portfolio-bg-black filterBtn';
  });

  // Filter and display projects
  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  projectsGrid.innerHTML = '';
  filteredProjects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'portfolio-group relative overflow-hidden';

    projectDiv.innerHTML = `
      <div class="portfolio-media-wrapper relative">
        <img src="${project.image}" alt="${project.title}" class="portfolio-image portfolio-aspect-3-2 portfolio-object-cover" />
        <video src="${project.video}" autoplay muted loop class="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"></video>
        <div class="portfolio-overlay-blur"></div>
      </div>
      <div class="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
      <div class="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
        <p class="portfolio-progress">${project.progress}</p>
        <h3 class="portfolio-text-xl portfolio-font-semibold portfolio-text-white">${project.title}</h3>
        <p class="portfolio-description">${project.description}</p>
        <div class="portfolio-links mt-4">
          <a href="${project.links.live}" target="_blank" class="portfolio-btn">
            <button class="button">
<svg width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g opacity="0.5"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46689 4.39207C5.75949 4.68526 5.75902 5.16013 5.46583 5.45273C3.78722 7.128 2.75 9.44218 2.75 12C2.75 14.5878 3.81163 16.9262 5.52503 18.6059C5.82082 18.8959 5.82554 19.3707 5.53557 19.6665C5.24561 19.9623 4.77076 19.967 4.47497 19.677C2.48564 17.7269 1.25 15.0071 1.25 12C1.25 9.02783 2.45721 6.33616 4.40623 4.39102C4.69941 4.09842 5.17429 4.09889 5.46689 4.39207ZM18.6164 4.46446C18.9122 4.17449 19.387 4.17921 19.677 4.475C21.5771 6.41326 22.75 9.07043 22.75 12C22.75 14.9645 21.5491 17.6499 19.609 19.5938C19.3164 19.887 18.8415 19.8875 18.5484 19.5949C18.2552 19.3023 18.2547 18.8274 18.5473 18.5342C20.2182 16.86 21.25 14.5512 21.25 12C21.25 9.47873 20.2422 7.1943 18.6059 5.52507C18.3159 5.22928 18.3206 4.75443 18.6164 4.46446ZM8.30923 7.48757C8.59226 7.79001 8.57652 8.26462 8.27408 8.54765C7.32517 9.43564 6.75 10.6502 6.75 11.9822C6.75 13.3297 7.33869 14.5573 8.30756 15.4479C8.61251 15.7282 8.63248 16.2026 8.35216 16.5076C8.07185 16.8125 7.59739 16.8325 7.29244 16.5522C6.03967 15.4006 5.25 13.7824 5.25 11.9822C5.25 10.203 6.02148 8.60128 7.24916 7.45242C7.5516 7.16939 8.02621 7.18513 8.30923 7.48757ZM15.7429 7.52559C16.0292 7.22626 16.5039 7.21571 16.8033 7.50202C18.0005 8.64714 18.75 10.2286 18.75 11.9822C18.75 13.7568 17.9825 15.3548 16.7604 16.503C16.4586 16.7867 15.9839 16.7719 15.7003 16.47C15.4167 16.1681 15.4315 15.6935 15.7333 15.4099C16.6778 14.5225 17.25 13.3108 17.25 11.9822C17.25 10.6692 16.6911 9.47046 15.7664 8.58599C15.4671 8.29968 15.4566 7.82492 15.7429 7.52559Z" fill="#fafafa"/> </g> <path d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z" fill="#fafafa"/> </g>

</svg>
            </button>
          </a>
          <a href="${project.links.github}" target="_blank" class="portfolio-btn">
            <button class="button">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
  </svg>
            </button>
          </a>
          <a href="${project.links.codepen}" target="_blank" class="portfolio-btn">
            <button class="button">
             <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="m2.893 15.656 8.076 5.384v-4.808l-4.474-2.986zm-.831-1.928 2.585-1.728-2.585-1.728zm10.969 7.312 8.076-5.384-3.6-2.41-4.476 2.986zm-1.031-6.602 3.643-2.438-3.643-2.438-3.643 2.438zm-5.505-3.68 4.474-2.99v-4.808l-8.076 5.384zm12.858 1.242 2.585 1.728v-3.456zm-1.848-1.246 3.6-2.41-8.074-5.384v4.808zm6.495-2.41v7.312.03c0 .346-.18.651-.452.825l-.004.002-10.969 7.313c-.162.109-.361.174-.576.174s-.414-.065-.58-.176l.004.002-10.969-7.312c-.276-.176-.456-.481-.456-.827 0-.011 0-.021.001-.032v.002-7.312c0-.009 0-.02 0-.031 0-.346.18-.651.452-.825l.004-.002 10.969-7.312c.162-.109.361-.174.576-.174s.414.065.58.176l-.004-.002 10.969 7.312c.276.176.456.481.456.827 0 .011 0 .021-.001.032z"/>

</g>

</svg>
            </button>
          </a>
        </div>
      </div>
    `;
// Add touch events for mobile devices
projectDiv.ontouchstart = () => {
  const video = projectDiv.querySelector('video');
  if (video) {
    video.style.opacity = 1;
    playVideo(video); // Play video using the helper function
  }
};

projectDiv.ontouchend = () => {
  const video = projectDiv.querySelector('video');
  if (video) {
    video.style.opacity = 0;
    pauseVideo(video); // Pause video using the helper function
  }
};

projectDiv.onmouseenter = () => {
  const video = projectDiv.querySelector('video');
  if (video) {
    video.style.opacity = 1;
    playVideo(video); // Play video using the helper function
  }
};

projectDiv.onmouseleave = () => {
  const video = projectDiv.querySelector('video');
  if (video) {
    video.style.opacity = 0;
    pauseVideo(video); // Pause video using the helper function
  }
};

// Helper function to play video
const playVideo = (video) => {
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch((error) => {
      console.error('Error playing video:', error);
    });
  }
};

// Helper function to pause video
const pauseVideo = (video) => {
  video.pause();
  video.currentTime = 0; // Optionally reset to the beginning
};

    projectsGrid.appendChild(projectDiv);
  });
}


// Initial UI setup
updateUI();
