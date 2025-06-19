const text = "Animations Text Transition"; // Text to be animated
const container = document.getElementById("textContainer"); // Container for the text
const infoText = document.getElementById("infoText"); // Element to display pressed key info
let index = 0; // Tracks the current letter index
let timeout; // Timeout for resetting the animation
let isRevealing = true; // Tracks if letters are being revealed or hidden

// Function to create individual letter spans
function createLetters() {
  container.innerHTML = ""; // Clear the container
  text.split("").forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.classList.add("letter");
    container.appendChild(span);
  });
}

createLetters(); // Initialize the letters
let letters = document.querySelectorAll(".letter"); // Get all letter elements

// Function to reveal or hide letters based on arrow key input
function revealLetter(direction) {
  clearTimeout(timeout); // Clear the existing timeout
  infoText.textContent = `You pressed: ${direction}`; // Display the pressed key

  let x = 0,
    y = 0;
  // Set x and y values based on the arrow key pressed
  if (direction === "ArrowUp") y = -50;
  else if (direction === "ArrowDown") y = 50;
  else if (direction === "ArrowLeft") x = -50;
  else if (direction === "ArrowRight") x = 50;

  if (isRevealing) {
    // Reveal letters one by one
    if (index < letters.length) {
      gsap.fromTo(
        letters[index],
        { opacity: 0, x: x, y: y, rotation: 90, color: "#ff0000" }, // Start state
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          color: "#ffffff", // End with white color
          duration: 0.5,
          ease: "power3.out"
        } // End state
      );
      index++;
      resetTimeout();
    } else {
      isRevealing = false; // Switch to hiding letters
    }
  } else {
    // Hide letters one by one
    if (index > 0) {
      index--;
      gsap.to(letters[index], {
        opacity: 0,
        x: x,
        y: y,
        rotation: -90,
        color: "#ff0000",
        duration: 0.5,
        ease: "power3.in"
      });
    } else {
      isRevealing = true; // Switch back to revealing letters
      resetTimeout();
    }
  }
}

// Function to reset the animation after a delay
function resetTimeout() {
  timeout = setTimeout(() => {
    setTimeout(() => {
      createLetters(); // Recreate letters
      letters = document.querySelectorAll(".letter"); // Update letters reference
      index = 0; // Reset index
      isRevealing = true; // Reset reveal state
      gsap.to(container, { x: "0px", rotation: 0, duration: 1 }); // Reset container position
      randomReveal(); // Start random reveal animation
    }, 1000);
  }, 2000);
}

// Function to reveal letters with random animations
function randomReveal() {
  letters.forEach((letter, i) => {
    let x = Math.random() > 0.5 ? 50 : -50; // Random x offset
    let y = Math.random() > 0.5 ? 50 : -50; // Random y offset
    let rotation = Math.random() * 180 - 90; // Random rotation
    let color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
    gsap.fromTo(
      letter,
      { opacity: 0, x: x, y: y, rotation: rotation, color: color }, // Start state
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        color: "#ffffff", // End with white color
        duration: 0.5,
        ease: "power3.out",
        delay: i * 0.1,
        onComplete: () => {
          if (i === letters.length - 1) {
            index = letters.length; // Set index to the last letter
          }
        }
      } // End state
    );
  });
}

// Add event listener for arrow key presses
document.addEventListener("keydown", (event) => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    revealLetter(event.key);
  }
});

resetTimeout(); // Start the initial animation