// Add subtle parallax effect on mouse movement
document.addEventListener("mousemove", (e) => {
  const imageContainer = document.querySelector(".image-container");
  const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 50;

  imageContainer.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
});

// Add fade-in animation on page load
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");
  const imageContainer = document.querySelector(".image-container");

  // Set initial opacity
  content.style.opacity = "0";
  imageContainer.style.opacity = "0";

  // Add transition property
  content.style.transition = "opacity 1.5s ease";
  imageContainer.style.transition = "opacity 2s ease";

  // Trigger animation after a short delay
  setTimeout(() => {
    content.style.opacity = "1";
    imageContainer.style.opacity = "0.9";
  }, 300);
});
