document.getElementById("swapButton").addEventListener("click", function () {
  var boxes = document.querySelectorAll(".right .box");

  // Create an array to store the heights of the boxes
  var heights = [];
  boxes.forEach(function (box) {
    heights.push(box.clientHeight); // Using clientHeight to get the height
  });

  // Swap the heights of the boxes
  boxes.forEach(function (box, index) {
    box.style.height = heights[(index + 1) % heights.length] + "px";
  });
});

document.getElementById("preswap").addEventListener("click", function () {
  var boxes = document.querySelectorAll(".right .box");

  // Create an array to store the heights of the boxes
  var heights = [];
  boxes.forEach(function (box) {
    heights.push(box.clientHeight); // Using clientHeight to get the height
  });

  // Swap the heights of the boxes
  boxes.forEach(function (box, index) {
    box.style.height = heights[(index + 1) % heights.length] + "px";
  });
});

// change the left section

let leftContent = document.getElementById("left-content");
let heading = document.getElementById("heading");
let paragraph = document.getElementById("paragraph");
let preswapButton = document.getElementById("preswap");
let swapButton = document.getElementById("swapButton");

let leftDivisions = [
  {
    heading: "Heading 1",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit tempora enim non. Dolorem, doloribus. Recusandae, vel deserunt sapiente quam rem ex doloribus ad, architecto consequatur saepe quasi veritatis tempora atque vero id molestiae distinctio inventore voluptas dolore laudantium qui natus? Accusantium praesentium temporibus magnam maxime, modi voluptatum minus aperiam?"
  },
  {
    heading: "Heading 2",
    paragraph:
      "Lorem ipsum dolor sit amet cus. Recusandae, vel deserunt sapiente quam rem ex doloribus ad, architecto consequatur saepe quasi veritatis tempora atque vero id molestiae distinctio inventore voluptas dolore laudantium qui natus? Accusantium praesentium temporibus magnam maxime, modi voluptatum minus aperiam?"
  },
  {
    heading: "Heading 3",
    paragraph:
      "Lorem ipsum dolunt sapiente quam rem ex doloribus ad, architecto consequatur saepe quasi veritatis tempora atque vero id molestiae distinctio inventore voluptas dolore laudantium qui natus? Accusantium praesentium temporibus magnam maxime, modi voluptatum minus aperiam?"
  },
  {
    heading: "Heading 4",
    paragraph:
      "Lorem ipsum dolor sin. Dolorem, doloribus. Recusandae, vel deserunt sapiente quam rem ex doloribus ad, architecto consequatur saepe quasi veritatis tempora atque vero id molestiae distinctio inventore voluptas dolore laudantium qui natus? Accusantium praesentium temporibus magnam maxime, modi voluptatum minus aperiam?"
  },
  {
    heading: "Heading 5",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. oribus. Recusandae, vel deserunt sapiente quam rem ex doloribus ad, architecto consequatur saepe quasi veritatis tempora atque vero id molestiae distinctio inventore voluptas dolore laudantium qui natus? Accusantium praesentium temporibus magnam maxime, modi voluptatum minus aperiam?"
  },
  {
    heading: "Heading 6",
    paragraph:
      " Omnis odit tempora enim non. Dolorem, doloribus. Recusandae, vel deserunt sapiente quam rem ex doloribus ad, architecto consequatur saepe quasi veritatis tempora atque vero id molestiae distinctio inventore voluptas dolore laudantium qui natus? Accusantium praesentium temporibus magnam maxime, modi voluptatum minus aperiam?"
  }
];

let currentIndex = 0;

preswapButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = leftDivisions.length - 1;
  }
  updateLeftContent();
});

swapButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= leftDivisions.length) {
    currentIndex = 0;
  }
  updateLeftContent();
});

function updateLeftContent() {
  heading.textContent = leftDivisions[currentIndex].heading;
  paragraph.textContent = leftDivisions[currentIndex].paragraph;
}

//changing the background image of the section
// Define an array of background images
const backgroundImages = [
  "url('https://raw.githubusercontent.com/NK2552003/Dynamic_Landing_WebPage/main/Assets/1.jpg')",
  "url('https://raw.githubusercontent.com/NK2552003/Dynamic_Landing_WebPage/main/Assets/2.jpg')",
  "url('https://raw.githubusercontent.com/NK2552003/Dynamic_Landing_WebPage/main/Assets/3.jpg')",
  "url('https://raw.githubusercontent.com/NK2552003/Dynamic_Landing_WebPage/main/Assets/4.png')",
  "url('https://raw.githubusercontent.com/NK2552003/Dynamic_Landing_WebPage/main/Assets/5.jpg')",
  "url('https://raw.githubusercontent.com/NK2552003/Dynamic_Landing_WebPage/main/Assets/6.jpg')"
  // Add more image URLs as needed
];

// Initialize background index
let backgroundIndex = 0;

// Function to change background image
function changeBackgroundImage() {
  document.body.style.backgroundImage = backgroundImages[backgroundIndex];
  const boxe = document.getElementsByClassName("box");
  for (let i = 0; i < boxe.length; i++) {
    boxe[i].style.backgroundImage = backgroundImages[backgroundIndex];
  }
}

// Add event listeners to next and previous buttons
document.getElementById("swapButton").addEventListener("click", function () {
  // Increment background index
  backgroundIndex = (backgroundIndex + 1) % backgroundImages.length;
  // Change background image
  changeBackgroundImage();
});

document.getElementById("preswap").addEventListener("click", function () {
  // Decrement background index
  backgroundIndex =
    (backgroundIndex - 1 + backgroundImages.length) % backgroundImages.length;
  // Change background image
  changeBackgroundImage();
});

// Add event listener to document to capture keyboard events
document.addEventListener("keydown", function (event) {
  // Check if right arrow key is pressed
  if (event.key === "ArrowRight") {
    currentIndex++;
    if (currentIndex >= leftDivisions.length) {
      currentIndex = 0;
    }
    updateLeftContent();

    var boxes = document.querySelectorAll(".right .box");

    // Create an array to store the heights of the boxes
    var heights = [];
    boxes.forEach(function (box) {
      heights.push(box.clientHeight); // Using clientHeight to get the height
    });

    // Swap the heights of the boxes
    boxes.forEach(function (box, index) {
      box.style.height = heights[(index + 1) % heights.length] + "px";
    });
    backgroundIndex = (backgroundIndex + 1) % backgroundImages.length;
    changeBackgroundImage();
  }
  // Check if left arrow key is pressed
  else if (event.key === "ArrowLeft") {
    var boxes = document.querySelectorAll(".right .box");

    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = leftDivisions.length - 1;
    }
    updateLeftContent();

    // Create an array to store the heights of the boxes
    var heights = [];
    boxes.forEach(function (box) {
      heights.push(box.clientHeight); // Using clientHeight to get the height
    });

    // Swap the heights of the boxes
    boxes.forEach(function (box, index) {
      box.style.height = heights[(index + 1) % heights.length] + "px";
    });
    backgroundIndex =
      (backgroundIndex - 1 + backgroundImages.length) % backgroundImages.length;
    changeBackgroundImage();
  }
});

window.addEventListener("load", function () {
  const boxes = document.querySelectorAll(".right .box");
  boxes.forEach(function (box) {
    box.addEventListener("mouseover", function () {
      box.style.height = "640px";
    });
    box.addEventListener("mouseout", function () {
      box.style.height = "";
    });
  });
});

// Initial background image
changeBackgroundImage();