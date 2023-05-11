const bird = document.getElementById('bird');
const pipeTop = document.getElementById('pipeTop');
const pipeBottom = document.getElementById('pipeBottom');
const score = document.getElementById('score');
const startButton = document.getElementById('startButton');
const game = document.getElementById('game');

let gameStarted = false;
let birdPosition = 200;
let birdVelocity = 0;
let pipePosition = 350;
let scoreCount = 0;

function update() {
	// Move bird
	birdPosition += birdVelocity;
	birdVelocity += 0.5;
	bird.style.top = birdPosition + 'px';

	// Move pipes
	pipePosition -= 5;
	if (pipePosition < -60) {
		pipePosition = 350;
		pipeTop.style.height = Math.floor(Math.random() * 200) + 50 + 'px';
	}

	pipeTop.style.left = pipePosition + 'px';
	pipeBottom.style.left = pipePosition + 'px';

	// Check for collisions
	if (birdPosition < 0 || birdPosition > 360 ||
		(pipePosition < 90 && birdPosition < pipeTop.offsetHeight) ||
		(pipePosition < 90 && birdPosition > 360 - pipeBottom.offsetHeight)) {
		endGame();
	}

	// Update score
	if (pipePosition === 150) {
		scoreCount++;
		score.innerHTML = scoreCount;
	}
}

function startGame() {
	gameStarted = true;
	startButton.style.display = 'none';
	setInterval(update, 20);
}
