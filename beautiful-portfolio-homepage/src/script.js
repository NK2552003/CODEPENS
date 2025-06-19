AOS.init({
  once: true,
  offset: 100
});
// GSAP animations
document.addEventListener("DOMContentLoaded", function () {
  // Animate the profile image with a subtle hover effect
  gsap.to(".profile-img", {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
  // Add hover effect to service items
  const services = document.querySelectorAll(".service");
  services.forEach((service) => {
    service.addEventListener("mouseenter", () => {
      gsap.to(service, {
        backgroundColor: "rgba(0,0,0,0.03)",
        scale: 1.02,
        duration: 0.3
      });
    });
    service.addEventListener("mouseleave", () => {
      gsap.to(service, {
        backgroundColor: "transparent",
        scale: 1,
        duration: 0.3
      });
    });
  });
  // Add scroll-triggered animations
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      gsap.to(".hero-content", {
        opacity: 0.8,
        duration: 0.5
      });
    } else {
      gsap.to(".hero-content", {
        opacity: 1,
        duration: 0.5
      });
    }
  });
});
// Contact button functionality
document.querySelector(".btn").addEventListener("click", function () {
  // Create a modal for contact form
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";
  modal.style.opacity = "0";
  const form = document.createElement("div");
  form.style.backgroundColor = "white";
  form.style.padding = "2rem";
  form.style.borderRadius = "10px";
  form.style.maxWidth = "500px";
  form.style.width = "90%";
  form.innerHTML = `
                <h2 style="margin-bottom: 1.5rem; font-family: 'Playfair Display', serif;">Get in touch</h2>
                <form>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Name</label>
                        <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email</label>
                        <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Message</label>
                        <textarea rows="4" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;"></textarea>
                    </div>
                    <button type="button" style="background-color: #1a1a1a; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 50px; cursor: pointer; font-weight: 600;">Send Message</button>
                    <button type="button" class="close-modal" style="background-color: transparent; border: none; color: #1a1a1a; margin-left: 1rem; cursor: pointer; font-weight: 500;">Cancel</button>
                </form>
            `;
  modal.appendChild(form);
  document.body.appendChild(modal);
  // Animate modal in
  gsap.to(modal, {
    opacity: 1,
    duration: 0.3
  });
  // Close modal functionality
  modal.querySelector(".close-modal").addEventListener("click", function () {
    gsap.to(modal, {
      opacity: 0,
      duration: 0.3,
      onComplete: function () {
        document.body.removeChild(modal);
      }
    });
  });
  // Close when clicking outside the form
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      gsap.to(modal, {
        opacity: 0,
        duration: 0.3,
        onComplete: function () {
          document.body.removeChild(modal);
        }
      });
    }
  });
});
