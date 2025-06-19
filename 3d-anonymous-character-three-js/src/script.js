import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let scene, camera, renderer, model, pointLight;
let mouseX = 0,
  lastMouseMoveTime = 0;
const usedPositions = [],
  maxAttempts = 300;
const englishCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+=:;?/|";
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F1C40F",
  "#E67E22",
  "#E74C3C",
  "#8E44AD",
  "#3498DB",
  "#2ECC71",
  "#1ABC9C",
  "#9B59B6",
  "#34495E",
  "#16A085",
  "#27AE60",
  "#2980B9",
  "#F39C12",
  "#D35400",
  "#C0392B",
  "#7F8C8D",
  "#2C3E50",
  "#95A5A6"
];

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkOverlap(x, y, size) {
  return usedPositions.some(
    (pos) => Math.hypot(pos.x - x, pos.y - y) < (pos.size + size) / 2
  );
}

function createRandomCharacter(selectedFont = "Distrela") {
  const char = document.createElement("div");
  char.className = "char";
  const characters = englishCharacters; // Ensuring characters are always defined
  char.innerText = characters[generateRandom(0, characters.length - 1)];

  const size = generateRandom(20, 100);
  char.style.cssText = `
        font-size: ${size}px;
        font-family: ${selectedFont};
        color: ${colors[generateRandom(0, colors.length - 1)]};
        opacity: ${Math.random() * 0.5 + 0.2};
        position: absolute;
    `;

  let x,
    y,
    attempts = 0;
  do {
    x = generateRandom(0, window.innerWidth - size);
    y = generateRandom(0, window.innerHeight - size);
  } while (checkOverlap(x, y, size) && ++attempts < maxAttempts);

  if (attempts < maxAttempts) {
    usedPositions.push({ x, y, size });
    char.style.left = `${x}px`;
    char.style.top = `${y}px`;
    char.style.transform = `rotate(${generateRandom(0, 360)}deg)`;
    document.body.appendChild(char);
  }
}

function generateCharacters() {
  document.querySelectorAll(".char").forEach((el) => el.remove());
  usedPositions.length = 0;
  for (let i = 0; i < 100; i++) createRandomCharacter();
}

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const section = document.querySelector(".section1");
  if (section) section.appendChild(renderer.domElement);
  else console.error("Section with class .section1 not found");

  camera.position.z = 5;
  scene.add(new THREE.AmbientLight(0x404040, 2));

  pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(0, 0, 5);
  scene.add(pointLight);

  new OrbitControls(camera, renderer.domElement).enableZoom = false;

  new GLTFLoader().load(
    "https://raw.githubusercontent.com/NK2552003/3d-obj/main/base_basic_shaded.glb",
    (gltf) => {
      model = gltf.scene;
      scene.add(model);
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center).setY(-2.5).setX(0);
      model.rotation.y = -Math.PI / 7;

      const scale = 4 / Math.max(...box.getSize(new THREE.Vector3()).toArray());
      model.scale.multiplyScalar(scale);

      generateCharacters();
    },
    undefined,
    (error) => console.error("Model loading error:", error)
  );

  document.addEventListener("mousemove", onMouseMove);
  window.addEventListener("resize", onWindowResize);
}

function onMouseMove(event) {
  const now = Date.now();
  if (now - lastMouseMoveTime < 16) return;
  lastMouseMoveTime = now;

  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  pointLight.position.set(mouseX * 5, 2, 2);
  if (model) model.rotation.y += mouseX * 0.05;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();
animate();
