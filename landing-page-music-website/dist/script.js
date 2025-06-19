// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Animate hamburger to X
  const spans = mobileMenuBtn.querySelectorAll("span");
  spans.forEach((span) => span.classList.toggle("active"));
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".feature-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  observer.observe(card);
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) === current) {
      item.classList.add("active");
    }
  });
});

// Smooth reveal animation for text
document.querySelectorAll(".reveal-text").forEach((text) => {
  text.style.opacity = "0";
  text.style.transform = "translateY(20px)";

  setTimeout(() => {
    text.style.opacity = "1";
    text.style.transform = "translateY(0)";
  }, 500);
});