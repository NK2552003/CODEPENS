let scene, camera, renderer, particles;
const count = 5000;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 50;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  createParticles();

  window.addEventListener("resize", onWindowResize, false);

  animate();
}

function createParticles() {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = Math.random() * 50 - 25;
    positions[i3 + 1] = Math.random() * 50 - 25;
    positions[i3 + 2] = Math.random() * 50 - 25;

    const color = new THREE.Color();
    color.setHSL(i / count, 1, 0.5);
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
    transparent: true,
    opacity: 0.8
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);
}

function animate() {
  requestAnimationFrame(animate);

  const time = Date.now() * 0.001;
  particles.rotation.y = time * 0.05;

  const positions = particles.geometry.attributes.position.array;
  const colors = particles.geometry.attributes.color.array;

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const x = positions[i3];
    const y = positions[i3 + 1];
    const z = positions[i3 + 2];

    const factor = 20 + Math.random() * 100;
    const speed = 0.01 + Math.random() / 200;

    positions[i3] = x + Math.cos((time + x * 10) / factor) * speed;
    positions[i3 + 1] = y + Math.sin((time + y * 10) / factor) * speed;
    positions[i3 + 2] = z + Math.cos((time + z * 10) / factor) * speed;

    const hue = (time * 0.1 + i / count) % 1;
    const color = new THREE.Color().setHSL(hue, 1, 0.5);
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  particles.geometry.attributes.position.needsUpdate = true;
  particles.geometry.attributes.color.needsUpdate = true;

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();