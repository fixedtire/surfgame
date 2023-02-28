// ----- ASSIGN ELEMENTS TO VARIABLES ---- //

const surfboard = document.getElementById("surfboard");

const white_water1 = document.getElementById("white_water1");
const white_water2 = document.getElementById("white_water2");
const white_water3 = document.getElementById("white_water3");
const white_water4 = document.getElementById("white_water4");
const white_water5 = document.getElementById("white_water5");
const white_water6 = document.getElementById("white_water6");

const bottles = document.getElementById("bottles");

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

// ------ KEY ASSIGNMENT AND FUNCTIONS (arrowLeft + arrowRight) -----------

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
    console.log("BOOM!");
    alert("WIPEOUUUT!");
  }
};

// ------ checks for Collisions every 100 ms  ------

window.setInterval(checkCollision, 100);
