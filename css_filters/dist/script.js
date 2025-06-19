document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      this.classList.toggle("full-screen");
      boxes.forEach((otherBox) => {
        if (otherBox !== this && otherBox.classList.contains("full-screen")) {
          otherBox.classList.remove("full-screen");
        }
      });
    });
  });
});