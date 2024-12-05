function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = num1 + num2;
  document.getElementById('result').textContent = 'Result: ' + result;
}
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('model3d').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
// Example quiz code (basic version)
document.querySelector('.quiz').innerHTML = `
  <label for="answer">What is 2 + 2?</label>
  <input type="number" id="answer">
  <button onclick="checkAnswer()">Submit</button>
  <p id="quizResult"></p>
`;

function checkAnswer() {
  const answer = document.getElementById('answer').value;
  const result = (parseInt(answer) === 4) ? "Correct!" : "Wrong answer, try again!";
  document.getElementById('quizResult').textContent = result;
}
