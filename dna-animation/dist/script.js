const dnaContainer = document.getElementById("dnaContainer");
const nucleotides = 15;
const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#F7DC6F"];

function createNucleotidePair(index) {
  const pair = document.createElement("div");
  pair.className = "nucleotide-pair";
  pair.style.top = `${(index / (nucleotides - 1)) * 100}%`;
  pair.style.animationDelay = `-${index * 1.33}s`;

  const left = document.createElement("div");
  left.className = "nucleotide left";
  left.style.backgroundColor = colors[index % colors.length];
  left.style.animationDelay = `-${index * 0.2}s`;

  const right = document.createElement("div");
  right.className = "nucleotide right";
  right.style.backgroundColor = colors[(index + 1) % colors.length];
  right.style.animationDelay = `-${index * 0.2 + 0.1}s`;

  const backbone = document.createElement("div");
  backbone.className = "backbone";

  pair.appendChild(left);
  pair.appendChild(right);
  pair.appendChild(backbone);
  dnaContainer.appendChild(pair);
}

function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  const size = Math.random() * 2 + 1;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const tx = Math.random() * 20 - 10;
  const ty = Math.random() * 20 - 10;
  particle.style.setProperty("--tx", `${tx}px`);
  particle.style.setProperty("--ty", `${ty}px`);

  particle.style.animation = `float ${
    Math.random() * 3 + 2
  }s ease-in-out infinite`;
  dnaContainer.appendChild(particle);
}

for (let i = 0; i < nucleotides; i++) {
  createNucleotidePair(i);
}

//floating particles
for (let i = 0; i < 100; i++) {
  createParticle();
}