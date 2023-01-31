// ----- ASSIGN ELEMENTS TO VARIABLES ---- //

const surfboard = document.getElementById("surfboard");

const white_water1 = document.getElementById("white_water1");
const white_water2 = document.getElementById("white_water2");
const white_water3 = document.getElementById("white_water3");
const white_water4 = document.getElementById("white_water4");
const white_water5 = document.getElementById("white_water5");
const white_water6 = document.getElementById("white_water6");

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

/*
document.onkeydown = function (event) {
  const elementToMove = document.getElementById("surfboard");
  if ((event.keyCode = "38")) {
    elementToMove.style.top = parseInt(surfboard.style.top || 0) - 10 + "px";
  } else if ((event.keyCode = "40")) {
    elementToMove.style.bottom =
      parseInt(surfboard.style.bottom || 0) - 10 + "px";
  }
}; 

document.addEventListener("keydown", (e) => {
  const elementToMove = document.getElementById("surfboard");
  e = e || window.event;
  if (e.key === "ArrowUp") {
    elementToMove.style.top = parseInt(surfboard.style.top || 0) - 10 + "px";
  } else if (e.key === "ArrowDown") {
    elementToMove.style.bottom =
      parseInt(surfboard.style.bottom || 0) - 10 + "px";
  }
});



window.addEventListener("keydown", () => {
  if (event.keyCode == 38) {
    moveUp();
  } else if (event.keyCode == 40) {
    moveDown();
  }
});

function moveUp() {
  surfboard.style.top = parseInt(surfboard.style.top || 0) - 10 + "px";
}

function moveDown() {
  surfboard.style.bottom = parseInt(surfboard.style.bottom || 0) - 10 + "px";
}

/* function jump() {
  if (avatar.classList != "animate") {
    avatar.classList.add("animate");
  }
  setTimeout(function () {}, 500);
  avatar.classList.remove("animate");
}

var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    block.style.animation = "none";
    alert("Game Over. score: " + Math.floor(counter / 100));
    counter = 0;
    block.style.animation = "block 1s infinite linear";
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);*/
