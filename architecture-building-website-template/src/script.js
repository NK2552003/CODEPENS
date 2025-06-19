document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle("active");

    // Animate hamburger to X
    const spans = mobileMenuBtn.querySelectorAll("span");
    if (isMenuOpen) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(7px, -7px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  }

  mobileMenuBtn.addEventListener("click", toggleMenu);

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      isMenuOpen &&
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      toggleMenu();
    }
  });
});

class Carousel {
  constructor() {
    this.container = document.querySelector(".carousel-container");
    this.track = document.querySelector(".carousel-track");
    this.cards = Array.from(document.querySelectorAll(".feature-card"));
    this.prevButton = document.querySelector(".carousel-button.prev");
    this.nextButton = document.querySelector(".carousel-button.next");

    this.cardWidth = this.cards[0].offsetWidth;
    this.currentIndex = 0;
    this.totalCards = this.cards.length;

    this.init();
  }

  init() {
    // Clone cards for infinite loop
    const firstCardClone = this.cards[0].cloneNode(true);
    const lastCardClone = this.cards[this.totalCards - 1].cloneNode(true);

    this.track.appendChild(firstCardClone);
    this.track.insertBefore(lastCardClone, this.cards[0]);

    // Update cards array with clones
    this.cards = Array.from(document.querySelectorAll(".feature-card"));

    // Set initial position
    this.currentIndex = 1;
    this.updatePosition();

    // Add event listeners
    this.prevButton.addEventListener("click", () => this.slide("prev"));
    this.nextButton.addEventListener("click", () => this.slide("next"));

    // Add transition end listener
    this.track.addEventListener("transitionend", () =>
      this.handleTransitionEnd()
    );

    // Add resize listener
    window.addEventListener("resize", () => {
      this.cardWidth = this.cards[0].offsetWidth;
      this.updatePosition();
    });
  }

  slide(direction) {
    this.track.style.transition = "transform 0.3s ease-in-out";

    if (direction === "next") {
      this.currentIndex++;
    } else {
      this.currentIndex--;
    }

    this.updatePosition();
  }

  updatePosition() {
    const position = -this.currentIndex * (this.cardWidth + 24); // 24px is the gap
    this.track.style.transform = `translateX(${position}px)`;
  }

  handleTransitionEnd() {
    // If we're at the clone of the last card
    if (this.currentIndex === 0) {
      this.track.style.transition = "none";
      this.currentIndex = this.cards.length - 2;
      this.updatePosition();
    }
    // If we're at the clone of the first card
    if (this.currentIndex === this.cards.length - 1) {
      this.track.style.transition = "none";
      this.currentIndex = 1;
      this.updatePosition();
    }
  }
}

// Initialize carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new Carousel();
});

const track = document.querySelector(".carousel-track");
const items = Array.from(document.querySelectorAll(".carousel-item"));
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 1;

// Update carousel position
function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width;
  const trackOffset = (track.parentElement.offsetWidth - itemWidth) / 3;

  // Center the current item
  track.style.transform = `translateX(calc(-${
    currentIndex * itemWidth
  }px + ${trackOffset}px))`;

  // Update active item
  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index === currentIndex) {
      item.classList.add("active");
    }
  });
}

// Go to the next slide
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Go to the previous slide
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

// Initialize the carousel with the middle item centered
updateCarousel();

// Add subtle animation to blobs on hover
document.querySelectorAll(".constr-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const blob = card.querySelector(".constr-blob");
    blob.style.transform = "translate(-50%, -50%) scale(1.3)";
  });

  card.addEventListener("mouseleave", () => {
    const blob = card.querySelector(".constr-blob");
    blob.style.transform = "translate(-50%, -50%) scale(1.2)";
  });
});

const slides = document.querySelectorAll(".hero-slide");
const nextButton = document.getElementById("next-btn");

let currentSlide = 0;

nextButton.addEventListener("click", () => {
  // Hide the current slide smoothly
  slides[currentSlide].classList.remove("active");

  // Increment slide index and loop back if necessary
  currentSlide = (currentSlide + 1) % slides.length;

  // Show the next slide with a smooth transition
  slides[currentSlide].classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
