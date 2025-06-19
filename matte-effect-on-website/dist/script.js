document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("grainOverlay");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateNoise();
  }

  function generateNoise() {
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;
    const grainSize = 2;
    for (let y = 0; y < canvas.height; y += grainSize) {
      for (let x = 0; x < canvas.width; x += grainSize) {
        const value = Math.random() * 255;
        const index = (y * canvas.width + x) * 4;
        for (let i = 0; i < grainSize; i++) {
          for (let j = 0; j < grainSize; j++) {
            if (x + j < canvas.width && y + i < canvas.height) {
              const currentIndex = ((y + i) * canvas.width + (x + j)) * 4;
              data[currentIndex] = value;
              data[currentIndex + 1] = value;
              data[currentIndex + 2] = value;
              data[currentIndex + 3] = 50;
            }
          }
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }

  function animate() {
    generateNoise();
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  animate();
});