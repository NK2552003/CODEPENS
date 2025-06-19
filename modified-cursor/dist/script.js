const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOut = document.querySelector("[data-cursor-outline]");

let timeout; // Define timeout at the correct scope

window.addEventListener("mousemove", function (e) {
  let posX = e.clientX; //fetch the client cursor vertical position
  let posY = e.clientY; // fetch the client cursor horizontal position

  // Move the cursor dot and outline
  cursorDot.style.left = posX + "px";
  cursorDot.style.top = posY + "px";

  cursorOut.style.left = posX + "px";
  cursorOut.style.top = posY + "px";

  // Ensure both cursors are visible
  cursorDot.style.display = "block";
  cursorOut.style.display = "block";

  // Clear any previous timeout to prevent immediate hiding
  clearTimeout(timeout);

  // Start a new timeout to hide the cursor after 1 second of inactivity
  timeout = setTimeout(() => {
    cursorDot.style.display = "none";
    cursorOut.style.display = "none";
  }, 1000); //in milliseconds
});

// Hide the cursor when the mouse leaves the window
document.addEventListener("mouseout", () => {
  cursorOut.style.display = "none";
  cursorDot.style.display = "none";
});