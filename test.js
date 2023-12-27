const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const timer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;

let seconds1 = 0;
let minutes1 = 0;
let hours1 = 0;

let timeStatus = "stopped";

function startInterval() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    seconds1 = "0" + seconds.toString();
  } else {
    seconds1 = seconds.toString();
  }

  if (minutes < 10) {
    minutes1 = "0" + minutes.toString();
  } else {
    minutes1 = minutes.toString();
  }

  if (hours < 10) {
    hours1 = "0" + hours.toString();
  } else {
    hours1 = hours.toString();
  }

  timer.innerHTML = hours1 + ":" + minutes1 + ":" + seconds1;
}

playBtn.addEventListener("click", function () {
  if (timeStatus === "stopped") {
    timeInterval = window.setInterval(startInterval, 100);
    playBtn.innerHTML = '<i class="fa-solid fa-play" id="play">⏸️</i>';
  } else {
    window.clearInterval(timeInterval);
    timeStatus = "started";
  }
});

stopBtn.addEventListener("click", function () {
  // if (timeStatus === "started") {
  window.clearInterval(timeInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
  playBtn.innerHTML = '<i class="fa-solid fa-play" id="play">▶</i>';
});
