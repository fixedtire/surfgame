// ----- ASSIGN ELEMENTS TO VARIABLES ---- //

const surfboard = document.getElementById("surfboard");

const white_water1 = document.getElementById("white_water1");
const white_water2 = document.getElementById("white_water2");
const white_water3 = document.getElementById("white_water3");
const white_water4 = document.getElementById("white_water4");
const white_water5 = document.getElementById("white_water5");
const white_water6 = document.getElementById("white_water6");

const bottles = document.getElementById("bottles");

const wipeout = document.getElementById("wipeout");

const game_over = document.getElementById("game_over");

const lifeAmount = document.getElementById("life_amount");

// ----- CREATING VARIABLE FOR LIFE AMOUNT ------ //

let life = 3;

// ----- ASSIGN LIFE AMOUNT TO HTML CONTENT ------ //

lifeAmount.textContent = life;

// ----- WHITE WAVE ANIMATION ------ //

let waveInterval = 500;

function enableWaveAnimation() {
  white_water1.style.display = "none";
  white_water2.style.display = "none";
  white_water3.style.display = "none";
  white_water4.style.display = "none";
  white_water5.style.display = "none";
  white_water6.style.display = "none";
  setInterval(addWaveAnimation1, waveInterval);
}

function addWaveAnimation1() {
  white_water1.style.display = "block";
  setInterval(addWaveAnimation2, waveInterval);
}

function addWaveAnimation2() {
  white_water2.style.display = "block";
  setInterval(addWaveAnimation3, waveInterval);
}

function addWaveAnimation3() {
  white_water3.style.display = "block";
  setInterval(addWaveAnimation4, waveInterval);
}

function addWaveAnimation4() {
  white_water4.style.display = "block";
  setInterval(addWaveAnimation5, waveInterval);
}

function addWaveAnimation5() {
  white_water5.style.display = "block";
  setInterval(addWaveAnimation6, waveInterval);
}

function addWaveAnimation6() {
  white_water6.style.display = "block";
  setInterval(enableWaveAnimation, waveInterval);
}

enableWaveAnimation();

// ------ KEY ASSIGNMENT AND FUNCTIONS (arrowUp + arrowDown) -----------

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 38) {
    moveUp();
  } else if (e.keyCode == 40) {
    moveDown();
  }
});

let valueY = 0;

function moveUp() {
  valueY -= 10;
  surfboard.style.transform = `translateY(${valueY}px)`;
}

function moveDown() {
  valueY += 10;
  surfboard.style.transform = `translateY(${valueY}px)`;
}

// -------  CHECK IF ELEMENTS COLLIDE --------

const checkCollision = () => {
  const surfboardRect = surfboard.getBoundingClientRect();
  const bottlesRect = bottles.getBoundingClientRect();

  if (
    surfboardRect.x < bottlesRect.x + bottlesRect.width &&
    surfboardRect.x + surfboardRect.width > bottlesRect.x &&
    surfboardRect.y < bottlesRect.y + bottlesRect.height &&
    surfboardRect.y + surfboardRect.height > bottlesRect.y
  ) {
    // STOPS ANIMATION OF OBJECT
    bottles.style.animation = "none";
    // SHOWS WIPEOUT MESSAGE
    wipeout.style.display = "block";
  }
};

// -------  CHECK IF GAME OVER --------

const checkGameOver = () => {
  if (life === 0) {
    wipeout.style.display = "block";
  }
};

// -------  START SURFBOARD ANIMATION --------

const animateBoard = () => {
  bottles.style.animation =
    "moveBottles 5s ease-in-out infinite, blink 1s ease-in-out infinite alternate";
};

// ------- FUNCTION THAT START WHEN 'OK' (INFOBOX) IS CLICKED

const hideBox = () => {
  // animates board again
  animateBoard();
  // hides info box
  wipeout.style.display = "none";
  // checking for new collisions
  setInterval(checkCollision, 100);
  // removes one heart
  life -= 1;
  // displays updated life amount
  lifeAmount.textContent = life;
};

// ------ checks for Collisions every 100 ms  ------

window.setInterval(checkCollision, 100);
