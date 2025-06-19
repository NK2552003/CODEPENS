document.addEventListener("DOMContentLoaded", () => {
  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Theme toggle functionality
  const themeSwitch = document.getElementById("theme-switch");
  const body = document.body;

  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
    body.classList.add("light-mode");
  }

  themeSwitch.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const currentTheme = body.classList.contains("light-mode")
      ? "light"
      : "dark";
    localStorage.setItem("theme", currentTheme);
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector("nav ul");

  menuToggle?.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle.classList.contains("active")) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  });

  // GSAP Animations
  // Hero title animation
  gsap.from(".title", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Description paragraphs animation
  gsap.from(".description p", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.3,
    ease: "power3.out"
  });

  // CTA animation
  gsap.from(".cta", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.7,
    ease: "power3.out"
  });

  // Profile image animation
  gsap.to(".profile-image", {
    opacity: 1,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
  });

  // Badge animations with staggered delay
  gsap.to(".badge", {
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    delay: 0.8,
    ease: "back.out(1.7)",
    y: 0
  });

  // Parallax effect on badges
  const badges = document.querySelectorAll(".badge");

  badges.forEach((badge) => {
    gsap.to(badge, {
      y: -30,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  });

  // Floating animation for badges
  badges.forEach((badge) => {
    gsap.to(badge, {
      y: "+=10",
      rotation: "+=2",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });

  // Section animations
  const sections = document.querySelectorAll("section:not(.hero)");

  sections.forEach((section) => {
    // Section header animation
    gsap.from(section.querySelector(".section-header"), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Section content animation
    const contentElements = section.querySelectorAll(
      ".work-item, .blog-post, .about-content > *, .contact-content > *"
    );

    gsap.from(contentElements, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });
  });

  // Smooth scrolling for navigation
  const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        const navHeight = document.querySelector("header").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navHeight;

        gsap.to(window, {
          duration: 1,
          scrollTo: targetPosition,
          ease: "power3.inOut"
        });
      });
    });
  };

  // Call smooth scroll function
  smoothScroll();

  // Form submission handling
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simulate form submission
      const submitButton = contactForm.querySelector(".submit-button");
      const originalText = submitButton.textContent;

      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Simulate API call
      setTimeout(() => {
        submitButton.textContent = "Message Sent!";
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }, 3000);
      }, 1500);
    });
  }
});
